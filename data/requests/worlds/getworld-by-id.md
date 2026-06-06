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
      "instanceId": "92831~group(grp_58086d5c-57ad-4bc6-841a-29d38fa55256)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 0.93,
        "fr": 0.07
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "43976~group(grp_4849de38-1a22-41ae-98dd-f6dc010f5bfe)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.98,
        "pt-BR": 0.02
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "32686~group(grp_b2d04699-948f-4dbb-90a5-9358b77da7fb)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.97
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "21993~group(grp_17c132b5-f48c-48dc-839c-32cbb3167ded)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "83723~group(grp_88d165f8-4e90-430b-ac57-de74f6a8035b)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "09787~group(grp_272ae03b-a4ce-4c95-a692-6c621c88428f)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "47967~group(grp_7d100b9e-04e0-4e3d-8bcf-ee3550c11d95)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "20444~group(grp_3262898a-5474-4a44-8835-76ee660db506)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "18903~group(grp_424a83ab-ab37-4db1-945f-320f859db288)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "16035~group(grp_d664818f-82e5-4cca-92ab-de4ae14fa288)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "cb12f01a74~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "be661aa5d1~region(us)",
      "languageRatio": {
        "en": 0.95,
        "es": 0.05
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9221506a3d~region(us)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.95,
        "pt-BR": 0.02
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "27809~region(eu)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.87,
        "it": 0.03,
        "pt-BR": 0.06
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9452ab7f2a~region(us)",
      "languageRatio": {
        "en": 0.97,
        "pt-BR": 0.03
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "bf9b3bf40c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "202913bc43~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 14
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "1ebfa1b2f5~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 14
    },
    {
      "gameServerVersion": null,
      "instanceId": "8a182f4df4~region(us)",
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
