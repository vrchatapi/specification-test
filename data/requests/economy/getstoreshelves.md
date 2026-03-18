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
* Invalid type at ``#/0highlightListing/products/10``,
* Invalid type at ``#/0highlightListing/products/11``,
* Invalid type at ``#/0highlightListing/products/12``,
* Invalid type at ``#/0highlightListing/products/13``,
* Invalid type at ``#/0highlightListing/products/14``,
* Invalid type at ``#/0highlightListing/products/15``,
* Invalid type at ``#/0highlightListing/products/16``,
* Invalid type at ``#/0highlightListing/products/17``,
* Unexpected property at ``#/0highlightListing/collabUserId``,
* Invalid type at ``#/0listings/0products/0``,
* Unexpected property at ``#/0listings/0/collabUserId``,
* Invalid type at ``#/0listings/1products/0``,
* Unexpected property at ``#/0listings/1/collabUserId``,
* Invalid type at ``#/0listings/2products/0``,
* Unexpected property at ``#/0listings/2/collabUserId``,
* Invalid type at ``#/0listings/3products/0``,
* Unexpected property at ``#/0listings/3/collabUserId``,
* Invalid type at ``#/0listings/4products/0``,
* Unexpected property at ``#/0listings/4/collabUserId``,
* Invalid type at ``#/0listings/5products/0``,
* Unexpected property at ``#/0listings/5/collabUserId``,
* Invalid type at ``#/0listings/6products/0``,
* Invalid type at ``#/0listings/6products/1``,
* Invalid type at ``#/0listings/6products/2``,
* Invalid type at ``#/0listings/6products/3``,
* Invalid type at ``#/0listings/6products/4``,
* Invalid type at ``#/0listings/6products/5``,
* Invalid type at ``#/0listings/6products/6``,
* Invalid type at ``#/0listings/6products/7``,
* Unexpected property at ``#/0listings/6/collabUserId``,
* Invalid type at ``#/0listings/7products/0``,
* Invalid type at ``#/0listings/7products/1``,
* Invalid type at ``#/0listings/7products/2``,
* Invalid type at ``#/0listings/7products/3``,
* Unexpected property at ``#/0listings/7/collabUserId``,
* Unexpected property at ``#/0/shelfBackgroundImageId``,
* Unexpected property at ``#/0/shelfIconImageId``,
* Unexpected property at ``#/0/shelfTabBackgroundImageId``,
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
* Unexpected property at ``#/1listings/0/subscriberExclusive``,
* Invalid type at ``#/1listings/1products/0``,
* Invalid type at ``#/1listings/2products/0``,
* Invalid type at ``#/1listings/3products/0``,
* Invalid type at ``#/1listings/4products/0``,
* Invalid type at ``#/1listings/5products/0``,
* Invalid type at ``#/1listings/6products/0``,
* Invalid type at ``#/1listings/6products/1``,
* Invalid type at ``#/1listings/7products/0``,
* Invalid type at ``#/1listings/7products/1``,
* Invalid type at ``#/1listings/7products/2``,
* Unexpected property at ``#/1/shelfBackgroundImageId``,
* Unexpected property at ``#/1/shelfIconImageId``,
* Unexpected property at ``#/1/shelfTabBackgroundImageId``,
* Invalid type at ``#/2listings/0products/0``,
* Unexpected property at ``#/2listings/0/attribution``,
* Unexpected property at ``#/2listings/0/collabUserId``,
* Invalid type at ``#/2listings/1products/0``,
* Unexpected property at ``#/2listings/1/attribution``,
* Unexpected property at ``#/2listings/1/collabUserId``,
* Invalid type at ``#/2listings/2products/0``,
* Unexpected property at ``#/2listings/2/attribution``,
* Unexpected property at ``#/2listings/2/collabUserId``,
* Unexpected property at ``#/2/shelfBackgroundImageId``,
* Unexpected property at ``#/2/shelfIconImageId``,
* Unexpected property at ``#/2/shelfTabBackgroundImageId``.
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
      "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
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
        "whenToExpire": "2026-04-01T21:00:00.000Z"
      }
    ],
    "shelfBackgroundImageId": "file_af2ef9a2-8338-4e0b-9821-dd298dc78d8e",
    "shelfDescription": "",
    "shelfIconImageId": "file_7b072458-2d3a-4f41-ac6d-f993d283bfb2",
    "shelfLayout": "highlightLeft",
    "shelfTabBackgroundImageId": "file_b3559a69-fff3-42c8-a254-738e962417fc",
    "shelfTitle": "Rabbids x VRChat",
    "updatedAt": "2026-03-06T19:59:29.897Z"
  },
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
    "shelfBackgroundImageId": "file_8603505c-afe1-47d7-9d5b-256c766b15bb",
    "shelfDescription": "",
    "shelfIconImageId": "file_8af46a59-db7c-40a8-b9d3-bbe852f1cba8",
    "shelfLayout": "highlightLeft",
    "shelfTabBackgroundImageId": "file_5e51bb3c-b941-422b-bae1-c9bc9938f904",
    "shelfTitle": "Lunar New Year",
    "updatedAt": "2026-03-06T21:32:44.114Z"
  },
  {
    "id": "ess_f27165e9-a49d-4010-9f94-8cf89531c249",
    "listingIds": [
      "prod_1c38e3bc-7d64-4416-907e-c839a1c7393f",
      "prod_77d6da3b-2485-4685-b033-14480e372e2b",
      "prod_5412946a-88e1-419d-9a8a-2e7de5b38a04"
    ],
    "listings": [
      {
        "active": true,
        "attribution": {
          "creator": {
            "customName": "Nae the Loud",
            "userId": "usr_c2b3c41b-eccd-4577-9f59-a5fb06e9311c"
          },
          "publisher": {
            "customName": "VRChat",
            "userId": "8JoV9XEdpo"
          }
        },
        "buyerRefundable": false,
        "collabUserId": "usr_c2b3c41b-eccd-4577-9f59-a5fb06e9311c",
        "description": "A pair of Googly Eyes! They jiggle a bit. You can change their color, toggle eyelashes, and even adjust the distance between each eye. \n\nEye tracking? Sorry, we heard eye tacking.\n",
        "displayName": "Googly Eyes",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_1c38e3bc-7d64-4416-907e-c839a1c7393f",
        "imageId": "file_c1bfcc6d-f6d2-4c09-93a9-31faa8dde18c",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 0,
        "productIds": [
          "prod_474cdeea-bfb7-45ae-871c-b4e30afae566"
        ],
        "productType": "listing",
        "products": [
          "prod_474cdeea-bfb7-45ae-871c-b4e30afae566"
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
        "subtitle": "Accessory",
        "vrcPlusDiscountPrice": 0,
        "whenToExpire": null
      },
      {
        "active": true,
        "attribution": {
          "publisher": {
            "customName": "VRChat",
            "userId": "8JoV9XEdpo"
          }
        },
        "buyerRefundable": false,
        "collabUserId": "8JoV9XEdpo",
        "description": "A basic, non-descript sphere. You can change the Basic Sphere’s color. \n\nNo relation to the REFERENCE CUBE. \n",
        "displayName": "Basic Sphere",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_77d6da3b-2485-4685-b033-14480e372e2b",
        "imageId": "file_0c0a6f45-ac8b-4615-9d9f-2143eae0bb86",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 0,
        "productIds": [
          "prod_991ec8a3-08e5-4b3c-b307-b8129c36e386"
        ],
        "productType": "listing",
        "products": [
          "prod_991ec8a3-08e5-4b3c-b307-b8129c36e386"
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
        "subtitle": "Accessory",
        "vrcPlusDiscountPrice": 0,
        "whenToExpire": null
      },
      {
        "active": true,
        "attribution": {
          "publisher": {
            "customName": "VRChat",
            "userId": "8JoV9XEdpo"
          }
        },
        "buyerRefundable": false,
        "collabUserId": "8JoV9XEdpo",
        "description": "A basic, non-descript cube. You can change the Basic Cube’s color. \n\nNo relation to the REFERENCE SPHERE. What? Stop asking questions.\n",
        "displayName": "Basic Cube",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_5412946a-88e1-419d-9a8a-2e7de5b38a04",
        "imageId": "file_d3383e0d-8ae6-4be3-845c-7826c1d48480",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 0,
        "productIds": [
          "prod_cf79cdcd-3014-4e4f-b184-278e60e5ca80"
        ],
        "productType": "listing",
        "products": [
          "prod_cf79cdcd-3014-4e4f-b184-278e60e5ca80"
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
        "subtitle": "Accessory",
        "vrcPlusDiscountPrice": 0,
        "whenToExpire": null
      }
    ],
    "shelfBackgroundImageId": "file_5838a550-7c6a-4d44-8f95-99302eb6cbf1",
    "shelfDescription": "",
    "shelfIconImageId": "file_91290183-b8e4-4626-8aa4-710518d7fb84",
    "shelfLayout": "col5",
    "shelfTabBackgroundImageId": "file_7e344cf9-a279-4ab3-b039-4d4b2adb9c25",
    "shelfTitle": "{\"MinVersion\":1814} New Accessories",
    "updatedAt": "2026-03-18T00:37:12.400Z"
  }
]
```
