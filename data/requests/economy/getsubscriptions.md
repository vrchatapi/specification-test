# getSubscriptions

## Request
`get https://api.vrchat.cloud/api/1/subscriptions`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
[
  {
    "id": "vrchatplus-monthly",
    "steamItemId": "4000",
    "oculusSku": "vrchat-plus-oculus-monthly",
    "amount": 999,
    "description": "VRChat Plus (Monthly)",
    "period": "month",
    "tier": 5
  },
  {
    "id": "vrchatplus-yearly",
    "steamItemId": "5000",
    "oculusSku": "vrchat-plus-oculus-yearly",
    "amount": 9999,
    "description": "VRChat Plus (Yearly)",
    "period": "year",
    "tier": 5
  },
  {
    "id": "vrchatplus-open-beta",
    "steamItemId": "1234",
    "amount": 999,
    "description": "VRChat Plus (Open Beta)",
    "period": "month",
    "tier": 5
  },
  {
    "id": "vrchat-internal-beta",
    "steamItemId": "-1",
    "amount": 99999999,
    "description": "VRChat Internal Features for Testing",
    "period": "month",
    "tier": 5
  }
]
```
