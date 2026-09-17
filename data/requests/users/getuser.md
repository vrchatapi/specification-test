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
  "bannerType": "customImage",
  "bannerUrl": "https://api.vrchat.cloud/api/1/file/file_5c2c2065-bd85-412b-9cfe-f39ea522f846/1",
  "date_joined": "2017-07-12",
  "developerType": "none",
  "displayName": "tupper",
  "friendKey": "",
  "friendRequestStatus": "null",
  "iconFrame": "invt_32bf51bb-9bfe-4acd-ab51-9fa7efda9b3f",
  "iconUrl": "https://api.vrchat.cloud/api/1/image/file_b7566f5c-6e96-4394-a588-5199420e25e5/1/256",
  "id": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "instanceId": "offline",
  "isEconomyCreator": false,
  "isFriend": false,
  "last_activity": "",
  "last_login": "",
  "last_platform": "standalonewindows",
  "location": "offline",
  "nameplateEffect": "invt_1234263b-b2c6-42ed-8820-7709f5760a4c",
  "note": "system_haha_we_actually_ended_up_documenting_this_one_too",
  "platform": "offline",
  "profileEffect": "invt_5b3dcc96-cad2-4cf4-a2ab-ac3a7ff02547",
  "pronouns": "he/him",
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
  "worldId": "offline"
}
```
