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
    "authorId": "usr_cd1b4a36-29ac-4bc9-aa5a-76b180338768",
    "created_at": "2025-11-06T20:09:05.122Z",
    "dropExpiryDate": "2025-12-04T21:00:00.000Z",
    "endDropDate": "2025-12-04T21:00:00.000Z",
    "id": "invd_b206bdd1-64a5-4d70-be2d-00327c9e8171",
    "name": "November VRC+ Content Drop",
    "notificationDetails": {
      "body": "Thanks for subscribing to VRC+! You've unlocked the Groan Tube. Claim it in your inventory before December 04, 2025, 1:00PM PT!",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1c2ca4af-f78a-45b2-9b86-bd05c9ed2bb5/1/file",
      "title": "November VRC+ Content Drop!"
    },
    "startDropDate": "2025-11-06T20:30:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "vrc+",
    "templateIds": [
      "invt_e1169457-ee24-4897-944a-dc6bed7840b7"
    ],
    "updated_at": "2025-11-06T20:09:05.122Z"
  }
]
```
