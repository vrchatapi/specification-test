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
      "instanceId": "35049~group(grp_721d03e8-9fe3-41f0-92db-f54aa55bbdf1)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 19
    },
    {
      "gameServerVersion": null,
      "instanceId": "32546~group(grp_e013aa8b-fcd5-45c5-b338-b4409a20438b)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 17
    },
    {
      "gameServerVersion": null,
      "instanceId": "09421~group(grp_048b2127-0d63-4551-8ba0-06d0f90dd3f2)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 14
    },
    {
      "gameServerVersion": null,
      "instanceId": "93338~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "74361~group(grp_e5a977d5-5492-4a44-838f-53e1a7c74a8c)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "11083~group(grp_f24a3796-9eca-46e5-b1a9-ea30fc0c569e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "11876~group(grp_c3935df3-86bd-40e0-99ef-09e3c132a91e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "58432~group(grp_e5ec1ced-cf07-4623-9f76-2e4f6bbea1f4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "30468~group(grp_f0f9dc69-9d12-4015-9536-1fcc9d95a541)~groupAccessType(public)~region(eu)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "03964~group(grp_8ef2d023-fd9e-4d1e-a6b7-4c96431777b4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "d5fb677b1d~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "42cec50dd9~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "e182637dde~region(us)",
      "languageRatio": {},
      "n_users": 22
    },
    {
      "gameServerVersion": null,
      "instanceId": "88019~region(eu)",
      "languageRatio": {},
      "n_users": 22
    },
    {
      "gameServerVersion": null,
      "instanceId": "0747e9095c~region(us)",
      "languageRatio": {},
      "n_users": 17
    },
    {
      "gameServerVersion": null,
      "instanceId": "2f12e7f467~region(us)",
      "languageRatio": {},
      "n_users": 11
    },
    {
      "gameServerVersion": null,
      "instanceId": "c4bbb5d024~region(us)",
      "languageRatio": {},
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "f0f2c9e77d~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "da6acdd95e~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "07608c4995~region(us)",
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
