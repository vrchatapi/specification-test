# getSubscriptions

## Issues
```
Response schema mismatch: Unexpected property at #/0/oculusSku, Unexpected property at #/0/googleProductId, Unexpected property at #/0/googlePlanId, Unexpected property at #/0/picoSku, Unexpected property at #/1/oculusSku, Unexpected property at #/1/googleProductId, Unexpected property at #/1/googlePlanId, Unexpected property at #/1/picoSku.
```

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
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/oculusSku
     */
    "oculusSku": "vrchat-plus-oculus-monthly",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/googleProductId
     */
    "googleProductId": "vrchat.plus.googleplay.monthly",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/googlePlanId
     */
    "googlePlanId": "monthly",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/picoSku
     */
    "picoSku": "vrchat_plus_pico_monthly",
    "amount": 999,
    "description": "VRChat Plus (Monthly)",
    "period": "month",
    "tier": 5
  },
  {
    "id": "vrchatplus-yearly",
    "steamItemId": "5000",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/oculusSku
     */
    "oculusSku": "vrchat-plus-oculus-yearly",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/googleProductId
     */
    "googleProductId": "vrchat.plus.googleplay.yearly",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/googlePlanId
     */
    "googlePlanId": "yearly",
    /**
     * Unexpected property.
     *
     * @schema Subscription
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/picoSku
     */
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
