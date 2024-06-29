# getSubscriptions

## Request
`get https://vrchat.com/api/1/subscriptions`

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
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-portugal-a5k` |
| x-vrc-api-version | `master-build-2024-06-27-barry-jerkcraveable` |

```jsonc
[
  {
    "id": "vrchatplus-monthly",
    "steamItemId": "4000",
    "oculusSku": "vrchat-plus-oculus-monthly",
    "googleProductId": "vrchat.plus.googleplay.monthly",
    "googlePlanId": "monthly",
    "picoSku": "vrchat_plus_pico_monthly",
    "amount": 999,
    "description": "VRChat Plus (Monthly)",
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
