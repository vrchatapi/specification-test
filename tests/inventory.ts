import { state, unstableValues } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

const prominentPropId = "prop_829ba6f6-b837-49d9-b9a9-056b82103b58";
const prominentTemplateId = "invt_642a8113-3798-4761-98e9-dc2c84adc960";

test.before(failUnauthenticated);

test.serial(
	testOperation,
	"getInventory",
	{
		parameters: {
			number: 100,
			offset: 0,
			inventorySortOrder: "oldest",
			inventoryItemTypes: "prop"
		},
		statusCode: 200,
		unstable: false
	},
	(t) => {
		const { body } = t.context;
		
		t.is(
			body.data[0].metadata.propId,
			prominentPropId,
			"Should have the reference cube prop as oldest prop"
		);
		state.set("inventory-prominent-prop", body.data[0]);
	}
);

test.serial(
	testOperation,
	"getOwnInventoryItem",
	() => ({
		parameters: {
			inventoryItemId: state.get("inventory-prominent-prop").id
		},
		statusCode: 200,
		unstable: false
	})
);

test.todo("Get User Inventory Item");

test(
	testOperation,
	"getInventoryDrops",
	{
		statusCode: 200,
		unstable: false
	}
);

test(
	testOperation,
	"getInventoryTemplate",
	{
		parameters: {
			inventoryTemplateId: prominentTemplateId
		},
		statusCode: 200,
		unstable: false
	}
);

test(
	testOperation,
	"spawnInventoryItem",
	{
		parameters: {
			inventorySpawnItemId: "default_money"
		},
		statusCode: 200,
		unstable: [ "token", "version" ]
	}
);

test.todo("Update Inventory Item");
test.todo("Consume Inventory Item");
