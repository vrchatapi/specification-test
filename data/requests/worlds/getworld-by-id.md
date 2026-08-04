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
      "instanceId": "61122~group(grp_44b1280f-8713-4a66-be24-1ea4f09ceb9c)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 0.96,
        "ja": 0.04
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "46156~group(grp_5df65802-8bf9-43e6-b40c-7c26716b463d)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "74664~group(grp_8b418ca7-b425-489a-8310-36b61f73862e)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.95,
        "it": 0.05
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "00724~group(grp_5d9619a1-bae8-4688-a302-1f6fff11493a)~groupAccessType(public)~region(eu)",
      "languageRatio": {
        "en": 0.75,
        "it": 0.13,
        "pt-BR": 0.13
      },
      "n_users": 8
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "13944~group(grp_9619926e-adee-4518-8177-f8fcef4fafaf)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "27073~group(grp_4a9ac4af-9024-49a1-a343-c082f27a2395)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "88124~group(grp_45977322-e074-4b69-b18b-ffec56103e6f)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "61420~group(grp_5a2677de-8250-4812-b80b-73b92a86355b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "56399~group(grp_13151e97-cf82-46e3-a1d2-8938447528e2)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "98605~group(grp_e7f70c08-5ecd-4f0e-9df6-5957817746b0)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "337c5d1046~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "dd616b5f2e~region(us)",
      "languageRatio": {
        "en": 0.94,
        "ko": 0.03,
        "zh-CN": 0.03
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "36042~region(eu)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 13
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "a348d4d4a6~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 9
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "56df90e68b~region(us)",
      "languageRatio": {
        "en": 0.96,
        "fr": 0.02,
        "ru": 0.02
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "1de905c390~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "4d573e1f1d~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "6810efcea9~region(us)",
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
