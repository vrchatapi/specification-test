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
      "instanceId": "57225~group(grp_9dc0be54-1cff-4224-b866-de78ad13e1cc)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.98,
        "fr": 0.02
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "44026~group(grp_58442a02-08fe-4911-bbca-26263fe26633)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "de": 0.03,
        "en": 0.97
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "19484~group(grp_07501080-2050-4d62-8a28-890c234b8d39)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "24389~group(grp_48f7dee9-c88e-47ac-b75d-71685993b6f4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "37814~group(grp_70e39c25-e40f-4d3d-87c2-51d0657fa11f)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": null,
      "instanceId": "94002~group(grp_97ac4ae5-d2ec-4901-81c9-1105a0cd3de4)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "20035~group(grp_a0846410-96b7-43fd-bbde-4fe15fc5f951)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "46062~group(grp_bd351f62-f58a-4b91-a5f3-c6c714d4f846)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "12520~group(grp_2b7b3455-bc01-473b-8630-8a564e08a538)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "05017~group(grp_45977322-e074-4b69-b18b-ffec56103e6f)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "82aa8ad9ce~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 4
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "1cf30f0f9c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "feff4d924b~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "b5b2471e6a~region(us)",
      "languageRatio": {
        "en": 0.97,
        "fr": 0.03
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "0a1fa9539e~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 8
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "5e3741a13c~region(us)",
      "languageRatio": {
        "en": 1
      },
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
