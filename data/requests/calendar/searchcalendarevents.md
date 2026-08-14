# searchCalendarEvents

## Request
`GET https://api.vrchat.cloud/api/1/calendar/search?searchTerm=game`

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
  "results": [
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2027-05-17T03:00:00.000Z",
      "featured": true,
      "id": "cal_1c782245-1889-43b1-aae9-7e62ec00db4f",
      "imageId": "file_ffd4824e-a466-4425-8cd7-fcd25213d4d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ffd4824e-a466-4425-8cd7-fcd25213d4d1/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "pol"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-17T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2027-05-31T03:00:00.000Z",
      "featured": true,
      "id": "cal_6a0aab5b-7def-4562-bb06-6bed440a6eda",
      "imageId": "file_ffd4824e-a466-4425-8cd7-fcd25213d4d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ffd4824e-a466-4425-8cd7-fcd25213d4d1/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "pol"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-31T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2027-05-03T03:00:00.000Z",
      "featured": true,
      "id": "cal_3c80f060-323c-4c23-b009-5dbc39c0c8ad",
      "imageId": "file_ffd4824e-a466-4425-8cd7-fcd25213d4d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ffd4824e-a466-4425-8cd7-fcd25213d4d1/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "pol"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-03T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2027-05-10T03:00:00.000Z",
      "featured": true,
      "id": "cal_cb3beaa6-b391-4530-a316-35b500e5c867",
      "imageId": "file_ffd4824e-a466-4425-8cd7-fcd25213d4d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ffd4824e-a466-4425-8cd7-fcd25213d4d1/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "pol"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-10T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2027-05-24T03:00:00.000Z",
      "featured": true,
      "id": "cal_297eb0d0-d3dc-479c-88f5-58929408d3e0",
      "imageId": "file_ffd4824e-a466-4425-8cd7-fcd25213d4d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ffd4824e-a466-4425-8cd7-fcd25213d4d1/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "pol"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-24T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-21T08:18:00.000Z",
      "featured": false,
      "id": "cal_b2d58638-c6af-4c33-a038-1ca4c5992ed0",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-24T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-22T08:18:00.000Z",
      "featured": false,
      "id": "cal_8688bf54-6bf9-4fca-8e0a-d390a5f40fd8",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-25T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2027-05-07T21:30:00.000Z",
      "featured": false,
      "id": "cal_6b6520c6-2649-4e3b-b5b0-006e06f96fe9",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2027-05-07T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Every Friday from 9pm to midnight․ We host game nights for everyoneǃǃ It's a public 18＋ instance‚ and we hope to see you all real soonǃǃ",
      "endsAt": "2027-05-15T04:00:00.000Z",
      "featured": false,
      "id": "cal_3dbe9b86-e6ab-489e-a865-f868b9ec0902",
      "imageId": "file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e790783d-243d-46f4-b9f5-2c7fa51f3a05",
      "platforms": [],
      "startsAt": "2027-05-15T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Every Friday from 9pm to midnight․ We host game nights for everyoneǃǃ It's a public 18＋ instance‚ and we hope to see you all real soonǃǃ",
      "endsAt": "2027-05-08T04:00:00.000Z",
      "featured": false,
      "id": "cal_f322f553-2495-4c9a-90a0-d990c8392ca5",
      "imageId": "file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e790783d-243d-46f4-b9f5-2c7fa51f3a05",
      "platforms": [],
      "startsAt": "2027-05-08T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Sorry for having had the wrong date set this is the right one cone and have funǃ",
      "endsAt": "2027-05-03T03:30:00.000Z",
      "featured": false,
      "id": "cal_e999d5e5-849b-4f7d-bb38-6e0fb97cdde9",
      "imageId": "file_82c5aa28-ff3a-4327-8470-8152fc8e3fc7",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_82c5aa28-ff3a-4327-8470-8152fc8e3fc7/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9466b462-4dff-4442-89af-d7dc0d397c2e",
      "platforms": [],
      "startsAt": "2027-05-01T18:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAMES GAMES GAMESǃǃǃǃǃ",
      "endsAt": "2027-05-07T03:00:00.000Z",
      "featured": false,
      "id": "cal_a580a063-21e0-4708-bc98-69d7771996ba",
      "imageId": "file_08db7953-f76a-4ecd-8374-2fa9633e79ff",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_08db7953-f76a-4ecd-8374-2fa9633e79ff/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_015e4b7b-34b8-4931-94b0-0078e96ba4cc",
      "platforms": [],
      "startsAt": "2027-05-06T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come game with us and have fun and chill",
      "endsAt": "2027-05-30T03:00:00.000Z",
      "featured": false,
      "id": "cal_c8b74951-ce2f-4da9-8d99-195c56e643d4",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3e780f19-adf0-403c-a020-42a0686323cf",
      "platforms": [],
      "startsAt": "2027-05-30T01:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2027-05-30T03:30:00.000Z",
      "featured": true,
      "id": "cal_f9a08253-36f2-499a-b267-b3ba545f5e82",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-30T01:30:00.000Z",
      "tags": [
        "Gaming",
        "Fun",
        "LGBTQ"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for our weekly game nightǃ",
      "endsAt": "2027-05-24T02:00:00.000Z",
      "featured": false,
      "id": "cal_dfcb0c0f-36c0-4f86-aaf9-822c3a505514",
      "imageId": "file_681e62ef-84e9-404d-87f5-5ef5ac5fed91",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_681e62ef-84e9-404d-87f5-5ef5ac5fed91/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d2c84992-1ffc-4479-9a6d-4853d033a892",
      "platforms": [],
      "startsAt": "2027-05-23T22:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAME NIGHT\n\nWill make a list of what games we playǃ",
      "endsAt": "2027-05-22T21:00:00.000Z",
      "featured": false,
      "id": "cal_cd3e96ba-1142-4581-b85f-886d4f615335",
      "imageId": "file_094d1e2b-255e-4c6d-8906-3edfc335482f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_094d1e2b-255e-4c6d-8906-3edfc335482f/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_b39886a1-c62f-4719-a86b-283113c0d03a",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2027-05-22T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Any games other than Among us or Audience Anarchy",
      "endsAt": "2027-05-18T00:30:00.000Z",
      "featured": false,
      "id": "cal_3f983564-7e9e-43a4-bc3e-b96e8c76e81d",
      "imageId": "file_d8922bdf-7721-4c7f-8c28-3d4e699fa450",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d8922bdf-7721-4c7f-8c28-3d4e699fa450/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_56ab2b0f-254d-409a-924a-9a2f51aad698",
      "platforms": [],
      "startsAt": "2027-05-17T18:30:00.000Z",
      "tags": [],
      "title": "Game Nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game days for a break",
      "endsAt": "2027-05-28T04:31:00.000Z",
      "featured": false,
      "id": "cal_d274ab82-a6f8-4d40-9ce8-577c32f81671",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_cf7df6fa-5da2-4cb9-9a39-ad44809a114d",
      "platforms": [],
      "startsAt": "2027-05-25T02:31:00.000Z",
      "tags": [],
      "title": "GAME DAYS",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game days for a break",
      "endsAt": "2027-05-14T04:31:00.000Z",
      "featured": false,
      "id": "cal_217711d4-d6d7-430a-bdce-5850ea8a49b7",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_cf7df6fa-5da2-4cb9-9a39-ad44809a114d",
      "platforms": [],
      "startsAt": "2027-05-11T02:31:00.000Z",
      "tags": [],
      "title": "GAME DAYS",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come have fun with us",
      "endsAt": "2027-05-04T22:15:00.000Z",
      "featured": false,
      "id": "cal_02102ef0-f38e-4256-8849-6082fa87189b",
      "imageId": "file_fcd81de5-b08d-4c71-b88f-b70a70919052",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_fcd81de5-b08d-4c71-b88f-b70a70919052/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e7a880b3-abd5-4f78-9fe4-f94d0fd1fffa",
      "platforms": [],
      "startsAt": "2027-05-03T20:15:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come have fun with us",
      "endsAt": "2027-05-11T22:15:00.000Z",
      "featured": false,
      "id": "cal_805881c3-e85b-481b-8e42-cb45ceb0fbe5",
      "imageId": "file_fcd81de5-b08d-4c71-b88f-b70a70919052",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_fcd81de5-b08d-4c71-b88f-b70a70919052/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e7a880b3-abd5-4f78-9fe4-f94d0fd1fffa",
      "platforms": [],
      "startsAt": "2027-05-10T20:15:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come have fun with us",
      "endsAt": "2027-05-25T22:15:00.000Z",
      "featured": false,
      "id": "cal_66732e3a-38ae-4a36-bd8b-0561966f4e99",
      "imageId": "file_fcd81de5-b08d-4c71-b88f-b70a70919052",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_fcd81de5-b08d-4c71-b88f-b70a70919052/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e7a880b3-abd5-4f78-9fe4-f94d0fd1fffa",
      "platforms": [],
      "startsAt": "2027-05-24T20:15:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come have fun with us",
      "endsAt": "2027-05-21T22:19:00.000Z",
      "featured": false,
      "id": "cal_ffd06a37-4a30-4a23-b82d-45f4f3c47d0d",
      "imageId": "file_9fc336dc-4048-47ef-866c-d1f269431ddf",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9fc336dc-4048-47ef-866c-d1f269431ddf/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_19681907-0481-44df-86e3-d8c1e00d9b5b",
      "platforms": [],
      "startsAt": "2027-05-21T20:19:00.000Z",
      "tags": [],
      "title": "GAME TIMEǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come have fun with us",
      "endsAt": "2027-05-07T22:19:00.000Z",
      "featured": false,
      "id": "cal_689dd0a7-5104-4eea-9fc6-0cf1c8e99540",
      "imageId": "file_9fc336dc-4048-47ef-866c-d1f269431ddf",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9fc336dc-4048-47ef-866c-d1f269431ddf/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_19681907-0481-44df-86e3-d8c1e00d9b5b",
      "platforms": [],
      "startsAt": "2027-05-07T20:19:00.000Z",
      "tags": [],
      "title": "GAME TIMEǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "join us in this RPG game world where we fight boss and other things its called ECLIPTICA lets beat it",
      "endsAt": "2027-05-17T10:04:00.000Z",
      "featured": false,
      "id": "cal_b1cc6891-7e3b-421f-993e-66cc4dc9d7fb",
      "imageId": "file_ea3de702-f1e7-40fd-acb6-f7dd6cd6b8b9",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ea3de702-f1e7-40fd-acb6-f7dd6cd6b8b9/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0c4097a5-f6e5-42e6-9f6f-d3df055cfa53",
      "platforms": [],
      "startsAt": "2027-05-16T00:04:00.000Z",
      "tags": [],
      "title": "game night~",
      "type": "event"
    }
  ],
  "totalCount": 10000
}
```
