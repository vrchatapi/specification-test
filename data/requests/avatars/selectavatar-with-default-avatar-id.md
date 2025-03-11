# selectAvatar with default avatar id

## Request
`PUT https://api.vrchat.cloud/api/1/avatars/avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11/select`

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
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "acceptedPrivacyVersion": 1,
  "acceptedTOSVersion": 10,
  "accountDeletionDate": null,
  "accountDeletionLog": null,
  "ageVerificationStatus": "verified",
  "ageVerified": true,
  "allowAvatarCopying": true,
  "bio": "",
  "bioLinks": [],
  "currentAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "currentAvatarAssetUrl": "https://api.vrchat.cloud/api/1/file/file_2b1945d3-13b7-43e5-8853-ae69a9ba0e7e/1/file",
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarTags": "<unstable: array of strings>",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "date_joined": "2023-04-11",
  "developerType": "none",
  "displayName": "8cf3def6b8cea",
  "emailVerified": true,
  "fallbackAvatar": "avtr_07917a03-5e0b-48e9-b041-e94086bc658f",
  "friendGroupNames": [],
  "friendKey": "c61f12138fd21145f86eca5b51631932",
  "friends": [],
  "googleDetails": {},
  "googleId": "",
  "hasBirthday": true,
  "hasEmail": true,
  "hasLoggedInFromClient": false,
  "hasPendingEmail": false,
  "hideContentFilterSettings": false,
  "homeLocation": "",
  "id": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "isAdult": true,
  "isBoopingEnabled": true,
  "isFriend": false,
  "last_activity": "<unstable: string>",
  "last_login": "<unstable: string>",
  "last_mobile": null,
  "last_platform": "standalonewindows",
  "obfuscatedEmail": "<redacted>",
  "obfuscatedPendingEmail": "",
  "oculusId": "",
  "pastDisplayNames": [],
  "picoId": "",
  "platform_history": [],
  "profilePicOverride": "",
  "profilePicOverrideThumbnail": "",
  "pronouns": "",
  "receiveMobileInvitations": true,
  "state": "offline",
  "status": "active",
  "statusDescription": "",
  "statusFirstTime": true,
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
  "steamDetails": {},
  "steamId": "",
  "tags": [
    "system_no_captcha",
    "language_eng",
    "system_supporter",
    "system_avatar_access",
    "system_trust_basic",
    "system_world_access",
    "system_trust_known",
    "system_feedback_access"
  ],
  "twoFactorAuthEnabled": true,
  "twoFactorAuthEnabledDate": "2023-04-11T22:29:32.524Z",
  "unsubscribe": true,
  "updated_at": "<unstable: string>",
  "userIcon": "",
  "userLanguage": null,
  "userLanguageCode": "en",
  "username": "8cf3def6b8cea",
  "viveId": ""
}
```
