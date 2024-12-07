# getInfoPush

## Issues
Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,
* Cannot fit value in explicit enum at ``#/1/data/onPressed/command``,
* Invalid type at ``#/1/endDate``,
* Unexpected property at ``#/1/regions``,
* Unexpected property at ``#/1/requireClientTags``,
* Cannot fit value in explicit enum at ``#/2/data/onPressed/command``,
* Invalid type at ``#/2/endDate``,
* Unexpected property at ``#/2/regions``,
* Unexpected property at ``#/2/requireClientTags``,
* Invalid type at ``#/3/startDate``,
* Invalid type at ``#/3/endDate``,
* Unexpected property at ``#/3/regions``,
* Unexpected property at ``#/3/requireClientTags``,
* Invalid type at ``#/4/startDate``,
* Unexpected property at ``#/4/regions``,
* Unexpected property at ``#/4/requireClientTags``,
* Invalid type at ``#/5/startDate``,
* Invalid type at ``#/5/endDate``,
* Unexpected property at ``#/5/regions``,
* Unexpected property at ``#/5/requireClientTags``,
* Unexpected property at ``#/6/regions``,
* Unexpected property at ``#/6/requireClientTags``,
* Cannot fit value in explicit enum at ``#/7/data/onPressed/command``,
* Unexpected property at ``#/7/regions``,
* Unexpected property at ``#/7/requireClientTags``,
* Cannot fit value in explicit enum at ``#/8/data/onPressed/command``,
* Invalid type at ``#/8/startDate``,
* Invalid type at ``#/8/endDate``,
* Unexpected property at ``#/8/regions``,
* Unexpected property at ``#/8/requireClientTags``,
* Cannot fit value in explicit enum at ``#/9/data/onPressed/command``,
* Cannot fit value in explicit enum at ``#/10/data/onPressed/command``,
* Invalid type at ``#/10/startDate``,
* Invalid type at ``#/10/endDate``,
* Unexpected property at ``#/10/regions``,
* Unexpected property at ``#/10/requireClientTags``.
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
    "createdAt": "2024-12-07T00:18:50.955Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_31dfad2c-a7f8-426c-b5bb-c9ce8fbccb2f.png",
      "onPressed": {
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_7f3fc127-22e7-4d7c-92aa-42989b67d097"
        ]
      }
    },
    "endDate": "2024-12-22T02:00:00.000Z",
    "hash": "ips_26dd6c66-f865-48d1-992d-819a501ff527",
    "id": "ips_26dd6c66-f865-48d1-992d-819a501ff527",
    "isEnabled": true,
    "priority": 190,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-12-07T01:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-12-07T00:18:50.955Z"
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
    "priority": 200,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-12-06T05:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-12-06T02:45:49.987Z"
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
    "priority": 300,
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
    "updatedAt": "2024-12-06T23:26:27.066Z"
  },
  {
    "createdAt": "2024-11-28T00:10:38.880Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_5b777960-88fb-4279-82be-03a1ed376cb9.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://www.tkqlhce.com/click-101270393-15268034?url=https%3A%2F%2Felectronics.sony.com%2Fmore%2Fmocopi%2Fall-mocopi%2Fp%2Fqmss1-uscx"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_954c2ef7-9c90-43de-8914-ca069e381bb1",
    "id": "ips_954c2ef7-9c90-43de-8914-ca069e381bb1",
    "isEnabled": true,
    "priority": 460,
    "regions": [
      "US"
    ],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-28T00:13:12.484Z"
  },
  {
    "createdAt": "2024-12-04T21:33:05.811Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_07b8714b-c1f7-4532-b755-de7167f3322f.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://www.makeship.com/products/vrrat-plush"
        ]
      }
    },
    "endDate": "2024-12-23T05:00:00.000Z",
    "hash": "ips_6852954d-4af0-4787-a388-c0d78c8af7dd",
    "id": "ips_6852954d-4af0-4787-a388-c0d78c8af7dd",
    "isEnabled": true,
    "priority": 468,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-12-04T21:34:41.885Z"
  },
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
    "createdAt": "2024-11-29T20:54:33.973Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_5643bc89-c2c1-408e-b084-a848f7a21f08.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_2db19483-683a-4123-9bba-865fe40f98aa"
        ]
      }
    },
    "endDate": "2024-12-14T00:00:00.000Z",
    "hash": "ips_530555a1-59c5-44ea-a2c1-49f3ced7a92d",
    "id": "ips_530555a1-59c5-44ea-a2c1-49f3ced7a92d",
    "isEnabled": true,
    "priority": 800,
    "regions": [],
    "releaseStatus": "public",
    "requireClientTags": [],
    "startDate": "2024-12-01T00:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-11-29T21:22:23.249Z"
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
