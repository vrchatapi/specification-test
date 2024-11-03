# getFavoriteGroups

## Request
`GET https://vrchat.com/api/1/favorite/groups`

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
| x-vrc-request-id | `m30w6wh1grrbdpk1` |

```jsonc
[
  {
    "displayName": "world1",
    "id": "fvgrp_f07726b9-3fba-4239-90a9-90dbd3058f0d",
    "name": "world1",
    "ownerDisplayName": "8cf3def6b8cea",
    "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "tags": [],
    "type": "world",
    "visibility": "private"
  },
  {
    "displayName": "newName",
    "id": "fvgrp_e303b9a5-4534-496f-bfbd-2a18b0976f5c",
    "name": "avatars2",
    "ownerDisplayName": "8cf3def6b8cea",
    "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "tags": [],
    "type": "avatar",
    "visibility": "private"
  }
]
```
