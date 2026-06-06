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
  },
  {
    "authorId": "usr_cd1b4a36-29ac-4bc9-aa5a-76b180338768",
    "created_at": "2026-05-29T16:32:38.202Z",
    "dropExpiryDate": "2026-08-01T07:00:00.000Z",
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
    "status": "active",
    "tags": [],
    "targetGroup": "everyone",
    "templateIds": [
      "invt_ec9884bc-5e2e-4a87-98a4-c29694580cb4"
    ],
    "updated_at": "2026-06-05T23:21:36.542Z"
  },
  {
    "authorId": "usr_cd1b4a36-29ac-4bc9-aa5a-76b180338768",
    "created_at": "2026-06-04T19:28:45.305Z",
    "dropExpiryDate": "2026-07-01T21:00:00.000Z",
    "endDropDate": "2026-07-01T21:00:00.000Z",
    "id": "invd_51d7ea8b-e075-47ef-86b9-db73ee81b88e",
    "isDisabled": false,
    "name": "June VRC+ Content Drop",
    "notificationDetails": {
      "body": "Thanks for subscribing to VRC+! You've unlocked the Inflatable Swimmies. Claim it in your inventory before July 1st, 2026!",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7a5797a3-b464-4c23-9983-c3812dfd1af2/1/file",
      "title": "June VRC+ Content Drop!"
    },
    "startDropDate": "2026-06-05T21:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "vrc+",
    "templateIds": [
      "invt_6cc850ed-113a-4829-9865-4de358180c59"
    ],
    "updated_at": "2026-06-04T19:28:45.305Z"
  }
]
```
