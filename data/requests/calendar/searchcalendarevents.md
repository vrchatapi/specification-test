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
      "endsAt": "2025-12-15T03:00:00.000Z",
      "featured": true,
      "id": "cal_2b706ae3-9ee0-4ecb-aed1-201022b64018",
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
      "startsAt": "2025-12-15T01:00:00.000Z",
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
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2025-12-14T23:00:00.000Z",
      "featured": true,
      "id": "cal_4cb6b118-f602-4d7c-8a60-3f8f49f236ab",
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
      "startsAt": "2025-12-14T21:00:00.000Z",
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
      "description": "Join Us to Play Games",
      "endsAt": "2025-12-19T11:00:00.000Z",
      "featured": false,
      "id": "cal_b79e4db8-4056-4cc4-bbdd-790f00f47d0c",
      "imageId": "file_fe768a6d-3775-4db4-9acd-d2e11c642494",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_fe768a6d-3775-4db4-9acd-d2e11c642494/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ffb14d10-467c-4886-a19f-798dfeb97c54",
      "platforms": [],
      "startsAt": "2025-12-18T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us and play games with usǃ",
      "endsAt": "2025-12-24T00:30:00.000Z",
      "featured": false,
      "id": "cal_d003deff-0162-4a1a-a686-099f65b49e97",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_8201cd20-a2aa-4e56-bc22-8b97a9986a61",
      "platforms": [],
      "startsAt": "2025-12-23T22:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "roleplaying",
      "deletedAt": null,
      "description": "Run by me （storm） and starts at 1 pm for me \n2pm small willow spring \n1pm storm \nWe will play different game depending and what everyone is feeling",
      "endsAt": "2026-01-17T23:00:00.000Z",
      "featured": false,
      "id": "cal_ba1802b9-8541-40f3-9433-73464171e094",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ccf199b6-b0df-4f8e-b038-8f7de07c7b50",
      "platforms": [],
      "startsAt": "2026-01-17T19:00:00.000Z",
      "tags": [],
      "title": "Game day",
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
      "description": "Come joinǃ",
      "endsAt": "2025-12-14T03:00:00.000Z",
      "featured": false,
      "id": "cal_4fcd9230-126e-4a21-b4c4-a60cc86d3bab",
      "imageId": "file_9080a0ac-25aa-449e-bf64-b042cb497802",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9080a0ac-25aa-449e-bf64-b042cb497802/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3d748748-17d4-44e1-879b-3ebc80b7ea55",
      "platforms": [],
      "startsAt": "2025-12-14T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightsǃ",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Check group posts for info",
      "endsAt": "2025-12-14T07:00:00.000Z",
      "featured": false,
      "id": "cal_fb335af0-bd46-4968-af39-3604bf2f0c0c",
      "imageId": "file_a789c643-dd00-40c1-97fb-7661376a069d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a789c643-dd00-40c1-97fb-7661376a069d/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7c2e6062-bc8b-42b6-b74c-cb398a46ef4e",
      "platforms": [],
      "startsAt": "2025-12-14T03:00:00.000Z",
      "tags": [],
      "title": "Game and liquor",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Were having a game night Ill host the pre-lobby will go on a game and we will have fun․ Its a chill week for the summer break of some school",
      "endsAt": "2025-12-14T05:59:00.000Z",
      "featured": false,
      "id": "cal_b7d1f176-6030-4ad1-85d4-438ab46cf23c",
      "imageId": "file_0628def6-4d83-4533-80c7-5e46cea5a692",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0628def6-4d83-4533-80c7-5e46cea5a692/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d8180fe0-4637-423c-9bc2-4e7630821582",
      "platforms": [],
      "startsAt": "2025-12-14T02:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game chosen will be announced the night before event startsǃǃ",
      "endsAt": "2025-12-21T05:01:00.000Z",
      "featured": false,
      "id": "cal_58995a49-b4a5-437c-994c-2a57532bef7c",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c8a008cf-9c37-4cd3-8e6d-2781e10c3df0",
      "platforms": [],
      "startsAt": "2025-12-21T02:30:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2025-12-21T03:30:00.000Z",
      "featured": true,
      "id": "cal_ba6d2dfa-1877-43ea-8a67-e15121c84086",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [],
      "startsAt": "2025-12-21T02:30:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2025-12-28T22:00:00.000Z",
      "featured": false,
      "id": "cal_9940ff5c-0571-4cef-b6c0-c6026dc9ee89",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2025-12-28T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey Party Peopleǃ Today is the weekly Game Nightǃ Our amazing Community Manager will select games from our discord suggestions channelǃ If you need to preload these games I would suggest doing so when ya log into VRChatǃ Have fun and enjoyǃ",
      "endsAt": "2025-12-14T02:00:00.000Z",
      "featured": false,
      "id": "cal_bc52264c-ace4-4ae3-a632-5ae98f9f5f02",
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
      "startsAt": "2025-12-13T20:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey Party Peopleǃ Today is the weekly Game Nightǃ Our amazing Community Manager will select games from our discord suggestions channelǃ If you need to preload these games I would suggest doing so when ya log into VRChatǃ Have fun and enjoyǃ",
      "endsAt": "2025-12-28T02:00:00.000Z",
      "featured": false,
      "id": "cal_cae5f712-8d6b-4561-8585-25aba18a356b",
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
      "startsAt": "2025-12-27T20:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2025-12-14T03:30:00.000Z",
      "featured": true,
      "id": "cal_8e7f1888-e3c5-47f1-ac10-9d2f1e91026d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [],
      "startsAt": "2025-12-14T02:30:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come Join Us For Game Night‚ Bring your friends‚ Lets all Laugh and have good time ˸3",
      "endsAt": "2025-12-19T04:45:00.000Z",
      "featured": true,
      "id": "cal_6bc21df8-a3bc-42f8-a2cf-28fec670a793",
      "imageId": "file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4718c059-c5e6-46a5-8edc-0927d6d0d844",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2025-12-19T02:00:00.000Z",
      "tags": [
        "Friendly",
        "Furry",
        "Non-Furry",
        "Games"
      ],
      "title": "Game Nightǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come down and play some games for the festivalǃ",
      "endsAt": "2025-12-15T06:48:00.000Z",
      "featured": false,
      "id": "cal_a62f3c3a-b26f-4c65-8044-721bbf347117",
      "imageId": "file_661dd2c7-3865-46d8-8012-43f9b86cb4ab",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_661dd2c7-3865-46d8-8012-43f9b86cb4ab/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a372bb95-36c3-4a8b-bceb-fdfc10895546",
      "platforms": [],
      "startsAt": "2025-12-14T06:50:00.000Z",
      "tags": [],
      "title": "Game dayǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gremlin․Inc daily Game nightǃ",
      "endsAt": "2025-12-14T03:00:00.000Z",
      "featured": false,
      "id": "cal_0bc30f4a-09aa-4915-b52b-9f31d3eb38fc",
      "imageId": "file_cf250ad1-a114-4145-ae9a-37c091e7c24b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cf250ad1-a114-4145-ae9a-37c091e7c24b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_edd305cd-346e-4717-a9d2-4b4901cb5696",
      "platforms": [],
      "startsAt": "2025-12-14T00:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    }
  ],
  "totalCount": 74
}
```
