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
  "allowAvatarCopying": false,
  "badges": [
    {
      "badgeDescription": "Granted to members of the official VRChat Development Team",
      "badgeId": "bdg_11f41e60-d24e-4358-b7ad-06e2b9d23569",
      "badgeImageUrl": "https://assets.vrchat.com/badges/69/bdgai_ad914c8b-8b9c-42c8-957a-40fde888009a.png",
      "badgeName": "VRChat Developer",
      "showcased": true
    },
    {
      "badgeDescription": "Joined VRChat 8 years ago",
      "badgeId": "bdg_4708a50c-2a2f-4204-98be-f844b2f247eb",
      "badgeImageUrl": "https://assets.vrchat.com/badges/eb/bdgai_47e5526e-de82-46d7-9f85-323cc7ed1d4a.png",
      "badgeName": "8 Years",
      "showcased": false
    },
    {
      "badgeDescription": "Awarded for gifting VRC+ (10 Months)",
      "badgeId": "bdg_66096bcd-1c5f-477b-803a-82a2af7ab675",
      "badgeImageUrl": "https://assets.vrchat.com/badges/75/bdgai_8c3d61a5-feb9-4440-9760-ead1c9137077.png",
      "badgeName": "Gift (10 Months)",
      "showcased": false
    },
    {
      "badgeDescription": "Supports VRChat through VRC+",
      "badgeId": "bdg_754f9935-0f97-49d8-b857-95afb9b673fa",
      "badgeImageUrl": "https://assets.vrchat.com/badges/fa/bdgai_583f6b13-91ab-4e1b-974e-ab91600b06cb.png",
      "badgeName": "Supporter",
      "showcased": false
    },
    {
      "badgeDescription": "Awarded for subscribing to VRC+ (5 Years)",
      "badgeId": "bdg_8b44605b-d7dd-4254-8d22-ba2f84ed104e",
      "badgeImageUrl": "https://assets.vrchat.com/badges/4e/bdgai_4d00e67a-eb62-40df-8f34-9f580ae8725b.png",
      "badgeName": "VRC+ Subscriber (5 Years)",
      "showcased": false
    },
    {
      "badgeDescription": "Supported VRChat through VRC+ when it first launched",
      "badgeId": "bdg_a60e514a-8cb7-4702-8f24-2786992be1a8",
      "badgeImageUrl": "https://assets.vrchat.com/badges/a8/bdgai_108f0981-f29b-4563-8a3f-f9c0d49f8132.png",
      "badgeName": "Early Supporter",
      "showcased": false
    },
    {
      "badgeDescription": "Awarded to those who donated to the VRChat 2025 Pride Month Charity Event",
      "badgeId": "bdg_b8bef28d-277c-4d37-8168-f879362ba9cc",
      "badgeImageUrl": "https://assets.vrchat.com/badges/cc/bdgai_1ccb7ae1-d09e-4a3f-8cc4-e08c0cd48cd1.png",
      "badgeName": "Pride Supporter",
      "showcased": true
    },
    {
      "badgeDescription": "Granted for being a proud owner of a Bigscreen Beyond 2e: VRChat Edition",
      "badgeId": "bdg_fc0d7c16-1bf3-400f-acf1-333ecde7fd1a",
      "badgeImageUrl": "https://assets.vrchat.com/badges/1a/bdgai_88fb9053-f77e-48a2-be5d-f87131e054de.png",
      "badgeName": "Bigscreen Beyond 2e: VRChat Edition Owner",
      "showcased": true
    },
    {
      "badgeDescription": "Awarded to those who completed all Hero challenges on mobile",
      "badgeId": "bdg_ffd998b1-c454-4a90-a14b-5d19ccd04513",
      "badgeImageUrl": "https://assets.vrchat.com/badges/13/bdgai_a41c63c9-eb0b-42d6-8aaf-15fcb0da3714.png",
      "badgeName": "Mobile Hero",
      "showcased": false
    }
  ],
  "bio": "VRChat Head of Community․\n\nabove all else‚ be kind․\n\nI sometimes remove people I haven't seen in a while․ Feel free to ask to re-add next time we run into each otherǃ",
  "bioLinks": [
    "https://vrchat.com/",
    "https://bsky.app/profile/dtupper.com",
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
  "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "instanceId": "offline",
  "isFriend": false,
  "last_activity": "",
  "last_login": "",
  "last_platform": "standalonewindows",
  "location": "offline",
  "note": "system_haha_we_actually_ended_up_documenting_this_one_too",
  "platform": "offline",
  "profilePicOverride": "https://api.vrchat.cloud/api/1/file/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1",
  "profilePicOverrideThumbnail": "https://api.vrchat.cloud/api/1/image/file_4bd7c5fd-08f4-4fe6-9c91-6965f4654cd0/1/512",
  "pronouns": "he/him",
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
  "userIcon": "https://api.vrchat.cloud/api/1/file/file_b7566f5c-6e96-4394-a588-5199420e25e5/1/",
  "worldId": "offline"
}
```
