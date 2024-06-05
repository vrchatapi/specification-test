# getUser

## Issues
```
Response schema mismatch: Unexpected property at #/platform.
```

## Request
`get https://vrchat.com/api/1/users/usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`

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
| x-vrc-api-server | `prod-api-green-alphabeta-ugs` |
| x-vrc-api-version | `master-build-2024-06-04-the-endless-knickerscheesebread` |

```jsonc
{
  "allowAvatarCopying": false,
  "badges": [
    {
      "badgeDescription": "Supports VRChat through VRC+.",
      "badgeId": "bdg_754f9935-0f97-49d8-b857-95afb9b673fa",
      "badgeImageUrl": "https://assets.vrchat.com/badges/fa/bdgai_eff7def2-c264-4c0e-b462-6a9477ea4e6c.png",
      "badgeName": "Supporter",
      "showcased": false
    },
    {
      "badgeDescription": "Supported VRChat through VRC+ when it first launched.",
      "badgeId": "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8",
      "badgeImageUrl": "https://assets.vrchat.com/badges/a8/bdgai_28e70141-6859-450b-834b-30c15ecf3ff4.png",
      "badgeName": "Early Adopter",
      "showcased": false
    }
  ],
  "bio": "VRChat Head of Community․ （he‚ him）\n\nabove all else‚ be kind․",
  "bioLinks": [],
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarTags": [],
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "date_joined": "2017-07-12",
  "developerType": "none",
  "displayName": "tupper",
  "friendKey": "",
  "friendRequestStatus": "null",
  "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "instanceId": "offline",
  "isFriend": false,
  "last_activity": "",
  "last_login": "",
  "last_platform": "standalonewindows",
  "location": "offline",
  "note": "",
  /**
   * Unexpected property.
   *
   * @schema User
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/platform
   */
  "platform": "offline",
  "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/",
  "pronouns": "",
  "state": "offline",
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
  "userIcon": "https://api.vrchat.cloud/api/1/file/file_c0cdc832-861b-403a-804a-066c51baee7f/1/",
  "worldId": "offline"
}
```
