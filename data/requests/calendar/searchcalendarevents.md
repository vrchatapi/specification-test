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
      "description": "Playing games",
      "endsAt": "2027-05-07T08:18:00.000Z",
      "featured": false,
      "id": "cal_e52f871c-26af-45f9-82fc-011987810900",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-10T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-28T08:18:00.000Z",
      "featured": false,
      "id": "cal_57fa5013-42b1-43eb-8283-76d5e0c2a276",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-05-01T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
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
      "description": "Playing games",
      "endsAt": "2027-05-08T08:18:00.000Z",
      "featured": false,
      "id": "cal_e5fbd799-6ff9-40bc-bc35-f624566b3d01",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-11T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
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
      "description": "Playing games",
      "endsAt": "2027-05-29T08:18:00.000Z",
      "featured": false,
      "id": "cal_b736afd6-de63-48ee-97e9-2c0f5a250396",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-05-02T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-01T08:18:00.000Z",
      "featured": false,
      "id": "cal_e84259fe-a02a-4e54-9b01-662ea476614d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-04T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Playing games",
      "endsAt": "2027-05-14T08:18:00.000Z",
      "featured": false,
      "id": "cal_ce826128-5ee5-4d7e-b8e6-632f9107bf5f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d31b6169-b058-4531-a07c-71b81e371bdb",
      "platforms": [],
      "startsAt": "2027-04-17T06:18:00.000Z",
      "tags": [],
      "title": "game nights",
      "type": "event"
    },
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
      "endsAt": "2027-05-04T03:59:00.000Z",
      "featured": false,
      "id": "cal_906f8fda-bc77-46f3-8f52-c716d7a97f83",
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
      "startsAt": "2027-05-03T16:00:00.000Z",
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
      "description": "набор от 16＋",
      "endsAt": "2027-05-03T18:40:00.000Z",
      "featured": false,
      "id": "cal_4a110c80-6d0d-4f64-b052-3e5eeac99297",
      "imageId": "file_4d02d1c2-31ec-4c40-940f-95b4ac919f07",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4d02d1c2-31ec-4c40-940f-95b4ac919f07/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_07a27910-3cb6-489c-8aea-be859b01040e",
      "platforms": [],
      "startsAt": "2027-05-03T15:45:00.000Z",
      "tags": [],
      "title": "БУНКЕР с GAME UNIONǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "PUFF PUFF CHEERSǃǃǃ Hope you all have a wonderful Stoney Sunday darlings and come get BAKED with us at Stoney Sunday Game Night tonight ＠ 7PM ESTǃǃ Make sure to join our 2000＋ Member 18＋ Only Stoners United Discord Server to gain access to all of our Smoke Sesh eventsǃǃǃ\n\n∗∗Must be VRC 18＋ Age-Verified to Joinǃǃ∗∗\n\nDiscord˸\nhttps˸⁄⁄discord․gg⁄stonersunited\n\nStoners United VIP˸\nhttps˸⁄⁄patreon․com⁄StonersUnited\n\nVRC Group˸\nhttps˸⁄⁄vrc․group⁄STONER․8111\n\nxxx - Meda",
      "endsAt": "2027-05-03T01:00:00.000Z",
      "featured": false,
      "id": "cal_4fd3dbf0-40c8-4418-981d-afb8dfd477c9",
      "imageId": "file_6741f285-b878-4377-91bd-df83d0142cbd",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6741f285-b878-4377-91bd-df83d0142cbd/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c4980f48-b38c-4a07-85c8-a4e065e54572",
      "platforms": [],
      "startsAt": "2027-05-02T23:00:00.000Z",
      "tags": [],
      "title": "Stoney Sunday Game Night",
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
      "description": "PUFF PUFF CHEERSǃǃǃ Hope you all have a wonderful Stoney Sunday darlings and come get BAKED with us at Stoney Sunday Game Night tonight ＠ 7PM ESTǃǃ Make sure to join our 2000＋ Member 18＋ Only Stoners United Discord Server to gain access to all of our Smoke Sesh eventsǃǃǃ\n\n∗∗Must be VRC 18＋ Age-Verified to Joinǃǃ∗∗\n\nDiscord˸\nhttps˸⁄⁄discord․gg⁄stonersunited\n\nStoners United VIP˸\nhttps˸⁄⁄patreon․com⁄StonersUnited\n\nVRC Group˸\nhttps˸⁄⁄vrc․group⁄STONER․8111\n\nxxx - Meda",
      "endsAt": "2027-05-03T01:00:00.000Z",
      "featured": false,
      "id": "cal_712cac5f-5bcf-4438-b37f-7b65487c57b1",
      "imageId": "file_6741f285-b878-4377-91bd-df83d0142cbd",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6741f285-b878-4377-91bd-df83d0142cbd/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c4980f48-b38c-4a07-85c8-a4e065e54572",
      "platforms": [],
      "startsAt": "2027-05-02T23:00:00.000Z",
      "tags": [],
      "title": "Stoney Sunday Game Night",
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
    }
  ],
  "totalCount": 2228
}
```
