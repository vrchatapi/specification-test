import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

test(testOperation, "getAssignedPermissions", {
	statusCode: 200
});

test.todo("Get Permission");
