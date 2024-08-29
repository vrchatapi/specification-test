# getInfoPush

## Issues
```
Response schema mismatch:

Cannot fit value in explicit enum at #/1/data/onPressed/command,
Invalid type at #/1/startDate,
Invalid type at #/1/endDate,
Unexpected property at #/1/regions,
Unexpected property at #/1/requireClientTags,
Invalid type at #/2/startDate,
Invalid type at #/2/endDate,
Unexpected property at #/2/regions,
Unexpected property at #/2/requireClientTags,
Cannot fit value in explicit enum at #/3/data/onPressed/command,
Invalid type at #/3/startDate,
Unexpected property at #/3/regions,
Unexpected property at #/3/requireClientTags,
Cannot fit value in explicit enum at #/4/data/onPressed/command,
Unexpected property at #/4/regions,
Unexpected property at #/4/requireClientTags,
Cannot fit value in explicit enum at #/5/data/onPressed/command,
Invalid type at #/5/startDate,
Invalid type at #/5/endDate,
Unexpected property at #/5/regions,
Unexpected property at #/5/requireClientTags,
Cannot fit value in explicit enum at #/6/data/onPressed/command,
Invalid type at #/6/startDate,
Invalid type at #/6/endDate,
Unexpected property at #/6/regions,
Unexpected property at #/6/requireClientTags,
Cannot fit value in explicit enum at #/7/data/onPressed/command,
Invalid type at #/8/startDate,
Invalid type at #/8/endDate,
Unexpected property at #/8/regions,
Unexpected property at #/8/requireClientTags.
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
    "createdAt": "2021-09-13T20:50:41.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/80e490a28312d4fbea2107e356e29139b4790108ed3d91ba70bca4b44caddcd4.png"
    },
    "hash": "ips_37b26b47-c37f-4c94-8199-d520052e6ba3",
    "id": "ips_37b26b47-c37f-4c94-8199-d520052e6ba3",
    "isEnabled": true,
    "priority": 100,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "version-2023.3.2p2",
      "version-2023.3.2p1",
      "version-2023.3.2"
    ],
    "updatedAt": "2023-10-16T20:55:19.000Z"
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
         * #/1/data/onPressed/command
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
    "priority": 690,
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
    "updatedAt": "2024-08-28T14:44:57.095Z"
  },
  {
    "createdAt": "2023-06-29T22:26:18.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_2b9ffcd5-4b99-46da-8575-90bd7af8c4a1.png",
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
     * #/2/endDate
     */
    "endDate": null,
    "hash": "ips_78bfec9d-8316-41cc-a959-214d9ded061f",
    "id": "ips_78bfec9d-8316-41cc-a959-214d9ded061f",
    "isEnabled": true,
    "priority": 877,
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
      "user-no-vrcplus"
    ],
    "updatedAt": "2024-08-02T17:03:03.409Z"
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
         * #/4/data/onPressed/command
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
    "priority": 878,
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
    "updatedAt": "2024-08-28T01:04:01.791Z"
  },
  {
    "createdAt": "2024-08-20T14:41:17.393Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_e2024253-fae4-4939-a69a-e38de2ceaa47.png",
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
          "ips_f63b05aa-99da-4669-a83f-5becc64ef07d"
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
     * #/6/endDate
     */
    "endDate": "2024-09-04T03:59:00.000Z",
    "hash": "ips_86ba297c-6771-4808-8b63-5d918a0a92d0",
    "id": "ips_86ba297c-6771-4808-8b63-5d918a0a92d0",
    "isEnabled": true,
    "priority": 880,
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/4/regions
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
     * #/4/requireClientTags
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
    "startDate": "2024-08-20T04:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-08-21T00:10:21.321Z"
  },
  {
    "createdAt": "2024-08-15T16:20:06.969Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_3f54d193-39f4-49eb-9d85-62d6155165e2.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/6/data/onPressed/command
         */
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_fb4a14fd-8763-4dce-95c2-453489c9b23d"
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
     * #/8/endDate
     */
    "endDate": null,
    "hash": "ips_4d736e82-6e52-424b-8b1f-4f161874eee3",
    "id": "ips_4d736e82-6e52-424b-8b1f-4f161874eee3",
    "isEnabled": true,
    "priority": 900,
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
     * #/6/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "platform-pc",
      "platform-pc-vr",
      "platform-pc-desktop"
    ],
    "updatedAt": "2024-08-15T16:26:30.167Z"
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
         * #/7/data/onPressed/command
         */
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_6b4abc8b-436c-4a3f-8e2b-8922a8888389"
        ]
      }
    },
    "endDate": null,
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
     * #/6/regions
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
     * #/6/requireClientTags
     */
    "requireClientTags": [],
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/items/properties/startDate/type
     * #/8/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-08-13T17:00:58.554Z"
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
        "command": "OpenURL",
        "parameters": [
          "https://feedback.vrchat.com/"
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
     * #/8/regions
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
     * #/8/requireClientTags
     */
    "requireClientTags": [],
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-08-06T15:55:51.592Z"
  },
  {
    "createdAt": "2021-09-13T20:50:40.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/0f2870c9b5033df8ad337e4bd4f9b5687efa421359a72ebcf22d8421acae7299.png",
      "onPressed": {
        "command": "CannedWorldSearch",
        "parameters": [
          "Avatar"
        ]
      }
    },
    "hash": "ips_76a92137-c91a-4d6a-981b-438df0b5b0b5",
    "id": "ips_76a92137-c91a-4d6a-981b-438df0b5b0b5",
    "isEnabled": true,
    "priority": 1080,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-trust-level-visitor",
      "user-trust-level-new-user"
    ],
    "updatedAt": "2023-09-12T17:51:03.000Z"
  },
  {
    "createdAt": "2021-09-13T20:50:41.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/15c3a1d7bcba45c63f384f0c31b903f0edc71c695b5b71810e1963ac53fe1c04.png"
    },
    "hash": "ips_3bc3d31c-85f7-407e-9e08-d1bb6373a70e",
    "id": "ips_3bc3d31c-85f7-407e-9e08-d1bb6373a70e",
    "isEnabled": true,
    "priority": 1090,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-trust-level-visitor",
      "user-trust-level-new-user"
    ],
    "updatedAt": "2023-08-31T20:59:11.000Z"
  }
]
```
