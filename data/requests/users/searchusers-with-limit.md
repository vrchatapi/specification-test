# searchUsers with limit

## Issues
```
Response schema mismatch: Unexpected property at #/0/currentAvatarTags, Unexpected property at #/1/bioLinks, Unexpected property at #/1/currentAvatarTags, Unexpected property at #/2/bioLinks, Unexpected property at #/2/currentAvatarTags, Unexpected property at #/3/bioLinks, Unexpected property at #/3/currentAvatarTags, Unexpected property at #/4/bioLinks, Unexpected property at #/4/currentAvatarTags.
```

## Request
`get https://api.vrchat.cloud/api/1/users?search=a&n=5`

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
[
  {
    "id": "usr_0f972fff-f006-4e0a-9754-93dc836219d5",
    "displayName": "aphex505",
    "bio": "おさかなのおさしみ",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_b8e9a722-031d-4d2e-ae4d-73964c41e512/2/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_b8e9a722-031d-4d2e-ae4d-73964c41e512/2/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
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
    "developerType": "none"
  },
  {
    "id": "usr_711e0b7c-de98-41e8-89ce-e89e15d62e99",
    "displayName": "AzulieZeiro",
    "bio": "Trash princess\ngarbage furry\ncuddle puddle maker\nv-slut",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/bioLinks
     */
    "bioLinks": [
      "https://www.youtube.com/channel/UCP-9p0IAZWesPa0gokOSwLw",
      "https://www.deviantart.com/azuliezeiro"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_57046935-59e6-4f8e-ad42-2635b8049a4f/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_57046935-59e6-4f8e-ad42-2635b8049a4f/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/1/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "4‚000 year old loli",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
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
    "developerType": "none"
  },
  {
    "id": "usr_ce0d7b4c-8a81-4fdd-a638-3de81d8a7d0d",
    "displayName": "Aggrakia",
    "bio": "Age˸ 25\nGender˸ Female\nRelationship˸ taken by Spots‚ who is big ghey for Kyle Crane by the way\nJust your local spooky fentanyl fairy who is a goofy ah creature",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/bioLinks
     */
    "bioLinks": [
      "https://open.spotify.com/playlist/7vLvHm81WOQuSAeFAwE02Y?si=ccc47f1d28d04fba"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_b4c5f565-25e8-4c7e-9335-e56eae5be136/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_b4c5f565-25e8-4c7e-9335-e56eae5be136/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/2/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "Rp Spectating",
    "status": "ask me",
    "last_platform": "standalonewindows",
    "isFriend": false,
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
    "developerType": "none"
  },
  {
    "id": "usr_41cb0d01-de12-4f5e-9345-f4d8601dc4d4",
    "displayName": "Azuteatime",
    "bio": "To see with eyes unclouded by hate․",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/3/bioLinks
     */
    "bioLinks": [
      ""
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_4d7ffaa2-f772-486e-9f06-44658a077a03/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_4d7ffaa2-f772-486e-9f06-44658a077a03/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/3/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_trust_basic",
      "system_feedback_access",
      "system_trust_known",
      "system_trust_trusted",
      "system_trust_veteran",
      "show_social_rank",
      "system_early_adopter"
    ],
    "developerType": "none"
  },
  {
    "id": "usr_8e04f52a-3b74-4609-ab3e-0b7bc683d5c3",
    "displayName": "Averiff",
    "bio": "I want choo choo train set for Christmas but I might be on the bad list‚ we will see․",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/4/bioLinks
     */
    "bioLinks": [
      "https://www.guiltygear.com/ggst/en/",
      "https://twitter.com/Averiff1",
      "https://www.youtube.com/watch?v=HE5ld2PCWvw"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_a62a3e7b-1e0c-4f47-9804-6d99b591390f/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_a62a3e7b-1e0c-4f47-9804-6d99b591390f/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/4/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "Break out․",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
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
    "developerType": "none"
  }
]
```
