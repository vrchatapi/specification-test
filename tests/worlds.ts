import { failUnauthenticated, test, testOperation } from "./_utilities";

const blackCatWorldId = "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b";

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
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		t.is(context.body.length, 0, "Should have zero favorited worlds");
	}
);

test("for The Black Cat", testOperation, "getWorld", {
	statusCode: 200,
	parameters: {
		worldId: blackCatWorldId
	},
	unstable: [
		"imageUrl",
		"thumbnailImageUrl",
		"version",
		"favorites",
		"unityPackages",
		"updated_at",
		"visits",
		"popularity",
		"heat",
		"publicOccupants",
		"privateOccupants",
		"occupants",
		"instances"
	]
});

test.todo("Create World");
test.todo("List Active Worlds");
test.todo("List Favorited Worlds");
test.todo("List Recent Worlds");
test.todo("Get World by ID");
test.todo("Update World");
test.todo("Delete World");
test.todo("Get World Metadata");
test.todo("Get World Publish Status");
test.todo("Publish World");
test.todo("Unpublish World");
test.todo("Get World Instance");
