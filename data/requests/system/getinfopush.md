# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Invalid type at ``#/1/startDate``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Invalid type at ``#/2/startDate``,
* Invalid type at ``#/2/endDate``,
* Unexpected property at ``#/2/experiment``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Cannot fit value in explicit enum at ``#/3/data/onPressed/command``,
* Invalid type at ``#/3/startDate``,
* Invalid type at ``#/3/endDate``,
* Unexpected property at ``#/3/experiment``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Cannot fit value in explicit enum at ``#/4/data/onPressed/command``,
* Invalid type at ``#/4/startDate``,
* Invalid type at ``#/4/endDate``,
* Unexpected property at ``#/4/experiment``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Cannot fit value in explicit enum at ``#/5/data/onPressed/command``,
* Invalid type at ``#/5/startDate``,
* Invalid type at ``#/5/endDate``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Cannot fit value in explicit enum at ``#/6/data/onPressed/command``,
* Invalid type at ``#/6/endDate``,
* Unexpected property at ``#/6/regions``,
* Unexpected property at ``#/6/requireClientTags``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Invalid type at ``#/7/startDate``,
* Invalid type at ``#/7/endDate``,
* Unexpected property at ``#/7/regions``,
* Unexpected property at ``#/7/requireClientTags``,
* Cannot fit value in explicit enum at ``#/8/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/9/data/onPressed/command``,
* Invalid type at ``#/9/startDate``,
* Invalid type at ``#/9/endDate``,
* Unexpected property at ``#/9/regions``,
* Unexpected property at ``#/9/requireClientTags``.
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
    "createdAt": "2025-06-13T18:45:44.113Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_06ea2228-8e56-4617-853a-6d09f07bcb27.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_d138e2f7-f9b4-4e78-b815-e08ba4fd1f96"
        ]
      }
    },
    "endDate": "2025-07-01T04:00:00.000Z",
    "hash": "ips_prideupdate8c-4178-a975-24264e05c20a",
    "id": "ips_prideupdate8c-4178-a975-24264e05c20a",
    "isEnabled": true,
    "priority": 655,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-06-13T21:14:05.579Z"
  },
  {
    "createdAt": "2025-06-02T12:18:20.647Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_b768b86a-d35b-4129-afae-52669557556e.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_c3e7d4da-8272-49da-bd4f-28b25302e297"
        ]
      }
    },
    "endDate": "2025-06-23T04:00:00.000Z",
    "hash": "ips_avm-launch74f-40a8-b60c-3ea574083d69",
    "id": "ips_avm-launch74f-40a8-b60c-3ea574083d69",
    "isEnabled": true,
    "priority": 695,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-06-02T20:54:32.130Z"
  },
  {
    "createdAt": "2025-03-17T18:03:40.088Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_b36925e3-eed4-40fd-b65d-2bd87a98a6f1.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_98ae784a-a28d-4124-b694-5286465148ba"
        ]
      }
    },
    "endDate": null,
    "experiment": {
      "key": "",
      "variant": ""
    },
    "hash": "ips_1e730748-06ba-4446-aea9-753b44b9fe0c",
    "id": "ips_1e730748-06ba-4446-aea9-753b44b9fe0c",
    "isEnabled": true,
    "priority": 699,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-06-05T22:27:02.669Z"
  },
  {
    "createdAt": "2025-03-17T18:06:31.696Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_4543f73a-d8ea-4d5c-90d1-20ba7409f9ec.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_2e9d5aed-1ac8-4720-9071-12d68c39ecb7"
        ]
      }
    },
    "endDate": null,
    "experiment": {
      "key": "",
      "variant": ""
    },
    "hash": "ips_e95d1b81-14d0-4a7c-96ba-ea8c6e82285f",
    "id": "ips_e95d1b81-14d0-4a7c-96ba-ea8c6e82285f",
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
    "updatedAt": "2025-04-03T17:47:10.235Z"
  },
  {
    "createdAt": "2025-03-17T18:08:43.645Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_aee35d6b-d6cf-4617-b59d-81a86c9e8227.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_321fcc84-f8a5-49f7-bf47-685c10dc177b"
        ]
      }
    },
    "endDate": null,
    "experiment": {
      "key": "",
      "variant": ""
    },
    "hash": "ips_5bf741f9-86ae-4d16-b958-ff8c17a5f3dc",
    "id": "ips_5bf741f9-86ae-4d16-b958-ff8c17a5f3dc",
    "isEnabled": true,
    "priority": 750,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-04-03T17:47:29.432Z"
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
    "createdAt": "2024-12-05T19:13:29.777Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_c0174675-553d-44f4-85e8-6dc8eeda044f.png",
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
    "priority": 825,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-12-06T05:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2025-03-27T00:18:46.932Z"
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
