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
      "instanceId": "16006~group(grp_d2e49900-bd05-4f31-8edc-80ab8631b4f0)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "61525~group(grp_a7ceba4c-5670-4484-b372-4bd61aec89a2)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 18
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "99506~group(grp_15dff3ef-986f-4b04-be1b-5361d0c3632b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 0.85,
        "es": 0.15
      },
      "n_users": 12
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "76210~group(grp_8ad9a6d7-29d7-436a-9da9-fbc1ccfcedba)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "de": 0.08,
        "en": 0.92
      },
      "n_users": 12
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "11446~group(grp_205313f7-8e97-4a6b-87ad-c54e4e6bd143)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "70887~group(grp_ab2c7683-ec90-4b7f-a318-ce80732685ba)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "34176~group(grp_df4cd51b-9f65-4340-aa87-3a076a9247e0)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "23893~group(grp_7ba63cdb-99eb-4798-8cd2-5d594edf92ec)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "13791~group(grp_7e7acdae-0e13-4c84-9c97-981ff99d02f8)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "08388~group(grp_881cc8d0-bf53-4e0c-9105-20f68516bedb)~groupAccessType(public)~region(eu)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "e686f3b2b7~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "b20ed8280c~region(us)",
      "languageRatio": {
        "en": 0.93,
        "es": 0.04,
        "zh-CN": 0.04
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "06867~region(use)",
      "languageRatio": {
        "de": 0.02,
        "en": 0.98
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "3475553c7c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "b4c5d9d89d~region(us)",
      "languageRatio": {
        "en": 0.97,
        "zh-HK": 0.03
      },
      "n_users": 9
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "25344~region(eu)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
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
