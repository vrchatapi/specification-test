# createGroup

## Issues
```
Response schema mismatch: Invalid type at #/transferTargetId, Invalid type at #/lastPostCreatedAt, Invalid type at #/myMember/acceptedByDisplayName, Invalid type at #/myMember/acceptedById, Invalid type at #/myMember/lastPostReadAt.
```

## Request
`post https://vrchat.com/api/1/groups`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "name": "testGroup",
  "shortCode": "grop",
  "roleTemplate": "default"
}
```


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "bannerId": null,
  "bannerUrl": "https://assets.vrchat.com/www/groups/default_banner.png",
  "createdAt": "2024-07-22T21:42:41.578Z",
  "description": "My exciting new group․ It's pretty niftyǃ",
  "discriminator": "1000",
  "galleries": [],
  "iconId": null,
  "iconUrl": "https://assets.vrchat.com/www/groups/default_icon.png",
  "id": "<unstable: string>",
  "isVerified": false,
  "joinState": "closed",
  "languages": [],
  /**
   * Invalid type.
   *
   * @schema unknown
   * @keyword type
   *
   * #/properties/lastPostCreatedAt/type
   * #/lastPostCreatedAt
   */
  "lastPostCreatedAt": null,
  "links": [],
  "memberCount": 1,
  "memberCountSyncedAt": "2024-07-22T21:42:41.570Z",
  "membershipStatus": "member",
  "myMember": {
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/properties/myMember/properties/acceptedByDisplayName/type
     * #/myMember/acceptedByDisplayName
     */
    "acceptedByDisplayName": null,
    /**
     * Invalid type.
     *
     * @schema UserID
     * @keyword type
     *
     * #/properties/myMember/properties/acceptedById/type
     * #/myMember/acceptedById
     */
    "acceptedById": null,
    "createdAt": "2024-07-22T21:42:41.603Z",
    "groupId": "grp_8c928b6a-4a7b-4ff7-983e-a5fe30ed3cd9",
    "has2FA": true,
    "hasJoinedFromPurchase": false,
    "id": "gmem_acff2d66-1ac1-4115-bd0e-704f74f96d0a",
    "isRepresenting": false,
    "isSubscribedToAnnouncements": true,
    "joinedAt": "2024-07-22T21:42:41.603Z",
    /**
     * Invalid type.
     *
     * @schema unknown
     * @keyword type
     *
     * #/properties/myMember/properties/lastPostReadAt/type
     * #/myMember/lastPostReadAt
     */
    "lastPostReadAt": null,
    "mRoleIds": [],
    "managerNotes": "",
    "membershipStatus": "member",
    "permissions": [
      "*",
      "group-instance-join",
      "group-instance-open-create",
      "group-instance-plus-create",
      "group-instance-public-create",
      "group-members-viewall"
    ],
    "roleIds": [
      "grol_f306e412-89fe-430e-9510-4c034a0592c9"
    ],
    "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "visibility": "visible"
  },
  "name": "testGroup",
  "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "privacy": "default",
  "rules": "",
  "shortCode": "GROP",
  "tags": [],
  /**
   * Invalid type.
   *
   * @schema UserID
   * @keyword type
   *
   * #/properties/transferTargetId/type
   * #/transferTargetId
   */
  "transferTargetId": null,
  "updatedAt": "2024-07-22T21:42:41.578Z"
}
```
