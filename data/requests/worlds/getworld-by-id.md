# getWorld by id

## Issues
Response schema mismatch:
* undefined at ``#/instances/0``,
* undefined at ``#/instances/1``,
* undefined at ``#/instances/2``,
* undefined at ``#/instances/3``,
* undefined at ``#/instances/4``,
* undefined at ``#/instances/5``,
* undefined at ``#/instances/6``,
* undefined at ``#/instances/7``,
* undefined at ``#/instances/8``,
* undefined at ``#/instances/9``,
* undefined at ``#/instances/10``,
* undefined at ``#/instances/11``,
* undefined at ``#/instances/12``,
* Unexpected property at ``#/disabledPropAbilities``,
* Unexpected property at ``#/slimInstances``.
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
  "recommendedCapacity": 24,
  "releaseStatus": "public",
  "slimInstances": [
    {
      "gameServerVersion": 1626,
      "instanceId": "99590~group(grp_2a036b01-25e3-46fa-8fb5-e46ed7f8c1b3)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "23978~group(grp_13fd0d1c-32b3-4643-96aa-a1282aeb5d96)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 21
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "00680~group(grp_88acf625-65a5-4117-9f11-31036d1448ad)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "48180~group(grp_59e64d56-a13d-4bd2-90b3-6b4b10c5cc85)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 0.92,
        "es": 0.08
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "30316~group(grp_2d96f25e-ae7e-49cc-9d26-185b60cc8a48)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "96907~group(grp_8fa8addb-9a18-4da5-9ba2-19ae38b4c271)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "14972~group(grp_f7de8c5e-8b9e-4e7d-84af-078e4845290c)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "60319~group(grp_78015bac-8e78-4f54-82b2-30376e83d932)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "57899~group(grp_73821299-38ed-4a14-b0c6-8f7acd1fc290)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "18232~group(grp_f8fdb447-6f3c-4cc1-984d-b81bcd1a037c)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "ba2aa80cc3~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "b9f6f9b224~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "b3eedc92b7~region(us)",
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
