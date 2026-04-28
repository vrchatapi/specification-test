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
      "description": "Changes weeklyǃ Vote in the discord to help us choose our gameǃ",
      "endsAt": "2026-05-22T04:00:00.000Z",
      "featured": false,
      "id": "cal_64664cef-a47f-45fd-9fef-1c7a131f1610",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1a4e8486-5ba3-4b3d-b5c1-bd464ccab315",
      "platforms": [],
      "startsAt": "2026-05-22T01:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey everybeanǃǃǃǃ Lets get over that mid week fatigue with a little friendly competition At or weekly game nightǃǃǃ",
      "endsAt": "2026-05-07T02:00:00.000Z",
      "featured": true,
      "id": "cal_b493b83e-07b0-49bb-9d41-41f154ca265d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-05-06T23:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey everybeanǃǃǃǃ Lets get over that mid week fatigue with a little friendly competition At or weekly game nightǃǃǃ",
      "endsAt": "2026-05-14T02:00:00.000Z",
      "featured": true,
      "id": "cal_48d3c08d-fa91-443a-82f2-1fc9187ff071",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-05-13T23:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey everybeanǃǃǃǃ Lets get over that mid week fatigue with a little friendly competition At or weekly game nightǃǃǃ",
      "endsAt": "2026-05-21T02:00:00.000Z",
      "featured": true,
      "id": "cal_4fc89bde-e917-4f85-a02c-8fbe79443c65",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-05-20T23:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃǃǃ",
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
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Friday night game world hoppingǃ Join us as we hop game worlds in age-verified Group＋ instances for about 2 hours‚ followed by karaokeǃ",
      "endsAt": "2026-05-02T02:00:00.000Z",
      "featured": false,
      "id": "cal_a689539e-6f37-4881-977c-f4c200664ef7",
      "imageId": "file_7baa554b-3491-4feb-badf-d142bba0b5ae",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7baa554b-3491-4feb-badf-d142bba0b5ae/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3b2dc906-3dc3-4919-b5ec-819c32f63973",
      "platforms": [],
      "startsAt": "2026-05-02T00:00:00.000Z",
      "tags": [],
      "title": "FurHub Game Night",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-05-03T03:30:00.000Z",
      "featured": true,
      "id": "cal_dbf37163-9fc2-4db4-a29e-764e7dd58ecd",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-05-03T01:30:00.000Z",
      "tags": [
        "Fun",
        "Game",
        "LGBTQ"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Changes weeklyǃ Vote in the discord to help us choose our gameǃ",
      "endsAt": "2026-05-01T04:00:00.000Z",
      "featured": false,
      "id": "cal_0249ed01-4a49-4e0e-9f36-30320c8d0883",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1a4e8486-5ba3-4b3d-b5c1-bd464ccab315",
      "platforms": [],
      "startsAt": "2026-05-01T01:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Changes weeklyǃ Vote in the discord to help us choose our gameǃ",
      "endsAt": "2026-05-08T04:00:00.000Z",
      "featured": false,
      "id": "cal_e4fcc659-3f7b-45d0-a362-a906221c1538",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1a4e8486-5ba3-4b3d-b5c1-bd464ccab315",
      "platforms": [],
      "startsAt": "2026-05-08T01:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Hey we will have a game event the game will be Prison escape until everyone gets tired of it and then we move to a difrent game it will be 18＋ game night",
      "endsAt": "2026-05-02T00:00:00.000Z",
      "featured": false,
      "id": "cal_36db1eaa-93e2-404b-a143-95fa767ad14c",
      "imageId": "file_7d806030-7e56-4908-af5d-cdfd87bf1547",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7d806030-7e56-4908-af5d-cdfd87bf1547/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b995bf25-8ba4-4f7e-a53c-0bde18c07a9f",
      "platforms": [],
      "startsAt": "2026-05-01T19:00:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "description": "gamez",
      "endsAt": "2026-05-01T01:00:00.000Z",
      "featured": false,
      "id": "cal_5b900442-0cee-49ef-a2d3-14c9755ca59c",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_80a94439-9c81-40bc-a05e-ff39043c59c2",
      "platforms": [],
      "startsAt": "2026-05-01T00:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHTǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "roleplaying",
      "deletedAt": null,
      "description": "Événement RP Squid Game\n Session RP sur VRChat⁄Jeu\n\nLa partie vas commencé\n\n Mercredi 29\n\n Ouverture de linstance ˸ 17h30\nInstance ˸ Prismics\nUne instance sera ouverte pour vous permettre de rejoindre tranquillement et choisir votre avatar avant le début․\n\n Début officiel du RP ˸ 18h00\n\n Important\n RP sérieux demandé\n Respect du règlement et des scènes RP\n Suivre les indications du staff",
      "endsAt": "2026-04-29T18:00:00.000Z",
      "featured": false,
      "id": "cal_304a06fb-e549-40bf-82c5-c4248bad776a",
      "imageId": "file_8e1ca5c2-62e8-4496-9042-c65e884faa8c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8e1ca5c2-62e8-4496-9042-c65e884faa8c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_13c228ff-692f-4cc9-b3db-4299812bdc1b",
      "platforms": [],
      "startsAt": "2026-04-29T15:30:00.000Z",
      "tags": [],
      "title": "Squid Game RP",
      "type": "event"
    }
  ],
  "totalCount": 88
}
```
