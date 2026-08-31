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
  "recommendedCapacity": 40,
  "releaseStatus": "public",
  "slimInstances": [
    {
      "gameServerVersion": null,
      "instanceId": "68334~group(grp_0aaf00cb-e7d0-45a2-83c8-cc39f0e9a229)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "22670~group(grp_3fb094e2-4ce3-45eb-be73-ae6deff9afea)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "15695~group(grp_e277db23-67fe-4b71-9d6f-5eb7f7a32837)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 35
    },
    {
      "gameServerVersion": null,
      "instanceId": "48791~group(grp_3c5de1dc-bb77-4701-9f01-cb22cf07d7c0)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 21
    },
    {
      "gameServerVersion": null,
      "instanceId": "34494~group(grp_8e68fbbb-79e9-42f5-834d-068e84f0e7be)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 11
    },
    {
      "gameServerVersion": null,
      "instanceId": "19165~group(grp_9be84c43-0ded-44fb-bb75-1dd8e06c6368)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "81274~group(grp_cd531fff-4eda-4a3d-9c6a-4cd99412f217)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "37854~group(grp_73821299-38ed-4a14-b0c6-8f7acd1fc290)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "30605~group(grp_aa662323-22ec-4e7e-a364-331b022384c3)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "06590~group(grp_0c3f5474-b14c-47de-ba7a-9e31ff00a9eb)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "f60d76521f~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "414cbb6331~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "fe67a466f4~region(us)",
      "languageRatio": {},
      "n_users": 33
    },
    {
      "gameServerVersion": null,
      "instanceId": "c961131d84~region(us)",
      "languageRatio": {},
      "n_users": 31
    },
    {
      "gameServerVersion": null,
      "instanceId": "0978401166~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "ef94b3143a~region(us)",
      "languageRatio": {},
      "n_users": 19
    },
    {
      "gameServerVersion": null,
      "instanceId": "2a9f732dea~region(us)",
      "languageRatio": {},
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "36ba9a79c4~region(us)",
      "languageRatio": {},
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "08905~region(eu)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "179a1d067f~region(us)",
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
