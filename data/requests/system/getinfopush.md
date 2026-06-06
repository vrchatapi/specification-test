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
* Unexpected property at ``#/2/clientMinVersion``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Unexpected property at ``#/3/clientMinVersion``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Cannot fit value in explicit enum at ``#/4/data/onPressed/command``,
* Unexpected property at ``#/4/clientMinVersion``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Cannot fit value in explicit enum at ``#/5/data/onPressed/command``,
* Unexpected property at ``#/5/clientMinVersion``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Invalid type at ``#/6/endDate``,
* Invalid type at ``#/6/startDate``,
* Unexpected property at ``#/6/clientMinVersion``,
* Unexpected property at ``#/6/regions``,
* Unexpected property at ``#/6/requireClientTags``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Invalid type at ``#/7/endDate``,
* Invalid type at ``#/7/startDate``,
* Unexpected property at ``#/7/clientMinVersion``,
* Unexpected property at ``#/7/experiment``,
* Unexpected property at ``#/7/regions``,
* Unexpected property at ``#/7/requireClientTags``,
* Cannot fit value in explicit enum at ``#/8/data/onPressed/command``,
* Invalid type at ``#/8/endDate``,
* Invalid type at ``#/8/startDate``,
* Unexpected property at ``#/8/clientMinVersion``,
* Unexpected property at ``#/8/regions``,
* Unexpected property at ``#/8/requireClientTags``,
* Cannot fit value in explicit enum at ``#/9/data/onPressed/command``,
* Invalid type at ``#/9/endDate``,
* Invalid type at ``#/9/startDate``,
* Unexpected property at ``#/9/regions``,
* Unexpected property at ``#/9/requireClientTags``,
* Cannot fit value in explicit enum at ``#/10/data/onPressed/command``,
* Invalid type at ``#/10/endDate``,
* Invalid type at ``#/10/startDate``,
* Unexpected property at ``#/10/regions``,
* Unexpected property at ``#/10/requireClientTags``,
* Cannot fit value in explicit enum at ``#/11/data/onPressed/command``,
* Invalid type at ``#/11/endDate``,
* Invalid type at ``#/11/startDate``,
* Unexpected property at ``#/11/regions``,
* Unexpected property at ``#/11/requireClientTags``,
* Cannot fit value in explicit enum at ``#/12/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/13/data/onPressed/command``,
* Invalid type at ``#/13/endDate``,
* Invalid type at ``#/13/startDate``,
* Unexpected property at ``#/13/regions``,
* Unexpected property at ``#/13/requireClientTags``.
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
    "createdAt": "2026-06-04T19:22:25.960Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_e202fcf5-27ba-4a04-ad05-b487c4848d3f.jpg",
      "onPressed": {
        "command": "OpenVRChatStore",
        "parameters": [
          "vrchat"
        ]
      }
    },
    "endDate": "2026-08-07T21:00:00.000Z",
    "hash": "ips_summer2026bundle3f-8b0e-0c8b97eab9ca",
    "id": "ips_summer2026bundle3f-8b0e-0c8b97eab9ca",
    "isEnabled": true,
    "priority": 425,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-06-05T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-04T19:23:41.626Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-06-01T17:55:10.836Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_fc4393a9-00e6-4b41-b169-fc8c370d4232.png",
      "onPressed": {
        "command": "OpenQuickMenuTab",
        "parameters": [
          "QuickMenuVRChatPlusSubscriptions"
        ]
      }
    },
    "endDate": "2026-07-01T04:00:00.000Z",
    "hash": "ips_pride2026f0cc-433d-81bc-4639c86dbab5",
    "id": "ips_pride2026f0cc-433d-81bc-4639c86dbab5",
    "isEnabled": true,
    "priority": 450,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-06-01T20:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-04T19:23:30.868Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-06-04T19:19:41.005Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_faa8f85e-f795-4be0-8eb5-f81ea9ec0dcb.jpg",
      "onPressed": {
        "command": "OpenVRCPlusMenu"
      }
    },
    "endDate": "2026-07-01T21:00:00.000Z",
    "hash": "ips_junecontentdrop2026a202-cf032454e24f",
    "id": "ips_junecontentdrop2026a202-cf032454e24f",
    "isEnabled": true,
    "priority": 473,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-06-05T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-04T19:19:41.005Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-06-01T19:50:17.211Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_ef9d6652-0268-45bb-8ac4-9b98476d14b6.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://furality.org/register"
        ]
      }
    },
    "endDate": "2026-06-08T04:00:00.000Z",
    "hash": "ips_furality-26-happening-n-d7f5fba7846d",
    "id": "ips_furality-26-happening-n-d7f5fba7846d",
    "isEnabled": true,
    "priority": 500,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-06-04T20:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-01T21:40:56.049Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-05-21T00:34:54.063Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_d317506b-feeb-4ea3-8bcd-74bea844bc24.jpg",
      "onPressed": {
        "command": "OpenVRChatStore",
        "parameters": [
          "accessories"
        ]
      }
    },
    "endDate": "2026-06-12T21:00:00.000Z",
    "hash": "ips_punkharajuku2026f6-8b2f-358ba9bbe867",
    "id": "ips_punkharajuku2026f6-8b2f-358ba9bbe867",
    "isEnabled": true,
    "priority": 600,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-05-22T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-01T17:32:18.638Z"
  },
  {
    "clientMinVersion": null,
    "createdAt": "2026-05-07T16:44:36.469Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_88109634-81f1-4880-8963-3cefc411d049.png",
      "onPressed": {
        "command": "OpenVRChatStore",
        "parameters": [
          "vrchat"
        ]
      }
    },
    "endDate": "2026-07-03T21:00:00.000Z",
    "hash": "ips_may26cosmicsurvivalkit4-6b9bd2de3ef3",
    "id": "ips_may26cosmicsurvivalkit4-6b9bd2de3ef3",
    "isEnabled": true,
    "priority": 650,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-05-08T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-06-01T17:32:12.113Z"
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
    "createdAt": "2025-06-24T17:53:34.810Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_de7ead52-37b9-4a1e-8473-f27bb169da2c.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_81e9f0b5-3ada-4632-8155-e855d2de879c"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_inventoryrelease3e-b0b8-4b8da35d0a23",
    "id": "ips_inventoryrelease3e-b0b8-4b8da35d0a23",
    "isEnabled": true,
    "priority": 830,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T04:17:02.940Z"
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
