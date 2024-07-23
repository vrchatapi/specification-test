# getInfoPush

## Issues
```
Response schema mismatch: Cannot fit value in explicit enum at #/1/data/onPressed/command, Unexpected property at #/1/regions, Unexpected property at #/1/requireClientTags, Cannot fit value in explicit enum at #/4/data/onPressed/command, Unexpected property at #/4/requireClientTags, Cannot fit value in explicit enum at #/5/data/onPressed/command, Unexpected property at #/5/requireClientTags, Cannot fit value in explicit enum at #/6/data/onPressed/command, Unexpected property at #/6/requireClientTags, Cannot fit value in explicit enum at #/8/data/onPressed/command, Cannot fit value in explicit enum at #/9/data/onPressed/command, Cannot fit value in explicit enum at #/10/data/onPressed/command, Unexpected property at #/10/requireClientTags, Cannot fit value in explicit enum at #/11/data/onPressed/command.
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
    "startDate": "2024-07-20T01:00:00.000Z",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-07-17T18:13:39.357Z"
  },
  {
    "createdAt": "2024-05-21T18:09:44.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/dbc7b2797059913f1af0985d002188b351d6858e78d6fc89f85aa17c1cd0fd39.png",
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
        "command": "OpenURL",
        "parameters": [
          "https://hello.vrchat.com/blog/apple-ios-beta-signup"
        ]
      }
    },
    "hash": "ips_4b2a3b8e-1c80-4021-a90b-768790476a75",
    "id": "ips_4b2a3b8e-1c80-4021-a90b-768790476a75",
    "isEnabled": true,
    "priority": 890,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-05-21T18:09:44.000Z"
  },
  {
    "createdAt": "2024-01-11T18:39:53.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/47cd36ef2a54edccc90cf979f99dbd957123333252f96e6559127deb95238087.png",
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
        "command": "OpenURL",
        "parameters": [
          "https://hello.vrchat.com/blog/mobile-alpha-now-live"
        ]
      }
    },
    "hash": "ips_e47fa6c3-29fa-46bf-b597-3dd050c7f425",
    "id": "ips_e47fa6c3-29fa-46bf-b597-3dd050c7f425",
    "isEnabled": true,
    "priority": 910,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2024-01-11T18:39:53.000Z"
  },
  {
    "createdAt": "2023-08-25T21:11:07.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/78434ca43795bb4cccb469f0a2ed396e1a1c5d914b49d0a61ba981226cc953da.png",
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
          "ips_8626bb31-2c94-44d3-a7bb-18db67fd5d41"
        ]
      }
    },
    "hash": "ips_926e7956-e13f-412c-a1b7-f13c88709309",
    "id": "ips_926e7956-e13f-412c-a1b7-f13c88709309",
    "isEnabled": true,
    "priority": 915,
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
    "requireClientTags": [
      "platform-pc-desktop"
    ],
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2023-08-25T22:12:23.000Z"
  },
  {
    "createdAt": "2023-08-25T21:11:07.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/78434ca43795bb4cccb469f0a2ed396e1a1c5d914b49d0a61ba981226cc953da.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/8/data/onPressed/command
         */
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_1e52d592-0a53-417d-af4b-39c4f199dc94"
        ]
      }
    },
    "hash": "ips_b720c233-351c-4269-9145-73ef276013d2",
    "id": "ips_b720c233-351c-4269-9145-73ef276013d2",
    "isEnabled": true,
    "priority": 915,
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
    "requireClientTags": [
      "platform-pc-vr"
    ],
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2023-08-25T22:12:23.000Z"
  },
  {
    "createdAt": "2023-08-25T21:14:55.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/78434ca43795bb4cccb469f0a2ed396e1a1c5d914b49d0a61ba981226cc953da.png",
      "onPressed": {
        /**
         * Cannot fit value in explicit enum.
         *
         * @schema unknown
         * @keyword enum
         *
         * #/items/properties/data/properties/onPressed/properties/command/enum
         * #/9/data/onPressed/command
         */
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_f834b7c3-8ab8-4281-85d1-fee394163d16"
        ]
      }
    },
    "hash": "ips_ce3b4b04-f48e-47de-9cd5-b3acd51fe211",
    "id": "ips_ce3b4b04-f48e-47de-9cd5-b3acd51fe211",
    "isEnabled": true,
    "priority": 915,
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
    "requireClientTags": [
      "platform-oculus-quest"
    ],
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2023-08-25T22:12:24.000Z"
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
         * #/10/data/onPressed/command
         */
        "command": "OpenVRCPlusMenu"
      }
    },
    "hash": "ips_78bfec9d-8316-41cc-a959-214d9ded061f",
    "id": "ips_78bfec9d-8316-41cc-a959-214d9ded061f",
    "isEnabled": true,
    "priority": 920,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-no-vrcplus"
    ],
    "updatedAt": "2023-06-29T22:56:28.000Z"
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
         * #/11/data/onPressed/command
         */
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_35060828-5b61-4c1e-b01d-19233b890002"
        ]
      }
    },
    "hash": "ips_873d6aa8-133b-456a-b490-22609976110d",
    "id": "ips_873d6aa8-133b-456a-b490-22609976110d",
    "isEnabled": true,
    "priority": 920,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-vrcplus"
    ],
    "updatedAt": "2023-06-29T23:03:15.000Z"
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
    "createdAt": "2022-10-26T22:03:24.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/8e67d9c6121ed9b09ca3b9f8b788c565c8c62f8708f4c1459abf73b78890a0d3.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_d9f4f465-a55c-4c13-8239-a238bb0a9bd7"
        ]
      }
    },
    "hash": "ips_44a18206-58af-4f3c-a215-ed0b53dbb31d",
    "id": "ips_44a18206-58af-4f3c-a215-ed0b53dbb31d",
    "isEnabled": true,
    "priority": 930,
    "releaseStatus": "public",
    /**
     * Unexpected property.
     *
     * @schema InfoPush
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/10/requireClientTags
     */
    "requireClientTags": [
      "platform-oculus-quest"
    ],
    "tags": [
      "quick-menu-banner",
      "platform-oculus-quest"
    ],
    "updatedAt": "2022-11-03T18:38:00.000Z"
  },
  {
    "createdAt": "2023-06-12T22:38:29.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/088d2ef27d350e1c0ca26f629b4fdbd68d69b80b186e5523792fe2999cdf6119.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "ips_4916df41-5925-4baa-9349-0eea287503f4"
        ]
      }
    },
    "hash": "ips_6d8ccc90-da25-439e-aaba-c478665dc79f",
    "id": "ips_6d8ccc90-da25-439e-aaba-c478665dc79f",
    "isEnabled": true,
    "priority": 940,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2023-06-28T19:15:52.000Z"
  },
  {
    "createdAt": "2023-03-09T18:56:29.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/745b0f27e9df4146376515045c2168d8efc0d4fe5ebdf1365759d2f55db5820d.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://vcc.docs.vrchat.com/news/release-2.0.0"
        ]
      }
    },
    "hash": "ips_a94abc7b-1df1-44cb-a830-7ced30ed103c",
    "id": "ips_a94abc7b-1df1-44cb-a830-7ced30ed103c",
    "isEnabled": true,
    "priority": 950,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2023-06-28T19:15:53.000Z"
  },
  {
    "createdAt": "2022-10-24T23:54:48.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/adaed2094c59dbe1f4fa6d92060ce8f6a2221e4ca5c140ecce292a44550f22e9.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://www.youtube.com/playlist?list=PLRUlfYGZBxVeEAVXkaG1uydyzFZAMOuMd"
        ]
      }
    },
    "hash": "ips_3dd68d7c-1051-4ffc-8c67-d93191aa3625",
    "id": "ips_3dd68d7c-1051-4ffc-8c67-d93191aa3625",
    "isEnabled": true,
    "priority": 970,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2022-10-24T23:54:48.000Z"
  },
  {
    "createdAt": "2021-06-08T20:24:54.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/e5fbc47936bdd52ea045bee16740ae802f65a41eb2a1f0aa0aa7d290191f432a.png",
      "onPressed": {
        "command": "OpenVRCPlusMenu"
      }
    },
    "hash": "ips_09265e23-fbcb-4239-bfca-126d3beb147e",
    "id": "ips_09265e23-fbcb-4239-bfca-126d3beb147e",
    "isEnabled": true,
    "priority": 999,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-no-vrcplus"
    ],
    "updatedAt": "2023-06-12T22:44:14.000Z"
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
    "createdAt": "2021-06-08T20:24:53.000Z",
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/66de2dfb2320e6f50a2da082441b91ae4d07276b2e928528c04a00cc3b37bb0a.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://docs.vrchat.com/docs/creating-your-first-avatar"
        ]
      }
    },
    "hash": "ips_1ced880f-d2d4-436c-b13f-bd43467e4c64",
    "id": "ips_1ced880f-d2d4-436c-b13f-bd43467e4c64",
    "isEnabled": true,
    "priority": 1040,
    "releaseStatus": "public",
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "updatedAt": "2022-09-08T21:59:19.000Z"
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
