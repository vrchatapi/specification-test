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
      "description": "Friday marks the first of the VR Pokefurs main weekend events․ Basically˸ we gather in assorted VRChat game-worlds and have funǃ\n\nThe Game Night schedule changes weeklyǃ Be sure to check Announcements at 6PM EST for the night's schedule",
      "endsAt": "2026-04-25T05:00:00.000Z",
      "featured": false,
      "id": "cal_f66f10a4-25b2-4083-9102-119a92906ce0",
      "imageId": "file_8b01fe68-bbe9-4653-a523-083a80baeee1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8b01fe68-bbe9-4653-a523-083a80baeee1/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_7107fc37-fd55-4f63-be75-0fb4310ae14d",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-04-25T02:00:00.000Z",
      "tags": [
        "Hangout",
        "Public",
        "Game",
        "Casual"
      ],
      "title": "Game Night",
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
      "description": "i am doing a Collab game with my friend music player aka the owner of the games so pull up",
      "endsAt": "2026-04-26T00:10:00.000Z",
      "featured": false,
      "id": "cal_ec412142-34e8-4a2e-9c02-d31bb5dd36dc",
      "imageId": "file_b2be2a8e-4372-48d3-a31d-e32e56e96c90",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_b2be2a8e-4372-48d3-a31d-e32e56e96c90/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_6d52eb4a-a585-4ef3-b9d1-e5d002a578ee",
      "platforms": [],
      "startsAt": "2026-04-25T23:10:00.000Z",
      "tags": [],
      "title": "Collab Game",
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
      "description": "Gonna play games",
      "endsAt": "2026-04-25T05:38:00.000Z",
      "featured": false,
      "id": "cal_e0fb0250-81e4-4206-8dd5-3375b290daef",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_76640c69-72d6-469f-8b2d-d31ed96a41d0",
      "platforms": [],
      "startsAt": "2026-04-25T02:30:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "description": "Quick Drawǃ",
      "endsAt": "2026-04-26T01:12:00.000Z",
      "featured": false,
      "id": "cal_d5375313-b74e-4220-9b1f-0745c96ca731",
      "imageId": "file_c42c05c2-e089-4f96-a3a3-27e1b252317d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c42c05c2-e089-4f96-a3a3-27e1b252317d/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51e839c0-9217-4c66-aef3-78127eca58ef",
      "platforms": [],
      "startsAt": "2026-04-25T23:25:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "description": "First Game Night Ever \n\nJust Enjoy The Games \n\nif see someone during Sexual stuff to someone u will be kicked or banned from the group",
      "endsAt": "2026-04-26T00:25:00.000Z",
      "featured": false,
      "id": "cal_01be5612-77f4-4ffe-acc1-ddda3c2be8c1",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_09be3b4a-7ce8-4338-b9d4-fd79a419b354",
      "platforms": [],
      "startsAt": "2026-04-25T22:45:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game nightttt where we go through a random game or gamessss",
      "endsAt": "2026-04-26T00:00:00.000Z",
      "featured": false,
      "id": "cal_3fec7732-2e8d-4ec1-bcc3-db83b3be4180",
      "imageId": "file_6d684d03-b204-4077-8340-1aba5ae84dd8",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6d684d03-b204-4077-8340-1aba5ae84dd8/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4dfbc28f-d2d1-4582-999b-bb06ea9f5e02",
      "platforms": [],
      "startsAt": "2026-04-25T22:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Crate game mixed with other games as we get bored․ Come join․ Have fun․ Feel free to offer ideas to me on games to play but remember its a group effortǃ See yall there\n\nSil",
      "endsAt": "2026-04-25T05:00:00.000Z",
      "featured": false,
      "id": "cal_1c71fbca-6487-408a-aa0c-31bee4d6c1f0",
      "imageId": "file_9b5809c5-197b-4b74-9dfc-e82ac8ddadae",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9b5809c5-197b-4b74-9dfc-e82ac8ddadae/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ef127651-b9ce-44bb-adaf-13c143fbb39e",
      "platforms": [],
      "startsAt": "2026-04-25T03:00:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "endsAt": "2026-05-02T03:50:00.000Z",
      "featured": false,
      "id": "cal_ba77fd14-c779-42fe-b4e8-f06f8d93efc5",
      "imageId": "file_1b74f379-48ae-4c3c-b6e4-809e5286e652",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1b74f379-48ae-4c3c-b6e4-809e5286e652/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-05-02T00:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    }
  ],
  "totalCount": 92
}
```
