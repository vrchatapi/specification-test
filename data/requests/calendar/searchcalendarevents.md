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
      "description": "anything game",
      "endsAt": "2026-06-12T21:30:00.000Z",
      "featured": false,
      "id": "cal_bfdbbc8a-deb7-4460-a402-42b95036fdbb",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2026-06-12T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-06-05T04:00:00.000Z",
      "featured": false,
      "id": "cal_48b7ab5e-2775-409d-8e96-c95b209f5800",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-06-05T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-06-26T04:00:00.000Z",
      "featured": false,
      "id": "cal_8ca4b9e7-f828-4753-aed8-fd835b699f78",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-06-26T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-05-18T03:00:00.000Z",
      "featured": true,
      "id": "cal_6427506e-9eeb-4fd3-a623-5be7049e6977",
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
      "startsAt": "2026-05-18T01:00:00.000Z",
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
      "endsAt": "2026-05-25T03:00:00.000Z",
      "featured": true,
      "id": "cal_1da29deb-80ff-4526-ae39-391c99cc28f1",
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
      "startsAt": "2026-05-25T01:00:00.000Z",
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
      "description": "We are the one and only",
      "endsAt": "2026-05-01T04:34:00.000Z",
      "featured": false,
      "id": "cal_788fef58-d8cd-4078-a7ac-4de09aaa4df4",
      "imageId": "file_394906d6-efa2-4dd6-8de6-e16c2405fcff",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_394906d6-efa2-4dd6-8de6-e16c2405fcff/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1e93757a-4b69-4a2a-b242-c2f201ba85db",
      "platforms": [],
      "startsAt": "2026-04-26T02:34:00.000Z",
      "tags": [],
      "title": "The game ≻˸）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-06-11T04:00:00.000Z",
      "featured": false,
      "id": "cal_3b050599-03f7-4b6b-81d8-3d4d17f6f4e1",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-06-11T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2027-02-25T05:00:00.000Z",
      "featured": false,
      "id": "cal_d6717334-f955-4e5a-b381-f8661328fe9a",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2027-02-25T03:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-08-20T04:00:00.000Z",
      "featured": false,
      "id": "cal_c05d1d0b-53f5-485c-8b8e-5af2d8dff154",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-08-20T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-05-07T04:00:00.000Z",
      "featured": false,
      "id": "cal_38cc850e-5458-4ef9-a007-32720fdc6442",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-05-07T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-07-30T04:00:00.000Z",
      "featured": false,
      "id": "cal_fe335b3a-962c-4773-9981-cec3a557f33a",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-07-30T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-07-23T04:00:00.000Z",
      "featured": false,
      "id": "cal_a4ce6c47-74d5-49d7-9a92-39d6662e8210",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-07-23T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-07-16T04:00:00.000Z",
      "featured": false,
      "id": "cal_23333acd-e60a-4c97-b22c-84452fb85d2d",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-07-16T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2027-02-18T05:00:00.000Z",
      "featured": false,
      "id": "cal_ae0c7a9d-de1e-4f60-8eee-7280e25cd3b5",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2027-02-18T03:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Leave the stress of Mondays at the loading screen․ Phoenix Haven invites you to our biweekly game night of chaos and F․U․N․ FUNǃǃ․ Our mission is simple˸ bring a safe and welcoming environment for new players‚ trusted users and everyone in between‚ one game at a time․\n\nFrom high-stakes social deduction to fun nights of escaping from prison‚ we will do our best to have fun for everyone․",
      "endsAt": "2026-06-09T02:00:00.000Z",
      "featured": false,
      "id": "cal_b15c0e2f-1987-4562-b1b9-c1b03420225f",
      "imageId": "file_5d9003e0-fbf3-4dd3-95fc-5ce4455f7fda",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_5d9003e0-fbf3-4dd3-95fc-5ce4455f7fda/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_533aebc5-884f-4631-bb59-7559a988d2a1",
      "platforms": [],
      "startsAt": "2026-06-09T00:00:00.000Z",
      "tags": [
        "vrc_event_group_fair"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2026-06-05T21:30:00.000Z",
      "featured": false,
      "id": "cal_393be57e-249a-4dc3-9d14-5e58f2e1150b",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2026-06-05T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2026-06-19T21:30:00.000Z",
      "featured": false,
      "id": "cal_97ad36c5-c8f5-4cc7-8344-88956fb8dc22",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2026-06-19T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-06-12T04:00:00.000Z",
      "featured": false,
      "id": "cal_9fae40c8-f376-4a2f-9b50-dfcf0f1f23f6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-06-12T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us and get your killing onǃ",
      "endsAt": "2026-04-30T02:37:00.000Z",
      "featured": false,
      "id": "cal_0815435f-22b6-435e-ac67-c0085ec0e596",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_53e829f8-ed7b-42d7-9ad9-bc92e7f8b7b3",
      "platforms": [],
      "startsAt": "2026-04-30T00:40:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2027-02-12T05:00:00.000Z",
      "featured": false,
      "id": "cal_42baca7f-eec1-4e6c-9a25-0de851598ba0",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2027-02-12T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Leave the stress of Mondays at the loading screen․ Phoenix Haven invites you to our biweekly game night of chaos and F․U․N․ FUNǃǃ․ Our mission is simple˸ bring a safe and welcoming environment for new players‚ trusted users and everyone in between‚ one game at a time․\n\nFrom high-stakes social deduction to fun nights of escaping from prison‚ we will do our best to have fun for everyone․",
      "endsAt": "2026-05-12T02:00:00.000Z",
      "featured": false,
      "id": "cal_7a458061-4273-4e9e-a15a-39829508f151",
      "imageId": "file_5d9003e0-fbf3-4dd3-95fc-5ce4455f7fda",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_5d9003e0-fbf3-4dd3-95fc-5ce4455f7fda/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_533aebc5-884f-4631-bb59-7559a988d2a1",
      "platforms": [],
      "startsAt": "2026-05-12T00:00:00.000Z",
      "tags": [
        "vrc_event_group_fair"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2026-05-01T21:30:00.000Z",
      "featured": false,
      "id": "cal_d8479620-e409-4321-8932-fb9a344c034e",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2026-05-01T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    }
  ],
  "totalCount": 680
}
```
