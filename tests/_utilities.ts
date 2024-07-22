/* eslint-disable require-atomic-updates */
import util from "node:util";
import fs from "node:fs/promises";
import path from "node:path";

import withCookie from "fetch-cookie";
import { capitalCase } from "change-case";
import yaml from "yaml";
import { $RefParser } from "@apidevtools/json-schema-ref-parser";
import testFn, {
	type ExecutionContext,
	type ImplementationFn,
	type TestFn
} from "ava";
import {
	type Schema,
	parser,
	type ParseResult,
	type ValidationError
} from "@exodus/schemasafe";
import ms from "ms";
import { Cookie, type CookieJar } from "tough-cookie";
import objectPath from "object-path";
import jsonpointer from "jsonpointer";

import {
	cache,
	sensitiveValues,
	state,
	tryJsonParse,
	tryStringify,
	unstableValues
} from "./_cache.js";
import { debug, methods, requestRateLimit, version } from "./_consts.js";

import type { OpenAPIV3 } from "openapi-types";

util.inspect.defaultOptions.depth = 4; // Increase AVA's printing depth

export type Specification = OpenAPIV3.Document;

let _specification: Specification | null = null;

export async function getSpecification() {
	if (_specification) return _specification;

	const specification = (await $RefParser.dereference(
		yaml.parse(await fs.readFile("./openapi.yaml", "utf8"))
	)) as Specification;

	_specification = specification;

	return specification;
}

export type Operation = OpenAPIV3.OperationObject<{
	method: string;
	path: string;
}>;
export type Operations = Record<string, Operation>;

let _operations: Operations | null = null;

export async function getOperations(specification: Specification) {
	if (_operations) return _operations;

	const operations = Object.fromEntries(
		Object.entries(specification.paths).flatMap(([path, route]) => {
			if (!route) return [];

			return methods
				.map((method) => {
					const operation = route[method];
					if (!operation) return;

					return [
						operation.operationId,
						{
							method,
							path,
							...operation,
							parameters: [
								...(route.parameters ?? []),
								...(operation.parameters ?? [])
							]
						}
					];
				})
				.filter(Boolean);
		}) as Array<[string, Operation]>
	) as Operations;

	_operations = operations;

	return operations;
}

function normalizeSchema(schema: OpenAPIV3.SchemaObject): Schema {
	const schemaType = schema.type;
	if (!schemaType) throw new Error("Schema missing type");

	const newSchema: Schema = { ...schema };

	// JSON Schema doesn't support the nullable keyword, so we have to convert it to a union type.
	if (schema.nullable) {
		newSchema.type = [schemaType, "null"];
		// @ts-expect-error: Nullable is not in the schema type
		delete newSchema.nullable;
	}

	if (schemaType === "object") {
		if (schema.properties) {
			newSchema.properties = Object.fromEntries(
				Object.entries(schema.properties).map(([key, value]) => {
					if (!value || !("type" in value)) return [];

					return [key, normalizeSchema(value)];
				})
			);
		}
		newSchema.additionalProperties = false;
	} else if (schemaType === "array") {
		if (schema.items && "type" in schema.items) {
			newSchema.items = normalizeSchema(schema.items);
		}

		newSchema.additionalItems = false;
	} else {
		// JSON Schema doesn't support the int64 format, so we have to remove it.
		if (newSchema.format === "int64") delete newSchema.format;
	}

	return newSchema;
}

function parseSchema(schema: OpenAPIV3.SchemaObject, value: string) {
	const newSchema = normalizeSchema(schema);

	try {
		return parser(newSchema, {
			allErrors: true,
			includeErrors: true,
			mode: "lax"
		})(value);
	} catch (reason) {
		const error = reason instanceof Error ? reason.message : String(reason);
		return { error, errors: [], valid: false } satisfies ParseResult;
	}
}

let lastRequestAt: number | null = null;

