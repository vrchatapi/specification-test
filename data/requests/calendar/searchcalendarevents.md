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
      "endsAt": "2026-01-26T03:00:00.000Z",
      "featured": true,
      "id": "cal_fe0358b8-06fe-4056-a7bb-d0edb1508fc5",
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
      "startsAt": "2026-01-26T01:00:00.000Z",
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
      "description": "Come on down for a night of fun․ Bring your friends maybe some snacks and drinks․ Let's have a great timeǃ\n\nThis event is the same as our usual Game Night but set earlier for EU․",
      "endsAt": "2026-01-25T23:00:00.000Z",
      "featured": true,
      "id": "cal_5c0ff8d6-4ddb-4ee9-8e23-b5e33b6076f9",
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
      "startsAt": "2026-01-25T21:00:00.000Z",
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
      "category": "exploration",
      "deletedAt": null,
      "description": "Let's have fun and explore the world of VRC and find the best games and places to play․ Game DAY starts at 12˸30 NOON EST -11˸30AM CT․ Game NIGHT will start at 6pm EST-5PM CT for those who couldn't make it during the day․",
      "endsAt": "2026-01-23T03:45:00.000Z",
      "featured": false,
      "id": "cal_fc006cc0-c189-4637-8e8b-7e127acfb1ad",
      "imageId": "file_63d2a3f2-d802-4053-8372-48b83fd349ed",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_63d2a3f2-d802-4053-8372-48b83fd349ed/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4e53c75e-ce69-4236-ab76-d6124a74c771",
      "platforms": [],
      "startsAt": "2026-01-22T17:30:00.000Z",
      "tags": [],
      "title": "Game Day⁄Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come game with usss",
      "endsAt": "2026-01-28T00:52:00.000Z",
      "featured": false,
      "id": "cal_8e6b124e-c1c9-44be-ac07-2a0b8a03e834",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-27T12:52:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come game with usss",
      "endsAt": "2026-01-25T00:52:00.000Z",
      "featured": false,
      "id": "cal_1ba4bf98-9e09-4850-8894-fe322cb78786",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-24T12:52:00.000Z",
      "tags": [],
      "title": "GAME NJGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come game with usss",
      "endsAt": "2026-01-23T00:52:00.000Z",
      "featured": false,
      "id": "cal_aef78fda-cc4f-444e-86f9-fefc968bec84",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-22T12:52:00.000Z",
      "tags": [],
      "title": "GAME NJGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "GAMING NIGHT WITH THE SMG4 GANGǃ",
      "endsAt": "2026-01-24T22:00:00.000Z",
      "featured": false,
      "id": "cal_d84991f4-1b91-421d-8caa-c3bf743bc901",
      "imageId": "file_96a8652a-8920-4ea3-808e-f5505fc2bf38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_96a8652a-8920-4ea3-808e-f5505fc2bf38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_bce36268-9237-4b54-ae68-39fae7d7d8eb",
      "platforms": [],
      "startsAt": "2026-01-24T19:30:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-01-25T03:30:00.000Z",
      "featured": true,
      "id": "cal_fc9f63d9-764c-409d-9a60-04c61ef3ea0e",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "android",
        "standalonewindows"
      ],
      "startsAt": "2026-01-25T02:30:00.000Z",
      "tags": [
        "Gaming",
        "LGBTQ",
        "Fun"
      ],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game event‚ Sunday at 11AM EST",
      "endsAt": "2026-01-25T18:00:00.000Z",
      "featured": false,
      "id": "cal_b61f90f4-f572-43b9-9820-bcff2f52e51d",
      "imageId": "file_0542aa85-0840-4854-9b69-0d9be8236175",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_0542aa85-0840-4854-9b69-0d9be8236175/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_a75dd049-9aca-40e5-8e76-d0499218c773",
      "platforms": [],
      "startsAt": "2026-01-25T16:00:00.000Z",
      "tags": [
        "Weekly Event",
        "Avali",
        "Meetup"
      ],
      "title": "Game Time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "come hang and play with us",
      "endsAt": "2026-01-29T00:52:00.000Z",
      "featured": false,
      "id": "cal_ae3f4779-6d87-4602-bb17-bc047702bc8c",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-28T12:52:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game day horror or causal?",
      "endsAt": "2026-01-27T18:15:00.000Z",
      "featured": false,
      "id": "cal_ea18a6d5-183d-42f0-a69c-7040f5004dda",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4d279372-b49c-4465-a5c6-472bad54b082",
      "platforms": [],
      "startsAt": "2026-01-27T16:15:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us at trash compactor for some fun ˸D",
      "endsAt": "2026-01-22T04:59:00.000Z",
      "featured": false,
      "id": "cal_c424bfb8-240f-4424-b732-b0e704acc241",
      "imageId": "file_2987b77a-7ada-4f22-ac0f-e610dcf9b3e5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2987b77a-7ada-4f22-ac0f-e610dcf9b3e5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_34ba0307-84af-4b5c-af0c-5254dbb9594d",
      "platforms": [],
      "startsAt": "2026-01-22T01:08:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come game with usss",
      "endsAt": "2026-01-24T00:52:00.000Z",
      "featured": false,
      "id": "cal_d566b7cd-6068-4d2e-833b-42db9cfd20f7",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-23T12:52:00.000Z",
      "tags": [],
      "title": "GAME NJGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come game with usss",
      "endsAt": "2026-01-25T00:52:00.000Z",
      "featured": false,
      "id": "cal_4e44f1e6-cf05-41ca-adf2-8490392242ee",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-24T12:52:00.000Z",
      "tags": [],
      "title": "GAME NJGHT",
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
      "description": "Come game with usss",
      "endsAt": "2026-01-26T00:52:00.000Z",
      "featured": false,
      "id": "cal_323526f3-f248-40bd-815d-2c0b48910cad",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ee125534-e8e2-45fc-975c-58c07302a8fd",
      "platforms": [],
      "startsAt": "2026-01-25T12:52:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
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
    }
  ],
  "totalCount": 86
}
```
