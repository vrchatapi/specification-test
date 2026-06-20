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
      "instanceId": "22219~group(grp_a0846410-96b7-43fd-bbde-4fe15fc5f951)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 0.96,
        "zh-HK": 0.04
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "28547~group(grp_014b115b-1078-4235-956a-d007e18ed224)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.98,
        "es": 0.02
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "08285~group(grp_2b7b3455-bc01-473b-8630-8a564e08a538)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "de": 0.05,
        "en": 0.95
      },
      "n_users": 18
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "96606~group(grp_88d165f8-4e90-430b-ac57-de74f6a8035b)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "60004~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "26935~group(grp_0aaf00cb-e7d0-45a2-83c8-cc39f0e9a229)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "51491~group(grp_70c5707d-ddd6-4be3-8d13-55ef489ce273)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "94571~group(grp_406be1a4-92ba-451d-854b-450a11336f1d)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "90272~group(grp_3ece74a9-f332-4e76-ab0b-4f9ba98f8f53)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "23112~group(grp_5073a047-cd47-4e6d-aaf6-8c0aa38302a9)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "31e57784c8~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "e833774f9d~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "2b0c7c6e2e~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "572bfe1858~region(us)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.95,
        "pt-BR": 0.03
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "03167fc747~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "50165f0dc7~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "392252f28b~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "930fbbbf27~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "9a077db627~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "5a583e4a9f~region(us)",
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
