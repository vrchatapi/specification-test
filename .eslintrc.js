require("@ariesclark/eslint-config/eslint-patch");
process.env["ESLINT_PROJECT_ROOT"] = __dirname;

module.exports = {
	root: true,
	plugins: ["ava"],
	extends: [
		"@ariesclark/eslint-config",
		"@ariesclark/eslint-config/node",
		"plugin:ava/recommended"
	],
	rules: {
		"ava/no-todo-test": "off",
		"ava/use-test": "off"
	}
};
