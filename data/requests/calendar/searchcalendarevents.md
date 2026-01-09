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
      "category": "gaming",
      "deletedAt": null,
      "description": "I will be hosting a game night Friday tomorrow at 7pm Ik some people have different time zones but it doesnt matter they can still join․ See yall tmr at 7pm‚ have funǃ",
      "endsAt": "2026-01-10T05:00:00.000Z",
      "featured": false,
      "id": "cal_730888b9-4584-4f34-abde-17c62fc1d530",
      "imageId": "file_679a4b99-e97b-47bd-9d47-d5d12f9f86f4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_679a4b99-e97b-47bd-9d47-d5d12f9f86f4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0666b098-d9f1-4617-a3f2-9ba37d7590df",
      "platforms": [],
      "startsAt": "2026-01-10T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "category": "other",
      "deletedAt": null,
      "description": "Le Crystale Club ouvre une nouvelle instance chill ＆ gaming ǃ\nUne nouveauté du Crystale Club pensée pour se détendre‚ jouer et partager de bons moments ensemble․\nRejoins-nous pour une ambiance cool‚ du fun et du game entre passionnés",
      "endsAt": "2026-01-10T00:00:00.000Z",
      "featured": false,
      "id": "cal_3915a91a-0bbf-4a46-a1f2-0e1cd15466dc",
      "imageId": "file_f42fa2dc-99bf-4757-8cfe-bb948a4a24a4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f42fa2dc-99bf-4757-8cfe-bb948a4a24a4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d2d38ed2-cfa4-42f7-967e-0d5a8b27a7a3",
      "platforms": [],
      "startsAt": "2026-01-09T21:00:00.000Z",
      "tags": [],
      "title": "Crystale game and chill",
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
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night\n\nAmong us",
      "endsAt": "2026-01-12T04:59:00.000Z",
      "featured": false,
      "id": "cal_80279519-9f32-4587-9f01-cba30c8dce73",
      "imageId": "file_525b495b-0b77-4f98-8e2e-71b9cbe388c1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_525b495b-0b77-4f98-8e2e-71b9cbe388c1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4429ce4c-47a4-406a-8732-e9edbcaa4445",
      "platforms": [],
      "startsAt": "2026-01-12T01:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Come hangout and have some funǃ",
      "endsAt": "2026-01-15T02:02:00.000Z",
      "featured": false,
      "id": "cal_0b261435-f596-491f-baf5-4e163e49ff13",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_8670ecf0-bd53-46f6-a8e3-235a0775801b",
      "platforms": [],
      "startsAt": "2026-01-15T01:02:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join us for game nightǃ",
      "endsAt": "2026-01-09T05:00:00.000Z",
      "featured": false,
      "id": "cal_f1374f7d-56a0-46bd-956a-dc1edbb0875c",
      "imageId": "file_ba84e2d2-181e-4fe3-b487-744314932773",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ba84e2d2-181e-4fe3-b487-744314932773/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ecda0cc9-66f3-4a17-b755-d505ee281a83",
      "platforms": [],
      "startsAt": "2026-01-08T02:00:00.000Z",
      "tags": [],
      "title": "Game nightǃ",
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
    }
  ],
  "totalCount": 78
}
```
