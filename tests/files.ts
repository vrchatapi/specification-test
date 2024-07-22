import { state, unstableValues } from "./_cache.js";
import { failUnauthenticated, test, testOperation } from "./_utilities.js";

test.before(failUnauthenticated);
test.serial(
	"without data",
	testOperation,
	"getFiles",
	() => ({
		parameters: {
			tag: "gallery"
		},
		statusCode: 200
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
		parameters: {},
		requestBody: {
			extension: "A",
			mimeType: "image/jpeg",
			name: "string",
			tags: ["gallery"]
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		state.set("fileId", body.id);
		t.is(
			body.versions.length,
			1,
			"File should have 1 version, the initial one"
		);
		unstableValues.add(body.id);
		body.versions.map((x: any) => x.created_at).forEach(unstableValues.add);
	}
);

test.serial(
	testOperation,
	"getFiles",
	() => ({
		parameters: {
			tag: "gallery"
		},
		statusCode: 200
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
		parameters: {
			fileId: state.get("fileId")
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		t.is(
			body.id,
			state.get("fileId"),
			"Successful file get returns file object"
		);
		t.is(
			body.versions.length,
			1,
			"File should have 1 version, the initial one"
		);
	}
);

test.serial(
	testOperation,
	"downloadFileVersion",
	() => ({
		parameters: {
			fileId: state.get("fileId"),
			versionId: 0
		},
		statusCode: 404
	}),
	(t) => {
		const { body } = t.context;
		t.is(
			body.error.message,
			"File version type not found",
			"File version 0 has no data"
		);
	}
);

test.serial(
	testOperation,
	"createFileVersion",
	() => ({
		parameters: {
			fileId: state.get("fileId")
		},
		requestBody: {
			fileMd5: "dGVzdA==",
			fileSizeInBytes: 64,

			signatureMd5: "dGVzdA==",
			//These need to be valid base64 strings
			signatureSizeInBytes: 64
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		t.is(
			body.id,
			state.get("fileId"),
			"Successful file get returns file object"
		);
		t.is(
			body.versions.length,
			2,
			"File should have 2 versions, the initial one, and the one we created"
		);
		body.versions.map((x: any) => x.created_at).forEach(unstableValues.add);
		body.versions
			.filter((x: any) => x.file)
			.map((x: any) => x.file.fileName)
			.forEach(unstableValues.add);
		body.versions
			.filter((x: any) => x.file)
			.map((x: any) => x.file.url)
			.forEach(unstableValues.add);
		body.versions
			.filter((x: any) => x.signature)
			.map((x: any) => x.signature.fileName)
			.forEach(unstableValues.add);
		body.versions
			.filter((x: any) => x.signature)
			.map((x: any) => x.signature.url)
			.forEach(unstableValues.add);
	}
);

test.serial(
	testOperation,
	"deleteFileVersion",
	() => ({
		parameters: {
			fileId: state.get("fileId"),
			versionId: 1
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		t.is(
			body.id,
			state.get("fileId"),
			"Successful file get returns file object"
		);
		t.is(
			body.versions.length,
			1,
			"File should have 1 version, the initial one"
		);
	}
);

test.serial(
	testOperation,
	"deleteFile",
	() => ({
		parameters: {
			fileId: state.get("fileId")
		},
		statusCode: 200
	}),
	(t) => {
		const { body } = t.context;
		t.is(
			body.id,
			state.get("fileId"),
			"Successful file deletion returns file object"
		);
		t.is(
			body.versions.length,
			1,
			"File should have 1 version, the initial one"
		);
	}
);

test.todo("Download File Version");
test.todo("Finish FileData Upload");
test.todo("Start FileData Upload");
test.todo("Check FileData Upload Status");
