import { state } from "./_cache";
import { failUnauthenticated, test, testOperation } from "./_utilities";

const defaultAvatarId = "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11";
const publicAvatarId = "avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0";

test.before(failUnauthenticated);

test.failing(
	testOperation,
	"getOwnAvatar",
	() => ({
		statusCode: 200,
		parameters: {
			userId: state.get("current-user").id
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.id, defaultAvatarId, "Should return the default avatar");
	}
);

test(
	"with zero parameters",
	testOperation,
	"searchAvatars",
	{
		statusCode: 200
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 0, "Should return zero results");
	}
);

test(
	"with admin_featured_legacy tag",
	testOperation,
	"searchAvatars",
	{
		statusCode: 200,
		parameters: {
			tag: "admin_featured_legacy"
		}
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 10, "Should return ten results");
	}
);

test("by id", testOperation, "getAvatar", {
	statusCode: 200,
	parameters: {
		avatarId: publicAvatarId
	}
});

test("with id", testOperation, "selectAvatar", {
	statusCode: 200,
	parameters: {
		avatarId: publicAvatarId
	}
});

test("with default avatar id", testOperation, "selectAvatar", {
	statusCode: 200,
	parameters: {
		avatarId: defaultAvatarId
	}
});

test("with id (not quest fallback)", testOperation, "selectFallbackAvatar", {
	statusCode: 403,
	parameters: {
		avatarId: publicAvatarId
	}
});

test("with zero parameters", testOperation, "getFavoritedAvatars", {
	statusCode: 200
});

test.skip(testOperation, "createAvatar", {
	statusCode: 200
});

test.todo("Update Avatar");
test.todo("Delete Avatar");
