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
  "acknowledgements": "",
  "attribution": null,
  "authorId": "usr_005507fe-9c05-47d5-af02-a21b4f552596",
  "authorName": "Creator Support",
  "created_at": "2023-04-07T00:04:38.907Z",
  "description": "VRRat",
  "featured": true,
  "id": "avtr_26187637-0c30-4a09-86e1-bc928c07309e",
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9849762e-8080-434d-b598-ce6f7d76b3d1/1/file",
  "listingDate": null,
  "name": "VRRat",
  "performance": {
    "android": "Excellent",
    "android-sort": 5,
    "ios": "Excellent",
    "ios-sort": 5,
    "standalonewindows": "Excellent",
    "standalonewindows-sort": 5
  },
  "releaseStatus": "public",
  "searchable": false,
  "styles": {
    "primary": "Animal",
    "secondary": "Pop Culture"
  },
  "tags": [
    "admin_featured_quest"
  ],
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_9849762e-8080-434d-b598-ce6f7d76b3d1/1/256",
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "unityPackages": "<unstable: array of objects>",
  "updated_at": "<unstable: string>",
  "version": "<unstable: number>"
}
```
