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
| x-vrc-api-server | `prod-api-green-carl-syw` |
| x-vrc-api-version | `master-build-2024-06-17-jon-k-boattumbler` |

```jsonc
[
  {
    "bio": "Trash princess\ngarbage furry\ncuddle puddle maker\ncancer to the pure",
    "bioLinks": [
      "https://www.youtube.com/channel/UCP-9p0IAZWesPa0gokOSwLw",
      "https://www.deviantart.com/azuliezeiro"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_93fa14b6-4ea2-48d2-a580-a3957474e2f9/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_93fa14b6-4ea2-48d2-a580-a3957474e2f9/1/256",
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
    "bio": "おさかなのおさしみ\n\nむちゃ無言勢",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_530e0901-a257-45ed-a5ce-071782483feb/3/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_530e0901-a257-45ed-a5ce-071782483feb/3/256",
    "developerType": "none",
    "displayName": "aphex503",
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
    "bio": "To see with eyes unclouded by hate․",
    "bioLinks": [
      "https://x.com/AzuTeaTime"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_5c970abe-8b6c-4d8f-89a6-678b21a082e3/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_5c970abe-8b6c-4d8f-89a6-678b21a082e3/1/256",
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
    "bio": "Controversial autistic world creator․",
    "bioLinks": [
      "https://twitter.com/Averiff1",
      "https://www.youtube.com/watch?v=2s9hiKGrBQc"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_289b1687-b8e2-496f-afa2-56abeda658fb/6/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_289b1687-b8e2-496f-afa2-56abeda658fb/6/256",
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
    "bio": "Age˸ 25\nGender˸ Female\nRelationship˸ taken by Spots‚ who is big ghey for Kyle Crane by the way\nJust your local spooky fentanyl fairy who is a goofy ah creature",
    "bioLinks": [
      "https://open.spotify.com/playlist/7vLvHm81WOQuSAeFAwE02Y?si=ccc47f1d28d04fba"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_688df7c6-6a8f-4024-9329-5455a1f6cacd/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_688df7c6-6a8f-4024-9329-5455a1f6cacd/1/256",
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
  }
]
```
