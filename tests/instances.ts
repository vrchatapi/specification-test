import { state, unstableValues } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

const currentUserId = state.get("current-user").id;
const blackCatWorld = state.get("blackcat-world");
const blackCatWorldId = blackCatWorld.id;
const blackCatFirstInstance = blackCatWorld.instances[0][0];
const blackCatFirstInstanceId = blackCatFirstInstance.instanceId;
const customInstanceName = "Test Instance " + blackCatFirstInstance.secureName;
unstableValues.add(blackCatFirstInstanceId);

test(testOperation, "getInstance", {
	parameters: {
		instanceId: blackCatFirstInstanceId,
		worldId: blackCatWorldId
	},
	statusCode: 200,
	unstable: true
});

test(
	testOperation,
	"getShortName",
	{
		parameters: {
			instanceId: blackCatFirstInstanceId,
			worldId: blackCatWorldId
		},
		statusCode: 200,
		unstable: ["secureName", "shortName"]
	},
	(t) => {
		const { body } = t.context;
		
		t.is(
			body.secureName,
			blackCatFirstInstance.secureName,
			"Should have the same secure name"
		);
		t.is(
			body.shortName,
			blackCatFirstInstance.shortName,
			"Should have the same short name"
		);
	}
);

test(
	"secure name is a valid short name",
	testOperation,
	"getInstanceByShortName",
	{
		parameters: {
			shortName: blackCatFirstInstance.secureName
		},
		statusCode: 200,
		unstable: true
	}
);

test(
	testOperation,
	"createInstance",
	{
		requestBody: {
			worldId: blackCatWorldId,
			type: "friends",
			region: "use",
			ownerId: currentUserId,
			canRequestInvite: true,
			displayName: customInstanceName,
			contentSettings: {
				drones: false,
				props: true
			}
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		state.set("blackcat-custom-instance", body);
		
		t.is(
			body.displayName,
			customInstanceName,
			"Should have the custom display name"
		);
		t.is(
			body.contentSettings.drones,
			false,
			"Should have the content settings for drones as disabled"
		);
		t.is(
			body.contentSettings.props,
			true,
			"Should have the content settings for props as disabled"
		);
	}
);
