# getAvatar by id

## Issues
```
Response schema mismatch: Unexpected property at #/unityPackages/0/impostorUrl, Unexpected property at #/unityPackages/0/scanStatus, Unexpected property at #/unityPackages/1/impostorUrl, Unexpected property at #/unityPackages/1/scanStatus, Unexpected property at #/unityPackages/2/impostorUrl, Unexpected property at #/unityPackages/2/scanStatus, Unexpected property at #/unityPackages/3/impostorUrl, Unexpected property at #/unityPackages/3/scanStatus.
```

## Request
`get https://api.vrchat.cloud/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0`

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
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "id": "avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0",
  "name": "Bella Bear Public - by Mai",
  "description": "Bella Bear Public - by Mai",
  "authorId": "usr_6eb7f0ee-b71c-47a1-b37f-d2c6567a940e",
  "authorName": "Mai♡",
  "tags": [],
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_04a70244-6e90-4f49-b81e-5478fe90d056/5/file",
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_04a70244-6e90-4f49-b81e-5478fe90d056/5/256",
  "releaseStatus": "public",
  "version": 24,
  "featured": false,
  "unityPackages": [
    {
      "id": "unp_8b8587ce-a35b-4920-9815-bf72277fd11a",
      "created_at": "2022-01-27T01:34:07.257Z",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/0/impostorUrl
       */
      "impostorUrl": null,
      "unityVersion": "2019.4.30f1",
      "assetVersion": 1,
      "platform": "standalonewindows",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/0/scanStatus
       */
      "scanStatus": "unscanned"
    },
    {
      "id": "unp_c92a2ed4-e802-4730-bcea-fc83af6d86ed",
      "created_at": "2022-02-03T06:57:10.346Z",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/1/impostorUrl
       */
      "impostorUrl": null,
      "assetVersion": 1,
      "platform": "android",
      "unityVersion": "2019.4.30f1",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/1/scanStatus
       */
      "scanStatus": "unscanned"
    },
    {
      "id": "unp_1304627e-3420-46c2-bc17-8a85481e359a",
      "created_at": "2022-07-07T11:36:36.197Z",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/2/impostorUrl
       */
      "impostorUrl": null,
      "assetVersion": 1,
      "platform": "standalonewindows",
      "unityVersion": "2019.4.31f1",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/2/scanStatus
       */
      "scanStatus": "unscanned"
    },
    {
      "id": "unp_80cde87d-61cb-400e-9e35-69745257642a",
      "created_at": "2022-07-07T11:51:24.091Z",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/3/impostorUrl
       */
      "impostorUrl": null,
      "assetVersion": 1,
      "platform": "android",
      "unityVersion": "2019.4.31f1",
      /**
       * Unexpected property.
       *
       * @schema UnityPackage
       * @keyword additionalProperties
       *
       * #/properties/unityPackages/items/additionalProperties
       * #/unityPackages/3/scanStatus
       */
      "scanStatus": "unscanned"
    }
  ],
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "created_at": "2022-01-27T01:34:07.257Z",
  "updated_at": "2022-07-07T11:51:24.095Z"
}
```
