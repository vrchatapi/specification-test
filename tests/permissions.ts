import { failUnauthenticated, test, testOperation } from "./_utilities";

test.before(failUnauthenticated);

test(testOperation, "getAssignedPermissions", {
	statusCode: 200
});

test.todo("Get Permission");
