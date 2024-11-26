# getCurrentSubscriptions

## Request
`GET https://api.vrchat.cloud/api/1/auth/user/subscription`

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
    "active": true,
    "amount": 9999,
    "created_at": "2024-07-21T22:28:04.580Z",
    "description": "VRChat Plus (Yearly)",
    "expires": "2124-07-21T22:28:04.573Z",
    "id": "vrchatplus-yearly",
    "isBulkGift": false,
    "isGift": false,
    "licenseGroups": [
      "lgrp_608513da-b213-4e15-80af-bd88c27f0979"
    ],
    "period": "year",
    "starts": "",
    "status": "active",
    "steamItemId": "5000",
    "store": "Admin",
    "tier": 5,
    "transactionId": "txn_cbc67d95-db21-4879-bbbb-09a38c4e7b2c",
    "updated_at": "2024-07-21T22:28:04.580Z"
  }
]
```
