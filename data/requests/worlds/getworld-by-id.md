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
* undefined at ``#/instances/13``,
* undefined at ``#/instances/14``,
* undefined at ``#/instances/15``,
* undefined at ``#/instances/16``,
* undefined at ``#/instances/17``,
* undefined at ``#/instances/18``,
* undefined at ``#/instances/19``,
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
      "instanceId": "86525~group(grp_d20556bb-5c7d-4447-bb54-3252e4332107)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "61534~group(grp_eb8f5376-619f-41a1-a461-0ce4abea0f7b)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 0.96,
        "es": 0.04
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "25136~group(grp_1841cad7-5b9f-4f14-b08e-03b8d281ec85)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.9,
        "es": 0.03,
        "fr": 0.03,
        "pt-BR": 0.03
      },
      "n_users": 14
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "91145~group(grp_46d1265d-3bad-4048-a235-c8559919bdd2)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "49684~group(grp_12828803-d328-4462-ad3a-cbab33c0791e)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "80744~group(grp_da55eb20-60d4-4c60-a32e-22c2c5d02c56)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "98732~group(grp_fec4cb41-b04f-4a42-ac6d-c007a5665e79)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "35688~group(grp_3051d53c-cf8b-4ef3-86f6-d9f3be214ed7)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "25086~group(grp_3357c2ca-7346-4232-827d-e56a7f68c813)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "14819~group(grp_f24a3796-9eca-46e5-b1a9-ea30fc0c569e)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "instanceId": "02141~region(eu)",
      "languageRatio": {
        "de": 0.14,
        "en": 0.86
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "fc0935a7e9~region(us)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.94,
        "es": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "548e2bb29b~region(us)",
      "languageRatio": {
        "en": 0.87,
        "fr": 0.06,
        "uk": 0.03,
        "zh-CN": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "439204b41f~region(us)",
      "languageRatio": {
        "en": 0.98,
        "pl": 0.02
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "87667~region(eu)",
      "languageRatio": {
        "de": 0.05,
        "en": 0.89,
        "pl": 0.03,
        "ru": 0.03
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "19394~region(eu)",
      "languageRatio": {
        "de": 0.04,
        "en": 0.83,
        "es": 0.04,
        "pt-BR": 0.08
      },
      "n_users": 17
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "7e41a2a0c0~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "f9cb1e7f77~region(us)",
      "languageRatio": {
        "en": 0.75,
        "fr": 0.25
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "227a9b0558~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "ca20600f37~region(us)",
      "languageRatio": {
        "en": 1
      },
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
