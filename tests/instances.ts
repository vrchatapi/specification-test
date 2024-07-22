import { state, unstableValues } from "./_cache";
import { failUnauthenticated, test, testOperation } from "./_utilities";

test.before(failUnauthenticated);

const unstableInstanceKeys = [
	"id",
	"location",
	"instanceId",
	"name",
	"type",
	"ownerId",
	"secureName",
	"world"
];

const blackCatWorld = state.get("blackcat-world");

const blackCatWorldId = blackCatWorld.id;
const blackCatFirstInstanceId = blackCatWorld.instances[0][0];
unstableValues.add(blackCatFirstInstanceId);

test(testOperation, "getInstance", {
	parameters: {
		instanceId: blackCatFirstInstanceId,
		worldId: blackCatWorldId
	},
	statusCode: 200,
	unstable: unstableInstanceKeys
});

test(testOperation, "getShortName", {
	parameters: {
		instanceId: blackCatFirstInstanceId,
		worldId: blackCatWorld.id
	},
	statusCode: 200,
	unstable: ["secureName", "shortName"]
});

test(testOperation, "sendSelfInvite", {
	parameters: {
		instanceId: blackCatFirstInstanceId,
		worldId: blackCatWorld.id
	},
	statusCode: 200
});

test.todo("Get Instance By Short Name");
