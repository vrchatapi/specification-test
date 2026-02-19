# getStoreShelves

## Issues
Response schema mismatch:
* Invalid type at ``#/0highlightListing/products/0``,
* Invalid type at ``#/0highlightListing/products/1``,
* Invalid type at ``#/0highlightListing/products/2``,
* Invalid type at ``#/0highlightListing/products/3``,
* Invalid type at ``#/0highlightListing/products/4``,
* Invalid type at ``#/0highlightListing/products/5``,
* Invalid type at ``#/0highlightListing/products/6``,
* Invalid type at ``#/0highlightListing/products/7``,
* Invalid type at ``#/0highlightListing/products/8``,
* Invalid type at ``#/0highlightListing/products/9``,
* Invalid type at ``#/0listings/0products/0``,
* Unexpected property at ``#/0listings/0/subscriberExclusive``,
* Invalid type at ``#/0listings/1products/0``,
* Invalid type at ``#/0listings/2products/0``,
* Invalid type at ``#/0listings/3products/0``,
* Invalid type at ``#/0listings/4products/0``,
* Invalid type at ``#/0listings/5products/0``,
* Invalid type at ``#/0listings/6products/0``,
* Invalid type at ``#/0listings/6products/1``,
* Invalid type at ``#/0listings/7products/0``,
* Invalid type at ``#/0listings/7products/1``,
* Invalid type at ``#/0listings/7products/2``,
* Invalid type at ``#/1highlightListing/products/0``,
* Invalid type at ``#/1highlightListing/products/1``,
* Invalid type at ``#/1highlightListing/products/2``,
* Invalid type at ``#/1highlightListing/products/3``,
* Invalid type at ``#/1highlightListing/products/4``,
* Invalid type at ``#/1highlightListing/products/5``,
* Invalid type at ``#/1highlightListing/products/6``,
* Invalid type at ``#/1highlightListing/products/7``,
* Invalid type at ``#/1highlightListing/products/8``,
* Invalid type at ``#/1highlightListing/products/9``,
* Invalid type at ``#/1listings/0products/0``,
* Invalid type at ``#/1listings/1products/0``,
* Invalid type at ``#/1listings/2products/0``,
* Invalid type at ``#/1listings/3products/0``,
* Invalid type at ``#/1listings/4products/0``,
* Invalid type at ``#/1listings/5products/0``,
* Invalid type at ``#/1listings/5products/1``,
* Invalid type at ``#/1listings/6products/0``,
* Invalid type at ``#/1listings/6products/1``,
* Invalid type at ``#/1listings/6products/2``.
## Request
`GET https://api.vrchat.cloud/api/1/economy/store/shelves?storeId=esto_00000000-0000-0000-0000-000000000000&hydrateListings=true&fetch=all`

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
    "highlightListing": {
      "active": true,
      "buyerRefundable": false,
      "description": "Contains everything from the Lunar New Year Shop Update! Includes Festival Gate Portal, Lucky Lantern Warp Effect, Pellet Drum, Good Fortune Coin, Firecrackers, Lunar New Year Emoji Bundle and Lunar New Year Sticker Pack.\n\nContains an abundance of good fortune.\n",
      "displayName": "Bundle of Good Fortune",
      "duration": null,
      "durationType": null,
      "hasAvatar": false,
      "hasUdon": false,
      "id": "prod_308db9f3-6ca3-4d9e-84dc-391238392ced",
      "imageId": "file_5ab5419a-907a-4a2d-82ee-68b394fe7284",
      "imageUrl": null,
      "listingType": "permanent",
      "priceTokens": 3000,
      "productIds": [
        "prod_160a42d4-1dbd-4a93-a507-26ca6f02428a",
        "prod_d831fada-d02d-4135-97ab-1a59c4f21060",
        "prod_a76b0ac3-6ec7-4335-bdec-1ff718d60ae7",
        "prod_7ce3819b-6df7-42b6-964f-e8273a1fb078",
        "prod_6409eb93-d98f-47d4-87ba-b23fe666074a",
        "prod_f7378e43-cffc-4702-92d0-0539468aeff1",
        "prod_9460cd29-a66f-471f-8346-e8b02baa38e4",
        "prod_a4692e98-958d-4616-a40a-8373adc8f7b2",
        "prod_e13600bf-c86b-4b19-8436-af268f71539f",
        "prod_be284494-7385-4af8-9f11-132d94fa0543"
      ],
      "productType": "listing",
      "products": [
        "prod_160a42d4-1dbd-4a93-a507-26ca6f02428a",
        "prod_d831fada-d02d-4135-97ab-1a59c4f21060",
        "prod_a76b0ac3-6ec7-4335-bdec-1ff718d60ae7",
        "prod_7ce3819b-6df7-42b6-964f-e8273a1fb078",
        "prod_6409eb93-d98f-47d4-87ba-b23fe666074a",
        "prod_f7378e43-cffc-4702-92d0-0539468aeff1",
        "prod_9460cd29-a66f-471f-8346-e8b02baa38e4",
        "prod_a4692e98-958d-4616-a40a-8373adc8f7b2",
        "prod_e13600bf-c86b-4b19-8436-af268f71539f",
        "prod_be284494-7385-4af8-9f11-132d94fa0543"
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
      "whenToExpire": "2026-04-01T21:00:00.000Z"
    },
    "highlightListingId": "prod_308db9f3-6ca3-4d9e-84dc-391238392ced",
    "id": "ess_0d4bf809-084c-4d67-b7ef-f9d727c8dad0",
    "listingIds": [
      "prod_692afee8-c2e4-466f-b1c8-ecd6c276d307",
      "prod_86710d97-c260-4eeb-af9e-5165ae6c91be",
      "prod_18f6713d-1a0d-4181-931e-be403f370f0a",
      "prod_2bdb6a6f-0973-43e2-a9a7-b7d6d7924ee8",
      "prod_070f24f6-6ee6-44a2-a349-38c934065395",
      "prod_d32287e0-9e20-41de-9e24-ab54b9d5e2c9",
      "prod_4054936c-a284-40aa-9949-464a6d96bea8",
      "prod_e3bea13a-87ae-4965-871d-8156282b575a"
    ],
    "listings": [
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Free for VRC+ subscribers! Claim your Lucky Red Envelope for a special gift.\n\nVRCat got one, so you get one, too.\n",
        "displayName": "Lucky Red Envelope",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_692afee8-c2e4-466f-b1c8-ecd6c276d307",
        "imageId": "file_26d46325-abe2-4795-b717-bbb4e1ea62f1",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 0,
        "productIds": [
          "prod_c37cfbb7-aa3a-419a-af9d-ad534c419693"
        ],
        "productType": "listing",
        "products": [
          "prod_c37cfbb7-aa3a-419a-af9d-ad534c419693"
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
        "subscriberExclusive": true,
        "subtitle": "Credit Bundle",
        "vrcPlusDiscountPrice": 0,
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Replaces the default VRChat Portal with a traditional paifang. A gate… to wherever you want to go. Features new animations and sound effects.\n\nAn ancient gate… for new adventures.\n",
        "displayName": "Festival Gate",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_86710d97-c260-4eeb-af9e-5165ae6c91be",
        "imageId": "file_10bc8473-c1cd-4413-a0d9-980b53acd46f",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1000,
        "productIds": [
          "prod_160a42d4-1dbd-4a93-a507-26ca6f02428a"
        ],
        "productType": "listing",
        "products": [
          "prod_160a42d4-1dbd-4a93-a507-26ca6f02428a"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Changes the warp effect on your avatar. Appear (or disappear) into a swirling display of floating lanterns.\n\nA little luck – for you, and everyone you’re joining.\n",
        "displayName": "Lucky Lantern",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_18f6713d-1a0d-4181-931e-be403f370f0a",
        "imageId": "file_b2ffbf19-b117-4cba-a716-173819080375",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_d831fada-d02d-4135-97ab-1a59c4f21060"
        ],
        "productType": "listing",
        "products": [
          "prod_d831fada-d02d-4135-97ab-1a59c4f21060"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Light ‘em – but be warned, they burn fast! Burns for a few seconds before exploding. Activate manually… or with a flame.\n\nUseful for scaring your friends… and chasing away the nian.\n",
        "displayName": "Firecrackers",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_2bdb6a6f-0973-43e2-a9a7-b7d6d7924ee8",
        "imageId": "file_9fada7e2-38ce-488f-9d59-a3690df8cef6",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1000,
        "productIds": [
          "prod_6409eb93-d98f-47d4-87ba-b23fe666074a"
        ],
        "productType": "listing",
        "products": [
          "prod_6409eb93-d98f-47d4-87ba-b23fe666074a"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Use it to make some noise! Used by children and nostalgic adults to ring in the (Lunar) New Year.\n\n…that’s a lot of noise for such a small drum.\n",
        "displayName": "Pellet Drum",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_070f24f6-6ee6-44a2-a349-38c934065395",
        "imageId": "file_4d2f5e6d-6485-4561-8837-d016dc88d3d3",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 800,
        "productIds": [
          "prod_a76b0ac3-6ec7-4335-bdec-1ff718d60ae7"
        ],
        "productType": "listing",
        "products": [
          "prod_a76b0ac3-6ec7-4335-bdec-1ff718d60ae7"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "A golden coin… for good luck! Celebrates the Year of the Horse! Activate it to give it a flip.\n\nEveryone needs a lucky horse.\n",
        "displayName": "Good Fortune Coin",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_d32287e0-9e20-41de-9e24-ab54b9d5e2c9",
        "imageId": "file_e8439c44-1c71-43c0-8ec4-7d11b4cec641",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 600,
        "productIds": [
          "prod_7ce3819b-6df7-42b6-964f-e8273a1fb078"
        ],
        "productType": "listing",
        "products": [
          "prod_7ce3819b-6df7-42b6-964f-e8273a1fb078"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "A bundle, with a little extra luck. Contains the Sky Lantern and Zodiac Horse Premium Emoji.\n\nHow much luck? Well, that’s for you to find out.\n",
        "displayName": "Lunar New Year Emoji Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_4054936c-a284-40aa-9949-464a6d96bea8",
        "imageId": "file_150ace2a-09e1-4a25-96b9-ae1e7c17e191",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 500,
        "productIds": [
          "prod_9460cd29-a66f-471f-8346-e8b02baa38e4",
          "prod_f7378e43-cffc-4702-92d0-0539468aeff1"
        ],
        "productType": "listing",
        "products": [
          "prod_9460cd29-a66f-471f-8346-e8b02baa38e4",
          "prod_f7378e43-cffc-4702-92d0-0539468aeff1"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Contains VRCat’s Lucky Surprise, Celebratory VRCat, and Tết Stickers.\n\nAn extra lucky pack for an extra lucky year!\n",
        "displayName": "Lunar New Year Sticker Pack",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_e3bea13a-87ae-4965-871d-8156282b575a",
        "imageId": "file_285a821f-f5ee-468a-b219-9cc30cc3164d",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 200,
        "productIds": [
          "prod_a4692e98-958d-4616-a40a-8373adc8f7b2",
          "prod_e13600bf-c86b-4b19-8436-af268f71539f",
          "prod_be284494-7385-4af8-9f11-132d94fa0543"
        ],
        "productType": "listing",
        "products": [
          "prod_a4692e98-958d-4616-a40a-8373adc8f7b2",
          "prod_e13600bf-c86b-4b19-8436-af268f71539f",
          "prod_be284494-7385-4af8-9f11-132d94fa0543"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      }
    ],
    "shelfDescription": "",
    "shelfLayout": "highlightLeft",
    "shelfTitle": "Lunar New Year",
    "updatedAt": "2026-02-19T00:17:42.761Z"
  },
  {
    "highlightListing": {
      "active": true,
      "buyerRefundable": false,
      "description": "Contains everything from the Valentines 2026 Shop Update! Includes Cupid's Bow, Grand Assortment, Long-stemmed Rose, Valentine's Invitation Warp Effect, Love's Passage Portal, Valentine's Emoji Bundle and Valentine's Sticker Pack.\n\nLove conquers all! <3\n",
      "displayName": "Valentine’s Ultimate Gift",
      "duration": null,
      "durationType": null,
      "hasAvatar": false,
      "hasUdon": false,
      "id": "prod_b338bf31-dfbe-4936-b52d-6528da714755",
      "imageId": "file_8d7c4e84-255f-4b29-b721-5ee365a71e02",
      "imageUrl": null,
      "listingType": "permanent",
      "priceTokens": 3000,
      "productIds": [
        "prod_6672e484-651f-464d-9548-0de355acba56",
        "prod_9734c9da-f02f-40af-a72b-f43e0d9318f4",
        "prod_75182527-5719-4625-a38a-1380be009fce",
        "prod_3a6e9b06-fa3c-4418-829d-704c8c862dcc",
        "prod_d26a0951-c9f8-4c4d-a425-e3dcb9050da9",
        "prod_949b9e5d-57bd-47b3-8069-631721b81c99",
        "prod_a58b51e1-ece2-46c2-9c40-bd34677d43a8",
        "prod_1afb0005-6d06-4293-95ec-8467ee353de8",
        "prod_0baeccd0-f284-4579-a856-b41249a61bed",
        "prod_9b857e15-8ee5-47c0-9dee-1d8e24bb2afd"
      ],
      "productType": "listing",
      "products": [
        "prod_6672e484-651f-464d-9548-0de355acba56",
        "prod_9734c9da-f02f-40af-a72b-f43e0d9318f4",
        "prod_75182527-5719-4625-a38a-1380be009fce",
        "prod_3a6e9b06-fa3c-4418-829d-704c8c862dcc",
        "prod_d26a0951-c9f8-4c4d-a425-e3dcb9050da9",
        "prod_949b9e5d-57bd-47b3-8069-631721b81c99",
        "prod_a58b51e1-ece2-46c2-9c40-bd34677d43a8",
        "prod_1afb0005-6d06-4293-95ec-8467ee353de8",
        "prod_0baeccd0-f284-4579-a856-b41249a61bed",
        "prod_9b857e15-8ee5-47c0-9dee-1d8e24bb2afd"
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
      "whenToExpire": "2026-02-28T21:00:00.000Z"
    },
    "highlightListingId": "prod_b338bf31-dfbe-4936-b52d-6528da714755",
    "id": "ess_01ba1a22-6edb-4b1e-9f4e-53446dcd699d",
    "listingIds": [
      "prod_b17da366-5828-480e-b41c-1611fda5a349",
      "prod_a49424cd-ec2e-40c2-91fd-fa30e6575c1c",
      "prod_fa026485-c3bc-45df-9581-ffffa4b4c68f",
      "prod_3ac965a3-3ed1-4ade-a726-3a33a5e93d24",
      "prod_cd68dee0-c6e6-4865-8950-9a72127ab709",
      "prod_f99789bc-aa8f-461f-98e9-65e32b561724",
      "prod_110b38e1-4d47-4e0e-8978-0e7cafbc6d13"
    ],
    "listings": [
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Replaces the default VRChat Portal, with a glowing heart-shaped passage, built with love. Whose love? Ours? Yours? Theirs? Dealer’s choice. Features new animations and sound effects.\n\nWhere will love take you?\n",
        "displayName": "Love’s Passage",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_b17da366-5828-480e-b41c-1611fda5a349",
        "imageId": "file_a7b3aeac-209a-4bc8-a34a-893309467801",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_6672e484-651f-464d-9548-0de355acba56"
        ],
        "productType": "listing",
        "products": [
          "prod_6672e484-651f-464d-9548-0de355acba56"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Changes the warp effect on your avatar. When beckoned to another instance, you’ll disappear into a cloud of hearts… and a very special invitation. Likewise, your arrival will be marked by similar (but reversed) fanfare.  \n\nA Valentine’s Valentine, if you will.",
        "displayName": "Valentine’s Invitation",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_a49424cd-ec2e-40c2-91fd-fa30e6575c1c",
        "imageId": "file_55c2e4fe-2146-42a3-a5f7-cf9cb9164fdd",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_9734c9da-f02f-40af-a72b-f43e0d9318f4"
        ],
        "productType": "listing",
        "products": [
          "prod_9734c9da-f02f-40af-a72b-f43e0d9318f4"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Cupid’s (in)famous bow! Use it to shoot an enchanted pink arrow at your enemies, friends, or target of affection. Your choice. Love conquers all, as they say.\n\nYou gotta shoot your shot.",
        "displayName": "Cupid’s Bow",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_fa026485-c3bc-45df-9581-ffffa4b4c68f",
        "imageId": "file_ed72eeed-3ac9-4614-bae7-d891335e8146",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1000,
        "productIds": [
          "prod_75182527-5719-4625-a38a-1380be009fce"
        ],
        "productType": "listing",
        "products": [
          "prod_75182527-5719-4625-a38a-1380be009fce"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "A red, velvet-covered heart-shaped box of chocolates. Present them to someone who really loves chocolate. Or, you know, eat them all yourself. Your call.\n\nMay contain traces of peanut, coconut, and… maybe an extra polygon or two.\n",
        "displayName": "Grand Assortment",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_3ac965a3-3ed1-4ade-a726-3a33a5e93d24",
        "imageId": "file_b1e5908c-fbde-4b82-b35e-23632f10c82f",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 800,
        "productIds": [
          "prod_9b857e15-8ee5-47c0-9dee-1d8e24bb2afd"
        ],
        "productType": "listing",
        "products": [
          "prod_9b857e15-8ee5-47c0-9dee-1d8e24bb2afd"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "A rose – the timeless symbol of love! When held, it produces a gentle shower of hearts. \n\nShakespeare tells me you can call this one whatever you want.\n",
        "displayName": "Long-stemmed Rose",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_cd68dee0-c6e6-4865-8950-9a72127ab709",
        "imageId": "file_e925e3d5-7d5f-413c-8660-45c8cfbae56e",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 600,
        "productIds": [
          "prod_0baeccd0-f284-4579-a856-b41249a61bed"
        ],
        "productType": "listing",
        "products": [
          "prod_0baeccd0-f284-4579-a856-b41249a61bed"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Contains two Premium Emoji: Cupid’s Rose and Affection!!! Perfect for a romantic evening. Or, you know, just showing your friends you love them.\n\nLove comes in many forms.\n",
        "displayName": "Valentine’s Emoji Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_f99789bc-aa8f-461f-98e9-65e32b561724",
        "imageId": "file_e63cf0ad-f243-4b2c-ac08-5f4b60de8f32",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 500,
        "productIds": [
          "prod_3a6e9b06-fa3c-4418-829d-704c8c862dcc",
          "prod_d26a0951-c9f8-4c4d-a425-e3dcb9050da9"
        ],
        "productType": "listing",
        "products": [
          "prod_3a6e9b06-fa3c-4418-829d-704c8c862dcc",
          "prod_d26a0951-c9f8-4c4d-a425-e3dcb9050da9"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Contains three Valentine’s themed Stickers: Candy Hearts, ILU, and Be Mine.\n\nUse ‘em near a special someone.\n",
        "displayName": "Valentine’s Sticker Pack",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_110b38e1-4d47-4e0e-8978-0e7cafbc6d13",
        "imageId": "file_0cdb1699-c629-41e8-a0bb-cf9a2f06e9ed",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 200,
        "productIds": [
          "prod_1afb0005-6d06-4293-95ec-8467ee353de8",
          "prod_a58b51e1-ece2-46c2-9c40-bd34677d43a8",
          "prod_949b9e5d-57bd-47b3-8069-631721b81c99"
        ],
        "productType": "listing",
        "products": [
          "prod_1afb0005-6d06-4293-95ec-8467ee353de8",
          "prod_a58b51e1-ece2-46c2-9c40-bd34677d43a8",
          "prod_949b9e5d-57bd-47b3-8069-631721b81c99"
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
        "whenToExpire": "2026-02-28T21:00:00.000Z"
      }
    ],
    "shelfDescription": "",
    "shelfLayout": "highlightLeft",
    "shelfTitle": "Valentines",
    "updatedAt": "2026-02-05T20:21:30.185Z"
  }
]
```
