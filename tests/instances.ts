import { state, unstableValues } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

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
	unstable: true
});

test(testOperation, "getShortName", {
	parameters: {
		instanceId: blackCatFirstInstanceId,
		worldId: blackCatWorld.id
	},
	statusCode: 200,
	unstable: ["secureName", "shortName"]
});

test.todo("Get Instance By Short Name");
