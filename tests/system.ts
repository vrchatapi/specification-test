import { test, testOperation } from "./_utilities";

test(testOperation, "getConfig", {
	statusCode: 200,
	unstable: true
});

test("with zero parameters", testOperation, "getInfoPush", {
	statusCode: 200
});

test.failing(testOperation, "getInfoPush", {
	parameters: {
		include: ["user-all"].join(","),
		require: ["user-all"].join(",")
	},
	statusCode: 200
});

test.failing(testOperation, "getCSS", {
	requestOptions: {
		// VRChat blocks requests for this via "api.vrchat.cloud", but not "vrchat.com".
		baseUrl: "https://vrchat.com/api/1"
	},
	statusCode: 200,
	unstable: true
});

test.failing(testOperation, "getJavaScript", {
	requestOptions: {
		// VRChat blocks requests for this via "api.vrchat.cloud", but not "vrchat.com".
		baseUrl: "https://vrchat.com/api/1"
	},
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
