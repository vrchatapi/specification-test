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
* Invalid type at ``#/shelves/0listings/0products/0``,
* Invalid type at ``#/shelves/0listings/1products/0``,
* Invalid type at ``#/shelves/0listings/2products/0``,
* Invalid type at ``#/shelves/0listings/3products/0``,
* Invalid type at ``#/shelves/0listings/4products/0``,
* Invalid type at ``#/shelves/0listings/5products/0``,
* Invalid type at ``#/shelves/0listings/5products/1``,
* Invalid type at ``#/shelves/0listings/6products/0``,
* Invalid type at ``#/shelves/0listings/6products/1``,
* Invalid type at ``#/shelves/0listings/6products/2``.
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
    "ess_01ba1a22-6edb-4b1e-9f4e-53446dcd699d"
  ],
  "shelves": [
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
  ],
  "storeId": "esto_00000000-0000-0000-0000-000000000000",
  "storeType": "house",
  "tags": []
}
```
