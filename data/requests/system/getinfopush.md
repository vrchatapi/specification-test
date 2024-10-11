# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Invalid type at ``#/0/endDate``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Invalid type at ``#/2/startDate``,
* Invalid type at ``#/2/endDate``,
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

```jsonc
[
  {
    "createdAt": "2024-10-09T18:57:12.817Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_8db6cb99-f505-444e-bf5e-74ed29aedd15.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_3081ad76-aae8-4b45-96d4-e71f0e8603f5"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_023d020b-c733-447f-8a4c-b557e87347ca",
    "id": "ips_023d020b-c733-447f-8a4c-b557e87347ca",
    "isEnabled": true,
    "priority": 845,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-10-10T00:28:50.173Z"
  },
  {
    "createdAt": "2024-09-27T15:17:51.489Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_e7321732-ee5c-48dd-910d-906457bf34a2.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_14076924-56bb-4d53-ba29-f04f5ff2d857"
        ]
      }
    },
    "endDate": "2024-10-14T07:00:00.000Z",
    "hash": "ips_799768e8-69f6-4367-b501-a75ab18164cd",
    "id": "ips_799768e8-69f6-4367-b501-a75ab18164cd",
    "isEnabled": true,
    "priority": 855,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-10-01T07:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-09-27T19:27:07.634Z"
  },
  {
    "createdAt": "2024-09-06T21:36:11.072Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_03d9ab9b-0ea0-43b2-9218-94d00b6d36d9.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_f63b05aa-99da-4669-a83f-5becc64ef07d"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_44c4e858-e0a6-4fd4-8daf-727a3b6f6ce0",
    "id": "ips_44c4e858-e0a6-4fd4-8daf-727a3b6f6ce0",
    "isEnabled": true,
    "priority": 865,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-09-06T21:36:11.072Z"
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
