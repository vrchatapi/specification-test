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
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-02-09T03:00:00.000Z",
      "featured": true,
      "id": "cal_fc0aaf86-c479-416e-8018-5f8d7e19f90e",
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
      "startsAt": "2026-02-09T01:00:00.000Z",
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
      "endsAt": "2026-02-02T03:00:00.000Z",
      "featured": true,
      "id": "cal_09629f4e-0f7a-4fe2-8a23-2e246dec8a56",
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
      "startsAt": "2026-02-02T01:00:00.000Z",
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
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-02-15T23:00:00.000Z",
      "featured": true,
      "id": "cal_e27525b0-da29-4555-b5ba-18c1bf5a05e5",
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
      "startsAt": "2026-02-15T21:00:00.000Z",
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
      "description": "Welcome to ProoxyHideout we Are a gaming and 18＋ Group",
      "endsAt": "2026-02-27T02:31:00.000Z",
      "featured": false,
      "id": "cal_ffa5fb78-8307-4d51-abcb-06c91a8476e3",
      "imageId": "file_4a5f1f57-8a2a-410b-a231-926f1ad380fd",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4a5f1f57-8a2a-410b-a231-926f1ad380fd/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e5c4dbe1-c6c9-4395-abd7-e7eb9dbffd22",
      "platforms": [],
      "startsAt": "2026-02-26T03:56:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․\nWe have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․\nIf you are not in the instance‚ you are not part of the equation․\nJoin us․",
      "endsAt": "2026-02-11T22:00:00.000Z",
      "featured": false,
      "id": "cal_bb292420-84c7-4312-bee7-c76b1c24336d",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-02-11T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-02-16T03:00:00.000Z",
      "featured": true,
      "id": "cal_f7fae40f-2fb3-4072-9ce1-745221781230",
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
      "startsAt": "2026-02-16T01:00:00.000Z",
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
      "description": "Blackout is kinda like murder 4 but different‚ and I've haven't played it for a while so we're gonna play itǃ",
      "endsAt": "2026-01-29T03:00:00.000Z",
      "featured": false,
      "id": "cal_4b3dd24c-1b2f-4d48-a99f-3cd428dca8b9",
      "imageId": "file_3da25d51-f1fa-4033-9e45-57c10881b7eb",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_3da25d51-f1fa-4033-9e45-57c10881b7eb/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_8fa89a83-14e5-4278-9ef0-acf040b4b71b",
      "platforms": [],
      "startsAt": "2026-01-29T00:00:00.000Z",
      "tags": [],
      "title": "Game˸ blackout",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-02-01T23:00:00.000Z",
      "featured": true,
      "id": "cal_1cc2dbdc-c0fa-4b8d-8fd1-a7d5fea58cc0",
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
      "startsAt": "2026-02-01T21:00:00.000Z",
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
      "endsAt": "2026-02-08T23:00:00.000Z",
      "featured": true,
      "id": "cal_9a14176b-bb9a-4bb5-b66b-44059ef463df",
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
      "startsAt": "2026-02-08T21:00:00.000Z",
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
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-02-08T03:30:00.000Z",
      "featured": true,
      "id": "cal_88942eb1-0c76-4e66-8ee3-ebf6498b36ee",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "android",
        "standalonewindows"
      ],
      "startsAt": "2026-02-08T02:30:00.000Z",
      "tags": [
        "Game",
        "LGBTQ",
        "Fun"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "No specific end timeǃ\n\nBring your cart or vape and play games with usǃǃ",
      "endsAt": "2026-01-31T05:00:00.000Z",
      "featured": false,
      "id": "cal_02241ff6-3e32-4786-b921-1d2ec40417d1",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_18252f0e-d63b-4e9d-b08d-716d05e7c231",
      "platforms": [],
      "startsAt": "2026-01-31T04:00:00.000Z",
      "tags": [],
      "title": "Game nightǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․\nWe have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․\nIf you are not in the instance‚ you are not part of the equation․\nJoin us․",
      "endsAt": "2026-02-04T22:00:00.000Z",
      "featured": false,
      "id": "cal_c9ff3502-abd9-4048-b688-4dbc86e4341e",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-02-04T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come hang out and play gamesǃ Please make sure to abide the rules in the instanceǃ˸\n\n- Please be ＋18‚ these instances will be verified⁄enforced come March 26th․\n- Please make sure friends joining are in the group and⁄or discord so they are also aware of the rulesǃ\n- Consent of the other users is non-optionalǃ If you're found being a weirdo and someone asks you to stop‚ stopǃ",
      "endsAt": "2026-03-06T03:30:00.000Z",
      "featured": false,
      "id": "cal_c429310a-fe9f-45b3-b7e4-17621aec4df7",
      "imageId": "file_51c29804-1937-46e1-aab7-41f64351ebf4",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_51c29804-1937-46e1-aab7-41f64351ebf4/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-02-06T00:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Lets get over the midweek fatigue with some fun competitionǃ Its wednesday Night Game nightǃ",
      "endsAt": "2026-02-05T03:00:00.000Z",
      "featured": true,
      "id": "cal_1addc60c-1608-4791-8806-4db7ec631514",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-02-05T00:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Lets get over the midweek fatigue with some fun competitionǃ Its wednesday Night Game nightǃ",
      "endsAt": "2026-02-26T03:00:00.000Z",
      "featured": true,
      "id": "cal_91a5da25-196e-4086-b765-3fecae2e1998",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-02-26T00:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "This is the meeting time for the next werewolf event․ Please try to start attending or notify anyone that you are coming late․",
      "endsAt": "2026-02-01T08:00:00.000Z",
      "featured": false,
      "id": "cal_464e0d9d-b5e1-40ba-a5dd-10ceac6e4569",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_38221197-e87a-431f-a1f6-4c93f448f44d",
      "platforms": [],
      "startsAt": "2026-02-01T05:00:00.000Z",
      "tags": [],
      "title": "Next Werewolf Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "It's the Miku Game Nightǃ Maybe we are playing Among Us Prison Escape or anything that has more player․ Make sure you invite your friends to the event and groupǃ \n\nThis event is for a public group feel free to join the group for updates and events updates and meet the owner of the group and play some music in the background․\n\nRules for the event\n-Do not creat if so you will be kick from the world\n-Don't crash everyone if so your permanent ban from the group․\n-Don't say rude things to everyone if so you will be kick from the group instance\n-Just have fun\n\nEvent Starts EST 7˸00PM WST 5˸00PM\nEvent Ends EST 11˸00PM WST 9˸00PM",
      "endsAt": "2026-02-08T04:00:00.000Z",
      "featured": false,
      "id": "cal_58140a79-78f0-4c90-afab-d931b91fa1cf",
      "imageId": "file_9bb6b202-7b43-4179-ad2c-d256910b8134",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bb6b202-7b43-4179-ad2c-d256910b8134/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_1fa72ff6-acef-4832-8451-84c80a7aa9b3",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-02-08T00:00:00.000Z",
      "tags": [
        "Miku",
        "Hangout",
        "Gaming",
        "Game night"
      ],
      "title": "Miku Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Its that time agine time to eather chill‚ talk it up and hang loose‚ or cuddle with music or play a variety of games UNO‚ would you rather‚ cards against humanity‚ ect ya never know what could happen all are welcolme․ \n（18＋ verification is not required but is an adult space please treat as such thanks ）",
      "endsAt": "2026-02-02T06:59:00.000Z",
      "featured": false,
      "id": "cal_e5b3eead-0458-44a5-95f8-38cbcc8fb27d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_427e8b88-98c1-4d8d-b4ed-cfc59bb90e80",
      "platforms": [],
      "startsAt": "2026-02-02T03:00:00.000Z",
      "tags": [],
      "title": "Hangout and Game nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "It's the Miku Game Nightǃ Maybe we are playing Among Us Person Escape or anything that has more player․ Make sure you invite your friends to the event and groupǃ \n\nThis event is for a public group feel free to join the group for updates and events updates and meet the owner of the group and play some music in the background․\n\nRules for the event\n-Do not cheat if so you will be kick from the world\n-Don't crash everyone if so your permanent ban from the group․\n-Don't say rude things to everyone if so you will be kick from the group instance\n-Just have fun\n\nEvent Starts EST 7˸00PM WST 5˸00PM\nEvent Ends EST 11˸00PM WST 9˸00PM",
      "endsAt": "2026-02-01T04:00:00.000Z",
      "featured": false,
      "id": "cal_4563d9d5-81a9-4882-88ec-529cd4918d3f",
      "imageId": "file_9bb6b202-7b43-4179-ad2c-d256910b8134",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9bb6b202-7b43-4179-ad2c-d256910b8134/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_1fa72ff6-acef-4832-8451-84c80a7aa9b3",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-02-01T00:00:00.000Z",
      "tags": [
        "Miku",
        "Game",
        "Game night",
        "Hatsune Miku"
      ],
      "title": "Miku Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come hang and play with us",
      "endsAt": "2026-01-31T00:52:00.000Z",
      "featured": false,
      "id": "cal_7a645c8b-37d8-4ad6-ab4e-17927ab2b5a6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-30T12:52:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come hang and play with us",
      "endsAt": "2026-01-31T00:52:00.000Z",
      "featured": false,
      "id": "cal_2f8ffcbd-c1cf-4948-b26f-909372200f46",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-30T12:52:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "game night",
      "endsAt": "2026-01-31T22:25:00.000Z",
      "featured": false,
      "id": "cal_48553ff3-55cb-428d-bda0-2f3ad407dd2a",
      "imageId": "file_f79a2657-820c-4e4b-8236-3cb158cac49d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f79a2657-820c-4e4b-8236-3cb158cac49d/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a774033f-6f5e-4a6f-b4b5-5c5a2945c231",
      "platforms": [],
      "startsAt": "2026-01-31T20:25:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We will play a game of you guys choices",
      "endsAt": "2026-01-31T04:00:00.000Z",
      "featured": false,
      "id": "cal_3f0c2ec8-9d17-4bcc-ac17-25fc87bc73d5",
      "imageId": "file_54149cf4-7d34-4d65-a7c6-41f6c18cfe52",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_54149cf4-7d34-4d65-a7c6-41f6c18cfe52/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ba589e81-30a8-4106-92c5-ce25de05e500",
      "platforms": [],
      "startsAt": "2026-01-31T02:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted a game night․ please do not cheat in the gameǃ enjoy and have funǃǃǃ",
      "endsAt": "2026-01-29T02:30:00.000Z",
      "featured": false,
      "id": "cal_b79ba3d6-37c5-4464-bb4a-e24b426255c3",
      "imageId": "file_eb975921-d967-4810-babe-cbc946f5361c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_eb975921-d967-4810-babe-cbc946f5361c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-01-28T23:44:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    }
  ],
  "totalCount": 74
}
```
