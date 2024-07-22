import { vrchatFriendId } from "./_consts.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

test(
	testOperation,
	"getFriends",
	{
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		t.is(context.body.length, 0, "Should have zero friends");
	}
);

test(
	"prior to friend request",
	testOperation,
	"getFriendStatus",
	{
		parameters: {
			userId: vrchatFriendId
		},
		statusCode: 200
	},
	(t) => {
		const { context } = t;

		t.is(context.body.isFriend, false, "Should not be friends");
		t.is(
			context.body.outgoingRequest,
			false,
			"Should not have an outgoing request"
		);
	}
);

test(testOperation, "friend", {
	parameters: {
		userId: vrchatFriendId
	},
	statusCode: 200,
	unstable: ["id", "created_at"]
});

test(
	"after friend request",
	testOperation,
	"getFriendStatus",
	{
		parameters: {
			userId: vrchatFriendId
		},
		statusCode: 200
	},
	(t) => {
		const { context } = t;

		t.is(context.body.isFriend, false, "Should not be friends");
		t.is(context.body.outgoingRequest, true, "Should have an outgoing request");
	}
);

test(testOperation, "deleteFriendRequest", {
	parameters: {
		userId: vrchatFriendId
	},
	statusCode: 200
});

test(
	"after deleting friend request",
	testOperation,
	"getFriendStatus",
	{
		parameters: {
			userId: vrchatFriendId
		},
		statusCode: 200
	},
	(t) => {
		const { context } = t;

		t.is(context.body.isFriend, false, "Should not be friends");
		t.is(
			context.body.outgoingRequest,
			false,
			"Should not have an outgoing request"
		);
	}
);

test.todo("Unfriend");
