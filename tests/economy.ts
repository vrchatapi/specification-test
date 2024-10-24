import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state } from "./_cache.js";

test.before(failUnauthenticated);

test.serial.failing(
	testOperation,
	"getSteamTransactions",
	{
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		state.set("transactionId", context.body[0].id);
	}
);

test.serial.failing(
	testOperation,
	"getSteamTransaction",
	{
		parameters: {
			transactionId: state.get("transactionId")
		},
		statusCode: 200
	},
	(t) => {
		const { context } = t;
		t.is(
			context.body.id,
			state.get("transactionId"),
			"Should have the right transaction Id"
		);
	}
);

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

test(testOperation, "getLicenseGroup", {
	parameters: {
		licenseGroupId: "lgrp_608513da-b213-4e15-80af-bd88c27f0979"
	},
	statusCode: 200
});
