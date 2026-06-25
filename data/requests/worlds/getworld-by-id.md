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
* undefined at ``#/instances/20``,
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
      "instanceId": "72441~group(grp_ac93a375-4e37-4563-a92b-65de9d083924)~groupAccessType(public)~region(eu)",
      "languageRatio": {
        "en": 0.94,
        "ja": 0.03,
        "pl": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "47068~group(grp_317920b8-9575-4883-a59f-0717fd931d6e)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 0.97,
        "zh-CN": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "26789~group(grp_5e2e6267-1465-488f-b342-9efb0cc388a2)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.96,
        "es": 0.04
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "93990~group(grp_78bc1c07-2378-449e-981e-eb17dd8be4d3)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.93,
        "it": 0.07
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "45184~group(grp_925a5b1c-ea07-4a71-8de3-b54563eab733)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "51336~group(grp_ec4d938c-9655-48f1-ad93-29891e9ca2fc)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "79211~group(grp_0aaf00cb-e7d0-45a2-83c8-cc39f0e9a229)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "52661~group(grp_af316ea8-d1d1-46c9-adb4-b23812956c89)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "47100~group(grp_2b7b3455-bc01-473b-8630-8a564e08a538)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "17356~group(grp_25f1099e-3c27-4b56-9b00-af3fc6533403)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "cfa95b99bd~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "f5a78c8a91~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "3836bbdcaf~region(us)",
      "languageRatio": {
        "en": 0.96,
        "ru": 0.04
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "d454857f86~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "da8590bbf5~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 15
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "5f589753ab~region(us)",
      "languageRatio": {
        "en": 0.96,
        "es": 0.04
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "79b7e648f8~region(us)",
      "languageRatio": {
        "en": 0.94,
        "es": 0.06
      },
      "n_users": 10
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "97e5c5bb00~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "e302e939ad~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "849fae236c~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "4c5e7c3c63~region(us)",
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
