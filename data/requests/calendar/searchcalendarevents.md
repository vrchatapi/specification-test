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
      "endsAt": "2026-06-29T03:00:00.000Z",
      "featured": true,
      "id": "cal_407b9f18-f8ff-4961-b1ee-a8660a18e032",
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
      "startsAt": "2026-06-29T01:00:00.000Z",
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
      "endsAt": "2026-04-20T03:00:00.000Z",
      "featured": true,
      "id": "cal_31713e29-1071-4e78-aebf-dc28fe05e6b5",
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
      "startsAt": "2026-04-20T01:00:00.000Z",
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
      "endsAt": "2026-04-27T03:00:00.000Z",
      "featured": true,
      "id": "cal_82380e3f-3ca1-4c24-92bd-4eeec113532c",
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
      "startsAt": "2026-04-27T01:00:00.000Z",
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
      "endsAt": "2026-03-30T03:00:00.000Z",
      "featured": true,
      "id": "cal_8296fab7-600d-4722-8fb5-461fa0e36dda",
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
      "startsAt": "2026-03-30T01:00:00.000Z",
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
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-04-02T04:00:00.000Z",
      "featured": false,
      "id": "cal_1dacdc99-67f0-4be9-bb5d-733bcfb41ac9",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-04-02T01:30:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-04-06T03:00:00.000Z",
      "featured": true,
      "id": "cal_f06e8cb5-a9ac-48a7-ace1-e52fddd31624",
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
      "startsAt": "2026-04-06T01:00:00.000Z",
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
      "description": "Game Night‚ We Will Play 3-4 Games 1hr each at mostǃǃ",
      "endsAt": "2026-04-10T03:00:00.000Z",
      "featured": false,
      "id": "cal_abbe5062-76c6-4312-a34a-b3ee49a780ca",
      "imageId": "file_a06ced4b-301f-49ed-b134-c3a3c651533c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a06ced4b-301f-49ed-b134-c3a3c651533c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3ad1a80-5931-4ef1-a837-651ad824af06",
      "platforms": [],
      "startsAt": "2026-04-09T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "If you want a specific game dont be afraid to ask․",
      "endsAt": "2026-04-03T02:00:00.000Z",
      "featured": false,
      "id": "cal_db5e1523-1709-4ef9-9633-801cf3c811e5",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b1df6a38-6e41-4e9b-8698-b97d3d842ee1",
      "platforms": [],
      "startsAt": "2026-04-02T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-04-13T03:00:00.000Z",
      "featured": true,
      "id": "cal_ce6479f8-82b6-479b-83e5-92dee9b2d1db",
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
      "startsAt": "2026-04-13T01:00:00.000Z",
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
      "category": "other",
      "deletedAt": null,
      "description": "Game time",
      "endsAt": "2026-03-30T02:56:00.000Z",
      "featured": false,
      "id": "cal_d1fafe05-97be-4c87-80c0-a62e0d6861b9",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3d04e60b-e1bc-409f-aef8-0c2d6bef9648",
      "platforms": [],
      "startsAt": "2026-03-30T00:56:00.000Z",
      "tags": [],
      "title": "Game in",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-05-04T03:00:00.000Z",
      "featured": true,
      "id": "cal_8e87e87f-e504-442b-9fc1-eccefccccaaa",
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
      "startsAt": "2026-05-04T01:00:00.000Z",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Hang out and play games and chill with other Mega Menǃ",
      "endsAt": "2026-04-05T03:59:00.000Z",
      "featured": false,
      "id": "cal_7fa814b4-2196-4e13-8ada-b03a235211eb",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ce69417f-2e7e-4ae0-864f-c6f8246964a1",
      "platforms": [],
      "startsAt": "2026-04-05T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "If you want a specific game dont be afraid to ask․",
      "endsAt": "2026-04-10T02:00:00.000Z",
      "featured": false,
      "id": "cal_95942699-c5ba-4272-a402-3678d8e3dc57",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b1df6a38-6e41-4e9b-8698-b97d3d842ee1",
      "platforms": [],
      "startsAt": "2026-04-09T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-05-11T03:00:00.000Z",
      "featured": true,
      "id": "cal_aa5af56d-f4ba-4b2b-9775-412287891ca6",
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
      "startsAt": "2026-05-11T01:00:00.000Z",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Hang out and play games and chill with other Mega Menǃ",
      "endsAt": "2026-04-19T03:59:00.000Z",
      "featured": false,
      "id": "cal_146286c6-80d4-49c5-8336-c5d290708f3b",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ce69417f-2e7e-4ae0-864f-c6f8246964a1",
      "platforms": [],
      "startsAt": "2026-04-19T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a game night to have fun and chill outǃ\nWill last 2 hours unless decided otherwiseǃ",
      "endsAt": "2026-04-05T00:00:00.000Z",
      "featured": false,
      "id": "cal_d73c62a4-b8ae-4798-a0fb-cc4cead51add",
      "imageId": "file_6d684d03-b204-4077-8340-1aba5ae84dd8",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6d684d03-b204-4077-8340-1aba5ae84dd8/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4dfbc28f-d2d1-4582-999b-bb06ea9f5e02",
      "platforms": [],
      "startsAt": "2026-04-04T22:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "If you want a specific game dont be afraid to ask․",
      "endsAt": "2026-04-17T02:00:00.000Z",
      "featured": false,
      "id": "cal_37d2cbdb-3805-43d5-a0c2-01ae9156ad30",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b1df6a38-6e41-4e9b-8698-b97d3d842ee1",
      "platforms": [],
      "startsAt": "2026-04-16T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for Audience Anarchyǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-04-25T03:00:00.000Z",
      "featured": false,
      "id": "cal_5a6e3f60-7c60-458d-9089-83312d1a69a2",
      "imageId": "file_71d9ba64-3952-4032-aa92-8eb50046ad86",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_71d9ba64-3952-4032-aa92-8eb50046ad86/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-04-25T01:30:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Heheh new video gamey",
      "endsAt": "2026-05-13T17:31:00.000Z",
      "featured": false,
      "id": "cal_105886ba-3811-41ce-b957-c5cf7986e419",
      "imageId": "file_c603d9cd-609f-430e-800f-d12224f4dbca",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c603d9cd-609f-430e-800f-d12224f4dbca/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_63b2e855-1aa9-4236-abe9-486433a6a1f2",
      "platforms": [],
      "startsAt": "2026-05-13T17:30:00.000Z",
      "tags": [
        "gaming"
      ],
      "title": "Game release",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Night‚ We Will Play 3-4 Games 1hr each at mostǃǃ",
      "endsAt": "2026-05-01T03:00:00.000Z",
      "featured": false,
      "id": "cal_b9841b5f-2084-4716-9af8-68910fba5bb3",
      "imageId": "file_a06ced4b-301f-49ed-b134-c3a3c651533c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a06ced4b-301f-49ed-b134-c3a3c651533c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3ad1a80-5931-4ef1-a837-651ad824af06",
      "platforms": [],
      "startsAt": "2026-04-30T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello and welcome to the Sunday Cookoutǃ Zaya and Cookie pulled and picked a couple of games for everyone to play each weekǃ This week we are having Snowball Showdown and Steel N Goldǃ \n\nIf you need to preload these games I would suggest doing so when ya log into VRChatǃ\nSee y'all at the Cookoutǃ",
      "endsAt": "2026-04-20T05:00:00.000Z",
      "featured": false,
      "id": "cal_85f5a29e-3512-4aa3-a223-f05dfa46f030",
      "imageId": "file_4ec02986-fa0d-469c-8e54-767387efdc27",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4ec02986-fa0d-469c-8e54-767387efdc27/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_17195da9-01a8-45ca-bbd7-6320aa90ea61",
      "platforms": [],
      "startsAt": "2026-04-20T03:30:00.000Z",
      "tags": [],
      "title": "The Cookout Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We go play games‚ then hangoutǃ",
      "endsAt": "2026-04-11T03:00:00.000Z",
      "featured": false,
      "id": "cal_a0a77d8c-2820-46a6-b6a2-b01679c77efd",
      "imageId": "file_bcdb955f-e6a5-4535-9d15-775f95f106c1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_bcdb955f-e6a5-4535-9d15-775f95f106c1/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_b1b365b2-ea7d-4aa0-9988-30d8e1a31639",
      "platforms": [
        "standalonewindows"
      ],
      "startsAt": "2026-04-11T01:00:00.000Z",
      "tags": [],
      "title": "Friday Game and Hangout",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We play games",
      "endsAt": "2026-03-29T17:46:00.000Z",
      "featured": false,
      "id": "cal_9687bda8-6615-439f-a435-e19995a82864",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_85acb469-32a2-4407-913d-a3676b0970d8",
      "platforms": [],
      "startsAt": "2026-03-29T15:46:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a game night to have fun and chill outǃ\nWill last 2 hours unless decided otherwiseǃ",
      "endsAt": "2026-03-29T02:00:00.000Z",
      "featured": false,
      "id": "cal_8999db2d-c885-46bc-ba21-98a928fd3d6d",
      "imageId": "file_6d684d03-b204-4077-8340-1aba5ae84dd8",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6d684d03-b204-4077-8340-1aba5ae84dd8/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4dfbc28f-d2d1-4582-999b-bb06ea9f5e02",
      "platforms": [],
      "startsAt": "2026-03-29T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a night of fun and games․ Games planned include Prison Escape‚ Blackout‚ Spook Em Up‚ Magic Freeze Tag and moreǃ Suggestions welcomeǃ",
      "endsAt": "2026-04-01T04:00:00.000Z",
      "featured": false,
      "id": "cal_f9e0205e-e35c-4e61-93b2-4e2b897d0a99",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b6850bb0-947d-4aee-9d19-e7c2200ab573",
      "platforms": [],
      "startsAt": "2026-03-31T21:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    }
  ],
  "totalCount": 83
}
```
