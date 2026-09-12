# getWorld by id

## Issues
Response schema mismatch:
* Unexpected property at ``#/isHypeTrainEligible``.
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
  "isHypeTrainEligible": false,
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
      "instanceId": "77545~group(grp_9d939795-6d98-459a-b5d0-d9e5f384d521)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "06018~group(grp_871a0cf3-f7f6-4559-8b1d-8b572a11e394)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 36
    },
    {
      "gameServerVersion": null,
      "instanceId": "88149~group(grp_0aaf00cb-e7d0-45a2-83c8-cc39f0e9a229)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 23
    },
    {
      "gameServerVersion": null,
      "instanceId": "04309~group(grp_903cbd06-887b-4ee7-9bcd-ed37ab9ea70b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "88997~group(grp_ff2d9b3c-6d7c-461b-9542-772b7929e787)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "68041~group(grp_e65f1ad1-6398-4ab5-a9cf-a0ecdafea54c)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "90256~group(grp_22d3cf3e-cb0f-4018-add3-2ff4ab661651)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "71951~group(grp_7867ad99-779f-4236-a984-0654956e4daa)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "57793~group(grp_ca107376-10b4-4be9-836c-aee7e8b3bcbb)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "29018~group(grp_7bd11cf8-714d-4808-ab43-e523f5ade98a)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "8a9861d8d5~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "41d8ac73a8~region(us)",
      "languageRatio": {},
      "n_users": 35
    },
    {
      "gameServerVersion": null,
      "instanceId": "df91c20c63~region(us)",
      "languageRatio": {},
      "n_users": 30
    },
    {
      "gameServerVersion": null,
      "instanceId": "00089~region(eu)",
      "languageRatio": {},
      "n_users": 25
    },
    {
      "gameServerVersion": null,
      "instanceId": "41918~region(use)",
      "languageRatio": {},
      "n_users": 20
    },
    {
      "gameServerVersion": null,
      "instanceId": "cdeb990277~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "b8e95be18e~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "6ad637937d~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "5b2716bfd1~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "3bef2d1064~region(us)",
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
