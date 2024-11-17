import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state } from "./_cache.js";

const blackCatProductId = "prod_c9d1cf9b-e3be-4bed-8386-49f0a8d32910";
const blackCatOwnerId = "usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20";

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
	() => ({
		parameters: {
			transactionId: state.get("transactionId")
		},
		statusCode: 200
	}),
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

test(testOperation, "getProductListing", {
	parameters: {
		productId: blackCatListingId
	},
	statusCode: 200
});

test(testOperation, "getProductListings", {
	parameters: {
		userId: blackCatOwnerId,
        hydrate: true
	},
	statusCode: 200
});

test(testOperation, "getTokenBundles", {
	statusCode: 200
});

test(testOperation, "getTiliaStatus", {
	statusCode: 200
});

test(testOperation, "getTiliaTos", {
	parameters: {
		userId: state.get("current-user").id
	},
	statusCode: 200
});

test(testOperation, "getBalance", {
	parameters: {
		userId: state.get("current-user").id
	},
	statusCode: 200
});
