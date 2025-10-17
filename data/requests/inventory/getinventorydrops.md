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
    "created_at": "2025-09-15T19:21:58.680Z",
    "dropExpiryDate": "2025-10-31T20:00:00.000Z",
    "endDropDate": "2025-10-31T20:00:00.000Z",
    "id": "invd_04d98edd-79db-4c4e-a156-7e07510aee10",
    "name": "September VRC+ Content Drop",
    "notificationDetails": {
      "body": "Thanks for subscribing to VRC+! You’ve unlocked the Campfire and Marshmallow on a Stick. Claim them in your inventory before October 31, 2025, 1:00PM PST!",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8e505bdc-08ac-4f94-ad3e-304ca4476dd1/1/file",
      "title": "September VRC+ Content Drop!"
    },
    "startDropDate": "2025-09-15T20:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "vrc+",
    "templateIds": [
      "invt_8eb37473-6c95-4d40-ba5c-65c65a200e10"
    ],
    "updated_at": "2025-09-15T19:21:58.680Z"
  },
  {
    "authorId": "usr_cd1b4a36-29ac-4bc9-aa5a-76b180338768",
    "created_at": "2025-10-16T22:38:11.784Z",
    "dropExpiryDate": "2025-11-14T00:00:00.000Z",
    "endDropDate": "2025-11-14T00:00:00.000Z",
    "id": "invd_cec78b4b-abd0-4d81-afbd-7d29a59cab63",
    "name": "Reference Cube Warp Effect Test",
    "notificationDetails": {
      "body": "The new Reference Cube Warp Effect is now available for Open Beta participants!\nTest it out and share your feedback — this item will be removed before the 2025.4.1 Open Beta ends.",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f26855ef-09cb-472e-a1a3-21ee2f13096c/1/file",
      "title": "Test out our new Warp Effect!"
    },
    "startDropDate": "2025-10-16T15:00:00.000Z",
    "status": "active",
    "tags": [],
    "targetGroup": "everyone",
    "templateIds": [
      "invt_08e50f24-8807-4ec2-a0f9-9e008371280b"
    ],
    "updated_at": "2025-10-16T22:38:11.784Z"
  }
]
```