export async function fetch(
	t: ExecutionContext<TestContext>,
	url: URL,
	options: RequestInit = {}
): Promise<Response | null> {
	const sinceLastRequest = lastRequestAt
		? performance.now() - lastRequestAt
		: 0;

	if (sinceLastRequest < requestRateLimit) {
		const delay = requestRateLimit - sinceLastRequest;

		// Voluntarily wait a bit before making the request.
		await new Promise((resolve) => setTimeout(resolve, delay));
	}

	if (debug) t.log(options.method, url.href);

	let response: Response | null = null;
	let attempt: Awaited<ReturnType<typeof t.try>> | null = null;

	for (let index = 0; index < 10; index++) {
		attempt = await t.try(`Request attempt #${index + 1}`, async (t) => {
			response = await t.context.fetchWithCookie(url, options);
			lastRequestAt = performance.now();

			// We're getting forcefully rate limited, so we need to wait a bit.
			t.not(response.status, 429);
		});

		const { cookies } = await t.context.cookieJar.serialize();
		state.set(
			"cookies",
			Object.assign(
				state.get("cookies") ?? {},
				Object.fromEntries(cookies.map((cookie) => [cookie.key, cookie]))
			)
		);

		if (attempt.passed) {
			if (index > 0) t.log(`Request attempt #${index + 1} succeeded`);

			attempt.commit();
			break;
		}

		attempt.discard();

		// Exponential back off, starting at 1 second.
		const backoff = requestRateLimit * Math.pow(2, index);

		t.log(
			`Request attempt #${index + 1} rate limited, waiting ${ms(backoff, { long: true })}...`
		);
		await new Promise((resolve) => setTimeout(resolve, backoff));
	}

	if (!response || !attempt?.passed) return response;
	return response;
}

export interface TestContext {
	testGroup: string;
	specification: Specification;
	operations: Operations;
	fetchWithCookie: typeof globalThis.fetch;
	cookieJar: CookieJar;
	response?: Response;

	body?: any;
	schema?: OpenAPIV3.SchemaObject;
	schemaIssues?: Array<ValidationError>;
	failLogs?: Array<Array<any>>;
}

export const test = testFn as TestFn<TestContext>;

function failLog(t: ExecutionContext<TestContext>, ...values: Array<any>) {
	t.context.failLogs ??= [];
	t.context.failLogs.push(values);

	t.log(...values);
	t.fail(values.map(tryStringify).join(" "));
}

const redactedResponseHeaders = ["etag", "set-cookie"];
const unstableResponseHeaders = new Set([
	"date",
	"cf-ray",
	"cf-cache-status",
	"age",
	"x-powered-by",
	"x-jobs",
	"last-modified",
	"content-encoding",
	"via",
	"x-amz-cf-id",
	"x-amz-cf-pop",
	"x-amz-server-side-encryption",
	"x-cache",
	"x-vrc-api-group",
	"x-vrc-api-server",
	"x-vrc-api-version"
]);

function normalizeTestTitle(title: string) {
	return title.toLowerCase().replaceAll(" ", "-");
}

test.before(async (t) => {
	const testGroup = path.basename(test.meta.file, path.extname(test.meta.file));

	const specification = await getSpecification();
	const operations = await getOperations(specification);
	state.set("operations", operations);

	t.log(
		`Running tests against: ${version}, using specification version: ${specification.info.version}.`
	);

	const cookieJar = new withCookie.toughCookie.CookieJar();
	const fetchWithCookie = withCookie(globalThis.fetch, cookieJar);

	const cookies = Object.values(
		(state.get("cookies") ?? []) as Record<string, Cookie.Properties>
	);
	for (const cookie of cookies) {
		await cookieJar.setCookie(
			Cookie.fromJSON(cookie)!,
			new URL(`https://${cookie.domain!}`).href
		);
		sensitiveValues.add(cookie.value!);
	}

	if (cookies.length > 0)
		t.log(`Cookie jar initialized with ${cookies.length} cookies.`);
	Object.assign(t.context, {
		cookieJar,
		fetchWithCookie,
		operations,
		specification,
		testGroup
	});
});

