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
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-02-01T23:00:00.000Z",
      "featured": true,
      "id": "cal_1cc2dbdc-c0fa-4b8d-8fd1-a7d5fea58cc0",
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
      "startsAt": "2026-02-01T21:00:00.000Z",
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
      "category": "gaming",
      "deletedAt": null,
      "description": "Tonight Ill be hosting an eventǃǃ If you can join can get on it will be appreciated but its just chill and have fun honestly- \n\nTime zones˸\nPST - 6pm-8pm\nMST - 7pm-9pm\nCST - 8pm-10pm\nEST - 9pm-11pm\nUK - 2am-4am",
      "endsAt": "2026-02-01T04:00:00.000Z",
      "featured": false,
      "id": "cal_dba831f5-4c41-4113-a3aa-d5457576cd8a",
      "imageId": "file_c28f1d91-7518-4eee-9e6d-cb18545aa67d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c28f1d91-7518-4eee-9e6d-cb18545aa67d/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e30ffb1-36e0-4f72-86ba-93cdaf41fbf8",
      "platforms": [],
      "startsAt": "2026-02-01T02:00:00.000Z",
      "tags": [],
      "title": "＋｛Game Night｝＋",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted a murder 4 game night․ please do not cheat in the gameǃ enjoy and have funǃǃ",
      "endsAt": "2026-02-01T04:30:00.000Z",
      "featured": false,
      "id": "cal_7caae02c-6fc9-4f1c-abd1-54d96c14503f",
      "imageId": "file_57cf4a37-a05b-47cb-8763-7875da2d93ca",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_57cf4a37-a05b-47cb-8763-7875da2d93ca/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-02-01T01:30:00.000Z",
      "tags": [],
      "title": "game night",
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
      "description": "trash compactor\n overseer\n prison escape\n infected",
      "endsAt": "2026-02-01T22:59:00.000Z",
      "featured": false,
      "id": "cal_420fbc64-6e95-4d10-972b-06eba673b856",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_6f479661-40cf-4859-adb2-92845ab1f458",
      "platforms": [],
      "startsAt": "2026-02-01T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Lets get over the midweek fatigue with some fun competitionǃ Its wednesday Night Game nightǃ",
      "endsAt": "2026-02-05T03:00:00.000Z",
      "featured": true,
      "id": "cal_1addc60c-1608-4791-8806-4db7ec631514",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-02-05T00:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Lets get over the midweek fatigue with some fun competitionǃ Its wednesday Night Game nightǃ",
      "endsAt": "2026-02-26T03:00:00.000Z",
      "featured": true,
      "id": "cal_91a5da25-196e-4086-b765-3fecae2e1998",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-02-26T00:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to TransPaws Game Nightǃ Every other Tuesday․ We'll have a poll for you to vote on your favorite game then we'll meet up to enjoy the community selections․",
      "endsAt": "2026-02-11T04:00:00.000Z",
      "featured": true,
      "id": "cal_3d85c349-a638-4713-97ae-6b77b767f346",
      "imageId": "file_0eb4f53a-d54b-4841-9f56-d1fb3ecd2a87",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0eb4f53a-d54b-4841-9f56-d1fb3ecd2a87/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_65e15af3-8d90-4c8e-b740-09bf71c30eff",
      "platforms": [],
      "startsAt": "2026-02-11T01:00:00.000Z",
      "tags": [],
      "title": "TransPaws Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to TransPaws Game Nightǃ Every other Tuesday․ We'll have a poll for you to vote on your favorite game then we'll meet up to enjoy the community selections․",
      "endsAt": "2026-02-25T04:00:00.000Z",
      "featured": true,
      "id": "cal_94795af0-7c3b-48a1-b37a-1f66dfaca80e",
      "imageId": "file_c0a2773b-c84b-424c-a150-e266522db7b0",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c0a2773b-c84b-424c-a150-e266522db7b0/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_65e15af3-8d90-4c8e-b740-09bf71c30eff",
      "platforms": [],
      "startsAt": "2026-02-25T01:00:00.000Z",
      "tags": [],
      "title": "TransPaws Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Horror Night With The Gang",
      "endsAt": "2026-02-05T05:00:00.000Z",
      "featured": false,
      "id": "cal_7347e1a1-0e27-4641-b6c7-5355aa8eeee9",
      "imageId": "file_9c636a69-e29f-4ba6-b274-e731d161b14b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9c636a69-e29f-4ba6-b274-e731d161b14b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3f6e1e0a-cc41-45da-912e-cd2100f82675",
      "platforms": [],
      "startsAt": "2026-02-05T03:00:00.000Z",
      "tags": [],
      "title": "Horror Game Night",
      "type": "event"
    }
  ],
  "totalCount": 83
}
```
