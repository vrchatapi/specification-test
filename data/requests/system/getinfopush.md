# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Invalid type at ``#/2/startDate``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Cannot fit value in explicit enum at ``#/3/data/onPressed/command``,
* Invalid type at ``#/3/startDate``,
* Invalid type at ``#/3/endDate``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Cannot fit value in explicit enum at ``#/4/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/5/data/onPressed/command``,
* Invalid type at ``#/5/startDate``,
* Invalid type at ``#/5/endDate``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``.
## Request
`GET https://vrchat.com/api/1/infoPush?include=quick-menu-banner&require=quick-menu-banner`

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
| x-vrc-request-id | `m33qvg4r1501bbsv` |

```jsonc
[
  {
    "createdAt": "2024-10-29T17:23:33.367Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_fe0322a8-4e1c-4e15-88d1-43931e81ed7f.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_77faaca8-86c0-4e0f-bffb-4655a9a63697"
        ]
      }
    },
    "endDate": "2024-11-30T05:00:00.000Z",
    "hash": "ips_b3fc2b97-14f2-4175-8444-2988a4f7d778",
    "id": "ips_b3fc2b97-14f2-4175-8444-2988a4f7d778",
    "isEnabled": true,
    "priority": 450,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-04T21:50:04.505Z"
  },
  {
    "createdAt": "2024-10-31T23:53:10.499Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_4cb79537-e942-4462-9806-9878754a29fa.png",
      "onPressed": {
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_19ff0710-644a-4cfd-aa12-b1d910b25346"
        ]
      }
    },
    "endDate": "2024-11-10T15:00:00.000Z",
    "hash": "ips_c546e73a-ea41-4d0b-9c21-f3ddc1c9a2e5",
    "id": "ips_c546e73a-ea41-4d0b-9c21-f3ddc1c9a2e5",
    "isEnabled": true,
    "priority": 470,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-11-01T15:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-01T17:46:21.318Z"
  },
  {
    "createdAt": "2024-10-21T20:38:09.749Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_ee0c3bb6-5eb8-4b50-b109-3ef62e679741.png",
      "onPressed": {
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_f9722bbd-a1a2-4b2d-9844-435c7acc8b04"
        ]
      }
    },
    "endDate": "2024-11-05T08:00:00.000Z",
    "hash": "ips_6359f727-a5bc-4269-afaf-4a8d9f244bbc",
    "id": "ips_6359f727-a5bc-4269-afaf-4a8d9f244bbc",
    "isEnabled": true,
    "priority": 500,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-10-21T20:50:15.039Z"
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