test.after.always(async (t) => {
	const groupOperations = Object.entries(t.context.operations).filter(
		([, operation]) => operation.tags?.includes(t.context.testGroup)
	);

	const completeTests =
		state.get<Record<string, Array<string>>>(`tests-${t.context.testGroup}`) ??
		[];

	cache.set(
		"requests",
		`${t.context.testGroup}/readme.md`,
		`# ${capitalCase(t.context.testGroup)}

${groupOperations
	.map(([operationId, operation]) => {
		const [, completedGroupTests] = Object.entries(completeTests).find(
			([completedOperationId]) => completedOperationId === operationId
		) ?? [null, []];

		return `## ${operation.summary}
${operation.description ?? ""}
${
	completedGroupTests.length > 0
		? completedGroupTests
				.map((test) => `* [${test}](./${normalizeTestTitle(test)}.md)`)
				.join("\n")
		: `> Missing coverage.`
}
`;
	})
	.join("\n")}
	`
	);
});

const noop = () => {};

type RequestOptions = Omit<RequestInit, "headers"> & {
	headers?: Record<string, string>;
	baseUrl?: string;
};

interface FetchOperationOptions {
	requestOptions?: RequestOptions;
	parameters?: Record<string, unknown>;
	security?: Record<string, unknown>;
	requestBody?: unknown;
}

type TestOperationOptions = {
	unstable?: boolean | Array<string>;
	sensitive?: boolean;
	statusCode: number;
} & FetchOperationOptions;

type TestOperationArguments = [
	operationId: string,
	options:
		| TestOperationOptions
		| ((t: ExecutionContext<TestContext>) => TestOperationOptions),
	fn?: ImplementationFn<[], Required<TestContext>>
];

export const failUnauthenticated = (t: ExecutionContext<TestContext>) => {
	const cookies = t.context.cookieJar.serializeSync().cookies;
	if (!state.get("current-user") || cookies.length === 0)
		t.fail("Missing authenticated user");
};
const resolveOptions = (
	t: ExecutionContext<TestContext>,
	options:
		| TestOperationOptions
		| ((t: ExecutionContext<TestContext>) => TestOperationOptions)
) => {
	return Object.assign(
		{
			parameters: {},
			requestOptions: {},
			security: {},
			unstable: false
		},
		typeof options === "function" ? options(t) : options
	);
};

const keywordMessages = {
	additionalProperties: "Unexpected property",
	enum: "Cannot fit value in explicit enum",
	required: "Missing property",
	type: "Invalid type"
};

