# selectFallbackAvatar with id

## Request
`put https://vrchat.com/api/1/avatars/avtr_07917a03-5e0b-48e9-b041-e94086bc658f/selectFallback`

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
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-wobbly-h7c` |
| x-vrc-api-version | `master-build-2024-06-17-jon-k-boattumbler` |

```jsonc
{
  "acceptedPrivacyVersion": 1,
  "acceptedTOSVersion": 9,
  "accountDeletionDate": null,
  "accountDeletionLog": null,
  "allowAvatarCopying": true,
  "bio": "",
  "bioLinks": [],
  "currentAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "currentAvatarAssetUrl": "https://api.vrchat.cloud/api/1/file/file_ddea1398-ae13-41c4-8c74-6d7479337d40/1/file",
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarTags": [
    "admin_content_reviewed",
    "admin_featured_legacy"
  ],
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
  "profilePicOverride": "",
  "profilePicOverrideThumbnail": "",
  "pronouns": "",
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
    "language_eng"
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
