# getUser

## Request
`GET https://api.vrchat.cloud/api/1/users/usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469`

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

```jsonc
{
  "ageVerificationStatus": "18+",
  "ageVerified": true,
  "allowAvatarCopying": true,
  "badges": [
    {
      "badgeDescription": "Awarded for gifting VRC+ (1 Month)",
      "badgeId": "bdg_0b25e2ad-64ce-4e1b-bc61-7c57e45e1329",
      "badgeImageUrl": "https://assets.vrchat.com/badges/29/bdgai_7530140f-1374-472b-9540-5cfbcbd592c9.png",
      "badgeName": "Gift (1 Month)",
      "showcased": false
    },
    {
      "badgeDescription": "Granted to official VRChat Staff",
      "badgeId": "bdg_11f41e60-d24e-4358-b7ad-06e2b9d23569",
      "badgeImageUrl": "https://assets.vrchat.com/badges/69/bdgai_ad914c8b-8b9c-42c8-957a-40fde888009a.png",
      "badgeName": "VRChat Staff",
      "showcased": true
    },
    {
      "badgeDescription": "Supports VRChat through VRC+",
      "badgeId": "bdg_754f9935-0f97-49d8-b857-95afb9b673fa",
      "badgeImageUrl": "https://assets.vrchat.com/badges/fa/bdgai_8c9cf371-ffd2-4177-9894-1093e2e34bf7.png",
      "badgeName": "Supporter",
      "showcased": true
    },
    {
      "badgeDescription": "Supported VRChat through VRC+ when it first launched",
      "badgeId": "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8",
      "badgeImageUrl": "https://assets.vrchat.com/badges/a8/bdgai_c51b0dc0-56fb-4e20-bfd5-48db74e6a059.png",
      "badgeName": "Early Supporter",
      "showcased": true
    }
  ],
  "bio": "VRChat Head of Community․ （he‚ him）\n\nabove all else‚ be kind․",
  "bioLinks": [
    "https://vrchat.com/",
    "https://dtupper.com/",
    "https://bsky.app/profile/dtupper.com"
  ],
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
  "last_platform": "android",
  "location": "offline",
  "note": "system_haha_we_actually_ended_up_documenting_this_one_too",
  "platform": "offline",
  "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/",
  "profilePicOverrideThumbnail": "https://api.vrchat.cloud/api/1/image/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/512",
  "pronouns": "",
  "state": "offline",
  "status": "ask me",
  "statusDescription": "hewwo․",
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
