# getCurrentUser after logout to log back in

## Issues
Response schema mismatch:
* Unexpected property at ``#/pronounsHistory``.
## Request
`GET https://api.vrchat.cloud/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| authorization | `Basic <redacted>` |
| cookie | `twoFactorAuth=<redacted>` |


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
| set-cookie | `<redacted>` |
| set-cookie | `<redacted>` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "acceptedPrivacyVersion": 1,
  "acceptedTOSVersion": 11,
  "accountDeletionDate": null,
  "accountDeletionLog": null,
  "activeFriends": [],
  "ageVerificationStatus": "verified",
  "ageVerified": true,
  "allowAvatarCopying": true,
  "badges": [
    {
      "assignedAt": "2024-07-21T22:28:04.790Z",
      "badgeDescription": "Supports VRChat through VRC+",
      "badgeId": "bdg_754f9935-0f97-49d8-b857-95afb9b673fa",
      "badgeImageUrl": "https://assets.vrchat.com/badges/fa/bdgai_583f6b13-91ab-4e1b-974e-ab91600b06cb.png",
      "badgeName": "Supporter",
      "hidden": false,
      "showcased": true,
      "updatedAt": "2024-07-21T22:28:04.790Z"
    },
    {
      "assignedAt": "2025-07-17T01:18:49.553Z",
      "badgeDescription": "Joined VRChat 2 years ago",
      "badgeId": "bdg_8f102075-4ac4-4367-aa46-f9c0ca90acac",
      "badgeImageUrl": "https://assets.vrchat.com/badges/ac/bdgai_e0d294a5-401d-4048-a569-4e3b92d2aed7.png",
      "badgeName": "2 Years",
      "hidden": false,
      "showcased": true,
      "updatedAt": "2025-07-17T01:18:49.553Z"
    },
    {
      "assignedAt": "2025-07-23T01:20:00.282Z",
      "badgeDescription": "Awarded for subscribing to VRC+ (1 Year)",
      "badgeId": "bdg_d394e05f-0d34-4c91-b003-253a910951fc",
      "badgeImageUrl": "https://assets.vrchat.com/badges/fc/bdgai_e96d4061-aa7e-407a-b120-475ba9ffde63.png",
      "badgeName": "VRC+ Subscriber (1 Year)",
      "hidden": false,
      "showcased": true,
      "updatedAt": "2025-07-23T01:20:00.282Z"
    }
  ],
  "bio": "",
  "bioLinks": [],
  "currentAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarTags": "<unstable: array of strings>",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "date_joined": "2023-04-11",
  "developerType": "none",
  "displayName": "8cf3def6b8cea",
  "emailVerified": true,
  "fallbackAvatar": "avtr_07917a03-5e0b-48e9-b041-e94086bc658f",
  "friendGroupNames": [],
  "friendKey": "0fa860aec70cc1e191e3c9427f6beed3",
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
  "offlineFriends": [
    "usr_b52ef6f9-b8fd-44b6-923e-bebe184eef7a"
  ],
  "onlineFriends": [],
  "pastDisplayNames": [],
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
  "profilePicOverride": "",
  "profilePicOverrideThumbnail": "",
  "pronouns": "",
  "pronounsHistory": [],
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
