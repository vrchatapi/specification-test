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
      "description": "2 Hours of gaming with friendsǃ Some drinking as well․",
      "endsAt": "2025-12-13T06:00:00.000Z",
      "featured": false,
      "id": "cal_577f5367-f6b7-4393-ae85-b578a71effbb",
      "imageId": "file_06fbb2a5-296f-4f7d-b49b-efa227626dac",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_06fbb2a5-296f-4f7d-b49b-efa227626dac/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_00274557-e762-4d0c-b1b4-874ea138a98e",
      "platforms": [],
      "startsAt": "2025-12-13T04:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
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
      "category": "gaming",
      "deletedAt": null,
      "description": "just have your beans out",
      "endsAt": "2025-12-13T21:30:00.000Z",
      "featured": false,
      "id": "cal_af0aa700-bd1f-467e-9cdf-ed12a148c7db",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_70ace6ff-09ea-46b8-b1ee-ee32a7e5cbec",
      "platforms": [],
      "startsAt": "2025-12-13T19:00:00.000Z",
      "tags": [],
      "title": "game time",
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
      "description": "Join Sir Nicholas for a day of EXUBERANT Gamingǃ Whether friend‚ stranger‚ or Knight‚ all our welcome for the festivities․ Bring your competitive spirt‚ bag of doritos and mountain dew because․․․․․․ Its Gamer Timeǃ\n\n（Votes for game will be held in discord․ The discord can be found in group info tab）",
      "endsAt": "2025-12-14T01:00:00.000Z",
      "featured": false,
      "id": "cal_3b423fd2-58ef-462a-b052-344bb47ec804",
      "imageId": "file_5b924132-fd67-4886-b523-5716cd9cdaa1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_5b924132-fd67-4886-b523-5716cd9cdaa1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5b5653ea-a5e6-4c02-8682-bfd2fef60536",
      "platforms": [],
      "startsAt": "2025-12-13T22:00:00.000Z",
      "tags": [],
      "title": "Game Day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gremlin․Inc daily Game nightǃ",
      "endsAt": "2025-12-13T03:00:00.000Z",
      "featured": false,
      "id": "cal_1c9c53ce-c3f8-45d1-ad8a-0024275c990a",
      "imageId": "file_cf250ad1-a114-4145-ae9a-37c091e7c24b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cf250ad1-a114-4145-ae9a-37c091e7c24b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_edd305cd-346e-4717-a9d2-4b4901cb5696",
      "platforms": [],
      "startsAt": "2025-12-13T00:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "An Exclusive Invitation from The Red Moon Company\n\nIt is with great pleasure that The Red Moon Company invites you to an unforgettable Age-Verified Games Night an evening crafted for adults who crave excitement‚ challenge‚ and a touch of Red Moon flair․ This night is where strategy meets spontaneity‚ and where play becomes an experience all its own․\n\nStep into a world designed by our team with bold creativity and immersive energy․ Our age-verified game rooms offer a full range of interactive‚ competitive‚ and atmospheric experiences‚ creating the perfect setting for a night of connection and discovery․\n\nEvent Details˸\nDate˸ 12⁄12⁄25\nTime˸ 9˸00pm 2˸00am EST\nLocation˸ Games Age-Verified Rooms\n\nThroughout the evening‚ youll enjoy˸\n\n Access to age-verified gaming rooms featuring full-body interactive games‚ competitive challenges‚ and themed play spaces\n Live music and engaging entertainment to heighten the atmosphere\n Opportunities to connect with our team and fellow players",
      "endsAt": "2025-12-13T07:00:00.000Z",
      "featured": false,
      "id": "cal_43a3a7e8-a284-4eda-b8b4-4b56e52449ca",
      "imageId": "file_1779aa61-e19e-4964-965e-423c42b6d439",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1779aa61-e19e-4964-965e-423c42b6d439/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_73e9a583-c67d-412b-b627-b649b219af86",
      "platforms": [],
      "startsAt": "2025-12-13T02:00:00.000Z",
      "tags": [],
      "title": "~Game Night~",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We will join in a chill world for a bit then will hop into playing Murder 4 ˸）",
      "endsAt": "2025-12-13T03:00:00.000Z",
      "featured": false,
      "id": "cal_5f047225-df8f-4110-a9ba-5670f88edbed",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4c8c05b1-0ce5-476b-9389-ddf7f77079b4",
      "platforms": [],
      "startsAt": "2025-12-13T01:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃǃ",
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
    }
  ],
  "totalCount": 83
}
```
