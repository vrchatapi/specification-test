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
      "description": "Want to play games with the group? Come join us for our weekly game nightsǃ",
      "endsAt": "2027-05-17T05:00:00.000Z",
      "featured": false,
      "id": "cal_6989ee86-a275-45d3-9809-90a38eae15e1",
      "imageId": "file_88961721-2d4b-4e2b-8bf3-3b06ad44d7fa",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_88961721-2d4b-4e2b-8bf3-3b06ad44d7fa/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_849b2c44-0e55-4612-a9d9-487d337850d8",
      "platforms": [],
      "startsAt": "2027-05-17T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come chill with usǃ everyone is welcome just be sure they are 18＋ or they will be removed․ Other that that we are chill so bring on the fun and lets enjoy our time together Raiders․",
      "endsAt": "2027-05-24T07:00:00.000Z",
      "featured": false,
      "id": "cal_6e2383c8-aed4-4f36-baed-08502a9aba68",
      "imageId": "file_3b010fd9-296b-43e7-80c3-1baea747d699",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3b010fd9-296b-43e7-80c3-1baea747d699/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2076dbc4-4923-4112-9384-b5dc71b69f8b",
      "platforms": [],
      "startsAt": "2027-05-24T04:00:00.000Z",
      "tags": [],
      "title": "Game Day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come chill with usǃ everyone is welcome just be sure they are 18＋ or they will be removed․ Other that that we are chill so bring on the fun and lets enjoy our time together Raiders․",
      "endsAt": "2027-05-23T07:00:00.000Z",
      "featured": false,
      "id": "cal_e321b45e-0d36-420b-ba33-f5ea9b5bdd1e",
      "imageId": "file_3b010fd9-296b-43e7-80c3-1baea747d699",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3b010fd9-296b-43e7-80c3-1baea747d699/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2076dbc4-4923-4112-9384-b5dc71b69f8b",
      "platforms": [],
      "startsAt": "2027-05-23T04:00:00.000Z",
      "tags": [],
      "title": "Game Day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come chill with usǃ everyone is welcome just be sure they are 18＋ or they will be removed․ Other that that we are chill so bring on the fun and lets enjoy our time together Raiders․",
      "endsAt": "2027-05-10T07:00:00.000Z",
      "featured": false,
      "id": "cal_23a3c270-6e66-4737-8b83-51e7df08e465",
      "imageId": "file_3b010fd9-296b-43e7-80c3-1baea747d699",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3b010fd9-296b-43e7-80c3-1baea747d699/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2076dbc4-4923-4112-9384-b5dc71b69f8b",
      "platforms": [],
      "startsAt": "2027-05-10T04:00:00.000Z",
      "tags": [],
      "title": "Game Day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come chill with usǃ everyone is welcome just be sure they are 18＋ or they will be removed․ Other that that we are chill so bring on the fun and lets enjoy our time together Raiders․",
      "endsAt": "2027-05-17T07:00:00.000Z",
      "featured": false,
      "id": "cal_1fdac032-ee2c-40d7-a078-4e24cff260cf",
      "imageId": "file_3b010fd9-296b-43e7-80c3-1baea747d699",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3b010fd9-296b-43e7-80c3-1baea747d699/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2076dbc4-4923-4112-9384-b5dc71b69f8b",
      "platforms": [],
      "startsAt": "2027-05-17T04:00:00.000Z",
      "tags": [],
      "title": "Game Day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night\n\nat 10˸00pm est to 2˸00amest",
      "endsAt": "2027-05-03T18:00:00.000Z",
      "featured": false,
      "id": "cal_5c88a339-611c-4571-b495-b13181293a62",
      "imageId": "file_59467f8b-ee9c-4ec4-a1f4-3c3fec27286c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_59467f8b-ee9c-4ec4-a1f4-3c3fec27286c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c1d64751-27be-40f4-a0f0-366740c0f613",
      "platforms": [],
      "startsAt": "2027-05-03T02:00:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "category": "roleplaying",
      "deletedAt": null,
      "description": "Season 2 \n＂Secrets of the Heart Stone＂ Game Sessions",
      "endsAt": "2027-05-03T07:00:00.000Z",
      "featured": false,
      "id": "cal_e91ee6a6-447f-435f-9ad7-37ff09df1c46",
      "imageId": "file_823006d3-550f-4196-a56b-b58a089ad583",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_823006d3-550f-4196-a56b-b58a089ad583/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e368b260-bb59-4a5e-9654-0a7ca46e5549",
      "platforms": [],
      "startsAt": "2027-05-03T03:00:00.000Z",
      "tags": [],
      "title": "Game Nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "game night for a few hours",
      "endsAt": "2027-05-29T11:30:00.000Z",
      "featured": false,
      "id": "cal_dc3897a5-2041-434a-b04b-08a0b4a28059",
      "imageId": "file_3d55dbd4-d811-4bdc-82d9-47cf259ebeb2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3d55dbd4-d811-4bdc-82d9-47cf259ebeb2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0fab7785-ff3d-45d5-bd63-bdabf15c5931",
      "platforms": [],
      "startsAt": "2027-05-29T05:30:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Every night will be a random game",
      "endsAt": "2027-05-14T15:00:00.000Z",
      "featured": false,
      "id": "cal_ab5baf7f-6bb6-4b3a-87ea-95a84da5cf9d",
      "imageId": "file_9792fd98-a7df-4c2e-9290-40dd8898acae",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9792fd98-a7df-4c2e-9290-40dd8898acae/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_44d774fd-2a22-4a84-8bed-9f8a8084242f",
      "platforms": [],
      "startsAt": "2027-05-14T06:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    }
  ],
  "totalCount": 10000
}
```
