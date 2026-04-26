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
      "category": "gaming",
      "deletedAt": null,
      "description": "what are game shows?\ngame shows is when people split into 2 teams and go against each other in fun games and activities \n\nwhat do the winners get? \nwell we have 3 options u can pick from \n\n1․you and your team come up with a skit and it gets posted on the official TikTokǃ （can be edited by dyle or beandean （depressoespresso___ on discord）\n\n2․you get to pick the games for the next game showǃ （lowest is 3 and highest is 6）\n\n3․you and your team get VIP to the staff roomsǃǃ （ONLY UNTILL THE NEXT GAME SHOW）",
      "endsAt": "2026-04-26T05:00:00.000Z",
      "featured": false,
      "id": "cal_28d5de47-ef2d-469d-8777-651306c4bc03",
      "imageId": "file_7179953c-b913-4daa-97f6-8ca5fe03e9be",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7179953c-b913-4daa-97f6-8ca5fe03e9be/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_13b22a5c-0731-4a26-9fc2-cfd77fc44a9a",
      "platforms": [],
      "startsAt": "2026-04-26T01:00:00.000Z",
      "tags": [],
      "title": "GAME SHOWǃ",
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
      "description": "Come join us Saturday for Game Nightǃǃǃǃ",
      "endsAt": "2026-04-26T03:00:00.000Z",
      "featured": false,
      "id": "cal_c48eadba-8352-4364-85ba-b69447a7c510",
      "imageId": "file_292e1c3c-40b1-4665-b31f-7aa23d34dc02",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_292e1c3c-40b1-4665-b31f-7aa23d34dc02/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a0e102ee-b04d-45f7-973e-44db2d4ec65d",
      "platforms": [],
      "startsAt": "2026-04-26T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "COME drink‚ smoke and have fun playing all the gamesǃ 18＋ onlyǃ Invite your friends",
      "endsAt": "2026-04-26T03:26:00.000Z",
      "featured": false,
      "id": "cal_03cf802a-5265-45cf-96ae-8265ff2e5226",
      "imageId": "file_73fc7863-940c-40f7-98a6-5e00ab712dc2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_73fc7863-940c-40f7-98a6-5e00ab712dc2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_fcf7567e-e4c4-4f58-ba0d-76158818698c",
      "platforms": [],
      "startsAt": "2026-04-26T01:26:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Have fun with oru",
      "endsAt": "2026-04-26T06:08:00.000Z",
      "featured": false,
      "id": "cal_e167d158-ebfe-40ab-8024-0d76dd8bb911",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_111d6b67-e549-4d0b-a1a5-4fb49b02aad5",
      "platforms": [],
      "startsAt": "2026-04-26T04:08:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cum play with us you beautiful sexy creaturesǃǃ",
      "endsAt": "2026-04-26T04:06:00.000Z",
      "featured": false,
      "id": "cal_ac9d8580-af8c-4399-b049-872c909770ae",
      "imageId": "file_39fdf5df-d838-449d-9d8c-4a1ef2e8e33b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_39fdf5df-d838-449d-9d8c-4a1ef2e8e33b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e32e5e03-458e-4a80-8793-96b689453f41",
      "platforms": [],
      "startsAt": "2026-04-26T02:06:00.000Z",
      "tags": [],
      "title": "Game nightǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Have fun with oru",
      "endsAt": "2026-04-26T06:08:00.000Z",
      "featured": false,
      "id": "cal_7b903535-8398-4542-ab52-29e05ac68129",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_111d6b67-e549-4d0b-a1a5-4fb49b02aad5",
      "platforms": [],
      "startsAt": "2026-04-26T04:08:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join Sir Nicholas for a night of gaming and fun․ We play all sorts of games and genres․",
      "endsAt": "2026-04-26T03:00:00.000Z",
      "featured": false,
      "id": "cal_a1daf6f7-a481-4c84-a408-cc7dd471d9ad",
      "imageId": "file_d6901dec-a02b-4951-b319-97ce515835a9",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d6901dec-a02b-4951-b319-97ce515835a9/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_5b5653ea-a5e6-4c02-8682-bfd2fef60536",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-04-26T01:00:00.000Z",
      "tags": [
        "gaming",
        "game"
      ],
      "title": "Game Day with Sir Nicholas",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for Cards Against Humanityǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-05-09T03:50:00.000Z",
      "featured": false,
      "id": "cal_ba77fd14-c779-42fe-b4e8-f06f8d93efc5",
      "imageId": "file_1b74f379-48ae-4c3c-b6e4-809e5286e652",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1b74f379-48ae-4c3c-b6e4-809e5286e652/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-05-09T00:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey everybeanǃǃǃǃ Lets get over that mid week fatigue with a little friendly competition At or weekly game nightǃǃǃ",
      "endsAt": "2026-05-28T02:00:00.000Z",
      "featured": true,
      "id": "cal_02adf593-d2ba-451b-aeb1-3d6e01ecadb0",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-05-27T23:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "This is the meeting time for the next werewolf event․ Please try to start attending or notify anyone that you are coming late․ It wouldn't be a bad idea to bring a ＋1 wiling to play or participate․",
      "endsAt": "2026-05-03T07:00:00.000Z",
      "featured": false,
      "id": "cal_413d8c8b-f336-4f56-a301-ea8f816d6525",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_38221197-e87a-431f-a1f6-4c93f448f44d",
      "platforms": [],
      "startsAt": "2026-05-03T04:00:00.000Z",
      "tags": [],
      "title": "Next Werewolf Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game TBD",
      "endsAt": "2026-05-10T03:30:00.000Z",
      "featured": false,
      "id": "cal_fb42de04-bab3-43ee-8936-3d10f866303f",
      "imageId": "file_6ff70af2-4967-412e-bf9b-283d7c4ed06f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ff70af2-4967-412e-bf9b-283d7c4ed06f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c0f0453b-77b1-4b0d-8639-4a2d7add1ed6",
      "platforms": [],
      "startsAt": "2026-05-09T23:30:00.000Z",
      "tags": [],
      "title": "May Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Wolvengarde game night",
      "endsAt": "2026-05-16T04:00:00.000Z",
      "featured": false,
      "id": "cal_d07bbbf2-f67e-4eb2-9795-be6aa8b731d3",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a5006c9f-730e-4241-bd51-a5d3001335de",
      "platforms": [],
      "startsAt": "2026-05-16T01:00:00.000Z",
      "tags": [],
      "title": "Wolvengarde game night",
      "type": "event"
    }
  ],
  "totalCount": 81
}
```
