# getCurrentUser after two-factor authentication

## Issues
Response schema mismatch:
Schema is not an object at #/properties/undefined.
## Request
`GET https://api.vrchat.cloud/api/1/auth/user`

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
  "acceptedPrivacyVersion": 1,
  "acceptedTOSVersion": 12,
  "accountDeletionDate": null,
  "accountDeletionLog": null,
  "activeFriends": [],
  "ageVerificationStatus": "hidden",
  "ageVerified": true,
  "allowAvatarCopying": true,
  "appleDetails": {},
  "appleId": "",
  "bannerColor": "c9c92c",
  "bannerType": "color",
  "completedTutorials": [
    "standalonewindows:steam:v1",
    "platform-agnostic:custom:onboarding-tutorial-world:v1"
  ],
  "currentAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarTags": "<unstable: array of strings>",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "date_joined": "2023-04-11",
  "developerType": "none",
  "discordDetails": {},
  "discordId": "",
  "displayName": "8cf3def6b8cea",
  "emailVerified": true,
  "fallbackAvatar": "avtr_07917a03-5e0b-48e9-b041-e94086bc658f",
  "friendGroupNames": [],
  "friendKey": "",
  "friends": [
    "usr_b52ef6f9-b8fd-44b6-923e-bebe184eef7a"
  ],
  "googleDetails": {},
  "googleId": "",
  "hasBirthday": true,
  "hasEmail": true,
  "hasLoggedInFromClient": false,
  "hasPendingEmail": false,
  "hideContentFilterSettings": false,
  "homeLocation": "",
  "iconFrame": "",
  "iconUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "id": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "isAdult": true,
  "isBoopingEnabled": true,
  "isEconomyCreator": false,
  "isFriend": false,
  "isTemporary": false,
  "last_activity": "<unstable: string>",
  "last_login": "<unstable: string>",
  "last_mobile": null,
  "last_platform": "standalonewindows",
  "nameplateEffect": "",
  "obfuscatedEmail": "<redacted>",
  "obfuscatedPendingEmail": "",
  "oculusId": "",
  "offlineFriends": [
    "usr_b52ef6f9-b8fd-44b6-923e-bebe184eef7a"
  ],
  "onlineFriends": [],
  "pastDisplayNames": [],
  "personalizationOptOut": false,
  "picoId": "",
  "platform_history": "<unstable: empty array>",
  "presence": {
    "groups": [],
    "id": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "instance": "offline",
    "instanceType": "",
    "platform": "",
    "status": "offline",
    "travelingToInstance": "offline",
    "travelingToWorld": "offline",
    "world": "offline"
  },
  "profileEffect": "",
  "pronouns": "",
  "pronounsHistory": [
    "they/them"
  ],
  "receiveMobileInvitations": true,
  "state": "offline",
  "status": "active",
  "statusDescription": "",
  "statusFirstTime": false,
  "statusHistory": [
    "9efde6f301ba",
    "646f24f4da80",
    "1f1c0703d723",
    "adfd5302c909",
    "7a68be9b362f",
    "48649c21f28d",
    "69bf93f51553",
    "79594157933e",
    "d782d5a15571",
    "c066c7ef36dd"
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
  "temporaryExpiryDate": null,
  "twitchDetails": {},
  "twitchId": "",
  "twoFactorAuthEnabled": true,
  "twoFactorAuthEnabledDate": "2023-04-11T22:29:32.524Z",
  "unsubscribe": true,
  "updated_at": "<unstable: string>",
  "userLanguage": null,
  "userLanguageCode": "en",
  "username": "8cf3def6b8cea",
  "usesGeneratedPassword": false,
  "viveId": ""
}
```
