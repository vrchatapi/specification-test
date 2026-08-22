# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Unexpected property at ``#/0/clientMinVersion``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Unexpected property at ``#/1/clientMinVersion``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Invalid type at ``#/2/startDate``,
* Unexpected property at ``#/2/clientMinVersion``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Cannot fit value in explicit enum at ``#/3/data/onPressed/command``,
* Unexpected property at ``#/3/clientMinVersion``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Cannot fit value in explicit enum at ``#/4/data/onPressed/command``,
* Unexpected property at ``#/4/clientMinVersion``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Invalid type at ``#/5/endDate``,
* Invalid type at ``#/5/startDate``,
* Unexpected property at ``#/5/clientMinVersion``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Cannot fit value in explicit enum at ``#/6/data/onPressed/command``,
* Invalid type at ``#/6/endDate``,
* Invalid type at ``#/6/startDate``,
* Unexpected property at ``#/6/clientMinVersion``,
* Unexpected property at ``#/6/experiment``,
* Unexpected property at ``#/6/regions``,
* Unexpected property at ``#/6/requireClientTags``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Invalid type at ``#/7/endDate``,
* Invalid type at ``#/7/startDate``,
* Unexpected property at ``#/7/clientMinVersion``,
* Unexpected property at ``#/7/regions``,
* Unexpected property at ``#/7/requireClientTags``,
* Cannot fit value in explicit enum at ``#/8/data/onPressed/command``,
* Invalid type at ``#/8/endDate``,
* Invalid type at ``#/8/startDate``,
* Unexpected property at ``#/8/regions``,
* Unexpected property at ``#/8/requireClientTags``,
* Cannot fit value in explicit enum at ``#/9/data/onPressed/command``,
* Invalid type at ``#/9/endDate``,
* Invalid type at ``#/9/startDate``,
* Unexpected property at ``#/9/regions``,
* Unexpected property at ``#/9/requireClientTags``,
* Cannot fit value in explicit enum at ``#/10/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/11/data/onPressed/command``,
* Invalid type at ``#/11/endDate``,
* Invalid type at ``#/11/startDate``,
* Unexpected property at ``#/11/regions``,
* Unexpected property at ``#/11/requireClientTags``.
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
    "priority": 320,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-21T09:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-18T19:33:55.983Z"
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
    "createdAt": "2026-08-12T22:51:50.387Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_f81fc4bd-041f-4535-b903-3108e8b4a8db.png",
      "onPressed": {
        "command": "scrollToShelf",
        "parameters": [
          "ess_66c639e6-88da-4d5a-a4dd-95a1e2e947e6"
        ]
      }
    },
    "endDate": "2026-08-31T21:00:00.000Z",
    "hash": "ips_profiledecorations2026f-5f3950a9a65f",
    "id": "ips_profiledecorations2026f-5f3950a9a65f",
    "isEnabled": true,
    "priority": 345,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-14T13:39:07.227Z"
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
    "priority": 350,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-08-07T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-08-06T18:08:08.318Z"
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
