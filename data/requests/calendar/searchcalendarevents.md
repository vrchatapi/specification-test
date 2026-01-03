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
      "endsAt": "2026-01-12T03:00:00.000Z",
      "featured": true,
      "id": "cal_6da1c592-eaad-4204-ac27-38bbbfee5fae",
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
      "startsAt": "2026-01-12T01:00:00.000Z",
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
      "endsAt": "2026-01-19T03:00:00.000Z",
      "featured": true,
      "id": "cal_bea21eb4-54fc-412b-831b-7c769d737e76",
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
      "startsAt": "2026-01-19T01:00:00.000Z",
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
      "endsAt": "2026-01-05T03:00:00.000Z",
      "featured": true,
      "id": "cal_1a29dcac-4f4b-4b3f-8307-56109947a03c",
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
      "startsAt": "2026-01-05T01:00:00.000Z",
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
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2026-01-04T22:00:00.000Z",
      "featured": false,
      "id": "cal_21892c21-7d4a-4584-9bd9-5749cbd88936",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-01-04T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We going a game night tomorrow night will be playing prison break and then we doing request\nRule˸no NSFW worlds no furry world or anything",
      "endsAt": "2026-01-03T22:46:00.000Z",
      "featured": false,
      "id": "cal_8df1a935-6541-4b9f-bc17-9e6a959f0ec5",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_8c7a0386-3c8c-451a-ab39-19987f64fe15",
      "platforms": [],
      "startsAt": "2026-01-03T20:46:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Presented by the AuraKingdom",
      "endsAt": "2026-01-09T03:00:00.000Z",
      "featured": false,
      "id": "cal_32c3d1b2-3f4d-413b-8a33-82dc697ab16a",
      "imageId": "file_f69375fd-8cc7-4372-b332-92a89397a3a6",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f69375fd-8cc7-4372-b332-92a89397a3a6/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dba09680-35fe-4043-8ae4-4c054503da3c",
      "platforms": [],
      "startsAt": "2026-01-09T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Games we will playǃ\nMurder 4\nBlackout\nColor drop\nAmong us\nPrison escape\nTruth or dare\nWould you rather （EXPLISITǃ）\nputt putt quest\nThe smile room\nAudience anarchy\nBreak the car\nScary Chinese fish game \nKitchen cooks\nQuick‚ drawǃ\nMikes Brick Kart Racking\nAnd finally‚\nGarden of sweet delights\n（To hangout for 5 mins until the event is overǃ）",
      "endsAt": "2026-01-05T01:00:00.000Z",
      "featured": false,
      "id": "cal_e1f2b62a-9655-416b-b087-4e60485ef58b",
      "imageId": "file_8ca87a01-2eca-4dc7-b99f-61d040e75a9f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8ca87a01-2eca-4dc7-b99f-61d040e75a9f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_194a2caf-952e-417f-b475-7777041e02ed",
      "platforms": [],
      "startsAt": "2026-01-04T22:00:00.000Z",
      "tags": [],
      "title": "GAME NIIIGGGGHHHHTTTTǃǃǃǃ",
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
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2026-01-11T22:00:00.000Z",
      "featured": false,
      "id": "cal_bd222bdf-3f4e-49ee-aa54-c1e7dce38f6c",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-01-11T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "description": "Come Join Us For Game Night‚ Bring your friends‚ Lets all Laugh and have good time ˸3",
      "endsAt": "2026-01-09T04:45:00.000Z",
      "featured": true,
      "id": "cal_afedcca8-828a-4955-8e86-bb4b2c2fda05",
      "imageId": "file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4718c059-c5e6-46a5-8edc-0927d6d0d844",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-01-09T02:00:00.000Z",
      "tags": [
        "Games",
        "Friendly"
      ],
      "title": "Game Nightǃǃ",
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
      "description": "To all my lovely members who deserve happiness and enjoyment Im going to do a game night with a bunch of different games and maybe a bunch of TF2 photos of you guys in it if youd like to be a part of that",
      "endsAt": "2026-01-06T01:40:00.000Z",
      "featured": false,
      "id": "cal_3ff29702-f0a1-4179-8664-1ef1b4c425ac",
      "imageId": "file_76479476-83db-46d1-ae69-1c7acabd0a29",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_76479476-83db-46d1-ae69-1c7acabd0a29/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5b9819b7-b55f-4b49-b231-8907523182f1",
      "platforms": [],
      "startsAt": "2026-01-05T19:05:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-01-04T03:30:00.000Z",
      "featured": true,
      "id": "cal_5e6ef2b2-4588-4ad1-8ea7-a573f5a4a4a8",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "android",
        "standalonewindows"
      ],
      "startsAt": "2026-01-04T02:30:00.000Z",
      "tags": [
        "Gaming",
        "LGTBTQ",
        "Pride"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "FurHub's weekly game night‚ held in age-verified Group＋ instances every Fridayǃ 2 hours of games are followed by karaokeǃ",
      "endsAt": "2026-01-03T03:00:00.000Z",
      "featured": false,
      "id": "cal_d6b9d302-5c97-4c89-a543-e21c21bd4514",
      "imageId": "file_f23a9eca-b487-4597-8be8-55a1714bbed2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f23a9eca-b487-4597-8be8-55a1714bbed2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3b2dc906-3dc3-4919-b5ec-819c32f63973",
      "platforms": [],
      "startsAt": "2026-01-03T01:00:00.000Z",
      "tags": [],
      "title": "FurHub Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Eventǃ\n\nRules˸\nStay SFW\nCommon sense",
      "endsAt": "2026-01-08T19:00:00.000Z",
      "featured": false,
      "id": "cal_0f0ff8c6-6244-4796-abd0-e08ccfdf06e5",
      "imageId": "file_d9aea3ca-8d01-4f5d-98fb-4521a7d23c38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d9aea3ca-8d01-4f5d-98fb-4521a7d23c38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_bd467d1f-7989-461b-9d30-10abfcc58fc2",
      "platforms": [],
      "startsAt": "2026-01-08T18:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Event",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Eventǃ\n\nRules˸\nStay SFW\nCommon sense",
      "endsAt": "2026-01-22T19:00:00.000Z",
      "featured": false,
      "id": "cal_b6a70df0-3865-43ff-9b93-731cd699d890",
      "imageId": "file_d9aea3ca-8d01-4f5d-98fb-4521a7d23c38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d9aea3ca-8d01-4f5d-98fb-4521a7d23c38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_bd467d1f-7989-461b-9d30-10abfcc58fc2",
      "platforms": [],
      "startsAt": "2026-01-22T18:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Event",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come an hang out with us at another social eventǃ \n\nSaika will be hosting another scw game nightǃ Come on over and d aee what he has plannedǃ",
      "endsAt": "2026-01-10T06:00:00.000Z",
      "featured": false,
      "id": "cal_3ad7bc44-ed66-4c9b-92c5-df7c38dde0b6",
      "imageId": "file_7d2310c8-997c-4e9f-80cb-5cdc212da1ab",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7d2310c8-997c-4e9f-80cb-5cdc212da1ab/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9ab28782-72ef-4b96-affb-4f348c3a6cdd",
      "platforms": [],
      "startsAt": "2026-01-10T04:00:00.000Z",
      "tags": [],
      "title": "Community Game Night",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Come hang out with the moderation team and delve into some amazing game worldsǃ",
      "endsAt": "2026-01-05T02:00:00.000Z",
      "featured": false,
      "id": "cal_ea712dff-168c-4d33-aefb-c284ee565f48",
      "imageId": "file_48912c34-e916-421f-a5f7-c58553457453",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_48912c34-e916-421f-a5f7-c58553457453/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_91d83c6a-54b4-4b1b-85bb-6b869a54efd8",
      "platforms": [],
      "startsAt": "2026-01-05T00:00:00.000Z",
      "tags": [],
      "title": "FTAC Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-01-04T23:00:00.000Z",
      "featured": true,
      "id": "cal_7507f024-600f-4f42-ad2c-d38bfa62bc9f",
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
      "startsAt": "2026-01-04T21:00:00.000Z",
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
      "endsAt": "2026-01-18T23:00:00.000Z",
      "featured": true,
      "id": "cal_21340186-5593-45c1-a327-ec930998d650",
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
      "startsAt": "2026-01-18T21:00:00.000Z",
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
      "description": "Lets get together and play games on Jan 3rdǃǃǃ",
      "endsAt": "2026-01-04T02:28:00.000Z",
      "featured": false,
      "id": "cal_96fb5b2c-4bb1-464a-9df5-d6c9e02b977e",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a05b33e9-8f80-4520-b4c0-f46555712ce5",
      "platforms": [],
      "startsAt": "2026-01-04T01:40:00.000Z",
      "tags": [],
      "title": "Lets game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "You voted․ You chose․ Now you must live with the consequences․ Join the Holian Society for our weekly game night‚ where we play the one game the majority decided was ＂fun․＂ For the 49％ who voted for something else‚ consider it a lesson in political science․ Let the democratically-enforced good times rollǃ",
      "endsAt": "2026-01-18T22:00:00.000Z",
      "featured": false,
      "id": "cal_9e5f2962-fc53-4893-9242-3524f6317360",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-01-18T20:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    }
  ],
  "totalCount": 72
}
```
