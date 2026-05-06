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
      "description": "Start˸ 21˸00 Uhr\n\nHeute gehts los mit Game Rush in VRChatǃ\nPräsentiert von Furryheaven‚\ndeiner deutschen Furry-Community in VRChat \n\nFreu dich auf spannende Games‚ Spaß in der Gruppe und jede Menge gute Vibes․\nKomm vorbei und zock mit unsǃ",
      "endsAt": "2027-05-04T21:59:00.000Z",
      "featured": false,
      "id": "cal_0531808c-db5d-49bb-bc1c-04bd9e02f320",
      "imageId": "file_91c21847-5355-466b-95a5-ad2ccc89dfb2",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_91c21847-5355-466b-95a5-ad2ccc89dfb2/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_537413d2-1d27-4fa1-aa80-b85a0f09d0eb",
      "platforms": [],
      "startsAt": "2027-05-04T19:00:00.000Z",
      "tags": [],
      "title": "Game Rush",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "This is a group＋ event",
      "endsAt": "2027-05-04T02:00:00.000Z",
      "featured": false,
      "id": "cal_a964af8c-4531-49a1-9567-9f3e33226b7c",
      "imageId": "file_500240e4-0abf-4166-8176-e7bb4a541a0e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_500240e4-0abf-4166-8176-e7bb4a541a0e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dba09680-35fe-4043-8ae4-4c054503da3c",
      "platforms": [],
      "startsAt": "2027-05-04T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
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
      "description": "Come join us for a game․",
      "endsAt": "2027-05-06T03:59:00.000Z",
      "featured": false,
      "id": "cal_584c5009-e7df-42cc-a4f4-fec60d519d3e",
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
      "startsAt": "2027-05-05T16:00:00.000Z",
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
      "endsAt": "2027-05-05T03:59:00.000Z",
      "featured": false,
      "id": "cal_640975b7-1975-403a-85e5-fb0a96a6c002",
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
      "startsAt": "2027-05-04T16:00:00.000Z",
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
      "description": "A night to have fun and hangout with people in the groupǃ",
      "endsAt": "2027-05-01T00:30:00.000Z",
      "featured": false,
      "id": "cal_4757a25d-7289-453b-a4d1-950b824041a8",
      "imageId": "file_b8b53353-5754-4ea3-8561-f549015b0569",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_b8b53353-5754-4ea3-8561-f549015b0569/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a32a143c-511a-46e1-b914-c0878a5ea450",
      "platforms": [],
      "startsAt": "2027-04-30T23:00:00.000Z",
      "tags": [],
      "title": "Game⁄Karaoke Nightǃ 13＋",
      "type": "event"
    }
  ],
  "totalCount": 2235
}
```
