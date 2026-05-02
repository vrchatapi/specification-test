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
      "description": "You win a vip or vrc＋ is tommorow",
      "endsAt": "2026-05-02T02:57:00.000Z",
      "featured": false,
      "id": "cal_5abcb44d-9269-402e-a9f7-f8020cadfed4",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_21213075-716e-47df-839a-c3f5d734b657",
      "platforms": [],
      "startsAt": "2026-05-02T01:10:00.000Z",
      "tags": [],
      "title": "Game",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-08-20T04:00:00.000Z",
      "featured": false,
      "id": "cal_c05d1d0b-53f5-485c-8b8e-5af2d8dff154",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-08-20T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Come join us for a game․",
      "endsAt": "2027-02-14T04:59:00.000Z",
      "featured": false,
      "id": "cal_fe319895-2d91-495b-a820-a936b396912d",
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
      "startsAt": "2027-02-13T17:00:00.000Z",
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
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-05-07T04:00:00.000Z",
      "featured": false,
      "id": "cal_38cc850e-5458-4ef9-a007-32720fdc6442",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-05-07T02:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
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
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-11-05T05:00:00.000Z",
      "featured": false,
      "id": "cal_f383f98b-70cd-4fa3-b3c4-479268ff8630",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-11-05T03:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Nightǃ （Game to be Announced）",
      "endsAt": "2026-11-26T05:00:00.000Z",
      "featured": false,
      "id": "cal_e0dc2f3e-bc71-4199-9ba6-9f15f38cb148",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-11-26T03:00:00.000Z",
      "tags": [],
      "title": "Weekly Game Nightǃ （Game to be Announced）",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for prison escapeǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-05-16T03:00:00.000Z",
      "featured": false,
      "id": "cal_33243ce0-68d0-41b4-983d-e23905b79ee6",
      "imageId": "file_4fb83aa9-1848-40e5-be55-d5942efe2608",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4fb83aa9-1848-40e5-be55-d5942efe2608/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-05-16T00:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-05-22T04:00:00.000Z",
      "featured": false,
      "id": "cal_884d0406-93d1-4066-8744-a42182adf28f",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-05-22T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-05-08T04:00:00.000Z",
      "featured": false,
      "id": "cal_2872f395-2db4-4ad9-a13b-70f6a079fc12",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-05-08T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2026-05-15T04:00:00.000Z",
      "featured": false,
      "id": "cal_cd95446d-8d96-4547-b33a-f13816be1284",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2026-05-15T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "This is a group＋ event",
      "endsAt": "2026-05-09T02:00:00.000Z",
      "featured": false,
      "id": "cal_6f5306ad-2dc1-4a04-9774-9e2e030e2833",
      "imageId": "file_500240e4-0abf-4166-8176-e7bb4a541a0e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_500240e4-0abf-4166-8176-e7bb4a541a0e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dba09680-35fe-4043-8ae4-4c054503da3c",
      "platforms": [],
      "startsAt": "2026-05-09T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Its the woven realms game night i hope everyone comes and has some fun with us",
      "endsAt": "2026-05-03T05:00:00.000Z",
      "featured": false,
      "id": "cal_8dfac1af-3651-4ff5-b316-c597ad55452f",
      "imageId": "file_2df59ee0-175c-4cb9-aa8f-4cfa73f0935d",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_2df59ee0-175c-4cb9-aa8f-4cfa73f0935d/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_502eb147-5075-430e-9e47-fb7cef5caf50",
      "platforms": [],
      "startsAt": "2026-05-03T00:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gamesǃǃ",
      "endsAt": "2027-04-23T04:00:00.000Z",
      "featured": false,
      "id": "cal_ba23b03c-ce0d-4b41-88c7-e3148bf53062",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b3f7f4e0-3201-4c88-9fad-a9d186471411",
      "platforms": [],
      "startsAt": "2027-04-23T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "This is a group＋ event",
      "endsAt": "2027-04-04T02:00:00.000Z",
      "featured": false,
      "id": "cal_16af19f0-fc18-447d-b293-64fcc5a1d42b",
      "imageId": "file_500240e4-0abf-4166-8176-e7bb4a541a0e",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_500240e4-0abf-4166-8176-e7bb4a541a0e/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dba09680-35fe-4043-8ae4-4c054503da3c",
      "platforms": [],
      "startsAt": "2027-04-04T00:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    }
  ],
  "totalCount": 1253
}
```
