/* eslint-disable @typescript-eslint/no-non-null-assertion */

import totpGenerator from "totp-generator";

import { test, testOperation } from "./_utilities";
import { state } from "./_cache";

test.serial.before(async (t) => {
	t.context.environment = {
		email: process.env.VRCHAT_EMAIL!,
		username: process.env.VRCHAT_USERNAME!,
		password: process.env.VRCHAT_PASSWORD!,
		totpSecret: process.env.VRCHAT_TOTP_SECRET!
	};

	t.assert(t.context.environment.email, "Missing VRCHAT_EMAIL environment variable");
	t.assert(t.context.environment.username, "Missing VRCHAT_USERNAME environment variable");
	t.assert(t.context.environment.password, "Missing VRCHAT_PASSWORD environment variable");
	t.assert(t.context.environment.totpSecret, "Missing VRCHAT_TOTP_SECRET environment variable");
});

test.serial("while missing credentials", testOperation, "getCurrentUser", {
	statusCode: 401
});

test.serial("while missing credentials", testOperation, "verify2FA", {
	statusCode: 401
});

test.serial.failing(
	"with username and password (expect fail)",
	testOperation,
	"getCurrentUser",
	({ context: { environment } }) => ({
		verbose: false,
		statusCode: 200,
		security: {
			authHeader: btoa(`${environment.username}:${environment.password}`)
		}
	})
);

test.serial(testOperation, "verify2FA", ({ context: { environment } }) => ({
	statusCode: 200,
	requestBody: {
		code: totpGenerator(environment.totpSecret)
	}
}));

test.serial(
	testOperation,
	"verifyAuthToken",
	{
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.ok, true);
	}
);

test.serial(
	"after two-factor authentication",
	testOperation,
	"getCurrentUser",
	{
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		state.set("current-user", body);

		t.is(body.username, t.context.environment.username);
	}
);

test.serial("with zero parameters", testOperation, "checkUserExists", {
	statusCode: 400
});

test.serial(
	"via email address",
	testOperation,
	"checkUserExists",
	({ context: { environment } }) => ({
		statusCode: 200,
		parameters: {
			email: environment.email
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.userExists, true);
	}
);

test.serial(
	"via display name",
	testOperation,
	"checkUserExists",
	() => ({
		statusCode: 200,
		parameters: {
			email: state.get("current-user").displayName
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.userExists, true);
	}
);

test.failing("via user id", testOperation, "checkUserExists", () => ({
	verbose: false,
	statusCode: 200,
	parameters: {
		userId: state.get("current-user").id
	}
}));

test.todo("Verify 2FA code with Recovery code");
test.todo("Verify 2FA email code");
test.todo("Logout");
test.todo("Delete User");
