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
      "category": "other",
      "deletedAt": null,
      "description": "Gameshow˸ Match Game",
      "endsAt": "2026-03-22T21:00:00.000Z",
      "featured": false,
      "id": "cal_86028b29-ce74-4004-acde-759e1a112cc7",
      "imageId": "file_c09ba657-247d-472f-aa9c-acaba8dd22ee",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c09ba657-247d-472f-aa9c-acaba8dd22ee/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_af7f4cbd-7e55-4f41-bbd3-aa41bae4450b",
      "platforms": [],
      "startsAt": "2026-03-22T19:00:00.000Z",
      "tags": [],
      "title": "Match Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-02-09T03:00:00.000Z",
      "featured": true,
      "id": "cal_fc0aaf86-c479-416e-8018-5f8d7e19f90e",
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
      "startsAt": "2026-02-09T01:00:00.000Z",
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
      "description": "Come hang out and play gamesǃ Please make sure to abide the rules in the instanceǃ˸\n\n- Please be ＋18‚ these instances will be verified⁄enforced come March 26th․\n- Please make sure friends joining are in the group and⁄or discord so they are also aware of the rulesǃ\n- Consent of the other users is non-optionalǃ If you're found being a weirdo and someone asks you to stop‚ stopǃ",
      "endsAt": "2026-03-06T03:30:00.000Z",
      "featured": false,
      "id": "cal_c429310a-fe9f-45b3-b7e4-17621aec4df7",
      "imageId": "file_51c29804-1937-46e1-aab7-41f64351ebf4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_51c29804-1937-46e1-aab7-41f64351ebf4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-02-06T00:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-02-08T23:00:00.000Z",
      "featured": true,
      "id": "cal_9a14176b-bb9a-4bb5-b66b-44059ef463df",
      "imageId": "file_56bd3ee0-70e3-412e-92b1-e686350284bc",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_56bd3ee0-70e3-412e-92b1-e686350284bc/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-02-08T21:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "EU Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-02-16T03:00:00.000Z",
      "featured": true,
      "id": "cal_f7fae40f-2fb3-4072-9ce1-745221781230",
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
      "startsAt": "2026-02-16T01:00:00.000Z",
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
      "description": "Gameshow˸ Match Game",
      "endsAt": "2026-03-08T21:00:00.000Z",
      "featured": false,
      "id": "cal_a031bb6f-ed88-4d57-9669-66945258818b",
      "imageId": "file_c09ba657-247d-472f-aa9c-acaba8dd22ee",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c09ba657-247d-472f-aa9c-acaba8dd22ee/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_af7f4cbd-7e55-4f41-bbd3-aa41bae4450b",
      "platforms": [],
      "startsAt": "2026-03-08T19:00:00.000Z",
      "tags": [],
      "title": "Match Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-02-08T03:30:00.000Z",
      "featured": true,
      "id": "cal_88942eb1-0c76-4e66-8ee3-ebf6498b36ee",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "android",
        "standalonewindows"
      ],
      "startsAt": "2026-02-08T02:30:00.000Z",
      "tags": [
        "Game",
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
      "endsAt": "2026-02-22T05:00:00.000Z",
      "featured": false,
      "id": "cal_90db6b3b-33d5-4240-9cd9-b03d89545d09",
      "imageId": "file_eb975921-d967-4810-babe-cbc946f5361c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_eb975921-d967-4810-babe-cbc946f5361c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-02-22T02:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Join us for a night of games and funǃ Join our discord to suggest games to play for each eventǃ",
      "endsAt": "2026-02-14T04:00:00.000Z",
      "featured": false,
      "id": "cal_e1931b9a-a35c-4be1-80ec-b78cb3c14af3",
      "imageId": "file_ddb20341-9fc5-407a-b29d-5749a4da9584",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ddb20341-9fc5-407a-b29d-5749a4da9584/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f2a0a9ae-eece-4ac6-be63-2d03a7953f19",
      "platforms": [],
      "startsAt": "2026-02-07T00:00:00.000Z",
      "tags": [],
      "title": "Game nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join our weekly game night for some fun with the communityǃ\n\nDONT HESITATE TO INVITE YOUR FRIENDS ALONGǃǃ",
      "endsAt": "2026-02-13T07:00:00.000Z",
      "featured": false,
      "id": "cal_ed89baaa-5eb9-4cf6-a10c-ba7b96909478",
      "imageId": "file_cdd5482a-0fa7-4e74-8343-1c12f0ec5942",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cdd5482a-0fa7-4e74-8343-1c12f0ec5942/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_86387cb9-c009-4a4d-a1b3-d84b05138ad2",
      "platforms": [],
      "startsAt": "2026-02-13T03:30:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join our weekly game night for some fun with the communityǃ\n\nDONT HESITATE TO INVITE YOUR FRIENDS ALONGǃǃ",
      "endsAt": "2026-02-27T07:00:00.000Z",
      "featured": false,
      "id": "cal_ec3b7bf5-c682-4b6f-b42b-4ecea3e9dd79",
      "imageId": "file_80234f01-0afe-4fce-9fdf-88fc4f6d609f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_80234f01-0afe-4fce-9fdf-88fc4f6d609f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_86387cb9-c009-4a4d-a1b3-d84b05138ad2",
      "platforms": [],
      "startsAt": "2026-02-27T03:30:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come enjoy game night with everyone",
      "endsAt": "2026-02-04T00:16:00.000Z",
      "featured": false,
      "id": "cal_8792b4d0-98f6-4580-bdc3-4dc583c1c66e",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9a15e4bc-fcdb-4e6d-bb52-0d8355684567",
      "platforms": [],
      "startsAt": "2026-02-03T22:16:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-02-15T23:00:00.000Z",
      "featured": true,
      "id": "cal_e27525b0-da29-4555-b5ba-18c1bf5a05e5",
      "imageId": "file_56bd3ee0-70e3-412e-92b1-e686350284bc",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_56bd3ee0-70e3-412e-92b1-e686350284bc/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_f3518074-c206-4dc1-b17d-0864d46f8c98",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-02-15T21:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social",
        "vrc_event_group_fair"
      ],
      "title": "EU Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Games․ Thats it‚ very exciting ˸D\n\nJoin discord․gg⁄thrill for info on future eventsǃ",
      "endsAt": "2026-02-15T23:00:00.000Z",
      "featured": false,
      "id": "cal_5ec18add-282e-4850-bf4c-52a10729e42f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e5fc13b4-4736-4196-8992-c3556006f855",
      "platforms": [],
      "startsAt": "2026-02-15T21:00:00.000Z",
      "tags": [],
      "title": "Game Timeǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAME NIGHT",
      "endsAt": "2026-02-03T03:00:00.000Z",
      "featured": false,
      "id": "cal_b36bcd15-d8f3-4aa9-b350-a4b70fb642ad",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_512379a6-0715-4211-937b-f0623ad3bab5",
      "platforms": [],
      "startsAt": "2026-02-03T01:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to ProoxyHideout we Are a gaming and 18＋ Group",
      "endsAt": "2026-02-27T02:31:00.000Z",
      "featured": false,
      "id": "cal_ffa5fb78-8307-4d51-abcb-06c91a8476e3",
      "imageId": "file_4a5f1f57-8a2a-410b-a231-926f1ad380fd",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4a5f1f57-8a2a-410b-a231-926f1ad380fd/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e5c4dbe1-c6c9-4395-abd7-e7eb9dbffd22",
      "platforms": [],
      "startsAt": "2026-02-26T03:56:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Join us for a night of games and funǃ Join our discord to suggest games to play for each eventǃ",
      "endsAt": "2026-02-21T04:00:00.000Z",
      "featured": false,
      "id": "cal_9bf04381-d0c2-44d4-a0c9-59ff73d2d500",
      "imageId": "file_ddb20341-9fc5-407a-b29d-5749a4da9584",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ddb20341-9fc5-407a-b29d-5749a4da9584/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f2a0a9ae-eece-4ac6-be63-2d03a7953f19",
      "platforms": [],
      "startsAt": "2026-02-21T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․\nWe have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․\nIf you are not in the instance‚ you are not part of the equation․\nJoin us․",
      "endsAt": "2026-02-11T22:00:00.000Z",
      "featured": false,
      "id": "cal_bb292420-84c7-4312-bee7-c76b1c24336d",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-02-11T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello everyone․ I know and normally don't do this but it is․ Game night tonight Please join in and have fun․ It is 18 plus only․ Please feel free to join and have fun․",
      "endsAt": "2026-02-03T05:59:00.000Z",
      "featured": false,
      "id": "cal_e523bc3c-1ea3-4075-9af0-89bf4e23740d",
      "imageId": "file_1b5369ec-03c8-4c55-93d0-1b4091f60a0a",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1b5369ec-03c8-4c55-93d0-1b4091f60a0a/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_cfe71077-1e9f-438d-a110-68aeb5c24f6d",
      "platforms": [],
      "startsAt": "2026-02-03T03:59:00.000Z",
      "tags": [],
      "title": "GAme night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Fun games w⁄the Bossǃ Held every Thursdayǃ",
      "endsAt": "2026-03-06T07:00:00.000Z",
      "featured": false,
      "id": "cal_294aafdd-6ca6-439e-b7e4-15a018a71152",
      "imageId": "file_2094beb7-86f8-4103-9dc8-7a7ac7d0dc41",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2094beb7-86f8-4103-9dc8-7a7ac7d0dc41/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1ea611c1-b3c2-4e9d-b51c-ea7bae4e49dc",
      "platforms": [],
      "startsAt": "2026-03-06T02:00:00.000Z",
      "tags": [],
      "title": "LeshiCorp Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Tired of mirror dwelling?\n~Come play games and hang-out with new peopleǃǃ~\n~We will be world hopping and playing games tonightǃ~\n~We will be looking forward to anyone joining us tonightǃǃ~",
      "endsAt": "2026-03-03T05:30:00.000Z",
      "featured": false,
      "id": "cal_61e22987-c08c-49a6-aafb-0732aee4ec5b",
      "imageId": "file_0420a802-4fae-438e-bcbe-8c848d3fefea",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0420a802-4fae-438e-bcbe-8c848d3fefea/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9037ec58-3bee-4075-bfa5-afc8e970e83d",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-02-03T01:30:00.000Z",
      "tags": [
        "World Hopping",
        "18＋",
        "Games"
      ],
      "title": "~Popup Game nightǃǃ~",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Lets get over the midweek fatigue with some fun competitionǃ Its wednesday Night Game nightǃ",
      "endsAt": "2026-03-05T03:00:00.000Z",
      "featured": true,
      "id": "cal_aae5cd8a-5289-4e84-91b2-8b7c244fa056",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-03-05T00:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․\nWe have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․\nIf you are not in the instance‚ you are not part of the equation․\nJoin us․",
      "endsAt": "2026-02-04T22:00:00.000Z",
      "featured": false,
      "id": "cal_c9ff3502-abd9-4048-b688-4dbc86e4341e",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-02-04T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night․ Group＋",
      "endsAt": "2026-02-08T03:00:00.000Z",
      "featured": false,
      "id": "cal_6d506d61-26cf-4909-ae43-9de47d3caf6c",
      "imageId": "file_f69375fd-8cc7-4372-b332-92a89397a3a6",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f69375fd-8cc7-4372-b332-92a89397a3a6/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dba09680-35fe-4043-8ae4-4c054503da3c",
      "platforms": [],
      "startsAt": "2026-02-08T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello people‚ come join us on Feb 14 to celebrate Valentines Day․ We will play many games of your choice and make sure to bring a lover as we will also host parties and other events‚ also giving 5 lucky couples VRChat＋․So what are you waiting for?",
      "endsAt": "2026-02-15T00:30:00.000Z",
      "featured": false,
      "id": "cal_4023f8e7-47e3-4a3e-ae66-4057bbcb07f2",
      "imageId": "file_9ef05fbc-c88a-4467-9057-759e0ce90a91",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9ef05fbc-c88a-4467-9057-759e0ce90a91/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f8bb8ff7-7418-464f-ad6f-e084f3cb1ccf",
      "platforms": [],
      "startsAt": "2026-02-14T20:00:00.000Z",
      "tags": [],
      "title": "GAME DAYǃǃǃ",
      "type": "event"
    }
  ],
  "totalCount": 93
}
```
