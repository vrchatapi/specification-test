import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state } from "./_cache.js";
import { vrchatOfficialStoreId } from "./_consts.js";

const prominentListingId = "prod_c9d1cf9b-e3be-4bed-8386-49f0a8d32910";
const prominentSellerUserId = "usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20";

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

test(testOperation, "getUserSubscriptionEligible", {
	parameters: {
		userId: state.get("current-user").id
	},
	statusCode: 200
});

test(testOperation, "getSubscriptions", {
	statusCode: 200
});

test(testOperation, "getLicenseGroup", {
	parameters: {
		licenseGroupId: "lgrp_608513da-b213-4e15-80af-bd88c27f0979"
	},
	statusCode: 200
});

test.failing(testOperation, "getProductListing", { // Expect failure because products are either IDs or Products
	parameters: {
		productId: prominentListingId
	},
	statusCode: 200
});

test.failing(testOperation, "getProductListings", {
	parameters: {
		hydrate: true,
		userId: prominentSellerUserId
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

test(testOperation, "getBalanceEarnings", {
	parameters: {
		userId: state.get("current-user").id
	},
	statusCode: 200
});

test(testOperation, "getEconomyAccount", {
	parameters: {
		userId: state.get("current-user").id
	},
	statusCode: 200
});

test(testOperation, "getActiveLicenses", {
	statusCode: 200
});

test(testOperation, "getStore", {
	parameters: {
		storeId: vrchatOfficialStoreId,
        hydrateListings: true,
        hydrateProducts: true
	},
	statusCode: 200
});

test(testOperation, "getStoreShelves", {
	parameters: {
		storeId: vrchatOfficialStoreId,
        hydrateListings: true,
        storeView: "all"
	},
	statusCode: 200
});
