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
    "created_at": "2026-02-04T15:27:51.400Z",
    "dropExpiryDate": "2026-02-28T21:00:00.000Z",
    "endDropDate": "2026-02-28T21:00:00.000Z",
    "id": "invd_87307694-6645-4486-aa76-057568fa8712",
    "isDisabled": false,
    "name": "February VRC+ Content Drop",
    "notificationDetails": {
      "body": "Thanks for subscribing to VRC+! You've unlocked the Love Me Daisy. Claim it in your inventory before February 28, 2026, 1:00PM PT!",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_70d9a8b5-e42c-4a21-a0ae-50107ddcaae4/1/file",
      "title": "February VRC+ Content Drop!"
    },
    "startDropDate": "2026-02-05T21:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "vrc+",
    "templateIds": [
      "invt_ff00927a-c4cb-49b7-ad51-4d1410560e7c"
    ],
    "updated_at": "2026-02-04T15:27:51.400Z"
  }
]
```
