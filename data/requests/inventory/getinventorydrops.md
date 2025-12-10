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
    "created_at": "2025-12-08T23:37:52.911Z",
    "dropExpiryDate": "2025-12-31T01:00:00.000Z",
    "endDropDate": "2025-12-31T01:00:00.000Z",
    "id": "invd_84eb9acf-b8a8-4066-b973-dc229007ff2a",
    "isDisabled": false,
    "name": "Festive Starter Pack",
    "notificationDetails": {
      "body": "Check your inventory to claim your new items.",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8bc6c95c-0b8f-481b-bee8-a9510f558e61/1/file",
      "title": "You have a new bundle to open!"
    },
    "startDropDate": "2025-12-08T23:30:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "everyone",
    "templateIds": [
      "invt_f609a9c2-85ef-4884-9b34-c4eea637a406"
    ],
    "updated_at": "2025-12-08T23:37:52.911Z"
  }
]
```
