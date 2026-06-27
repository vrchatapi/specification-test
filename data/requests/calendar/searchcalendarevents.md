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
      "description": "Come join our growing group of goobers for a night of gamesǃ We have a few go-tos‚ but with the goal of catering to as many preferences as possible‚ games are chosen during the night and constantly rotatingǃ Hope to see you thereǃ",
      "endsAt": "2027-05-02T10:00:00.000Z",
      "featured": false,
      "id": "cal_757d6203-e656-4b65-aad1-dfda57f96241",
      "imageId": "file_8991c56e-133a-43ff-aad5-4ae05764d60e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8991c56e-133a-43ff-aad5-4ae05764d60e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e620f72-f3ef-43e4-ae02-4c16041bdc64",
      "platforms": [],
      "startsAt": "2027-05-02T05:45:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-08T08:18:00.000Z",
      "featured": false,
      "id": "cal_e5fbd799-6ff9-40bc-bc35-f624566b3d01",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-11T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Come join‚ meet new friends‚ and enjoy the vibesǃ Each game will be chosen by you all‚ so your picks drive the funǃ See you tonightǃ",
      "endsAt": "2027-05-06T12:00:00.000Z",
      "featured": false,
      "id": "cal_c4b49fa7-6f80-49a9-a509-bbe2112928b6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0d81bcd5-c7cb-4fc4-9f5f-fc36eb48e292",
      "platforms": [],
      "startsAt": "2027-05-06T01:00:00.000Z",
      "tags": [],
      "title": "Game Nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Tune Togethers' Game Night‚ where we play various games for a 2 hour period․\n\nYes it is 18＋‚ but not an overly lewd event‚ just a adult only place to unwind with some fun games and company․",
      "endsAt": "2027-05-07T02:00:00.000Z",
      "featured": false,
      "id": "cal_f0ab11ba-4698-4ab5-82f5-3f848762e17e",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1fc8a9c9-9be8-4ac8-9c83-d2ddd4ee7d8f",
      "platforms": [],
      "startsAt": "2027-05-07T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join for chill games and fun",
      "endsAt": "2027-05-09T03:00:00.000Z",
      "featured": false,
      "id": "cal_98ede435-e79f-488b-a8d4-925fa233916f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3e780f19-adf0-403c-a020-42a0686323cf",
      "platforms": [],
      "startsAt": "2027-05-09T01:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Just a fun night to play some gamesǃǃǃ",
      "endsAt": "2027-05-29T00:30:00.000Z",
      "featured": false,
      "id": "cal_5d13ac72-6842-4fa4-9282-8b505f1596b5",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_67345297-2c69-44e9-a887-5fbadb92ab13",
      "platforms": [],
      "startsAt": "2027-05-28T19:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Games and Funnnnnnnn",
      "endsAt": "2027-05-30T23:04:00.000Z",
      "featured": false,
      "id": "cal_342c312a-bbbc-47fe-abca-83dc0cdcbd3d",
      "imageId": "file_528ff2e9-c4fc-4b54-b52b-be55eb58777e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_528ff2e9-c4fc-4b54-b52b-be55eb58777e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2a192271-40ad-4ca1-844b-2eca5d205c95",
      "platforms": [],
      "startsAt": "2027-05-30T21:04:00.000Z",
      "tags": [],
      "title": "Game nightǃǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "GAME NIGHT FOR THE TWINALINS",
      "endsAt": "2027-05-28T04:00:00.000Z",
      "featured": false,
      "id": "cal_8aab42f3-41e0-4d7f-9b1c-87f656980dc7",
      "imageId": "file_efda8a9d-9d37-4a19-aa57-1e90e4915955",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_efda8a9d-9d37-4a19-aa57-1e90e4915955/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_fab5e889-e3da-47ef-a18c-660e9c4c0b31",
      "platforms": [],
      "startsAt": "2027-05-27T23:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for our weekly game nightǃ",
      "endsAt": "2027-05-10T02:00:00.000Z",
      "featured": false,
      "id": "cal_04c7a44d-04c3-4788-9097-76bd82240d2c",
      "imageId": "file_681e62ef-84e9-404d-87f5-5ef5ac5fed91",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_681e62ef-84e9-404d-87f5-5ef5ac5fed91/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d2c84992-1ffc-4479-9a6d-4853d033a892",
      "platforms": [],
      "startsAt": "2027-05-09T22:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to the gamming eventsǃ",
      "endsAt": "2027-05-15T04:00:00.000Z",
      "featured": false,
      "id": "cal_12fe2d04-8bba-41f1-9482-beca84b7ef1e",
      "imageId": "file_cc4122e5-0f53-47a1-a918-709669ea9551",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cc4122e5-0f53-47a1-a918-709669ea9551/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5d303ef0-3f31-47fb-91ed-4fa1245160ad",
      "platforms": [],
      "startsAt": "2027-05-15T02:00:00.000Z",
      "tags": [],
      "title": "Game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to the gamming eventsǃ",
      "endsAt": "2027-05-08T04:00:00.000Z",
      "featured": false,
      "id": "cal_ef9b8d7a-d6ae-47c7-a8c2-0bd9c0d3aa37",
      "imageId": "file_cc4122e5-0f53-47a1-a918-709669ea9551",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cc4122e5-0f53-47a1-a918-709669ea9551/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5d303ef0-3f31-47fb-91ed-4fa1245160ad",
      "platforms": [],
      "startsAt": "2027-05-08T02:00:00.000Z",
      "tags": [],
      "title": "Game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Games and Funnnnnnnn",
      "endsAt": "2027-05-02T23:04:00.000Z",
      "featured": false,
      "id": "cal_87e073fb-9f5d-4dea-9c68-0071ed1741ed",
      "imageId": "file_528ff2e9-c4fc-4b54-b52b-be55eb58777e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_528ff2e9-c4fc-4b54-b52b-be55eb58777e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2a192271-40ad-4ca1-844b-2eca5d205c95",
      "platforms": [],
      "startsAt": "2027-05-02T21:04:00.000Z",
      "tags": [],
      "title": "Game nightǃǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Games and Funnnnnnnn",
      "endsAt": "2027-05-16T23:04:00.000Z",
      "featured": false,
      "id": "cal_252cc315-e328-47fb-8155-b98bf598ea4d",
      "imageId": "file_528ff2e9-c4fc-4b54-b52b-be55eb58777e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_528ff2e9-c4fc-4b54-b52b-be55eb58777e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2a192271-40ad-4ca1-844b-2eca5d205c95",
      "platforms": [],
      "startsAt": "2027-05-16T21:04:00.000Z",
      "tags": [],
      "title": "Game nightǃǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "roleplaying",
      "deletedAt": null,
      "description": "Join us in a DND game․ First come‚ first serveǃ",
      "endsAt": "2027-05-05T02:45:00.000Z",
      "featured": false,
      "id": "cal_b772d4ee-d037-4333-b364-8a2f69b2d4f2",
      "imageId": "file_bd007797-ff04-403d-b8d9-aae1b2a25b0f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_bd007797-ff04-403d-b8d9-aae1b2a25b0f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1be8c9e2-9f46-404b-9ea6-432c04837f0f",
      "platforms": [],
      "startsAt": "2027-05-04T21:45:00.000Z",
      "tags": [],
      "title": "DND Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "roleplaying",
      "deletedAt": null,
      "description": "Join us in a DND game․ First come‚ first serveǃ",
      "endsAt": "2027-05-26T02:45:00.000Z",
      "featured": false,
      "id": "cal_69090b46-3805-4da8-bde5-12bbf388f0b0",
      "imageId": "file_bd007797-ff04-403d-b8d9-aae1b2a25b0f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_bd007797-ff04-403d-b8d9-aae1b2a25b0f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1be8c9e2-9f46-404b-9ea6-432c04837f0f",
      "platforms": [],
      "startsAt": "2027-05-25T21:45:00.000Z",
      "tags": [],
      "title": "DND Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAMES GAMES GAMESǃǃǃǃǃ",
      "endsAt": "2027-05-14T03:00:00.000Z",
      "featured": false,
      "id": "cal_f58cbcd4-9ea3-44bc-b874-2062aba67c96",
      "imageId": "file_08db7953-f76a-4ecd-8374-2fa9633e79ff",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_08db7953-f76a-4ecd-8374-2fa9633e79ff/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_015e4b7b-34b8-4931-94b0-0078e96ba4cc",
      "platforms": [],
      "startsAt": "2027-05-13T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game night⁄day",
      "endsAt": "2027-05-03T23:00:00.000Z",
      "featured": false,
      "id": "cal_c6c97b3e-d225-4993-acf6-fd5844a66ef3",
      "imageId": "file_2cbea45a-d525-4d4f-b808-06a2d30a5446",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2cbea45a-d525-4d4f-b808-06a2d30a5446/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3b9749f-d66a-4ec8-8401-6e69fb51b160",
      "platforms": [],
      "startsAt": "2027-05-03T21:00:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAME NIGHT\n\nWill make a list of what games we playǃ",
      "endsAt": "2027-05-15T21:00:00.000Z",
      "featured": false,
      "id": "cal_3b6b72cd-fc09-4aba-87e4-13943bb84245",
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
      "startsAt": "2027-05-15T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAME NIGHT\n\nWill make a list of what games we playǃ",
      "endsAt": "2027-05-29T21:00:00.000Z",
      "featured": false,
      "id": "cal_044362cf-4a09-4f98-9737-f9ed938cedb5",
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
      "startsAt": "2027-05-29T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Just a fun night to play some gamesǃǃǃ",
      "endsAt": "2027-05-24T00:30:00.000Z",
      "featured": false,
      "id": "cal_3ecaa257-6b5e-4321-b6a8-1ccadeef8508",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_67345297-2c69-44e9-a887-5fbadb92ab13",
      "platforms": [],
      "startsAt": "2027-05-23T19:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    }
  ],
  "totalCount": 7805
}
```
