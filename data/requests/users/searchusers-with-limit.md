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
| x-vrc-api-server | `prod-api-blue-tifa-r5g` |
| x-vrc-api-version | `master-build-2024-06-01-beverly-fishgubbin` |

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
    "bio": "Age˸ 25\nGender˸ Female\nRelationship˸ taken by Spots‚ who is big ghey for Kyle Crane by the way\nJust your local spooky fentanyl fairy who is a goofy ah creature",
    "bioLinks": [
      "https://open.spotify.com/playlist/7vLvHm81WOQuSAeFAwE02Y?si=ccc47f1d28d04fba"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_cea35b7b-e6e2-4cad-b4c3-b674d1d7edfe/3/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_cea35b7b-e6e2-4cad-b4c3-b674d1d7edfe/3/256",
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
    "bio": "おさかなのおさしみ\n\nむちゃ無言勢",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_de22ae4f-cce0-4ca0-abb5-dde9f463246a/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_de22ae4f-cce0-4ca0-abb5-dde9f463246a/1/256",
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
    "bio": "Just trying to be myself․",
    "bioLinks": [
      "https://www.guiltygear.com/ggst/en/",
      "https://twitter.com/Averiff1",
      "https://www.youtube.com/watch?v=r0ycdb99ksk"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_a62a3e7b-1e0c-4f47-9804-6d99b591390f/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_a62a3e7b-1e0c-4f47-9804-6d99b591390f/1/256",
    "developerType": "none",
    "displayName": "Averiff",
    "id": "usr_8e04f52a-3b74-4609-ab3e-0b7bc683d5c3",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "ask me",
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
    "bio": "About me˸\n- Owner of Isekai Realm online community\n- Bachelor Of Business Administration\n- VRChat Avatar ＆ World creator\n- Bilingual （English⁄Spanish）\n- Playing VRChat since 2017\n\nFeel free to join my discord server˸ https˸⁄⁄discord․gg⁄Rk2gvQtMYX",
    "bioLinks": [
      "https://patreon.com/vr_architect",
      "https://discord.gg/Rk2gvQtMYX"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_1ea264ed-7b00-491b-8536-794f5f7c73b4/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_1ea264ed-7b00-491b-8536-794f5f7c73b4/1/256",
    "developerType": "none",
    "displayName": "The Architect",
    "id": "usr_5892276b-e544-423e-9307-080b8cb9d87d",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "",
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_feedback_access",
      "system_trust_basic",
      "system_trust_known",
      "show_social_rank",
      "system_trust_trusted",
      "system_trust_veteran",
      "language_eng",
      "language_spa",
      "system_early_adopter"
    ],
    "userIcon": ""
  }
]
```
