import { state } from "./_cache";
import { failUnauthenticated, test, testOperation } from "./_utilities";

export const blackCatWorldId = "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b";

const unstableWorldKeys = [
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
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		t.is(context.body.length, 0, "Should have zero favorited worlds");
	}
);

test(
	"by id",
	testOperation,
	"getWorld",
	{
		statusCode: 200,
		parameters: {
			worldId: blackCatWorldId
		},
		unstable: unstableWorldKeys
	},
	(t) => {
		t.is(t.context.body.id, blackCatWorldId, "Should have the correct world id");
		state.set("blackcat-world", t.context.body);
	}
);

test("by id", testOperation, "getWorldMetadata", {
	statusCode: 200,
	parameters: {
		worldId: blackCatWorldId
	}
});

test.failing("by id", testOperation, "getWorldPublishStatus", {
	statusCode: 200,
	parameters: {
		worldId: blackCatWorldId
	}
});

test.todo("Create World");
test.todo("Update World");
test.todo("Delete World");
test.todo("Get World Publish Status");
test.todo("Publish World");
test.todo("Unpublish World");
test.todo("Get World Instance");
