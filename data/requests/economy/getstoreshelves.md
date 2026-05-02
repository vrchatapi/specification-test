# getStoreShelves

## Issues
Response schema mismatch:
* Invalid type at ``#/0listings/0products/0``,
* Invalid type at ``#/0listings/0products/1``,
* Invalid type at ``#/0listings/0products/2``,
* Invalid type at ``#/0listings/0products/3``,
* Unexpected property at ``#/0listings/0/attribution``,
* Unexpected property at ``#/0listings/0/collabUserId``,
* Invalid type at ``#/0listings/1products/0``,
* Unexpected property at ``#/0listings/1/attribution``,
* Unexpected property at ``#/0listings/1/collabUserId``,
* Invalid type at ``#/0listings/2products/0``,
* Unexpected property at ``#/0listings/2/attribution``,
* Unexpected property at ``#/0listings/2/collabUserId``,
* Invalid type at ``#/0listings/3products/0``,
* Unexpected property at ``#/0listings/3/attribution``,
* Unexpected property at ``#/0listings/3/collabUserId``,
* Invalid type at ``#/0listings/4products/0``,
* Unexpected property at ``#/0listings/4/attribution``,
* Unexpected property at ``#/0listings/4/collabUserId``,
* Invalid type at ``#/0listings/5products/0``,
* Invalid type at ``#/0listings/5products/1``,
* Invalid type at ``#/0listings/5products/2``,
* Invalid type at ``#/0listings/5products/3``,
* Unexpected property at ``#/0listings/5/attribution``,
* Unexpected property at ``#/0listings/5/collabUserId``,
* Invalid type at ``#/0listings/6products/0``,
* Unexpected property at ``#/0listings/6/attribution``,
* Unexpected property at ``#/0listings/6/collabUserId``,
* Invalid type at ``#/0listings/7products/0``,
* Unexpected property at ``#/0listings/7/attribution``,
* Unexpected property at ``#/0listings/7/collabUserId``,
* Invalid type at ``#/0listings/8products/0``,
* Unexpected property at ``#/0listings/8/attribution``,
* Unexpected property at ``#/0listings/8/collabUserDisplayName``,
* Unexpected property at ``#/0listings/8/collabUserId``,
* Invalid type at ``#/0listings/9products/0``,
* Unexpected property at ``#/0listings/9/attribution``,
* Unexpected property at ``#/0listings/9/collabUserId``,
* Invalid type at ``#/0listings/10products/0``,
* Unexpected property at ``#/0listings/10/attribution``,
* Unexpected property at ``#/0listings/10/collabUserId``,
* Invalid type at ``#/0listings/11products/0``,
* Unexpected property at ``#/0listings/11/attribution``,
* Unexpected property at ``#/0listings/11/collabUserId``,
* Invalid type at ``#/0listings/12products/0``,
* Unexpected property at ``#/0listings/12/attribution``,
* Unexpected property at ``#/0listings/12/collabUserDisplayName``,
* Unexpected property at ``#/0listings/12/collabUserId``,
* Invalid type at ``#/0listings/13products/0``,
* Unexpected property at ``#/0listings/13/attribution``,
* Unexpected property at ``#/0listings/13/collabUserId``,
* Invalid type at ``#/0listings/14products/0``,
* Unexpected property at ``#/0listings/14/attribution``,
* Unexpected property at ``#/0listings/14/collabUserId``,
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
* Unexpected property at ``#/1highlightListing/attribution``,
* Unexpected property at ``#/1highlightListing/collabUserId``,
* Invalid type at ``#/1listings/0products/0``,
* Unexpected property at ``#/1listings/0/attribution``,
* Unexpected property at ``#/1listings/0/collabUserId``,
* Invalid type at ``#/1listings/1products/0``,
* Unexpected property at ``#/1listings/1/attribution``,
* Unexpected property at ``#/1listings/1/collabUserId``,
* Invalid type at ``#/1listings/2products/0``,
* Unexpected property at ``#/1listings/2/attribution``,
* Unexpected property at ``#/1listings/2/collabUserId``,
* Invalid type at ``#/1listings/3products/0``,
* Unexpected property at ``#/1listings/3/attribution``,
* Unexpected property at ``#/1listings/3/collabUserId``,
* Invalid type at ``#/1listings/4products/0``,
* Unexpected property at ``#/1listings/4/attribution``,
* Unexpected property at ``#/1listings/4/collabUserId``,
* Invalid type at ``#/1listings/5products/0``,
* Invalid type at ``#/1listings/5products/1``,
* Unexpected property at ``#/1listings/5/attribution``,
* Unexpected property at ``#/1listings/5/collabUserId``,
* Invalid type at ``#/1listings/6products/0``,
* Unexpected property at ``#/1listings/6/attribution``,
* Unexpected property at ``#/1listings/6/collabUserId``,
* Invalid type at ``#/1listings/7products/0``,
* Unexpected property at ``#/1listings/7/attribution``,
* Unexpected property at ``#/1listings/7/collabUserId``,
* Invalid type at ``#/1listings/8products/0``,
* Unexpected property at ``#/1listings/8/attribution``,
* Unexpected property at ``#/1listings/8/collabUserId``,
* Unexpected property at ``#/1/shelfBackgroundImageId``,
* Unexpected property at ``#/1/shelfIconImageId``,
* Unexpected property at ``#/1/shelfTabBackgroundImageId``.
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
    "id": "ess_f27165e9-a49d-4010-9f94-8cf89531c249",
    "listingIds": [
      "prod_bf4b5a74-7a6b-4ed3-b7bc-7f67319814f5",
      "prod_3c61072b-43d3-47bf-a6bf-bff444612d0b",
      "prod_153aae8a-be90-473e-9879-dfdaf729ff41",
      "prod_12d98b70-e3ec-4861-a6c9-d4b28de9d223",
      "prod_3d041bca-d6e6-4d49-a63a-2324254e4b12",
      "prod_73419d85-ef97-4f67-b076-a9ab54aa239e",
      "prod_8e0b1b06-daa1-46ab-9175-066c8534356b",
      "prod_64b8a3a0-8f59-4fb9-ac6c-20ea7d5a4f5e",
      "prod_736f0cba-da62-4243-a224-eca71f859d4e",
      "prod_b14d09a8-81d1-4aa5-af49-205fef308064",
      "prod_80797cc2-9dbf-4137-9aab-acf980a9fe3b",
      "prod_e31317c6-dc57-4635-bd41-9f723480bb1c",
      "prod_1c38e3bc-7d64-4416-907e-c839a1c7393f",
      "prod_77d6da3b-2485-4685-b033-14480e372e2b",
      "prod_5412946a-88e1-419d-9a8a-2e7de5b38a04"
    ],
    "listings": [
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
        "description": "ANGELS․ DEMONS․ The forces of good and evil clash on the battlefield of your wardrobe․ Will you represent the side of good? Evil? Both? Ah‚ the chaos option․ The choice is yours․ As long as you buy the bundle‚ that isǃ Contains the Angel Wings‚ Halo‚ Bat Wings‚ and Devil Horns Accessories․\n\nYou can place the Devil Horns on your eyeballs․ You shouldnt․ But‚ like‚ you can․",
        "displayName": "Good & Evil Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_bf4b5a74-7a6b-4ed3-b7bc-7f67319814f5",
        "imageId": "file_05c23ca2-928c-4685-9930-e9ee372e94fe",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 3000,
        "productIds": [
          "prod_88498d3d-ba0a-424d-b395-5eff04e0287a",
          "prod_9764433e-94f1-4d0c-ad06-d864c4d4baa3",
          "prod_d071145a-fe7c-421e-97c7-ac06749b545a",
          "prod_40a1d188-734a-4775-830e-693bdf65ab6d"
        ],
        "productType": "listing",
        "products": [
          "prod_88498d3d-ba0a-424d-b395-5eff04e0287a",
          "prod_9764433e-94f1-4d0c-ad06-d864c4d4baa3",
          "prod_d071145a-fe7c-421e-97c7-ac06749b545a",
          "prod_40a1d188-734a-4775-830e-693bdf65ab6d"
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
        "description": "What angel is complete without a halo? You can adjust its thickness, color, emissivity, and particle effects. This is an Avatar Accessory – you can attach it to any avatar!\n\nYou’re not allowed to grab it.\n",
        "displayName": "Halo",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_3c61072b-43d3-47bf-a6bf-bff444612d0b",
        "imageId": "file_fdd2de4d-cdd2-4e2d-866a-6b0405b9ae4f",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 750,
        "productIds": [
          "prod_40a1d188-734a-4775-830e-693bdf65ab6d"
        ],
        "productType": "listing",
        "products": [
          "prod_40a1d188-734a-4775-830e-693bdf65ab6d"
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
        "vrcPlusDiscountPrice": 675,
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
        "description": "Now you, too, can be an angel – with wings! You can adjust their color, emissivity, and particle effects. This is an Avatar Accessory – you can attach it to any avatar!\n\nDoes not grant the user flight.\n",
        "displayName": "Angel Wings",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_153aae8a-be90-473e-9879-dfdaf729ff41",
        "imageId": "file_84a8c18f-fabe-47ef-ba39-c12ece5226ba",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1200,
        "productIds": [
          "prod_9764433e-94f1-4d0c-ad06-d864c4d4baa3"
        ],
        "productType": "listing",
        "products": [
          "prod_9764433e-94f1-4d0c-ad06-d864c4d4baa3"
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
        "vrcPlusDiscountPrice": 1080,
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
        "description": "Some Devil Horns, if you’re feeling a little mischievous. You can adjust their shape and color. This is an Avatar Accessory – you can attach it to any avatar!\n\ni can be ur angle or ur devil…\n",
        "displayName": "Devil Horns",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_12d98b70-e3ec-4861-a6c9-d4b28de9d223",
        "imageId": "file_e7cbf0f6-ecc6-4ab1-80c4-2f8d9a7b5e62",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 750,
        "productIds": [
          "prod_88498d3d-ba0a-424d-b395-5eff04e0287a"
        ],
        "productType": "listing",
        "products": [
          "prod_88498d3d-ba0a-424d-b395-5eff04e0287a"
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
        "vrcPlusDiscountPrice": 675,
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
        "description": "Webbed wings, for your back… or anywhere else! You can adjust their color. This is an Avatar Accessory – you can attach it to any avatar!\n\nTwo! Two wings… Ah ah ah…\n",
        "displayName": "Bat Wings",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_3d041bca-d6e6-4d49-a63a-2324254e4b12",
        "imageId": "file_a4464c5d-438e-4dec-bc9c-b38eefcb3217",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1200,
        "productIds": [
          "prod_d071145a-fe7c-421e-97c7-ac06749b545a"
        ],
        "productType": "listing",
        "products": [
          "prod_d071145a-fe7c-421e-97c7-ac06749b545a"
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
        "vrcPlusDiscountPrice": 1080,
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
        "description": "Are you a fan of the softer things in life? Fancy a cozy bear? Enjoy the timeless aesthetics of a cat tail? No‚ I dont know what I mean by that․ Anyway․ Its one of our first-ever Accessory bundlesǃ Contains the Cat Tail‚ Bear Plushie‚ Collar‚ and Cat Ears Accessories․\n\nIts the fluffy bundle‚ not the furry bundle․ Nothing is going to awaken in you․ Unless",
        "displayName": "Fluffy Bundle",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_73419d85-ef97-4f67-b076-a9ab54aa239e",
        "imageId": "file_dce4fd0d-0423-4c43-99c0-d2094183e9bd",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 2400,
        "productIds": [
          "prod_692be1a0-1655-45f3-b8a2-f6242d2e8c73",
          "prod_c850591b-56ee-41fb-9dfb-df3fc8960bd5",
          "prod_9e7f65b6-b800-48c0-a275-84b282037468",
          "prod_313150b2-199e-49f5-abaf-4a423e1b30a5"
        ],
        "productType": "listing",
        "products": [
          "prod_692be1a0-1655-45f3-b8a2-f6242d2e8c73",
          "prod_c850591b-56ee-41fb-9dfb-df3fc8960bd5",
          "prod_9e7f65b6-b800-48c0-a275-84b282037468",
          "prod_313150b2-199e-49f5-abaf-4a423e1b30a5"
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
        "vrcPlusDiscountPrice": 2160,
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
        "description": "Cat Ears! Nekomimi in a can, basically. You can adjust their shape, fluff amount (that’s the technical term), color, and pattern. This is an Avatar Accessory – you can attach it to any avatar!\n\nnyaaaaaa~\n",
        "displayName": "Cat Ears",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_8e0b1b06-daa1-46ab-9175-066c8534356b",
        "imageId": "file_586e093f-987a-4c90-9b66-cb4a82d2fa31",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 750,
        "productIds": [
          "prod_c850591b-56ee-41fb-9dfb-df3fc8960bd5"
        ],
        "productType": "listing",
        "products": [
          "prod_c850591b-56ee-41fb-9dfb-df3fc8960bd5"
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
        "vrcPlusDiscountPrice": 675,
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
        "description": "It’s a Cat Tail! It’s slightly fluffy. You can adjust its shape, bushiness, color, and pattern. This is an Avatar Accessory – you can attach it to any avatar!\n\nThe feline kind. Not a plant.\n",
        "displayName": "Cat Tail",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_64b8a3a0-8f59-4fb9-ac6c-20ea7d5a4f5e",
        "imageId": "file_14074ec0-0cd1-4eab-93eb-cab03dd4c4b0",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_692be1a0-1655-45f3-b8a2-f6242d2e8c73"
        ],
        "productType": "listing",
        "products": [
          "prod_692be1a0-1655-45f3-b8a2-f6242d2e8c73"
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
        "vrcPlusDiscountPrice": 810,
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
        "collabUserDisplayName": "VRChat",
        "collabUserId": "8JoV9XEdpo",
        "description": "A Collar! Used for animals. And fashionable humans. You can adjust its color, emissivity, and visible charm. This is an Avatar Accessory – you can attach it to any avatar!\n\nYou, too, can be a puppy.\n",
        "displayName": "Collar",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_736f0cba-da62-4243-a224-eca71f859d4e",
        "imageId": "file_9bca0fb1-6d33-4288-9cb7-83c580cf8899",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_9e7f65b6-b800-48c0-a275-84b282037468"
        ],
        "productType": "listing",
        "products": [
          "prod_9e7f65b6-b800-48c0-a275-84b282037468"
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
        "vrcPlusDiscountPrice": 810,
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
        "description": "A Bear Plushie! It’s pretty cute. You can adjust its color… you can also make it hug you (or your arm). This is an Avatar Accessory – you can attach it to any avatar!\n\nHis name is Steve, by the way.\n",
        "displayName": "Bear Plushie",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_b14d09a8-81d1-4aa5-af49-205fef308064",
        "imageId": "file_82ed9033-6e2a-43ec-9dbe-4f0ab08b15e0",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 750,
        "productIds": [
          "prod_313150b2-199e-49f5-abaf-4a423e1b30a5"
        ],
        "productType": "listing",
        "products": [
          "prod_313150b2-199e-49f5-abaf-4a423e1b30a5"
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
        "vrcPlusDiscountPrice": 675,
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
        "description": "A Sakura-themed Hair Pin! You can change its collar and toggle on/off the dangling ornaments. This is an Avatar Accessory – you can attach it to any avatar!\n\nYou don’t have to pin it to your hair.\n",
        "displayName": "Sakura Hair Pin",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_80797cc2-9dbf-4137-9aab-acf980a9fe3b",
        "imageId": "file_93167422-1451-49b2-9b7c-aed826a2c194",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1200,
        "productIds": [
          "prod_7b08e63f-572d-4005-b821-cbe418a743bd"
        ],
        "productType": "listing",
        "products": [
          "prod_7b08e63f-572d-4005-b821-cbe418a743bd"
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
        "vrcPlusDiscountPrice": 1080,
        "whenToExpire": "2026-06-01T21:00:00.000Z"
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
        "description": "A crown… of flowers! You can change their color. This is an Avatar Accessory – you can attach it to any avatar!\n\nNo, they don’t continuously shift. What are they, gamer flowers?\n",
        "displayName": "Flower Crown",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_e31317c6-dc57-4635-bd41-9f723480bb1c",
        "imageId": "file_a5e4ea5e-d475-49c8-82f8-c4b8e5e9a7f7",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_3bdeb913-a1b1-445a-b2cf-6be0a31c50b7"
        ],
        "productType": "listing",
        "products": [
          "prod_3bdeb913-a1b1-445a-b2cf-6be0a31c50b7"
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
        "vrcPlusDiscountPrice": 810,
        "whenToExpire": "2026-06-01T21:00:00.000Z"
      },
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
        "collabUserDisplayName": "VRChat",
        "collabUserId": "8JoV9XEdpo",
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
    "shelfBackgroundImageId": "file_5570c214-553d-4488-8647-0de574a09004",
    "shelfDescription": "",
    "shelfIconImageId": "file_194d63ca-0bd2-426e-9bf3-e4262e721fdd",
    "shelfLayout": "col5",
    "shelfTabBackgroundImageId": "file_4082644d-fdc5-4146-b0e1-ac8731a7cdce",
    "shelfTitle": "{\"MinVersion\":1835} New Accessories",
    "updatedAt": "2026-04-28T21:54:16.810Z"
  },
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
      "prod_bb4f6bbf-fce5-48f3-9c7e-5bd92174c7fb",
      "prod_e31317c6-dc57-4635-bd41-9f723480bb1c",
      "prod_80797cc2-9dbf-4137-9aab-acf980a9fe3b"
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
        "description": "A crown… of flowers! You can change their color. This is an Avatar Accessory – you can attach it to any avatar!\n\nNo, they don’t continuously shift. What are they, gamer flowers?\n",
        "displayName": "Flower Crown",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_e31317c6-dc57-4635-bd41-9f723480bb1c",
        "imageId": "file_a5e4ea5e-d475-49c8-82f8-c4b8e5e9a7f7",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 900,
        "productIds": [
          "prod_3bdeb913-a1b1-445a-b2cf-6be0a31c50b7"
        ],
        "productType": "listing",
        "products": [
          "prod_3bdeb913-a1b1-445a-b2cf-6be0a31c50b7"
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
        "vrcPlusDiscountPrice": 810,
        "whenToExpire": "2026-06-01T21:00:00.000Z"
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
        "description": "A Sakura-themed Hair Pin! You can change its collar and toggle on/off the dangling ornaments. This is an Avatar Accessory – you can attach it to any avatar!\n\nYou don’t have to pin it to your hair.\n",
        "displayName": "Sakura Hair Pin",
        "duration": null,
        "durationType": null,
        "hasAvatar": false,
        "hasUdon": false,
        "id": "prod_80797cc2-9dbf-4137-9aab-acf980a9fe3b",
        "imageId": "file_93167422-1451-49b2-9b7c-aed826a2c194",
        "imageUrl": null,
        "listingType": "permanent",
        "priceTokens": 1200,
        "productIds": [
          "prod_7b08e63f-572d-4005-b821-cbe418a743bd"
        ],
        "productType": "listing",
        "products": [
          "prod_7b08e63f-572d-4005-b821-cbe418a743bd"
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
        "vrcPlusDiscountPrice": 1080,
        "whenToExpire": "2026-06-01T21:00:00.000Z"
      }
    ],
    "shelfBackgroundImageId": "file_a88af487-16d0-4912-8f66-4c840e35d82c",
    "shelfDescription": "",
    "shelfIconImageId": "file_5846c7f0-58ce-4dc3-8257-52cf53f784ed",
    "shelfLayout": "highlightLeft",
    "shelfTabBackgroundImageId": "file_6be09fcb-1d0e-452f-ab75-4488225a3352",
    "shelfTitle": "Hanami Festival",
    "updatedAt": "2026-05-01T16:41:59.918Z"
  }
]
```
