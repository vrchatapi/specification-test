# selectAvatar with id

## Request
`put https://api.vrchat.cloud/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0/select`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-encoding | `gzip` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "id": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "displayName": "<redacted>",
  "userIcon": "",
  "bio": "",
  "bioLinks": [],
  "profilePicOverride": "",
  "statusDescription": "",
  "username": "<redacted>",
  "pastDisplayNames": [],
  "hasEmail": true,
  "hasPendingEmail": false,
  "obfuscatedEmail": "8******@ariesclark.com",
  "obfuscatedPendingEmail": "",
  "emailVerified": true,
  "hasBirthday": true,
  "unsubscribe": true,
  "statusHistory": [
    "Looking to make new friends",
    "Ask me about ․․․",
    "Let's partyǃ",
    "I'm AFK right now",
    "I'm streaming on Twitch",
    "My mic is muted",
    "I'm here but busy",
    "I speak ［English］",
    "I create ․․․",
    "My discord is ․․․‚"
  ],
  "statusFirstTime": true,
  "friends": [],
  "friendGroupNames": [],
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_04a70244-6e90-4f49-b81e-5478fe90d056/5/file",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_04a70244-6e90-4f49-b81e-5478fe90d056/5/256",
  "currentAvatar": "avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0",
  "currentAvatarAssetUrl": "https://api.vrchat.cloud/api/1/file/file_cea4ec5e-af23-4c1e-982b-b93f3c6cfc2b/8/file",
  "fallbackAvatar": "avtr_d898623c-561f-4001-b507-b24cefbd486e",
  "accountDeletionDate": null,
  "accountDeletionLog": null,
  "acceptedTOSVersion": 8,
  "acceptedPrivacyVersion": 0,
  "steamId": "",
  "steamDetails": {},
  "oculusId": "",
  "hasLoggedInFromClient": false,
  "homeLocation": "",
  "twoFactorAuthEnabled": true,
  "twoFactorAuthEnabledDate": "2023-04-11T22:29:32.524Z",
  "updated_at": "2023-06-02T01:00:54.950Z",
  "state": "offline",
  "tags": [],
  "developerType": "none",
  "last_login": "2023-06-02T02:32:39.472Z",
  "last_platform": "standalonewindows",
  "allowAvatarCopying": true,
  "status": "active",
  "date_joined": "2023-04-11",
  "isFriend": false,
  "friendKey": "434f410a4ad8d57975d638fd6bef40fe056de7b9f8c23321e51e935710936289",
  "last_activity": "2023-06-02T02:32:39.472Z"
}
```
