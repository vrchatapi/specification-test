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
      "instanceId": "46574~group(grp_8b418ca7-b425-489a-8310-36b61f73862e)~groupAccessType(public)~region(use)",
      "n_users": 23
    },
    {
      "instanceId": "11829~group(grp_a0de3a01-bbdf-48b6-ba5e-95548458dafa)~groupAccessType(public)~ageGate~region(us)",
      "n_users": 13
    },
    {
      "instanceId": "59994~group(grp_d2e49900-bd05-4f31-8edc-80ab8631b4f0)~groupAccessType(public)~ageGate~region(use)",
      "n_users": 11
    },
    {
      "instanceId": "73717~group(grp_9dc0be54-1cff-4224-b866-de78ad13e1cc)~groupAccessType(public)~region(us)",
      "n_users": 7
    },
    {
      "instanceId": "71401~group(grp_6b41a9b6-66bc-4b9b-81f3-df7361b3683e)~groupAccessType(public)~region(us)",
      "n_users": 3
    },
    {
      "instanceId": "50040~group(grp_22bedb24-8496-4f02-aad5-a3fab1e2becc)~groupAccessType(public)~region(us)",
      "n_users": 2
    },
    {
      "instanceId": "64737~group(grp_29aba0c6-86b6-46c4-a2a7-f4fa595abc73)~groupAccessType(public)~region(us)",
      "n_users": 1
    },
    {
      "instanceId": "03194~group(grp_8ad9a6d7-29d7-436a-9da9-fbc1ccfcedba)~groupAccessType(public)~region(eu)",
      "n_users": 1
    },
    {
      "instanceId": "01311~group(grp_987a0a65-428c-4d89-91ac-6e7dcb7e3b4a)~groupAccessType(public)~region(us)",
      "n_users": 1
    },
    {
      "instanceId": "00181~group(grp_5a2677de-8250-4812-b80b-73b92a86355b)~groupAccessType(public)~region(us)",
      "n_users": 1
    },
    {
      "instanceId": "44441~region(use)",
      "languageRatio": {
        "en": 1
      },
      "n_users": 1
    },
    {
      "instanceId": "a5572f2203~region(us)",
      "n_users": 23
    },
    {
      "instanceId": "52176~region(eu)",
      "n_users": 12
    },
    {
      "instanceId": "87d5759154~region(us)",
      "n_users": 2
    },
    {
      "instanceId": "5ded4711df~region(us)",
      "n_users": 2
    },
    {
      "instanceId": "24ad7fbc44~region(us)",
      "n_users": 2
    },
    {
      "instanceId": "fc37d27ec1~region(us)",
      "n_users": 1
    },
    {
      "instanceId": "ce27ff5529~region(us)",
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
