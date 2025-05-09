# Files

## List Files
Returns a list of files

> Missing coverage.
## Create File
Creates a new File object

> Missing coverage.
## Delete File
Deletes a File object.

> Missing coverage.
## Show File
Shows general information about the "File" object. Each File can have several "Version"'s, and each Version can have multiple real files or "Data" blobs.

> Missing coverage.
## Create File Version
Creates a new FileVersion. Once a Version has been created, proceed to the `/file/{fileId}/{versionId}/file/start` endpoint to start a file upload.

> Missing coverage.
## Delete File Version
Delete a specific version of a file. You can only delete the latest version.

> Missing coverage.
## Download File Version
Downloads the file with the provided version number.

**Version Note:** Version 0 is always when the file was created. The real data is usually always located in version 1 and up.

**Extension Note:** Files are not guaranteed to have a file extensions. UnityPackage files tends to have it, images through this endpoint do not. You are responsible for appending file extension from the `extension` field when neccesary.

> Missing coverage.
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
## Get File Version Analysis
Get the performance analysis for the uploaded assets of an avatar

> Missing coverage.
## Get File Version Analysis Security
Get the security performance analysis for the uploaded assets of an avatar

> Missing coverage.
## Get File Version Analysis Standard
Get the standard performance analysis for the uploaded assets of an avatar

> Missing coverage.
## Upload gallery image, icon, emoji or sticker
Upload an image, which can be an icon, gallery image, sticker or emoji

> Missing coverage.
## Upload icon
Upload an icon

> Missing coverage.
## Upload gallery image
Upload a gallery image

> Missing coverage.
	