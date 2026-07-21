# getFriends

## Issues
Response schema mismatch:
* Unexpected property at ``#/0/bannerColor``,
* Unexpected property at ``#/0/bannerType``,
* Unexpected property at ``#/0/discordId``,
* Unexpected property at ``#/0/iconFrame``,
* Unexpected property at ``#/0/iconUrl``,
* Unexpected property at ``#/0/nameplateEffect``,
* Unexpected property at ``#/0/profileEffect``.
## Request
`GET https://api.vrchat.cloud/api/1/auth/user/friends?offline=true`

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
    "bannerColor": "3cc92c",
    "bannerType": "color",
    "bio": "",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "developerType": "none",
    "discordId": "",
    "displayName": "VRChatWiki",
    "friendKey": "",
    "iconFrame": "",
    "iconUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "id": "usr_b52ef6f9-b8fd-44b6-923e-bebe184eef7a",
    "imageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "isFriend": true,
    "last_activity": "2026-07-21T02:01:14.288Z",
    "last_login": "2026-07-21T02:01:14.288Z",
    "last_mobile": null,
    "last_platform": "standalonewindows",
    "location": "offline",
    "nameplateEffect": "",
    "platform": "",
    "profileEffect": "",
    "profilePicOverride": "",
    "profilePicOverrideThumbnail": "",
    "status": "offline",
    "statusDescription": "",
    "tags": [],
    "userIcon": ""
  }
]
```
