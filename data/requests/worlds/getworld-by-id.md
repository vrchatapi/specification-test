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
      "instanceId": "78535~group(grp_09931251-d673-4bc4-87c1-ae2700663313)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "52121~group(grp_be2d2477-4b55-481e-bc8e-81e810583434)~groupAccessType(public)~region(eu)",
      "languageRatio": {
        "en": 0.96,
        "ja": 0.04
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "66265~group(grp_15ce5393-b370-4773-a7fd-d23bcb8bf0e7)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 18
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "15479~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "40349~group(grp_aef0490c-3389-4669-815b-2a3553765213)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "51999~group(grp_7b4f16ac-763e-49b9-b319-de7fc63ec88e)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "47445~group(grp_2a036b01-25e3-46fa-8fb5-e46ed7f8c1b3)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "28191~group(grp_e2b01047-dd54-4982-84f3-21619a40538c)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "17502~group(grp_078bd7ba-732b-4dd1-922e-6d8ca2cffc4b)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "10828~group(grp_166b8b16-1e87-4be2-ab19-3b347fa3b20c)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "38d6d8a604~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "26e54ae4cd~region(us)",
      "languageRatio": {
        "en": 0.97,
        "pt-BR": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "a1188c4a1d~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "712b994cf0~region(us)",
      "languageRatio": {
        "en": 0.96,
        "ko": 0.04
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "d6b4d6e9ec~region(us)",
      "languageRatio": {
        "en": 0.97,
        "ru": 0.03
      },
      "n_users": 17
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "1af360ace2~region(us)",
      "languageRatio": {
        "en": 0.97,
        "pt-BR": 0.03
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "f853f92fc9~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 9
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "a4dd168711~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "9a218588b6~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "65700d9041~region(us)",
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
