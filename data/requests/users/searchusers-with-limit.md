# searchUsers with limit

## Request
`get https://vrchat.com/api/1/users?search=a&n=5`

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
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-undies-svx` |
| x-vrc-api-version | `master-build-2024-05-30-farnsworth-y-goopfunk` |

```jsonc
[
  {
    "bio": "Trash princess\ngarbage furry\ncuddle puddle maker\ncancer to the pure",
    "bioLinks": [
      "https://www.youtube.com/channel/UCP-9p0IAZWesPa0gokOSwLw",
      "https://www.deviantart.com/azuliezeiro"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_741a2b95-414b-49a9-8935-a4621743a37f/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_741a2b95-414b-49a9-8935-a4621743a37f/1/256",
    "developerType": "none",
    "displayName": "AzulieZeiro",
    "id": "usr_711e0b7c-de98-41e8-89ce-e89e15d62e99",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "active",
    "statusDescription": "4‚000 year old loli",
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_trust_basic",
      "system_feedback_access",
      "system_trust_known",
      "system_trust_trusted",
      "system_trust_veteran",
      "show_social_rank",
      "language_eng",
      "system_early_adopter"
    ],
    "userIcon": ""
  },
  {
    "bio": "おさかなのおさしみ\n逆から読んでもみしさおのなかさお",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_4f830608-acac-4f1f-8979-61d15afd6bca/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_4f830608-acac-4f1f-8979-61d15afd6bca/1/256",
    "developerType": "none",
    "displayName": "aphex505",
    "id": "usr_0f972fff-f006-4e0a-9754-93dc836219d5",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "active",
    "statusDescription": "",
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_trust_basic",
      "system_feedback_access",
      "system_trust_known",
      "system_trust_trusted",
      "system_trust_veteran",
      "show_social_rank",
      "system_early_adopter",
      "language_jpn"
    ],
    "userIcon": ""
  },
  {
    "bio": "Age˸ 25\nGender˸ Female\nRelationship˸ taken by Spots‚ who is big ghey for Kyle Crane by the way\nJust your local spooky fentanyl fairy who is a goofy ah creature",
    "bioLinks": [
      "https://open.spotify.com/playlist/7vLvHm81WOQuSAeFAwE02Y?si=ccc47f1d28d04fba"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_822c67a5-ed88-4f82-b4c6-098b1051c54a/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_822c67a5-ed88-4f82-b4c6-098b1051c54a/1/256",
    "developerType": "none",
    "displayName": "Aggrakia",
    "id": "usr_ce0d7b4c-8a81-4fdd-a638-3de81d8a7d0d",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "Full Of Soap",
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_trust_basic",
      "system_trust_known",
      "system_feedback_access",
      "system_trust_trusted",
      "system_trust_veteran",
      "show_social_rank",
      "system_early_adopter",
      "language_eng"
    ],
    "userIcon": ""
  },
  {
    "bio": "Just trying to be myself․",
    "bioLinks": [
      "https://www.guiltygear.com/ggst/en/",
      "https://twitter.com/Averiff1",
      "https://www.youtube.com/watch?v=r0ycdb99ksk"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_9c64e666-0bb5-4654-93c1-cd15b565ff38/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_9c64e666-0bb5-4654-93c1-cd15b565ff38/1/256",
    "developerType": "none",
    "displayName": "Averiff",
    "id": "usr_8e04f52a-3b74-4609-ab3e-0b7bc683d5c3",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "active",
    "statusDescription": "",
    "tags": [
      "system_trust_basic",
      "system_avatar_access",
      "system_world_access",
      "system_trust_known",
      "system_feedback_access",
      "system_trust_trusted",
      "system_trust_veteran",
      "system_early_adopter",
      "language_eng"
    ],
    "userIcon": ""
  },
  {
    "bio": "Hi~\n\nI make stuff for a living․\nshe⁄they",
    "bioLinks": [
      "https://www.youtube.com/artsyvrc",
      "https://twitch.tv/artsyvrc",
      "https://twitter.com/ArtsyVRC"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "currentAvatarTags": [
      "content_sex"
    ],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "developerType": "none",
    "displayName": "Artsy",
    "id": "usr_f3667b2c-65d2-47d4-944e-633ff00cb134",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_ebdf194a-2bce-47e0-829c-242e95f68915/1/file",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "gyaru face tracking",
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_trust_basic",
      "system_feedback_access",
      "system_trust_known",
      "system_trust_trusted",
      "system_trust_veteran",
      "language_eng",
      "language_jpn",
      "language_nld",
      "system_supporter",
      "system_early_adopter"
    ],
    "userIcon": "https://api.vrchat.cloud/api/1/file/file_70add13c-2b69-4b0b-a978-e6f705707b90/1"
  }
]
```
