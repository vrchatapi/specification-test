# selectAvatar with default avatar id

## Request
`put https://api.vrchat.cloud/api/1/avatars/avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11/select`

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
  "displayName": "8cf3def6b8cea",
  "userIcon": "",
  "bio": "",
  "bioLinks": [],
  "profilePicOverride": "",
  "statusDescription": "",
  "username": "8cf3def6b8cea",
  "pastDisplayNames": [],
  "hasEmail": true,
  "hasPendingEmail": false,
  "obfuscatedEmail": "<redacted>",
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
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "currentAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "currentAvatarAssetUrl": "https://api.vrchat.cloud/api/1/file/file_d7b814f6-a8a0-44f8-9c2f-492947e0ecae/4/file",
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
  "updated_at": "<unstable: string>",
  "state": "offline",
  "tags": [
    "system_no_captcha"
  ],
  "developerType": "none",
  "last_login": "<unstable: string>",
  "last_platform": "standalonewindows",
  "allowAvatarCopying": false,
  "status": "active",
  "date_joined": "2023-04-11",
  "isFriend": false,
  "friendKey": "434f410a4ad8d57975d638fd6bef40fe056de7b9f8c23321e51e935710936289",
  "last_activity": "<unstable: string>"
}
```
