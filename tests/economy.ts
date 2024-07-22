import { failUnauthenticated, test, testOperation } from "./_utilities";

test.before(failUnauthenticated);

test.failing(testOperation, "getSteamTransactions", {
	statusCode: 200
});

test(
	testOperation,
	"getCurrentSubscriptions",
	{
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		t.is(context.body.length, 1, "Should have one subscription");
	}
);

test(testOperation, "getSubscriptions", {
	statusCode: 200
});

test.todo("Get Steam Transaction");
test.todo("Get License Group");
