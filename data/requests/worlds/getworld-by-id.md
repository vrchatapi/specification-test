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
      "instanceId": "22568~group(grp_e277db23-67fe-4b71-9d6f-5eb7f7a32837)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 49
    },
    {
      "gameServerVersion": null,
      "instanceId": "53785~group(grp_27cb6c8a-78cb-4f1c-9f42-4a2ded1fe74f)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "25953~group(grp_9be8fb96-0959-4414-ba07-2e4580c981d3)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 25
    },
    {
      "gameServerVersion": null,
      "instanceId": "73163~group(grp_ff2d9b3c-6d7c-461b-9542-772b7929e787)~groupAccessType(public)~ageGate~region(use)",
      "languageRatio": {},
      "n_users": 13
    },
    {
      "gameServerVersion": null,
      "instanceId": "12879~group(grp_205313f7-8e97-4a6b-87ad-c54e4e6bd143)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 8
    },
    {
      "gameServerVersion": null,
      "instanceId": "91788~group(grp_d2903332-8b76-4ade-9ba1-2d9a57286125)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "63720~group(grp_8285bc3f-e917-46be-a1e6-67cabde1bab5)~groupAccessType(public)~region(use)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "43445~group(grp_6078e02c-431d-4353-aa57-39ef1b8de663)~groupAccessType(public)~ageGate~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "34693~group(grp_0c3f5474-b14c-47de-ba7a-9e31ff00a9eb)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "gameServerVersion": null,
      "instanceId": "06773~group(grp_74da524f-d38a-4034-8652-2232ada624a6)~groupAccessType(public)~region(us)",
      "languageRatio": {},
      "n_users": 1
    },
    {
      "instanceId": "dabeacb0e7~region(us)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 7
    },
    {
      "gameServerVersion": null,
      "instanceId": "ac8193a0a8~region(us)",
      "languageRatio": {},
      "n_users": 37
    },
    {
      "gameServerVersion": null,
      "instanceId": "b244cfc80d~region(us)",
      "languageRatio": {},
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "57563~region(eu)",
      "languageRatio": {},
      "n_users": 34
    },
    {
      "gameServerVersion": null,
      "instanceId": "b91ff11b1d~region(us)",
      "languageRatio": {},
      "n_users": 32
    },
    {
      "gameServerVersion": null,
      "instanceId": "0ffc1923e3~region(us)",
      "languageRatio": {},
      "n_users": 31
    },
    {
      "gameServerVersion": null,
      "instanceId": "dcfc4dd772~region(us)",
      "languageRatio": {},
      "n_users": 25
    },
    {
      "gameServerVersion": null,
      "instanceId": "13af5a0841~region(us)",
      "languageRatio": {},
      "n_users": 14
    },
    {
      "gameServerVersion": null,
      "instanceId": "26a9075926~region(us)",
      "languageRatio": {},
      "n_users": 6
    },
    {
      "gameServerVersion": null,
      "instanceId": "0aa0cc9ccc~region(us)",
      "languageRatio": {},
      "n_users": 2
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
