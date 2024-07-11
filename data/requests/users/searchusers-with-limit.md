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
| x-vrc-api-server | `prod-api-green-erang-y2w` |
| x-vrc-api-version | `master-build-2024-07-10-hearts-v-lynxmusic` |

```jsonc
[
  {
    "bio": "おさかなのおさしみ\n\nむちゃ無言勢",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_d46dac4d-4b1a-48c6-9cd7-f53c0c3e01ef/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_d46dac4d-4b1a-48c6-9cd7-f53c0c3e01ef/1/256",
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
    "bio": "To see with eyes unclouded by hate․",
    "bioLinks": [
      "https://x.com/AzuTeaTime"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_8cdf4761-c735-48af-9b3e-0adb7fcb9c93/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_8cdf4761-c735-48af-9b3e-0adb7fcb9c93/1/256",
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
    "bio": "Then why are you here?",
    "bioLinks": [
      "https://twitter.com/Averiff1",
      "https://www.youtube.com/watch?v=69YVGbOSW7I"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "developerType": "none",
    "displayName": "Averiff",
    "id": "usr_8e04f52a-3b74-4609-ab3e-0b7bc683d5c3",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_09321baa-93d7-418c-ba6d-a21ed04ac27b/1/",
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
      "language_eng",
      "system_supporter"
    ],
    "userIcon": "https://api.vrchat.cloud/api/1/file/file_13c36669-a82d-404e-876f-4c8d85b15b11/1/"
  },
  {
    "bio": "About me˸\n- Owner of Isekai Realm online community\n- Bachelor Of Business Administration\n- VRChat Avatar ＆ World creator\n- Bilingual （English⁄Spanish）\n- Playing VRChat since 2017\n\nFeel free to join my discord server˸ https˸⁄⁄discord․gg⁄Rk2gvQtMYX",
    "bioLinks": [
      "https://patreon.com/vr_architect",
      "https://discord.gg/Rk2gvQtMYX"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_6d3a40f9-a917-4cf8-a6f6-395ef074ec2e/3/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_6d3a40f9-a917-4cf8-a6f6-395ef074ec2e/3/256",
    "developerType": "none",
    "displayName": "The Architect",
    "id": "usr_5892276b-e544-423e-9307-080b8cb9d87d",
    "isFriend": false,
    "last_platform": "android",
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
