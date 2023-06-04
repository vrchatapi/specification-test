/* eslint-disable @typescript-eslint/no-non-null-assertion */

import totpGenerator from "totp-generator";

import { test, testOperation } from "./_utilities";
import { sensitiveValues, state, unstableValues } from "./_cache";
import { vrchatEmail, vrchatPassword, vrchatTotpSecret, vrchatUsername } from "./_consts";
import { unstableUserKeys } from "./_users";

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
	() => ({
		verbose: false,
		statusCode: 200,
		security: {
			authHeader: btoa(`${vrchatUsername}:${vrchatPassword}`)
		}
	})
);

test.serial(testOperation, "verify2FA", () => {
	const code = totpGenerator(vrchatTotpSecret);
	unstableValues.add(code);

	return {
		statusCode: 200,
		requestBody: {
			code
		}
	};
});

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
		statusCode: 200,
		unstable: unstableUserKeys
	},
	(t) => {
		const { body } = t.context;
		state.set("current-user", body);

		sensitiveValues.add(body.obfuscatedEmail);
		sensitiveValues.add(body.obfuscatedPendingEmail);

		t.is(body.username, vrchatUsername);
	}
);

test.serial("with zero parameters", testOperation, "checkUserExists", {
	statusCode: 400
});

test.serial(
	"via email address",
	testOperation,
	"checkUserExists",
	{
		statusCode: 200,
		parameters: {
			email: vrchatEmail
		}
	},
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
			displayName: state.get("current-user").displayName
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
