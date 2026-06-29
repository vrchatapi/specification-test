# getUser

## Issues
Response schema mismatch:
* Unexpected property at ``#/badges/1/isQuantifiable``,
* Unexpected property at ``#/bannerType``,
* Unexpected property at ``#/bannerUrl``,
* Unexpected property at ``#/iconFrame``,
* Unexpected property at ``#/iconUrl``,
* Unexpected property at ``#/isEconomyCreator``,
* Unexpected property at ``#/nameplateEffect``,
* Unexpected property at ``#/profileEffect``.
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
      "badgeDescription": "Joined VRChat 8 years ago",
      "badgeId": "bdg_4708a50c-2a2f-4204-98be-f844b2f247eb",
      "badgeImageUrl": "https://assets.vrchat.com/badges/eb/bdgai_47e5526e-de82-46d7-9f85-323cc7ed1d4a.png",
      "badgeName": "8 Years",
      "showcased": true
    },
    {
      "badgeDescription": "Awarded to those who donated to the VRChat 2026 Pride Month Charity Event",
      "badgeId": "bdg_4dfa4d6b-a164-4f20-ab60-e7ee4d4d43dd",
      "badgeImageUrl": "https://assets.vrchat.com/badges/dd/bdgai_85661807-9f97-4703-a735-fc5a1ccc1518.png",
      "badgeName": "Pride Supporter 2026",
      "isQuantifiable": false,
      "showcased": true
    },
    {
      "badgeDescription": "Awarded for subscribing to VRC+ (5 Years)",
      "badgeId": "bdg_8b44605b-d7dd-4254-8d22-ba2f84ed104e",
      "badgeImageUrl": "https://assets.vrchat.com/badges/4e/bdgai_4d00e67a-eb62-40df-8f34-9f580ae8725b.png",
      "badgeName": "VRC+ Subscriber (5 Years)",
      "showcased": false
    },
    {
      "badgeDescription": "Awarded to those who donated to the VRChat 2025 Pride Month Charity Event",
      "badgeId": "bdg_b8bef28d-277c-4d37-8168-f879362ba9cc",
      "badgeImageUrl": "https://assets.vrchat.com/badges/cc/bdgai_1ccb7ae1-d09e-4a3f-8cc4-e08c0cd48cd1.png",
      "badgeName": "Pride Supporter",
      "showcased": false
    }
  ],
  "bannerType": "customImage",
  "bannerUrl": "https://api.vrchat.cloud/api/1/file/file_5c2c2065-bd85-412b-9cfe-f39ea522f846/1",
  "bio": "above all else‚ be kind․",
  "bioLinks": [
    "https://dtupper.com/"
  ],
  "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
  "currentAvatarTags": [],
  "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
  "date_joined": "2017-07-12",
  "developerType": "none",
  "displayName": "tupper",
  "friendKey": "",
  "friendRequestStatus": "null",
  "iconFrame": "",
  "iconUrl": "https://api.vrchat.cloud/api/1/image/file_b7566f5c-6e96-4394-a588-5199420e25e5/1/256",
  "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "instanceId": "offline",
  "isEconomyCreator": false,
  "isFriend": false,
  "last_activity": "",
  "last_login": "",
  "last_platform": "android",
  "location": "offline",
  "nameplateEffect": "",
  "note": "system_haha_we_actually_ended_up_documenting_this_one_too",
  "platform": "offline",
  "profileEffect": "",
  "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4fcf103d-a268-4cd9-8f81-a5894c0a590f/1",
  "profilePicOverrideThumbnail": "https://api.vrchat.cloud/api/1/image/file_4fcf103d-a268-4cd9-8f81-a5894c0a590f/1/512",
  "pronouns": "he/him",
  "state": "offline",
  "status": "offline",
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
  "userIcon": "https://api.vrchat.cloud/api/1/file/file_b7566f5c-6e96-4394-a588-5199420e25e5/1/",
  "worldId": "offline"
}
```
