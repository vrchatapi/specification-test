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
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We will meet in pinecone MMD and Luna will Show a few games and we be playing that game for a game night （voting System）",
      "endsAt": "2026-02-28T01:00:00.000Z",
      "featured": false,
      "id": "cal_f9463cae-2aad-473b-862a-48d9fd6031dc",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_31358022-eb82-492e-bded-09e2b03ed15a",
      "platforms": [],
      "startsAt": "2026-02-27T22:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We will meet in pinecone MMD and Luna will Show a few games and we be playing that game for a game night （voting System）",
      "endsAt": "2026-02-07T01:00:00.000Z",
      "featured": false,
      "id": "cal_40132901-04c2-4f94-b8af-441b8b358fd5",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_31358022-eb82-492e-bded-09e2b03ed15a",
      "platforms": [],
      "startsAt": "2026-02-06T22:00:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Join us for a night of games and funǃ Join our discord to suggest games to play for each eventǃ",
      "endsAt": "2026-02-28T04:00:00.000Z",
      "featured": false,
      "id": "cal_180cc273-b204-4fe5-b069-756cb6ce2f56",
      "imageId": "file_ddb20341-9fc5-407a-b29d-5749a4da9584",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ddb20341-9fc5-407a-b29d-5749a4da9584/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f2a0a9ae-eece-4ac6-be63-2d03a7953f19",
      "platforms": [],
      "startsAt": "2026-02-28T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Join us for a night of games and funǃ Join our discord to suggest games to play for each eventǃ",
      "endsAt": "2026-02-07T04:00:00.000Z",
      "featured": false,
      "id": "cal_523505e2-7f44-4fb3-bc04-616ee5f2e510",
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
      "endsAt": "2026-02-06T07:00:00.000Z",
      "featured": false,
      "id": "cal_b4d1084b-c957-4d42-a140-e595efd05c8f",
      "imageId": "file_c7f58eb5-7275-440d-bbe4-0eff4d30b80e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c7f58eb5-7275-440d-bbe4-0eff4d30b80e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_86387cb9-c009-4a4d-a1b3-d84b05138ad2",
      "platforms": [],
      "startsAt": "2026-02-06T03:30:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    }
  ],
  "totalCount": 94
}
```
