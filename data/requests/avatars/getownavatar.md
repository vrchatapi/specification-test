# getOwnAvatar

## Request
`GET https://api.vrchat.cloud/api/1/users/usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701/avatar`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "authorId": "8JoV9XEdpo",
  "authorName": "vrchat",
  "created_at": "2016-11-30T03:47:35.000Z",
  "description": "Beep Boop",
  "featured": false,
  "id": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "name": "Robot",
  "releaseStatus": "public",
  "searchable": false,
  "styles": {
    "primary": null,
    "secondary": null
  },
  "tags": [
    "admin_featured_legacy",
    "admin_content_reviewed"
  ],
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "unityPackages": "<unstable: array of objects>",
  "updated_at": "<unstable: string>",
  "version": "<unstable: number>"
}
```
