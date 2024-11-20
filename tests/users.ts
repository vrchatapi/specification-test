import { tupperUserId } from "./_consts.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state } from "./_cache.js";

import type { LimitedUser } from "vrchat";

test.before(failUnauthenticated);

test(
	"without parameters",
	testOperation,
	"searchUsers",
	{
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		t.is(context.body.length, 0, "Should be empty");
	}
);

test(
	testOperation,
	"searchUsers",
	{
		parameters: {
			search: "tupper"
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { context } = t;

		t.assert(
			(context.body as Array<LimitedUser>).some(
				(user) => user.id === tupperUserId
			),
			"Should contain Tupper"
		);
	}
);

test(
	"with limit",
	testOperation,
	"searchUsers",
	{
		parameters: {
			n: 5,
			search: "a"
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { context } = t;

		t.is(context.body.length, 5, "Should contain exactly 5 users");
	}
);

test(
	testOperation,
	"getUser",
	{
		parameters: {
			userId: tupperUserId
		},
		statusCode: 200
	},
	(t) => {
		const { context } = t;

		t.is(context.body.id, tupperUserId, "Should be the same user");
	}
);

test.todo("Update User Info");
test.todo("Get User Groups");
test.todo("Get User Group Requests");

test(testOperation, "getUserFeedback", {
	parameters: {
		userId: state.get("current-user").id,
		n: 100,
		offset: 0
	},
	statusCode: 200,
	unstable: true
});

test(testOperation, "getUserNotes", {
	parameters: {
		n: 100,
		offset: 0
	},
	statusCode: 200,
	unstable: true
});

test.serial(
	testOperation,
	"updateUserNote",
	{
		parameters: {},
		requestBody: {
			targetUserId: tupperUserId,
			note: "system_haha_we_actually_ended_up_documenting_this_one_too"
		},
		statusCode: 200
	},
	(t) => {
		const { context } = t;

		state.set("tupper-user-note", context.body)

		t.is(context.body.targetUserId, tupperUserId, "Should be the same user");
	}
);

test.serial(
	testOperation,
	"getUserNote",
	() => ({
		parameters: {
			userNoteId: state.get("tupper-user-note").id
		},
		requestBody: {
			targetUserId: tupperUserId,
			note: "system_haha_we_actually_ended_up_documenting_this_one_too"
		},
		statusCode: 200
	}),
	(t) => {
		const { context } = t;

		t.is(context.body.id, state.get("tupper-user-note").id, "Should be the same user note");
		t.is(context.body.targetUserId, tupperUserId, "Should be the same user");
	}
);
