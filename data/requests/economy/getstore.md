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
* Unexpected property at ``#/shelves/0/shelfTabBackgroundImageId``,
* Invalid type at ``#/shelves/1highlightListing/products/0``,
* Invalid type at ``#/shelves/1highlightListing/products/1``,
* Invalid type at ``#/shelves/1highlightListing/products/2``,
* Invalid type at ``#/shelves/1highlightListing/products/3``,
* Invalid type at ``#/shelves/1highlightListing/products/4``,
* Invalid type at ``#/shelves/1highlightListing/products/5``,
* Invalid type at ``#/shelves/1highlightListing/products/6``,
* Invalid type at ``#/shelves/1highlightListing/products/7``,
* Invalid type at ``#/shelves/1highlightListing/products/8``,
* Invalid type at ``#/shelves/1highlightListing/products/9``,
* Invalid type at ``#/shelves/1highlightListing/products/10``,
* Invalid type at ``#/shelves/1highlightListing/products/11``,
* Invalid type at ``#/shelves/1highlightListing/products/12``,
* Invalid type at ``#/shelves/1highlightListing/products/13``,
* Invalid type at ``#/shelves/1highlightListing/products/14``,
* Invalid type at ``#/shelves/1highlightListing/products/15``,
* Invalid type at ``#/shelves/1highlightListing/products/16``,
* Invalid type at ``#/shelves/1highlightListing/products/17``,
* Unexpected property at ``#/shelves/1highlightListing/collabUserId``,
* Invalid type at ``#/shelves/1listings/0products/0``,
* Unexpected property at ``#/shelves/1listings/0/collabUserId``,
* Invalid type at ``#/shelves/1listings/1products/0``,
* Unexpected property at ``#/shelves/1listings/1/collabUserId``,
* Invalid type at ``#/shelves/1listings/2products/0``,
* Unexpected property at ``#/shelves/1listings/2/collabUserId``,
* Invalid type at ``#/shelves/1listings/3products/0``,
* Unexpected property at ``#/shelves/1listings/3/collabUserId``,
* Invalid type at ``#/shelves/1listings/4products/0``,
* Unexpected property at ``#/shelves/1listings/4/collabUserId``,
* Invalid type at ``#/shelves/1listings/5products/0``,
* Unexpected property at ``#/shelves/1listings/5/collabUserId``,
* Invalid type at ``#/shelves/1listings/6products/0``,
* Invalid type at ``#/shelves/1listings/6products/1``,
* Invalid type at ``#/shelves/1listings/6products/2``,
* Invalid type at ``#/shelves/1listings/6products/3``,
* Invalid type at ``#/shelves/1listings/6products/4``,
* Invalid type at ``#/shelves/1listings/6products/5``,
* Invalid type at ``#/shelves/1listings/6products/6``,
* Invalid type at ``#/shelves/1listings/6products/7``,
* Unexpected property at ``#/shelves/1listings/6/collabUserId``,
* Invalid type at ``#/shelves/1listings/7products/0``,
* Invalid type at ``#/shelves/1listings/7products/1``,
* Invalid type at ``#/shelves/1listings/7products/2``,
* Invalid type at ``#/shelves/1listings/7products/3``,
* Unexpected property at ``#/shelves/1listings/7/collabUserId``,
* Unexpected property at ``#/shelves/1/shelfBackgroundImageId``,
* Unexpected property at ``#/shelves/1/shelfIconImageId``,
* Unexpected property at ``#/shelves/1/shelfTabBackgroundImageId``.
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
    "ess_41f2ed39-00fe-42d3-ba93-d959a0b676f6",
    "ess_82f9ba66-35a8-4173-91fb-736d662fda8c"
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
    },
    {
      "highlightListing": {
        "active": true,
        "buyerRefundable": false,
        "collabUserId": "ubisoft",
        "description": "Rabbids invade VRChat?ǃ Theyre hereǃ And this bundle includes all their stuffǃ Includes the Flyswatter‚ Shopping Cart‚ Plunger‚ Time Washing Machine‚ BWAAAA-rp Effect‚ Rabbid Avatar‚ and both the Emoji and Premium Sticker Packǃ\n\nThats a lot of stuff․ Maybe even enough to reach the moon\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
        "displayName": "Rabbids x VRChat Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": true,
        "hasUdon": false,
        "id": "prod_ffa3be63-50bb-4dc8-b240-a889bcdf24b7",
        "imageId": "file_5dba76b0-9035-473c-8711-568cec07adc6",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 4800,
        "productIds": [
          "prod_a4bf729a-c79f-42bc-a71e-e906be512eb6",
          "prod_db7768c5-7c96-46e0-86a2-924bbe987d10",
          "prod_78548117-72f4-40e1-82dc-f8b9b62f0ee3",
          "prod_987011a2-bda9-4262-82e7-5cc0e0e61380",
          "prod_998da7d5-ef0d-4287-a246-007e978324ef",
          "prod_0383290d-cbd4-47b5-9e64-25e1a1b0b26c",
          "prod_049ee7ca-9f22-4652-882b-665d17413314",
          "prod_dbc6813e-d132-443e-901f-90dbe0a05f73",
          "prod_3dcf7aff-ee7f-4682-83b3-f31b96a51545",
          "prod_929795cd-6187-495f-b7d6-10948be83a00",
          "prod_5002ce59-7718-4c9a-b468-1cdafb972f80",
          "prod_1c3e3c34-b8ae-4ef4-8b21-2f4d6b32f198",
          "prod_01ff038a-5f8b-4485-ab23-238ae078443e",
          "prod_0c2ddc95-3c26-4a62-a0aa-8a79d979fb15",
          "prod_14382438-18d1-42fc-9dd7-dc798acfde72",
          "prod_dc36d6e3-5eb4-4e82-a8e6-d96ecf0a513d",
          "prod_0a43cc35-9ae4-4400-b350-d9cd2ed6da22",
          "prod_bb70e6e2-696b-417b-9f75-b35cb28ddc9d"
        ],
        "productType": "listing",
        "products": [
          "prod_a4bf729a-c79f-42bc-a71e-e906be512eb6",
          "prod_db7768c5-7c96-46e0-86a2-924bbe987d10",
          "prod_78548117-72f4-40e1-82dc-f8b9b62f0ee3",
          "prod_987011a2-bda9-4262-82e7-5cc0e0e61380",
          "prod_998da7d5-ef0d-4287-a246-007e978324ef",
          "prod_0383290d-cbd4-47b5-9e64-25e1a1b0b26c",
          "prod_049ee7ca-9f22-4652-882b-665d17413314",
          "prod_dbc6813e-d132-443e-901f-90dbe0a05f73",
          "prod_3dcf7aff-ee7f-4682-83b3-f31b96a51545",
          "prod_929795cd-6187-495f-b7d6-10948be83a00",
          "prod_5002ce59-7718-4c9a-b468-1cdafb972f80",
          "prod_1c3e3c34-b8ae-4ef4-8b21-2f4d6b32f198",
          "prod_01ff038a-5f8b-4485-ab23-238ae078443e",
          "prod_0c2ddc95-3c26-4a62-a0aa-8a79d979fb15",
          "prod_14382438-18d1-42fc-9dd7-dc798acfde72",
          "prod_dc36d6e3-5eb4-4e82-a8e6-d96ecf0a513d",
          "prod_0a43cc35-9ae4-4400-b350-d9cd2ed6da22",
          "prod_bb70e6e2-696b-417b-9f75-b35cb28ddc9d"
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
        "vrcPlusDiscountPrice": 4320,
        "whenToExpire": "2026-04-14T21:00:00.000Z"
      },
      "highlightListingId": "prod_ffa3be63-50bb-4dc8-b240-a889bcdf24b7",
      "id": "ess_82f9ba66-35a8-4173-91fb-736d662fda8c",
      "listingIds": [
        "prod_949fca5d-0385-4770-87a4-2060596540d5",
        "prod_cec90f88-8851-46a7-aaa6-36de654acaaa",
        "prod_deb9cfb7-f9e2-4231-a8ce-0b6a0e1fa806",
        "prod_296586c8-e822-4505-98ad-92fdeeb1fd13",
        "prod_547c3101-9bf4-47ba-8e55-56b8aae8bfbf",
        "prod_b75495f2-d14f-4b10-9195-256aa575ce0b",
        "prod_ba2785e1-50c7-4cb5-b343-9e5540c7abbd",
        "prod_ed3d2f70-52ac-4b9a-a812-d565835dc7cc"
      ],
      "listings": [
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "A Rabbidǃ Complete with all the features you'd expect in a VRChat avatar including face tracking․ How could you say no to that face?\n\nBWWWWAAAAAAAAAAAAAAAAAA\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "Rabbid",
          "duration": null,
          "durationType": null,
          "hasAvatar": true,
          "hasUdon": false,
          "id": "prod_949fca5d-0385-4770-87a4-2060596540d5",
          "imageId": "file_1ac466f7-3113-4be0-96c2-08a12dd8d563",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1800,
          "productIds": [
            "prod_a4bf729a-c79f-42bc-a71e-e906be512eb6"
          ],
          "productType": "listing",
          "products": [
            "prod_a4bf729a-c79f-42bc-a71e-e906be512eb6"
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
          "subtitle": "Avatar",
          "vrcPlusDiscountPrice": 1620,
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "Replaces the default VRChat Portal with a Washing Machine? Uses unknown Rabbid technology to transport Rabbids （and everyone else） between locations․ And‚ uh‚ time․ Features new animations and sound effects․\n\nThey couldve built it with anything․ They chose a Washing Machine․\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "Time Washing Machine",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_cec90f88-8851-46a7-aaa6-36de654acaaa",
          "imageId": "file_a0a66250-b9f0-42a7-bc4b-31687d38677b",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1000,
          "productIds": [
            "prod_db7768c5-7c96-46e0-86a2-924bbe987d10"
          ],
          "productType": "listing",
          "products": [
            "prod_db7768c5-7c96-46e0-86a2-924bbe987d10"
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
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "Changes the warp effect on your avatar․ Whenever youre summoned to another instance‚ youll be sucked into a vortex‚ courtesy of Secret Rabbid Technology․ Youre encouraged to scream like they do while teleporting․ This will help․ Trust us․\n\nWhat is Secret Rabbid Technology? How would we know? Do we look like Rayman?\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "BWAAAA-rp Effect",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_deb9cfb7-f9e2-4231-a8ce-0b6a0e1fa806",
          "imageId": "file_05669bd9-3914-4087-bda6-cfca91c0fead",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 900,
          "productIds": [
            "prod_78548117-72f4-40e1-82dc-f8b9b62f0ee3"
          ],
          "productType": "listing",
          "products": [
            "prod_78548117-72f4-40e1-82dc-f8b9b62f0ee3"
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
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "A Shopping Cart that follows you around․ Used for carrying your friends around․ Also‚ for reaching the moon․ Dont ask․\n\nExtremely durable․ Even Rabbids cant break it․\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "Shopping Cart",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_296586c8-e822-4505-98ad-92fdeeb1fd13",
          "imageId": "file_50cbc019-283a-4b8f-8a1e-a95b514fc08f",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1200,
          "productIds": [
            "prod_987011a2-bda9-4262-82e7-5cc0e0e61380"
          ],
          "productType": "listing",
          "products": [
            "prod_987011a2-bda9-4262-82e7-5cc0e0e61380"
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
          "vrcPlusDiscountPrice": 1080,
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "Its a Plunger․ Well‚ sort of․ Used by Rabbids for unknown purposes․ Can be launched at well‚ anything․\n\nNo‚ really․ You can launch it․ Yes‚ we know thats not how plungers work․\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "The Plunger",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_547c3101-9bf4-47ba-8e55-56b8aae8bfbf",
          "imageId": "file_36f63ee7-32b1-470c-8d29-24a17da5fc32",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 1000,
          "productIds": [
            "prod_998da7d5-ef0d-4287-a246-007e978324ef"
          ],
          "productType": "listing",
          "products": [
            "prod_998da7d5-ef0d-4287-a246-007e978324ef"
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
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "Its a Flyswatter․ Rabbids seem to love these‚ for some reason? Pick it up and swing it around․ Its bendy․\n\nSLAP․ SLAP․ SLAP․ SLAP․ SLAP․\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "Flyswatter",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_b75495f2-d14f-4b10-9195-256aa575ce0b",
          "imageId": "file_479c656a-131d-4b89-a0e1-60d655a24796",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 800,
          "productIds": [
            "prod_0383290d-cbd4-47b5-9e64-25e1a1b0b26c"
          ],
          "productType": "listing",
          "products": [
            "prod_0383290d-cbd4-47b5-9e64-25e1a1b0b26c"
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
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "A collection of eight Rabbid-based Emojiǃ\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "Rabbid Emoji Pack",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_ba2785e1-50c7-4cb5-b343-9e5540c7abbd",
          "imageId": "file_e1b67982-49c8-49f1-9b12-a10c46c317fa",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 500,
          "productIds": [
            "prod_5002ce59-7718-4c9a-b468-1cdafb972f80",
            "prod_1c3e3c34-b8ae-4ef4-8b21-2f4d6b32f198",
            "prod_01ff038a-5f8b-4485-ab23-238ae078443e",
            "prod_0c2ddc95-3c26-4a62-a0aa-8a79d979fb15",
            "prod_14382438-18d1-42fc-9dd7-dc798acfde72",
            "prod_dc36d6e3-5eb4-4e82-a8e6-d96ecf0a513d",
            "prod_0a43cc35-9ae4-4400-b350-d9cd2ed6da22",
            "prod_bb70e6e2-696b-417b-9f75-b35cb28ddc9d"
          ],
          "productType": "listing",
          "products": [
            "prod_5002ce59-7718-4c9a-b468-1cdafb972f80",
            "prod_1c3e3c34-b8ae-4ef4-8b21-2f4d6b32f198",
            "prod_01ff038a-5f8b-4485-ab23-238ae078443e",
            "prod_0c2ddc95-3c26-4a62-a0aa-8a79d979fb15",
            "prod_14382438-18d1-42fc-9dd7-dc798acfde72",
            "prod_dc36d6e3-5eb4-4e82-a8e6-d96ecf0a513d",
            "prod_0a43cc35-9ae4-4400-b350-d9cd2ed6da22",
            "prod_bb70e6e2-696b-417b-9f75-b35cb28ddc9d"
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
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        },
        {
          "active": true,
          "buyerRefundable": false,
          "collabUserId": "ubisoft",
          "description": "A Premium Sticker Pack‚ featuring the Rabbidsǃ Includes the POWWWEEERRRR‚ POW‚ Rabbid Doki‚ and Rabbids Charge stickers․\n\nRabbids TM ＆ © Ubisoft Entertainment․ All rights Reserved",
          "displayName": "Rabbid Sticker Pack",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_ed3d2f70-52ac-4b9a-a812-d565835dc7cc",
          "imageId": "file_470a2017-481e-4dad-83e7-781d1a41e7df",
          "imageUrl": null,
          "listingType": "permanent",
          "priceTokens": 200,
          "productIds": [
            "prod_049ee7ca-9f22-4652-882b-665d17413314",
            "prod_dbc6813e-d132-443e-901f-90dbe0a05f73",
            "prod_3dcf7aff-ee7f-4682-83b3-f31b96a51545",
            "prod_929795cd-6187-495f-b7d6-10948be83a00"
          ],
          "productType": "listing",
          "products": [
            "prod_049ee7ca-9f22-4652-882b-665d17413314",
            "prod_dbc6813e-d132-443e-901f-90dbe0a05f73",
            "prod_3dcf7aff-ee7f-4682-83b3-f31b96a51545",
            "prod_929795cd-6187-495f-b7d6-10948be83a00"
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
          "whenToExpire": "2026-04-14T21:00:00.000Z"
        }
      ],
      "shelfBackgroundImageId": "file_af2ef9a2-8338-4e0b-9821-dd298dc78d8e",
      "shelfDescription": "",
      "shelfIconImageId": "file_7b072458-2d3a-4f41-ac6d-f993d283bfb2",
      "shelfLayout": "highlightLeft",
      "shelfTabBackgroundImageId": "file_b3559a69-fff3-42c8-a254-738e962417fc",
      "shelfTitle": "Rabbids x VRChat",
      "updatedAt": "2026-03-24T23:05:58.214Z"
    }
  ],
  "storeId": "esto_00000000-0000-0000-0000-000000000000",
  "storeType": "house",
  "tags": []
}
```
