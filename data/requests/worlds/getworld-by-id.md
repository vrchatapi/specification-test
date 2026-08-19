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
  "recommendedCapacity": 50,
  "releaseStatus": "public",
  "slimInstances": [
    {
      "gameServerVersion": null,
      "instanceId": "58965~group(grp_9be8fb96-0959-4414-ba07-2e4580c981d3)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 49
    },
    {
      "gameServerVersion": null,
      "instanceId": "96129~group(grp_9be84c43-0ded-44fb-bb75-1dd8e06c6368)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 47
    },
    {
      "gameServerVersion": null,
      "instanceId": "72424~group(grp_8b418ca7-b425-489a-8310-36b61f73862e)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 46
    },
    {
      "gameServerVersion": null,
      "instanceId": "31257~group(grp_3fb094e2-4ce3-45eb-be73-ae6deff9afea)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 46
    },
    {
      "gameServerVersion": null,
      "instanceId": "41503~group(grp_cc98f7db-dde5-4ad8-b719-b5a3c25070de)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 12
    },
    {
      "gameServerVersion": null,
      "instanceId": "21972~group(grp_9be8fb96-0959-4414-ba07-2e4580c981d3)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "35568~group(grp_6102596c-3cfa-4861-a120-bd012c0365e8)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "83071~group(grp_27cb6c8a-78cb-4f1c-9f42-4a2ded1fe74f)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "79651~group(grp_0c3f5474-b14c-47de-ba7a-9e31ff00a9eb)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "48300~group(grp_73821299-38ed-4a14-b0c6-8f7acd1fc290)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "0c76593db0~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "3dc117acc6~region(us)",
      "languageRatio": {},
      "n_users": 46
    },
    {
      "gameServerVersion": null,
      "instanceId": "fc02e6eb9e~region(us)",
      "languageRatio": {},
      "n_users": 40
    },
    {
      "gameServerVersion": null,
      "instanceId": "0be76b4410~region(us)",
      "languageRatio": {},
      "n_users": 25
    },
    {
      "gameServerVersion": null,
      "instanceId": "e34cfbe612~region(us)",
      "languageRatio": {},
      "n_users": 24
    },
    {
      "gameServerVersion": null,
      "instanceId": "911479258c~region(us)",
      "languageRatio": {},
      "n_users": 19
    },
    {
      "gameServerVersion": null,
      "instanceId": "754db791b0~region(us)",
      "languageRatio": {},
      "n_users": 19
    },
    {
      "gameServerVersion": null,
      "instanceId": "f60b1dac39~region(us)",
      "languageRatio": {},
      "n_users": 5
    },
    {
      "gameServerVersion": null,
      "instanceId": "c1059b95ca~region(us)",
      "languageRatio": {},
      "n_users": 2
    },
    {
      "gameServerVersion": null,
      "instanceId": "be67b979b1~region(us)",
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
    "admin_vrrat_community_takeover",
    "system_updated_recently"
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
