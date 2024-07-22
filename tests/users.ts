import { failUnauthenticated, test, testOperation } from "./_utilities";

test.before(failUnauthenticated);

const tupperUserId = "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469";

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
		statusCode: 200
	},
	(t) => {
		const { context } = t;

		t.assert(context.body.contains(tupperUserId), "Should contain Tupper");
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
		statusCode: 200
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
