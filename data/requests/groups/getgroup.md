# getGroup

## Request
`GET https://api.vrchat.cloud/api/1/groups/<unstable>`

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
{
  "allowGroupJoinPrompt": true,
  "badges": [],
  "bannerId": null,
  "bannerUrl": "https://assets.vrchat.com/www/groups/default_banner.png",
  "createdAt": "<unstable: string>",
  "description": "My exciting new group․ It's pretty niftyǃ",
  "discriminator": "<unstable: string>",
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
  "memberCountSyncedAt": "<unstable: string>",
  "membershipStatus": "member",
  "myMember": {
    "groupId": "<unstable: string>",
    "has2FA": true,
    "id": "<unstable: string>",
    "isRepresenting": false,
    "isSubscribedToAnnouncements": true,
    "isSubscribedToEventAnnouncements": true,
    "joinedAt": "<unstable: string>",
    "lastPostReadAt": null,
    "mRoleIds": [],
    "membershipStatus": "member",
    "permissions": [
      "*"
    ],
    "roleIds": "<unstable: array of strings>",
    "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "visibility": "visible"
  },
  "name": "Test",
  "onlineMemberCount": 0,
  "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "privacy": "default",
  "rules": "",
  "shortCode": "<unstable>",
  "tags": [],
  "transferTargetId": null,
  "updatedAt": "<unstable: string>"
}
```
