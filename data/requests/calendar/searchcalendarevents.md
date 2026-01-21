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
      "category": "gaming",
      "deletedAt": null,
      "description": "It's the Miku Game Nightǃ Maybe we are playing Among Us Person Escape or anything that has more player․ Make sure you invite your friends to the event and groupǃ \n\nThis event is for a public group feel free to join the group for updates and events updates and meet the owner of the group and play some music in the background․\n\nRules for the event\n-Do not creat if so you will be kick from the world\n-Don't crash everyone if so your permanent ban from the group․\n-Don't say rude things to everyone if so you will be kick from the group instance\n-Just have fun\n\nEvent Starts EST 7˸00PM WST 5˸00PM\nEvent Ends EST 11˸00PM WST 9˸00PM",
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
        "Gaming"
      ],
      "title": "Miku Game Nightǃ",
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
      "description": "Tonight we'll be playing games like \n- Murder\n- Among Us\n- Audience Anarchy （if there's enough people）\n- Prison Escape\n- VR Poker （New Texas Hold'em） \n- And More‚ if time permitsǃ",
      "endsAt": "2026-01-21T04:30:00.000Z",
      "featured": false,
      "id": "cal_08c92175-b532-40f0-8776-abbf04eee5db",
      "imageId": "file_10bc87d8-653f-4969-ab7f-e3571a3bb421",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_10bc87d8-653f-4969-ab7f-e3571a3bb421/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d9325ff6-a470-40fb-8ea8-e05a36550ee6",
      "platforms": [],
      "startsAt": "2026-01-20T23:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Make sure to join our discord to vote on what game we will playǃ",
      "endsAt": "2026-01-24T17:01:00.000Z",
      "featured": false,
      "id": "cal_cf876adb-da20-4055-ab39-d3d4ab90be48",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_fcbbce33-f10e-4d8f-8af0-c1bbf023d295",
      "platforms": [],
      "startsAt": "2026-01-24T02:30:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hi Starsǃ \n\nGet ready for a night of laughter‚ games‚ and fun - its time for another Game ＆ Hangǃ Well jump into a few VRChat game worlds for a chill night of games and good company․ \n\nOne of the games we play will be chosen by youǃ Well play whichever game ranks ＃1 in the poll‚ along with a few surprise picks․ Head over to the polls channel in discord to voteǃ",
      "endsAt": "2026-01-24T02:00:00.000Z",
      "featured": false,
      "id": "cal_a057a93a-2dbe-4b82-b645-a95938baae85",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_5e28e820-01e2-47c2-8695-3eb7d578ab22",
      "platforms": [],
      "startsAt": "2026-01-24T00:00:00.000Z",
      "tags": [],
      "title": "Game and Hang",
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
      "description": "Sooo wanna hop online with me and my crew\n\nBring your friends into some stupid chaos? WELL sign up for this․․ dayǃ we will be world hopping to different games and relaxingǃ if thats what you also likeǃ but mainly\n\nCHAOS and games HEHE\n\nSee ya there hopefullyǃǃ\n\nLighty˸ I DO not dropkick my crew․․ only solar ˸p ［aka my crew member］",
      "endsAt": "2026-01-23T22:00:00.000Z",
      "featured": false,
      "id": "cal_3a7db1de-0acb-4e9f-a187-051479aa343f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_3f793758-69a6-4d61-99a0-3325f746a4f7",
      "platforms": [],
      "startsAt": "2026-01-23T20:00:00.000Z",
      "tags": [],
      "title": "Chaotic Game night",
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
    }
  ],
  "totalCount": 79
}
```
