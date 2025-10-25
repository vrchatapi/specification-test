# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Unexpected property at ``#/2/experiment``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Cannot fit value in explicit enum at ``#/3/data/onPressed/command``,
* Unexpected property at ``#/3/experiment``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Cannot fit value in explicit enum at ``#/4/data/onPressed/command``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Cannot fit value in explicit enum at ``#/5/data/onPressed/command``,
* Invalid type at ``#/5/startDate``,
* Invalid type at ``#/5/endDate``,
* Unexpected property at ``#/5/experiment``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Cannot fit value in explicit enum at ``#/6/data/onPressed/command``,
* Invalid type at ``#/6/startDate``,
* Invalid type at ``#/6/endDate``,
* Unexpected property at ``#/6/regions``,
* Unexpected property at ``#/6/requireClientTags``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Invalid type at ``#/7/startDate``,
* Invalid type at ``#/7/endDate``,
* Unexpected property at ``#/7/regions``,
* Unexpected property at ``#/7/requireClientTags``,
* Cannot fit value in explicit enum at ``#/8/data/onPressed/command``,
* Invalid type at ``#/8/startDate``,
* Invalid type at ``#/8/endDate``,
* Unexpected property at ``#/8/regions``,
* Unexpected property at ``#/8/requireClientTags``,
* Cannot fit value in explicit enum at ``#/9/data/onPressed/command``,
* Invalid type at ``#/9/startDate``,
* Invalid type at ``#/9/endDate``,
* Unexpected property at ``#/9/regions``,
* Unexpected property at ``#/9/requireClientTags``,
* Cannot fit value in explicit enum at ``#/10/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/11/data/onPressed/command``,
* Invalid type at ``#/11/startDate``,
* Invalid type at ``#/11/endDate``,
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
    "createdAt": "2025-10-22T19:46:01.618Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_a2f6730d-f5d5-4180-91ec-6c95af0f5f57.png",
      "onPressed": {
        "command": "OpenMainMenuTab",
        "parameters": [
          "MainMenuCalendar"
        ]
      }
    },
    "endDate": "2025-10-27T04:00:00.000Z",
    "hash": "ips_group-fair4e9-49c2-aa26-6b10c0189b77",
    "id": "ips_group-fair4e9-49c2-aa26-6b10c0189b77",
    "isEnabled": true,
    "priority": 380,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-10-24T04:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "version-build-number-1727",
      "version-build-number-1726"
    ],
    "updatedAt": "2025-10-24T00:20:37.445Z"
  },
  {
    "createdAt": "2025-10-24T00:15:14.603Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_d1635ae3-df79-4fe6-9435-362b2b6472aa.png",
      "onPressed": {
        "command": "OpenMainMenuTab",
        "parameters": [
          "MainMenuLiveNow"
        ]
      }
    },
    "endDate": "2025-10-27T04:00:00.000Z",
    "hash": "ips_openbetagroupfair2-b24f-ec62c4def625",
    "id": "ips_openbetagroupfair2-b24f-ec62c4def625",
    "isEnabled": true,
    "priority": 380,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-10-24T04:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "version-build-number-1746"
    ],
    "updatedAt": "2025-10-24T00:20:16.599Z"
  },
  {
    "createdAt": "2025-10-07T19:16:10.947Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_9e0729a8-ed2e-4436-8252-dad634bc8d91.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_a939b579-c972-4429-9a58-c9ed00108011"
        ]
      }
    },
    "endDate": "2025-11-06T22:00:00.000Z",
    "experiment": {
      "key": "",
      "variant": ""
    },
    "hash": "ips_spookalitybundle2025hel-a701dcd2e86c",
    "id": "ips_spookalitybundle2025hel-a701dcd2e86c",
    "isEnabled": true,
    "priority": 390,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-10-09T04:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-10-14T18:12:20.238Z"
  },
  {
    "createdAt": "2025-10-09T16:03:57.991Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_eb566a3b-56ec-4b54-ac9f-c9dd46222c65.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_a939b579-c972-4429-9a58-c9ed00108011"
        ]
      }
    },
    "endDate": "2025-11-06T22:00:00.000Z",
    "experiment": {
      "key": "candy-quest-ips",
      "variant": "article"
    },
    "hash": "ips_abtesthelparticle9-be07-cf41438b9db0",
    "id": "ips_abtesthelparticle9-be07-cf41438b9db0",
    "isEnabled": true,
    "priority": 402,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-10-09T04:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-10-14T18:11:53.121Z"
  },
  {
    "createdAt": "2025-09-15T19:42:07.325Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_e825859d-749d-4a00-bea0-5dd7b1566b7f.png",
      "onPressed": {
        "command": "OpenInventoryMenu",
        "parameters": [
          "invd_04d98edd-79db-4c4e-a156-7e07510aee10"
        ]
      }
    },
    "endDate": "2025-10-31T20:00:00.000Z",
    "hash": "ips_septcontentdropcampfire-6ebef4ec1f93",
    "id": "ips_septcontentdropcampfire-6ebef4ec1f93",
    "isEnabled": true,
    "priority": 450,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2025-09-15T20:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-10-07T19:14:50.143Z"
  },
  {
    "createdAt": "2025-07-14T21:51:37.569Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_7634b755-8e1c-4214-af21-af6c8452768f.png",
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
    "updatedAt": "2025-08-28T20:32:11.460Z"
  },
  {
    "createdAt": "2025-07-16T01:58:10.772Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_42d99cd3-26ab-46be-bf81-7a331d861902.png",
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
    "updatedAt": "2025-08-02T01:12:41.688Z"
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
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_7bf4b581-63da-462f-84a1-8a0dcd41e723.png",
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
    "updatedAt": "2025-08-06T17:47:57.941Z"
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
