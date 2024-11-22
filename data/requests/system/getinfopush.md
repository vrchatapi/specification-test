# getInfoPush

## Issues
Response schema mismatch:
* Invalid type at ``#/0/startDate``,
* Invalid type at ``#/0/endDate``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Unexpected property at ``#/2/experiment``,
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
    "createdAt": "2024-11-08T12:05:32.916Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_2b3f0f85-f349-47ff-9ff3-e7f3279b6fc2.png",
      "onPressed": {
        "command": "OpenVRCPlusMenu"
      }
    },
    "endDate": null,
    "hash": "ips_7681ee56-16a0-406d-96f6-fc7d58778ef9",
    "id": "ips_7681ee56-16a0-406d-96f6-fc7d58778ef9",
    "isEnabled": true,
    "priority": 470,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-08T12:05:32.916Z"
  },
  {
    "createdAt": "2024-11-05T00:03:48.789Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_f665c872-a250-46f7-8133-ff4b9d866874.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://hello.vrchat.com/blog/mobile-alpha-now-live"
        ]
      }
    },
    "endDate": "2024-12-10T08:00:00.000Z",
    "hash": "ips_fb5f0422-ffcd-45fe-92f6-eb18424f64f5",
    "id": "ips_fb5f0422-ffcd-45fe-92f6-eb18424f64f5",
    "isEnabled": true,
    "priority": 500,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-11-05T08:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-14T18:04:39.009Z"
  },
  {
    "createdAt": "2024-11-12T14:03:24.358Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_6c026919-9274-4372-b16b-b097c3266e6f.png",
      "onPressed": {
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_6474e2a2-5458-477b-b46b-528747f893a7"
        ]
      }
    },
    "endDate": "2024-12-06T10:00:00.000Z",
    "experiment": {
      "key": "ips-bullet-time",
      "variant": "treatment"
    },
    "hash": "ips_f2962f53-4a41-448f-a804-cd29e45c266a",
    "id": "ips_f2962f53-4a41-448f-a804-cd29e45c266a",
    "isEnabled": true,
    "priority": 547,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-11-22T00:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-21T22:17:02.526Z"
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
