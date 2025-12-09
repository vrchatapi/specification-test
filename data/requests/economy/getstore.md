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
    "ess_eefead70-e13b-4aa5-a9bd-d6478f9ebfe1",
    "ess_802b6c13-890a-4a2d-82fe-bd567c6b4d06"
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
          "prod_c9b96e99-7c39-49ce-9ba1-e686f9a28824",
          "prod_b64dffd2-8447-4c69-8934-8e18e682819d",
          "prod_2213cdc4-7e63-4487-ae74-1fa7aa1926a4",
          "prod_356931bc-354a-48c9-bf43-d744336bd599",
          "prod_08309e3f-9307-4563-89c5-e26bcdc62b4e",
          "prod_1b1619d7-a8f5-42be-ab90-8636e50c369c",
          "prod_279b691d-6350-4046-8322-6ad08d2283ce"
        ],
        "productType": "listing",
        "products": [
          "prod_f2f47540-a3a8-4246-8daf-54a828be2aa6",
          "prod_762f38e3-e54a-4714-8567-a1f092799bf3",
          "prod_c9b96e99-7c39-49ce-9ba1-e686f9a28824",
          "prod_b64dffd2-8447-4c69-8934-8e18e682819d",
          "prod_2213cdc4-7e63-4487-ae74-1fa7aa1926a4",
          "prod_356931bc-354a-48c9-bf43-d744336bd599",
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
        "vrcPlusDiscountPrice": 2700,
        "whenToExpire": "2026-02-05T21:00:00.000Z"
      },
      "highlightListingId": "prod_e9177cb3-53fd-4a48-b7c4-f840521adaae",
      "id": "ess_eefead70-e13b-4aa5-a9bd-d6478f9ebfe1",
      "listingIds": [
        "prod_a30099ff-72af-4d7a-a3e1-99fa0deded3e",
        "prod_52e12dbd-2052-4f2f-adfd-f51e2ca91ec2",
        "prod_81e0541b-862c-41c0-b8b0-0a2e2c6c4892",
        "prod_dcffbebb-cf86-4d09-93a8-c364dd3c95bb",
        "prod_85e487d3-b66e-448d-85a5-59decea3f4e0",
        "prod_b4d3d7bf-4f39-461b-b624-315f22df2750"
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
          "description": "When activated, the Portable Winterizer generates snow, roughly centered around its location for 3 minutes. This is a consumable item that has 5 charges. Spawning and activating this item consumes 1 charge. Once all charges are used, it will be removed from your inventory.",
          "displayName": "Portable Winterizer",
          "duration": null,
          "durationType": null,
          "hasAvatar": false,
          "hasUdon": false,
          "id": "prod_dcffbebb-cf86-4d09-93a8-c364dd3c95bb",
          "imageId": "file_68048921-65e1-4d4d-907e-e3aab798a6ff",
          "imageUrl": null,
          "listingType": "instant",
          "listingVariants": [],
          "priceTokens": 500,
          "productIds": [
            "prod_c9b96e99-7c39-49ce-9ba1-e686f9a28824"
          ],
          "productType": "listing",
          "products": [
            "prod_c9b96e99-7c39-49ce-9ba1-e686f9a28824"
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
        }
      ],
      "shelfDescription": "",
      "shelfLayout": "highlightLeft",
      "shelfTitle": "December 2025",
      "updatedAt": "2025-12-08T23:39:06.295Z"
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
  ],
  "storeId": "esto_00000000-0000-0000-0000-000000000000",
  "storeType": "house",
  "tags": []
}
```
