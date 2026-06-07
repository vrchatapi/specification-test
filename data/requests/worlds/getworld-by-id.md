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
      "gameServerVersion": null,
      "instanceId": "27109~group(grp_adead477-60fd-4623-8e39-51c5447f2a93)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 21
    },
    {
      "gameServerVersion": null,
      "instanceId": "65448~group(grp_78bc1c07-2378-449e-981e-eb17dd8be4d3)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 18
    },
    {
      "gameServerVersion": null,
      "instanceId": "05215~group(grp_06c098c5-216f-4750-a9f1-80c2eb3b01e8)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "54950~group(grp_8e722ef2-8ddf-4054-9045-8f1b62b50790)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "64574~group(grp_205313f7-8e97-4a6b-87ad-c54e4e6bd143)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "52729~group(grp_ff2d9b3c-6d7c-461b-9542-772b7929e787)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "71747~group(grp_9de59233-5ed7-4d2f-be08-d2a24a3a459e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "22209~group(grp_de324cd7-690e-4d86-9c6f-6c30494f8e60)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "12701~group(grp_6deb8967-c03d-4f9d-8ff7-dfe18e855911)~groupAccessType(public)~region(eu)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "08339~group(grp_6c6d734a-0cbb-4a31-9705-d977cc77a7e7)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "7e3a3533b0~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 18
    },
    {
      "gameServerVersion": null,
      "instanceId": "6bf314201b~region(us)",
      "languageRatio": {},
      "n_users": 22
    },
    {
      "gameServerVersion": null,
      "instanceId": "7d510a4f31~region(us)",
      "languageRatio": {},
      "n_users": 17
    },
    {
      "gameServerVersion": null,
      "instanceId": "80008~region(use)",
      "languageRatio": {},
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "b4aba805fb~region(us)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "97ac15dc7d~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "8581bc3cec~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "27809~region(eu)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "d6f1ba7c16~region(us)",
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
