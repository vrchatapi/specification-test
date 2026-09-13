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
      "instanceId": "62371~group(grp_cb2bf2ca-6d42-4c1c-bd91-75e90e3beb45)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "12393~group(grp_3a9057f1-2f06-44c6-978a-4a8fa1626680)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "36667~group(grp_d2e49900-bd05-4f31-8edc-80ab8631b4f0)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 36
    },
    {
      "gameServerVersion": null,
      "instanceId": "47560~group(grp_3fb094e2-4ce3-45eb-be73-ae6deff9afea)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 35
    },
    {
      "gameServerVersion": null,
      "instanceId": "48691~group(grp_8a47f449-c16f-40f0-bce2-2f16047d168b)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 10
    },
    {
      "gameServerVersion": null,
      "instanceId": "76410~group(grp_41d4bb37-aebb-4ff6-9116-c7ba40eadf0a)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "01408~group(grp_b38a8d51-b76a-43f9-9a72-48a4425fcfa4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "34631~group(grp_06a816be-47da-4ae5-8712-72fa4a70fe78)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "22374~group(grp_6102596c-3cfa-4861-a120-bd012c0365e8)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "92920~group(grp_3fb094e2-4ce3-45eb-be73-ae6deff9afea)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "instanceId": "83cc9152dd~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "41918~region(use)",
      "languageRatio": {},
      "n_users": 39
    },
    {
      "gameServerVersion": null,
      "instanceId": "df91c20c63~region(us)",
      "languageRatio": {},
      "n_users": 38
    },
    {
      "gameServerVersion": null,
      "instanceId": "f2f8b97a83~region(us)",
      "languageRatio": {},
      "n_users": 36
    },
    {
      "gameServerVersion": null,
      "instanceId": "45558~region(use)",
      "languageRatio": {},
      "n_users": 35
    },
    {
      "gameServerVersion": null,
      "instanceId": "41d8ac73a8~region(us)",
      "languageRatio": {},
      "n_users": 35
    },
    {
      "gameServerVersion": null,
      "instanceId": "18429~region(eu)",
      "languageRatio": {},
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "b8e95be18e~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "650423a643~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "443b8b9627~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "085c68fd9c~region(us)",
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
