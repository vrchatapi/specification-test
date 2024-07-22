import { state } from "./_cache";
import { unstableUserKeys } from "./_users";
import { failUnauthenticated, test, testOperation } from "./_utilities";

const defaultAvatarId = "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11";
const publicAvatarId = "avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0";
const fallbackAvatarId = "avtr_07917a03-5e0b-48e9-b041-e94086bc658f";

test.before(failUnauthenticated);

const unstableAvatarKeys = ["version", "unityPackages", "updated_at"];

test(
	testOperation,
	"getOwnAvatar",
	() => ({
		parameters: {
			userId: state.get("current-user").id
		},
		statusCode: 200,
		unstable: unstableAvatarKeys
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
		parameters: {
			tag: "admin_featured_legacy"
		},
		statusCode: 200,
		unstable: true
	},
	(t) => {
		const { body } = t.context;
		t.is(body.length, 10, "Should return ten results");
	}
);

test("by id", testOperation, "getAvatar", {
	parameters: {
		avatarId: publicAvatarId
	},
	statusCode: 200
});

test("with id", testOperation, "selectAvatar", {
	parameters: {
		avatarId: publicAvatarId
	},
	statusCode: 200,
	unstable: unstableUserKeys
});

test("with default avatar id", testOperation, "selectAvatar", {
	parameters: {
		avatarId: defaultAvatarId
	},
	statusCode: 200,
	unstable: unstableUserKeys
});

test("with id (not quest fallback)", testOperation, "selectFallbackAvatar", {
	parameters: {
		avatarId: publicAvatarId
	},
	statusCode: 403
});

test("with id", testOperation, "selectFallbackAvatar", {
	parameters: {
		avatarId: fallbackAvatarId
	},
	statusCode: 200,
	unstable: unstableUserKeys
});

test("with zero parameters", testOperation, "getFavoritedAvatars", {
	statusCode: 200
});

test.todo("Create Avatar");
test.todo("Update Avatar");
test.todo("Delete Avatar");
