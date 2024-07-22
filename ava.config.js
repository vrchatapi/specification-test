const fs = require("node:fs");
const path = require("node:path");

const testOrder = JSON.parse(fs.readFileSync("./tests/_order.json", "utf8"));

module.exports = {
	cache: false,
	concurrency: 0,
	extensions: ["ts", "js"],
	files: ["tests/**/*"],
	require: ["ts-node/register"],
	sortTestFiles: (file1, file2) => {
		file1 = path.relative(__dirname, file1);
		file2 = path.relative(__dirname, file2);

		return (testOrder[file2] || Infinity) - (testOrder[file1] || Infinity);
	},
	timeout: "5m",
	utilizeParallelBuilds: false
};
