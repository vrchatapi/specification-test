# getOwnAvatar

## Request
`get https://api.vrchat.cloud/api/1/users/usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701/avatar`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-encoding | `gzip` |
| content-type | `text/html; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "id": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "name": "Robot",
  "description": "Beep Boop",
  "authorId": "8JoV9XEdpo",
  "authorName": "vrchat",
  "tags": [
    "admin_featured_legacy"
  ],
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "releaseStatus": "public",
  "version": 15,
  "featured": false,
  "unityPackages": [
    {
      "id": "unp_78931757-c699-4ca5-b70e-e8bd4d6d1e9b",
      "unityVersion": "5.6.3p1",
      "assetVersion": 1,
      "platform": "standalonewindows",
      "created_at": "2018-01-26T16:00:23.586Z"
    },
    {
      "id": "unp_79d11a9b-cc69-45a5-a63c-7e0c5489db1a",
      "unityVersion": "2017.4.15f1",
      "assetVersion": 1,
      "platform": "android",
      "created_at": "2019-05-09T20:20:35.354Z"
    },
    {
      "id": "unp_8b767c59-d0a0-4a7c-bce4-aeb3884255f6",
      "unityVersion": "2017.4.15f1",
      "assetVersion": 1,
      "platform": "standalonewindows",
      "created_at": "2019-05-09T20:22:14.724Z"
    },
    {
      "id": "unp_1a11a20c-0446-4820-a231-625f0362db1c",
      "unityVersion": "2018.4.17f1",
      "assetVersion": 1,
      "platform": "android",
      "created_at": "2020-10-01T19:47:27.538Z"
    }
  ],
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "created_at": "2016-11-30T03:47:35.000Z",
  "updated_at": "2023-04-06T23:24:41.405Z"
}
```
