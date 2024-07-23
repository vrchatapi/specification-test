# getAssignedPermissions

## Issues
```
Response schema mismatch:

Unexpected property at #/2data/max,
Unexpected property at #/4/displayName,
Unexpected property at #/4/description,
Unexpected property at #/4/type,
Unexpected property at #/6data/maxFavoritesPerGroup,
Unexpected property at #/6data/maxFavoriteGroups,
Unexpected property at #/7data/tags,
Unexpected property at #/7data/badges.
```

## Request
`get https://vrchat.com/api/1/auth/permissions`

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
      /**
       * Unexpected property.
       *
       * @schema unknown
       * @keyword additionalProperties
       *
       * #/items/properties/data/additionalProperties
       * #/2data/max
       */
      "max": 9
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
    /**
     * Unexpected property.
     *
     * @schema Permission
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/4/displayName
     */
    "displayName": "",
    /**
     * Unexpected property.
     *
     * @schema Permission
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/4/description
     */
    "description": "",
    /**
     * Unexpected property.
     *
     * @schema Permission
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/4/type
     */
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
      /**
       * Unexpected property.
       *
       * @schema unknown
       * @keyword additionalProperties
       *
       * #/items/properties/data/additionalProperties
       * #/6data/maxFavoritesPerGroup
       */
      "maxFavoritesPerGroup": {
        "avatar": 50
      },
      /**
       * Unexpected property.
       *
       * @schema unknown
       * @keyword additionalProperties
       *
       * #/items/properties/data/additionalProperties
       * #/6data/maxFavoriteGroups
       */
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
      /**
       * Unexpected property.
       *
       * @schema unknown
       * @keyword additionalProperties
       *
       * #/items/properties/data/additionalProperties
       * #/7data/tags
       */
      "tags": [
        "system_supporter"
      ],
      /**
       * Unexpected property.
       *
       * @schema unknown
       * @keyword additionalProperties
       *
       * #/items/properties/data/additionalProperties
       * #/7data/badges
       */
      "badges": [
        "bdg_754f9935-0f97-49d8-b857-95afb9b673fa"
      ]
    }
  },
  {
    "id": "prms_0d9549db-d30a-48f3-a6b8-6741ce5a4283",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-invite-photos",
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
    "id": "prms_1d9549db-d30a-48f3-a6b8-6741ce5a4283",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-icons",
    "data": {}
  },
  {
    "id": "prms_dc02c512-4c03-479c-8c6a-d9329c023baf",
    "ownerId": "usr_bc012e97-a292-4abc-b4e6-f9edcc8c0d2b",
    "ownerDisplayName": "Nyx",
    "name": "permission-user-gallery",
    "data": {}
  }
]
```
