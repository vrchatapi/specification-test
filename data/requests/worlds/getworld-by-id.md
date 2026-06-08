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
      "instanceId": "02968~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 17
    },
    {
      "gameServerVersion": null,
      "instanceId": "61715~group(grp_5dd1f90a-c6fa-4793-8a7e-cb824be8bd4c)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 14
    },
    {
      "gameServerVersion": null,
      "instanceId": "29864~group(grp_2d96f25e-ae7e-49cc-9d26-185b60cc8a48)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 14
    },
    {
      "gameServerVersion": null,
      "instanceId": "09034~group(grp_317920b8-9575-4883-a59f-0717fd931d6e)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "56776~group(grp_eafd6055-d11a-4ecb-a3a9-73fe5b7b688c)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "72625~group(grp_f24a3796-9eca-46e5-b1a9-ea30fc0c569e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "07832~group(grp_ea038afb-3c50-44ce-b257-cc2ad05a68eb)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "36743~group(grp_27dc7f7a-e2f7-4964-80f8-2065f15d6991)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "24678~group(grp_f8d06f39-d778-4f4a-9c0c-4577989bd707)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "06036~group(grp_69120f8c-901f-4dc8-857f-0059821cd30b)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "748cc56370~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "fea54e769f~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "27770~region(use)",
      "languageRatio": {},
      "n_users": 16
    },
    {
      "gameServerVersion": null,
      "instanceId": "81bbf12b30~region(us)",
      "languageRatio": {},
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "7e3a3533b0~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "4c854d4b7c~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "d822463609~region(us)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "7b07a86019~region(us)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "94756d5c8a~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "27809~region(eu)",
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
