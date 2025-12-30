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
* Invalid type at ``#/shelves/0highlightListing/products/9``,
* Invalid type at ``#/shelves/0highlightListing/products/10``,
* Invalid type at ``#/shelves/0highlightListing/products/11``,
* Invalid type at ``#/shelves/0listings/0products/0``,
* Invalid type at ``#/shelves/0listings/1products/0``,
* Invalid type at ``#/shelves/0listings/2products/0``,
* Invalid type at ``#/shelves/0listings/3products/0``,
* Invalid type at ``#/shelves/0listings/4products/0``,
* Invalid type at ``#/shelves/0listings/5products/0``,
* Invalid type at ``#/shelves/0listings/6products/0``,
* Invalid type at ``#/shelves/0listings/6products/1``,
* Invalid type at ``#/shelves/0listings/7products/0``,
* Invalid type at ``#/shelves/0listings/7products/1``,
* Invalid type at ``#/shelves/0listings/7products/2``,
* Invalid type at ``#/shelves/1highlightListing/products/0``,
* Invalid type at ``#/shelves/1highlightListing/products/1``,
* Invalid type at ``#/shelves/1highlightListing/products/2``,
* Invalid type at ``#/shelves/1highlightListing/products/3``,
* Invalid type at ``#/shelves/1highlightListing/products/4``,
* Invalid type at ``#/shelves/1highlightListing/products/5``,
* Invalid type at ``#/shelves/1highlightListing/products/6``,
* Invalid type at ``#/shelves/1highlightListing/products/7``,
* Invalid type at ``#/shelves/1highlightListing/products/8``,
* Invalid type at ``#/shelves/1listings/0products/0``,
* Invalid type at ``#/shelves/1listings/1products/0``,
* Invalid type at ``#/shelves/1listings/2products/0``,
* Invalid type at ``#/shelves/1listings/3products/0``,
* Invalid type at ``#/shelves/1listings/3products/1``,
* Invalid type at ``#/shelves/1listings/4products/0``,
* Invalid type at ``#/shelves/1listings/4products/1``,
* Invalid type at ``#/shelves/1listings/4products/2``,
* Invalid type at ``#/shelves/1listings/5products/0``.
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
    "ess_a0223769-30cd-4bf5-a74a-ee68faf05485",
    "ess_eefead70-e13b-4aa5-a9bd-d6478f9ebfe1"
  ],
  "shelves": [
    {
      "highlightListing": {
        "active": true,
        "buyerRefundable": false,
        "description": "A massive bundle to celebrate New Year’s Eve! Contains the Gold-plated Lighter, Blazing Sparkler, Roman Candle, Wooden Fortune Box, Fiery Sky Fireworks Show, Blow Up Warp Effect, Ring of Fire Portal, the Celebration Emoji Pack, and the New Year’s Sticker Pack.\n\nWe wanted you to have a Happy New Year, so we put a lot of stuff in here.",
        "displayName": "NYE Celebratory Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_6abe9222-a7a6-47f0-9278-271a330585d6",
        "imageId": "file_04d0a9c6-6b52-441d-bd2f-7390d3450d51",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 3000,
        "productIds": [
          "prod_372b0474-ba8a-4d31-88e7-77f558f9fa44",
          "prod_218ab6e6-67cd-4fca-9438-b37bf5712184",
          "prod_2dcd3b2f-a0d0-43fb-9acf-5f94ac969c01",
          "prod_4f9299d1-da78-47a1-b34d-dd35916b8056",
          "prod_e5d19d5d-f882-4cd7-8968-853fd1240a6f",
          "prod_f2c39274-1935-4eed-97b3-c70ef107d837",
          "prod_f18a5f63-ec5a-4d86-8588-61c5deaf078f",
          "prod_8271a1f9-d3ad-4d88-87a3-c0ee3e68ff9a",
          "prod_16d3c02e-0066-44e8-855c-a1cfdbf2810a",
          "prod_b35bf90a-4b9f-43b0-bec3-6c655cea6797",
          "prod_ccd69891-2acb-4757-bc90-f9993e01e036",
          "prod_b464ff1e-89fb-40ea-8f42-fee675f64e20"
        ],
        "productType": "listing",
        "products": [
          "prod_372b0474-ba8a-4d31-88e7-77f558f9fa44",
          "prod_218ab6e6-67cd-4fca-9438-b37bf5712184",
          "prod_2dcd3b2f-a0d0-43fb-9acf-5f94ac969c01",
          "prod_4f9299d1-da78-47a1-b34d-dd35916b8056",
          "prod_e5d19d5d-f882-4cd7-8968-853fd1240a6f",
          "prod_f2c39274-1935-4eed-97b3-c70ef107d837",
          "prod_f18a5f63-ec5a-4d86-8588-61c5deaf078f",
          "prod_8271a1f9-d3ad-4d88-87a3-c0ee3e68ff9a",
          "prod_16d3c02e-0066-44e8-855c-a1cfdbf2810a",
          "prod_b35bf90a-4b9f-43b0-bec3-6c655cea6797",
          "prod_ccd69891-2acb-4757-bc90-f9993e01e036",
          "prod_b464ff1e-89fb-40ea-8f42-fee675f64e20"
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
      "highlightListingId": "prod_6abe9222-a7a6-47f0-9278-271a330585d6",
      "id": "ess_a0223769-30cd-4bf5-a74a-ee68faf05485",
      "listingIds": [
        "prod_1e77232d-bbbd-400f-ba0a-00d7e726973e",
        "prod_c1c04228-db83-49c4-84d2-d2bdc7122da2",
        "prod_7b8282e5-5f2e-431c-8819-daae9cc55691",
        "prod_3527633d-542b-45f4-8e0d-d1ccda7e29fd",
        "prod_6bd8e979-5410-4315-a670-851dbf57b682",
        "prod_7300ac1c-afa5-474f-a19f-4dd6f9006d6e",
        "prod_edb21c50-8ae7-4d0f-b490-36343cc0374a",
        "prod_8f6ad7d5-1b1e-4330-a242-28f175ba1045"
      ],
      "listings": [
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Replaces the default VRChat Portal, turning it into a blazing, pyrotechnic-infused gateway. Features new animations and sound effects.\n\nProbably won’t catch you on fire. Probably.",
          "displayName": "Ring of Fire",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_1e77232d-bbbd-400f-ba0a-00d7e726973e",
          "imageId": "file_3b9d71fc-ba11-435d-8c62-f1d12e47d82e",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_372b0474-ba8a-4d31-88e7-77f558f9fa44"
          ],
          "productType": "listing",
          "products": [
            "prod_372b0474-ba8a-4d31-88e7-77f558f9fa44"
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
          "description": "A flip-style lighter, for pyrotechnical ignition… or anything else you could use a flame for. Interacts with flame-sensitive Contacts.\n\nLight ‘em up.",
          "displayName": "Gold-plated Lighter",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_c1c04228-db83-49c4-84d2-d2bdc7122da2",
          "imageId": "file_d375517e-c09e-4680-a0a8-99a4c9144889",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 700,
          "productIds": [
            "prod_f2c39274-1935-4eed-97b3-c70ef107d837"
          ],
          "productType": "listing",
          "products": [
            "prod_f2c39274-1935-4eed-97b3-c70ef107d837"
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
          "vrcPlusDiscountPrice": 630,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Radiates sparkles everywhere as it burns awayǃ Lasts about 45 Seconds before it burns out․ Can be activated via interaction or by using a fire source‚ like the Gold-plated Lighter․\n\nHot to the touchǃ I mean‚ if it was real․",
          "displayName": "Blazing Sparkler",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_7b8282e5-5f2e-431c-8819-daae9cc55691",
          "imageId": "file_3e286b75-b45b-42e8-b298-b9d2838a679b",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 400,
          "productIds": [
            "prod_2dcd3b2f-a0d0-43fb-9acf-5f94ac969c01"
          ],
          "productType": "listing",
          "products": [
            "prod_2dcd3b2f-a0d0-43fb-9acf-5f94ac969c01"
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
          "vrcPlusDiscountPrice": 360,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Blasts fireballs into the distance! Can be activated via interaction… or by using a fire source, like the Gold-plated Lighter.\n\nDon’t point it at your friends. Only your enemies.",
          "displayName": "Roman Candle",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_3527633d-542b-45f4-8e0d-d1ccda7e29fd",
          "imageId": "file_c8d954d0-8a93-448b-b632-ed7cae537fdf",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_218ab6e6-67cd-4fca-9438-b37bf5712184"
          ],
          "productType": "listing",
          "products": [
            "prod_218ab6e6-67cd-4fca-9438-b37bf5712184"
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
          "vrcPlusDiscountPrice": 810,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "A Japanese wooden omikuji! When activated, it produces a random fortune for you… or anyone else who wants to know what’s in their future.\n\nYou won’t have to burn any of these.",
          "displayName": "Wooden Fortune Box",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_6bd8e979-5410-4315-a670-851dbf57b682",
          "imageId": "file_f46414ed-e36e-4669-b229-6ba36f1abfed",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 600,
          "productIds": [
            "prod_e5d19d5d-f882-4cd7-8968-853fd1240a6f"
          ],
          "productType": "listing",
          "products": [
            "prod_e5d19d5d-f882-4cd7-8968-853fd1240a6f"
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
          "vrcPlusDiscountPrice": 540,
          "whenToExpire": "2026-02-05T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "description": "Changes the warp effect on your avatar. When entering or leaving an instance, you blow up… into a small fireworks display.\n\nDoesn’t hurt as much as you’d think.",
          "displayName": "Blow Up",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_7300ac1c-afa5-474f-a19f-4dd6f9006d6e",
          "imageId": "file_a0780c79-7adc-4b44-9187-9975a948ef28",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_8271a1f9-d3ad-4d88-87a3-c0ee3e68ff9a"
          ],
          "productType": "listing",
          "products": [
            "prod_8271a1f9-d3ad-4d88-87a3-c0ee3e68ff9a"
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
          "description": "Contains two Premium Emoji: BALLOONS!!! and Countdown! Perfect for throwing a celebration with your friends.\n\nA party in a box. Or, well, in a Premium Emoji Pack.",
          "displayName": "Celebration Emoji Pack",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_edb21c50-8ae7-4d0f-b490-36343cc0374a",
          "imageId": "file_19355120-63f9-450f-837f-8e301dd66aa3",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 500,
          "productIds": [
            "prod_f18a5f63-ec5a-4d86-8588-61c5deaf078f",
            "prod_16d3c02e-0066-44e8-855c-a1cfdbf2810a"
          ],
          "productType": "listing",
          "products": [
            "prod_f18a5f63-ec5a-4d86-8588-61c5deaf078f",
            "prod_16d3c02e-0066-44e8-855c-a1cfdbf2810a"
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
          "description": "A pack of three Premium Stickers, all of which celebrate the New Year! Contains the Happy New Year!, Resolution Frame, and NYE 2026 Premium Stickers.\n",
          "displayName": "New Year’s Sticker Pack",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_8f6ad7d5-1b1e-4330-a242-28f175ba1045",
          "imageId": "file_5997433c-4069-4d39-9af2-563097128fb8",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 200,
          "productIds": [
            "prod_b35bf90a-4b9f-43b0-bec3-6c655cea6797",
            "prod_ccd69891-2acb-4757-bc90-f9993e01e036",
            "prod_b464ff1e-89fb-40ea-8f42-fee675f64e20"
          ],
          "productType": "listing",
          "products": [
            "prod_b35bf90a-4b9f-43b0-bec3-6c655cea6797",
            "prod_ccd69891-2acb-4757-bc90-f9993e01e036",
            "prod_b464ff1e-89fb-40ea-8f42-fee675f64e20"
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
        }
      ],
      "shelfDescription": "",
      "shelfLayout": "highlightLeft",
      "shelfTitle": "New Year's Celebration",
      "updatedAt": "2025-12-29T21:00:26.048Z"
    },
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
