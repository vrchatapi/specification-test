# getCurrentSubscriptions

## Request
`GET https://vrchat.com/api/1/auth/user/subscription`

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
| x-vrc-request-id | `m2y1bu42x1ebq1xr` |

```jsonc
[
  {
    "id": "vrchatplus-yearly",
    "transactionId": "txn_cbc67d95-db21-4879-bbbb-09a38c4e7b2c",
    "store": "Admin",
    "steamItemId": "5000",
    "amount": 9999,
    "description": "VRChat Plus (Yearly)",
    "period": "year",
    "tier": 5,
    "active": true,
    "status": "active",
    "starts": "",
    "expires": "2124-07-21T22:28:04.573Z",
    "created_at": "2024-07-21T22:28:04.580Z",
    "updated_at": "2024-07-21T22:28:04.580Z",
    "licenseGroups": [
      "lgrp_608513da-b213-4e15-80af-bd88c27f0979"
    ],
    "isGift": false
  }
]
```
