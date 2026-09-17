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
  "isHypeTrainEligible": false,
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
      "instanceId": "86344~group(grp_5f7fe209-c45c-4ae7-8457-bfbc6ae193bd)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "01518~group(grp_59e64d56-a13d-4bd2-90b3-6b4b10c5cc85)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "74051~group(grp_16b2041c-29e0-44de-98c1-a16c6cbc5a2d)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "92920~group(grp_3fb094e2-4ce3-45eb-be73-ae6deff9afea)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "04479~group(grp_75b043aa-b8bd-4bd2-9c5d-c47f7f0d28a4)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "85457~group(grp_b81dcdd7-0fc2-4655-a35a-7d1f7d870474)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "63182~group(grp_c3935df3-86bd-40e0-99ef-09e3c132a91e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "57314~group(grp_67634b03-3808-4feb-b4e6-0a138ddaabde)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "53152~group(grp_f82cd50d-ba5b-43bf-adbb-b86ad23b2d8d)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "36772~group(grp_85e5e21c-2f49-4c3f-9343-624958202795)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "9c7b47bd7e~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "1f351af494~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "82a3bb7465~region(us)",
      "languageRatio": {},
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "7a04017c62~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "1bc8fca3ac~region(us)",
      "languageRatio": {},
      "n_users": 1
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
