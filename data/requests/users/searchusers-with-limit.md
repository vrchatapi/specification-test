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
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-babka-y6c` |
| x-vrc-api-version | `master-build-2024-06-07-mackenzie-u-letterwrath` |

```jsonc
[
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
    "bio": "Trash princess\ngarbage furry\ncuddle puddle maker\ncancer to the pure",
    "bioLinks": [
      "https://www.youtube.com/channel/UCP-9p0IAZWesPa0gokOSwLw",
      "https://www.deviantart.com/azuliezeiro"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_6808f1bb-7a0e-4410-9b27-5e538dcb9f7e/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_6808f1bb-7a0e-4410-9b27-5e538dcb9f7e/1/256",
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
    "bio": "To see with eyes unclouded by hate․",
    "bioLinks": [
      "https://x.com/AzuTeaTime"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_4d7ffaa2-f772-486e-9f06-44658a077a03/4/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_4d7ffaa2-f772-486e-9f06-44658a077a03/4/256",
    "developerType": "none",
    "displayName": "Azuteatime",
    "id": "usr_41cb0d01-de12-4f5e-9345-f4d8601dc4d4",
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
      "language_fra",
      "language_eng"
    ],
    "userIcon": ""
  },
  {
    "bio": "Age˸ 25\nGender˸ Female\nRelationship˸ taken by Spots‚ who is big ghey for Kyle Crane by the way\nJust your local spooky fentanyl fairy who is a goofy ah creature",
    "bioLinks": [
      "https://open.spotify.com/playlist/7vLvHm81WOQuSAeFAwE02Y?si=ccc47f1d28d04fba"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_f9ad434d-9998-4e7a-af2a-3677583a4c0e/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_f9ad434d-9998-4e7a-af2a-3677583a4c0e/1/256",
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
      "https://twitter.com/Averiff1",
      "https://www.youtube.com/watch?v=d4dVWC5b4jg"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_21cb3f54-5541-4d9a-aa30-d7685c111a80/5/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_21cb3f54-5541-4d9a-aa30-d7685c111a80/5/256",
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
  }
]
```
