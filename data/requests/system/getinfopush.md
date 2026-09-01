# getInfoPush

## Issues
Response schema mismatch:
Schema is not an object at #/items/properties/undefined.
## Request
`GET https://api.vrchat.cloud/api/1/infoPush?include=quick-menu-banner&require=quick-menu-banner`

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
    "clientMinVersion": null,
    "createdAt": "2026-08-27T13:04:25.745Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_e34589e8-0faa-4651-a234-0491cdd5d835.png",
      "onPressed": {
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_20759988-8dd4-40bf-8286-a6337c87682d"
        ]
      }
    },
    "endDate": "2026-09-06T14:59:00.000Z",
    "hash": "ips_sanrio-vfes-2026-summer-c6661e58bb6c",
    "id": "ips_sanrio-vfes-2026-summer-c6661e58bb6c",
    "isEnabled": true,
    "priority": 300,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-28T00:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-27T13:04:25.745Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-08-06T18:08:08.318Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_4fc84207-3f5d-465d-9e3d-f2b14f195c01.png",
      "onPressed": {
        "command": "OpenListingDetails",
        "parameters": [
          "prod_41b386db-d887-46ad-84a0-bc7d59115aed"
        ]
      }
    },
    "endDate": "2026-10-09T21:00:00.000Z",
    "hash": "ips_edmbundle2026-4fff-b715-ca4b03c608e2",
    "id": "ips_edmbundle2026-4fff-b715-ca4b03c608e2",
    "isEnabled": true,
    "priority": 318,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-07T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-27T18:48:27.010Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-08-18T19:33:55.983Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_15aed861-125c-42eb-b2cb-42941b87095f.jpg",
      "onPressed": {
        "command": "scrollToShelf",
        "parameters": [
          "ess_798cfeeb-7625-408e-9a82-bad1ace374c1"
        ]
      }
    },
    "endDate": "2026-09-21T09:00:00.000Z",
    "hash": "ips_casio20263880-4dd2-acf5-e12dd284771d",
    "id": "ips_casio20263880-4dd2-acf5-e12dd284771d",
    "isEnabled": true,
    "priority": 319,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-21T09:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-27T18:49:07.805Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-08-27T18:42:32.413Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_1c58c76b-6ffa-4564-8c2a-0b34b0f934e1.jpg",
      "onPressed": {
        "command": "scrollToShelf",
        "parameters": [
          "ess_f27165e9-a49d-4010-9f94-8cf89531c249"
        ]
      }
    },
    "endDate": "2026-09-18T21:00:00.000Z",
    "hash": "ips_e88d3769-3972-4ed9-bb5e-ac62c6016ced",
    "id": "ips_e88d3769-3972-4ed9-bb5e-ac62c6016ced",
    "isEnabled": true,
    "priority": 320,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-28T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-28T21:51:05.356Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-08-07T15:22:13.490Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_772600c2-f23c-4b86-80d5-64a17d092061.png",
      "onPressed": {
        "command": "OpenListingDetails",
        "parameters": [
          "prod_0641bb46-be2b-41a4-9f54-8b3e1e5415b1"
        ]
      }
    },
    "endDate": "2026-09-14T09:00:00.000Z",
    "hash": "ips_virtual-hiroshima-en-26-6beee26c973e",
    "id": "ips_virtual-hiroshima-en-26-6beee26c973e",
    "isEnabled": true,
    "priority": 340,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-14T09:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-07T15:22:13.490Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-06-25T23:07:19.500Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_c889a21f-32d9-406e-ae7e-70dfcd50b700.jpg",
      "onPressed": {
        "command": "OpenVRChatStore",
        "parameters": [
          "vrchat"
        ]
      }
    },
    "endDate": "2026-09-04T21:00:00.000Z",
    "hash": "ips_tanabatacontenten6-a479-3a58f9c9edd4",
    "id": "ips_tanabatacontenten6-a479-3a58f9c9edd4",
    "isEnabled": true,
    "priority": 400,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-07-03T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-25T23:07:19.500Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2025-10-29T17:23:05.366Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_8f84edb1-f6f2-4dd0-a59d-5ff0ce0d41d8.jpg",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://apps.apple.com/us/app/vrchat/id6448578770"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_ioslaunchoct20253a-82dd-1753b8109562",
    "id": "ips_ioslaunchoct20253a-82dd-1753b8109562",
    "isEnabled": true,
    "priority": 690,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-01T17:32:04.356Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2025-07-14T21:51:37.569Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_74cb1e1f-4ffc-49d7-a5dd-66e91fb67e97.jpg",
      "onPressed": {
        "command": "OpenAvatarsMenu",
        "parameters": [
          "Explore"
        ]
      }
    },
    "endDate": null,
    "experiment": {
      "key": "",
      "variant": ""
    },
    "hash": "ips_avmcontroltest4ac0-bf9d-d25478455864",
    "id": "ips_avmcontroltest4ac0-bf9d-d25478455864",
    "isEnabled": true,
    "priority": 700,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-01T17:31:55.870Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2025-07-16T01:58:10.772Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_f79f2b09-a39e-42b0-8fd9-73f46af027aa.jpg",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_1c00687d-06d7-45df-acbb-dd56713a3865"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_bigscreen-beyond-2e-vrc-0ed381e92299",
    "id": "ips_bigscreen-beyond-2e-vrc-0ed381e92299",
    "isEnabled": true,
    "priority": 800,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-01T17:31:41.614Z"
  },
  {
    "createdAt": "2025-01-27T21:09:40.711Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_0cadc6f6-29c1-45d6-ba45-8f32767279ca.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_92a821be-eff9-402c-9260-9b2c5d7784db"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_b20e9a25-c1e2-4052-a48c-e5cfe35f6c7e",
    "id": "ips_b20e9a25-c1e2-4052-a48c-e5cfe35f6c7e",
    "isEnabled": true,
    "priority": 815,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-03-17T17:54:52.830Z"
  },
  {
    "createdAt": "2024-07-25T21:09:20.823Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_6129276d-ef17-4a06-830b-4b096d2fe5ed.png",
      "onPressed": {
        "command": "OpenAccountUpgrade"
      }
    },
    "endDate": null,
    "hash": "ips_81d61462-c265-4f16-ac40-0d9c0d784297",
    "id": "ips_81d61462-c265-4f16-ac40-0d9c0d784297",
    "isEnabled": true,
    "priority": 875,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-account-upgradable"
    ],
    "updatedAt": "2024-08-29T21:53:44.490Z"
  },
  {
    "createdAt": "2023-06-12T22:38:29.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/1da1e49e888bcc5ed2503d97442d32d2208aaf5802df08f0e71c664c8ebbbfad.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_1f542a96-90b9-4e9a-9bff-0228f8f94289"
        ]
      }
    },
    "hash": "ips_56bcef1d-b97a-4b67-9a7c-dcf17f97ab63",
    "id": "ips_56bcef1d-b97a-4b67-9a7c-dcf17f97ab63",
    "isEnabled": true,
    "priority": 930,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2023-06-28T21:30:13.000Z"
  },
  {
    "createdAt": "2021-11-08T22:45:26.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_ccb636c2-1888-4234-8880-6f63ec23f330.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_000ae222-6bc7-416b-ab95-1d40380acc4d"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_d83ed94c-dc16-4b32-a4c9-16fa9dd52e48",
    "id": "ips_d83ed94c-dc16-4b32-a4c9-16fa9dd52e48",
    "isEnabled": true,
    "priority": 1000,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-09-06T21:40:18.980Z"
  }
]
```