export async function fetchOperation(
	t: ExecutionContext<TestContext>,
	operation: Operation,
	options: FetchOperationOptions = {}
) {
	const {
		parameters = {},
		security = {},
		requestBody,
		requestOptions = {}
	} = options;
	const { specification } = t.context;

	const baseUrl = requestOptions.baseUrl ?? specification.servers![0].url;

	const url = new URL(baseUrl + operation.path);
	requestOptions.headers ??= {};
	requestOptions.headers!["user-agent"] ??=
		`specification-test/@${version} https://github.com/vrchatapi/specification-test/issues/new`;

	const parameterKeys = Object.keys(parameters);
	if (!operation.parameters && parameterKeys.length > 0)
		return failLog(
			t,
			`Operation has no parameters defined, expected "${parameterKeys.join(", ")}"`
		);

	for (const [name, value] of Object.entries(parameters)) {
		const parameter = operation.parameters?.find(
			(parameter) => "name" in parameter && parameter.name === name
		);

		if (!parameter || !("in" in parameter))
			return failLog(t, `Parameter "${name}" not defined`);

		switch (parameter.in) {
			case "query": {
				url.searchParams.set(name, String(value));
				break;
			}
			case "path": {
				url.pathname = url.pathname.replace(
					encodeURIComponent(`{${name}}`),
					String(value)
				);
				break;
			}
			default: {
				return failLog(
					t,
					`Parameter "${name}" with type "${parameter.in}" not supported`
				);
			}
		}
	}

	const securityKeys = Object.keys(security);
	if (!operation.security && securityKeys.length > 0)
		return failLog(
			t,
			`Operation has no security defined, expected "${securityKeys.join(", ")}"`
		);

	for (const [name, value] of Object.entries(security)) {
		const security = specification.components?.securitySchemes?.[name];
		sensitiveValues.add(String(value));

		if (!security || !("type" in security))
			return failLog(t, `Security scheme "${name}" not defined`);

		switch (security.type) {
			case "http": {
				if (security.scheme !== "basic")
					return failLog(t, `Security scheme "${name}" not supported`);

				requestOptions.headers = {
					authorization: `Basic ${value}`
				};
				break;
			}
			case "apiKey": {
				return failLog(t, `Security scheme "${name}" not supported`);
			}
			default: {
				return failLog(
					t,
					`Security scheme "${name}" with type "${security.type}" not supported`
				);
			}
		}
	}

	if (requestBody !== undefined) {
		if (!operation.requestBody || !("content" in operation.requestBody))
			return failLog(
				t,
				`Operation has no request body defined but got "${tryStringify(requestBody)}"`
			);

		const mediaType = operation.requestBody.content["application/json"];
		if (!mediaType || !mediaType.schema || !("type" in mediaType.schema))
			return failLog(
				t,
				`Operation request body media type "application/json" not defined`
			);

		const { error, value } = parseSchema(
			mediaType.schema,
			tryStringify(requestBody)
		);

		if (error) {
			t.log("Request body schema mismatch:", error);
			t.fail(
				`Request body doesn't conform to ${
					("title" in mediaType.schema && mediaType.schema.title) ?? "schema"
				}`
			);
		}

		requestOptions.body = tryStringify(value);

		requestOptions.headers!["content-type"] = "application/json";
	}

	requestOptions.headers!["cookie"] = t.context.cookieJar.getCookieStringSync(
		url.href
	);

	requestOptions.method = operation.method;

	const response = await fetch(t, url, requestOptions);
	if (!response) return null;

	return {
		requestOptions,
		response,
		url
	};
}

