# getInfoPush

## Issues
```
Response schema mismatch:

Invalid type at #/0/startDate,
Invalid type at #/0/endDate,
Unexpected property at #/0/regions,
Unexpected property at #/0/requireClientTags,
Cannot fit value in explicit enum at #/1/data/onPressed/command,
Invalid type at #/1/startDate,
Invalid type at #/1/endDate,
Unexpected property at #/1/regions,
Unexpected property at #/1/requireClientTags,
Cannot fit value in explicit enum at #/2/data/onPressed/command,
Invalid type at #/2/startDate,
Unexpected property at #/2/regions,
Unexpected property at #/2/requireClientTags,
Cannot fit value in explicit enum at #/3/data/onPressed/command,
Invalid type at #/3/startDate,
Unexpected property at #/3/regions,
Unexpected property at #/3/requireClientTags,
Cannot fit value in explicit enum at #/4/data/onPressed/command,
Cannot fit value in explicit enum at #/5/data/onPressed/command,
Invalid type at #/5/startDate,
Invalid type at #/5/endDate,
Unexpected property at #/5/regions,
Unexpected property at #/5/requireClientTags.
```

## Request
`get https://vrchat.com/api/1/infoPush?include=quick-menu-banner&require=quick-menu-banner`

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
    "createdAt": "2023-06-29T22:26:18.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_f10c5dce-ca02-4514-82c3-ac918d60410f.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/1/data/onPressed/command
         */
        "command": "OpenVRCPlusMenu"
      }
    },
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/endDate/type
     * #/0/endDate
     */
    "endDate": null,
    "hash": "ips_78bfec9d-8316-41cc-a959-214d9ded061f",
    "id": "ips_78bfec9d-8316-41cc-a959-214d9ded061f",
    "isEnabled": true,
    "priority": 870,
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/regions
     */
    "regions": [],
    "releaseStatus": "public",
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/requireClientTags
     */
    "requireClientTags": [],
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/startDate/type
     * #/0/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-no-vrcplus"
    ],
    "updatedAt": "2024-09-05T23:41:16.367Z"
  },
  {
    "createdAt": "2024-07-25T21:09:20.823Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_6129276d-ef17-4a06-830b-4b096d2fe5ed.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/2/data/onPressed/command
         */
        "command": "OpenAccountUpgrade"
      }
    },
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/endDate/type
     * #/1/endDate
     */
    "endDate": null,
    "hash": "ips_81d61462-c265-4f16-ac40-0d9c0d784297",
    "id": "ips_81d61462-c265-4f16-ac40-0d9c0d784297",
    "isEnabled": true,
    "priority": 875,
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/regions
     */
    "regions": [],
    "releaseStatus": "public",
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/requireClientTags
     */
    "requireClientTags": [],
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/startDate/type
     * #/1/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-account-upgradable"
    ],
    "updatedAt": "2024-08-29T21:53:44.490Z"
  },
  {
    "createdAt": "2024-08-20T18:18:44.024Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_eaebddcf-1fce-4bde-a1c6-b6a0ca4c80b4.jpg",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/3/data/onPressed/command
         */
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_fd0d51d9-3881-45bf-9c60-b8d7e8df9647"
        ]
      }
    },
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/endDate/type
     * #/5/endDate
     */
    "endDate": "2024-09-07T21:00:00.000Z",
    "hash": "ips_e112b132-c546-4b86-b3bd-69b7bf573b83",
    "id": "ips_e112b132-c546-4b86-b3bd-69b7bf573b83",
    "isEnabled": true,
    "priority": 880,
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/regions
     */
    "regions": [],
    "releaseStatus": "public",
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/requireClientTags
     */
    "requireClientTags": [],
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/startDate/type
     * #/2/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-08-29T21:52:40.119Z"
  },
  {
    "createdAt": "2024-08-12T20:21:39.518Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_92f17705-0b50-4d5c-bbe2-cdd7825f2c3c.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/4/data/onPressed/command
         */
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_6b4abc8b-436c-4a3f-8e2b-8922a8888389"
        ]
      }
    },
    "endDate": "2024-09-07T03:59:00.000Z",
    "hash": "ips_4d1911bc-03bc-4256-910b-aa62c0ad2e2b",
    "id": "ips_4d1911bc-03bc-4256-910b-aa62c0ad2e2b",
    "isEnabled": true,
    "priority": 920,
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/3/regions
     */
    "regions": [],
    "releaseStatus": "public",
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/3/requireClientTags
     */
    "requireClientTags": [],
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/startDate/type
     * #/3/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-08-29T23:26:17.995Z"
  },
  {
    "createdAt": "2023-06-12T22:38:29.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/1da1e49e888bcc5ed2503d97442d32d2208aaf5802df08f0e71c664c8ebbbfad.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/5/data/onPressed/command
         */
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
    "priority": 1030,
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/5/regions
     */
    "regions": [],
    "releaseStatus": "public",
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/5/requireClientTags
     */
    "requireClientTags": [],
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/startDate/type
     * #/5/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-08-30T17:42:54.144Z"
  }
]
```
