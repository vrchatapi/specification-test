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
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Time \nmit Furryheaven\n\n Start˸ 21˸00 Uhr\n VRChat\n\nGemeinsam spielen‚ Spaß haben und gute Vibes genießen \nKomm vorbei und zock mit unsǃ",
      "endsAt": "2026-01-09T22:59:00.000Z",
      "featured": false,
      "id": "cal_371c3b00-87ef-4334-abc5-e83dc9b44cf4",
      "imageId": "file_2f991c57-13b5-4ac7-af8d-0c160d7e69d1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2f991c57-13b5-4ac7-af8d-0c160d7e69d1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_537413d2-1d27-4fa1-aa80-b85a0f09d0eb",
      "platforms": [],
      "startsAt": "2026-01-09T20:00:00.000Z",
      "tags": [],
      "title": "Game Time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Coyote club Game nightǃ",
      "endsAt": "2026-01-08T03:00:00.000Z",
      "featured": false,
      "id": "cal_379fc735-943b-4c78-b58e-db781eb8d7a6",
      "imageId": "file_71d1094b-0112-4c7a-a099-e113b95591af",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_71d1094b-0112-4c7a-a099-e113b95591af/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_539bc046-e257-4f5e-b408-db5127729fda",
      "platforms": [],
      "startsAt": "2026-01-08T01:00:00.000Z",
      "tags": [],
      "title": "Game nightǃ",
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
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-01-18T03:30:00.000Z",
      "featured": true,
      "id": "cal_072f7805-9c39-4d82-8ebf-b2e872db2fc6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-01-18T02:30:00.000Z",
      "tags": [
        "Game",
        "LGBTQ",
        "Gay"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Nights Include\n\n World Hopping （Depending On Group Choice）\n Gaming ＆ Having Fun With Friends\n Social Gathering\n Maybe Even Dancing ⁄ Club Nightsǃ\nWell Do Our Best To Keep You Updated As Special Events Come Into Playǃ",
      "endsAt": "2026-01-11T04:00:00.000Z",
      "featured": false,
      "id": "cal_9bc71835-f1d6-4098-8e1c-4721d1390689",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b8c872ad-71cd-47bd-9ec4-f36406e67349",
      "platforms": [],
      "startsAt": "2026-01-11T00:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Come help us growǃ",
      "endsAt": "2026-01-08T02:59:00.000Z",
      "featured": false,
      "id": "cal_36a260d5-13ad-4485-a492-5034a70f849a",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_8670ecf0-bd53-46f6-a8e3-235a0775801b",
      "platforms": [],
      "startsAt": "2026-01-08T01:59:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "exploration",
      "deletedAt": null,
      "description": "Enjoy btw Ill be there",
      "endsAt": "2026-01-08T06:13:00.000Z",
      "featured": false,
      "id": "cal_3e4ab067-40f0-4e62-9c3b-99ebb2a22494",
      "imageId": "file_97cea1b7-6b25-4fa6-ac76-c6672b3dbb1e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_97cea1b7-6b25-4fa6-ac76-c6672b3dbb1e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2edfef1f-21c5-46d9-88ed-927f83986bb5",
      "platforms": [],
      "startsAt": "2026-01-08T04:13:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "description": "simple game night",
      "endsAt": "2026-01-08T02:00:00.000Z",
      "featured": false,
      "id": "cal_29a3f07b-49cb-4c9e-8de7-68e3baaf05da",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_23266204-4065-42ca-b30c-fe9a84abc908",
      "platforms": [],
      "startsAt": "2026-01-07T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hi Starsǃ\n\nGet ready for a night of laughter‚ games‚ and fun - its time for another Game ＆ Hangǃ Well jump into a few VRChat game worlds for a chill night of games and good company․ \n\nOne of the games we play will be chosen by youǃ Well play whichever game ranks ＃1 in the poll‚ along with a few surprise picks․ Head over to the polls channel in the Discord to cast your vote․ \n\nIf you have any game world suggestions for this or future events‚ share them in the worlds thread in the serverǃ",
      "endsAt": "2026-01-12T01:00:00.000Z",
      "featured": false,
      "id": "cal_263725cc-0d25-4651-9711-4315ffa5da0d",
      "imageId": "file_df276aa6-97ab-45db-a4e6-a87c09c9d000",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_df276aa6-97ab-45db-a4e6-a87c09c9d000/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5e28e820-01e2-47c2-8695-3eb7d578ab22",
      "platforms": [],
      "startsAt": "2026-01-11T23:30:00.000Z",
      "tags": [],
      "title": "Game ＆ Hang",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Scheduled game event for The Professionals Club‚ be sure to come have funǃ",
      "endsAt": "2026-01-08T03:00:00.000Z",
      "featured": false,
      "id": "cal_f2aca586-5b01-49b6-8421-875c80868a17",
      "imageId": "file_cbb20bb3-6a42-474c-a54f-81753ba4ef38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cbb20bb3-6a42-474c-a54f-81753ba4ef38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d879611a-95ae-45cc-b3af-19d5685aedd1",
      "platforms": [],
      "startsAt": "2026-01-07T01:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
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
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-01-11T03:30:00.000Z",
      "featured": true,
      "id": "cal_e032ee5d-58dd-4390-98c1-ecd7493e7023",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-01-11T02:30:00.000Z",
      "tags": [
        "Game",
        "LGBTQ",
        "Gay"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We're BACKǃ Come join us for some games ＆ fun․ \n\nGonna be playing a variety of games this coming Fridayǃ",
      "endsAt": "2026-01-10T03:00:00.000Z",
      "featured": false,
      "id": "cal_e62ab583-b96f-422f-a5d8-dcc83ead993d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e5fc13b4-4736-4196-8992-c3556006f855",
      "platforms": [],
      "startsAt": "2026-01-10T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Scheduled game event for The Professionals Clubǃ Come Have funǃ",
      "endsAt": "2026-01-09T02:00:00.000Z",
      "featured": false,
      "id": "cal_3f3c5f9f-abe9-4577-ad5e-e8b7108d348b",
      "imageId": "file_cbb20bb3-6a42-474c-a54f-81753ba4ef38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_cbb20bb3-6a42-474c-a54f-81753ba4ef38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d879611a-95ae-45cc-b3af-19d5685aedd1",
      "platforms": [],
      "startsAt": "2026-01-09T01:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join us for an evening around VRChat gamesǃ Maybe you'll go and murder some friends in Murder 4‚ or race on the open seas in Jetski Rush․ Perhaps you want to chill out and catch the biggest fish in a Simple Fishing World․ Whatever it is‚ you're sure to have fun with the Furry Springs communityǃ Games are randomly chosen each week by our event hostǃ",
      "endsAt": "2026-02-01T03:00:00.000Z",
      "featured": false,
      "id": "cal_2c3cf81b-1fa3-4baf-8409-16db453e081c",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_593ee468-6ba6-4a3a-aa6e-5a7c6438aa5e",
      "platforms": [],
      "startsAt": "2026-02-01T01:30:00.000Z",
      "tags": [],
      "title": "Furry Springs Game Night",
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
      "description": "Come and get to know one another but fighting it out in a minigameǃ",
      "endsAt": "2026-01-13T02:00:00.000Z",
      "featured": false,
      "id": "cal_1e599c9a-b49b-4466-9b14-997f6816620e",
      "imageId": "file_5f92fd48-a659-444b-b4cc-d5baf593b5dd",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_5f92fd48-a659-444b-b4cc-d5baf593b5dd/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ec88e047-b462-48d2-be44-da17ec455abf",
      "platforms": [],
      "startsAt": "2026-01-12T23:00:00.000Z",
      "tags": [],
      "title": "Mini Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Waiting lobby opens˸ 20˸00\nEvent starts˸ 20˸30\n\nWhat˸ A game meetup with several fun party games․ New people are welcome to join․\n\nGames we will play˸\n GeoGuessr You will be dropped in a random location and try to guess where you are in the world․\n Trash Compactor One player controls a cannon and tries to push everyone else into the shredder․\n Prison Escape Players are divided into Guards and Prisoners․ Prisoners must escape while Guards try to stop them․\n\nWe will move between games during the event and keep things friendly and relaxed․\n\nIf you have any questions‚ contact me -≻ VRC˸ orishelle1 ⁄ Discord˸ ori_meir\nHope to see you there․",
      "endsAt": "2026-01-08T22:00:00.000Z",
      "featured": false,
      "id": "cal_defb66c3-7dd6-46d0-b93e-b991553e5b75",
      "imageId": "file_9fa4ce50-c93f-40bd-8a58-95d228b6f9c2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9fa4ce50-c93f-40bd-8a58-95d228b6f9c2/1/file",
      "isDraft": false,
      "languages": [
        "heb",
        "eng"
      ],
      "ownerId": "grp_c2baa80d-0e93-49f8-bba6-f72126358073",
      "platforms": [
        "ios",
        "android",
        "standalonewindows"
      ],
      "startsAt": "2026-01-08T18:00:00.000Z",
      "tags": [
        "Israel",
        "Games",
        "Fun"
      ],
      "title": "THURSDAY GAME MEETUP",
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
  "totalCount": 86
}
```
