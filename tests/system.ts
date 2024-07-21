import { test, testOperation } from "./_utilities";

test(testOperation, "getConfig", {
	statusCode: 200,
	unstable: true
});

test("with zero parameters", testOperation, "getInfoPush", {
	statusCode: 200
});

test.failing(testOperation, "getInfoPush", {
	statusCode: 200,
	parameters: {
		include: ["user-all"].join(","),
		require: ["user-all"].join(",")
	}
});

test.failing(testOperation, "getCSS", {
	statusCode: 200,
	unstable: true,
	requestOptions: {
		// VRChat blocks requests for this via "api.vrchat.cloud", but not "vrchat.com".
		baseUrl: "https://vrchat.com/api/1"
	}
});

test.failing(testOperation, "getJavaScript", {
	statusCode: 200,
	unstable: true,
	requestOptions: {
		// VRChat blocks requests for this via "api.vrchat.cloud", but not "vrchat.com".
		baseUrl: "https://vrchat.com/api/1"
	}
});

test(testOperation, "getCurrentOnlineUsers", {
	statusCode: 200,
	unstable: true
});

test(testOperation, "getSystemTime", {
	statusCode: 200,
	unstable: true
});
