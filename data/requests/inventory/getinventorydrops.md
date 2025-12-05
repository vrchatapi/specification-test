# getInventoryDrops

## Request
`GET https://api.vrchat.cloud/api/1/inventory/drops`

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
[
  {
    "authorId": "usr_cec2b4f2-0db3-4a36-be78-b1876b6dec36",
    "created_at": "2025-06-10T20:28:34.697Z",
    "dropExpiryDate": null,
    "endDropDate": "2184-07-24T12:00:00.000Z",
    "id": "invd_46d07387-dd94-4724-8702-dd04a24821fb",
    "name": "Starter Bundle",
    "notificationDetails": {
      "body": "Check your inventory to claim your new items.",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7b100b16-94e0-4811-85f5-758bc7486403/1/file",
      "title": "You have a new bundle to open!"
    },
    "startDropDate": "2025-06-09T14:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "everyone",
    "templateIds": [
      "invt_04993011-c81e-42bb-8948-d70631c2fee2"
    ],
    "updated_at": "2025-06-10T20:28:34.697Z"
  },
  {
    "authorId": "usr_afcdd9e8-49f9-46ef-84d3-4d38cf9a870a",
    "created_at": "2025-12-04T19:40:26.100Z",
    "dropExpiryDate": "2025-12-31T00:00:00.000Z",
    "endDropDate": "2025-12-31T00:00:00.000Z",
    "id": "invd_92a7d7be-d3c2-4d7c-8f4d-bc50afe3aed7",
    "name": "TEST -- Community Spirit Drop",
    "notificationDetails": {
      "body": "Test drop",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_45e62860-7f9f-43ce-91a3-5c2dc493ebdc/1/file",
      "title": "Test"
    },
    "startDropDate": "2025-12-04T00:00:00.000Z",
    "status": "active",
    "tags": [
      "internal"
    ],
    "targetGroup": "admin",
    "templateIds": [
      "invt_769aebfa-326c-4a70-8eb2-e8aac179e7f1"
    ],
    "updated_at": "2025-12-04T19:40:26.100Z"
  }
]
```
