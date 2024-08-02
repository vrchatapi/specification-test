# getInfoPush

## Issues
```
Response schema mismatch:

Cannot fit value in explicit enum at #/1/data/onPressed/command,
Unexpected property at #/1/regions,
Unexpected property at #/1/requireClientTags,
Invalid type at #/2/startDate,
Invalid type at #/2/endDate,
Unexpected property at #/2/regions,
Unexpected property at #/2/requireClientTags,
Cannot fit value in explicit enum at #/3/data/onPressed/command,
Invalid type at #/3/startDate,
Invalid type at #/3/endDate,
Unexpected property at #/3/regions,
Unexpected property at #/3/requireClientTags,
Cannot fit value in explicit enum at #/4/data/onPressed/command.
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
    "createdAt": "2024-07-17T18:01:34.192Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/ipsai_0bccadf6-b0e7-41c6-bd7c-c98351134be9.png",
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
        "command": "OpenWorldsMenu",
        "parameters": [
          "ips_bc05dea7-035c-461a-b13e-6266dd5a1189"
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
     * #/2/endDate
     */
    "endDate": "2024-08-03T14:00:00.000Z",
    "hash": "ips_73f41df5-65ac-4660-a59a-992f2cc4b931",
    "id": "ips_73f41df5-65ac-4660-a59a-992f2cc4b931",
    "isEnabled": true,
    "priority": 800,
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
     * #/2/startDate
     */
    "startDate": "2024-07-20T01:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-07-17T18:13:39.357Z"
  },
  {
    "createdAt": "2023-06-29T22:26:18.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/3d77b57763c7cf61c163b6992a2b226809097dae25eb9cce5b6e4daccb63d12b.png",
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
     * #/3/endDate
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
     * #/3/startDate
     */
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-no-vrcplus"
    ],
    "updatedAt": "2024-08-01T17:49:50.482Z"
  },
  {
    "createdAt": "2023-06-29T22:22:28.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/3d77b57763c7cf61c163b6992a2b226809097dae25eb9cce5b6e4daccb63d12b.png",
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
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_35060828-5b61-4c1e-b01d-19233b890002"
        ]
      }
    },
    "endDate": null,
    "hash": "ips_873d6aa8-133b-456a-b490-22609976110d",
    "id": "ips_873d6aa8-133b-456a-b490-22609976110d",
    "isEnabled": true,
    "priority": 877,
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
    "startDate": null,
    "tags": [
      "quick-menu-banner",
      "user-vrcplus"
    ],
    "updatedAt": "2024-08-01T17:50:12.539Z"
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
      "imageUrl": "https://assets.vrchat.com/ips/assets/c9bb5ca0943d090263c4f6bf7b25191a0330f34e6a0bf53cf742ea587a319048.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://feedback.vrchat.com/"
        ]
      }
    },
    "hash": "ips_d83ed94c-dc16-4b32-a4c9-16fa9dd52e48",
    "id": "ips_d83ed94c-dc16-4b32-a4c9-16fa9dd52e48",
    "isEnabled": true,
    "priority": 1030,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2022-09-08T21:59:18.000Z"
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
