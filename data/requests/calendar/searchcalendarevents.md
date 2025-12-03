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
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2025-12-07T03:30:00.000Z",
      "featured": true,
      "id": "cal_d9803262-ea7d-4ffd-8e85-1f0469b138f9",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [],
      "startsAt": "2025-12-07T02:30:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join the club for a fun gameǃ",
      "endsAt": "2025-12-03T22:00:00.000Z",
      "featured": false,
      "id": "cal_40ae68dc-6b28-474a-9bd5-1613297fbade",
      "imageId": "file_cbb20bb3-6a42-474c-a54f-81753ba4ef38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cbb20bb3-6a42-474c-a54f-81753ba4ef38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d879611a-95ae-45cc-b3af-19d5685aedd1",
      "platforms": [],
      "startsAt": "2025-12-03T21:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
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
      "description": "We create game Instances like˸＂Murder 4‚ Prison Escape‚ Among Us and more＂［Group Public］",
      "endsAt": "2025-12-03T22:30:00.000Z",
      "featured": false,
      "id": "cal_6b0a8054-3004-4dc3-b51d-a07ef67cb955",
      "imageId": "file_41898d2a-45e6-4a9e-929b-c2ad64832c5a",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_41898d2a-45e6-4a9e-929b-c2ad64832c5a/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_e558b8d9-8b18-4028-9e03-1c973b062a3b",
      "platforms": [],
      "startsAt": "2025-12-03T19:00:00.000Z",
      "tags": [
        "Furry",
        "Game",
        "Latex"
      ],
      "title": "Game Evening",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "We play a lot of games",
      "endsAt": "2025-12-06T03:05:00.000Z",
      "featured": false,
      "id": "cal_0f271b79-22ba-4514-b49e-684a4f0113dc",
      "imageId": "file_077da1e6-a4ce-4ab1-9861-5077702fb096",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_077da1e6-a4ce-4ab1-9861-5077702fb096/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_eaba4bab-8f06-4406-bd99-bc612546c61e",
      "platforms": [],
      "startsAt": "2025-12-06T02:05:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "description": "Gremlin․Inc daily Game nightǃ",
      "endsAt": "2025-12-03T03:00:00.000Z",
      "featured": false,
      "id": "cal_45d1b4e1-27b1-4db8-88a2-5891b9494633",
      "imageId": "file_cf250ad1-a114-4145-ae9a-37c091e7c24b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cf250ad1-a114-4145-ae9a-37c091e7c24b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_edd305cd-346e-4717-a9d2-4b4901cb5696",
      "platforms": [],
      "startsAt": "2025-12-03T00:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come Join Us For Game Night‚ Bring your friends‚ Lets all Laugh and have good time ˸3",
      "endsAt": "2025-12-12T04:45:00.000Z",
      "featured": true,
      "id": "cal_48031c7e-7b24-4b83-a73d-e6d0b663cca3",
      "imageId": "file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4718c059-c5e6-46a5-8edc-0927d6d0d844",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2025-12-12T02:00:00.000Z",
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
      "description": "Game Night",
      "endsAt": "2025-12-31T05:00:00.000Z",
      "featured": false,
      "id": "cal_94dd9557-3e9e-4679-beb2-cf7282c22e88",
      "imageId": "file_47d9cb9d-ebc1-4604-81b3-7d8de1d513dc",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_47d9cb9d-ebc1-4604-81b3-7d8de1d513dc/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_007780ea-a369-4e83-8add-c8ed572ed3dd",
      "platforms": [],
      "startsAt": "2025-12-05T03:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come Join us for a fun night Playing games․",
      "endsAt": "2025-12-05T10:00:00.000Z",
      "featured": false,
      "id": "cal_8bbb5492-3cd6-47c8-bdf2-99d3138f8c18",
      "imageId": "file_177da50b-2af9-46d1-a119-d3013ec9ab1f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_177da50b-2af9-46d1-a119-d3013ec9ab1f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ffb14d10-467c-4886-a19f-798dfeb97c54",
      "platforms": [],
      "startsAt": "2025-12-05T04:00:00.000Z",
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
      "description": "Game nights Returnǃ Cannot wait to see you all hereǃ",
      "endsAt": "2025-12-05T05:30:00.000Z",
      "featured": false,
      "id": "cal_06f764d3-f878-4670-b11d-93ba2a7e78ac",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2a894a28-d204-440c-823b-5b2c5b996388",
      "platforms": [],
      "startsAt": "2025-12-05T01:30:00.000Z",
      "tags": [],
      "title": "Game nightǃ",
      "type": "event"
    }
  ],
  "totalCount": 82
}
```
