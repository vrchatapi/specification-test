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
  },
  {
    "authorId": "usr_cd1b4a36-29ac-4bc9-aa5a-76b180338768",
    "created_at": "2025-12-17T01:10:40.708Z",
    "dropExpiryDate": "2026-02-05T21:00:00.000Z",
    "endDropDate": "2026-02-05T21:00:00.000Z",
    "id": "invd_60085e47-2672-46ae-b97a-6df7a9a4e8b6",
    "isDisabled": false,
    "name": "New Year's VRC+ Content Drop!",
    "notificationDetails": {
      "body": "Thanks for subscribing to VRC+! You’ve unlocked the Party Popper, Woo-arp Effect and 2026 Glasses on a Stick. Claim them in your inventory before February 5, 2026, 1:00PM PST!",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1efb5add-f130-4d86-8af6-d2bc1c4013e5/1/file",
      "title": "New Year's VRC+ Content Drop!"
    },
    "startDropDate": "2025-12-29T21:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "vrc+",
    "templateIds": [
      "invt_b0dc9369-5edf-425f-aff6-f929b8c17e7b"
    ],
    "updated_at": "2025-12-17T01:10:40.708Z"
  }
]
```
