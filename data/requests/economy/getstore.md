# getStore

## Issues
Response schema mismatch:
* Invalid type at ``#/shelves/0highlightListing/products/0``,
* Invalid type at ``#/shelves/0highlightListing/products/1``,
* Invalid type at ``#/shelves/0highlightListing/products/2``,
* Invalid type at ``#/shelves/0highlightListing/products/3``,
* Invalid type at ``#/shelves/0highlightListing/products/4``,
* Invalid type at ``#/shelves/0highlightListing/products/5``,
* Invalid type at ``#/shelves/0highlightListing/products/6``,
* Invalid type at ``#/shelves/0highlightListing/products/7``,
* Invalid type at ``#/shelves/0highlightListing/products/8``,
* Invalid type at ``#/shelves/0listings/0products/0``,
* Invalid type at ``#/shelves/0listings/1products/0``,
* Invalid type at ``#/shelves/0listings/2products/0``,
* Invalid type at ``#/shelves/0listings/3products/0``,
* Invalid type at ``#/shelves/0listings/3products/1``,
* Invalid type at ``#/shelves/0listings/4products/0``,
* Invalid type at ``#/shelves/0listings/4products/1``,
* Invalid type at ``#/shelves/0listings/4products/2``,
* Invalid type at ``#/shelves/0listings/5products/0``.
## Request
`GET https://api.vrchat.cloud/api/1/economy/store?storeId=esto_00000000-0000-0000-0000-000000000000&hydrateListings=true&hydrateProducts=true`

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
  "description": "",
  "displayName": "VRChat Official Store",
  "id": "esto_00000000-0000-0000-0000-000000000000",
  "sellerDisplayName": "VRChat",
  "sellerId": "usr_00000000-0000-0000-0000-000000000011",
  "shelfIds": [
    "ess_eefead70-e13b-4aa5-a9bd-d6478f9ebfe1"
  ],
  "shelves": [
    {
      "highlightListing": {
        "active": true,
        "buyerRefundable": false,
        "description": "Contains all of the frostbitten creations released during the December 2025 Content Drop! Includes Frosted Scribe, Portable Winterizer, Frost’s Bite, Glacial Construct, Winter Emoji Pack, and Cozy Snowman Pack.\n\nWe enter winter once again…\n",
        "displayName": "Winter’s Blessing",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_e9177cb3-53fd-4a48-b7c4-f840521adaae",
        "imageId": "file_a73a0610-ee17-4c53-95f4-ecf6a7611b9e",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 3000,
        "productIds": [
          "prod_f2f47540-a3a8-4246-8daf-54a828be2aa6",
          "prod_762f38e3-e54a-4714-8567-a1f092799bf3",
          "prod_b64dffd2-8447-4c69-8934-8e18e682819d",
          "prod_2213cdc4-7e63-4487-ae74-1fa7aa1926a4",
          "prod_356931bc-354a-48c9-bf43-d744336bd599",
          "prod_08309e3f-9307-4563-89c5-e26bcdc62b4e",
          "prod_1b1619d7-a8f5-42be-ab90-8636e50c369c",
          "prod_279b691d-6350-4046-8322-6ad08d2283ce",
          "prod_5084d6c8-34a8-4161-8987-f9aabb2a8a76"
        ],
        "productType": "listing",
        "products": [
          "prod_f2f47540-a3a8-4246-8daf-54a828be2aa6",
          "prod_762f38e3-e54a-4714-8567-a1f092799bf3",
          "prod_b64dffd2-8447-4c69-8934-8e18e682819d",
          "prod_2213cdc4-7e63-4487-ae74-1fa7aa1926a4",
          "prod_356931bc-354a-48c9-bf43-d744336bd599",
          "prod_08309e3f-9307-4563-89c5-e26bcdc62b4e",
          "prod_1b1619d7-a8f5-42be-ab90-8636e50c369c",
          "prod_279b691d-6350-4046-8322-6ad08d2283ce",
          "prod_5084d6c8-34a8-4161-8987-f9aabb2a8a76"
        ],
        "quantifiable": false,
        "recurrable": false,
        "refundable": true,
        "sellerDisplayName": "VRChat Store",
        "sellerId": "usr_00000000-0000-0000-0000-000000000011",
        "soldByVrc": true,
        "stackable": false,
        "storeIds": [
          "esto_00000000-0000-0000-0000-000000000000"
        ],
        "subtitle": "Bundle",
        "vrcPlusDiscountPrice": 2700,
        "whenToExpire": "2026-02-05T21:00:00.000Z"
      },
      "highlightListingId": "prod_e9177cb3-53fd-4a48-b7c4-f840521adaae",
      "id": "ess_eefead70-e13b-4aa5-a9bd-d6478f9ebfe1",
      "listingIds": [
        "prod_a30099ff-72af-4d7a-a3e1-99fa0deded3e",
        "prod_52e12dbd-2052-4f2f-adfd-f51e2ca91ec2",
        "prod_81e0541b-862c-41c0-b8b0-0a2e2c6c4892",
        "prod_85e487d3-b66e-448d-85a5-59decea3f4e0",
        "prod_b4d3d7bf-4f39-461b-b624-315f22df2750",
        "prod_4623c70d-fc98-43cf-8b2e-99c1fb4c433f"
      ],
      "listings": [
        {
          "active": true,
          "buyerRefundable": false,
          "description": "An enchanted, permanently frozen icicle. When used, it leaves a trail of snow behind that fades over time.\n\nPlease don’t try to eat the enchanted snow.",
          "displayName": "Frosted Scribe",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_a30099ff-72af-4d7a-a3e1-99fa0deded3e",
          "imageId": "file_60d24507-1fae-45d0-b8de-f655b89a4dab",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1000,
          "productIds": [
            "prod_b64dffd2-8447-4c69-8934-8e18e682819d"
          ],
          "productType": "listing",
          "products": [
            "prod_b64dffd2-8447-4c69-8934-8e18e682819d"
          ],
          "quantifiable": false,
          "recurrable": false,
          "refundable": true,
          "sellerDisplayName": "VRChat Store",
          "sellerId": "usr_00000000-0000-0000-0000-000000000011",
          "soldByVrc": true,
          "stackable": false,
          "storeIds": [
            "esto_00000000-0000-0000-0000-000000000000"
          ],
          "subtitle": "Item",
          "vrcPlusDiscountPrice": 900,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Replaces the default VRChat Portal, turning it into a construct of ice crystals. Features new animations and sound effects.\n\nDo not lick the Glacial Construct. I mean, don’t lick any portal, but especially not this one.",
          "displayName": "Glacial Construct",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_52e12dbd-2052-4f2f-adfd-f51e2ca91ec2",
          "imageId": "file_32936732-8641-40c6-a079-20f1616aaf7e",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_356931bc-354a-48c9-bf43-d744336bd599"
          ],
          "productType": "listing",
          "products": [
            "prod_356931bc-354a-48c9-bf43-d744336bd599"
          ],
          "quantifiable": false,
          "recurrable": false,
          "refundable": true,
          "sellerDisplayName": "VRChat Store",
          "sellerId": "usr_00000000-0000-0000-0000-000000000011",
          "soldByVrc": true,
          "stackable": false,
          "storeIds": [
            "esto_00000000-0000-0000-0000-000000000000"
          ],
          "subtitle": "Portal",
          "vrcPlusDiscountPrice": 810,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Changes the warp effect on your avatar. When entering or leaving an instance, a pillar of ice erupts from the ground, encapsulating you and freezing your avatar as you shift between worlds.\n\nVRChat freezing while moving between instances? Working as intended.",
          "displayName": "Frost’s Bite",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_81e0541b-862c-41c0-b8b0-0a2e2c6c4892",
          "imageId": "file_d1744786-50f0-44d6-a8a4-f38da11d129d",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_2213cdc4-7e63-4487-ae74-1fa7aa1926a4"
          ],
          "productType": "listing",
          "products": [
            "prod_2213cdc4-7e63-4487-ae74-1fa7aa1926a4"
          ],
          "quantifiable": false,
          "recurrable": false,
          "refundable": true,
          "sellerDisplayName": "VRChat Store",
          "sellerId": "usr_00000000-0000-0000-0000-000000000011",
          "soldByVrc": true,
          "stackable": false,
          "storeIds": [
            "esto_00000000-0000-0000-0000-000000000000"
          ],
          "subtitle": "Warp Effect",
          "vrcPlusDiscountPrice": 810,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Contains two winter-themed Emoji: Icy Vortex and Snowball. Best when kept frozen.\n\nAll the snow, none of the frostbite.\n",
          "displayName": "Winter Emoji Pack",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_85e487d3-b66e-448d-85a5-59decea3f4e0",
          "imageId": "file_087ad12e-c5e6-46bb-858d-717ca27e3c95",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 500,
          "productIds": [
            "prod_f2f47540-a3a8-4246-8daf-54a828be2aa6",
            "prod_762f38e3-e54a-4714-8567-a1f092799bf3"
          ],
          "productType": "listing",
          "products": [
            "prod_f2f47540-a3a8-4246-8daf-54a828be2aa6",
            "prod_762f38e3-e54a-4714-8567-a1f092799bf3"
          ],
          "quantifiable": false,
          "recurrable": false,
          "refundable": true,
          "sellerDisplayName": "VRChat Store",
          "sellerId": "usr_00000000-0000-0000-0000-000000000011",
          "soldByVrc": true,
          "stackable": false,
          "storeIds": [
            "esto_00000000-0000-0000-0000-000000000000"
          ],
          "subtitle": "Bundle",
          "vrcPlusDiscountPrice": 450,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Contains three Cozy Snowman Stickers: SNOWBALL FIGHT!, Thawing Out! and … Too Much Thawing.",
          "displayName": "Cozy Snowman Pack",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_b4d3d7bf-4f39-461b-b624-315f22df2750",
          "imageId": "file_225ace66-aa1f-432e-85b3-5f16f833beb1",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 200,
          "productIds": [
            "prod_08309e3f-9307-4563-89c5-e26bcdc62b4e",
            "prod_1b1619d7-a8f5-42be-ab90-8636e50c369c",
            "prod_279b691d-6350-4046-8322-6ad08d2283ce"
          ],
          "productType": "listing",
          "products": [
            "prod_08309e3f-9307-4563-89c5-e26bcdc62b4e",
            "prod_1b1619d7-a8f5-42be-ab90-8636e50c369c",
            "prod_279b691d-6350-4046-8322-6ad08d2283ce"
          ],
          "quantifiable": false,
          "recurrable": false,
          "refundable": true,
          "sellerDisplayName": "VRChat Store",
          "sellerId": "usr_00000000-0000-0000-0000-000000000011",
          "soldByVrc": true,
          "stackable": false,
          "storeIds": [
            "esto_00000000-0000-0000-0000-000000000000"
          ],
          "subtitle": "Bundle",
          "vrcPlusDiscountPrice": 180,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "When activated, the Portable Winterizer generates snow, roughly centered around its location for 3 minutes. ",
          "displayName": "Portable Winterizer",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_4623c70d-fc98-43cf-8b2e-99c1fb4c433f",
          "imageId": "file_b53e43de-82a9-4dd2-a291-23cddab3ff0d",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 500,
          "productIds": [
            "prod_5084d6c8-34a8-4161-8987-f9aabb2a8a76"
          ],
          "productType": "listing",
          "products": [
            "prod_5084d6c8-34a8-4161-8987-f9aabb2a8a76"
          ],
          "quantifiable": false,
          "recurrable": false,
          "refundable": true,
          "sellerDisplayName": "VRChat Store",
          "sellerId": "usr_00000000-0000-0000-0000-000000000011",
          "soldByVrc": true,
          "stackable": false,
          "storeIds": [
            "esto_00000000-0000-0000-0000-000000000000"
          ],
          "subtitle": "Item",
          "vrcPlusDiscountPrice": 450,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        }
      ],
      "shelfDescription": "",
      "shelfLayout": "highlightLeft",
      "shelfTitle": "December 2025",
      "updatedAt": "2025-12-11T01:04:13.512Z"
    }
  ],
  "storeId": "esto_00000000-0000-0000-0000-000000000000",
  "storeType": "house",
  "tags": []
}
```
