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
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2027-05-06T04:00:00.000Z",
      "featured": false,
      "id": "cal_470a522f-3744-43ea-89fb-ce2378c90808",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2027-05-06T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2027-05-13T04:00:00.000Z",
      "featured": false,
      "id": "cal_c56d0283-e24e-4df9-aac3-594a8d44ad1a",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2027-05-13T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-15T08:18:00.000Z",
      "featured": false,
      "id": "cal_b5e8265c-c4d6-4848-96e5-41b9358a107d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-18T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "The Oasis Game Night \nWelcome to The Oasis‚ where the competition is friendly and the vibes stay high․ Tonight is all about games‚ laughs‚ and unforgettable moments with the squad․\n\nWhether you're here to win it all‚ mess around‚ or just hang out and watch the chaos unfold‚ theres a spot for you․ From intense matches to hilarious fails‚ its all part of the fun․\n\nBring your energy‚ your best （or worst ） skills‚ and get ready for a night of good times and great company․\n\nLet the games begin․",
      "endsAt": "2027-05-02T05:00:00.000Z",
      "featured": false,
      "id": "cal_5ad6d661-3346-465a-8367-bd33fd78ab08",
      "imageId": "file_99306404-e54b-4c35-8684-3ef2acbc4357",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_99306404-e54b-4c35-8684-3ef2acbc4357/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_affecc40-7ebf-4840-a24d-85cd04b6e619",
      "platforms": [],
      "startsAt": "2027-05-01T17:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Kommt gerne vorbei und macht mit uns zusammen die Welt der Spiele unsicher․",
      "endsAt": "2027-05-21T20:00:00.000Z",
      "featured": false,
      "id": "cal_ded914ba-dd1c-42b1-aae5-0532630f0d00",
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
      "startsAt": "2027-05-21T18:00:00.000Z",
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
      "description": "GAMES GAMES GAMESǃǃǃǃǃ",
      "endsAt": "2027-05-21T03:00:00.000Z",
      "featured": false,
      "id": "cal_81d46f0a-14f7-42d9-a8c1-093ca2f9dcbc",
      "imageId": "file_08db7953-f76a-4ecd-8374-2fa9633e79ff",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_08db7953-f76a-4ecd-8374-2fa9633e79ff/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_015e4b7b-34b8-4931-94b0-0078e96ba4cc",
      "platforms": [],
      "startsAt": "2027-05-20T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game days for a break",
      "endsAt": "2027-05-21T04:31:00.000Z",
      "featured": false,
      "id": "cal_6b226754-18a4-480e-93bb-76dfd307d8b9",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_cf7df6fa-5da2-4cb9-9a39-ad44809a114d",
      "platforms": [],
      "startsAt": "2027-05-18T02:31:00.000Z",
      "tags": [],
      "title": "GAME DAYS",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game days for a break",
      "endsAt": "2027-05-07T04:31:00.000Z",
      "featured": false,
      "id": "cal_4e4c241c-2029-4d60-b8b3-c3c2f6365574",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_cf7df6fa-5da2-4cb9-9a39-ad44809a114d",
      "platforms": [],
      "startsAt": "2027-05-04T02:31:00.000Z",
      "tags": [],
      "title": "GAME DAYS",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come game with us and have fun and chill",
      "endsAt": "2027-05-02T03:00:00.000Z",
      "featured": false,
      "id": "cal_fcbd99b4-31d0-47b1-a2d1-bcd692e44e66",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3e780f19-adf0-403c-a020-42a0686323cf",
      "platforms": [],
      "startsAt": "2027-05-02T01:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Start˸ 21˸00 Uhr\n\nHeute gehts los mit Game Rush in VRChatǃ\nPräsentiert von Furryheaven‚\ndeiner deutschen Furry-Community in VRChat \n\nFreu dich auf spannende Games‚ Spaß in der Gruppe und jede Menge gute Vibes․\nKomm vorbei und zock mit unsǃ",
      "endsAt": "2027-05-25T21:59:00.000Z",
      "featured": false,
      "id": "cal_d7a71f0b-fdc0-4547-8eea-04fe1cba7ea2",
      "imageId": "file_d9a95237-c126-49f6-ba73-941da1f0797f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d9a95237-c126-49f6-ba73-941da1f0797f/1/file",
      "isDraft": false,
      "languages": [
        "deu"
      ],
      "ownerId": "grp_537413d2-1d27-4fa1-aa80-b85a0f09d0eb",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-25T19:00:00.000Z",
      "tags": [
        "Game",
        "deutsch",
        "Furry"
      ],
      "title": "Game Rush",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come join up your sɛxy creaturesǃǃ First game of the night spooky em upǃǃ",
      "endsAt": "2027-05-22T02:48:00.000Z",
      "featured": false,
      "id": "cal_828ad322-7f46-44b7-bdfa-d69af93d0ea6",
      "imageId": "file_dd53daa0-af09-48e0-aacb-32dcb5da7dea",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_dd53daa0-af09-48e0-aacb-32dcb5da7dea/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e32e5e03-458e-4a80-8793-96b689453f41",
      "platforms": [],
      "startsAt": "2027-05-22T00:48:00.000Z",
      "tags": [],
      "title": "Game nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "join us in this RPG game world where we fight boss and other things its called ECLIPTICA lets beat it",
      "endsAt": "2027-05-11T10:04:00.000Z",
      "featured": false,
      "id": "cal_1fc85009-287b-448b-94b4-0d198881b0a1",
      "imageId": "file_ea3de702-f1e7-40fd-acb6-f7dd6cd6b8b9",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_ea3de702-f1e7-40fd-acb6-f7dd6cd6b8b9/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0c4097a5-f6e5-42e6-9f6f-d3df055cfa53",
      "platforms": [],
      "startsAt": "2027-05-10T00:04:00.000Z",
      "tags": [],
      "title": "game night~",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Every Friday from 9pm to midnight․ We host game nights for everyoneǃǃ It's a public 18＋ instance‚ and we hope to see you all real soonǃǃ",
      "endsAt": "2027-05-22T04:00:00.000Z",
      "featured": false,
      "id": "cal_0cbacfb4-2f0a-4876-9c33-131261c98cae",
      "imageId": "file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bf3dccf-5639-44d9-b4cb-3841dc56ade2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e790783d-243d-46f4-b9f5-2c7fa51f3a05",
      "platforms": [],
      "startsAt": "2027-05-22T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night",
      "endsAt": "2027-05-15T04:00:00.000Z",
      "featured": false,
      "id": "cal_2a760514-3500-4187-bcfb-3d4b7fa6618f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c2608749-1484-483a-909e-f15c7d2a4adf",
      "platforms": [],
      "startsAt": "2027-05-14T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "Game night⁄day",
      "endsAt": "2027-05-24T23:00:00.000Z",
      "featured": false,
      "id": "cal_1e3f5615-ec0c-4691-ace5-3688a453887e",
      "imageId": "file_2cbea45a-d525-4d4f-b808-06a2d30a5446",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2cbea45a-d525-4d4f-b808-06a2d30a5446/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3b9749f-d66a-4ec8-8401-6e69fb51b160",
      "platforms": [],
      "startsAt": "2027-05-24T21:00:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for our weekly game nightǃ",
      "endsAt": "2027-05-31T02:00:00.000Z",
      "featured": false,
      "id": "cal_bd1382ea-d174-4d18-b60f-c53004f96c7d",
      "imageId": "file_681e62ef-84e9-404d-87f5-5ef5ac5fed91",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_681e62ef-84e9-404d-87f5-5ef5ac5fed91/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d2c84992-1ffc-4479-9a6d-4853d033a892",
      "platforms": [],
      "startsAt": "2027-05-30T22:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Games and Funnnnnnnn",
      "endsAt": "2027-05-09T23:04:00.000Z",
      "featured": false,
      "id": "cal_ac07b9fb-6fa9-4842-a8a2-8728a040b5db",
      "imageId": "file_528ff2e9-c4fc-4b54-b52b-be55eb58777e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_528ff2e9-c4fc-4b54-b52b-be55eb58777e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2a192271-40ad-4ca1-844b-2eca5d205c95",
      "platforms": [],
      "startsAt": "2027-05-09T21:04:00.000Z",
      "tags": [],
      "title": "Game nightǃǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join our growing group of goobers for a night of gamesǃ We have a few go-tos‚ but with the goal of catering to as many preferences as possible‚ games are chosen during the night and constantly rotatingǃ Hope to see you thereǃ",
      "endsAt": "2027-05-23T10:00:00.000Z",
      "featured": false,
      "id": "cal_0a02e2ae-7e36-42d0-997c-0e4a8ac7cbb6",
      "imageId": "file_8991c56e-133a-43ff-aad5-4ae05764d60e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8991c56e-133a-43ff-aad5-4ae05764d60e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e620f72-f3ef-43e4-ae02-4c16041bdc64",
      "platforms": [],
      "startsAt": "2027-05-23T05:45:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come game with us and have fun and chill",
      "endsAt": "2027-05-16T03:00:00.000Z",
      "featured": false,
      "id": "cal_9bb76661-0cff-41a7-ac00-8b622c6bb013",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3e780f19-adf0-403c-a020-42a0686323cf",
      "platforms": [],
      "startsAt": "2027-05-16T01:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come game with us and have fun and chill",
      "endsAt": "2027-05-23T03:00:00.000Z",
      "featured": false,
      "id": "cal_7edb32ea-9492-478b-8200-1a0b3e4dcee8",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3e780f19-adf0-403c-a020-42a0686323cf",
      "platforms": [],
      "startsAt": "2027-05-23T01:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    }
  ],
  "totalCount": 9270
}
```
