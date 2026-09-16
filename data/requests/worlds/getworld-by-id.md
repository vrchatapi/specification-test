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
      "instanceId": "32315~group(grp_ad768e04-067d-4286-b5fb-3d4655635f50)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "63649~group(grp_f7ced55c-1464-4b22-a041-a2141529b96d)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 30
    },
    {
      "gameServerVersion": null,
      "instanceId": "52827~group(grp_41d4bb37-aebb-4ff6-9116-c7ba40eadf0a)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 15
    },
    {
      "gameServerVersion": null,
      "instanceId": "92412~group(grp_c7ba8659-4bf5-462f-8a7c-2cc31591f560)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "90104~group(grp_a75c6e38-a955-4a76-9de2-9636f997b082)~groupAccessType(public)~region(jp)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "79148~group(grp_16a5de2a-1ed3-4e49-b9de-6e738f84fc80)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "57314~group(grp_67634b03-3808-4feb-b4e6-0a138ddaabde)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "12351~group(grp_e34b5711-5af2-475f-85e1-87eaabc00576)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "10478~group(grp_0aaf00cb-e7d0-45a2-83c8-cc39f0e9a229)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "09239~group(grp_cacb84a7-7eb7-49e5-ba61-a6b4be41488d)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "3cea421214~region(us)",
      "languageRatio": {
        "en": 0.88,
        "es": 0.09,
        "ko": 0.03
      },
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "b8e95be18e~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "9c7b47bd7e~region(us)",
      "languageRatio": {},
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "f2f8b97a83~region(us)",
      "languageRatio": {},
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "94b681450f~region(us)",
      "languageRatio": {},
      "n_users": 32
    },
    {
      "gameServerVersion": null,
      "instanceId": "9ed4fde926~region(us)",
      "languageRatio": {},
      "n_users": 30
    },
    {
      "gameServerVersion": null,
      "instanceId": "f18af21151~region(us)",
      "languageRatio": {},
      "n_users": 27
    },
    {
      "gameServerVersion": null,
      "instanceId": "c31c815454~region(us)",
      "languageRatio": {},
      "n_users": 12
    },
    {
      "gameServerVersion": null,
      "instanceId": "790a8eb0b7~region(us)",
      "languageRatio": {},
      "n_users": 4
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
