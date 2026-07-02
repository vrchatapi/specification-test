# getInventoryDrops

## Issues
Response schema mismatch:
* Missing property at ``#/0/status``,
* Unexpected property at ``#/0/dropStatus``.
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
    "created_at": "2026-05-29T16:32:38.202Z",
    "dropExpiryDate": "2026-08-01T07:00:00.000Z",
    "dropStatus": "active",
    "endDropDate": "2026-08-01T07:00:00.000Z",
    "id": "invd_278236c5-22c9-4254-83c8-989e41a10c8b",
    "isDisabled": false,
    "name": "Community Spirit Reward",
    "notificationDetails": {
      "body": "Check your inventory to claim your new items.",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7699300a-3d88-4b1d-b9f3-0f99ec87506c/1/file",
      "title": "You have a new bundle to open!"
    },
    "startDropDate": "2026-06-01T20:00:00.000Z",
    "tags": [],
    "targetGroup": "everyone",
    "templateIds": [
      "invt_ec9884bc-5e2e-4a87-98a4-c29694580cb4"
    ],
    "updated_at": "2026-06-05T23:21:36.542Z"
  }
]
```
