# searchAvatars with admin_featured_legacy tag

## Request
`get https://api.vrchat.cloud/api/1/avatars?tag=admin_featured_legacy`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-encoding | `gzip` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
[
  {
    "id": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
    "name": "Robot",
    "description": "Beep Boop",
    "authorId": "8JoV9XEdpo",
    "authorName": "vrchat",
    "tags": [
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_0e8c4e32-7444-44ea-ade4-313c010d4bae/1/256",
    "releaseStatus": "public",
    "version": 15,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_78931757-c699-4ca5-b70e-e8bd4d6d1e9b",
        "unityVersion": "5.6.3p1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2018-01-26T16:00:23.586Z"
      },
      {
        "id": "unp_79d11a9b-cc69-45a5-a63c-7e0c5489db1a",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-05-09T20:20:35.354Z"
      },
      {
        "id": "unp_8b767c59-d0a0-4a7c-bce4-aeb3884255f6",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-05-09T20:22:14.724Z"
      },
      {
        "id": "unp_1a11a20c-0446-4820-a231-625f0362db1c",
        "unityVersion": "2018.4.17f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2020-10-01T19:47:27.538Z"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2016-11-30T03:47:35.000Z",
    "updated_at": "2023-04-06T23:24:41.405Z"
  },
  {
    "id": "avtr_881c451b-5790-4ff9-83c2-3b7bb33940cc",
    "name": "Liam",
    "description": "He has a very particular set of skills.",
    "authorId": "8JoV9XEdpo",
    "authorName": "vrchat",
    "tags": [
      "admin_featured_legacy"
    ],
    "imageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/images/image_1200x900_2016-11-29_21-52-21.png",
    "thumbnailImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/thumbnails/1934492738.thumbnail-200.png",
    "releaseStatus": "public",
    "version": 8,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_e54c28ef-05b9-46db-91d6-1ec4cbd42469",
        "unityVersion": "5.3.4p1",
        "assetVersion": 0,
        "platform": "standalonewindows",
        "created_at": "2017-01-24T06:31:47+00:00"
      },
      {
        "id": "unp_ddc2a736-ebff-46fd-8bab-9e11175aafdf",
        "unityVersion": "5.3.4p1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2017-05-19T14:58:51+00:00"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2016-11-30T03:52:29.000Z",
    "updated_at": "2018-11-27T01:48:43.042Z"
  },
  {
    "id": "avtr_712e5c3c-2deb-4cae-a414-79b2a814a90b",
    "name": "Unity-chan",
    "description": "Unity-chan",
    "authorId": "8JoV9XEdpo",
    "authorName": "vrchat",
    "tags": [
      "admin_developer",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/images/image_1200x900_2016-11-29_21-57-34.png",
    "thumbnailImageUrl": "https://s3-us-west-2.amazonaws.com/vrc-uploads/thumbnails/2233882830.thumbnail-200.png",
    "releaseStatus": "public",
    "version": 21,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_762159f1-2d11-42d6-ba42-0111f6b7a540",
        "unityVersion": "5.6.3p1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2018-11-22T04:18:53.944Z"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2016-11-30T03:57:43.000Z",
    "updated_at": "2023-04-06T23:43:40.642Z"
  },
  {
    "id": "avtr_ded62af3-4c09-48e0-8c56-60b0aebf0383",
    "name": "Yugo",
    "description": "Avatar By˸ Marino‚ ＠MarinoDev on Twitterǃ",
    "authorId": "usr_22df3294-e059-4c0a-9258-4020fd222a16",
    "authorName": "Marino",
    "tags": [
      "admin_quest_fallback_extended",
      "admin_quest_fallback_basic",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_040a6439-6532-4a48-b0df-e721ed608d46/24/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_040a6439-6532-4a48-b0df-e721ed608d46/24/256",
    "releaseStatus": "public",
    "version": 228,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_de32b380-b567-4dc2-ad54-a36d7e2a418f",
        "unityVersion": "5.6.3p1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2018-06-02T23:08:08.700Z"
      },
      {
        "id": "unp_abb594ae-f119-4448-965e-3b5d2a9f4478",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2018-12-31T22:23:50.769Z"
      },
      {
        "id": "unp_000c90e5-2074-48cc-adaf-b1ecf4b5ff61",
        "unityVersion": "2017.4.24f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-12-04T16:42:06.751Z"
      },
      {
        "id": "unp_bd7c6d5d-f424-40af-96b4-bd0a7f6c10ec",
        "unityVersion": "2017.4.24f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-12-12T16:10:28.754Z"
      },
      {
        "id": "unp_ee96b710-1443-4543-963d-b186c53ec1cb",
        "unityVersion": "2018.4.11f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2021-03-11T19:02:29.113Z"
      },
      {
        "id": "unp_2aefcc86-7124-479e-adec-cf270c523865",
        "unityVersion": "2018.4.11f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2021-06-03T13:12:07.244Z"
      },
      {
        "id": "unp_d6cf60b1-9f2d-49b5-86cb-d5478d110af0",
        "unityVersion": "2018.4.20f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2021-07-16T07:45:44.643Z"
      },
      {
        "id": "unp_897e0c55-2aeb-40a0-b13c-76d5fa2548cb",
        "created_at": "2021-07-16T07:46:44.875Z",
        "unityVersion": "2018.4.20f1",
        "assetVersion": 1,
        "platform": "android"
      },
      {
        "id": "unp_2034c313-2ea5-4a89-aff0-ce20a65b69a1",
        "created_at": "2021-10-22T00:29:48.483Z",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "unityVersion": "2019.4.29f1"
      },
      {
        "id": "unp_a7bde193-cc1a-45e2-8c9a-d275b5825446",
        "created_at": "2021-10-22T00:31:55.504Z",
        "assetVersion": 1,
        "platform": "android",
        "unityVersion": "2019.4.29f1"
      },
      {
        "id": "unp_b054cf23-f4b5-40c3-b567-76abdcf4d157",
        "created_at": "2021-11-22T04:45:50.693Z",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "unityVersion": "2019.4.31f1"
      },
      {
        "id": "unp_24b54202-04fd-4898-b533-5b9b300c76d3",
        "created_at": "2021-11-22T04:47:21.227Z",
        "assetVersion": 1,
        "platform": "android",
        "unityVersion": "2019.4.31f1"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2018-06-02T00:24:02.668Z",
    "updated_at": "2023-04-06T23:19:17.877Z"
  },
  {
    "id": "avtr_873c2bbe-41c2-496a-9b8b-0926b812c274",
    "name": "Mike",
    "description": "Workout Mike （this avatar） is CC0 Public Domain․ Feel free to use it for any purpose․",
    "authorId": "usr_63c7bd7e-b3df-4f20-a0df-9e4aba194377",
    "authorName": "Teh_Bucket",
    "tags": [
      "author_quest_fallback",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_88f8308c-ed1b-446b-8d92-2b671994a5e3/1/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_88f8308c-ed1b-446b-8d92-2b671994a5e3/1/256",
    "releaseStatus": "public",
    "version": 14,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_d6637be6-8c4f-4d28-ab2c-d7a6359a3943",
        "unityVersion": "5.6.3p1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2018-11-09T04:53:10.891Z",
        "variant": "standard"
      },
      {
        "id": "unp_75bc8a17-e808-4484-b76b-6711fe0579b3",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-02-06T19:13:08.974Z",
        "variant": "standard"
      },
      {
        "id": "unp_6cbd7112-16a0-4aa6-ac44-fbc762c80bf8",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-05-25T16:52:14.793Z",
        "variant": "standard"
      },
      {
        "id": "unp_26745f67-f336-4403-8a37-82093c708009",
        "created_at": "2022-02-17T01:01:52.122Z",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "unityVersion": "2019.4.31f1",
        "variant": "standard"
      },
      {
        "id": "unp_94dc10f2-c315-45f1-9420-d059bb057eaa",
        "created_at": "2022-02-17T01:25:33.424Z",
        "assetVersion": 1,
        "platform": "android",
        "unityVersion": "2019.4.31f1",
        "variant": "standard"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2018-08-25T00:48:31.956Z",
    "updated_at": "2023-04-06T23:17:28.029Z"
  },
  {
    "id": "avtr_478a34d2-be4e-4a19-ada4-054f07344c4e",
    "name": "Wuff the Wolf",
    "description": "By Zab",
    "authorId": "usr_d004e916-888d-4bb3-8187-74ee536c4af0",
    "authorName": "Zab",
    "tags": [
      "admin_quest_fallback_extended",
      "admin_quest_fallback_basic",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3749e264-4850-41fd-bafa-988abc80647b/3/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_3749e264-4850-41fd-bafa-988abc80647b/3/256",
    "releaseStatus": "public",
    "version": 74,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_51865eee-da0d-4129-ab78-aaee34dee406",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-05-28T06:03:30.005Z"
      },
      {
        "id": "unp_6cc1b4d9-2a38-4829-9d50-bc8013a9ec6a",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-06-15T23:53:58.819Z"
      },
      {
        "id": "unp_57473dc6-5bac-42c9-8db0-43ed8590324c",
        "unityVersion": "2018.4.12f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-11-24T04:57:13.910Z"
      },
      {
        "id": "unp_06ed0277-f3db-40b9-9c87-7afc96bad36e",
        "unityVersion": "2018.4.12f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-11-24T05:00:49.915Z"
      },
      {
        "id": "unp_f893b05e-7df1-4e4d-bd0f-1d83455716ae",
        "unityVersion": "2017.4.28f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-11-24T05:08:45.280Z"
      },
      {
        "id": "unp_98441b79-5892-48f5-a41a-3e4a946b776b",
        "unityVersion": "2017.4.28f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-11-24T05:13:42.071Z"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2019-01-02T17:39:24.495Z",
    "updated_at": "2023-04-06T23:23:04.073Z"
  },
  {
    "id": "avtr_a877ef68-4b49-457b-8f8b-2c8c68730d2c",
    "name": "Captain Bun",
    "description": "Captain of the SS Boolǃ",
    "authorId": "usr_6a3af64b-09da-4f8f-9548-e1c19f2e5fae",
    "authorName": "BlueASIS",
    "tags": [
      "admin_quest_fallback_extended",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_338db881-87ff-4b5f-b91f-f119e7b84dd0/1/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_338db881-87ff-4b5f-b91f-f119e7b84dd0/1/256",
    "releaseStatus": "public",
    "version": 10,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_18d86e3d-a4d6-483f-9060-c54b170394f5",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows"
      },
      {
        "id": "unp_14fae391-6c76-4967-9891-9401b3eb7e97",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-04-23T20:17:54.976Z"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2019-01-10T03:08:56.592Z",
    "updated_at": "2023-04-06T23:21:07.681Z"
  },
  {
    "id": "avtr_cebb4140-8894-4431-bad1-725658a3433f",
    "name": "Mecha head proportional",
    "description": "This avatar is CC0 Public Domain․ Feel free to use it for any purpose․",
    "authorId": "usr_63c7bd7e-b3df-4f20-a0df-9e4aba194377",
    "authorName": "Teh_Bucket",
    "tags": [
      "admin_quest_fallback_extended",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_be60fc07-88bb-492e-aab8-58e13ca49113/1/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_be60fc07-88bb-492e-aab8-58e13ca49113/1/256",
    "releaseStatus": "public",
    "version": 10,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_4565c7ca-51bf-4ea8-bb68-e6d4f75f771c",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-03-17T03:07:18.845Z",
        "variant": "standard"
      },
      {
        "id": "unp_373ee9e8-6148-43b2-8354-0423344439e5",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-05-25T16:54:43.196Z",
        "variant": "standard"
      },
      {
        "id": "unp_064a6f65-ce79-4abc-b022-9b8703a79221",
        "created_at": "2022-12-16T21:48:11.384Z",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "unityVersion": "2019.4.31f1",
        "variant": "standard"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2019-03-12T18:35:19.345Z",
    "updated_at": "2023-04-06T23:17:23.669Z"
  },
  {
    "id": "avtr_85b940d5-93e3-4424-8382-fe2a7e8b020c",
    "name": "Kaziu",
    "description": "Farmer Alienǃ",
    "authorId": "usr_6a3af64b-09da-4f8f-9548-e1c19f2e5fae",
    "authorName": "BlueASIS",
    "tags": [
      "admin_quest_fallback_extended",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_feb24440-c04d-45ef-b723-c56feff7312d/4/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_feb24440-c04d-45ef-b723-c56feff7312d/4/256",
    "releaseStatus": "public",
    "version": 17,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_ef6b757f-8364-4224-bf09-906620c9e2c3",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-04-23T20:44:49.172Z"
      },
      {
        "id": "unp_f551ad09-4254-4ff5-916e-33072988daf2",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-04-25T13:23:16.228Z"
      },
      {
        "id": "unp_f94de1e5-ff49-459e-a8ef-cb7328af2d0e",
        "unityVersion": "2017.4.28f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-08-05T11:12:50.127Z"
      },
      {
        "id": "unp_65de1bf4-ae77-41bc-8083-4b9118767099",
        "unityVersion": "2017.4.28f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-09-20T01:59:39.844Z"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2019-04-22T12:03:13.692Z",
    "updated_at": "2023-04-06T23:21:20.479Z"
  },
  {
    "id": "avtr_2973f03d-50c8-403f-9fac-ffaa60744bc2",
    "name": "Rollthered",
    "description": "Oculus Quest Compatible Avatar Created By Rollthered․",
    "authorId": "usr_b9b22461-82a4-4062-a504-c8f89003744e",
    "authorName": "rollthered",
    "tags": [
      "admin_quest_fallback_extended",
      "admin_quest_fallback_basic",
      "author_quest_fallback",
      "admin_featured_legacy"
    ],
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_29fb8e9d-337b-4a9f-8985-bbf0ccdb64e6/18/file",
    "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_29fb8e9d-337b-4a9f-8985-bbf0ccdb64e6/18/256",
    "releaseStatus": "public",
    "version": 27,
    "featured": false,
    "unityPackages": [
      {
        "id": "unp_cd5619ea-afe0-4e43-801b-3d31f957db06",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2019-07-22T06:28:34.932Z"
      },
      {
        "id": "unp_b96db2ef-ef20-4666-9563-c08b7e51719f",
        "unityVersion": "2017.4.15f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-07-22T06:52:01.606Z"
      },
      {
        "id": "unp_6415293c-f1b7-4cb5-a8fe-970a39d579a3",
        "unityVersion": "2018.4.12f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-11-15T02:57:04.491Z"
      },
      {
        "id": "unp_504fea10-6ba6-460f-827d-decf286b9ad7",
        "unityVersion": "2017.4.28f1",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "created_at": "2019-11-15T03:23:50.432Z"
      },
      {
        "id": "unp_836688b0-1e16-4782-9165-75c0ac7038d8",
        "unityVersion": "2018.4.20f1",
        "assetVersion": 1,
        "platform": "android",
        "created_at": "2021-04-03T02:22:35.750Z"
      },
      {
        "id": "unp_b094e0f7-9ce0-4c08-b3ac-25f3171f6a33",
        "created_at": "2021-04-23T07:58:06.496Z",
        "unityVersion": "2018.4.20f1",
        "assetVersion": 1,
        "platform": "standalonewindows"
      },
      {
        "id": "unp_8e43fd28-87fe-4137-a461-d507fc1ca903",
        "created_at": "2021-10-25T00:22:57.961Z",
        "assetVersion": 1,
        "platform": "standalonewindows",
        "unityVersion": "2019.4.31f1"
      }
    ],
    "unityPackageUrl": "",
    "unityPackageUrlObject": {},
    "created_at": "2019-04-23T21:20:17.280Z",
    "updated_at": "2023-04-06T23:19:59.949Z"
  }
]
```
