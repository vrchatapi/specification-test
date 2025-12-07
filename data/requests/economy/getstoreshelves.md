# getStoreShelves

## Issues
Response schema mismatch:
Unrecognized format used: "data-time" at #/items/properties/updatedAt.
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
      "description": "Contains all of the enchanted creations released in November ‘25, including: Sigil of Teleportation Warp Effect, Runic Gateway Portal, Flask of Effervescence item, Emoji Grimoire Pack, Wizard Sticker Pack and VRChat Penlight.\n\nThe Council warned us to never put this much magic in one place again. We didn’t listen.",
      "displayName": "A Magician’s Bundle",
      "duration": null,
      "durationType": null,
      "hasAvatar": false,
      "hasUdon": false,
      "id": "prod_7d12437a-a64b-4d90-99e3-3556a93cea90",
      "imageId": "file_1add9132-f44b-4a51-8eb5-be03e54511bd",
      "imageUrl": null,
      "listingType": "permanent",
      "priceTokens": 3000,
      "productIds": [
        "prod_f85b6c7f-3755-4aa1-b1bd-0b8df732a87a",
        "prod_38926b01-9639-4088-9097-99d8461066a5",
        "prod_44ec43f4-9909-40ca-9a29-cf854647aa7e",
        "prod_cfc2cbc5-d262-4b7f-96b1-187ef845df70",
        "prod_3b15feff-516c-48e5-9bb3-49f9d4f7933e",
        "prod_be2c9504-2b54-4003-abbf-0feb3b1899fc",
        "prod_aa9f6488-b496-462f-a948-7c99b01d3c24",
        "prod_5d311799-3e5a-4123-99de-d2b6c9081629",
        "prod_7f8e0d21-a60c-4378-ab12-90010a45d1cd"
      ],
      "productType": "listing",
      "products": [
        "prod_f85b6c7f-3755-4aa1-b1bd-0b8df732a87a",
        "prod_38926b01-9639-4088-9097-99d8461066a5",
        "prod_44ec43f4-9909-40ca-9a29-cf854647aa7e",
        "prod_cfc2cbc5-d262-4b7f-96b1-187ef845df70",
        "prod_3b15feff-516c-48e5-9bb3-49f9d4f7933e",
        "prod_be2c9504-2b54-4003-abbf-0feb3b1899fc",
        "prod_aa9f6488-b496-462f-a948-7c99b01d3c24",
        "prod_5d311799-3e5a-4123-99de-d2b6c9081629",
        "prod_7f8e0d21-a60c-4378-ab12-90010a45d1cd"
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
      "whenToExpire": "2025-12-08T22:00:00.000Z"
    },
    "highlightListingId": "prod_7d12437a-a64b-4d90-99e3-3556a93cea90",
    "id": "ess_0bb34b5a-eec8-4cd1-88a7-b2b2ee1260ec",
    "listingIds": [
      "prod_f074226d-8031-471e-a0c9-bd38fa52e04c",
      "prod_58016885-5aa1-4a25-8bf3-5b45d817f740",
      "prod_36d0d520-ae1c-48e1-869f-3c7f85be2995",
      "prod_b44d9014-3e53-4385-8903-e6b5d7ac0154",
      "prod_49af3bfe-2870-4b9d-bf50-20dd74c11780",
      "prod_47028480-5214-4e2a-9ddd-3a08950fc419"
    ],
    "listings": [
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Replaces the default VRChat Portal with a magical Runic Gateway, featuring new animations and sound effects.\n\nEvery rune is hewn into stone with great precision – lest the gateway becomes a two-way door.",
        "displayName": "Runic Gateway",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_f074226d-8031-471e-a0c9-bd38fa52e04c",
        "imageId": "file_ebec8432-4676-4038-93c4-1d9908efad53",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_f85b6c7f-3755-4aa1-b1bd-0b8df732a87a"
        ],
        "productType": "listing",
        "products": [
          "prod_f85b6c7f-3755-4aa1-b1bd-0b8df732a87a"
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
        "whenToExpire": "2025-12-08T22:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Enchants your avatar with a custom warp effect. When entering or leaving an instance, a glowing circle of elegant, arcane sigils appears on the ground under your avatar, a soft light enveloping you as you phase through reality.\n\nA wizard knows how to make an entrance.",
        "displayName": "Sigil of Teleportation",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_58016885-5aa1-4a25-8bf3-5b45d817f740",
        "imageId": "file_6f3f49cb-485a-4d2a-afb9-e18f354ff1f4",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 800,
        "productIds": [
          "prod_38926b01-9639-4088-9097-99d8461066a5"
        ],
        "productType": "listing",
        "products": [
          "prod_38926b01-9639-4088-9097-99d8461066a5"
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
        "vrcPlusDiscountPrice": 720,
        "whenToExpire": "2025-12-08T22:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "A swirling, magical concoction contained in an ornate bottle. When the Flask of Effervescence is used, you gain a temporary glowing aura. Can be used once every ten seconds.\n\nFour great flavors, one great bottle! May contain trace amounts of mana.",
        "displayName": "Flask of Effervescence",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_36d0d520-ae1c-48e1-869f-3c7f85be2995",
        "imageId": "file_a2c44337-cdbd-418e-a8f7-bd588bbb7edc",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_44ec43f4-9909-40ca-9a29-cf854647aa7e"
        ],
        "productType": "listing",
        "products": [
          "prod_44ec43f4-9909-40ca-9a29-cf854647aa7e"
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
        "whenToExpire": "2025-12-08T22:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Contains two magic-spell-themed Emoji: Fireball, and Magic Missile. Now you can cast spells… and never run out of mana!\n\nBehold! The darkness! What do you cast?",
        "displayName": "Emoji Grimoire Pack",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_b44d9014-3e53-4385-8903-e6b5d7ac0154",
        "imageId": "file_167a1e1a-46d1-4535-a703-6416c040e4dd",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 400,
        "productIds": [
          "prod_cfc2cbc5-d262-4b7f-96b1-187ef845df70",
          "prod_3b15feff-516c-48e5-9bb3-49f9d4f7933e"
        ],
        "productType": "listing",
        "products": [
          "prod_cfc2cbc5-d262-4b7f-96b1-187ef845df70",
          "prod_3b15feff-516c-48e5-9bb3-49f9d4f7933e"
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
        "vrcPlusDiscountPrice": 360,
        "whenToExpire": "2025-12-08T22:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "Contains three premium stickers, featuring the Wizard. He loves casting spells. You can place them on any object with a collider. Art by Shyaong.\n\nArrives precisely when you want them to.",
        "displayName": "Wizard Sticker Pack",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_49af3bfe-2870-4b9d-bf50-20dd74c11780",
        "imageId": "file_ac130f8e-71a3-499b-9515-aedf1456e9fb",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 200,
        "productIds": [
          "prod_5d311799-3e5a-4123-99de-d2b6c9081629",
          "prod_be2c9504-2b54-4003-abbf-0feb3b1899fc",
          "prod_aa9f6488-b496-462f-a948-7c99b01d3c24"
        ],
        "productType": "listing",
        "products": [
          "prod_5d311799-3e5a-4123-99de-d2b6c9081629",
          "prod_be2c9504-2b54-4003-abbf-0feb3b1899fc",
          "prod_aa9f6488-b496-462f-a948-7c99b01d3c24"
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
        "whenToExpire": "2025-12-08T22:00:00.000Z"
      },
      {
        "active": true,
        "buyerRefundable": false,
        "description": "A color-changing penlight. You can cycle through multiple colors.\n\nUsed for cheering on your favorite idol, casting kawaii nyan-nyan heart, and/or managing aircraft movement on the tarmac.",
        "displayName": "VRChat Penlight",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_47028480-5214-4e2a-9ddd-3a08950fc419",
        "imageId": "file_e06f45b8-aef5-4b22-b553-5b8e216baf2d",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 800,
        "productIds": [
          "prod_7f8e0d21-a60c-4378-ab12-90010a45d1cd"
        ],
        "productType": "listing",
        "products": [
          "prod_7f8e0d21-a60c-4378-ab12-90010a45d1cd"
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
        "whenToExpire": "2025-12-08T22:00:00.000Z"
      }
    ],
    "shelfDescription": "",
    "shelfLayout": "highlightLeft",
    "shelfTitle": "November 2025",
    "updatedAt": "2025-11-06T17:43:24.565Z"
  },
  {
    "highlightListing": {
      "active": true,
      "buyerRefundable": false,
      "collabUserDisplayName": "VirtualMarket1",
      "collabUserId": "usr_6753ea9c-5baf-40f5-b915-f867966170dc",
      "description": "Contains all of the Vket Winter 2025 creations, Including Vketchan Photo Frame, Vketchan Sticker Pack and Vketchan Emoji Pack.",
      "displayName": "Vketchan Bundle 2025 Winter",
      "duration": null,
      "durationType": null,
      "hasAvatar": false,
      "hasUdon": false,
      "id": "prod_678ec13a-beae-4bb5-931b-9258872dd48f",
      "imageId": "file_a514b716-6b14-4be6-a90f-9c56b11fcfb8",
      "imageUrl": null,
      "listingType": "permanent",
      "priceTokens": 1200,
      "productIds": [
        "prod_2bb8e477-98bd-4f4f-ba41-f172f1adef98",
        "prod_ec431dda-66a2-4057-952c-cc03ee00fc20",
        "prod_31446a4b-b898-48e3-8f87-d235a9ed3097",
        "prod_913a2aa7-43d2-4d75-87e7-cb19b82df7d7",
        "prod_f047becd-8729-4c53-84f8-7a0652d78fe7",
        "prod_0ac7b441-28b8-4da6-9a29-8eafe0aa7319",
        "prod_b3edee62-86c2-4608-a373-5f5acb4eb541",
        "prod_15bed89c-60c2-4d4e-9e3e-26dae45e833d",
        "prod_dbc86fcf-4e97-4320-b56a-8d65100d0d03",
        "prod_404b1754-1949-4500-9fca-c51ac1fe33ae",
        "prod_05c58873-5178-4a6e-a7d2-cc6d6680fc5a",
        "prod_3237438b-33c2-42eb-a52e-aab2b2582eb5",
        "prod_7943070f-0263-4a00-bce6-91a192dea9c3",
        "prod_ae78a989-dc4d-40b0-b628-a06c455d28ae",
        "prod_ed794f44-5c6f-434b-b2f8-5b6f6fed1122",
        "prod_a278c390-f6c5-4a4f-8d2a-cc8574e687b6",
        "prod_cf231a23-dbc3-44b9-8dac-93488db1c446",
        "prod_2f65663a-9ef2-49b7-80a7-2ce00ec43d70",
        "prod_99b0965c-b995-4775-a871-2b013a70480c",
        "prod_22871914-261e-4133-a4a3-2c66569aebd4",
        "prod_54e527f4-03b8-40ac-b579-5915b42cf05d",
        "prod_c9da7400-54ea-42fb-a180-8f7c761dd8d4"
      ],
      "productType": "listing",
      "products": [
        "prod_2bb8e477-98bd-4f4f-ba41-f172f1adef98",
        "prod_ec431dda-66a2-4057-952c-cc03ee00fc20",
        "prod_31446a4b-b898-48e3-8f87-d235a9ed3097",
        "prod_913a2aa7-43d2-4d75-87e7-cb19b82df7d7",
        "prod_f047becd-8729-4c53-84f8-7a0652d78fe7",
        "prod_0ac7b441-28b8-4da6-9a29-8eafe0aa7319",
        "prod_b3edee62-86c2-4608-a373-5f5acb4eb541",
        "prod_15bed89c-60c2-4d4e-9e3e-26dae45e833d",
        "prod_dbc86fcf-4e97-4320-b56a-8d65100d0d03",
        "prod_404b1754-1949-4500-9fca-c51ac1fe33ae",
        "prod_05c58873-5178-4a6e-a7d2-cc6d6680fc5a",
        "prod_3237438b-33c2-42eb-a52e-aab2b2582eb5",
        "prod_7943070f-0263-4a00-bce6-91a192dea9c3",
        "prod_ae78a989-dc4d-40b0-b628-a06c455d28ae",
        "prod_ed794f44-5c6f-434b-b2f8-5b6f6fed1122",
        "prod_a278c390-f6c5-4a4f-8d2a-cc8574e687b6",
        "prod_cf231a23-dbc3-44b9-8dac-93488db1c446",
        "prod_2f65663a-9ef2-49b7-80a7-2ce00ec43d70",
        "prod_99b0965c-b995-4775-a871-2b013a70480c",
        "prod_22871914-261e-4133-a4a3-2c66569aebd4",
        "prod_54e527f4-03b8-40ac-b579-5915b42cf05d",
        "prod_c9da7400-54ea-42fb-a180-8f7c761dd8d4"
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
      "vrcPlusDiscountPrice": 1080,
      "whenToExpire": null
    },
    "highlightListingId": "prod_678ec13a-beae-4bb5-931b-9258872dd48f",
    "id": "ess_802b6c13-890a-4a2d-82fe-bd567c6b4d06",
    "listingIds": [
      "prod_a8f00599-04fd-4964-844f-66bd585eefb7",
      "prod_bfba6e9b-812a-49b5-abdc-fd70cb050ea2",
      "prod_8bcda5a4-f269-4d16-868a-7eaa2578f46f"
    ],
    "listings": [
      {
        "active": true,
        "buyerRefundable": false,
        "collabUserDisplayName": "VirtualMarket1",
        "collabUserId": "usr_6753ea9c-5baf-40f5-b915-f867966170dc",
        "description": "NOT AN ACTUAL CAMERA! VketChan Photo Frame is a placeable decorative item to liven up your photographs. Take photo with VketChan 01, 02, and Vket-Nyan anywhere!",
        "displayName": "Vketchan Photo Frame",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_a8f00599-04fd-4964-844f-66bd585eefb7",
        "imageId": "file_ca846918-0d24-4d2c-a555-4a90d72578fa",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 700,
        "productIds": [
          "prod_2bb8e477-98bd-4f4f-ba41-f172f1adef98"
        ],
        "productType": "listing",
        "products": [
          "prod_2bb8e477-98bd-4f4f-ba41-f172f1adef98"
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
        "whenToExpire": null
      },
      {
        "active": true,
        "buyerRefundable": false,
        "collabUserDisplayName": "VirtualMarket1",
        "collabUserId": "usr_6753ea9c-5baf-40f5-b915-f867966170dc",
        "description": "A pack of 14 Emoji, featuring Vketchan! This is a special Emoji pack to celebrate VKET Winter 2025.",
        "displayName": "Vketchan Emoji Pack",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_bfba6e9b-812a-49b5-abdc-fd70cb050ea2",
        "imageId": "file_0f812d21-d48c-4afb-808b-88eed5566009",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 400,
        "productIds": [
          "prod_ec431dda-66a2-4057-952c-cc03ee00fc20",
          "prod_31446a4b-b898-48e3-8f87-d235a9ed3097",
          "prod_913a2aa7-43d2-4d75-87e7-cb19b82df7d7",
          "prod_f047becd-8729-4c53-84f8-7a0652d78fe7",
          "prod_0ac7b441-28b8-4da6-9a29-8eafe0aa7319",
          "prod_b3edee62-86c2-4608-a373-5f5acb4eb541",
          "prod_15bed89c-60c2-4d4e-9e3e-26dae45e833d",
          "prod_dbc86fcf-4e97-4320-b56a-8d65100d0d03",
          "prod_404b1754-1949-4500-9fca-c51ac1fe33ae",
          "prod_05c58873-5178-4a6e-a7d2-cc6d6680fc5a",
          "prod_3237438b-33c2-42eb-a52e-aab2b2582eb5",
          "prod_7943070f-0263-4a00-bce6-91a192dea9c3",
          "prod_ae78a989-dc4d-40b0-b628-a06c455d28ae",
          "prod_ed794f44-5c6f-434b-b2f8-5b6f6fed1122"
        ],
        "productType": "listing",
        "products": [
          "prod_ec431dda-66a2-4057-952c-cc03ee00fc20",
          "prod_31446a4b-b898-48e3-8f87-d235a9ed3097",
          "prod_913a2aa7-43d2-4d75-87e7-cb19b82df7d7",
          "prod_f047becd-8729-4c53-84f8-7a0652d78fe7",
          "prod_0ac7b441-28b8-4da6-9a29-8eafe0aa7319",
          "prod_b3edee62-86c2-4608-a373-5f5acb4eb541",
          "prod_15bed89c-60c2-4d4e-9e3e-26dae45e833d",
          "prod_dbc86fcf-4e97-4320-b56a-8d65100d0d03",
          "prod_404b1754-1949-4500-9fca-c51ac1fe33ae",
          "prod_05c58873-5178-4a6e-a7d2-cc6d6680fc5a",
          "prod_3237438b-33c2-42eb-a52e-aab2b2582eb5",
          "prod_7943070f-0263-4a00-bce6-91a192dea9c3",
          "prod_ae78a989-dc4d-40b0-b628-a06c455d28ae",
          "prod_ed794f44-5c6f-434b-b2f8-5b6f6fed1122"
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
        "vrcPlusDiscountPrice": 360,
        "whenToExpire": null
      },
      {
        "active": true,
        "buyerRefundable": false,
        "collabUserDisplayName": "VirtualMarket1",
        "collabUserId": "usr_6753ea9c-5baf-40f5-b915-f867966170dc",
        "description": "A pack of 7 Stickers, featuring Vketchan! This is a special Sticker pack to celebrate VKET Winter 2025.",
        "displayName": "Vketchan Sticker Pack",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_8bcda5a4-f269-4d16-868a-7eaa2578f46f",
        "imageId": "file_ee150181-224e-4fa4-a746-929f32ad03e9",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 200,
        "productIds": [
          "prod_a278c390-f6c5-4a4f-8d2a-cc8574e687b6",
          "prod_2f65663a-9ef2-49b7-80a7-2ce00ec43d70",
          "prod_cf231a23-dbc3-44b9-8dac-93488db1c446",
          "prod_99b0965c-b995-4775-a871-2b013a70480c",
          "prod_22871914-261e-4133-a4a3-2c66569aebd4",
          "prod_54e527f4-03b8-40ac-b579-5915b42cf05d",
          "prod_c9da7400-54ea-42fb-a180-8f7c761dd8d4"
        ],
        "productType": "listing",
        "products": [
          "prod_a278c390-f6c5-4a4f-8d2a-cc8574e687b6",
          "prod_2f65663a-9ef2-49b7-80a7-2ce00ec43d70",
          "prod_cf231a23-dbc3-44b9-8dac-93488db1c446",
          "prod_99b0965c-b995-4775-a871-2b013a70480c",
          "prod_22871914-261e-4133-a4a3-2c66569aebd4",
          "prod_54e527f4-03b8-40ac-b579-5915b42cf05d",
          "prod_c9da7400-54ea-42fb-a180-8f7c761dd8d4"
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
        "whenToExpire": null
      }
    ],
    "shelfDescription": "",
    "shelfLayout": "highlightLeft",
    "shelfTitle": "Vket Winter 2025",
    "updatedAt": "2025-12-06T01:48:29.554Z"
  }
]
```
