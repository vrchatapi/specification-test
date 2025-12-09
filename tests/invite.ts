import { state } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

const blackCatWorldId = state.get("blackcat-world").id;
const blackCatCustomInstanceId = state.get("blackcat-custom-instance").instanceId;
const currentUserId = state.get("current-user").id;
const messageContents = "Hello, World!";

test.todo("Invite User");

test(
	testOperation,
	"inviteMyselfTo",
	{
		parameters: {
			worldId: blackCatWorldId,
			instanceId: blackCatCustomInstanceId
		},
		statusCode: 200,
		unstable: true
	}
);

test.todo("Request Invite");
test.todo("Respond Invite");

test(
	testOperation,
	"getInviteMessages",
	{
		parameters: {
			userId: currentUserId,
			messageType: "message"
		},
		statusCode: 200,
		unstable: true
	}
);

test.serial(
	testOperation,
	"getInviteMessage",
	{
		parameters: {
			userId: currentUserId,
			messageType: "message",
			slot: 0
		},
		statusCode: 200,
		unstable: [ "updatedAt" ]
	},
	(t) => {
		const { body } = t.context;
		
		t.is(
			body.canBeUpdated,
			true,
			"Message slot 0 should be updatable"
		);
		t.is(
			body.remainingCooldownMinutes,
			0,
			"Message slot 0 should be have 0 minutes of cooldown"
		);
	}
);

test.serial(
	"message slot 0 reset",
	testOperation,
	"resetInviteMessage",
	{
		parameters: {
			userId: currentUserId,
			messageType: "message",
			slot: 0
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		
		t.is(
			body[0].canBeUpdated,
			true,
			"Message slot 0 should be updatable after being reset"
		);
	}
);

test.serial(
	"message slot 0 reset rate limited",
	testOperation,
	"resetInviteMessage",
	{
		parameters: {
			userId: currentUserId,
			messageType: "message",
			slot: 0
		},
		statusCode: 429,
		unstable: false
	}
);

test.serial(
	"message slot 0 update",
	testOperation,
	"updateInviteMessage",
	{
		requestBody: {
			message: messageContents
		},
		parameters: {
			userId: currentUserId,
			messageType: "message",
			slot: 0
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		
		t.is(
			body[0].canBeUpdated,
			false,
			"Message slot 0 should not be updatable after being updated"
		);
		t.is(
			body[0].remainingCooldownMinutes > 0,
			true,
			"Message slot 0 should be have greater than 0 minutes of cooldown"
		);
	}
);

