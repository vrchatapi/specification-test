# Files

## List Files
Returns a list of files

* [getFiles without data](./getfiles-without-data.md)
* [getFiles](./getfiles.md)
## Create File
Creates a new File object

* [createFile](./createfile.md)
## Delete File
Deletes a File object.

* [deleteFile](./deletefile.md)
## Show File
Shows general information about the "File" object. Each File can have several "Version"'s, and each Version can have multiple real files or "Data" blobs.

* [getFile](./getfile.md)
## Create File Version
Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.

* [createFileVersion](./createfileversion.md)
## Delete File Version
Delete a specific version of a file. You can only delete the latest version.

* [deleteFileVersion](./deletefileversion.md)
## Download File Version
Downloads the file with the provided version number.

**Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.

**Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.

* [downloadFileVersion](./downloadfileversion.md)
## Finish FileData Upload
Finish an upload of a FileData. This will mark it as "complete". After uploading the `file` for Avatars and Worlds you then have to upload a `signature` file.

> Missing coverage.
## Start FileData Upload
Starts an upload of a specific FilePart. This endpoint will return an AWS URL which you can PUT data to. You need to call this and receive a new AWS API URL for each `partNumber`. Please see AWS's REST documentation on "PUT Object to S3" on how to upload. Once all parts has been uploaded, proceed to `/finish` endpoint.

**Note:** `nextPartNumber` seems like it is always ignored. Despite it returning 0, first partNumber is always 1.

> Missing coverage.
## Check FileData Upload Status
Retrieves the upload status for file upload. Can currently only be accessed when `status` is `waiting`. Trying to access it on a file version already uploaded currently times out.

> Missing coverage.
	