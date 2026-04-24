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
      "gameServerVersion": null,
      "instanceId": "37658~group(grp_42d4edc7-7b6b-4aed-93eb-d6970a5725ff)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "26130~group(grp_bd351f62-f58a-4b91-a5f3-c6c714d4f846)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "12954~group(grp_06a5225d-3cc5-4263-a400-ab05bbfe450e)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "81200~group(grp_1d418c88-81ee-443b-822e-42b8f414775b)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "50647~group(grp_d17abe2b-1980-46fe-98c4-6c5d5a1fe20c)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "77570~group(grp_7cd653d5-db3a-4266-89a7-e52f788772ee)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "63573~group(grp_e946e69b-fee9-4785-bdf3-3be9d9bba67b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "31928~group(grp_c555d53d-a4ba-4e22-ad42-882c5064a3ee)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "20394~group(grp_638f485d-f83d-4ae2-a559-63bcacb1faba)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "11228~group(grp_c4719ef3-a07f-4814-aec7-dd0aced89469)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "ea22580204~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "97312~region(use)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "7ec21c855d~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "8beaf7d2c0~region(us)",
      "languageRatio": {},
      "n_users": 20
    },
    {
      "gameServerVersion": null,
      "instanceId": "2f94414431~region(us)",
      "languageRatio": {},
      "n_users": 20
    },
    {
      "gameServerVersion": null,
      "instanceId": "d299efc5a8~region(us)",
      "languageRatio": {},
      "n_users": 19
    },
    {
      "gameServerVersion": null,
      "instanceId": "5ab4eab746~region(us)",
      "languageRatio": {},
      "n_users": 17
    },
    {
      "gameServerVersion": null,
      "instanceId": "dfeb52bed3~region(us)",
      "languageRatio": {},
      "n_users": 16
    },
    {
      "gameServerVersion": null,
      "instanceId": "b60828ea72~region(us)",
      "languageRatio": {},
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "32356~region(eu)",
      "languageRatio": {},
      "n_users": 3
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
