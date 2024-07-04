# searchUsers

## Request
`get https://vrchat.com/api/1/users?search=tupper`

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
| x-vrc-api-server | `prod-api-blue-allison-zsc` |
| x-vrc-api-version | `master-build-2024-06-27-barry-jerkcraveable` |

```jsonc
[
  {
    "bio": "VRChat Head of Community․ （he‚ him）\n\nabove all else‚ be kind․",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "developerType": "none",
    "displayName": "tupper",
    "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
    "isFriend": false,
    "last_platform": "android",
    "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "",
    "tags": [
      "system_trust_trusted",
      "system_world_access",
      "system_trust_known",
      "system_trust_veteran",
      "system_avatar_access",
      "system_feedback_access",
      "system_trust_basic",
      "language_eng",
      "system_early_adopter",
      "system_notamod",
      "system_no_seriously_im_not_a_mod_how_many_times_do_i_have_to_tell_people",
      "system_the_tag_is_just_named_that",
      "system_haha_you_have_to_document_this_one_too",
      "system_cute_robot",
      "system_supporter"
    ],
    "userIcon": "https://api.vrchat.cloud/api/1/file/file_9a353841-493c-45b4-ae15-9ee872fb3f47/1/"
  },
  {
    "bio": "joined vrchat 03⁄01⁄2016",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_10ca59bb-6b08-461e-934e-b0f3652fff7a/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_10ca59bb-6b08-461e-934e-b0f3652fff7a/1/256",
    "developerType": "none",
    "displayName": "༒TUPPER ༒",
    "id": "usr_fc4c2896-e23f-4551-aca6-3d3a9952fbf7",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "im the biggest bird․",
    "tags": [
      "system_avatar_access",
      "system_world_access",
      "system_trust_basic",
      "system_feedback_access",
      "system_trust_known",
      "system_trust_trusted",
      "system_trust_veteran"
    ],
    "userIcon": ""
  },
  {
    "bio": "i want to be a rockstar",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_53e05dca-62ed-415c-bd1f-e827b9539b6f/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_53e05dca-62ed-415c-bd1f-e827b9539b6f/1/256",
    "developerType": "none",
    "displayName": "﮴tupper",
    "id": "usr_9788b122-fb4a-4bd3-baef-44ffef048c26",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "active",
    "statusDescription": "",
    "tags": [
      "system_world_access",
      "system_trust_basic",
      "system_avatar_access",
      "language_nor"
    ],
    "userIcon": ""
  },
  {
    "bio": "20 years old chill and ask to give cuddle",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_41536f2d-968c-4de9-bd49-7c095f16c71b/2/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_41536f2d-968c-4de9-bd49-7c095f16c71b/2/256",
    "developerType": "none",
    "displayName": "༒TUPPER༒",
    "id": "usr_d1562cae-2cd6-4a35-80c9-0ea646a55479",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "",
    "tags": [
      "system_trust_basic",
      "system_world_access",
      "system_avatar_access"
    ],
    "userIcon": ""
  },
  {
    "bio": "joined vrchat 03⁄01⁄2016",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "currentAvatarTags": [
      "admin_content_reviewed",
      "admin_featured_legacy"
    ],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "developerType": "none",
    "displayName": "༒ Tupper ༒",
    "id": "usr_4e37c7c1-c88d-4e43-b7dd-5b9d7102cf82",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "ask me",
    "statusDescription": "slowly fading away",
    "tags": [],
    "userIcon": ""
  },
  {
    "bio": "i am the guy who visits YTS and plays videos on the Video Player‚ \n\n My name is VRC3 666 and Im New to VRchat - making new friends \n\n i watch movies and Videos in Public Worlds \n\n i work for the ROBLOX corporation‚ \n\n i work for Roblox （ROBLOX admin）\n\n Proud Quest User",
    "bioLinks": [
      "https://vrchat.com/home/group/grp_25d2df0f-8629-41fc-b245-6fd963676372"
    ],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_e5fbc48f-9c65-4674-814b-5cf2685fabc8/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_e5fbc48f-9c65-4674-814b-5cf2685fabc8/1/256",
    "developerType": "none",
    "displayName": "Tupper VRC3",
    "id": "usr_ff9d841c-64ba-49e2-adae-c7ce89bd0e61",
    "isFriend": false,
    "last_platform": "android",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "join me",
    "statusDescription": "VRC",
    "tags": [
      "language_eng",
      "system_world_access",
      "system_trust_basic",
      "system_avatar_access",
      "system_feedback_access",
      "system_trust_known"
    ],
    "userIcon": ""
  },
  {
    "currentAvatarImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/images/image_1200x900_2016-11-29_21-47-25.png",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/thumbnails/194889991.thumbnail-200.png",
    "developerType": "none",
    "displayName": "Tupper f5a3",
    "id": "usr_35e46e53-bffe-43ab-9e5e-b6dc622af5a3",
    "isFriend": false,
    "last_platform": "2019.2.4-801-Release",
    "profilePicOverride": "",
    "status": "active",
    "statusDescription": "",
    "tags": [
      "show_social_rank"
    ],
    "userIcon": ""
  },
  {
    "bio": "",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_7adbd18b-33eb-491f-bda6-f5a3b5b6ed8c/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_7adbd18b-33eb-491f-bda6-f5a3b5b6ed8c/1/256",
    "developerType": "none",
    "displayName": "Tupper kid",
    "id": "usr_cf6bf18f-4191-4e48-9e90-24f158de0092",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "pronouns": "",
    "status": "active",
    "statusDescription": "",
    "tags": [],
    "userIcon": ""
  },
  {
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_ee0b44b5-2486-4c84-a3d9-a4fbd1a11527/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_ee0b44b5-2486-4c84-a3d9-a4fbd1a11527/1/256",
    "developerType": "none",
    "displayName": "Tupper For Supper",
    "id": "usr_fe50ccdf-5a2e-47a0-9c43-78f74b82d864",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "status": "active",
    "statusDescription": "",
    "tags": [],
    "userIcon": ""
  },
  {
    "bio": "",
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_d4dc524f-1f6e-4bdf-979f-bd621517178b/1/file",
    "currentAvatarTags": [],
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_d4dc524f-1f6e-4bdf-979f-bd621517178b/1/256",
    "developerType": "none",
    "displayName": "Tupper GAD-悪魔の主",
    "id": "usr_825fc9d2-9e59-4c31-96e2-0189e0819fbd",
    "isFriend": false,
    "last_platform": "standalonewindows",
    "profilePicOverride": "",
    "status": "active",
    "statusDescription": "",
    "tags": [],
    "userIcon": ""
  }
]
```
