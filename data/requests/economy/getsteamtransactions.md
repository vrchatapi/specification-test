# getSteamTransactions

## Issues
```
Response schema mismatch: Unexpected property at #/0subscription/oculusSku, Invalid type at #/0/agreement, Unexpected property at #/0/userId, Unexpected property at #/0/userDisplayName, Unexpected property at #/0/isGift, Unexpected property at #/0/isTokens, Unexpected property at #/1subscription/oculusSku, Invalid type at #/1/agreement, Unexpected property at #/1/userId, Unexpected property at #/1/userDisplayName, Unexpected property at #/1/isGift, Unexpected property at #/1/isTokens, Unexpected property at #/2subscription/oculusSku, Invalid type at #/2/agreement, Unexpected property at #/2/userId, Unexpected property at #/2/userDisplayName, Unexpected property at #/2/isGift, Unexpected property at #/2/isTokens.
```

## Request
`get https://api.vrchat.cloud/api/1/Steam/transactions`

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

```jsonc
[
  {
    "id": "txn_e163ccc8-56eb-4320-8140-7bbcb1815b44",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/userId
     */
    "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/userDisplayName
     */
    "userDisplayName": "8cf3def6b8cea",
    "steam": {
      "walletInfo": {
        "state": "",
        "country": "CA",
        "currency": "CAD",
        "status": "Active"
      },
      "steamId": "76561199512069969",
      "orderId": "1685842827012",
      "steamUrl": "",
      "transId": "3254460074228293216"
    },
    /**
     * Invalid type.
     *
     * @schema TransactionAgreement
     * @keyword type
     *
     * #/items/properties/agreement/type
     * #/0/agreement
     */
    "agreement": "",
    "status": "failed",
    "sandbox": false,
    "subscription": {
      "id": "vrchatplus-monthly",
      "steamItemId": "4000",
      /**
       * Unexpected property.
       *
       * @schema Subscription
       * @keyword additionalProperties
       *
       * #/items/properties/subscription/additionalProperties
       * #/0subscription/oculusSku
       */
      "oculusSku": "vrchat-plus-oculus-monthly",
      "amount": 999,
      "description": "VRChat Plus (Monthly)",
      "period": "month",
      "tier": 5
    },
    "created_at": "2023-06-04T01:40:26.991Z",
    "updated_at": "2023-06-04T01:47:17.384Z",
    "error": "",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/isGift
     */
    "isGift": false,
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/isTokens
     */
    "isTokens": false
  },
  {
    "id": "txn_d866ff3b-3258-4d5a-8e43-2dfa756b3aee",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/userId
     */
    "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/userDisplayName
     */
    "userDisplayName": "8cf3def6b8cea",
    "steam": {
      "walletInfo": {
        "state": "AB",
        "country": "CA",
        "currency": "CAD",
        "status": "Active"
      },
      "steamId": "76561199512069969",
      "orderId": "1685843238019",
      "steamUrl": "",
      "transId": "3254460074228326291"
    },
    /**
     * Invalid type.
     *
     * @schema TransactionAgreement
     * @keyword type
     *
     * #/items/properties/agreement/type
     * #/1/agreement
     */
    "agreement": "",
    "status": "failed",
    "sandbox": false,
    "subscription": {
      "id": "vrchatplus-monthly",
      "steamItemId": "4000",
      /**
       * Unexpected property.
       *
       * @schema Subscription
       * @keyword additionalProperties
       *
       * #/items/properties/subscription/additionalProperties
       * #/1subscription/oculusSku
       */
      "oculusSku": "vrchat-plus-oculus-monthly",
      "amount": 999,
      "description": "VRChat Plus (Monthly)",
      "period": "month",
      "tier": 5
    },
    "created_at": "2023-06-04T01:47:17.993Z",
    "updated_at": "2023-06-04T02:27:00.537Z",
    "error": "",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/isGift
     */
    "isGift": false,
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/isTokens
     */
    "isTokens": false
  },
  {
    "id": "txn_7b85e372-51b5-4445-b6e1-0e0d3f59aa8a",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/userId
     */
    "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/userDisplayName
     */
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
    /**
     * Invalid type.
     *
     * @schema TransactionAgreement
     * @keyword type
     *
     * #/items/properties/agreement/type
     * #/2/agreement
     */
    "agreement": "",
    "status": "failed",
    "sandbox": false,
    "subscription": {
      "id": "vrchatplus-monthly",
      "steamItemId": "4000",
      /**
       * Unexpected property.
       *
       * @schema Subscription
       * @keyword additionalProperties
       *
       * #/items/properties/subscription/additionalProperties
       * #/2subscription/oculusSku
       */
      "oculusSku": "vrchat-plus-oculus-monthly",
      "amount": 999,
      "description": "VRChat Plus (Monthly)",
      "period": "month",
      "tier": 5
    },
    "created_at": "2023-06-04T02:32:53.809Z",
    "updated_at": "2023-06-04T03:37:17.439Z",
    "error": "",
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/isGift
     */
    "isGift": false,
    /**
     * Unexpected property.
     *
     * @schema Transaction
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/isTokens
     */
    "isTokens": false
  }
]
```
