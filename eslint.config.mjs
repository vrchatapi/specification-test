import { config, configs } from "@ariesclark/eslint-config";
import node from "@ariesclark/eslint-config/node";

import ava from "eslint-plugin-ava";

export default config({
	extends: [...configs.recommended, ...node, ava.configs["flat/recommended"]],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"ava/no-todo-test": "off",
		"ava/use-test": "off"
	}
});
