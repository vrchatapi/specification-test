import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

test.failing(testOperation, "getAssignedPermissions", {
	statusCode: 200
});

test(testOperation, "getPermission", {
	parameters: {
		permissionId: "prms_fe07c8a7-a4ca-4eda-97e5-e241040ef6f8"
	},
	statusCode: 200
});

test.todo("Get Permission");
