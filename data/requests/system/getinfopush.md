# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Cannot fit value in explicit enum at ``#/3/data/onPressed/command``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Invalid type at ``#/4/endDate``,
* Invalid type at ``#/4/startDate``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Cannot fit value in explicit enum at ``#/5/data/onPressed/command``,
* Invalid type at ``#/5/endDate``,
* Invalid type at ``#/5/startDate``,
* Unexpected property at ``#/5/experiment``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Cannot fit value in explicit enum at ``#/6/data/onPressed/command``,
* Invalid type at ``#/6/endDate``,
* Invalid type at ``#/6/startDate``,
* Unexpected property at ``#/6/regions``,
* Unexpected property at ``#/6/requireClientTags``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Invalid type at ``#/7/endDate``,
* Invalid type at ``#/7/startDate``,
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
    "createdAt": "2026-01-15T12:53:30.833Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_3d2fa49d-d9a9-4dd4-a9f2-39ddb4c9675d.png",
      "onPressed": {
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_ea8d8263-9cce-4e19-96fe-8236392493ae"
        ]
      }
    },
    "endDate": "2026-01-25T15:00:00.000Z",
    "hash": "ips_cb35ff1c-80ce-40ed-a09b-a3fb3adc12c2",
    "id": "ips_cb35ff1c-80ce-40ed-a09b-a3fb3adc12c2",
    "isEnabled": true,
    "priority": 199,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2026-01-16T13:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-15T12:53:30.833Z"
  },
  {
    "createdAt": "2025-12-20T01:15:12.267Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_c376ebb1-c2ef-498e-968f-e972d7b2f5b5.jpg",
      "onPressed": {
        "command": "OpenVRChatStore",
        "parameters": [
          "vrchat"
        ]
      }
    },
    "endDate": "2026-02-05T21:00:00.000Z",
    "hash": "ips_nye2026celebratorybundl-e6344edb4aad",
    "id": "ips_nye2026celebratorybundl-e6344edb4aad",
    "isEnabled": true,
    "priority": 200,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-12-29T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T03:59:38.567Z"
  },
  {
    "createdAt": "2025-12-20T00:01:27.976Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_cf0a1b54-d08e-4815-8e9a-70e79fb6d372.jpg",
      "onPressed": {
        "command": "OpenVRCPlusMenu"
      }
    },
    "endDate": "2026-02-05T21:00:00.000Z",
    "hash": "ips_nye2026vrccontent1-a11d-88c95e304ba4",
    "id": "ips_nye2026vrccontent1-a11d-88c95e304ba4",
    "isEnabled": true,
    "priority": 225,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-12-29T21:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T04:07:00.970Z"
  },
  {
    "createdAt": "2025-12-04T16:12:48.178Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_99f536ac-baaf-4117-ad37-3a217b60d35e.jpg",
      "onPressed": {
        "command": "OpenVRChatStore",
        "parameters": [
          "vrchat"
        ]
      }
    },
    "endDate": "2026-02-05T21:00:00.000Z",
    "hash": "ips_wintersblessing2025bb7b-79614135ae5b",
    "id": "ips_wintersblessing2025bb7b-79614135ae5b",
    "isEnabled": true,
    "priority": 285,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-12-08T23:37:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T04:08:26.864Z"
  },
  {
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
    "priority": 350,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T04:09:02.397Z"
  },
  {
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
    "priority": 499,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T04:13:17.246Z"
  },
  {
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
    "priority": 618,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2026-01-11T04:12:54.564Z"
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
