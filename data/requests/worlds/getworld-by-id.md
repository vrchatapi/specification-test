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
      "instanceId": "94076~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "28762~group(grp_af0f32a0-925b-42f9-b3e0-d186039544a1)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "51370~group(grp_7b4f16ac-763e-49b9-b319-de7fc63ec88e)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "70344~group(grp_8e68fbbb-79e9-42f5-834d-068e84f0e7be)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 19
    },
    {
      "gameServerVersion": null,
      "instanceId": "11382~group(grp_6980ac5b-f20e-43fc-9893-8ede426f5a6e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "14736~group(grp_1693a6a7-2521-4441-9ea6-0350643e42a7)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "07130~group(grp_9dc0be54-1cff-4224-b866-de78ad13e1cc)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "38581~group(grp_9be84c43-0ded-44fb-bb75-1dd8e06c6368)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "07909~group(grp_6abdaef4-3528-42e9-a076-e037513dc833)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "06678~group(grp_9f390a73-8f42-46a9-b9c6-152304c57e0a)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "1d939085e5~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "c034f47541~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "368e196e21~region(us)",
      "languageRatio": {},
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "d9876bdca5~region(us)",
      "languageRatio": {},
      "n_users": 33
    },
    {
      "gameServerVersion": null,
      "instanceId": "5c2e128430~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "73ffb513cf~region(us)",
      "languageRatio": {},
      "n_users": 15
    },
    {
      "gameServerVersion": null,
      "instanceId": "7c94eda531~region(us)",
      "languageRatio": {},
      "n_users": 11
    },
    {
      "gameServerVersion": null,
      "instanceId": "f0b38a404c~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "d71107ab5f~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "73693~region(eu)",
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
