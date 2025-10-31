# getSteamTransaction

## Issues
Response schema mismatch:
* Invalid type at ``#/agreement``.
## Request
`GET https://api.vrchat.cloud/api/1/Steam/transactions/txn_7b85e372-51b5-4445-b6e1-0e0d3f59aa8a`

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
{
  "id": "txn_7b85e372-51b5-4445-b6e1-0e0d3f59aa8a",
  "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "userDisplayName": "8cf3def6b8cea",
  "steam": {
    "walletInfo": {
      "state": "AB",
      "country": "CA",
      "currency": "CAD",
      "status": "Active"
    },
    "steamId": "76561199512069969",
    "orderId": "1685845973834",
    "steamUrl": "",
    "transId": "3254460074228531644"
  },
  "agreement": "",
  "status": "failed",
  "sandbox": false,
  "subscription": {
    "id": "vrchatplus-monthly",
    "steamItemId": "4000",
    "oculusSku": "vrchat-plus-oculus-monthly",
    "amount": 999,
    "description": "VRChat Plus (Monthly)",
    "period": "month",
    "tier": 5
  },
  "created_at": "2023-06-04T02:32:53.809Z",
  "updated_at": "2023-06-04T03:37:17.439Z",
  "error": null,
  "isGift": false,
  "isTokens": false
}
```
