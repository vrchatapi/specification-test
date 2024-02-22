# getCurrentUser after two-factor authentication

## Issues
```
Response schema mismatch: Unexpected property at #/googleDetails.
```

## Request
`get https://api.vrchat.cloud/api/1/auth/user`

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

```jsonc
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
  "hideContentFilterSettings": false,
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
  "friends": [
    "usr_63a9376e-d000-4357-9a76-3958b69477b0"
  ],
  "friendGroupNames": [],
  "userLanguage": null,
  "userLanguageCode": "en",
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_1ab634a7-2cb1-4772-9baa-325080941bf8/1/file",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_1ab634a7-2cb1-4772-9baa-325080941bf8/1/256",
  "currentAvatarTags": [
    "admin_quest_fallback_extended",
    "admin_featured_quest",
    "system_jam_8a3721bc-9c06-4da8-b5c8-9a0aaa669930",
    "author_quest_fallback"
  ],
  "currentAvatar": "avtr_047c01c7-e958-4e59-8099-86316479fd9a",
  "currentAvatarAssetUrl": "https://api.vrchat.cloud/api/1/file/file_5b112dca-c8fc-428e-bd59-60b2b3970b28/1/file",
  "fallbackAvatar": "avtr_07917a03-5e0b-48e9-b041-e94086bc658f",
  "accountDeletionDate": null,
  "accountDeletionLog": null,
  "acceptedTOSVersion": 9,
  "acceptedPrivacyVersion": 1,
  "steamId": "",
  "steamDetails": {},
  "googleId": "",
  /**
   * Unexpected property.
   *
   * @schema CurrentUser
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/googleDetails
   */
  "googleDetails": {},
  "oculusId": "",
  "picoId": "",
  "viveId": "",
  "hasLoggedInFromClient": false,
  "homeLocation": "",
  "twoFactorAuthEnabled": true,
  "twoFactorAuthEnabledDate": "2023-04-11T22:29:32.524Z",
  "updated_at": "<unstable: string>",
  "state": "offline",
  "tags": [
    "system_no_captcha",
    "language_eng"
  ],
  "developerType": "none",
  "last_login": "<unstable: string>",
  "last_platform": "standalonewindows",
  "allowAvatarCopying": true,
  "status": "active",
  "date_joined": "2023-04-11",
  "isFriend": false,
  "friendKey": "e0dbcabbb69205f0c1d01a7cefabd01a",
  "last_activity": "<unstable: string>",
  "onlineFriends": [
    "usr_63a9376e-d000-4357-9a76-3958b69477b0"
  ],
  "activeFriends": [],
  "presence": {
    "id": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "platform": "",
    "status": "offline",
    "world": "offline",
    "instance": "offline",
    "instanceType": "",
    "travelingToWorld": "offline",
    "travelingToInstance": "offline",
    "groups": []
  },
  "offlineFriends": []
}
```
