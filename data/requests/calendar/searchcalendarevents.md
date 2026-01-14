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
      "description": "Gamesǃ",
      "endsAt": "2026-01-17T09:00:00.000Z",
      "featured": false,
      "id": "cal_b3680f60-5ca7-40c1-a652-f417ac3d3801",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_93ac7e1a-7df2-45fa-aef4-68652030a592",
      "platforms": [],
      "startsAt": "2026-01-16T19:46:00.000Z",
      "tags": [],
      "title": "game day",
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
      "description": "Vide gaem",
      "endsAt": "2026-01-16T03:00:00.000Z",
      "featured": false,
      "id": "cal_76368b4d-b6be-4387-8a75-14f167d9a2e9",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_80a94439-9c81-40bc-a05e-ff39043c59c2",
      "platforms": [],
      "startsAt": "2026-01-16T02:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHTǃǃ",
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
      "description": "Playing games as charactersǃ Try to be there if you need an avatar then there will be a prismics instance open too․",
      "endsAt": "2026-01-18T00:34:00.000Z",
      "featured": false,
      "id": "cal_6d68e636-dcec-4c90-a94f-7240e9d59ef8",
      "imageId": "file_bd205b5b-d629-41d1-8f1d-24f830f37237",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_bd205b5b-d629-41d1-8f1d-24f830f37237/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_ba424031-9ec5-4f2c-8668-02640a3e464b",
      "platforms": [],
      "startsAt": "2026-01-17T22:34:00.000Z",
      "tags": [],
      "title": "Game time",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night ig",
      "endsAt": "2026-01-18T00:30:00.000Z",
      "featured": false,
      "id": "cal_cac2fd46-b3cb-4960-b7e5-5b0466870ed5",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_73ea1fd1-ada7-4f7a-b0a6-69a5c1b8bd53",
      "platforms": [],
      "startsAt": "2026-01-17T21:30:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "description": "Be thee weird strange gremlins and play some games with us‚ or unleah your competitive spirit․",
      "endsAt": "2026-01-15T04:59:00.000Z",
      "featured": false,
      "id": "cal_49c2eb62-a752-4420-a160-015a77b2f5c6",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3733860d-34f2-43d1-8757-9c93676efe71",
      "platforms": [],
      "startsAt": "2026-01-15T00:50:00.000Z",
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
      "description": "Play some games‚ be gremlins‚ or be competitive asf idk․",
      "endsAt": "2026-01-29T04:59:00.000Z",
      "featured": false,
      "id": "cal_e483223a-35fa-4c3f-9c5c-41f24191f08b",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3733860d-34f2-43d1-8757-9c93676efe71",
      "platforms": [],
      "startsAt": "2026-01-29T00:50:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "THE NEXT GAME?",
      "endsAt": "2026-01-17T21:30:00.000Z",
      "featured": false,
      "id": "cal_91cac7c6-67a8-4e44-b288-f6323e01f2e9",
      "imageId": "file_9af5e84b-cbff-40e9-ab2d-0fb159b5aa53",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9af5e84b-cbff-40e9-ab2d-0fb159b5aa53/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_f5bf8ede-d783-4de2-af33-43593f9905e2",
      "platforms": [],
      "startsAt": "2026-01-17T20:32:00.000Z",
      "tags": [],
      "title": "NEXT GAME",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Choose games in discord server in polls and we shall playǃ",
      "endsAt": "2026-01-18T18:00:00.000Z",
      "featured": false,
      "id": "cal_59a36ccb-6d50-4287-b5e4-6483bb632980",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2e442b8b-1aa7-47b3-93a4-a66d469da3b0",
      "platforms": [],
      "startsAt": "2026-01-18T06:00:00.000Z",
      "tags": [],
      "title": "Game nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Random games‚ but dont like are game host your own under furry supportǃ",
      "endsAt": "2026-01-14T01:56:00.000Z",
      "featured": false,
      "id": "cal_e9f1d347-ae2c-4dfb-903c-b4ae9e1e7184",
      "imageId": "file_974a78f1-a1e1-457f-9281-a141fc908344",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_974a78f1-a1e1-457f-9281-a141fc908344/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_6da2dfed-be24-4871-8f2a-01ea77e29305",
      "platforms": [],
      "startsAt": "2026-01-13T23:56:00.000Z",
      "tags": [],
      "title": "Game Timeǃ",
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
      "description": "Join us for an evening around VRChat gamesǃ Maybe you'll go and murder some friends in Murder 4‚ or race on the open seas in Jetski Rush․ Perhaps you want to chill out and catch the biggest fish in a Simple Fishing World․ Whatever it is‚ you're sure to have fun with the Furry Springs communityǃ Games are randomly chosen each week by our event hostǃ",
      "endsAt": "2026-02-08T03:00:00.000Z",
      "featured": false,
      "id": "cal_9d50857e-c414-4a0d-beb3-ecf25777e612",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_593ee468-6ba6-4a3a-aa6e-5a7c6438aa5e",
      "platforms": [],
      "startsAt": "2026-02-08T01:30:00.000Z",
      "tags": [],
      "title": "Furry Springs Game Night",
      "type": "event"
    }
  ],
  "totalCount": 71
}
```
