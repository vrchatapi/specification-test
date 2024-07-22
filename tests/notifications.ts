import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);

test(testOperation, "getNotifications", {
	statusCode: 200
});

test.todo("Accept Friend Request");
test.todo("Mark Notification As Read");
test.todo("Delete Notification");
test.todo("Clear All Notifications");