export const testOperation = test.macro<TestOperationArguments>({
	async exec(t, operationId, _options, function_ = noop) {
		const options = resolveOptions(t, _options);
		const { operations } = t.context;

		const operation = operations[operationId];
		t.assert(operation, `Operation ${operationId} not defined`);

		const operationResponse = operation.responses?.[options.statusCode];
		t.assert(
			operationResponse,
			`Operation response with status code ${options.statusCode} not defined`
		);

		const result = await fetchOperation(t, operation, options);
		if (!result) return failLog(t, `Request failed`);

		const { response, requestOptions, url } = result;

		for (const cookie of await t.context.cookieJar.getCookies(url.href)) {
			sensitiveValues.add(cookie.value!);
		}

		for (const redactedResponseHeader of redactedResponseHeaders) {
			const value = response.headers.get(redactedResponseHeader);
			if (value)
				sensitiveValues.add(value.replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&"));
		}

		t.context.response = response;
		t.is(response.status, options.statusCode, "Unexpected status code");

		const contentType =
			response.headers.get("content-type") ?? "application/json";
		const body = await response.text();

		t.teardown(async () => {
			const maybeJsonBody = tryJsonParse(body);
			if (
				typeof maybeJsonBody === "object" &&
				maybeJsonBody &&
				Array.isArray(options.unstable)
			) {
				options.unstable.map((unstableKey) => {
					const value = objectPath.get(maybeJsonBody, unstableKey);
					if (value)
						objectPath.set(
							maybeJsonBody,
							unstableKey,
							`<unstable: ${Array.isArray(value) ? "array" : typeof value}>`
						);
				});
			}

			const completeTests =
				state.get<Record<string, Array<string>>>(
					`tests-${t.context.testGroup}`
				) ?? [];
			state.set(`tests-${t.context.testGroup}`, {
				...completeTests,
				[operationId]: [
					...new Set([...(completeTests[operationId] ?? []), t.title])
				]
			});

			const responseText =
				options.unstable === true
					? "<unstable>"
					: options.sensitive === true
						? "<redacted>"
						: JSON.stringify(maybeJsonBody, null, 2)
								.split("\n")
								.flatMap((line) => {
									const key = line.match(/"([^"]+)":/)?.[1];
									const issue = t.context.schemaIssues?.find(
										({ instanceLocation }) =>
											instanceLocation.split("/").pop() === key
									);

									// Remove issue from schema issues so we don't log it again.
									if (issue)
										t.context.schemaIssues?.splice(
											t.context.schemaIssues.indexOf(issue),
											1
										);

									const whitespace = line.match(/^(\s*)/)?.[1] ?? "";
									if (!issue || !t.context.schema) return line;

									const keyword = issue.keywordLocation.split("/").pop();

									const keywordMessage =
										(keyword &&
											keywordMessages[
												keyword as keyof typeof keywordMessages
											]) ??
										keyword;

									const keySchema = jsonpointer.get(
										t.context.schema,
										issue.keywordLocation
											.replace("#", "")
											.split("/")
											.slice(0, -1)
											.join("/")
									);

									return [
										`${whitespace}/**`,
										`${whitespace} * ${keywordMessage}.`,
										`${whitespace} *`,
										`${whitespace} * @schema ${keySchema?.title ?? "unknown"}`,
										`${whitespace} * @keyword ${keyword}`,
										`${whitespace} *`,
										`${whitespace} * ${issue.keywordLocation}`,
										`${whitespace} * ${issue.instanceLocation}`,
										`${whitespace} */`,
										line
									];
								})
								.join("\n");

			cache.set(
				"requests",
				`${t.context.testGroup}/${normalizeTestTitle(t.title)}.md`,
				unstableValues.sanitize(
					sensitiveValues.sanitize(`# ${t.title}
${
	t.context.failLogs
		? `
## Issues
${t.context.failLogs
	.map(
		(v) => `\`\`\`
${v}
\`\`\``
	)
	.join("\n")}
`
		: ""
}
## Request
\`${requestOptions.method} ${url.href}\`

| Header | Value |
| ------ | ----- |
${Object.entries(requestOptions.headers ?? {})
	.filter(([, value]) => !!value)
	.map(([name, value]) => `| ${name} | \`${value}\` |`)
	.join("\n")}
${requestOptions.body ? `\n\`\`\`json\n${requestOptions.body}\n\`\`\`\n` : ""}

## Response
\`${response.status} ${response.statusText}\`

| Header | Value |
| ------ | ----- |
${[...response.headers.entries()]
	.filter(([name]) => !unstableResponseHeaders.has(name))
	.map(
		([name, value]) =>
			`| ${name} | \`${redactedResponseHeaders.includes(name) ? "<redacted>" : value}\` |`
	)
	.join("\n")}

\`\`\`jsonc
${responseText}
\`\`\`
`)
				)
			);
		});

		const issues: Array<string> = [];

		if ("content" in operationResponse && operationResponse.content) {
			const mediaType = Object.entries(operationResponse.content).find(
				([type]) => contentType.startsWith(type)
			)?.[1];

			if (!mediaType)
				issues.push(`Response media type "${contentType}" not expected.`);

			if (mediaType) {
				if (!mediaType.schema || !("type" in mediaType.schema)) return t.pass();
				t.context.schema = mediaType.schema;

				const {
					error,
					value,
					errors = []
				} = parseSchema(mediaType.schema, body);
				t.context.body = value || tryJsonParse(body);

				if (error) {
					t.context.schemaIssues = errors;

					issues.push(
						`Response schema mismatch: ${
							errors.length > 0
								? errors
										.map((error) => {
											const keyword = error.keywordLocation.split("/").pop();
											const message = keyword
												? keywordMessages[
														keyword as keyof typeof keywordMessages
													]
												: `failed ${keyword}`;

											return `${message} at ${error.instanceLocation}`;
										})
										.join(", ")
								: error
						}.`
					);
				}
			} else {
				t.context.body = tryJsonParse(body);
			}
		}

		await function_(t as ExecutionContext<Required<TestContext>>);
		if (issues.length > 0) failLog(t, ...issues);
	},
	title: (title, operationId) => `${operationId}${title ? " " + title : ""}`
});
