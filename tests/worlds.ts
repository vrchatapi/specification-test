import { state } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { vrchatHomeWorldId } from "./_consts.js";

export const blackCatWorldId = "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b";

const unstableWorldKeys = [
	"imageUrl",
	"thumbnailImageUrl",
	"version",
	"favorites",
	"updated_at",
	"visits",
	"popularity",
	"heat",
	"publicOccupants",
	"privateOccupants",
	"udonProducts",
	"occupants",
	"instances"
];

test.before(failUnauthenticated);

test(testOperation, "searchWorlds", {
	statusCode: 200,
	unstable: true
});

test(testOperation, "getActiveWorlds", {
	statusCode: 200,
	unstable: true
});

test(testOperation, "getRecentWorlds", {
	statusCode: 200,
	unstable: true
});

test(
	testOperation,
	"getFavoritedWorlds",
	{
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { context } = t;
		t.is(context.body.length, 1, "Should have one favorited world");
	}
);

test.serial(
	"by id",
	testOperation,
	"getWorld",
	{
		parameters: {
			worldId: blackCatWorldId
		},
		statusCode: 200,
		unstable: [...unstableWorldKeys, "unityPackages"]
	},
	(t) => {
		t.is(
			t.context.body.id,
			blackCatWorldId,
			"Should have the correct world id"
		);
		state.set("blackcat-world", t.context.body);
	}
);

test.serial(
	"first listed instance",
	testOperation,
	"getWorldInstance",
	() -> ({
		parameters: {
			worldId: blackCatWorldId,
			instanceId: state.get("blackcat-world").instances[0][0]
		},
		statusCode: 200,
		unstable: true
	}),
	(t) => {
		state.set("blackcat-first-instance", t.context.body);
	}
);

test(
	"(VRChat Home)",
	testOperation,
	"getWorld",
	{
		parameters: {
			worldId: vrchatHomeWorldId
		},
		statusCode: 200,
		unstable: unstableWorldKeys
	},
	(t) => {
		t.is(
			t.context.body.id,
			vrchatHomeWorldId,
			"Should have the correct world id"
		);
	}
);

test("by id", testOperation, "getWorldMetadata", {
	parameters: {
		worldId: blackCatWorldId
	},
	statusCode: 200
});

test("by id", testOperation, "getWorldPublishStatus", {
	parameters: {
		worldId: blackCatWorldId
	},
	statusCode: 200
});

test.todo("Create World");
test.todo("Update World");
test.todo("Delete World");
test.todo("Get World Publish Status");
test.todo("Publish World");
test.todo("Unpublish World");
