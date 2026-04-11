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
      "instanceId": "39081~group(grp_f6ae0b93-1c4d-4ee2-a06d-0439deaa99a3)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "de": 0.04,
        "en": 0.96
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "11791~group(grp_06c098c5-216f-4750-a9f1-80c2eb3b01e8)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "51707~group(grp_83715e5b-e444-418b-91a1-e480b8580524)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.94,
        "pl": 0.03
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "91922~group(grp_7a1fbf37-2927-468d-9dab-bb827b024837)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.67,
        "es": 0.33
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "12626~group(grp_da55eb20-60d4-4c60-a32e-22c2c5d02c56)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "93594~group(grp_a4bb21c5-1ce7-456a-ae1b-47c770ae8f51)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "66403~group(grp_f8e1b768-f596-414d-a353-9db58332e3c9)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "49582~group(grp_e49b2c54-d9c7-4e7e-b5ab-5b3ad128798f)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "14867~group(grp_3fb094e2-4ce3-45eb-be73-ae6deff9afea)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "09487~group(grp_a8f4840d-bed3-4c7e-8e83-37a9df68af70)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "66b63f06cd~region(us)",
      "languageRatio": {
        "en": 0.75,
        "ru": 0.25
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9771514ffc~region(us)",
      "languageRatio": {
        "en": 0.9,
        "es": 0.02,
        "pt-BR": 0.05,
        "ru": 0.02
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "47889~region(eu)",
      "languageRatio": {
        "en": 0.93,
        "it": 0.03,
        "pt-BR": 0.03
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "52fba5d2a9~region(us)",
      "languageRatio": {
        "en": 0.9,
        "pt-BR": 0.05,
        "ru": 0.05
      },
      "n_users": 14
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "45905~region(eu)",
      "languageRatio": {
        "en": 0.97,
        "fr": 0.03
      },
      "n_users": 13
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "f50b070333~region(us)",
      "languageRatio": {
        "en": 0.92,
        "pt-BR": 0.08
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "61bc12dffd~region(us)",
      "languageRatio": {
        "de": 0.14,
        "en": 0.57,
        "pl": 0.14,
        "pt-BR": 0.14
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "2eb75cfeb6~region(us)",
      "languageRatio": {
        "en": 1
      },
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
