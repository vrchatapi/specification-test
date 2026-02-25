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
      "endsAt": "2026-03-09T03:00:00.000Z",
      "featured": true,
      "id": "cal_98a7f704-d971-4e27-b277-161b3d4e0a7c",
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
      "startsAt": "2026-03-09T01:00:00.000Z",
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
      "endsAt": "2026-03-16T03:00:00.000Z",
      "featured": true,
      "id": "cal_c403abdf-4032-4983-a5a2-04c83c4d9692",
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
      "startsAt": "2026-03-16T01:00:00.000Z",
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
      "endsAt": "2026-03-23T03:00:00.000Z",
      "featured": true,
      "id": "cal_dffee2f7-9c1b-4261-abcc-62f53d3ef55c",
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
      "startsAt": "2026-03-23T01:00:00.000Z",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Silly funny Game Night time Guysǃ Make sure you come by‚ invite your friends and lets have a fun timeǃ",
      "endsAt": "2026-02-28T03:30:00.000Z",
      "featured": false,
      "id": "cal_77164970-b538-48e2-9cea-006658d1c572",
      "imageId": "file_abf0b10a-35dd-4dfa-9d57-4130e41cce8b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_abf0b10a-35dd-4dfa-9d57-4130e41cce8b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_60dfad9e-d608-46e8-b42d-2aed74044c34",
      "platforms": [],
      "startsAt": "2026-02-28T01:30:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Heute um 21 Uhr geht es weiter mit Game Timeǃ\nFreu dich auf viele spannende Spiele und jede Menge Gaming-Spaß in VRChat․\nPräsentiert von FurryHeaven deiner Furry-Community․",
      "endsAt": "2026-02-27T22:59:00.000Z",
      "featured": false,
      "id": "cal_79b0a30c-a80f-4a97-b474-ee650c34a33a",
      "imageId": "file_2f991c57-13b5-4ac7-af8d-0c160d7e69d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2f991c57-13b5-4ac7-af8d-0c160d7e69d1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_537413d2-1d27-4fa1-aa80-b85a0f09d0eb",
      "platforms": [],
      "startsAt": "2026-02-27T20:00:00.000Z",
      "tags": [],
      "title": "Game Time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Another FURRY EVENTǃ\nExcept this one won't be your average hangout\nThis time‚ we'll be PLAYING GAMESǃǃ\n\nWhether it's Murder 4‚ Blackout‚ Prison Escape‚ Probability Labs‚ and moreǃ\nSuggesting some is also okayǃ\nInvite your friends and come playǃ\nWEDNESDAY‚ FEBRUARY 25th AT 7˸30PM CST",
      "endsAt": "2026-02-26T05:00:00.000Z",
      "featured": false,
      "id": "cal_a9b8063f-28c0-4a81-8911-310d9c6868c8",
      "imageId": "file_73459cf2-bdbc-4db1-8a29-1ae4565985a0",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_73459cf2-bdbc-4db1-8a29-1ae4565985a0/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "spa"
      ],
      "ownerId": "grp_27f5074f-90a4-490b-908f-2fcfcb98bb2b",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-02-26T01:30:00.000Z",
      "tags": [
        "furry",
        "game",
        "community",
        "gaming",
        "hangout"
      ],
      "title": "FURRY GAME NIGHT",
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
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-03-02T03:00:00.000Z",
      "featured": true,
      "id": "cal_64e3c516-bcbe-4ddc-9e23-cf30340cc2b5",
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
      "startsAt": "2026-03-02T01:00:00.000Z",
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
      "description": "Wednesday game nightǃ \n\nGame night\nCome on grab your friends\nWell whip noob ass in distant lands \n\nWear purple to show support for the Saintsǃ \n\nWere thinking shooting games and maybe murder․ \n\nWell be hosting a launch party for fish on Fridayǃ",
      "endsAt": "2026-02-26T05:00:00.000Z",
      "featured": false,
      "id": "cal_e8dcdc00-36a4-4dd4-a77a-8809ffe5285d",
      "imageId": "file_0794cb78-a2c2-403d-86aa-7b0980557059",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0794cb78-a2c2-403d-86aa-7b0980557059/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_bfa207b6-bad2-45c8-bd6d-58448bfadf4e",
      "platforms": [],
      "startsAt": "2026-02-26T02:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-03-12T04:00:00.000Z",
      "featured": false,
      "id": "cal_972da9d7-4b1a-4d01-a04c-a9d52c1bf5ab",
      "imageId": "file_47b0680f-7ab4-4e80-bf34-2a7e94bcc1d3",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_47b0680f-7ab4-4e80-bf34-2a7e94bcc1d3/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-03-12T01:30:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-03-19T04:00:00.000Z",
      "featured": false,
      "id": "cal_44c1bed7-f9ab-4535-aa0c-aaddfadc6e8f",
      "imageId": "file_735e21a4-4e9a-420f-b79d-1490e9c1de66",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_735e21a4-4e9a-420f-b79d-1490e9c1de66/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-03-19T01:30:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-03-05T05:00:00.000Z",
      "featured": false,
      "id": "cal_a21f8172-5739-4f48-b9e9-01906a630a76",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-03-05T02:30:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-03-26T04:00:00.000Z",
      "featured": false,
      "id": "cal_082214c6-f6d3-499e-bdc1-223f148c26d4",
      "imageId": "file_60a525bf-f572-4148-a139-ebe8c46815d0",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_60a525bf-f572-4148-a139-ebe8c46815d0/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-03-26T01:30:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
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
      "description": "Just to hang out and play games",
      "endsAt": "2026-02-28T03:30:00.000Z",
      "featured": false,
      "id": "cal_36d3e754-b76b-45ba-b09f-24814c2f87bb",
      "imageId": "file_70024223-8ec1-46f8-9ed1-bd33b8d6d852",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_70024223-8ec1-46f8-9ed1-bd33b8d6d852/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_6dd822eb-7c71-45b9-80a1-128c1d35864d",
      "platforms": [],
      "startsAt": "2026-02-27T23:30:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join us every Wednesday for Club Tsukimichis Weekly Game Nightǃ\n\nEach week‚ our community comes together for a fun and relaxed evening of games chosen by you․ From competitive challenges to cozy party games‚ our members vote on what we playmaking every Game Night unique and community-driven․\n\nWhether youre here to meet new people‚ enjoy some friendly competition‚ or simply hang out‚ everyone is welcome․ Bring your enthusiasm‚ cast your vote‚ and jump into the fun with us every Wednesdayǃ （Make sure to join the discord to vote․）",
      "endsAt": "2026-02-26T04:00:00.000Z",
      "featured": false,
      "id": "cal_7ec98bce-bcbb-40be-b056-bf5627356896",
      "imageId": "file_251f55d2-7d05-4a66-829a-d302534cfa63",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_251f55d2-7d05-4a66-829a-d302534cfa63/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3733860d-34f2-43d1-8757-9c93676efe71",
      "platforms": [],
      "startsAt": "2026-02-26T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․ We have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․ If you are not in the instance‚ you are not part of the equation․ Join us․",
      "endsAt": "2026-02-25T22:00:00.000Z",
      "featured": false,
      "id": "cal_4fe139c7-ed20-4c82-b32e-8cb0e1f72846",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-02-25T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Wanna head on over to Prison Escape? Grab your crew‚ make a plan‚ and lets escape in style~ 18＋ only instanceǃ",
      "endsAt": "2026-02-26T02:30:00.000Z",
      "featured": false,
      "id": "cal_f53bc402-732a-447c-b09f-40d81b37fca6",
      "imageId": "file_565f5653-14bd-4c2c-827e-d0d1a524a865",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_565f5653-14bd-4c2c-827e-d0d1a524a865/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_3be20021-f167-4fbe-b646-b452a00e65ba",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-02-25T22:30:00.000Z",
      "tags": [
        "Murdure4",
        "Gaming",
        "Game Night"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Another game nightǃ Come have fun with the Dandy communityǃ",
      "endsAt": "2026-02-28T02:30:00.000Z",
      "featured": false,
      "id": "cal_eca5fa52-623d-4610-b2ba-500550a59c99",
      "imageId": "file_a894295d-9d29-437d-8573-0234f125ab6b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a894295d-9d29-437d-8573-0234f125ab6b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_143b2f5c-53a6-46a4-9413-9a74b7610168",
      "platforms": [],
      "startsAt": "2026-02-28T01:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Try and win these games doubt you could beat anyone in the hexagon",
      "endsAt": "2026-02-26T03:00:00.000Z",
      "featured": false,
      "id": "cal_2001696d-1017-46ea-8f1f-945262dd07af",
      "imageId": "file_8495ceb0-0d97-4805-8d5b-f74aeec5bee4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8495ceb0-0d97-4805-8d5b-f74aeec5bee4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d15c9dc3-04fd-49fe-b624-b840b1166c8d",
      "platforms": [],
      "startsAt": "2026-02-26T01:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
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
      "description": "Game Nightǃ We start out with community games in our discord （discord․gg⁄vrcfemboys） before moving to VRChat worlds․",
      "endsAt": "2026-03-22T05:00:00.000Z",
      "featured": false,
      "id": "cal_75ec0c69-de7b-4b81-a5f0-b247448d0af6",
      "imageId": "file_97df2d34-8c11-4ead-ace5-e47b09312ab2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_97df2d34-8c11-4ead-ace5-e47b09312ab2/1/file",
      "isDraft": false,
      "languages": [
        "eng",
        "deu",
        "fra"
      ],
      "ownerId": "grp_e4ec4f82-c5b2-4477-8138-ef33d9bc356c",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-03-22T01:00:00.000Z",
      "tags": [
        "18＋ Child Free Event",
        "LGBTQ＋",
        "Moderated Instance"
      ],
      "title": "Game Night",
      "type": "event"
    }
  ],
  "totalCount": 113
}
```
