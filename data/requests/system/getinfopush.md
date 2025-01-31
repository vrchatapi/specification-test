# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Invalid type at ``#/0/endDate``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Invalid type at ``#/1/startDate``,
* Invalid type at ``#/1/endDate``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Invalid type at ``#/2/startDate``,
* Invalid type at ``#/2/endDate``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Cannot fit value in explicit enum at ``#/3/data/onPressed/command``,
* Invalid type at ``#/3/endDate``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Cannot fit value in explicit enum at ``#/4/data/onPressed/command``,
* Invalid type at ``#/4/endDate``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Cannot fit value in explicit enum at ``#/5/data/onPressed/command``,
* Invalid type at ``#/5/startDate``,
* Invalid type at ``#/5/endDate``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Cannot fit value in explicit enum at ``#/6/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Invalid type at ``#/7/startDate``,
* Invalid type at ``#/7/endDate``,
* Unexpected property at ``#/7/regions``,
* Unexpected property at ``#/7/requireClientTags``.
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
    "priority": 350,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-01-29T00:06:56.223Z"
  },
  {
    "createdAt": "2025-01-30T18:24:13.267Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_a5bf175e-7242-4368-a2eb-fc9f4bc3a268.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_b116a68a-90a8-4835-bdeb-fd238c419634"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_ea5bf3d0-153b-41c2-a354-30d5917786c5",
    "id": "ips_ea5bf3d0-153b-41c2-a354-30d5917786c5",
    "isEnabled": true,
    "priority": 390,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-01-30T21:23:31.301Z"
  },
  {
    "createdAt": "2025-01-23T22:19:50.735Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_1a915383-6699-4f9b-8bbe-1aab1fb15a4e.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_9b5cafcb-05f6-4260-a086-c33accb07ffd"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_f7b85a4e-b66c-4efd-b150-3779728f21a3",
    "id": "ips_f7b85a4e-b66c-4efd-b150-3779728f21a3",
    "isEnabled": true,
    "priority": 395,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-01-23T22:19:50.735Z"
  },
  {
    "createdAt": "2024-12-05T20:33:14.004Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_f6c6a298-b895-4e4c-9699-e20f2d84cd40.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_df9ebb03-174e-4190-954a-a2216d72c7d9"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_e61cede8-efb8-4be1-8472-2346eb2d8adc",
    "id": "ips_e61cede8-efb8-4be1-8472-2346eb2d8adc",
    "isEnabled": true,
    "priority": 398,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-12-06T05:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-01-23T19:55:34.807Z"
  },
  {
    "createdAt": "2024-12-05T19:13:29.777Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_e4d1d8d2-2573-48b1-9ac1-dfdfbb8975f1.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_21c479c9-a591-4148-b5a8-4976180bc361"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_84be39d1-c86e-4cb5-936c-135c92cc8392",
    "id": "ips_84be39d1-c86e-4cb5-936c-135c92cc8392",
    "isEnabled": true,
    "priority": 399,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-12-06T05:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "platform-pc-desktop",
      "platform-store-oculus",
      "platform-pc",
      "platform-oculus-quest",
      "platform-pc-vr",
      "platform-store-steam"
    ],
    "updatedAt": "2025-01-23T19:55:16.617Z"
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
