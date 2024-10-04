import { TOTP } from "totp-generator";

import { test, testOperation } from "./_utilities.js";
import { sensitiveValues, state, unstableValues } from "./_cache.js";
import {
	vrchatEmail,
	vrchatPassword,
	vrchatTotpSecret,
	vrchatUsername
} from "./_consts.js";
import { unstableUserKeys } from "./_users.js";

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
		security: {
			authHeader: btoa(`${vrchatUsername}:${vrchatPassword}`)
		},
		statusCode: 200,
		verbose: false
	})
);

test.serial(testOperation, "verify2FA", () => {
	const { otp: code } = TOTP.generate(vrchatTotpSecret);
	unstableValues.add(code);

	return {
		requestBody: {
			code
		},
		statusCode: 200
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
		t.log(`Logged in as ${body.displayName} (${body.id})`);
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
		parameters: {
			email: vrchatEmail
		},
		statusCode: 200
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
		parameters: {
			displayName: state.get("current-user").displayName
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.userExists, true);
	}
);

test.serial("via username", testOperation, "checkUserExists", () => ({
	parameters: {
		username: state.get("current-user").username
	},
	statusCode: 200,
	verbose: false
}));

test.serial("logout", testOperation, "logout", () => ({ statusCode: 200 }));

test.serial(
	"log back in username and password after logout",
	testOperation,
	"getCurrentUser",
	() => ({
		security: {
			authHeader: btoa(`${vrchatUsername}:${vrchatPassword}`)
		},
		statusCode: 200,
		unstable: unstableUserKeys,
		verbose: false
	})
);

test.todo("Verify 2FA code with Recovery code");
test.todo("Verify 2FA email code");
test.todo("Delete User");
