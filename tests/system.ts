import { test, testOperation } from "./_utilities.js";

test(testOperation, "getConfig", {
	statusCode: 200
});

test("with zero parameters", testOperation, "getInfoPush", {
	statusCode: 400
});

test.failing(testOperation, "getInfoPush", {
	parameters: {
		include: "quick-menu-banner",
		require: "quick-menu-banner"
	},
	statusCode: 200
});

test.failing("with user-all", testOperation, "getInfoPush", {
	parameters: {
		include: "user-all",
		require: "user-all"
	},
	statusCode: 200,
	unstable: true
});

test.failing(testOperation, "getCSS", {
	statusCode: 200,
	unstable: true
});

test.failing(testOperation, "getJavaScript", {
	statusCode: 200,
	unstable: true
});

test(testOperation, "getCurrentOnlineUsers", {
	statusCode: 200,
	unstable: true
});

test(testOperation, "getSystemTime", {
	statusCode: 200,
	unstable: true
});
