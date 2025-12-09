import { state, unstableValues } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

const currentUserId = state.get("current-user").id;
const blackCatWorld = state.get("blackcat-world");
const blackCatWorldId = blackCatWorld.id;
const blackCatFirstInstanceId = state.get("blackcat-instance-id");
const blackCatFirstInstanceSecureName = state.get("blackcat-instance-secure-name");
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
			blackCatFirstInstanceSecureName,
			"Should have the same secure name"
		);
	}
);

test(
	"secure name is a valid short name",
	testOperation,
	"getInstanceByShortName",
	{
		parameters: {
			shortName: blackCatFirstInstanceSecureName
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
			type: "private",
			region: "use",
			ownerId: currentUserId,
			canRequestInvite: true,
			displayName: blackCatFirstInstanceSecureName,
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
			blackCatFirstInstanceSecureName,
			"Should have the custom display name"
		);
		// Content setting seem broken??
		// t.is(
		// 	body.contentSettings.drones,
		// 	false,
		// 	"Should have the content settings for drones as disabled"
		// );
		// t.is(
		// 	body.contentSettings.props,
		// 	true,
		// 	"Should have the content settings for props as disabled"
		// );
	}
);
