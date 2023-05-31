import { test, testOperation } from "./_utilities";

test(testOperation, "getConfig", {
	statusCode: 200
});

test("with zero parameters", testOperation, "getInfoPush", {
	statusCode: 200
});

test.failing(testOperation, "getInfoPush", {
	statusCode: 200,
	parameters: {
		include: ["user-all"].join(",")
	}
});

test.failing(testOperation, "getCSS", {
	statusCode: 200,
	requestOptions: {
		baseUrl: "https://vrchat.com/api/1"
	}
});

test.failing(testOperation, "getJavaScript", {
	statusCode: 200,
	requestOptions: {
		baseUrl: "https://vrchat.com/api/1"
	}
});

test(testOperation, "getCurrentOnlineUsers", {
	statusCode: 200
});

test(testOperation, "getSystemTime", {
	statusCode: 200
});
