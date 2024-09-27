import { randomUUID } from "node:crypto";

import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state, unstableValues } from "./_cache.js";
import { vrchatFriendId } from "./_consts.js";

const unstableGroupKeys = [
	"id",
	"discriminator",
	"createdAt",
	"memberCountSyncedAt",
	"myMember.createdAt",
	"myMember.groupId",
	"myMember.id",
	"myMember.joinedAt",
	"myMember.roleIds",
	"updatedAt"
];

test.before(failUnauthenticated);

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

const groupName = "Test";

const groupShortCode = randomUUID().replace(/-/g, "").slice(0, 4).toUpperCase();
unstableValues.add(groupShortCode);

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

		state.set("groupId", context.body.id);
		unstableValues.add(context.body.id);

		t.is(context.body.name, groupName);
	}
);

test.serial(testOperation, "getGroup", () => ({
	parameters: {
		groupId: state.get("groupId")
	},
	statusCode: 200,
	unstable: unstableGroupKeys
}));

test.serial(testOperation, "getGroupMembers", () => ({
	parameters: {
		groupId: state.get("groupId")
	},
	statusCode: 200
}));

const newGroupName = `${groupName} 2`;

test.serial(
	testOperation,
	"updateGroup",
	() => ({
		parameters: {
			groupId: state.get("groupId")
		},
		requestBody: {
			joinState: "invite",
			name: newGroupName
		},
		statusCode: 200,
		unstable: unstableGroupKeys
	}),
	(t) => {
		t.is(t.context.body.name, newGroupName);
	}
);

test.serial(testOperation, "createGroupInvite", () => ({
	parameters: {
		groupId: state.get("groupId")
	},
	requestBody: {
		userId: vrchatFriendId
	},
	statusCode: 200
}));

test.serial(
	testOperation,
	"getGroupInvites",
	() => ({
		parameters: {
			groupId: state.get("groupId")
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		t.true(Array.isArray(body));

		(body as Array<any>).map((member) => {
			unstableValues.add(member.id);
			unstableValues.add(member.createdAt);
		});
	}
);

test.serial(testOperation, "deleteGroupInvite", () => ({
	parameters: {
		groupId: state.get("groupId"),
		userId: vrchatFriendId
	},
	statusCode: 200
}));

test.serial(testOperation, "deleteGroup", () => ({
	parameters: {
		groupId: state.get("groupId")
	},
	statusCode: 200,
	unstable: unstableGroupKeys
}));
