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
      "description": "Come Join Us For Game Night‚ Bring your friends‚ Lets all Laugh and have good time ˸3",
      "endsAt": "2026-01-16T04:45:00.000Z",
      "featured": true,
      "id": "cal_1920f824-89c7-41e1-a5bb-92ee1d8bf80c",
      "imageId": "file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4718c059-c5e6-46a5-8edc-0927d6d0d844",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-01-16T02:00:00.000Z",
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
      "description": "Come Join Us For Game Night‚ Bring your friends‚ Lets all Laugh and have good time ˸3",
      "endsAt": "2026-01-23T04:45:00.000Z",
      "featured": true,
      "id": "cal_33cddf64-46de-40cb-a3fb-3b06155ef0e7",
      "imageId": "file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4718c059-c5e6-46a5-8edc-0927d6d0d844",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-01-23T02:00:00.000Z",
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
      "description": "Come Join Us For Game Night‚ Bring your friends‚ Lets all Laugh and have good time ˸3",
      "endsAt": "2026-01-30T04:45:00.000Z",
      "featured": true,
      "id": "cal_26afacc4-3139-46f4-8e39-92d626d6d46b",
      "imageId": "file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ccce6ca-50f8-4f81-961f-ce4a2c603ae1/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4718c059-c5e6-46a5-8edc-0927d6d0d844",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-01-30T02:00:00.000Z",
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
      "description": "Wednesday is game nightǃ Lets get over that mid week funk with a bit of friendly competitionǃ Brings your friends and lets have some funǃ （Times are in ESTǃ）",
      "endsAt": "2026-01-15T03:00:00.000Z",
      "featured": true,
      "id": "cal_834ca8b0-412b-47d5-a5f9-e72d29940779",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-01-15T00:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come join the chaos under way be sure to have fun",
      "endsAt": "2026-01-13T03:00:00.000Z",
      "featured": true,
      "id": "cal_480ce9ac-e2ac-4a03-b32f-f73f2dd22ca2",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_17aae18a-9b94-4865-93bb-2b5b9e0e14ec",
      "platforms": [],
      "startsAt": "2026-01-12T21:00:00.000Z",
      "tags": [],
      "title": "game night shenanigans",
      "type": "event"
    }
  ],
  "totalCount": 75
}
```
