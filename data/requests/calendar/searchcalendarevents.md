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
      "endsAt": "2026-02-23T03:00:00.000Z",
      "featured": true,
      "id": "cal_6ac97c56-66dd-4f31-8fd7-ed73b8c6a622",
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
      "startsAt": "2026-02-23T01:00:00.000Z",
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
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-02-22T04:59:00.000Z",
      "featured": true,
      "id": "cal_2edb13db-aa4f-407f-8be0-2a206d67176e",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-02-22T02:30:00.000Z",
      "tags": [
        "vrc_event_group_fair",
        "Games",
        "Fun",
        "LGBTQ"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "My little cherry pickersǃǃ We have an epic game night starting off with \n\nDead_satan_666 running prison escape for you lovely people",
      "endsAt": "2026-02-19T08:30:00.000Z",
      "featured": false,
      "id": "cal_ae89cb66-7181-4498-9bbe-ef3805ffb3b6",
      "imageId": "file_da0f25f6-535d-4ff9-8b88-614a7ad42b2f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_da0f25f6-535d-4ff9-8b88-614a7ad42b2f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3f1fa8a0-7572-447d-997c-af9666a28199",
      "platforms": [],
      "startsAt": "2026-02-19T02:30:00.000Z",
      "tags": [],
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
      "imageId": "file_d61dd1ba-f60d-4744-b74f-8f6c834995a6",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d61dd1ba-f60d-4744-b74f-8f6c834995a6/1/file",
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
      "description": "Hang out and play games and chill with other Mega Menǃ",
      "endsAt": "2026-03-08T04:59:00.000Z",
      "featured": false,
      "id": "cal_4076fcfe-b2d6-432d-9526-d7831fb2cbff",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ce69417f-2e7e-4ae0-864f-c6f8246964a1",
      "platforms": [],
      "startsAt": "2026-03-08T02:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
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
      "description": "first member in the potasium gang to get 3 wins in Probility labs will get 1 month vrchat plus from yours truly lets have fun",
      "endsAt": "2026-02-22T05:00:00.000Z",
      "featured": false,
      "id": "cal_253146e7-d916-40f3-a87d-8b7adb45b192",
      "imageId": "file_35b233de-8fa1-4f01-b371-cff9c55350fa",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_35b233de-8fa1-4f01-b371-cff9c55350fa/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e9fb1f98-0658-4eba-9d16-495403bf129f",
      "platforms": [],
      "startsAt": "2026-02-22T03:00:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Just a couple adults having a good time playing some games",
      "endsAt": "2026-02-20T01:00:00.000Z",
      "featured": false,
      "id": "cal_008876a2-d6a5-418f-84dc-52a67e338b64",
      "imageId": "file_7d2e8e8e-7618-4f18-94f9-8a5722e4d1bc",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7d2e8e8e-7618-4f18-94f9-8a5722e4d1bc/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_93017718-ed5f-43e9-921f-bf2f1593521e",
      "platforms": [],
      "startsAt": "2026-02-19T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "cards against humanity",
      "endsAt": "2026-02-23T06:14:00.000Z",
      "featured": false,
      "id": "cal_5594e685-5212-4aba-8f15-dec9a7b6ce08",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_52b24b1d-98f1-4dd8-ac44-a8ffeccd0a93",
      "platforms": [],
      "startsAt": "2026-02-23T02:30:00.000Z",
      "tags": [],
      "title": "game night",
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
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Heute um 21 Uhr geht es weiter mit Game Timeǃ\nFreu dich auf viele spannende Spiele und jede Menge Gaming-Spaß in VRChat․\nPräsentiert von FurryHeaven deiner Furry-Community․",
      "endsAt": "2026-02-20T22:59:00.000Z",
      "featured": false,
      "id": "cal_faca864d-e7a2-4431-8db5-ac4d3ee3613a",
      "imageId": "file_2f991c57-13b5-4ac7-af8d-0c160d7e69d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2f991c57-13b5-4ac7-af8d-0c160d7e69d1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_537413d2-1d27-4fa1-aa80-b85a0f09d0eb",
      "platforms": [],
      "startsAt": "2026-02-20T20:00:00.000Z",
      "tags": [],
      "title": "Game Time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAME",
      "endsAt": "2026-02-20T03:00:00.000Z",
      "featured": false,
      "id": "cal_2b2dd171-a81e-41e6-9bce-a41c4451df2a",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_80a94439-9c81-40bc-a05e-ff39043c59c2",
      "platforms": [],
      "startsAt": "2026-02-20T02:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHTǃǃ",
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
    }
  ],
  "totalCount": 119
}
```
