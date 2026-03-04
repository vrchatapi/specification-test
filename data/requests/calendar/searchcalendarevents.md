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
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․ We have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․ If you are not in the instance‚ you are not part of the equation․ Join us․",
      "endsAt": "2026-03-04T22:00:00.000Z",
      "featured": false,
      "id": "cal_041de180-359a-4897-88c6-8fd75f5ccbf2",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-03-04T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Hangout Instance 16＋",
      "endsAt": "2026-03-09T01:01:00.000Z",
      "featured": false,
      "id": "cal_2961d0f3-40bc-4af4-8b8d-d4879acca468",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c5e0ec64-f5d4-47aa-830d-a570adc4c42b",
      "platforms": [],
      "startsAt": "2026-03-08T22:00:00.000Z",
      "tags": [],
      "title": "Game Instanceǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We will be hopping to various Gaming Worlds‚ Quest users always welcomeǃ May be exposed to fishing too ;）",
      "endsAt": "2026-03-05T07:30:00.000Z",
      "featured": false,
      "id": "cal_89a2555d-9e20-4694-af2c-2ab4798cf093",
      "imageId": "file_d2ccb761-e7bc-46f1-8e25-5c4f68226910",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d2ccb761-e7bc-46f1-8e25-5c4f68226910/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0cbaba7e-f344-4d91-bb16-0ff04f92f085",
      "platforms": [],
      "startsAt": "2026-03-05T04:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "After some time our staff shall choose a game for all to play those and their friends are welcome whenever they want‚ if you wish to join and have fun we shall play and have fun together",
      "endsAt": "2026-03-05T01:00:00.000Z",
      "featured": false,
      "id": "cal_30f307b2-19c5-495d-8b88-df71bf8ca474",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee199925-2851-4213-b1b8-560652bb1cf8",
      "platforms": [],
      "startsAt": "2026-03-03T23:30:00.000Z",
      "tags": [],
      "title": "Game Day",
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
      "description": "Weekly Game Night （Game to be Announced）",
      "endsAt": "2026-03-12T04:00:00.000Z",
      "featured": false,
      "id": "cal_972da9d7-4b1a-4d01-a04c-a9d52c1bf5ab",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
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
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
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
      "description": "Furries come together to play games‚ bond‚ and make friendsǃ\nAnother weekly game night‚ hosted by Foxys159ǃ\nWe'll have a blastǃ The instances will be moderatedǃǃ\n\nMake sure to join the group for these weekly eventsǃ\nand join the Discord Serverǃ",
      "endsAt": "2026-03-05T05:00:00.000Z",
      "featured": false,
      "id": "cal_c3ec2f42-bcd0-400e-b0d7-d067a9e13857",
      "imageId": "file_35293d53-8b1c-44ae-b0e9-ed344e640019",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_35293d53-8b1c-44ae-b0e9-ed344e640019/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_27f5074f-90a4-490b-908f-2fcfcb98bb2b",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-03-05T02:00:00.000Z",
      "tags": [
        "furry",
        "game",
        "community",
        "lgbtq",
        "furries"
      ],
      "title": "FURRY GAME NIGHT",
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
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for hunted asylum 2ǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-03-23T03:30:00.000Z",
      "featured": false,
      "id": "cal_8fde9346-4840-499b-a1ca-1ce4f1fbf54f",
      "imageId": "file_87135bde-cbb2-4747-97d6-01d55b6db07c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_87135bde-cbb2-4747-97d6-01d55b6db07c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-03-23T01:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "This will be a Group＋ Instance",
      "endsAt": "2026-03-10T02:00:00.000Z",
      "featured": false,
      "id": "cal_d1062de6-7ae8-44fd-ab8a-ad5180684ac6",
      "imageId": "file_f69375fd-8cc7-4372-b332-92a89397a3a6",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f69375fd-8cc7-4372-b332-92a89397a3a6/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dba09680-35fe-4043-8ae4-4c054503da3c",
      "platforms": [],
      "startsAt": "2026-03-10T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Next game․",
      "endsAt": "2026-03-07T01:20:00.000Z",
      "featured": false,
      "id": "cal_c414c792-e600-4261-baef-7a3808f46538",
      "imageId": "file_9af5e84b-cbff-40e9-ab2d-0fb159b5aa53",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9af5e84b-cbff-40e9-ab2d-0fb159b5aa53/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f5bf8ede-d783-4de2-af33-43593f9905e2",
      "platforms": [],
      "startsAt": "2026-03-06T21:23:00.000Z",
      "tags": [],
      "title": "NEXT GAME",
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
      "description": "VRChat\nFriday marks the first of the VR Pokefurs main weekend events․ Basically˸ we gather in assorted VRChat game-worlds and have funǃ\n\nThe Game Night schedule changes weeklyǃ Be sure to check Announcements at 6PM EST for the night's schedule",
      "endsAt": "2026-03-07T05:00:00.000Z",
      "featured": false,
      "id": "cal_fa96d987-64de-4641-b22a-5a5e425d4453",
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
      "startsAt": "2026-03-07T03:00:00.000Z",
      "tags": [
        "Hangout",
        "Games",
        "Casual"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "If you want to suggest a game join the discord",
      "endsAt": "2026-03-06T02:00:00.000Z",
      "featured": false,
      "id": "cal_acde3f6c-e604-4772-ab44-b0a84679075a",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b1df6a38-6e41-4e9b-8698-b97d3d842ee1",
      "platforms": [],
      "startsAt": "2026-03-06T00:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "music",
      "deletedAt": null,
      "description": "JUMP INTO THE HOTTEST CLUB ON VRCHAT WITH STUNNING VIEWS OF OCEAN LIFE AND HIGH PERFORMANCE GAMEPLAY ＋ DJS BACK TO BACK LIVE PERFORMANCES FROM THE BEST KNOWN DJS ON VRCǃ GET WET GET WILD AND KEEP YOUR SECRETS HERE AT CLUB SIRENǃǃ IF YOU ARE A DJ HMUǃǃ DISCORD˸ FINELINE069",
      "endsAt": "2026-03-05T00:09:00.000Z",
      "featured": false,
      "id": "cal_cca2cf36-4ab5-4c61-81a0-145231ec972e",
      "imageId": "file_2e4421fa-aa0c-42e6-8b78-b1a48d5d165b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2e4421fa-aa0c-42e6-8b78-b1a48d5d165b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_667e43cc-962d-44e7-bb9f-e40a62bf6ace",
      "platforms": [],
      "startsAt": "2026-03-03T18:40:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    }
  ],
  "totalCount": 102
}
```
