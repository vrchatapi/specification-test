# getGroupInvites

## Issues
```
Response schema mismatch:

Unexpected property at #/0/acceptedByDisplayName,
Unexpected property at #/0/acceptedById.
```

## Request
`get https://vrchat.com/api/1/groups/<unstable>/invites`

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
    /**
     * Unexpected property.
     *
     * @schema GroupMember
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/acceptedByDisplayName
     */
    "acceptedByDisplayName": "8cf3def6b8cea",
    /**
     * Unexpected property.
     *
     * @schema GroupMember
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/acceptedById
     */
    "acceptedById": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "bannedAt": null,
    "createdAt": "2024-09-19T00:59:58.806Z",
    "groupId": "<unstable>",
    "hasJoinedFromPurchase": false,
    "id": "gmem_6b32339f-6d2c-492a-9298-f4903fcd5ec7",
    "isRepresenting": false,
    "isSubscribedToAnnouncements": true,
    "joinedAt": null,
    "lastPostReadAt": null,
    "mRoleIds": [],
    "managerNotes": "",
    "membershipStatus": "invited",
    "roleIds": [],
    "user": {
      "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
      "displayName": "b9ce75b4dc299",
      "iconUrl": "",
      "id": "usr_9e10ea3e-8115-4b51-9076-b1792215d57e",
      "profilePicOverride": "",
      "thumbnailUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256"
    },
    "userId": "usr_9e10ea3e-8115-4b51-9076-b1792215d57e",
    "visibility": "visible"
  }
]
```
