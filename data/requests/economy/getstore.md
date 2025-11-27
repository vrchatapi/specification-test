# getStore

## Issues
Response schema mismatch:
Unrecognized format used: "data-time" at #/properties/shelves/items/properties/updatedAt.
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
    "ess_0bb34b5a-eec8-4cd1-88a7-b2b2ee1260ec",
    "ess_b49da2d7-3224-40ba-82ac-b55ab7b2679b"
  ],
  "shelves": [
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
        "whenToExpire": "2025-12-04T21:00:00.000Z"
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
          "whenToExpire": "2025-12-04T21:00:00.000Z"
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
          "whenToExpire": "2025-12-04T21:00:00.000Z"
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
          "whenToExpire": "2025-12-04T21:00:00.000Z"
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
          "whenToExpire": "2025-12-04T21:00:00.000Z"
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
          "whenToExpire": "2025-12-04T21:00:00.000Z"
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
          "whenToExpire": "2025-12-04T21:00:00.000Z"
        }
      ],
      "shelfDescription": "",
      "shelfLayout": "highlightLeft",
      "shelfTitle": "November 2025",
      "updatedAt": "2025-11-06T17:43:24.565Z"
    },
    {
      "id": "ess_b49da2d7-3224-40ba-82ac-b55ab7b2679b",
      "listingIds": [
        "prod_40bee8e4-939c-4db7-a4b2-db6037d5ff66"
      ],
      "listings": [
        {
          "active": true,
          "buyerRefundable": false,
          "description": "This Reference Cube seems unstable․ When placed in a world and activated‚ it is permanently destroyed․",
          "displayName": "Unstable Reference Cube",
          "duration": 1,
          "durationType": "days",
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_40bee8e4-939c-4db7-a4b2-db6037d5ff66",
          "imageId": "file_5a54544c-ec7f-403c-a4e1-89f213498948",
          "imageUrl": null,
          "listingType": "duration",
          "priceTokens": 0,
          "productIds": [
            "prod_885c362b-a8a2-4e88-9e1a-48b3043ed724"
          ],
          "productType": "listing",
          "products": [
            "prod_885c362b-a8a2-4e88-9e1a-48b3043ed724"
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
          "vrcPlusDiscountPrice": 0,
          "whenToExpire": null
        }
      ],
      "shelfDescription": "",
      "shelfLayout": "col5",
      "shelfTitle": "{\"MinVersion\":1761} Beta",
      "updatedAt": "2025-11-11T00:28:32.458Z"
    }
  ],
  "storeId": "esto_00000000-0000-0000-0000-000000000000",
  "storeType": "house",
  "tags": []
}
```
