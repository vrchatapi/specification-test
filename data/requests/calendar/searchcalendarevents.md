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
      "endsAt": "2027-05-03T03:00:00.000Z",
      "featured": true,
      "id": "cal_3c80f060-323c-4c23-b009-5dbc39c0c8ad",
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
      "startsAt": "2027-05-03T01:00:00.000Z",
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
      "endsAt": "2027-05-10T03:00:00.000Z",
      "featured": true,
      "id": "cal_cb3beaa6-b391-4530-a316-35b500e5c867",
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
      "startsAt": "2027-05-10T01:00:00.000Z",
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
      "endsAt": "2027-05-24T03:00:00.000Z",
      "featured": true,
      "id": "cal_297eb0d0-d3dc-479c-88f5-58929408d3e0",
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
      "startsAt": "2027-05-24T01:00:00.000Z",
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
      "endsAt": "2027-05-17T03:00:00.000Z",
      "featured": true,
      "id": "cal_1c782245-1889-43b1-aae9-7e62ec00db4f",
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
      "startsAt": "2027-05-17T01:00:00.000Z",
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
      "endsAt": "2027-05-31T03:00:00.000Z",
      "featured": true,
      "id": "cal_6a0aab5b-7def-4562-bb06-6bed440a6eda",
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
      "startsAt": "2027-05-31T01:00:00.000Z",
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
      "description": "Playing games",
      "endsAt": "2027-05-21T08:18:00.000Z",
      "featured": false,
      "id": "cal_b2d58638-c6af-4c33-a038-1ca4c5992ed0",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-24T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-22T08:18:00.000Z",
      "featured": false,
      "id": "cal_8688bf54-6bf9-4fca-8e0a-d390a5f40fd8",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-25T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2027-05-07T21:30:00.000Z",
      "featured": false,
      "id": "cal_6b6520c6-2649-4e3b-b5b0-006e06f96fe9",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2027-05-07T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "The Oasis Game Night \nWelcome to The Oasis‚ where the competition is friendly and the vibes stay high․ Tonight is all about games‚ laughs‚ and unforgettable moments with the squad․\n\nWhether you're here to win it all‚ mess around‚ or just hang out and watch the chaos unfold‚ theres a spot for you․ From intense matches to hilarious fails‚ its all part of the fun․\n\nBring your energy‚ your best （or worst ） skills‚ and get ready for a night of good times and great company․\n\nLet the games begin․",
      "endsAt": "2027-05-09T05:00:00.000Z",
      "featured": false,
      "id": "cal_97c1fdc4-392b-4189-9c60-a4f716fd4c4c",
      "imageId": "file_99306404-e54b-4c35-8684-3ef2acbc4357",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_99306404-e54b-4c35-8684-3ef2acbc4357/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_affecc40-7ebf-4840-a24d-85cd04b6e619",
      "platforms": [],
      "startsAt": "2027-05-08T17:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2027-05-09T03:30:00.000Z",
      "featured": true,
      "id": "cal_f3798766-991a-4a50-beb6-cfcf2392b616",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-09T01:30:00.000Z",
      "tags": [
        "Gaming",
        "Fun",
        "LGBTQ"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join our growing group of goobers for a night of gamesǃ We have a few go-tos‚ but with the goal of catering to as many preferences as possible‚ games are chosen during the night and constantly rotatingǃ Hope to see you thereǃ",
      "endsAt": "2027-05-09T10:00:00.000Z",
      "featured": false,
      "id": "cal_403b1d84-066b-487d-99ee-cda3b97f2d05",
      "imageId": "file_8991c56e-133a-43ff-aad5-4ae05764d60e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8991c56e-133a-43ff-aad5-4ae05764d60e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e620f72-f3ef-43e4-ae02-4c16041bdc64",
      "platforms": [],
      "startsAt": "2027-05-09T05:45:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come play some games with us while we try to bring our group back to life",
      "endsAt": "2027-05-10T04:00:00.000Z",
      "featured": false,
      "id": "cal_d459f32f-6db9-438a-8ee1-ada6afecff06",
      "imageId": "file_b8eba687-fdc2-470b-92dc-244cd4799203",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_b8eba687-fdc2-470b-92dc-244cd4799203/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_36e7d48a-13a8-4016-ac88-ca9317447aa1",
      "platforms": [],
      "startsAt": "2027-05-09T20:30:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2027-05-14T21:30:00.000Z",
      "featured": false,
      "id": "cal_12c322e9-19ba-4d25-b97c-903c5d520680",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2027-05-14T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Kommt gerne vorbei und macht mit uns zusammen die Welt der Spiele unsicher․",
      "endsAt": "2027-05-07T20:00:00.000Z",
      "featured": false,
      "id": "cal_65e38726-6b9b-4d08-b86f-8cedad98b69c",
      "imageId": "file_9606d54e-706a-496e-a473-9e177102142d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9606d54e-706a-496e-a473-9e177102142d/1/file",
      "isDraft": false,
      "languages": [
        "deu"
      ],
      "ownerId": "grp_a9143d16-e454-4b3c-8821-3ba216db5188",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-07T18:00:00.000Z",
      "tags": [
        "Games",
        "fun"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly game night with Scarlett's Vicesǃ",
      "endsAt": "2027-05-07T07:00:00.000Z",
      "featured": false,
      "id": "cal_8fd42c1b-bc05-4dec-996a-118cd22a362d",
      "imageId": "file_290a44f9-9937-476d-af6a-9cec2c8f58d4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_290a44f9-9937-476d-af6a-9cec2c8f58d4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1964dfe7-478a-44b0-9e36-76183c3d1a0a",
      "platforms": [],
      "startsAt": "2027-05-07T03:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly game night with Scarlett's Vicesǃ",
      "endsAt": "2027-05-14T07:00:00.000Z",
      "featured": false,
      "id": "cal_6db20b25-6f55-4254-920b-aea6f5b37328",
      "imageId": "file_290a44f9-9937-476d-af6a-9cec2c8f58d4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_290a44f9-9937-476d-af6a-9cec2c8f58d4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1964dfe7-478a-44b0-9e36-76183c3d1a0a",
      "platforms": [],
      "startsAt": "2027-05-14T03:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night for are Fallen Slayer⁄Demon",
      "endsAt": "2027-05-14T22:00:00.000Z",
      "featured": false,
      "id": "cal_3a2ec802-5c93-4908-9687-e315e73c7c45",
      "imageId": "file_1405e292-ef67-412c-bab2-71fbf61503ce",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1405e292-ef67-412c-bab2-71fbf61503ce/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9b213729-e7ca-4430-b6ef-d46c696d5986",
      "platforms": [],
      "startsAt": "2027-05-14T21:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come play some games with us while we try to bring our group back to life",
      "endsAt": "2027-05-24T04:00:00.000Z",
      "featured": false,
      "id": "cal_1452ebda-a5cb-460b-b8ec-7059e2427b7d",
      "imageId": "file_b8eba687-fdc2-470b-92dc-244cd4799203",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_b8eba687-fdc2-470b-92dc-244cd4799203/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_36e7d48a-13a8-4016-ac88-ca9317447aa1",
      "platforms": [],
      "startsAt": "2027-05-23T20:30:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "we vote on a game in the discord",
      "endsAt": "2027-05-26T00:31:00.000Z",
      "featured": false,
      "id": "cal_b675c784-4d1e-4ad8-acf7-29e2535626bb",
      "imageId": "file_8610607c-e9ec-49bf-b7c0-279faec11588",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8610607c-e9ec-49bf-b7c0-279faec11588/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c9bfc948-8732-4886-8612-caf718ae04ba",
      "platforms": [],
      "startsAt": "2027-05-25T23:30:00.000Z",
      "tags": [],
      "title": "game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "roleplaying",
      "deletedAt": null,
      "description": "Join us in a DND game․ First come‚ first serveǃ",
      "endsAt": "2027-05-19T02:45:00.000Z",
      "featured": false,
      "id": "cal_584f53bb-f5dd-4004-8d28-33132dd64944",
      "imageId": "file_bd007797-ff04-403d-b8d9-aae1b2a25b0f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_bd007797-ff04-403d-b8d9-aae1b2a25b0f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1be8c9e2-9f46-404b-9ea6-432c04837f0f",
      "platforms": [],
      "startsAt": "2027-05-18T21:45:00.000Z",
      "tags": [],
      "title": "DND Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Every Friday from 9pm to midnight․ We host game nights for everyoneǃǃ It's a public 18＋ instance‚ and we hope to see you all real soonǃǃ",
      "endsAt": "2027-05-29T04:00:00.000Z",
      "featured": false,
      "id": "cal_4b353205-1661-4204-8f00-c2b68ca6d1d5",
      "imageId": "file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e790783d-243d-46f4-b9f5-2c7fa51f3a05",
      "platforms": [],
      "startsAt": "2027-05-29T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Sorry for having had the wrong date set this is the right one cone and have funǃ",
      "endsAt": "2027-05-31T03:30:00.000Z",
      "featured": false,
      "id": "cal_2602ec66-b9cd-48fb-9934-7b73658050c0",
      "imageId": "file_82c5aa28-ff3a-4327-8470-8152fc8e3fc7",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_82c5aa28-ff3a-4327-8470-8152fc8e3fc7/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9466b462-4dff-4442-89af-d7dc0d397c2e",
      "platforms": [],
      "startsAt": "2027-05-29T18:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game night⁄day",
      "endsAt": "2027-05-10T23:00:00.000Z",
      "featured": false,
      "id": "cal_59ef7348-d2a2-4fce-ae76-3bf71553be6d",
      "imageId": "file_2cbea45a-d525-4d4f-b808-06a2d30a5446",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2cbea45a-d525-4d4f-b808-06a2d30a5446/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3b9749f-d66a-4ec8-8401-6e69fb51b160",
      "platforms": [],
      "startsAt": "2027-05-10T21:00:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game night⁄day",
      "endsAt": "2027-05-17T23:00:00.000Z",
      "featured": false,
      "id": "cal_20e2082f-7344-4c91-b72b-a1c59ecdcaab",
      "imageId": "file_2cbea45a-d525-4d4f-b808-06a2d30a5446",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2cbea45a-d525-4d4f-b808-06a2d30a5446/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3b9749f-d66a-4ec8-8401-6e69fb51b160",
      "platforms": [],
      "startsAt": "2027-05-17T21:00:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Sit down or stand up for some gamesǃ",
      "endsAt": "2027-05-27T01:00:00.000Z",
      "featured": false,
      "id": "cal_cf206b50-58d4-4a6f-b228-659d6f7575f4",
      "imageId": "file_f5c4c584-ce6e-4178-97a8-8902d0a93a1f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f5c4c584-ce6e-4178-97a8-8902d0a93a1f/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_bbf91ba4-9993-4e6d-8b1d-66b23582dbe9",
      "platforms": [],
      "startsAt": "2027-05-26T23:00:00.000Z",
      "tags": [
        "Games",
        "Chill",
        "Furry"
      ],
      "title": "Game Night",
      "type": "event"
    }
  ],
  "totalCount": 8096
}
```
