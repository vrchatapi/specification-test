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
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-02-02T03:00:00.000Z",
      "featured": true,
      "id": "cal_09629f4e-0f7a-4fe2-8a23-2e246dec8a56",
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
      "startsAt": "2026-02-02T01:00:00.000Z",
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
      "description": "Whats good cunts come have fun I guess",
      "endsAt": "2026-02-02T03:20:00.000Z",
      "featured": false,
      "id": "cal_0d1a7ad4-dbfa-4021-8b29-cf338a398985",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f32d97ed-4652-466e-a5ba-285ef2adbc6a",
      "platforms": [],
      "startsAt": "2026-02-02T01:21:00.000Z",
      "tags": [],
      "title": "Game",
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
      "description": "Hɪ Mʏ Lɪᴛᴛʟᴇ Sʟᴇᴇᴘɪ Cʟᴏᴜᴅ's‚ I'ᴍ Hᴏsᴛɪɴɢ 18＋Gᴀᴍᴇ-Nɪɢʜᴛ Iɴsᴛᴀɴᴄᴇ‚ Jᴏɪɴ Uᴘ ＆ Iɴᴠɪᴛᴇ Yᴏᴜʀ Fʀɪᴇɴᴅ'sǃǃ Dᴏɴ'ᴛ Fᴏʀɢᴇᴛ Tᴏ Jᴏɪɴ Tʜᴇ Dɪsᴄᴏʀᴅ Sᴇʀᴠᴇʀǃǃ Iɴᴠɪᴛᴇ Yᴏᴜʀ Fʀɪᴇɴᴅ's Tᴏ Tʜᴇ Gʀᴏᴜᴘ ＆ Dɪsᴄᴏʀᴅ Sᴇʀᴠᴇʀǃǃ Tʜᴀɴᴋ Yᴏᴜ Aʟʟ Fᴏʀ Sᴜᴘᴘᴏʀᴛɪɴɢ Mᴇ≺33 \n\nDɪsᴄᴏʀᴅ Sᴇʀᴠᴇʀ˸ \nʜᴛᴛᴘs˸⁄⁄ᴅɪsᴄᴏʀᴅ․ɢɢ⁄ɢBᴠMɢʀ9MᴀH",
      "endsAt": "2026-02-19T01:30:00.000Z",
      "featured": false,
      "id": "cal_0d5ba4bc-b8ce-4c82-add9-350ac77ce115",
      "imageId": "file_f654f766-4398-4942-a350-9a4c4e6c71f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f654f766-4398-4942-a350-9a4c4e6c71f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3ee0406a-cf5a-46b2-891f-e2b2b819b268",
      "platforms": [],
      "startsAt": "2026-02-18T22:30:00.000Z",
      "tags": [],
      "title": "18＋ Gᴀᴍᴇ-Nɪɢʜᴛ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Fun games w⁄the Bossǃ Held every Thursdayǃ",
      "endsAt": "2026-02-13T07:00:00.000Z",
      "featured": false,
      "id": "cal_0fb3ae23-ab3f-40a5-8914-6b94fe12f3ee",
      "imageId": "file_0dbfa470-4866-4147-9ed3-caf3c0e0974b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0dbfa470-4866-4147-9ed3-caf3c0e0974b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1ea611c1-b3c2-4e9d-b51c-ea7bae4e49dc",
      "platforms": [],
      "startsAt": "2026-02-13T02:00:00.000Z",
      "tags": [],
      "title": "LeshiCorp Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello hello peopleǃ So‚ tonight Im gonna be hosting a casual game night‚ so anything˸ Freeze Tag‚ Murder 4‚ Color Drop‚ etc․ may even have some 18＋ games later‚ so look forward to thatǃ Hope to see you all thereǃ",
      "endsAt": "2026-02-03T05:30:00.000Z",
      "featured": false,
      "id": "cal_55d2fec6-9f56-4ade-b30f-9500ccef30ec",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_36869fa3-8745-4aff-bc45-1494612e27c3",
      "platforms": [],
      "startsAt": "2026-02-03T00:30:00.000Z",
      "tags": [],
      "title": "Casual Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Its that time agine time to eather chill‚ talk it up and hang loose‚ or cuddle with music or play a variety of games UNO‚ would you rather‚ cards against humanity‚ ect ya never know what could happen all are welcolme․ \n（18＋ verification is not required but is an adult space please treat as such thanks ）",
      "endsAt": "2026-02-02T06:59:00.000Z",
      "featured": false,
      "id": "cal_e5b3eead-0458-44a5-95f8-38cbcc8fb27d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_427e8b88-98c1-4d8d-b4ed-cfc59bb90e80",
      "platforms": [],
      "startsAt": "2026-02-02T03:00:00.000Z",
      "tags": [],
      "title": "Hangout and Game nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "It's the Miku Game Nightǃ Maybe we are playing Among Us Prison Escape or anything that has more player․ Make sure you invite your friends to the event and groupǃ \n\nThis event is for a public group feel free to join the group for updates and events updates and meet the owner of the group and play some music in the background․\n\nRules for the event\n-Do not creat if so you will be kick from the world\n-Don't crash everyone if so your permanent ban from the group․\n-Don't say rude things to everyone if so you will be kick from the group instance\n-Just have fun\n\nEvent Starts EST 8˸00PM WST 4˸00PM\nEvent Ends EST 12˸00PM WST 8˸00PM",
      "endsAt": "2026-02-15T04:00:00.000Z",
      "featured": false,
      "id": "cal_58140a79-78f0-4c90-afab-d931b91fa1cf",
      "imageId": "file_9bb6b202-7b43-4179-ad2c-d256910b8134",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bb6b202-7b43-4179-ad2c-d256910b8134/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_1fa72ff6-acef-4832-8451-84c80a7aa9b3",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-02-15T00:00:00.000Z",
      "tags": [
        "Miku",
        "Hangout",
        "Gaming",
        "Game night",
        "Hatsune Miku"
      ],
      "title": "Miku Game Nightǃ",
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
      "category": "music",
      "deletedAt": null,
      "description": "GAME ROOM",
      "endsAt": "2026-02-03T00:09:00.000Z",
      "featured": false,
      "id": "cal_84be4b58-8417-4e76-a727-406a4013fc41",
      "imageId": "file_862385a7-26a3-4396-910d-c037101a1a6d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_862385a7-26a3-4396-910d-c037101a1a6d/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_667e43cc-962d-44e7-bb9f-e40a62bf6ace",
      "platforms": [],
      "startsAt": "2026-02-01T22:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
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
    }
  ],
  "totalCount": 81
}
```
