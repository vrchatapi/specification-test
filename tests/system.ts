import { unstableValues } from "./_cache";
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
		include: ["user-all"].join(",")
	}
});

test.failing(
	testOperation,
	"getCSS",
	{
		statusCode: 200,
		unstable: true,
		requestOptions: {
			// VRChat blocks requests for this via "api.vrchat.cloud", but not "vrchat.com".
			baseUrl: "https://vrchat.com/api/1"
		}
	},
	({ context }) => {
		const contentEncoding = context.response.headers.get("content-encoding");
		if (contentEncoding) unstableValues.add(contentEncoding);
	}
);

test.failing(
	testOperation,
	"getJavaScript",
	{
		statusCode: 200,
		unstable: true,
		requestOptions: {
			// VRChat blocks requests for this via "api.vrchat.cloud", but not "vrchat.com".
			baseUrl: "https://vrchat.com/api/1"
		}
	},
	({ context }) => {
		const contentEncoding = context.response.headers.get("content-encoding");
		if (contentEncoding) unstableValues.add(contentEncoding);
	}
);

test(testOperation, "getCurrentOnlineUsers", {
	statusCode: 200,
	unstable: true
});

test(testOperation, "getSystemTime", {
	statusCode: 200,
	unstable: true
});
