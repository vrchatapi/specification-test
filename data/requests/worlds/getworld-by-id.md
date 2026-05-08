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
      "gameServerVersion": 1626,
      "instanceId": "99877~group(grp_fdacfbda-f6e6-4f99-8e19-e9fb7f7e9eed)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "95815~group(grp_734ee202-6826-4f6a-8771-57484101f569)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 23
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "29743~group(grp_76fd51fd-478f-4dd1-9fd8-f398173aa2e4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.94,
        "es": 0.01,
        "fr": 0.01,
        "pt-BR": 0.03,
        "ru": 0.01
      },
      "n_users": 19
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "20491~group(grp_88d165f8-4e90-430b-ac57-de74f6a8035b)~groupAccessType(public)~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "37345~group(grp_6293909b-3d10-4f42-ad7c-076beef5283f)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 3
    },
    {
      "gameServerVersion": null,
      "instanceId": "78667~group(grp_9465008a-eec0-4628-a3dd-7d286a26bb62)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "75321~group(grp_6bce4936-6cc8-448b-81d4-da9b17ba580d)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "52113~group(grp_15e867fc-3ff3-4a3d-92e8-615a62e280dd)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "36050~group(grp_41b547ee-5227-453f-8538-be8a76e01edd)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "30814~group(grp_269b50fd-093c-4dff-8c1f-c0185216d533)~groupAccessType(public)~region(eu)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "1f2e28b0a7~region(us)",
      "languageRatio": {
        "en": 0.87,
        "es": 0.13
      },
      "n_users": 15
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "169ee90d8b~region(us)",
      "languageRatio": {
        "de": 0.04,
        "en": 0.93,
        "es": 0.04
      },
      "n_users": 20
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "c9d3e0469c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 18
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "9199deacbc~region(us)",
      "languageRatio": {
        "en": 0.95,
        "es": 0.05
      },
      "n_users": 16
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "d7ae02225c~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 12
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "6608460e68~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 12
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "07ee154fc8~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 11
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "4801f03a9e~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 5
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
