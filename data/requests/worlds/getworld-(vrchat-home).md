# getWorld (VRChat Home)

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
  "description": "VRChat Home",
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
    "system_updated_recently"
  ],
  "thumbnailImageUrl": "<unstable: string>",
  "udonProducts": "<unstable: empty array>",
  "unityPackages": [
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
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/168/file",
      "assetVersion": 4,
      "created_at": "2023-08-28T18:51:26.278Z",
      "id": "unp_c0e103a9-a9cd-4f46-a7e7-6b77b9e92882",
      "platform": "android",
      "pluginUrl": "",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1"
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
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/285/file",
      "assetVersion": 4,
      "created_at": "2025-06-05T00:09:00.220Z",
      "id": "unp_9905a5ab-ffa1-4017-bd30-9d5996a7ea66",
      "platform": "android",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "worldSignature": "APgtAfae3wMDtnecdKJBXNaQv+id2IkNvh3OcxLig8xXz6IYtg=="
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
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/14/file",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:47:37.479Z",
      "id": "unp_094579c2-b4e7-4d39-bd7f-81faba5f092f",
      "platform": "ios",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_12e23773-363d-4cfa-a4e7-3cce1272dd40/36/file",
      "assetVersion": 4,
      "created_at": "2025-06-05T00:34:04.316Z",
      "id": "unp_182bb4e3-4edb-4cd8-b25b-43efc0c56342",
      "platform": "ios",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "worldSignature": "AKzDNFpdwrp9P3rj6jdydjTjhVJ8zC5wUj1gq/xwUCwKaxze6g=="
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
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/169/file",
      "assetVersion": 4,
      "created_at": "2023-08-28T18:56:31.133Z",
      "id": "unp_efad8ff0-50f6-4f4c-b55f-771d4ebab927",
      "platform": "standalonewindows",
      "pluginUrl": "",
      "unitySortNumber": 20190431000,
      "unityVersion": "2019.4.31f1"
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
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/221/file",
      "assetVersion": 4,
      "created_at": "2024-08-19T20:34:25.990Z",
      "id": "unp_b9573387-aa3a-4fe0-b65a-96fb28f6fbe1",
      "platform": "standalonewindows",
      "unitySortNumber": 20220306000,
      "unityVersion": "2022.3.6f1"
    },
    {
      "assetUrl": "https://api.vrchat.cloud/api/1/file/file_3caaf07f-363e-4b84-89d1-ee827f12afb5/284/file",
      "assetVersion": 4,
      "created_at": "2025-06-05T00:03:24.505Z",
      "id": "unp_775b2951-d2e2-44ac-8a1c-d38905f7d9c1",
      "platform": "standalonewindows",
      "unitySortNumber": 20220322000,
      "unityVersion": "2022.3.22f1",
      "worldSignature": "ABXZSr0Qi/neF9Z74tRKTgDMqbj6b3vbtWlX4RqYlJzrsiL1+w=="
    }
  ],
  "updated_at": "<unstable: string>",
  "urlList": [],
  "version": "<unstable: number>",
  "visits": "<unstable: number>"
}
```
