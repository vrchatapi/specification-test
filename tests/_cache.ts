import path from "node:path";
import fs from "node:fs";

import {
	version,
	vrchatEmail,
	vrchatPassword,
	vrchatTotpSecret
} from "./_consts";

export function tryJsonParse(value: unknown): unknown {
	try {
		return JSON.parse(value as string);
	} catch {
		return value;
	}
}

export function tryStringify(value: unknown): string {
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}

// HACK: This allows us to maintain state between tests
// by writing to the filesystem.
export const cache = {
	get: (type: string, key: string) => {
		try {
			return fs.readFileSync(`./data/${type}/${key}`, "utf8");
		} catch {
			return null;
		}
	},
	set: (type: string, key: string, value: string) => {
		fs.mkdirSync(path.dirname(`./data/${type}/${key}`), { recursive: true });
		fs.writeFileSync(`./data/${type}/${key}`, value);
	}
};

export const state = {
	get: <T = any>(key: string): T => {
		const value = cache.get("state", `${key}.json`);
		if (value === null) return void 0 as never;

		return JSON.parse(value) as T;
	},
	set: <T>(key: string, value: T) =>
		cache.set("state", `${key}.json`, JSON.stringify(value, null, 2))
};

const defaultSensitiveValues = [vrchatEmail, vrchatPassword, vrchatTotpSecret];
defaultSensitiveValues.push(...defaultSensitiveValues.map(encodeURIComponent));

export const sensitiveValues = {
	add: (value: string) => {
		if (!value) return;

		const values = sensitiveValues.get();
		values.push(value, encodeURIComponent(value));

		state.set("sensitive-values", [...new Set(values)]);
	},
	get: (): Array<string> =>
		state.get("sensitive-values") ?? defaultSensitiveValues,
	sanitize: (value: string) =>
		sensitiveValues
			.get()
			.reduce(
				(accumulator, value_) => accumulator.replaceAll(value_, "<redacted>"),
				value
			)
};

const defaultUnstableValues = [version];
defaultUnstableValues.push(...defaultUnstableValues.map(encodeURIComponent));

export const unstableValues = {
	add: (value: string) => {
		if (!value) return;

		const values = unstableValues.get();
		values.push(value, encodeURIComponent(value));

		state.set("unstable-values", [...new Set(values)]);
	},
	get: () =>
		state.get<Array<string>>("unstable-values") ?? defaultUnstableValues,
	sanitize: (value: string) =>
		unstableValues
			.get()
			.reduce(
				(accumulator, value_) => accumulator.replaceAll(value_, "<unstable>"),
				value
			)
};
