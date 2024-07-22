# createGroup

## Issues
```
Response schema mismatch: Unexpected property at #/myMember/acceptedByDisplayName, Unexpected property at #/myMember/acceptedById, Unexpected property at #/myMember/createdAt, Unexpected property at #/myMember/hasJoinedFromPurchase, Unexpected property at #/myMember/lastPostReadAt, Unexpected property at #/myMember/mRoleIds, Unexpected property at #/lastPostCreatedAt, Unexpected property at #/transferTargetId, Unexpected property at #/updatedAt.
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
  /**
   * Unexpected property.
   *
   * @schema GroupMyMember
   * @keyword additionalProperties
   *
   * #/properties/myMember/additionalProperties
   * #/myMember/createdAt
   */
  "createdAt": "2024-07-22T00:56:35.278Z",
  "description": "My exciting new group․ It's pretty niftyǃ",
  "discriminator": "2764",
  "galleries": [],
  "iconId": null,
  "iconUrl": "https://assets.vrchat.com/www/groups/default_icon.png",
  "id": "<unstable: string>",
  "isVerified": false,
  "joinState": "closed",
  "languages": [],
  /**
   * Unexpected property.
   *
   * @schema Group
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/lastPostCreatedAt
   */
  "lastPostCreatedAt": null,
  "links": [],
  "memberCount": 1,
  "memberCountSyncedAt": "2024-07-22T00:56:35.270Z",
  "membershipStatus": "member",
  "myMember": {
    /**
     * Unexpected property.
     *
     * @schema GroupMyMember
     * @keyword additionalProperties
     *
     * #/properties/myMember/additionalProperties
     * #/myMember/acceptedByDisplayName
     */
    "acceptedByDisplayName": null,
    /**
     * Unexpected property.
     *
     * @schema GroupMyMember
     * @keyword additionalProperties
     *
     * #/properties/myMember/additionalProperties
     * #/myMember/acceptedById
     */
    "acceptedById": null,
    "createdAt": "2024-07-22T00:56:35.351Z",
    "groupId": "grp_9336eecb-2f66-4c70-8c61-621b55ae5f30",
    "has2FA": true,
    /**
     * Unexpected property.
     *
     * @schema GroupMyMember
     * @keyword additionalProperties
     *
     * #/properties/myMember/additionalProperties
     * #/myMember/hasJoinedFromPurchase
     */
    "hasJoinedFromPurchase": false,
    "id": "gmem_8f86b9ba-fa42-46c3-9a3e-71e4b6fe37c4",
    "isRepresenting": false,
    "isSubscribedToAnnouncements": true,
    "joinedAt": "2024-07-22T00:56:35.351Z",
    /**
     * Unexpected property.
     *
     * @schema GroupMyMember
     * @keyword additionalProperties
     *
     * #/properties/myMember/additionalProperties
     * #/myMember/lastPostReadAt
     */
    "lastPostReadAt": null,
    /**
     * Unexpected property.
     *
     * @schema GroupMyMember
     * @keyword additionalProperties
     *
     * #/properties/myMember/additionalProperties
     * #/myMember/mRoleIds
     */
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
      "grol_a96609de-309b-4ce3-be37-b14eb872ea8e"
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
   * Unexpected property.
   *
   * @schema Group
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/transferTargetId
   */
  "transferTargetId": null,
  /**
   * Unexpected property.
   *
   * @schema Group
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/updatedAt
   */
  "updatedAt": "2024-07-22T00:56:35.278Z"
}
```
