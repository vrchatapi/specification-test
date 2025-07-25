# getAssignedPermissions

## Issues
Response schema mismatch:
* Unexpected property at ``#/1data/max``,
* Unexpected property at ``#/2data/max``,
* Unexpected property at ``#/3data/max``,
* Unexpected property at ``#/4data/max``,
* Unexpected property at ``#/5data/max``,
* Unexpected property at ``#/8data/max``,
* Unexpected property at ``#/12data/maxFavoritesPerGroup``,
* Unexpected property at ``#/12data/maxFavoriteGroups``,
* Unexpected property at ``#/13data/tags``,
* Unexpected property at ``#/13data/badges``,
* Unexpected property at ``#/19data/max``.
## Request
`GET https://api.vrchat.cloud/api/1/auth/permissions`

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
    "id": "prms_4cd435c5-f91d-4916-8195-3c2c7e2ae540",
    "ownerId": "usr_f717a1d7-3329-4def-8f51-b0c82f72d4d0",
    "ownerDisplayName": "VRC Nayir",
    "name": "permission-age-verification",
    "displayName": "",
    "description": "",
    "type": "system",
    "data": {}
  },
  {
    "id": "prms_f3ca998c-6e10-4b9e-b05f-9c06abf3ce32",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-prints-upload",
    "data": {
      "max": 60
    }
  },
  {
    "id": "prms_f3639e26-cacf-4d42-a23d-7f6dca329fd6",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-prints-gallery-free",
    "data": {
      "max": 60
    }
  },
  {
    "id": "prms_6d2096bc-22c4-4f7e-a4e6-7f46b18bb2fc",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-prints",
    "data": {
      "max": 64
    }
  },
  {
    "id": "prms_ac1c3d9e-ffcf-474a-9f3f-32f11c24835a",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-prints-gallery-vrcplus",
    "data": {
      "max": 60
    }
  },
  {
    "id": "prms_f2ccb432-81d3-41d7-9af6-6d3893f1840f",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-stickers",
    "data": {
      "max": 18
    }
  },
  {
    "id": "prms_c32ac86d-9bb2-41f9-b086-681871d8b909",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-emoji-animated",
    "data": {}
  },
  {
    "id": "prms_d82b3de1-3087-4b0d-9d9c-02d462a3f613",
    "ownerId": "usr_23643ec7-e88a-4acc-acb7-17f3964e9cf9",
    "ownerDisplayName": "Nifty255",
    "name": "permission-extra-group-count",
    "data": {}
  },
  {
    "id": "prms_9979d52e-44fd-432b-bfc0-180ed286b896",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-emoji",
    "data": {
      "max": 18
    }
  },
  {
    "id": "prms_0dd8c63a-a47f-4095-b82c-fb2a9514277b",
    "ownerId": "usr_6c553262-3e43-4daf-a6b9-1fa83b41c85b",
    "ownerDisplayName": "Slorg",
    "name": "permission-can-use-mobile",
    "data": {}
  },
  {
    "id": "prms_6f9527c6-268b-4c44-b5e5-c7624075569d",
    "ownerId": "usr_23643ec7-e88a-4acc-acb7-17f3964e9cf9",
    "ownerDisplayName": "Nifty255",
    "name": "permission-groups-create",
    "displayName": "",
    "description": "",
    "type": "system",
    "data": {}
  },
  {
    "id": "prms_fe07c8a7-a4ca-4eda-97e5-e241040ef6f8",
    "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b",
    "ownerDisplayName": "Arctor",
    "name": "permission-trust-boost"
  },
  {
    "id": "prms_804ba021-9f47-4e25-9847-1f42fdb2e6ff",
    "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b",
    "ownerDisplayName": "Arctor",
    "name": "permission-extra-favorites-avatar-groups",
    "data": {
      "maxFavoritesPerGroup": {
        "avatar": 50
      },
      "maxFavoriteGroups": {
        "avatar": 6
      }
    }
  },
  {
    "id": "prms_76f33deb-dd5d-46b7-b79d-e1f8f0a9a1e0",
    "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b",
    "ownerDisplayName": "Arctor",
    "name": "permission-supporter-tags",
    "data": {
      "tags": [
        "system_supporter"
      ],
      "badges": [
        "bdg_754f9935-0f97-49d8-b857-95afb9b673fa"
      ]
    }
  },
  {
    "id": "prms_dc02c512-4c03-479c-8c6a-d9329c023baf",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-gallery",
    "data": {}
  },
  {
    "id": "prms_1d9549db-d30a-48f3-a6b8-6741ce5a4283",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-icons",
    "data": {}
  },
  {
    "id": "prms_153ac0b7-c2dd-43f9-96e3-c61fd2e85509",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-profile-pic-override",
    "data": {}
  },
  {
    "id": "prms_0d9549db-d30a-48f3-a6b8-6741ce5a4283",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-invite-photos",
    "data": {}
  },
  {
    "id": "prms_253e6b4d-07f5-4ebf-b07f-99990ded6a7d",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-use-props",
    "data": {}
  },
  {
    "id": "prms_f3639e26-cacf-4d42-a23d-7f6dca329fd6",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-prints-gallery-free",
    "data": {
      "max": 60
    }
  },
  {
    "id": "prms_46dadde5-329c-4711-8f00-4a3a25dfc237",
    "ownerId": "usr_6c553262-3e43-4daf-a6b9-1fa83b41c85b",
    "ownerDisplayName": "Slorg",
    "name": "permission-mass-gifting",
    "displayName": "Mass Gifting",
    "description": "Allows a user to purchase gifts in bulk",
    "data": {}
  },
  {
    "id": "prms_ddbfb4ac-0683-4c31-9290-ee097a51a176",
    "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b",
    "ownerDisplayName": "Arctor",
    "name": "permission-queue-impostors-on-create",
    "data": {}
  },
  {
    "id": "prms_3fb9997e-6dab-4e52-8a29-767bacbb67a1",
    "ownerId": "vF8OwsCETo",
    "ownerDisplayName": "System",
    "name": "permission-purchase-tokens",
    "type": "system",
    "data": {}
  },
  {
    "id": "prms_3e11dbec-b594-46ca-a366-c2a56e758d00",
    "ownerId": "usr_6c553262-3e43-4daf-a6b9-1fa83b41c85b",
    "ownerDisplayName": "Slorg",
    "name": "permission-purchase-gifts",
    "data": {}
  }
]
```
