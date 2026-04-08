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
      "instanceId": "57188~group(grp_2d96f25e-ae7e-49cc-9d26-185b60cc8a48)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "78956~group(grp_9e6a9f7d-eb9b-45fb-96aa-2e47720d75a4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "57894~group(grp_b13175b5-d390-4102-b745-ae8d956772d9)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 9
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "24582~group(grp_ed1b399d-b6b0-4d6d-86ee-8347f6a025b1)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "10672~group(grp_7179a6f7-a980-4b83-9971-b147a5fc635b)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "85184~group(grp_f8bc97c7-5635-4403-9ec1-5bfff7fcf2a0)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "70892~group(grp_ea558d5c-235f-4a05-9c5f-bed7a3df66a0)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "27916~group(grp_7867ad99-779f-4236-a984-0654956e4daa)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "93855~group(grp_fc19c726-6752-4768-bddb-793331b35a98)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "17256~group(grp_f6ae0b93-1c4d-4ee2-a06d-0439deaa99a3)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "instanceId": "ce335b8312~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "83569~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "6cc9c19087~region(us)",
      "languageRatio": {
        "de": 0.05,
        "en": 0.95
      },
      "n_users": 22
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "2143486f25~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "1df31bf980~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 17
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "5649adffc5~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "93018~region(eu)",
      "languageRatio": {
        "en": 0.75,
        "pl": 0.25
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "2f7cd61240~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "fd46ead1fa~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9a9f855185~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "0595beb55d~region(us)",
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
