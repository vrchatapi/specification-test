import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { defaultAvatarId, vrchatHomeWorldId, favoriteId } from "./_consts.js";
import { state, unstableValues } from "./_cache.js";

test.before(failUnauthenticated);

test(
	testOperation,
	"getFavorites",
	{
		parameters: {
			type: "world"
		},
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 1, "Should return world favorite");
	}
);

test(
	testOperation,
	"addFavorite",
	{
		requestBody: {
			favoriteId: defaultAvatarId,
			tags: ["avatars2"],
			type: "avatar"
		},
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		unstableValues.add(body.id)
		t.is(body.favoriteId, defaultAvatarId);
	}
);

test(
	"after favorite add",
	testOperation,
	"getFavorites",
	{
		parameters: {
			tag: "avatars2",
			type: "avatar"
		},
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 1, "Should return one result");
	}
);

test(
	testOperation,
	"getFavorite",
	{
		parameters: {
			favoriteId: favoriteId
		},
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.favoriteId, vrchatHomeWorldId);
	}
);

test(testOperation, "removeFavorite", {
	parameters: {
		favoriteId: defaultAvatarId
	},
	statusCode: 200
});

test(testOperation, "getFavoriteGroups", {
	statusCode: 200
});

test(
	testOperation,
	"getFavoriteGroup",
	{
		parameters: {
			favoriteGroupName: "avatars2",
			favoriteGroupType: "avatar",
			userId: state.get("current-user").id
		},
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.name, "avatars2");
	}
);

test(testOperation, "updateFavoriteGroup", {
	parameters: {
		favoriteGroupName: "avatars2",
		favoriteGroupType: "avatar",
		userId: state.get("current-user").id
	},
	requestBody: {
		displayName: "newName"
	},
	statusCode: 200
});

test.todo("Clear Favorite Group");