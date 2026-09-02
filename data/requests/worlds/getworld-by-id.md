# getWorld by id

## Request
`GET https://api.vrchat.cloud/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b`

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
  "authorId": "usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20",
  "authorName": "spookyghostboo",
  "capacity": 80,
  "created_at": "2019-05-01T01:19:43.477Z",
  "defaultContentSettings": {},
  "description": "The Black Cat is a simple mirror world․ Come hangout‚ meet new friends‚ eat pancakes‚ and stare at yourself․ Everyone is welcomed at The Black Catǃ",
  "disabledPropAbilities": [],
  "favorites": "<unstable: number>",
  "featured": false,
  "heat": "<unstable: number>",
  "id": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "imageUrl": "<unstable: string>",
  "instances": "<unstable: array of objects>",
  "labsPublicationDate": "2019-06-13T22:59:46.028Z",
  "name": "The Black Cat",
  "occupants": "<unstable: number>",
  "organization": "vrchat",
  "popularity": "<unstable: number>",
  "previewYoutubeId": null,
  "privateOccupants": "<unstable: number>",
  "publicOccupants": "<unstable: number>",
  "publicationDate": "2021-04-18T23:17:33.390Z",
  "recommendedCapacity": 40,
  "releaseStatus": "public",
  "slimInstances": [
    {
      "gameServerVersion": null,
      "instanceId": "73736~group(grp_73821299-38ed-4a14-b0c6-8f7acd1fc290)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "04858~group(grp_baf33546-d1ce-47ea-85ae-2e331f436ef8)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "38282~group(grp_e277db23-67fe-4b71-9d6f-5eb7f7a32837)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 31
    },
    {
      "gameServerVersion": null,
      "instanceId": "70526~group(grp_c4381a3b-ea52-48f7-afe2-ec91c3a61e3f)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "27273~group(grp_e34b5711-5af2-475f-85e1-87eaabc00576)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "77255~group(grp_8a47f449-c16f-40f0-bce2-2f16047d168b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "08294~group(grp_af0f32a0-925b-42f9-b3e0-d186039544a1)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "67494~group(grp_0c3f5474-b14c-47de-ba7a-9e31ff00a9eb)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "37854~group(grp_73821299-38ed-4a14-b0c6-8f7acd1fc290)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "81622~group(grp_5115f092-6df7-4e63-9531-31c508edeb00)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "23d2e58a86~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "94677~region(use)",
      "languageRatio": {},
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "30f471e203~region(us)",
      "languageRatio": {},
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "3103490062~region(us)",
      "languageRatio": {},
      "n_users": 28
    },
    {
      "gameServerVersion": null,
      "instanceId": "242e6df293~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "a6d8615457~region(us)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "67424~region(use)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "b2d4949adb~region(us)",
      "languageRatio": {},
      "n_users": 2
    }
  ],
  "storeId": "esto_751c416f-350b-4876-b518-7ba0dd8e9746",
  "tags": [
    "author_tag_bar",
    "author_tag_quest",
    "author_tag_hangout",
    "author_tag_chill",
    "author_tag_lounge",
    "admin_approved",
    "system_approved",
    "system_monetized_world",
    "admin_filter_UrlLauncher",
    "admin_vrrat_community_takeover"
  ],
  "thumbnailImageUrl": "<unstable: string>",
  "udonProducts": "<unstable: array of strings>",
  "unityPackages": "<unstable: array of objects>",
  "updated_at": "<unstable: string>",
  "urlList": [],
  "version": "<unstable: number>",
  "visits": "<unstable: number>"
}
```
