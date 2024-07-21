import { state } from "./_cache";
import { failUnauthenticated, test, testOperation } from "./_utilities";

test.before(failUnauthenticated);
test.serial(
	"getFileWithoutData",
	testOperation,
	"getFiles",
	() => ({
		statusCode: 200,
		parameters: {
			tag: "gallery"
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.length, 0, "Should have no files");
	}
);

test.serial(
	testOperation,
	"createFile",
	() => ({
		statusCode: 200,
		parameters: {},
		requestBody: {
			name: "string",
			mimeType: "image/jpeg",
			extension: "A",
			tags: ["gallery"]
		}
	}),
	(t) => {
		const { body } = t.context;
		state.set("fileId", body.id);
		t.is(body.versions.length, 1, "File should have 1 version, the initial one");
	}
);

test.serial(
	"getFileWithData",
	testOperation,
	"getFiles",
	() => ({
		statusCode: 200,
		parameters: {
			tag: "gallery"
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.length, 1, "Should have one file");
	}
);

test.serial(
	testOperation,
	"getFile",
	() => ({
		statusCode: 200,
		parameters: {
			fileId: state.get("fileId")
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.id, state.get("fileId"), "Successful file get returns file object");
		t.is(body.versions.length, 1, "File should have 1 version, the initial one");
	}
);

test.serial(
	testOperation,
	"downloadFileVersion",
	() => ({
		statusCode: 404,
		parameters: {
			fileId: state.get("fileId"),
			versionId: 0
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.error.message, "File version type not found", "File version 0 has no data");
	}
);

test.serial(
	testOperation,
	"createFileVersion",
	() => ({
		statusCode: 200,
		parameters: {
			fileId: state.get("fileId")
		},
		requestBody: {
			signatureMd5: "dGVzdA==", //These need to be valid base64 strings
			signatureSizeInBytes: 64,
			fileMd5: "dGVzdA==",
			fileSizeInBytes: 64
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.id, state.get("fileId"), "Successful file get returns file object");
		t.is(body.versions.length, 2, "File should have 2 version, the initial one, and the one we created");
	}
);

test.serial(
	testOperation,
	"deleteFileVersion",
	() => ({
		statusCode: 200,
		parameters: {
			fileId: state.get("fileId"),
			versionId: 1
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.id, state.get("fileId"), "Successful file get returns file object");
		t.is(body.versions.length, 1, "File should have 1 version, the initial one");
	}
);

test.serial(
	testOperation,
	"deleteFile",
	() => ({
		statusCode: 200,
		parameters: {
			fileId: state.get("fileId")
		}
	}),
	(t) => {
		const { body } = t.context;
		t.is(body.id, state.get("fileId"), "Successful file deletion returns file object");
		t.is(body.versions.length, 1, "File should have 1 version, the initial one");
	}
);

test.todo("Download File Version");
test.todo("Finish FileData Upload");
test.todo("Start FileData Upload");
test.todo("Check FileData Upload Status");
