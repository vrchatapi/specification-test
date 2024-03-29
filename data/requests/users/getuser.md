# getUser

## Issues
```
Response schema mismatch: Unexpected property at #/badges, Unexpected property at #/currentAvatarTags.
```

## Request
`get https://api.vrchat.cloud/api/1/users/usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`

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
{
  "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "displayName": "tupper",
  "userIcon": "https://api.vrchat.cloud/api/1/file/file_25de9c05-1c13-4f43-8657-b82ec2389b33/1/",
  "bio": "VRChat Head of Community․ （he‚ him）\n\nabove all else‚ be kind․",
  "bioLinks": [
    "https://dtupper.com"
  ],
  "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/",
  "statusDescription": "hewwow",
  /**
   * Unexpected property.
   *
   * @schema User
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/badges
   */
  "badges": [],
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  /**
   * Unexpected property.
   *
   * @schema User
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/currentAvatarTags
   */
  "currentAvatarTags": [],
  "tags": [
    "admin_moderator",
    "admin_scripting_access",
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
  "developerType": "internal",
  "last_login": "",
  "last_platform": "standalonewindows",
  "allowAvatarCopying": false,
  "status": "ask me",
  "date_joined": "2017-07-12",
  "isFriend": false,
  "friendKey": "",
  "last_activity": "",
  "location": "offline",
  "worldId": "offline",
  "instanceId": "offline",
  "state": "offline",
  "friendRequestStatus": "null",
  "note": ""
}
```
