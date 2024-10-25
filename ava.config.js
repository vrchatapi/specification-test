import fs from "node:fs";
import path from "node:path";

var testOrder = JSON.parse(fs.readFileSync("./tests/_order.json", "utf8"));
testOrder = Object.fromEntries(
	Object.entries(testOrder).map(([key, value]) => [
		key.replaceAll("/", path.sep),
		value
	])
);

export default {
	cache: false,
	concurrency: 0,
	extensions: {
		ts: "module"
	},
	files: ["tests/**/*"],
	nodeArguments: ["--import=tsimp"],
	// sortTestFiles: (file1, file2) => testData[file1].order - testData[file2].order,
	sortTestFiles: (a, b) => {
		a = path.relative(import.meta.dirname, a);
		const aOrder = testOrder[a] || Infinity;

		b = path.relative(import.meta.dirname, b);
		const bOrder = testOrder[b] || Infinity;

		// console.log({a: path.relative(import.meta.dirname, a), aOrder, b, bOrder});
		return aOrder - bOrder;
	},
	timeout: "5m",
	utilizeParallelBuilds: false
};
