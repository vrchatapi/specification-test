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
  "roleTemplate": "default",
  "shortCode": "grop"
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
  "createdAt": "2024-07-23T02:30:42.325Z",
  "description": "My exciting new group․ It's pretty niftyǃ",
  "discriminator": "5145",
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
  "memberCountSyncedAt": "2024-07-23T02:30:42.320Z",
  "membershipStatus": "member",
  "myMember": {
    "acceptedByDisplayName": null,
    "acceptedById": null,
    "createdAt": "2024-07-23T02:30:42.355Z",
    "groupId": "grp_f58054ba-4c37-4f9d-bd9c-0150ef6ae74c",
    "has2FA": true,
    "hasJoinedFromPurchase": false,
    "id": "gmem_951f26a2-e07e-454d-b0ad-f4e6ecd83ca2",
    "isRepresenting": false,
    "isSubscribedToAnnouncements": true,
    "joinedAt": "2024-07-23T02:30:42.355Z",
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
      "grol_c1bc72d4-020b-4b8a-94a1-73d02df009cb"
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
  "updatedAt": "2024-07-23T02:30:42.325Z"
}
```
