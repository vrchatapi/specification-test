# getSubscriptions

## Request
`GET https://api.vrchat.cloud/api/1/subscriptions`

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
    "id": "vrchat-community-testers",
    "steamItemId": "-10",
    "amount": 99999999,
    "description": "VRChat Pre-Release Features For Testers",
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
  },
  {
    "id": "vrchatplus-monthly",
    "steamItemId": "4000",
    "oculusSku": "vrchat-plus-oculus-monthly",
    "googleProductId": "vrchat.plus.googleplay.monthly",
    "googlePlanId": "monthly",
    "picoSku": "vrchat_plus_pico_monthly",
    "appleProductId": "vrchat.plus.apple.monthly",
    "amount": 999,
    "description": "VRChat+ (Monthly)",
    "period": "month",
    "tier": 5
  },
  {
    "id": "vrchatplus-open-beta",
    "steamItemId": "1234",
    "oculusSku": "vrchat-plus-oculus-monthly",
    "amount": 999,
    "description": "VRChat Plus (Open Beta)",
    "period": "month",
    "tier": 5
  },
  {
    "id": "vrchatplus-yearly",
    "steamItemId": "5000",
    "oculusSku": "vrchat-plus-oculus-yearly",
    "googleProductId": "vrchat.plus.googleplay.yearly",
    "googlePlanId": "yearly",
    "picoSku": "vrchat_plus_pico_yearly",
    "appleProductId": "vrchat.plus.apple.yearly",
    "amount": 9999,
    "description": "VRChat+ (Yearly)",
    "period": "year",
    "tier": 5
  }
]
```
