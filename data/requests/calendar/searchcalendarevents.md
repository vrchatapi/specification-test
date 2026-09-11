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
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-04T02:00:00.000Z",
      "featured": false,
      "id": "cal_eafec3a1-4bfc-4159-9a91-bf4ca76914d6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-03T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-01T02:00:00.000Z",
      "featured": false,
      "id": "cal_b9a27532-1797-4423-8f65-f9e7de528d1b",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-04-30T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-06T02:00:00.000Z",
      "featured": false,
      "id": "cal_1febd19b-6d54-4f27-944b-bb1b78edc05f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-05T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-22T02:00:00.000Z",
      "featured": false,
      "id": "cal_b258e901-186d-4958-af39-0a8fc80e92ab",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-21T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-29T02:00:00.000Z",
      "featured": false,
      "id": "cal_e063db41-7d3c-44c4-a46f-827593026b03",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-28T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-24T02:00:00.000Z",
      "featured": false,
      "id": "cal_4b8cffde-f10f-4948-a6d6-d3eb926945f7",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-23T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-25T02:00:00.000Z",
      "featured": false,
      "id": "cal_842c0ce7-3bc3-4112-9c99-34e8e68ccba4",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-24T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Cherrywing Sanctuary Game Night\n\nCome join ∗∗Cherrywing Sanctuary∗∗ for a fun night of games‚ laughs‚ and friendly competitionǃ Whether you're here to compete‚ team up with friends‚ or simply hang out and watch‚ everyone is welcome to join the fun․ We'll play different VRChat games and party games‚ so each Game Night can bring something new․\n\n 18＋ Only Age Verified\n All skill levels welcome\n Be respectful No drama Have fun\n\nDifferent Souls Same Sanctuary",
      "endsAt": "2027-05-26T02:00:00.000Z",
      "featured": false,
      "id": "cal_ebcd0489-512b-49e3-b74b-3058560624bd",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_7137bd28-c978-4224-8a42-4b235456f8be",
      "platforms": [],
      "startsAt": "2027-05-25T23:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    }
  ],
  "totalCount": 10000
}
```
