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
    "created_at": "2026-04-01T22:48:52.865Z",
    "dropExpiryDate": "2026-05-01T20:00:00.000Z",
    "endDropDate": "2026-05-01T20:00:00.000Z",
    "id": "invd_2940360e-0525-4aec-9a49-cb2c39edf24a",
    "isDisabled": false,
    "name": "April VRC+ Content Drop",
    "notificationDetails": {
      "body": "Thanks for subscribing to VRC+! You've unlocked the Bee Blaster. Claim it in your inventory before May 1st, 2026, 1:00PM PT!",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6443ac9d-7137-49d4-a599-7406546f63a6/1/file",
      "title": "April VRC+ Content Drop!"
    },
    "startDropDate": "2026-04-01T20:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "vrc+",
    "templateIds": [
      "invt_e696176b-4c31-469d-8866-92e11388d7c2"
    ],
    "updated_at": "2026-04-01T22:48:52.865Z"
  }
]
```
