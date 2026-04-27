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
      "gameServerVersion": null,
      "instanceId": "41887~group(grp_5181dd36-63f8-4da8-888a-ca10e0662037)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "32452~group(grp_e5ec1ced-cf07-4623-9f76-2e4f6bbea1f4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "51593~group(grp_309a52bb-ecf2-44d1-9b56-734c5e620259)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "34206~group(grp_54edcc94-5424-48f4-ba28-27a2ee8f610b)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "55786~group(grp_9ebb5254-726e-49e2-9837-9c1141ceb2c3)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "03887~group(grp_9eec7640-2883-4073-b11b-7dd35bf412a4)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "93901~group(grp_8ef2d023-fd9e-4d1e-a6b7-4c96431777b4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "18879~group(grp_d4493d28-b746-427e-8d9d-a42e6984883c)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "14565~group(grp_7b4f16ac-763e-49b9-b319-de7fc63ec88e)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "01517~group(grp_7bd11cf8-714d-4808-ab43-e523f5ade98a)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "05fdc6b0bb~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "912e0c5d77~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "5653e17c46~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "02840~region(eu)",
      "languageRatio": {},
      "n_users": 14
    },
    {
      "gameServerVersion": null,
      "instanceId": "e1d32e37de~region(us)",
      "languageRatio": {},
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "5b27538489~region(us)",
      "languageRatio": {},
      "n_users": 9
    },
    {
      "gameServerVersion": null,
      "instanceId": "2582cd14df~region(us)",
      "languageRatio": {},
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "10058~region(eu)",
      "languageRatio": {},
      "n_users": 8
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
