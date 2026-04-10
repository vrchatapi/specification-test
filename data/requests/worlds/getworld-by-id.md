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
      "instanceId": "86061~group(grp_d2e49900-bd05-4f31-8edc-80ab8631b4f0)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "49012~group(grp_48261f16-c5b9-464b-b32d-92626c49ab3b)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.92,
        "pt-BR": 0.03,
        "ru": 0.05
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "39728~group(grp_584786c4-3ee2-4a1d-a8b7-0d5470dd719b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 0.97,
        "it": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "52341~group(grp_0e0ad6d6-681a-4e82-ae4d-10b2d094c8a4)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "74019~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "91946~group(grp_54edcc94-5424-48f4-ba28-27a2ee8f610b)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 15
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "70545~group(grp_68174bc0-3746-4dd2-8a98-66fc47ed4308)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "84019~group(grp_d308aa68-c105-490a-9363-aa0eb210903f)~groupAccessType(public)~ageGate~region(eu)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "36385~group(grp_efbf07fa-3bf4-4c97-9eae-5eea786309a4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "17581~group(grp_3903c84e-cdfb-419c-97bd-e961b705fb04)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "77778~region(eu)",
      "languageRatio": {
        "en": 0.96,
        "ru": 0.04
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "ceb359639c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "JOINPLS~region(eu)",
      "languageRatio": {
        "de": 0.09,
        "en": 0.85,
        "es": 0.06
      },
      "n_users": 21
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9ce3033009~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 21
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "110a1b78aa~region(us)",
      "languageRatio": {
        "de": 0.02,
        "en": 0.96,
        "ja": 0.02
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "d4c8d33117~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 17
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "4e44ad903d~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 9
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "a016a520b9~region(us)",
      "languageRatio": {
        "en": 0.9,
        "pl": 0.1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "cad783f866~region(us)",
      "languageRatio": {
        "de": 0.17,
        "en": 0.83
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "8d29daa4e8~region(us)",
      "languageRatio": {
        "de": 0.2,
        "en": 0.8
      },
      "n_users": 4
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
