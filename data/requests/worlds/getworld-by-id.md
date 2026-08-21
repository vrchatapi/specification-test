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
  "recommendedCapacity": 50,
  "releaseStatus": "public",
  "slimInstances": [
    {
      "gameServerVersion": null,
      "instanceId": "94825~group(grp_d2e49900-bd05-4f31-8edc-80ab8631b4f0)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 46
    },
    {
      "gameServerVersion": null,
      "instanceId": "36797~group(grp_f8bb92d0-0a63-4ad5-a993-9b03148c02e1)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 43
    },
    {
      "gameServerVersion": null,
      "instanceId": "09631~group(grp_e05e76aa-296d-45dc-8356-bbaf042f2ea5)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 28
    },
    {
      "gameServerVersion": null,
      "instanceId": "85891~group(grp_15dff3ef-986f-4b04-be1b-5361d0c3632b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "72705~group(grp_0473aea4-da4b-4e70-bf63-1a2875fe0b5c)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "67585~group(grp_95ac0ec1-d907-4a53-b1a8-43fef4ce1d14)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "76222~group(grp_cdde78a5-9d77-4662-bd22-98e9e354f040)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "63659~group(grp_ffe45290-b06b-4f8d-a3ba-91706832ae39)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "25501~group(grp_5a2677de-8250-4812-b80b-73b92a86355b)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "09135~group(grp_0aaf00cb-e7d0-45a2-83c8-cc39f0e9a229)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "17c83059b6~region(us)",
      "languageRatio": {
        "en": 0.88,
        "pl": 0.04,
        "pt-BR": 0.04,
        "zh-CN": 0.04
      },
      "n_users": 24
    },
    {
      "gameServerVersion": null,
      "instanceId": "e34cfbe612~region(us)",
      "languageRatio": {},
      "n_users": 49
    },
    {
      "gameServerVersion": null,
      "instanceId": "4903c09c3f~region(us)",
      "languageRatio": {},
      "n_users": 46
    },
    {
      "gameServerVersion": null,
      "instanceId": "24a42ce823~region(us)",
      "languageRatio": {},
      "n_users": 45
    },
    {
      "gameServerVersion": null,
      "instanceId": "47962b384d~region(us)",
      "languageRatio": {},
      "n_users": 25
    },
    {
      "gameServerVersion": null,
      "instanceId": "40509~region(eu)",
      "languageRatio": {},
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "1e8c9421fb~region(us)",
      "languageRatio": {},
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "372f1bd52f~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "88810b013b~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "64295~region(eu)",
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
