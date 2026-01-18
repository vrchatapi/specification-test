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
      "description": "Welcome to our Game nightǃ The hangout instance is open and we are gathering players now․\nWe have no plan․ We will determine the game on the spot based entirely on who is currently in the instance․ If you want to influence the evening‚ you have to be here to do it․\nIf you are not in the instance‚ you are not part of the equation․\nJoin us․",
      "endsAt": "2026-01-21T22:00:00.000Z",
      "featured": false,
      "id": "cal_9e5f2962-fc53-4893-9242-3524f6317360",
      "imageId": "file_e79f3f03-b4b8-4054-822f-2a1949ad2b03",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e79f3f03-b4b8-4054-822f-2a1949ad2b03/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_df39167f-83a6-4028-9ea6-e6828ea729a1",
      "platforms": [],
      "startsAt": "2026-01-21T19:00:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "description": "Get Your game faces onǃ It's a game nightǃ Come play games with the Dandiesǃ Behave and play niceǃ",
      "endsAt": "2026-01-18T02:30:00.000Z",
      "featured": false,
      "id": "cal_e0727fc1-2955-446f-bc03-9931861bd329",
      "imageId": "file_a894295d-9d29-437d-8573-0234f125ab6b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a894295d-9d29-437d-8573-0234f125ab6b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_143b2f5c-53a6-46a4-9413-9a74b7610168",
      "platforms": [],
      "startsAt": "2026-01-18T01:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
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
      "description": "FurHub's weekly game night‚ held in age-verified Group＋ instances every Fridayǃ 2 hours of games are followed by karaokeǃFurHub Game Night",
      "endsAt": "2026-01-24T03:00:00.000Z",
      "featured": false,
      "id": "cal_fbbb0a53-e924-4f43-816e-69da4e020bec",
      "imageId": "file_818cfd9a-dd26-40d0-8bb8-26d6b8d73c5b",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_818cfd9a-dd26-40d0-8bb8-26d6b8d73c5b/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3b2dc906-3dc3-4919-b5ec-819c32f63973",
      "platforms": [],
      "startsAt": "2026-01-24T01:00:00.000Z",
      "tags": [],
      "title": "FurHub Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Time to Nut Up or Shut Up people․ Join the table‚ deal them cards and lets see how well your luck runs through the night",
      "endsAt": "2026-01-18T04:59:00.000Z",
      "featured": false,
      "id": "cal_7ab81071-ebdc-4a16-8598-b9e21f932dc6",
      "imageId": "file_5d74c154-edae-4f60-be8e-2ccdd93f95d7",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_5d74c154-edae-4f60-be8e-2ccdd93f95d7/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c94d615e-f180-478f-aa04-fb86a662a13c",
      "platforms": [],
      "startsAt": "2026-01-18T02:00:00.000Z",
      "tags": [],
      "title": "RFS Game Night~",
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
      "description": "Every Fourth Sunday ‚ a session will be hosted for games․ Event will be posted 2 weeks prior to the day․ It is not an obligation but a recommendation to attend them․",
      "endsAt": "2026-01-26T03:30:00.000Z",
      "featured": false,
      "id": "cal_3211706d-da15-4d28-ba6b-d3c18219a2fa",
      "imageId": "file_d5ec4472-88b3-4cea-91b0-729cce929dd0",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d5ec4472-88b3-4cea-91b0-729cce929dd0/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_10d5ac9a-fe0b-43aa-855a-943bda5fdee5",
      "platforms": [],
      "startsAt": "2026-01-25T23:30:00.000Z",
      "tags": [],
      "title": "Game Night Shenanigans",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "playing varied games‚ figure murder 4‚ blackout‚ hide and shriek and among us depending on the numbers․",
      "endsAt": "2026-01-18T02:00:00.000Z",
      "featured": false,
      "id": "cal_6577491d-1e3f-4450-b1bd-da4c60bffe4f",
      "imageId": "file_d21281ef-a380-43e1-8a60-adac30500e71",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d21281ef-a380-43e1-8a60-adac30500e71/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2c2c8ebb-bb59-4dbd-98b2-b377f9056cf8",
      "platforms": [],
      "startsAt": "2026-01-18T00:00:00.000Z",
      "tags": [],
      "title": "Fintastic Game Nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Were doing another hangout‚ but after Im going to make a post telling everybody to respond‚ Im going to drop a portal and we are going to play a game later",
      "endsAt": "2026-01-18T06:00:00.000Z",
      "featured": false,
      "id": "cal_feeb4237-3db4-4696-80d8-3e80a98da523",
      "imageId": "file_effb2011-684b-4927-969a-93be0b087612",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_effb2011-684b-4927-969a-93be0b087612/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_58790b29-b892-4f9b-953c-516cdc3c23ac",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-01-17T21:30:00.000Z",
      "tags": [],
      "title": "Hangout and game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "We going play game on Sunday․ Please be careful not Nous allons jouer un match dimanche‚ soyez prudents․",
      "endsAt": "2026-01-19T21:11:00.000Z",
      "featured": false,
      "id": "cal_a8b5f5d9-7bfb-4b1b-8d45-2eafdddc8c52",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_8772d608-3d1d-4915-ac65-b399f76644fa",
      "platforms": [],
      "startsAt": "2026-01-19T19:11:00.000Z",
      "tags": [],
      "title": "Game night Soirée",
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
    }
  ],
  "totalCount": 71
}
```
