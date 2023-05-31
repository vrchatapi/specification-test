const fs = require("fs");
const path = require("path");

const testOrder = JSON.parse(fs.readFileSync("./tests/_order.json", "utf8"));

module.exports = {
	files: ["tests/**/*"],
	timeout: "5m",
	cache: false,
	concurrency: 0,
	utilizeParallelBuilds: false,
	extensions: ["ts", "js"],
	require: ["ts-node/register"],
	sortTestFiles: (file1, file2) => {
		file1 = path.relative(__dirname, file1);
		file2 = path.relative(__dirname, file2);

		return testOrder[file1] - testOrder[file2];
	}
};
