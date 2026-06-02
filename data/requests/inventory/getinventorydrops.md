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
    "authorId": "usr_cd1b4a36-29ac-4bc9-aa5a-76b180338768",
    "created_at": "2026-05-29T16:02:44.922Z",
    "dropExpiryDate": "2026-07-01T07:00:00.000Z",
    "endDropDate": "2026-07-01T07:00:00.000Z",
    "id": "invd_1c7ed750-a4e4-45a4-b25d-746a05adcda8",
    "isDisabled": false,
    "name": "Pride Starter Pack",
    "notificationDetails": {
      "body": "Check your inventory to claim your new items.",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_49d30493-a56f-409e-89f3-96cf00dc728d/1/file",
      "title": "You have a new bundle to open!"
    },
    "startDropDate": "2026-06-01T20:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "everyone",
    "templateIds": [
      "invt_e5b41385-f65b-41f6-8167-6c33654b6c3f"
    ],
    "updated_at": "2026-05-29T16:02:44.922Z"
  }
]
```
