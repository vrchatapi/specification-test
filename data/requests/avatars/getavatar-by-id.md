# getAvatar by id

## Request
`get https://vrchat.com/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0`

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
  "authorId": "usr_6eb7f0ee-b71c-47a1-b37f-d2c6567a940e",
  "authorName": "Mai♡",
  "created_at": "2022-01-27T01:34:07.257Z",
  "description": "Bella Bear Public - by Mai",
  "featured": false,
  "id": "avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0",
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_04a70244-6e90-4f49-b81e-5478fe90d056/6/file",
  "name": "Bella Bear Public - by Mai",
  "releaseStatus": "public",
  "tags": [],
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_04a70244-6e90-4f49-b81e-5478fe90d056/6/256",
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "unityPackages": [
    {
      "assetVersion": 1,
      "created_at": "2022-01-27T01:34:07.257Z",
      "id": "unp_8b8587ce-a35b-4920-9815-bf72277fd11a",
      "performanceRating": "None",
      "platform": "standalonewindows",
      "scanStatus": "passed",
      "unityVersion": "2019.4.30f1",
      "variant": "standard"
    },
    {
      "assetVersion": 1,
      "created_at": "2022-02-03T06:57:10.346Z",
      "id": "unp_c92a2ed4-e802-4730-bcea-fc83af6d86ed",
      "performanceRating": "None",
      "platform": "android",
      "scanStatus": "unscanned",
      "unityVersion": "2019.4.30f1",
      "variant": "standard"
    },
    {
      "assetVersion": 1,
      "created_at": "2022-07-07T11:36:36.197Z",
      "id": "unp_1304627e-3420-46c2-bc17-8a85481e359a",
      "performanceRating": "VeryPoor",
      "platform": "standalonewindows",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "standard"
    },
    {
      "assetVersion": 1,
      "created_at": "2022-07-07T11:51:24.091Z",
      "id": "unp_80cde87d-61cb-400e-9e35-69745257642a",
      "performanceRating": "VeryPoor",
      "platform": "android",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "standard"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-04-26T21:30:32.655Z",
      "id": "unp_290ee8b3-8aea-4135-97d8-327c061c11ed",
      "performanceRating": "VeryPoor",
      "platform": "ios",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "standard"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-09-10T05:56:42.590Z",
      "id": "unp_77b74da8-b081-4a53-b807-22af46015c54",
      "performanceRating": "VeryPoor",
      "platform": "standalonewindows",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-09-10T06:01:04.946Z",
      "id": "unp_e0fdf793-d546-4d52-b5ad-8b60b3901bb5",
      "performanceRating": "VeryPoor",
      "platform": "android",
      "scanStatus": "passed",
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-09-16T22:05:24.654Z",
      "id": "unp_1721aa0c-d1bd-482f-8fdd-0e9232b3e4f7",
      "impostorizerVersion": "1.0.1",
      "performanceRating": "None",
      "platform": "standalonewindows",
      "scanStatus": "unscanned",
      "unityVersion": "2022.3.22f1",
      "variant": "impostor"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-09-16T22:05:25.988Z",
      "id": "unp_952f2cb6-5020-4b54-88b1-1a755a58252b",
      "impostorizerVersion": "1.0.1",
      "performanceRating": "None",
      "platform": "android",
      "scanStatus": "unscanned",
      "unityVersion": "2022.3.22f1",
      "variant": "impostor"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-09-16T22:05:28.234Z",
      "id": "unp_34536fbf-4da2-4e02-8f7c-366882ca367a",
      "impostorizerVersion": "1.0.1",
      "performanceRating": "None",
      "platform": "ios",
      "scanStatus": "unscanned",
      "unityVersion": "2022.3.22f1",
      "variant": "impostor"
    },
    {
      "assetVersion": 1,
      "created_at": "2024-09-21T23:31:17.879Z",
      "id": "unp_52c87f6c-a5e4-47c6-bcbe-c61a4b1a58c0",
      "performanceRating": "None",
      "platform": "ios",
      "scanStatus": "failed",
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    }
  ],
  "updated_at": "2024-04-26T21:30:32.659Z",
  "version": 27
}
```
