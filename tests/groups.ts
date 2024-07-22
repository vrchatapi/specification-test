import { failUnauthenticated, test, testOperation } from "./_utilities";

const unstableGroupKeys = ["id"];

test.before(failUnauthenticated);

test.todo("Get Group by ID");
test.todo("Update Group");
test.todo("Delete Group");
test.todo("Get Group Announcement");
test.todo("Create Group Announcement");
test.todo("Delete Group Announcement");
test.todo("Get Group Audit Logs");
test.todo("Get Group Bans");
test.todo("Ban Group Member");
test.todo("Unban Group Member");
test.todo("Create Group Gallery");
test.todo("Get Group Gallery Images");
test.todo("Update Group Gallery");
test.todo("Delete Group Gallery");
test.todo("Add Group Gallery Image");
test.todo("Delete Group Gallery Image");
test.todo("Get Group Invites Sent");
test.todo("Invite User to Group");
test.todo("Delete User Invite");
test.todo("Join Group");
test.todo("Leave Group");
test.todo("Get Group Member");
test.todo("Update Group Member");
test.todo("Kick Group Member");
test.todo("Add Role to GroupMember");
test.todo("Remove Role from GroupMember");
test.todo("List Group Permissions");
test.todo("Get Group Join Requests");
test.todo("Cancel Group Join Request");
test.todo("Respond Group Join request");
test.todo("Get Group Roles");
test.todo("Create GroupRole");
test.todo("Update Group Role");
test.todo("Delete Group Role");

const groupName = "testGroup";
const groupShortCode = "grop";
let groupId: string;

test.serial(
	testOperation,
	"createGroup",
	{
		requestBody: {
			name: groupName,
			roleTemplate: "default",
			shortCode: groupShortCode
		},
		statusCode: 200,
		unstable: unstableGroupKeys
	},
	(t) => {
		const { context } = t;

		groupId = context.body.id;

		t.is(context.body.name, groupName);
	}
);

test.serial(testOperation, "getGroupMembers", () => ({
	parameters: {
		groupId
	},
	statusCode: 200
}));

test.serial(testOperation, "deleteGroup", () => ({
	parameters: {
		groupId
	},
	statusCode: 200,
	unstable: unstableGroupKeys
}));
