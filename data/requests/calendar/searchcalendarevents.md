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
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2025-12-14T22:00:00.000Z",
      "featured": false,
      "id": "cal_406b3f8a-9cca-4708-b789-18ca6e7f028f",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2025-12-14T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey Party Peopleǃ Today is the weekly Game Nightǃ Our amazing Community Manager will select games from our discord suggestions channelǃ If you need to preload these games I would suggest doing so when ya log into VRChatǃ Have fun and enjoyǃ",
      "endsAt": "2025-12-21T02:00:00.000Z",
      "featured": false,
      "id": "cal_74284566-32b7-4b45-98a5-b7066113aa6d",
      "imageId": "file_179e11c4-1694-46ca-8c57-a7a4bf283459",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_179e11c4-1694-46ca-8c57-a7a4bf283459/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_39040ef0-9eaa-47fd-8671-eb38c9d3851f",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2025-12-20T20:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2025-12-08T03:00:00.000Z",
      "featured": true,
      "id": "cal_e8a7dec4-4abe-421f-ac67-e38a28fea8ad",
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
      "startsAt": "2025-12-08T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2025-12-01T03:00:00.000Z",
      "featured": true,
      "id": "cal_22ce24cc-b51b-46a2-b1cc-884dbabf9016",
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
      "startsAt": "2025-12-01T01:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social"
      ],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "The game will begins don't be late",
      "endsAt": "2025-11-27T02:15:00.000Z",
      "featured": false,
      "id": "cal_494fda48-e5c0-4494-9eba-cccb8140720c",
      "imageId": "file_e702bc7d-4780-419f-a7e0-950a206e9d8b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e702bc7d-4780-419f-a7e0-950a206e9d8b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_99e49d7e-ff83-4287-8b6c-b458c8345444",
      "platforms": [],
      "startsAt": "2025-11-27T00:15:00.000Z",
      "tags": [],
      "title": "The game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Host˸ Kandi （Moderator） \n\nJoin us for some fun in VRC while we play some interactive gamesǃ \n\nFurs and Fangs is a 18＋ Group you must be atleast age verified to join our instances or server․ We are primarily a furry based group but we accept any and all communities․ Be respectful of one another and as always have funǃ\n\nIf you have any questions on our rules feel free to check out our group․ \n\n-Kandi （Moderator）",
      "endsAt": "2025-12-01T04:00:00.000Z",
      "featured": false,
      "id": "cal_12435d91-0681-455b-9f3b-a06473a97e25",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_11e7c964-2ed8-435c-8474-c3cefd5afed9",
      "platforms": [],
      "startsAt": "2025-11-30T23:00:00.000Z",
      "tags": [],
      "title": "（18＋） Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2025-12-21T22:00:00.000Z",
      "featured": false,
      "id": "cal_bc5297f6-7ca8-44d1-b611-9b2f813c6ab0",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2025-12-21T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Please join us for a Pheonix Haven Game Nightǃ Remember to follow TOS‚ our personal Group rules‚ and to be respectful of others as you have an amazingly fun time at our game night event․",
      "endsAt": "2025-12-23T03:00:00.000Z",
      "featured": true,
      "id": "cal_4b239207-d01a-4af1-ab3d-72a539ed9840",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_533aebc5-884f-4631-bb59-7559a988d2a1",
      "platforms": [],
      "startsAt": "2025-12-23T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey Party Peopleǃ Today is the weekly Game Nightǃ Our amazing Community Manager will select games from our discord suggestions channelǃ If you need to preload these games I would suggest doing so when ya log into VRChatǃ Have fun and enjoyǃ",
      "endsAt": "2025-12-07T02:00:00.000Z",
      "featured": false,
      "id": "cal_cfa8e5b1-f945-4664-94f5-ce83a310bf30",
      "imageId": "file_2ea97e49-e160-4f4d-830c-f72d9a85412e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2ea97e49-e160-4f4d-830c-f72d9a85412e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_39040ef0-9eaa-47fd-8671-eb38c9d3851f",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2025-12-06T20:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Please join us for a Pheonix Haven Game Nightǃ Remember to follow TOS‚ our personal Group rules‚ and to be respectful of others as you have an amazingly fun time at our game night event․",
      "endsAt": "2026-01-06T03:00:00.000Z",
      "featured": true,
      "id": "cal_f09ae4a4-fa49-4a7b-b124-14b46760fef6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_533aebc5-884f-4631-bb59-7559a988d2a1",
      "platforms": [],
      "startsAt": "2026-01-06T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey Party Peopleǃ Today is the weekly Game Nightǃ Our amazing Community Manager will select games from our discord suggestions channelǃ If you need to preload these games I would suggest doing so when ya log into VRChatǃ Have fun and enjoyǃ",
      "endsAt": "2026-01-04T02:00:00.000Z",
      "featured": false,
      "id": "cal_f2a19447-6592-4f0a-93cb-8504e685a4cc",
      "imageId": "file_179e11c4-1694-46ca-8c57-a7a4bf283459",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_179e11c4-1694-46ca-8c57-a7a4bf283459/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_39040ef0-9eaa-47fd-8671-eb38c9d3851f",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-01-03T20:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Please join us for a Pheonix Haven Game Nightǃ Remember to follow TOS‚ our personal Group rules‚ and to be respectful of others as you have an amazingly fun time at our game night event․",
      "endsAt": "2026-01-20T03:00:00.000Z",
      "featured": true,
      "id": "cal_e1b0060a-dd66-4b4e-917a-203da53157c3",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_533aebc5-884f-4631-bb59-7559a988d2a1",
      "platforms": [],
      "startsAt": "2026-01-20T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Jump in and enjoy a variety of fun games with friends or make some new ones along the wayǃ\nWhether youre into competitive matches‚ casual mini-games‚ or cooperative adventures‚ theres something here for everyone․ Relax‚ play‚ and share some laughs as you explore different games and build lasting memories with your fellow playersǃ",
      "endsAt": "2025-11-27T02:00:00.000Z",
      "featured": false,
      "id": "cal_aeb78141-ab0a-4b0e-9f37-bb9b62ea345d",
      "imageId": "file_6eaa9d3c-7a70-4c1e-a293-9a69b9f92814",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6eaa9d3c-7a70-4c1e-a293-9a69b9f92814/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a23e6164-0e17-4a1d-9018-7f2079183e0a",
      "platforms": [],
      "startsAt": "2025-11-27T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join in on the funǃǃ",
      "endsAt": "2025-11-27T04:30:00.000Z",
      "featured": false,
      "id": "cal_dc93de35-7903-44de-94e8-7e1d419756b6",
      "imageId": "file_e2070623-425a-4e04-94d4-8e4b91518531",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e2070623-425a-4e04-94d4-8e4b91518531/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51e6cfc7-8048-4371-9038-c31109e6c797",
      "platforms": [],
      "startsAt": "2025-11-26T22:00:00.000Z",
      "tags": [],
      "title": "Game Event",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Wednesday Night VRChat eventǃ\n\nVoting in our discord serverǃ\n\nhttps˸⁄⁄discord․gg⁄GEwP8tyrMu",
      "endsAt": "2025-11-27T04:00:00.000Z",
      "featured": false,
      "id": "cal_689c97f2-b4b4-4600-8fa4-86b9fb35f277",
      "imageId": "file_d02783f2-d5b9-4e1c-b6df-b3c6f4952f95",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d02783f2-d5b9-4e1c-b6df-b3c6f4952f95/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_09cabbcf-79d7-4075-b937-34e8a80520e3",
      "platforms": [],
      "startsAt": "2025-11-27T02:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Who win get vrc＋",
      "endsAt": "2025-12-26T02:30:00.000Z",
      "featured": false,
      "id": "cal_ee66bb17-62aa-44df-b844-235325943c88",
      "imageId": "file_9504d494-3d81-4006-83ee-925fc806de4b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9504d494-3d81-4006-83ee-925fc806de4b/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_8f809e72-5b60-44e5-a110-5243b8e98cee",
      "platforms": [
        "android",
        "standalonewindows",
        "ios"
      ],
      "startsAt": "2025-12-25T23:30:00.000Z",
      "tags": [
        "Vrc＋"
      ],
      "title": "Vrc＋ game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2025-12-07T22:00:00.000Z",
      "featured": false,
      "id": "cal_acbffd73-f634-45a3-a9e4-34e29638b7e6",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2025-12-07T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Play some Games With Usǃ Vote on Discord what to playǃ",
      "endsAt": "2025-12-04T05:01:00.000Z",
      "featured": false,
      "id": "cal_ecfd7504-e007-4109-9908-8e87abf6900f",
      "imageId": "file_ba99bd95-bd5b-4882-a7a9-09ca9d0f69b4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ba99bd95-bd5b-4882-a7a9-09ca9d0f69b4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3733860d-34f2-43d1-8757-9c93676efe71",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2025-12-03T21:00:00.000Z",
      "tags": [
        "Holidays",
        "Christmas",
        "Winter",
        "Gaming",
        "Chill"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Play some Games With Usǃ Vote on Discord what to playǃ",
      "endsAt": "2025-12-18T05:01:00.000Z",
      "featured": false,
      "id": "cal_81bbf59f-0b18-4b6e-acb3-504cceeeb4e0",
      "imageId": "file_ba99bd95-bd5b-4882-a7a9-09ca9d0f69b4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ba99bd95-bd5b-4882-a7a9-09ca9d0f69b4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3733860d-34f2-43d1-8757-9c93676efe71",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2025-12-17T21:00:00.000Z",
      "tags": [
        "Holidays",
        "Christmas",
        "Winter",
        "Gaming",
        "Chill"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Guns ＆ angel will be winning Game of the Year․ I've heard it through the grape vine and as a fan I'm quite excited․",
      "endsAt": "2025-12-12T04:59:00.000Z",
      "featured": false,
      "id": "cal_6f2822e1-0f8a-4b98-8f97-aa7887f19deb",
      "imageId": "file_0f2a558d-904a-451d-995f-623089755f80",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0f2a558d-904a-451d-995f-623089755f80/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_077d1290-bb38-41ce-986f-b6d1f3e0d959",
      "platforms": [],
      "startsAt": "2025-12-11T05:00:00.000Z",
      "tags": [],
      "title": "Winning Game of the Year․",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2025-12-07T23:00:00.000Z",
      "featured": true,
      "id": "cal_079a8cda-0372-445d-83c6-b2198dedf4e7",
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
      "startsAt": "2025-12-07T21:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social"
      ],
      "title": "EU Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2025-11-30T23:00:00.000Z",
      "featured": true,
      "id": "cal_5d27a80b-4cb2-44bc-abdb-eeca83bae17e",
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
      "startsAt": "2025-11-30T21:00:00.000Z",
      "tags": [
        "angels",
        "game",
        "games",
        "fun",
        "social"
      ],
      "title": "EU Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2025-11-30T22:00:00.000Z",
      "featured": false,
      "id": "cal_58754cc2-7786-4d1c-ab26-64b819c39525",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2025-11-30T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "gonna be hopping through a bunch of diffrent gamesǃ\nnone of these are set in stone and will be decided with the group but options range from games such as․․․․\nSalemVRC\nCards Against Humanity\nMurder 4\nJailbreak\nWould You Rather\n\nand so onǃ always open to more suggestions‚‚ hmu in the discordǃ ≺3",
      "endsAt": "2025-11-29T02:30:00.000Z",
      "featured": false,
      "id": "cal_69d43120-379d-4a2d-ad88-4d91e209d3c6",
      "imageId": "file_ed3115cb-7b74-4524-a547-a1bc3909fbac",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ed3115cb-7b74-4524-a547-a1bc3909fbac/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_562daa97-7036-4a62-bd3b-1ee4963ab84c",
      "platforms": [],
      "startsAt": "2025-11-28T21:30:00.000Z",
      "tags": [],
      "title": "game nightǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAMESSSS",
      "endsAt": "2025-11-28T03:00:00.000Z",
      "featured": false,
      "id": "cal_073024f8-b188-4ef6-9986-ae0944ee465e",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_80a94439-9c81-40bc-a05e-ff39043c59c2",
      "platforms": [],
      "startsAt": "2025-11-28T02:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHTǃǃ",
      "type": "event"
    }
  ],
  "totalCount": 77
}
```
