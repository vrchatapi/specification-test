# createGroup

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
  "createdAt": "2024-07-22T22:04:10.622Z",
  "description": "My exciting new group․ It's pretty niftyǃ",
  "discriminator": "3966",
  "galleries": [],
  "iconId": null,
  "iconUrl": "https://assets.vrchat.com/www/groups/default_icon.png",
  "id": "<unstable: string>",
  "isVerified": false,
  "joinState": "closed",
  "languages": [],
  "lastPostCreatedAt": null,
  "links": [],
  "memberCount": 1,
  "memberCountSyncedAt": "2024-07-22T22:04:10.614Z",
  "membershipStatus": "member",
  "myMember": {
    "acceptedByDisplayName": null,
    "acceptedById": null,
    "createdAt": "2024-07-22T22:04:10.682Z",
    "groupId": "grp_1b2b525b-ecdd-49a7-aa7a-397af173c3e5",
    "has2FA": true,
    "hasJoinedFromPurchase": false,
    "id": "gmem_79027ca2-b0d8-4dec-838e-048283fc6bcd",
    "isRepresenting": false,
    "isSubscribedToAnnouncements": true,
    "joinedAt": "2024-07-22T22:04:10.682Z",
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
      "grol_4c18d1fb-2145-4353-bb7f-312bf1e1b355"
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
  "transferTargetId": null,
  "updatedAt": "2024-07-22T22:04:10.622Z"
}
```
