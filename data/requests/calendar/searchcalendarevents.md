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
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2027-05-02T03:30:00.000Z",
      "featured": true,
      "id": "cal_7408a572-c8fa-4de1-bd37-b976e8241e8d",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2027-05-02T01:30:00.000Z",
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
      "endsAt": "2027-05-02T10:00:00.000Z",
      "featured": false,
      "id": "cal_757d6203-e656-4b65-aad1-dfda57f96241",
      "imageId": "file_8991c56e-133a-43ff-aad5-4ae05764d60e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8991c56e-133a-43ff-aad5-4ae05764d60e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e620f72-f3ef-43e4-ae02-4c16041bdc64",
      "platforms": [],
      "startsAt": "2027-05-02T05:45:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gaming wit friends and communityǃ Some drinking and smokingǃ",
      "endsAt": "2027-05-01T05:00:00.000Z",
      "featured": false,
      "id": "cal_1a23f3cc-823f-4ca9-a085-4aafce5c2b9b",
      "imageId": "file_06fbb2a5-296f-4f7d-b49b-efa227626dac",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_06fbb2a5-296f-4f7d-b49b-efa227626dac/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_00274557-e762-4d0c-b1b4-874ea138a98e",
      "platforms": [],
      "startsAt": "2027-05-01T03:00:00.000Z",
      "tags": [],
      "title": "Friday Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Idk but it will be a weekly thing",
      "endsAt": "2027-05-01T01:30:00.000Z",
      "featured": false,
      "id": "cal_ea5d7922-afcb-485e-a4b1-3cffb36c342c",
      "imageId": "file_7dd160b8-94e2-4364-8574-cb7c96b15a4c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7dd160b8-94e2-4364-8574-cb7c96b15a4c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_2ce3430f-5572-4cad-8406-de4df6043d9a",
      "platforms": [],
      "startsAt": "2027-04-30T22:30:00.000Z",
      "tags": [],
      "title": "Game night or drinking",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Friday night game world hoppingǃ Join us as we hop game worlds in age-verified Group＋ instances for about 2 hours‚ followed by karaokeǃ",
      "endsAt": "2027-05-01T02:00:00.000Z",
      "featured": false,
      "id": "cal_1770776d-1acd-47aa-be3e-5673f0795c58",
      "imageId": "file_9ab090b7-3151-44a6-9ea8-13bf6eaa13d0",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_9ab090b7-3151-44a6-9ea8-13bf6eaa13d0/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_3b2dc906-3dc3-4919-b5ec-819c32f63973",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2027-05-01T00:00:00.000Z",
      "tags": [],
      "title": "FurHub Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "набор от 16＋",
      "endsAt": "2027-05-02T18:40:00.000Z",
      "featured": false,
      "id": "cal_9d0dfc45-b77b-4621-a694-81e92f9a39cd",
      "imageId": "file_4d02d1c2-31ec-4c40-940f-95b4ac919f07",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4d02d1c2-31ec-4c40-940f-95b4ac919f07/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_07a27910-3cb6-489c-8aea-be859b01040e",
      "platforms": [],
      "startsAt": "2027-05-02T15:45:00.000Z",
      "tags": [],
      "title": "БУНКЕР с GAME UNIONǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a game․",
      "endsAt": "2027-05-02T03:59:00.000Z",
      "featured": false,
      "id": "cal_61f4429c-e9bf-47b4-b5cb-b198ba2fdb5c",
      "imageId": "file_af918687-3ae5-4f24-96b7-d601ae36f286",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_af918687-3ae5-4f24-96b7-d601ae36f286/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d59b6d0d-4cd7-4527-9161-f6b9edd1c726",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2027-05-01T16:00:00.000Z",
      "tags": [
        "world_balancer",
        "Hangout",
        "fun",
        "game"
      ],
      "title": "Come join us for a game․",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a game․",
      "endsAt": "2027-05-03T03:59:00.000Z",
      "featured": false,
      "id": "cal_a2767db0-5a81-4ab4-b81c-685ceec98529",
      "imageId": "file_af918687-3ae5-4f24-96b7-d601ae36f286",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_af918687-3ae5-4f24-96b7-d601ae36f286/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d59b6d0d-4cd7-4527-9161-f6b9edd1c726",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2027-05-02T16:00:00.000Z",
      "tags": [
        "world_balancer",
        "Hangout",
        "fun",
        "game"
      ],
      "title": "Come join us for a game․",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a game․",
      "endsAt": "2027-05-01T03:59:00.000Z",
      "featured": false,
      "id": "cal_d2ddbea6-ab17-4ca5-a260-44ed5ff992c2",
      "imageId": "file_af918687-3ae5-4f24-96b7-d601ae36f286",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_af918687-3ae5-4f24-96b7-d601ae36f286/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d59b6d0d-4cd7-4527-9161-f6b9edd1c726",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2027-04-30T16:00:00.000Z",
      "tags": [
        "world_balancer",
        "Hangout",
        "fun",
        "game"
      ],
      "title": "Come join us for a game․",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "We start by playing games‚ but later in the evening we go into an Chill instance․\n\nIf you have any game requests‚ just suggest them․\n\nInstance Type˸\nGroup Public",
      "endsAt": "2027-05-01T00:00:00.000Z",
      "featured": false,
      "id": "cal_c1c6d32a-1bf7-4934-85e5-504565aef2a2",
      "imageId": "file_41898d2a-45e6-4a9e-929b-c2ad64832c5a",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_41898d2a-45e6-4a9e-929b-c2ad64832c5a/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_e558b8d9-8b18-4028-9e03-1c973b062a3b",
      "platforms": [],
      "startsAt": "2027-04-30T18:15:00.000Z",
      "tags": [
        "Furry",
        "Latex",
        "Paws",
        "Game",
        "Chill"
      ],
      "title": "Game n Chill Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "набор от 16＋",
      "endsAt": "2027-05-01T18:40:00.000Z",
      "featured": false,
      "id": "cal_c9d6a4a9-682d-4d58-96e9-a190edf87140",
      "imageId": "file_4d02d1c2-31ec-4c40-940f-95b4ac919f07",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4d02d1c2-31ec-4c40-940f-95b4ac919f07/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_07a27910-3cb6-489c-8aea-be859b01040e",
      "platforms": [],
      "startsAt": "2027-05-01T15:45:00.000Z",
      "tags": [],
      "title": "БУНКЕР с GAME UNIONǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Finns Furry Sanctuary - Game Night․\nAlrighty furry palsǃ Its that time of the week again where the group begins the game nightǃ All here at Finns Furry Sanctuaryǃ Join our furry community where is extremely popular and active․",
      "endsAt": "2027-05-01T01:00:00.000Z",
      "featured": false,
      "id": "cal_e2702977-1ef9-4dfb-a824-58f7961b4ce0",
      "imageId": "file_a6452759-821c-47fe-9592-0b7ff9f7cc7a",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a6452759-821c-47fe-9592-0b7ff9f7cc7a/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_9404a526-bacf-4f7c-9d7e-6640caa2d714",
      "platforms": [],
      "startsAt": "2027-05-01T00:00:00.000Z",
      "tags": [],
      "title": "Finns Furry Sanctuary - Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "¦｜ TRANSMITTING BROADCAST ․ ․ ․｜¦\n---------------------------------------\nFriday 22˸30pm BST⁄ 16˸30pm CST ⁄ 17˸30pm EST\nLocation˸ Group ＋ Instance \n----------------------------------------\n\n----------------------------------------\nEliksni of the House Resurrection‚ the time has come to invite you once again to the servers weekly Game Night event․\n\nWithin this game night as usual with chill events there will be a opportunity to collect points to progress up the house Rank system （More information in our Servers Discord）․\n\n----------------------------------------\n As a Reminder˸ if you have Recently Rallied under our banner this will be the best time for to participate in a event and for you to meet other Eliksni within the server as well as learn more of the Servers Community from the HRs in attendance․․․ \n----------------------------------------\n¦｜ BROADCAST CONCLUDED ․ ․ ․｜¦",
      "endsAt": "2027-05-01T00:00:00.000Z",
      "featured": false,
      "id": "cal_024a2be2-daf9-4f79-91f9-7da594e5605c",
      "imageId": "file_7a83ac48-aae3-408b-a77b-879ca6a76f10",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_7a83ac48-aae3-408b-a77b-879ca6a76f10/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_6f5080c8-6547-4010-8409-b9e0649085c5",
      "platforms": [
        "android",
        "standalonewindows"
      ],
      "startsAt": "2027-04-30T21:30:00.000Z",
      "tags": [],
      "title": "［VRC EVENT- WEEKLY GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-05-11T03:00:00.000Z",
      "featured": true,
      "id": "cal_aa5af56d-f4ba-4b2b-9775-412287891ca6",
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
      "startsAt": "2026-05-11T01:00:00.000Z",
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
      "endsAt": "2026-05-04T03:00:00.000Z",
      "featured": true,
      "id": "cal_8e87e87f-e504-442b-9fc1-eccefccccaaa",
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
      "startsAt": "2026-05-04T01:00:00.000Z",
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
      "endsAt": "2027-02-18T05:00:00.000Z",
      "featured": false,
      "id": "cal_ae0c7a9d-de1e-4f60-8eee-7280e25cd3b5",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2027-02-18T03:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Join upp",
      "endsAt": "2026-05-03T03:30:00.000Z",
      "featured": false,
      "id": "cal_c4913cea-5a00-452f-ba7e-e4ec090543c9",
      "imageId": "file_8f8ccb50-5dbe-4601-bbd6-b0f9e19b8fbf",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8f8ccb50-5dbe-4601-bbd6-b0f9e19b8fbf/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d7a16020-ade9-4d65-a4c2-f2820ffce033",
      "platforms": [],
      "startsAt": "2026-05-03T01:00:00.000Z",
      "tags": [],
      "title": "Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-05-18T03:00:00.000Z",
      "featured": true,
      "id": "cal_6427506e-9eeb-4fd3-a623-5be7049e6977",
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
      "startsAt": "2026-05-18T01:00:00.000Z",
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
      "endsAt": "2026-05-25T03:00:00.000Z",
      "featured": true,
      "id": "cal_1da29deb-80ff-4526-ae39-391c99cc28f1",
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
      "startsAt": "2026-05-25T01:00:00.000Z",
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
      "description": "Gamesǃǃ",
      "endsAt": "2027-02-26T05:00:00.000Z",
      "featured": false,
      "id": "cal_0bac44a6-3959-4363-bdb6-a051344adfd5",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2027-02-26T01:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join our growing group of goobers for a night of gamesǃ We have a few go-tos‚ but with the goal of catering to as many preferences as possible‚ games are chosen during the night and constantly rotatingǃ Hope to see you thereǃ",
      "endsAt": "2027-02-07T10:00:00.000Z",
      "featured": false,
      "id": "cal_789bd2f7-7852-4594-814c-80c38951b5a6",
      "imageId": "file_8991c56e-133a-43ff-aad5-4ae05764d60e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_8991c56e-133a-43ff-aad5-4ae05764d60e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_0e620f72-f3ef-43e4-ae02-4c16041bdc64",
      "platforms": [],
      "startsAt": "2027-02-07T05:45:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-06-29T03:00:00.000Z",
      "featured": true,
      "id": "cal_407b9f18-f8ff-4961-b1ee-a8660a18e032",
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
      "startsAt": "2026-06-29T01:00:00.000Z",
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
      "description": "Gamesǃǃ",
      "endsAt": "2026-06-05T04:00:00.000Z",
      "featured": false,
      "id": "cal_48b7ab5e-2775-409d-8e96-c95b209f5800",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-06-05T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-06-26T04:00:00.000Z",
      "featured": false,
      "id": "cal_8ca4b9e7-f828-4753-aed8-fd835b699f78",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-06-26T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "anything game",
      "endsAt": "2026-06-12T21:30:00.000Z",
      "featured": false,
      "id": "cal_bfdbbc8a-deb7-4460-a402-42b95036fdbb",
      "imageId": "file_20717455-42fb-4444-9188-8dca113bf921",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_20717455-42fb-4444-9188-8dca113bf921/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_51230143-34d6-401e-9fbf-4deab029ca29",
      "platforms": [],
      "startsAt": "2026-06-12T17:30:00.000Z",
      "tags": [],
      "title": "Game day",
      "type": "event"
    }
  ],
  "totalCount": 1774
}
```
