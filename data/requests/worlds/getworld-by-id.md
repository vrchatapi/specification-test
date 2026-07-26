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
      "instanceId": "90461~group(grp_0c3f5474-b14c-47de-ba7a-9e31ff00a9eb)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.98,
        "fr": 0.02
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "88371~group(grp_32d3e543-ad9a-4675-841e-74cb8e0945b9)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "98038~group(grp_8b418ca7-b425-489a-8310-36b61f73862e)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.93,
        "es": 0.07
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "66930~group(grp_12176e4f-adad-4553-a6c6-62d5357e5bfc)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "78309~group(grp_3733860d-34f2-43d1-8757-9c93676efe71)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "77758~group(grp_360b9424-61d4-4d57-9fe3-f15a5d3c4903)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "de": 0.13,
        "en": 0.75,
        "zh-CN": 0.13
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "48500~group(grp_7cd653d5-db3a-4266-89a7-e52f788772ee)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "34538~group(grp_07501080-2050-4d62-8a28-890c234b8d39)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "29505~group(grp_7bd11cf8-714d-4808-ab43-e523f5ade98a)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "20976~group(grp_d8de200b-37db-4ace-995f-b0c31d056064)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "99958~region(use)",
      "languageRatio": {
        "en": 0.95,
        "fr": 0.05
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "ef6c964e7c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "23286~region(eu)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "0e2009d15a~region(us)",
      "languageRatio": {
        "en": 0.96,
        "pt-BR": 0.04
      },
      "n_users": 17
    },
    {
      "gameServerVersion": null,
      "instanceId": "02871~region(use)",
      "languageRatio": {},
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
