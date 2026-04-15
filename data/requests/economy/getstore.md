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
* Unexpected property at ``#/shelves/0highlightListing/attribution``,
* Unexpected property at ``#/shelves/0highlightListing/collabUserId``,
* Invalid type at ``#/shelves/0listings/0products/0``,
* Unexpected property at ``#/shelves/0listings/0/attribution``,
* Unexpected property at ``#/shelves/0listings/0/collabUserId``,
* Invalid type at ``#/shelves/0listings/1products/0``,
* Unexpected property at ``#/shelves/0listings/1/attribution``,
* Unexpected property at ``#/shelves/0listings/1/collabUserId``,
* Invalid type at ``#/shelves/0listings/2products/0``,
* Unexpected property at ``#/shelves/0listings/2/attribution``,
* Unexpected property at ``#/shelves/0listings/2/collabUserId``,
* Invalid type at ``#/shelves/0listings/3products/0``,
* Unexpected property at ``#/shelves/0listings/3/attribution``,
* Unexpected property at ``#/shelves/0listings/3/collabUserId``,
* Invalid type at ``#/shelves/0listings/4products/0``,
* Unexpected property at ``#/shelves/0listings/4/attribution``,
* Unexpected property at ``#/shelves/0listings/4/collabUserId``,
* Invalid type at ``#/shelves/0listings/5products/0``,
* Invalid type at ``#/shelves/0listings/5products/1``,
* Unexpected property at ``#/shelves/0listings/5/attribution``,
* Unexpected property at ``#/shelves/0listings/5/collabUserId``,
* Invalid type at ``#/shelves/0listings/6products/0``,
* Unexpected property at ``#/shelves/0listings/6/attribution``,
* Unexpected property at ``#/shelves/0listings/6/collabUserId``,
* Unexpected property at ``#/shelves/0/shelfBackgroundImageId``,
* Unexpected property at ``#/shelves/0/shelfIconImageId``,
* Unexpected property at ``#/shelves/0/shelfTabBackgroundImageId``.
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
    "ess_41f2ed39-00fe-42d3-ba93-d959a0b676f6"
  ],
  "shelves": [
    {
      "highlightListing": {
        "active": true,
        "attribution": {
          "creator": {
            "customName": "VRChat",
            "userId": "8JoV9XEdpo"
          }
        },
        "buyerRefundable": false,
        "collabUserId": "8JoV9XEdpo",
        "description": "Spring brings blooming sakura and new contentǃ Contains the Torii Gate Portal‚ Sakura Storm Warp Effect‚ Hanami Dango‚ Portable Cherry Tree‚ Wagasa‚ VRCat's Spring Vacation animated Sticker and Sakura Emoji Bundle․\n\nTake a deep breath and watch the sakura fall․",
        "displayName": "Hanami Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_12716737-c6ce-457d-b1bd-706eb2d3597d",
        "imageId": "file_574483a3-f915-4d25-b1f5-0c4fc1658c34",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 3000,
        "productIds": [
          "prod_6e40c2aa-8365-4ee4-9af2-66b07f974a80",
          "prod_10197751-7961-4d07-be9e-d33a1a569b9c",
          "prod_edd3d03b-20b2-4e1b-8702-446e07f06295",
          "prod_97f29ab0-51a6-4d69-83fc-f78e47204cf2",
          "prod_bc9ee062-de84-4b57-b594-15720c360636",
          "prod_7445da92-f6ff-4fed-806b-3bead79ea4d6",
          "prod_857a9809-7c28-4537-a597-259b79f3a4f2",
          "prod_84802a17-d626-4c5f-93d6-c598a3c8f4a6"
        ],
        "productType": "listing",
        "products": [
          "prod_6e40c2aa-8365-4ee4-9af2-66b07f974a80",
          "prod_10197751-7961-4d07-be9e-d33a1a569b9c",
          "prod_edd3d03b-20b2-4e1b-8702-446e07f06295",
          "prod_97f29ab0-51a6-4d69-83fc-f78e47204cf2",
          "prod_bc9ee062-de84-4b57-b594-15720c360636",
          "prod_7445da92-f6ff-4fed-806b-3bead79ea4d6",
          "prod_857a9809-7c28-4537-a597-259b79f3a4f2",
          "prod_84802a17-d626-4c5f-93d6-c598a3c8f4a6"
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
        "whenToExpire": "2026-06-01T21:00:00.000Z"
      },
      "highlightListingId": "prod_12716737-c6ce-457d-b1bd-706eb2d3597d",
      "id": "ess_41f2ed39-00fe-42d3-ba93-d959a0b676f6",
      "listingIds": [
        "prod_2a458f96-8563-4c82-82fb-6af60d45b26b",
        "prod_de67674f-ae48-4ab8-9a43-d09f71e8ecfa",
        "prod_3dd17d80-426d-4495-ab91-ae420b6e2756",
        "prod_8170fecf-7c7c-4dce-8799-315140096843",
        "prod_dfb2915d-e444-4190-9bfc-781bdf52aa1a",
        "prod_72649acb-d5c9-40c0-a2d4-9c14362bda1c",
        "prod_bb4f6bbf-fce5-48f3-9c7e-5bd92174c7fb"
      ],
      "listings": [
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "Replaces the default VRChat Portal with a traditional Japanese Torii Gate, themed for the beginning of spring. Features new animations and sound effects.\n\nMust be low tide…",
          "displayName": "Torii Gate",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_2a458f96-8563-4c82-82fb-6af60d45b26b",
          "imageId": "file_2e6d1a57-7469-4d4e-b35f-95d9334299cb",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1000,
          "productIds": [
            "prod_bc9ee062-de84-4b57-b594-15720c360636"
          ],
          "productType": "listing",
          "products": [
            "prod_bc9ee062-de84-4b57-b594-15720c360636"
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
          "vrcPlusDiscountPrice": 900,
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        },
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "Changes the warp effect on your avatar. When beckoned to another instance, you will be enveloped in a swirling vortex of sakura petals. Likewise, your arrival will be marked by a similar display.\n\nSakurafubuki…",
          "displayName": "Sakura Storm",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_de67674f-ae48-4ab8-9a43-d09f71e8ecfa",
          "imageId": "file_a2fd4979-b7b3-4fc6-986e-dfcd148a7d49",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_97f29ab0-51a6-4d69-83fc-f78e47204cf2"
          ],
          "productType": "listing",
          "products": [
            "prod_97f29ab0-51a6-4d69-83fc-f78e47204cf2"
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
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        },
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "A portable cherry tree in bloom! After it is deployed, sakura blossoms gently rain down from its branches.\n\nHanami, all year.",
          "displayName": "Portable Cherry Tree",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_3dd17d80-426d-4495-ab91-ae420b6e2756",
          "imageId": "file_1e23baac-4b8f-4ecb-8be9-0a1729c0dcf9",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1000,
          "productIds": [
            "prod_edd3d03b-20b2-4e1b-8702-446e07f06295"
          ],
          "productType": "listing",
          "products": [
            "prod_edd3d03b-20b2-4e1b-8702-446e07f06295"
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
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        },
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "A Japanese oil-paper umbrella, commonly referred to as wagasa. Opens with a burst of sakura petals!\n\nThey just keep falling…",
          "displayName": "Wagasa",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_8170fecf-7c7c-4dce-8799-315140096843",
          "imageId": "file_e499d700-d704-4c1e-a218-c39f5a9c8352",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 800,
          "productIds": [
            "prod_857a9809-7c28-4537-a597-259b79f3a4f2"
          ],
          "productType": "listing",
          "products": [
            "prod_857a9809-7c28-4537-a597-259b79f3a4f2"
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
          "vrcPlusDiscountPrice": 720,
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        },
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "Three mochi balls on a stick! You can eat them. Consumed (one by one!) when activated.\n\nThey don’t really make that popping sound in real life.",
          "displayName": "Hanami Dango",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_dfb2915d-e444-4190-9bfc-781bdf52aa1a",
          "imageId": "file_dd820228-9638-415f-bbd4-ccceceb7b233",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 600,
          "productIds": [
            "prod_7445da92-f6ff-4fed-806b-3bead79ea4d6"
          ],
          "productType": "listing",
          "products": [
            "prod_7445da92-f6ff-4fed-806b-3bead79ea4d6"
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
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        },
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "Contains the Sakura Breeze and Glowing Sakura Premium Emoji.\n\nSpring will fade, but the sakura blossoms will come again.\n",
          "displayName": "Sakura Emoji Bundle",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_72649acb-d5c9-40c0-a2d4-9c14362bda1c",
          "imageId": "file_c4fb07a8-4317-4ebc-87b6-ff225b835ed8",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 500,
          "productIds": [
            "prod_6e40c2aa-8365-4ee4-9af2-66b07f974a80",
            "prod_10197751-7961-4d07-be9e-d33a1a569b9c"
          ],
          "productType": "listing",
          "products": [
            "prod_6e40c2aa-8365-4ee4-9af2-66b07f974a80",
            "prod_10197751-7961-4d07-be9e-d33a1a569b9c"
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
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        },
        {
          "active": true,
          "attribution": {
            "creator": {
              "customName": "VRChat",
              "userId": "8JoV9XEdpo"
            }
          },
          "buyerRefundable": false,
          "collabUserId": "8JoV9XEdpo",
          "description": "An Animated Sticker! VRCat is just hanging out on the branch of a cherry tree.\n\nDo cats have their own golden week?",
          "displayName": "VRCat’s Spring Vacation",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_bb4f6bbf-fce5-48f3-9c7e-5bd92174c7fb",
          "imageId": "file_0ae4aac5-703f-435b-96a8-2e71a74c8672",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 200,
          "productIds": [
            "prod_84802a17-d626-4c5f-93d6-c598a3c8f4a6"
          ],
          "productType": "listing",
          "products": [
            "prod_84802a17-d626-4c5f-93d6-c598a3c8f4a6"
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
          "subtitle": "Sticker",
          "vrcPlusDiscountPrice": 180,
          "whenToExpire": "2026-06-01T21:00:00.000Z"
        }
      ],
      "shelfBackgroundImageId": "file_a88af487-16d0-4912-8f66-4c840e35d82c",
      "shelfDescription": "",
      "shelfIconImageId": "file_5846c7f0-58ce-4dc3-8257-52cf53f784ed",
      "shelfLayout": "highlightLeft",
      "shelfTabBackgroundImageId": "file_6be09fcb-1d0e-452f-ab75-4488225a3352",
      "shelfTitle": "Hanami Festival",
      "updatedAt": "2026-04-03T19:59:56.915Z"
    }
  ],
  "storeId": "esto_00000000-0000-0000-0000-000000000000",
  "storeType": "house",
  "tags": []
}
```
