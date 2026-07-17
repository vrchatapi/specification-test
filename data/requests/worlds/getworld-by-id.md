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
      "instanceId": "26074~group(grp_2a036b01-25e3-46fa-8fb5-e46ed7f8c1b3)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 0.97,
        "ru": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "13876~group(grp_b99d6124-75d2-45dd-9a7c-902dba957e82)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 17
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "27703~group(grp_074f287e-5dae-40d7-adbe-6740a025230c)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "75748~group(grp_247138cd-3f01-4131-ab39-5212b4595eab)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 9
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "68739~group(grp_0c22a61c-1864-418a-b6f2-aa0388a64432)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.9,
        "pt-BR": 0.1
      },
      "n_users": 8
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "17803~group(grp_586a13ff-aace-4e9c-84cb-c15730c0d8c4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "86032~group(grp_c4ec9588-51c9-4d04-af0d-d0b2a5989333)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "31103~group(grp_1a8767e1-0e74-4b7f-8d00-cf573b787523)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "30398~group(grp_519213b3-0862-4177-9ec1-50893be91f46)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "03595~group(grp_e5ec1ced-cf07-4623-9f76-2e4f6bbea1f4)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "2da539e825~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "f5ba4c41f4~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "4724c64c3d~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 14
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "99ca072aff~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "3b3453e061~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "83f8ee19ae~region(us)",
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
