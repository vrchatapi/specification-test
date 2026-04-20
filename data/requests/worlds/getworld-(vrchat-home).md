# getWorld (VRChat Home)

## Issues
Response schema mismatch:
* undefined at ``#/instances/0``,
* undefined at ``#/instances/1``,
* undefined at ``#/instances/2``,
* undefined at ``#/instances/3``,
* undefined at ``#/instances/4``,
* Unexpected property at ``#/disabledPropAbilities``,
* Unexpected property at ``#/slimInstances``.
## Request
`GET https://api.vrchat.cloud/api/1/worlds/wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd`

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
  "authorId": "8JoV9XEdpo",
  "authorName": "vrchat",
  "capacity": 16,
  "created_at": "2019-02-22T17:33:03.865Z",
  "defaultContentSettings": {},
  "description": "Whether you're new or returning‚ this space offers a cozy starting point to customize your avatar‚ explore the menus‚ and prepare for adventures across VRChatǃ",
  "disabledPropAbilities": [],
  "favorites": "<unstable: number>",
  "featured": false,
  "heat": "<unstable: number>",
  "id": "wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd",
  "imageUrl": "<unstable: string>",
  "instances": "<unstable: array of objects>",
  "labsPublicationDate": "none",
  "name": "VRChat Home",
  "occupants": "<unstable: number>",
  "organization": "vrchat",
  "popularity": "<unstable: number>",
  "previewYoutubeId": null,
  "privateOccupants": "<unstable: number>",
  "publicOccupants": "<unstable: number>",
  "publicationDate": "2022-10-01T02:55:15.725Z",
  "recommendedCapacity": 8,
  "releaseStatus": "public",
  "slimInstances": [
    {
      "gameServerVersion": 1626,
      "instanceId": "68323~group(grp_2fe5bb2e-66f0-4bb5-8f48-e99fc67d1c68)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.8,
        "es": 0.2
      },
      "n_users": 6
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "11~group(grp_1c6601a3-b2ce-45c3-946e-f12094a97ce4)~groupAccessType(public)~region(us)",
      "languageRatio": {
        "en": 0.71,
        "es": 0.07,
        "ja": 0.07,
        "pt-BR": 0.07,
        "ru": 0.07
      },
      "n_users": 3
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "52a7f4220f~region(us)",
      "languageRatio": {
        "de": 0.1,
        "en": 0.9
      },
      "n_users": 5
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "76207~region(us)",
      "languageRatio": {
        "en": 0.6,
        "es": 0.1,
        "pt-BR": 0.1,
        "zh-CN": 0.2
      },
      "n_users": 2
    },
    {
      "gameServerVersion": 1626,
      "instanceId": "26837~region(us)",
      "languageRatio": {
        "en": 0.88,
        "es": 0.13
      },
      "n_users": 2
    }
  ],
  "tags": [
    "admin_approved",
    "system_approved",
    "admin_internal_world",
    "admin_AllowInternal_BypassImageDownloadDelay",
    "admin_AllowInternal_UrlConstructor",
    "author_tag_feature_avatar_scaling",
    "admin_AllowInternal_UserSettings",
    "admin_AllowInternal_UserInterests",
    "admin_AllowInternal_PedestalPreview",
    "admin_AllowInternal_GetBestInstances",
    "admin_AllowInternal_PortalCreator",
    "admin_AllowInternal_PlatformCheck",
    "admin_filter_UrlLauncher",
    "admin_filter_analytics",
    "admin_hide_broad",
    "admin_AllowInternal_PrideCampaign",
    "admin_AllowInternal_OpenMenu",
    "admin_ios_category",
    "admin_AllowInternal_Experiments"
  ],
  "thumbnailImageUrl": "<unstable: string>",
  "udonProducts": "<unstable: empty array>",
  "unityPackages": [
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/43/variant/security?v=1776522567",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-05-15T18:51:39.085Z",
      "id": "unp_5bf9073e-0186-4522-a8c1-6d79b15e89f1",
      "platform": "android",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_14b04cc5-5bd8-45c5-8edc-1c34b75e712c/29/file",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20170415000,
      "unityVersion": "2017.4.15f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/43/file",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-05-15T18:51:39.085Z",
      "id": "unp_5bf9073e-0186-4522-a8c1-6d79b15e89f1",
      "platform": "android",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_14b04cc5-5bd8-45c5-8edc-1c34b75e712c/29/file",
      "pluginUrlObject": {},
      "unitySortNumber": 20170415000,
      "unityVersion": "2017.4.15f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/53/variant/security?v=1776522571",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-11-16T00:41:51.628Z",
      "id": "unp_4564bc5d-ae80-4e49-9a93-74364d97e009",
      "platform": "android",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_14b04cc5-5bd8-45c5-8edc-1c34b75e712c/34/file",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20170428000,
      "unityVersion": "2017.4.28f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/53/file",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-11-16T00:41:51.628Z",
      "id": "unp_4564bc5d-ae80-4e49-9a93-74364d97e009",
      "platform": "android",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_14b04cc5-5bd8-45c5-8edc-1c34b75e712c/34/file",
      "pluginUrlObject": {},
      "unitySortNumber": 20170428000,
      "unityVersion": "2017.4.28f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/56/variant/security?v=1776522575",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2019-12-08T00:16:28.349Z",
      "id": "unp_e3494e56-fad4-4d5b-9342-f90776cb1403",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20180412000,
      "unityVersion": "2018.4.12f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/56/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2019-12-08T00:16:28.349Z",
      "id": "unp_e3494e56-fad4-4d5b-9342-f90776cb1403",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20180412000,
      "unityVersion": "2018.4.12f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/100/variant/security?v=1776522572",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-08-19T02:56:51.138Z",
      "id": "unp_0773a931-183e-42a6-b6e6-cc9bce0546a6",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20180414000,
      "unityVersion": "2018.4.14f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/100/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-08-19T02:56:51.138Z",
      "id": "unp_0773a931-183e-42a6-b6e6-cc9bce0546a6",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20180414000,
      "unityVersion": "2018.4.14f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/103/variant/security?v=1776522577",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-09-10T07:40:37.786Z",
      "id": "unp_7aa9f5e4-0691-4c93-b727-4c210c5dd77a",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20190429000,
      "unityVersion": "2019.4.29f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/103/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-09-10T07:40:37.786Z",
      "id": "unp_7aa9f5e4-0691-4c93-b727-4c210c5dd77a",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20190429000,
      "unityVersion": "2019.4.29f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/131/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2022-03-22T02:14:35.259Z",
      "id": "unp_cfddb33f-ec9d-4420-9853-3fbe4de7db89",
      "platform": "android",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20190430000,
      "unityVersion": "2019.4.30f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/187/file",
      "assetVersion": 1,
      "created_at": "2024-03-18T13:34:38.325Z",
      "id": "unp_ab434eea-3485-441c-b78e-a3d46e1991ac",
      "platform": "android",
      "pluginUrl": "",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/222/file",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:42:13.581Z",
      "id": "unp_39943130-e170-4aa2-a8b1-f8698cdcd795",
      "platform": "android",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/341/variant/security?v=1776126154",
      "assetVersion": 4,
      "created_at": "2026-04-14T00:22:24.824Z",
      "id": "unp_74a33e3f-ec7e-48f9-948d-f614e8a89051",
      "platform": "android",
      "scanStatus": "passed",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "variant": "security",
      "worldSignature": "ADI8WgnRWqVkVePANfV2Z2ROt9uFx3zm2jV/sSBqDJ+tarx2Ug=="
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/341/file",
      "assetVersion": 4,
      "created_at": "2026-04-14T00:22:24.824Z",
      "id": "unp_74a33e3f-ec7e-48f9-948d-f614e8a89051",
      "platform": "android",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "worldSignature": "ADI8WgnRWqVkVePANfV2Z2ROt9uFx3zm2jV/sSBqDJ+tarx2Ug=="
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/1/variant/security?v=1776522596",
      "assetVersion": 4,
      "created_at": "2023-05-03T23:31:59.219Z",
      "id": "unp_db73ea21-ad4d-46d4-8421-def8d52deee1",
      "platform": "ios",
      "pluginUrl": "",
      "scanStatus": "passed",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/1/file",
      "assetVersion": 4,
      "created_at": "2023-05-03T23:31:59.219Z",
      "id": "unp_db73ea21-ad4d-46d4-8421-def8d52deee1",
      "platform": "ios",
      "pluginUrl": "",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/14/variant/security?v=1776522598",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:47:37.479Z",
      "id": "unp_094579c2-b4e7-4d39-bd7f-81faba5f092f",
      "platform": "ios",
      "scanStatus": "passed",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/14/file",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:47:37.479Z",
      "id": "unp_094579c2-b4e7-4d39-bd7f-81faba5f092f",
      "platform": "ios",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/58/variant/security?v=1776126284",
      "assetVersion": 4,
      "created_at": "2026-04-14T00:24:36.298Z",
      "id": "unp_2f465a5d-32eb-4d1e-88b4-0fd91ba50f60",
      "platform": "ios",
      "scanStatus": "passed",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "variant": "security",
      "worldSignature": "AE4FZpbhkTNFXPTdSbCfmUhaOXO9KaXfCBI78vI+BswKXNtJoA=="
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/58/file",
      "assetVersion": 4,
      "created_at": "2026-04-14T00:24:36.298Z",
      "id": "unp_2f465a5d-32eb-4d1e-88b4-0fd91ba50f60",
      "platform": "ios",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "worldSignature": "AE4FZpbhkTNFXPTdSbCfmUhaOXO9KaXfCBI78vI+BswKXNtJoA=="
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/44/variant/security?v=1776522594",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-05-15T19:01:02.030Z",
      "id": "unp_7f196eac-3362-45f7-8dba-4dac15c25804",
      "platform": "standalonewindows",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_9c0556cf-7df8-4b0e-9781-739cc13804fd/13/file",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20170415000,
      "unityVersion": "2017.4.15f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/44/file",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-05-15T19:01:02.030Z",
      "id": "unp_7f196eac-3362-45f7-8dba-4dac15c25804",
      "platform": "standalonewindows",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_9c0556cf-7df8-4b0e-9781-739cc13804fd/13/file",
      "pluginUrlObject": {},
      "unitySortNumber": 20170415000,
      "unityVersion": "2017.4.15f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/52/variant/security?v=1776522593",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-11-08T01:49:10.213Z",
      "id": "unp_65c3d4bf-7291-4646-88f6-a6bd32e68b57",
      "platform": "standalonewindows",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_9c0556cf-7df8-4b0e-9781-739cc13804fd/17/file",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20170428000,
      "unityVersion": "2017.4.28f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/52/file",
      "assetUrlObject": {},
      "assetVersion": 3,
      "created_at": "2019-11-08T01:49:10.213Z",
      "id": "unp_65c3d4bf-7291-4646-88f6-a6bd32e68b57",
      "platform": "standalonewindows",
      "pluginUrl": "https://api.vrchat.cloud/api/1/file/file_9c0556cf-7df8-4b0e-9781-739cc13804fd/17/file",
      "pluginUrlObject": {},
      "unitySortNumber": 20170428000,
      "unityVersion": "2017.4.28f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/55/variant/security?v=1776522597",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2019-12-07T23:41:04.986Z",
      "id": "unp_aee8f76f-85db-4148-b2b7-bfd16a515c79",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20180412000,
      "unityVersion": "2018.4.12f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/55/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2019-12-07T23:41:04.986Z",
      "id": "unp_aee8f76f-85db-4148-b2b7-bfd16a515c79",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20180412000,
      "unityVersion": "2018.4.12f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/101/variant/security?v=1776522598",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-08-19T03:08:50.302Z",
      "id": "unp_f7986549-a591-4e75-b966-3178f1b019f8",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20180414000,
      "unityVersion": "2018.4.14f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/101/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-08-19T03:08:50.302Z",
      "id": "unp_f7986549-a591-4e75-b966-3178f1b019f8",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20180414000,
      "unityVersion": "2018.4.14f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/105/variant/security?v=1776522608",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-09-10T08:22:13.049Z",
      "id": "unp_dba5a7cc-ecf0-4117-87e7-5f2a4c26cc0c",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20190429000,
      "unityVersion": "2019.4.29f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/105/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2021-09-10T08:22:13.049Z",
      "id": "unp_dba5a7cc-ecf0-4117-87e7-5f2a4c26cc0c",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20190429000,
      "unityVersion": "2019.4.29f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/132/variant/security?v=1776522606",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2022-03-22T02:22:33.917Z",
      "id": "unp_2b01d559-d094-44ec-b895-0a0770cbf90b",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "scanStatus": "passed",
      "unitySortNumber": 20190430000,
      "unityVersion": "2019.4.30f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/132/file",
      "assetUrlObject": {},
      "assetVersion": 4,
      "created_at": "2022-03-22T02:22:33.917Z",
      "id": "unp_2b01d559-d094-44ec-b895-0a0770cbf90b",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "pluginUrlObject": {},
      "unitySortNumber": 20190430000,
      "unityVersion": "2019.4.30f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/188/variant/security?v=1776522606",
      "assetVersion": 1,
      "created_at": "2024-03-18T13:41:07.815Z",
      "id": "unp_68305924-a32a-4688-b6c4-72ac9a9d3deb",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "scanStatus": "passed",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/188/file",
      "assetVersion": 1,
      "created_at": "2024-03-18T13:41:07.815Z",
      "id": "unp_68305924-a32a-4688-b6c4-72ac9a9d3deb",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/221/variant/security?v=1776522604",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:34:25.990Z",
      "id": "unp_b9573387-aa3a-4fe0-b65a-96fb28f6fbe1",
      "platform": "standalonewindows",
      "scanStatus": "passed",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1",
      "variant": "security"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/221/file",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:34:25.990Z",
      "id": "unp_b9573387-aa3a-4fe0-b65a-96fb28f6fbe1",
      "platform": "standalonewindows",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/340/variant/security?v=1776125893",
      "assetVersion": 4,
      "created_at": "2026-04-14T00:18:03.409Z",
      "id": "unp_43f20c74-6348-4ec6-b7fb-1de23d9428a5",
      "platform": "standalonewindows",
      "scanStatus": "passed",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "variant": "security",
      "worldSignature": "AHDP1HWffZMGdstF/OrQyIJP6iGmVIQHDDrXHR2Zj/olbERx/A=="
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/340/file",
      "assetVersion": 4,
      "created_at": "2026-04-14T00:18:03.409Z",
      "id": "unp_43f20c74-6348-4ec6-b7fb-1de23d9428a5",
      "platform": "standalonewindows",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "worldSignature": "AHDP1HWffZMGdstF/OrQyIJP6iGmVIQHDDrXHR2Zj/olbERx/A=="
    }
  ],
  "updated_at": "<unstable: string>",
  "urlList": [],
  "version": "<unstable: number>",
  "visits": "<unstable: number>"
}
```
