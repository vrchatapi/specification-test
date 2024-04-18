# searchUsers

## Request
`get https://api.vrchat.cloud/api/1/users?search=tupper`

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
    "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
    "displayName": "tupper",
    "bio": "VRChat Head of Community․ （he‚ him）\n\nabove all else‚ be kind․",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/bioLinks
     */
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
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
    "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/",
    "statusDescription": "",
    "status": "ask me",
    "last_platform": "standalonewindows",
    "isFriend": false,
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
    "developerType": "none"
  },
  {
    "id": "usr_35e46e53-bffe-43ab-9e5e-b6dc622af5a3",
    "displayName": "Tupper f5a3",
    "currentAvatarImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/images/image_1200x900_2016-11-29_21-47-25.png",
    "currentAvatarThumbnailImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/thumbnails/194889991.thumbnail-200.png",
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
    "statusDescription": "",
    "status": "active",
    "last_platform": "2019.2.4-801-Release",
    "isFriend": false,
    "tags": [
      "show_social_rank"
    ],
    "developerType": "none"
  },
  {
    "id": "usr_fe50ccdf-5a2e-47a0-9c43-78f74b82d864",
    "displayName": "Tupper For Supper",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_ee0b44b5-2486-4c84-a3d9-a4fbd1a11527/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_ee0b44b5-2486-4c84-a3d9-a4fbd1a11527/1/256",
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
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [],
    "developerType": "none"
  },
  {
    "id": "usr_825fc9d2-9e59-4c31-96e2-0189e0819fbd",
    "displayName": "Tupper GAD-悪魔の主",
    "bio": "",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/3/bioLinks
     */
    "bioLinks": [],
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_d4dc524f-1f6e-4bdf-979f-bd621517178b/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_d4dc524f-1f6e-4bdf-979f-bd621517178b/1/256",
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
    "tags": [],
    "developerType": "none"
  },
  {
    "id": "usr_16a60dbf-bf40-4464-ae99-1c0d687f66b3",
    "displayName": "TupperDose",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_c6736504-6bc1-46dd-9bc4-e7135a9ffb1b/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_c6736504-6bc1-46dd-9bc4-e7135a9ffb1b/1/256",
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
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [
      "system_trust_basic",
      "system_avatar_access",
      "system_world_access"
    ],
    "developerType": "none"
  },
  {
    "id": "usr_d263a093-d612-4eae-b1f4-c90855956b7d",
    "displayName": "Tuppersgrandma",
    "currentAvatarImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/images/image_1200x900_2016-11-29_21-57-34.png",
    "currentAvatarThumbnailImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/thumbnails/2233882830.thumbnail-200.png",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/5/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [
      "show_social_rank"
    ],
    "developerType": "none"
  },
  {
    "id": "usr_3ab00d61-ff97-4e0b-adb7-90ba2097a8ae",
    "displayName": "tupper_vrc a8ae",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_2ef64281-6d1e-481f-9f47-9d945c644cd8/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_2ef64281-6d1e-481f-9f47-9d945c644cd8/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/6/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [],
    "developerType": "none"
  },
  {
    "id": "usr_be4b70c7-f434-4603-bb3b-09404c12a9c0",
    "displayName": "tupper1010 a9c0",
    "currentAvatarImageUrl": "https://assets.vrchat.com/system/defaultAvatar.png",
    "currentAvatarThumbnailImageUrl": "https://assets.vrchat.com/system/defaultAvatarThumbnail.png",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/7/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [],
    "developerType": "none"
  },
  {
    "id": "usr_a10f22e1-1cf4-4c06-a00b-09b609570528",
    "displayName": "tupper_test2_a",
    "bio": "",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/8/bioLinks
     */
    "bioLinks": [],
    "currentAvatarImageUrl": "https://assets.vrchat.com/system/defaultAvatar.png",
    "currentAvatarThumbnailImageUrl": "https://assets.vrchat.com/system/defaultAvatarThumbnail.png",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/8/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "android",
    "isFriend": false,
    "tags": [
      "show_social_rank"
    ],
    "developerType": "none"
  },
  {
    "id": "usr_32c94cc7-6681-4a1c-a94b-d055b1f63340",
    "displayName": "tupperware 3340",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_9efe5704-7689-4cc0-8693-314c3008d010/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_9efe5704-7689-4cc0-8693-314c3008d010/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/9/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    "statusDescription": "",
    "status": "active",
    "last_platform": "standalonewindows",
    "isFriend": false,
    "tags": [],
    "developerType": "none"
  }
]
```
