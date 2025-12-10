# getAvatar by id

## Request
`GET https://api.vrchat.cloud/api/1/avatars/avtr_26187637-0c30-4a09-86e1-bc928c07309e`

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
  "unityPackages": [
    {
      "assetVersion": 1,
      "created_at": "2023-04-07T00:04:38.907Z",
      "id": "unp_25448a1d-d4c7-4061-afff-bffbc9bb3293",
      "performanceRating": "Excellent",
      "platform": "standalonewindows",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    },
    {
      "assetVersion": 1,
      "created_at": "2023-04-07T00:06:24.528Z",
      "id": "unp_e723aa89-62aa-4cb5-9d78-def29cd92538",
      "performanceRating": "Excellent",
      "platform": "android",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-04-26T20:31:09.927Z",
      "id": "unp_ba6fb501-770d-4228-8c21-510af825e24b",
      "performanceRating": "Excellent",
      "platform": "ios",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    }
  ],
  "updated_at": "2025-09-23T18:34:47.677Z",
  "version": 58
}
```
