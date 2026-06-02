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
      "instanceId": "39412~group(grp_8aa4d1bf-b442-423c-a398-8f11918322f4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 21
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "94951~group(grp_df4cd51b-9f65-4340-aa87-3a076a9247e0)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "35529~group(grp_9bcba685-c49a-4e63-89ea-a9bf3b6ca1d8)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 14
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "71720~group(grp_58442a02-08fe-4911-bbca-26263fe26633)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "49918~group(grp_f9b9e0ce-da97-4488-bd63-ba3a29644bc5)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "91133~group(grp_3262898a-5474-4a44-8835-76ee660db506)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "40349~group(grp_aef0490c-3389-4669-815b-2a3553765213)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "84558~group(grp_e5ec1ced-cf07-4623-9f76-2e4f6bbea1f4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "58230~group(grp_efbf07fa-3bf4-4c97-9eae-5eea786309a4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "49446~group(grp_5d5a5fa5-471e-4f38-87db-0455cef34c78)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "66b02bec80~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "d0b4e70cd4~region(us)",
      "languageRatio": {
        "en": 0.96,
        "es": 0.04
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "36773be6be~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "ac3969eb51~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "a0497472ea~region(us)",
      "languageRatio": {
        "en": 0.96,
        "zh-HK": 0.04
      },
      "n_users": 21
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9221506a3d~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 10
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "78376~region(eu)",
      "languageRatio": {
        "en": 0.83,
        "zh-CN": 0.17
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "e254b2a72a~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "947f5df899~region(us)",
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
