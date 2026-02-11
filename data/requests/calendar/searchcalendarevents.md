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
      "description": "Game Nightǃ We start out with community games in our discord （discord․gg⁄vrcfemboys） before moving to VRChat worlds․",
      "endsAt": "2026-02-22T05:00:00.000Z",
      "featured": false,
      "id": "cal_766bb0dd-eb08-4249-abc4-fcaba9e2273c",
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
      "startsAt": "2026-02-22T01:00:00.000Z",
      "tags": [
        "18＋ Child Free Event",
        "LGBTQ＋",
        "Moderated Instance"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello beautifuls‚ we are back in full force with a fresh new set of staff and a new vibe․ Come and hangout with us as we start up a brand new Game Night․ Starting off with Trash Compactor followed up with Prison Escape․\nBring the good vibes‚ make friends‚ and most importantly have fun․",
      "endsAt": "2026-02-12T05:30:00.000Z",
      "featured": false,
      "id": "cal_e8a8c4fd-3305-4682-b6ef-d341719779eb",
      "imageId": "file_975f96bd-df43-4570-a24b-dccc897c4079",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_975f96bd-df43-4570-a24b-dccc897c4079/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_537d15b0-d7bb-4aa5-86ee-3097e0773e42",
      "platforms": [],
      "startsAt": "2026-02-12T03:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․ We have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․ If you are not in the instance‚ you are not part of the equation․ Join us․",
      "endsAt": "2026-02-18T22:00:00.000Z",
      "featured": false,
      "id": "cal_22d5596f-6fc5-4b61-bf25-bda40af85756",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-02-18T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "description": "Game Nightǃ\n\nWednesday‚ February 11th ＠ 8˸00 pm EST \n\nLet's play some gamesǃ We'll play Prison Escape‚ Super VR Ball‚ Outrun‚ and then end with Trash Compactorǃ We will vibe afterwards․ Look for the group instance․",
      "endsAt": "2026-02-12T05:00:00.000Z",
      "featured": false,
      "id": "cal_f54e9557-fe3a-4df9-b855-a1d41bd2ce2f",
      "imageId": "file_7247421a-0ed8-4185-a4a7-b41f7d77bc84",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7247421a-0ed8-4185-a4a7-b41f7d77bc84/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ca83e8c4-f0b6-48ce-8a52-250cbf217ebc",
      "platforms": [],
      "startsAt": "2026-02-12T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Start˸ 21˸00 Uhr\n\nHeute gehts los mit Game Rush in VRChatǃ\nPräsentiert von Furryheaven‚\ndeiner deutschen Furry-Community in VRChat \n\nFreu dich auf spannende Games‚ Spaß in der Gruppe und jede Menge gute Vibes․\nKomm vorbei und zock mit unsǃ",
      "endsAt": "2026-02-24T22:59:00.000Z",
      "featured": false,
      "id": "cal_aab4c4f3-8984-4af7-9e2d-87db92c4f559",
      "imageId": "file_4cadb4fb-4b24-433a-a842-cec49d378292",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4cadb4fb-4b24-433a-a842-cec49d378292/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_537413d2-1d27-4fa1-aa80-b85a0f09d0eb",
      "platforms": [],
      "startsAt": "2026-02-24T19:55:00.000Z",
      "tags": [],
      "title": "Game Rush",
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
      "description": "Join us for February's Game Nightǃ\nSaturday February 14‚ starting at 8pm ET․\n\nThe games we will be playing in order are˸\nTrash Compactor\nGhost\nBlackout\nGigas\nThen around 11pm ET‚ we will swap to Audience Anarchy․\n\nAs always this will be Group＋‚ so join off the group or friendsǃ",
      "endsAt": "2026-02-15T06:00:00.000Z",
      "featured": false,
      "id": "cal_0f0aa805-97c5-4c77-9c9c-e613d73a6902",
      "imageId": "file_a871df16-c4f0-4279-9de2-20aae3d746b9",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a871df16-c4f0-4279-9de2-20aae3d746b9/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_76b899ec-6850-47ca-bb66-0502d6a0b2d9",
      "platforms": [],
      "startsAt": "2026-02-15T01:00:00.000Z",
      "tags": [
        "game",
        "games",
        "gaming",
        "chill"
      ],
      "title": "RadNerds February Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Nightǃ We start out with community games in our discord （discord․gg⁄vrcfemboys） before moving to VRChat worlds․",
      "endsAt": "2026-03-08T05:00:00.000Z",
      "featured": false,
      "id": "cal_0db5fffb-8d38-475f-ba14-c585bd18cc1a",
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
      "startsAt": "2026-03-08T01:00:00.000Z",
      "tags": [
        "18＋ Child Free Event",
        "LGBTQ＋",
        "Moderated Instance"
      ],
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
      "endsAt": "2026-02-19T04:00:00.000Z",
      "featured": false,
      "id": "cal_61d71ff2-b8e5-4cd9-a8a0-cacfcd35bf74",
      "imageId": "file_251f55d2-7d05-4a66-829a-d302534cfa63",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_251f55d2-7d05-4a66-829a-d302534cfa63/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3733860d-34f2-43d1-8757-9c93676efe71",
      "platforms": [],
      "startsAt": "2026-02-19T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
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
    }
  ],
  "totalCount": 116
}
```
