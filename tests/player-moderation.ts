import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { tupperUserId } from "./_consts.js";
import { unstableValues } from "./_cache.js";

test.before(failUnauthenticated);

test.serial(
	testOperation,
	"getPlayerModerations",
	{
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 0, "Should have 0 moderations");
	}
);

test.serial(
	testOperation,
	"moderateUser",
	{
		requestBody: {
			moderated: tupperUserId,
			type: "unmute"
		},
		statusCode: 200,
		unstable: ["created"]
	},
	(t) => {
		const { body } = t.context;
		t.is(body.targetUserId, tupperUserId, "Should return Tupper moderation");
	}
);

test.serial(
	"with filter",
	testOperation,
	"getPlayerModerations",
	{
		parameters: {
			type: "unmute"
		},
		statusCode: 200,
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 1, "Should have 1 player moderation");
		t.is(body[0].targetUserId, tupperUserId, "Should have moderated Tupper");
		unstableValues.add(body[0].created);
	}
);

test.serial(testOperation, "clearAllPlayerModerations", {
	statusCode: 200
});
