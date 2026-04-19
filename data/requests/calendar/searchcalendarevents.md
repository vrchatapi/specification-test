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
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Nightǃ （Game To be Announced）",
      "endsAt": "2026-04-23T04:00:00.000Z",
      "featured": false,
      "id": "cal_b7be3974-d456-4c05-a9fd-3bc9d2822aea",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-04-23T02:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ （Game To be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Nightǃ （Game To be Announced）",
      "endsAt": "2026-04-30T04:00:00.000Z",
      "featured": false,
      "id": "cal_85b75575-f32d-418c-8240-314d688a14ee",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-04-30T02:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ （Game To be Announced）",
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
      "description": "Game TBD․ On the third Saturday due to Ossi having a show on the second and been unable to host as normal․",
      "endsAt": "2026-07-19T03:30:00.000Z",
      "featured": false,
      "id": "cal_17fe07c3-09df-49a0-857e-ae462bb8c7be",
      "imageId": "file_55f14029-720c-485b-a755-e03abbea3dbf",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_55f14029-720c-485b-a755-e03abbea3dbf/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c0f0453b-77b1-4b0d-8639-4a2d7add1ed6",
      "platforms": [],
      "startsAt": "2026-07-18T23:30:00.000Z",
      "tags": [],
      "title": "July Game Night",
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
      "description": "Game night for the group",
      "endsAt": "2026-04-25T06:10:00.000Z",
      "featured": false,
      "id": "cal_1996c16d-8f56-4f5b-b242-1bcaade9aa83",
      "imageId": "file_4d0d807f-e797-4a51-95ce-c6769c09cb38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4d0d807f-e797-4a51-95ce-c6769c09cb38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_6e017ca0-5549-42ca-a40b-c7e452f704db",
      "platforms": [],
      "startsAt": "2026-04-25T02:10:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Reboot of Game Nightsǃ \nThis event will be hosted by˸ LunarFrost",
      "endsAt": "2026-04-20T03:00:00.000Z",
      "featured": false,
      "id": "cal_aaac990e-01ca-461e-9b2d-6e9f0363f194",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2582cc9d-195d-414e-84c4-4e9cd1f143f8",
      "platforms": [],
      "startsAt": "2026-04-20T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Night‚ We Will Play 3-4 Games 1hr each at mostǃǃ",
      "endsAt": "2026-04-24T03:00:00.000Z",
      "featured": false,
      "id": "cal_bc0712f2-f6f4-45a5-9480-810d9f5b7c03",
      "imageId": "file_a06ced4b-301f-49ed-b134-c3a3c651533c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a06ced4b-301f-49ed-b134-c3a3c651533c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3ad1a80-5931-4ef1-a837-651ad824af06",
      "platforms": [],
      "startsAt": "2026-04-23T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-04-19T03:30:00.000Z",
      "featured": true,
      "id": "cal_648c591e-aa38-43af-91e9-bcd8a0cf88a4",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-04-19T01:30:00.000Z",
      "tags": [
        "LGBTQ",
        "Gaming",
        "Fun"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-04-26T03:30:00.000Z",
      "featured": true,
      "id": "cal_b728cb5d-039c-452c-b2a9-fa6f1bfa46a1",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-04-26T01:30:00.000Z",
      "tags": [
        "Gaming",
        "LGBTQ",
        "Fun"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for hunted asylum 2ǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-05-30T02:30:00.000Z",
      "featured": false,
      "id": "cal_c065a3a0-a9a6-47e2-92a2-ba8cd9e90c32",
      "imageId": "file_87135bde-cbb2-4747-97d6-01d55b6db07c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_87135bde-cbb2-4747-97d6-01d55b6db07c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-05-29T23:35:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for prison escapeǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-05-16T03:00:00.000Z",
      "featured": false,
      "id": "cal_33243ce0-68d0-41b4-983d-e23905b79ee6",
      "imageId": "file_4fb83aa9-1848-40e5-be55-d5942efe2608",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4fb83aa9-1848-40e5-be55-d5942efe2608/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-05-16T00:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "If you want a specific game dont be afraid to ask․",
      "endsAt": "2026-04-24T02:00:00.000Z",
      "featured": false,
      "id": "cal_8ba7333d-3a4a-45ca-88fe-cc8deb606d8d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b1df6a38-6e41-4e9b-8698-b97d3d842ee1",
      "platforms": [],
      "startsAt": "2026-04-23T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join all us goobers for our usual weekly hangoutǃ With a spread of games that are chosen on the spot‚ we try and make sure as many people as possible are included and can have fun ＾w＾",
      "endsAt": "2026-04-19T10:00:00.000Z",
      "featured": false,
      "id": "cal_51823a94-c879-491c-9f13-a5e856140a4e",
      "imageId": "file_8991c56e-133a-43ff-aad5-4ae05764d60e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8991c56e-133a-43ff-aad5-4ae05764d60e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e620f72-f3ef-43e4-ae02-4c16041bdc64",
      "platforms": [],
      "startsAt": "2026-04-19T05:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We just playing some couple games so feel free to join ˸3",
      "endsAt": "2026-04-20T03:19:00.000Z",
      "featured": false,
      "id": "cal_fed1d209-a4f1-4f02-80b5-5445e993a163",
      "imageId": "file_5edb4d5c-e986-4c89-86a1-a7577dcef9ff",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_5edb4d5c-e986-4c89-86a1-a7577dcef9ff/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c2dfd272-c96c-40c5-8bed-bbbe9f881763",
      "platforms": [],
      "startsAt": "2026-04-19T23:19:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game Night with the homies",
      "endsAt": "2026-04-20T03:30:00.000Z",
      "featured": false,
      "id": "cal_266a95ed-60eb-4b1a-bcd9-7154bff9f89d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_074f5da9-29cf-428e-b834-f269bb63b192",
      "platforms": [],
      "startsAt": "2026-04-20T01:30:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    }
  ],
  "totalCount": 102
}
```
