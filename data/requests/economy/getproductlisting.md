# getProductListing

## Issues
Response schema mismatch:
* Invalid type at ``#/products/0``,
* Invalid type at ``#/products/1``,
* Invalid type at ``#/products/2``,
* Invalid type at ``#/products/3``,
* Invalid type at ``#/products/4``,
* Invalid type at ``#/products/5``,
* Invalid type at ``#/products/6``,
* Invalid type at ``#/products/7``,
* Invalid type at ``#/products/8``,
* Invalid type at ``#/products/9``.
## Request
`GET https://api.vrchat.cloud/api/1/listing/prod_c9d1cf9b-e3be-4bed-8386-49f0a8d32910`

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
  "active": true,
  "buyerRefundable": true,
  "description": "Become a Tier 3 Supporterǃ You'll get everything in the previous tiers in addition to all the decoration toggles and access to the Video Playerǃ Additional video UI and screens at some mirror locations․",
  "displayName": "Tier 3 Supporter",
  "duration": 1,
  "durationType": "months",
  "groupIcon": "file_c899745b-b846-43f6-afd6-945931b66be8",
  "groupId": "grp_cccacf11-d0f5-47be-8e2c-8f5ed2d2edd6",
  "groupName": "The Black Cat",
  "hasAvatar": false,
  "hasUdon": true,
  "id": "prod_c9d1cf9b-e3be-4bed-8386-49f0a8d32910",
  "imageId": "file_a04721c3-f7b2-4943-b70f-dc6c340d5430",
  "imageUrl": null,
  "listingType": "subscription",
  "listingVariants": [
    {
      "effectiveFrom": "2023-11-23T03:24:23.062Z",
      "listingVariantId": "listvar_e8658b56-1662-436c-935a-afcf6a7d4fed",
      "nonRefundable": false,
      "quantity": 3,
      "sellerVariant": true,
      "unitPriceTokens": 1350
    },
    {
      "effectiveFrom": "2023-11-23T03:24:23.062Z",
      "listingVariantId": "listvar_f71bf9df-42b5-4fb2-89d4-52fdcd09e248",
      "nonRefundable": false,
      "quantity": 6,
      "sellerVariant": true,
      "unitPriceTokens": 1200
    },
    {
      "effectiveFrom": "2023-11-23T03:24:23.062Z",
      "listingVariantId": "listvar_236ae142-cbc0-454f-9e91-33969a63f3da",
      "nonRefundable": false,
      "quantity": 12,
      "sellerVariant": true,
      "unitPriceTokens": 1050
    }
  ],
  "priceTokens": 1500,
  "productIds": [
    "prod_ba9ed49e-155e-4560-968e-0400b23049b8",
    "prod_c8701344-5395-40ad-850d-63983a764cc6",
    "prod_06f126c3-0767-4f6f-b6e3-3413f28a3d50",
    "prod_aa9cfcd6-5a19-4c1c-9073-6b21c550fd53",
    "prod_2f76612c-7358-4b19-9097-2dd0d4e5dd4c",
    "prod_aac28b54-75d8-4c30-a0a2-da3f5ede0baf",
    "prod_a6ce09ae-1636-4dc5-86e6-26cf2db220e4",
    "prod_1dbb5caf-8ab4-4c78-afec-95ba50bca814",
    "prod_950db306-aad8-4026-b5a3-2409d0aa21a9",
    "prod_d18fa3a5-5b3a-4dd4-a00e-58436fa48df1"
  ],
  "productType": "listing",
  "products": [
    "prod_ba9ed49e-155e-4560-968e-0400b23049b8",
    "prod_c8701344-5395-40ad-850d-63983a764cc6",
    "prod_06f126c3-0767-4f6f-b6e3-3413f28a3d50",
    "prod_aa9cfcd6-5a19-4c1c-9073-6b21c550fd53",
    "prod_2f76612c-7358-4b19-9097-2dd0d4e5dd4c",
    "prod_aac28b54-75d8-4c30-a0a2-da3f5ede0baf",
    "prod_a6ce09ae-1636-4dc5-86e6-26cf2db220e4",
    "prod_1dbb5caf-8ab4-4c78-afec-95ba50bca814",
    "prod_950db306-aad8-4026-b5a3-2409d0aa21a9",
    "prod_d18fa3a5-5b3a-4dd4-a00e-58436fa48df1"
  ],
  "recurrable": false,
  "refundable": true,
  "sellerDisplayName": "spookyghostboo",
  "sellerId": "usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20",
  "stackable": true,
  "storeIds": [
    "esto_58413a17-1ea8-42cc-aca3-366acad5494d"
  ],
  "tags": []
}
```
