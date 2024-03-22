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
	statusCode: 200,
	parameters: {
		worldId: blackCatWorldId,
		instanceId: blackCatFirstInstanceId
	},
	unstable: unstableInstanceKeys
});

test(testOperation, "getShortName", {
	statusCode: 200,
	parameters: {
		worldId: blackCatWorld.id,
		instanceId: blackCatFirstInstanceId
	},
	unstable: ["secureName", "shortName"]
});

test(testOperation, "sendSelfInvite", {
	statusCode: 200,
	parameters: {
		worldId: blackCatWorld.id,
		instanceId: blackCatFirstInstanceId
	}
});

test.todo("Get Instance By Short Name");
