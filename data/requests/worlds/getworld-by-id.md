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
      "instanceId": "59145~group(grp_79e7d754-3f0e-4d70-a384-9513445a69f4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "47100~group(grp_2b7b3455-bc01-473b-8630-8a564e08a538)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "97681~group(grp_13fd0d1c-32b3-4643-96aa-a1282aeb5d96)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 0.96,
        "zh-CN": 0.04
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "55614~group(grp_b99d6124-75d2-45dd-9a7c-902dba957e82)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 12
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "31887~group(grp_e0448619-f26b-4810-85b7-bc13e8ef298e)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "61219~group(grp_34675706-7bd6-4ebe-bcc8-f1249102b1b3)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "15441~group(grp_014b115b-1078-4235-956a-d007e18ed224)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "92732~group(grp_c7b9f57f-51c2-480f-9d6e-516401764eea)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "83328~group(grp_056d0a79-98cd-43e0-96c1-99308f5e565e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "63937~group(grp_624b0a26-6522-44f0-8ad5-976f599a34b3)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "f87db20f75~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "e8a6d4e2f1~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "876cdafa1d~region(us)",
      "languageRatio": {
        "en": 0.97,
        "es": 0.03
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "ba5a657e0f~region(us)",
      "languageRatio": {
        "en": 0.96,
        "es": 0.04
      },
      "n_users": 17
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "635d99d6d6~region(us)",
      "languageRatio": {
        "en": 0.89,
        "zh-CN": 0.11
      },
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "a728988d31~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "f5a78c8a91~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "ecadd1fe5d~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "89eca5c730~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "6f2bbc40ad~region(us)",
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
