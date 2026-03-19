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
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-04-02T04:00:00.000Z",
      "featured": false,
      "id": "cal_1dacdc99-67f0-4be9-bb5d-733bcfb41ac9",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-04-02T01:30:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
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
      "endsAt": "2026-04-06T03:00:00.000Z",
      "featured": true,
      "id": "cal_f06e8cb5-a9ac-48a7-ace1-e52fddd31624",
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
      "startsAt": "2026-04-06T01:00:00.000Z",
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
      "description": "CONGRATS TO OUR TWO REMAINING SURVIVORS ＂Bᴏɴᴋ＂ AND ＂ɳσɱεאเ＂ǃ A match that upon first glance at the layout one would think it'd be a struggle for the villagers‚ but nope‚ they managed to overcome the hurdles by utilizing the tools they were given effectivelyǃ The Vampire struggled to snatch an end game and the sole werewolf player was caught in the act almost immediately‚ not a fumble but an unlucky chance‚ still‚ it was well played by all participating players in the endǃ",
      "endsAt": "2026-03-22T07:00:00.000Z",
      "featured": false,
      "id": "cal_1ca36d31-9a3a-4041-b64e-d797520fa607",
      "imageId": "file_d7f2552f-bd54-4400-b49b-2f261177f24b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d7f2552f-bd54-4400-b49b-2f261177f24b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_38221197-e87a-431f-a1f6-4c93f448f44d",
      "platforms": [],
      "startsAt": "2026-03-22T04:00:00.000Z",
      "tags": [],
      "title": "Next Werewolf Game （＋Game RECAP）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Games we will be playing are˸\n\nGIGAS‚ Blackoutǃ Jetski Racing\n（and more in case anyone wants to recommend a game․․․）\nThen we will end everything at Quick‚ Drawǃ\n\nHope everyone has enough energy to last all throughout game night ǃǃ\nHAVE FUN",
      "endsAt": "2026-03-21T07:00:00.000Z",
      "featured": false,
      "id": "cal_279f3376-d0b1-42dd-a3d1-cdb729468f56",
      "imageId": "file_9b122cf4-c2f4-4000-a44e-99d792b740e5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9b122cf4-c2f4-4000-a44e-99d792b740e5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c42d5988-b5d6-4083-94be-1252c997c8cf",
      "platforms": [],
      "startsAt": "2026-03-21T02:30:00.000Z",
      "tags": [
        "18＋",
        "game",
        "party",
        "chill"
      ],
      "title": "GAME NIGHT ǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello and welcome to the Sunday Cookoutǃ Zaya and Cookie pulled and picked a couple of games for everyone to play each weekǃ This week we are having Snowball Showdown and Steel N Goldǃ \n\nIf you need to preload these games I would suggest doing so when ya log into VRChatǃ\nSee y'all at the Cookoutǃ",
      "endsAt": "2026-04-20T05:00:00.000Z",
      "featured": false,
      "id": "cal_85f5a29e-3512-4aa3-a223-f05dfa46f030",
      "imageId": "file_4ec02986-fa0d-469c-8e54-767387efdc27",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4ec02986-fa0d-469c-8e54-767387efdc27/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_17195da9-01a8-45ca-bbd7-6320aa90ea61",
      "platforms": [],
      "startsAt": "2026-04-20T03:30:00.000Z",
      "tags": [],
      "title": "The Cookout Game Night",
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
      "description": "Game time",
      "endsAt": "2026-03-20T01:00:00.000Z",
      "featured": false,
      "id": "cal_d8425817-4b7a-40a0-a9e3-2330360bf07f",
      "imageId": "file_1ac55315-c92a-4e90-9f04-8c6c82b113db",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1ac55315-c92a-4e90-9f04-8c6c82b113db/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_93017718-ed5f-43e9-921f-bf2f1593521e",
      "platforms": [],
      "startsAt": "2026-03-19T22:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Night March 19th",
      "endsAt": "2026-03-20T05:30:00.000Z",
      "featured": false,
      "id": "cal_a022c905-07ba-4c88-b012-f15b765719c4",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d0726c88-319a-40b9-b447-d03fd4c9244f",
      "platforms": [],
      "startsAt": "2026-03-19T14:31:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a night of fun and games․ Games planned include Prison Escape‚ Blackout‚ Spook Em Up‚ Magic Freeze Tag and moreǃ Suggestions welcomeǃ",
      "endsAt": "2026-03-25T04:00:00.000Z",
      "featured": false,
      "id": "cal_c745fb25-2ad5-4676-bde7-1dc840182305",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b6850bb0-947d-4aee-9d19-e7c2200ab573",
      "platforms": [],
      "startsAt": "2026-03-24T21:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game night instance opening soon",
      "endsAt": "2026-03-19T02:00:00.000Z",
      "featured": false,
      "id": "cal_20ef4976-f701-4058-a38a-6174ee2a2ebc",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5e4f563c-4758-4733-b61c-03f806c5fdba",
      "platforms": [],
      "startsAt": "2026-03-18T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Hang out and play games and chill with other Mega Menǃ",
      "endsAt": "2026-04-05T03:59:00.000Z",
      "featured": false,
      "id": "cal_7fa814b4-2196-4e13-8ada-b03a235211eb",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ce69417f-2e7e-4ae0-864f-c6f8246964a1",
      "platforms": [],
      "startsAt": "2026-04-05T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
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
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
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
      "description": "This Wednesday （March 18th） at 10 pm est we're gonna have hide and seek＼tag game nightǃǃ We'll start in a chill world and then hit up 'Tiny Terrors' and 'Ultimate Mini-Tagǃ'ǃ Come hang and have a good time pissing off your friends while taunting them from the shadowsǃ",
      "endsAt": "2026-03-19T04:00:00.000Z",
      "featured": false,
      "id": "cal_44c1bed7-f9ab-4535-aa0c-aaddfadc6e8f",
      "imageId": "file_6a3fae1c-3c26-4c26-a88d-c65fd1da0a4d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6a3fae1c-3c26-4c26-a88d-c65fd1da0a4d/1/file",
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
      "description": "Community Game night \nNo opti avi required\nPlease be respectful \nInstance will be group ＋\nMust be 18＋",
      "endsAt": "2026-03-28T03:00:00.000Z",
      "featured": false,
      "id": "cal_442e7ec7-11e0-4d9f-88df-7f4de93cc94b",
      "imageId": "file_10cf09df-d569-4e15-b1b2-cd1318a047f9",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_10cf09df-d569-4e15-b1b2-cd1318a047f9/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e957f17-dac7-4e5e-8523-9ef896a2c504",
      "platforms": [],
      "startsAt": "2026-03-28T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for murder 4ǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-03-22T04:01:00.000Z",
      "featured": false,
      "id": "cal_c2e45566-23f8-4d10-9833-4e057f492e56",
      "imageId": "file_76159bdb-3105-4d01-bf19-ec52b68e3759",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_76159bdb-3105-4d01-bf19-ec52b68e3759/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-03-22T00:30:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night every Sunday",
      "endsAt": "2026-03-23T01:00:00.000Z",
      "featured": false,
      "id": "cal_6051aed7-7eac-46d0-9f92-6402e74e5d41",
      "imageId": "file_e2b3bf48-51b6-46d2-896a-9068f217aaf5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e2b3bf48-51b6-46d2-896a-9068f217aaf5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_806a8e40-ed73-4bf5-8300-845c913f0f1c",
      "platforms": [],
      "startsAt": "2026-03-22T23:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    }
  ],
  "totalCount": 95
}
```
