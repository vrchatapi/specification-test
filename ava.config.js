import fs from "node:fs";
import path from "node:path";

const testOrder = JSON.parse(fs.readFileSync("./tests/_order.json", "utf8"));

export default {
	cache: false,
	compileEnhancements: false,
	concurrency: 0,
	extensions: {
		ts: "module"
	},
	files: ["tests/**/*"],
	nodeArguments: ["--import=tsimp"],
	sortTestFiles: (file1, file2) => {
		file1 = path.relative(__dirname, file1);
		file2 = path.relative(__dirname, file2);

		return (testOrder[file2] || Infinity) - (testOrder[file1] || Infinity);
	},
	timeout: "5m",
	utilizeParallelBuilds: false
};
