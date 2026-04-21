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
      "description": "Hello my lovely angelsǃ Lets have some fun with game night at The Synapseǃ We typically do Prison Break or Jetski Rush but we may change it up every once in awhileǃ Invite your friends to hang out‚ have a laugh and create some memoriesǃ",
      "endsAt": "2026-04-27T03:00:00.000Z",
      "featured": true,
      "id": "cal_82380e3f-3ca1-4c24-92bd-4eeec113532c",
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
      "startsAt": "2026-04-27T01:00:00.000Z",
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
      "description": "Heheh new video gamey",
      "endsAt": "2026-05-13T17:31:00.000Z",
      "featured": false,
      "id": "cal_105886ba-3811-41ce-b957-c5cf7986e419",
      "imageId": "file_c603d9cd-609f-430e-800f-d12224f4dbca",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_c603d9cd-609f-430e-800f-d12224f4dbca/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_63b2e855-1aa9-4236-abe9-486433a6a1f2",
      "platforms": [],
      "startsAt": "2026-05-13T17:30:00.000Z",
      "tags": [
        "gaming"
      ],
      "title": "Game release",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Night‚ We Will Play 3-4 Games 1hr each at mostǃǃ",
      "endsAt": "2026-05-01T03:00:00.000Z",
      "featured": false,
      "id": "cal_b9841b5f-2084-4716-9af8-68910fba5bb3",
      "imageId": "file_a06ced4b-301f-49ed-b134-c3a3c651533c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a06ced4b-301f-49ed-b134-c3a3c651533c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3ad1a80-5931-4ef1-a837-651ad824af06",
      "platforms": [],
      "startsAt": "2026-04-30T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Nightǃ （Game To be Announced）",
      "endsAt": "2026-04-30T04:00:00.000Z",
      "featured": false,
      "id": "cal_85b75575-f32d-418c-8240-314d688a14ee",
      "imageId": "file_6438390f-0cfd-4307-bd2f-9b073c7b49ad",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6438390f-0cfd-4307-bd2f-9b073c7b49ad/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_a1beb220-afc5-4390-a510-546db027778d",
      "platforms": [],
      "startsAt": "2026-04-30T02:00:00.000Z",
      "tags": [],
      "title": "Game Nightǃ （Game To be Announced）",
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
      "description": "Game TBD․ On the third Saturday due to Ossi having a show on the second and been unable to host as normal․",
      "endsAt": "2026-07-19T03:30:00.000Z",
      "featured": false,
      "id": "cal_17fe07c3-09df-49a0-857e-ae462bb8c7be",
      "imageId": "file_55f14029-720c-485b-a755-e03abbea3dbf",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_55f14029-720c-485b-a755-e03abbea3dbf/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c0f0453b-77b1-4b0d-8639-4a2d7add1ed6",
      "platforms": [],
      "startsAt": "2026-07-18T23:30:00.000Z",
      "tags": [],
      "title": "July Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game Night‚ We Will Play 3-4 Games 1hr each at mostǃǃ",
      "endsAt": "2026-04-24T03:00:00.000Z",
      "featured": false,
      "id": "cal_bc0712f2-f6f4-45a5-9480-810d9f5b7c03",
      "imageId": "file_a06ced4b-301f-49ed-b134-c3a3c651533c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a06ced4b-301f-49ed-b134-c3a3c651533c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c3ad1a80-5931-4ef1-a837-651ad824af06",
      "platforms": [],
      "startsAt": "2026-04-23T23:00:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Feline will be hosting a Game Night‚ Every Saturday․ Join and may the best person win",
      "endsAt": "2026-04-26T03:30:00.000Z",
      "featured": true,
      "id": "cal_b728cb5d-039c-452c-b2a9-fa6f1bfa46a1",
      "imageId": "file_f34b8f80-47cb-48b8-b773-f3c9397ef952",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_f34b8f80-47cb-48b8-b773-f3c9397ef952/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_548b8449-2fc6-48b8-bbdf-b380401d9b66",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-04-26T01:30:00.000Z",
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
      "description": "just a game event",
      "endsAt": "2026-04-22T09:00:00.000Z",
      "featured": false,
      "id": "cal_137e44b5-32ea-41dc-899a-794ae48fd196",
      "imageId": "file_a9097654-d9a8-4865-acad-7532f4d9bfb6",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_a9097654-d9a8-4865-acad-7532f4d9bfb6/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_23f847fb-9037-45cf-9f02-332edd48feac",
      "platforms": [],
      "startsAt": "2026-04-22T08:00:00.000Z",
      "tags": [],
      "title": "game event",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for hunted asylum 2ǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-05-30T02:30:00.000Z",
      "featured": false,
      "id": "cal_c065a3a0-a9a6-47e2-92a2-ba8cd9e90c32",
      "imageId": "file_87135bde-cbb2-4747-97d6-01d55b6db07c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_87135bde-cbb2-4747-97d6-01d55b6db07c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-05-29T23:35:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "i hosted game night for Audience Anarchyǃǃ please don't cheatǃ‚ hope to see you thereǃǃǃ",
      "endsAt": "2026-04-25T03:00:00.000Z",
      "featured": false,
      "id": "cal_5a6e3f60-7c60-458d-9089-83312d1a69a2",
      "imageId": "file_71d9ba64-3952-4032-aa92-8eb50046ad86",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_71d9ba64-3952-4032-aa92-8eb50046ad86/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_e680ae4f-7de7-479e-a6f0-11df34e84360",
      "platforms": [],
      "startsAt": "2026-04-25T01:30:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game night for the group",
      "endsAt": "2026-04-25T06:10:00.000Z",
      "featured": false,
      "id": "cal_1996c16d-8f56-4f5b-b242-1bcaade9aa83",
      "imageId": "file_4d0d807f-e797-4a51-95ce-c6769c09cb38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_4d0d807f-e797-4a51-95ce-c6769c09cb38/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_6e017ca0-5549-42ca-a40b-c7e452f704db",
      "platforms": [],
      "startsAt": "2026-04-25T02:10:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "chillin and having fun",
      "endsAt": "2026-04-22T02:00:00.000Z",
      "featured": false,
      "id": "cal_89d8324c-84ed-421e-92e5-23fe72e0d415",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b23420d8-ad69-4c1b-be93-99b914f3b4d7",
      "platforms": [],
      "startsAt": "2026-04-22T00:00:00.000Z",
      "tags": [],
      "title": "game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "First Game Night Ever \n\nJust Enjoy The Games \n\nif see someone during Sexual stuff to someone u will be kicked or banned from the group",
      "endsAt": "2026-04-26T00:25:00.000Z",
      "featured": false,
      "id": "cal_01be5612-77f4-4ffe-acc1-ddda3c2be8c1",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_09be3b4a-7ce8-4338-b9d4-fd79a419b354",
      "platforms": [],
      "startsAt": "2026-04-25T22:45:00.000Z",
      "tags": [],
      "title": "Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Gonna play games",
      "endsAt": "2026-04-26T05:38:00.000Z",
      "featured": false,
      "id": "cal_e0fb0250-81e4-4206-8dd5-3375b290daef",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_76640c69-72d6-469f-8b2d-d31ed96a41d0",
      "platforms": [],
      "startsAt": "2026-04-26T02:30:00.000Z",
      "tags": [],
      "title": "Game night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "If you want a specific game dont be afraid to ask․",
      "endsAt": "2026-04-24T02:00:00.000Z",
      "featured": false,
      "id": "cal_8ba7333d-3a4a-45ca-88fe-cc8deb606d8d",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_b1df6a38-6e41-4e9b-8698-b97d3d842ee1",
      "platforms": [],
      "startsAt": "2026-04-23T23:00:00.000Z",
      "tags": [],
      "title": "Game night",
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
      "description": "Join Sir Nicholas for a night of gaming and fun․ We play all sorts of games and genres․",
      "endsAt": "2026-04-26T03:00:00.000Z",
      "featured": false,
      "id": "cal_a1daf6f7-a481-4c84-a408-cc7dd471d9ad",
      "imageId": "file_d6901dec-a02b-4951-b319-97ce515835a9",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d6901dec-a02b-4951-b319-97ce515835a9/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_5b5653ea-a5e6-4c02-8682-bfd2fef60536",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-04-26T01:00:00.000Z",
      "tags": [
        "gaming",
        "game"
      ],
      "title": "Game Day with Sir Nicholas",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Hey everybeanǃǃǃǃ Lets get over that mid week fatigue with a little friendly competition At or weekly game nightǃǃǃ",
      "endsAt": "2026-05-28T02:00:00.000Z",
      "featured": true,
      "id": "cal_02adf593-d2ba-451b-aeb1-3d6e01ecadb0",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4ecc62e0-02b8-4999-8f1f-b9255c133d3c",
      "platforms": [],
      "startsAt": "2026-05-27T23:00:00.000Z",
      "tags": [],
      "title": "Wednesday Game Nightǃǃǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Weekly Game Eventǃ\n\nRules˸\nStay SFW\nCommon sense",
      "endsAt": "2026-04-23T00:00:00.000Z",
      "featured": false,
      "id": "cal_42b6ef81-3baa-4e3e-9812-31dd7e7e5041",
      "imageId": "file_d9aea3ca-8d01-4f5d-98fb-4521a7d23c38",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_d9aea3ca-8d01-4f5d-98fb-4521a7d23c38/1/file",
      "isDraft": false,
      "languages": [
        "eng"
      ],
      "ownerId": "grp_bd467d1f-7989-461b-9d30-10abfcc58fc2",
      "platforms": [
        "standalonewindows",
        "android"
      ],
      "startsAt": "2026-04-22T23:00:00.000Z",
      "tags": [
        "Rusk",
        "Gaming",
        "Funny",
        "Community",
        "Amogus"
      ],
      "title": "Weekly Game Event",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Upgrades‚ promotions with a side of gambling‚ and NUMBERS GOING UPǃǃǃ ˸D JOIN UPǃǃ",
      "endsAt": "2026-04-21T21:00:00.000Z",
      "featured": false,
      "id": "cal_ace681ef-16c4-4bcb-88f2-305213e824eb",
      "imageId": "file_bf117f4b-2c55-4674-a930-517f6321c4c5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_bf117f4b-2c55-4674-a930-517f6321c4c5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_4a7bdabc-5338-4135-aca1-d5ff0bff12d2",
      "platforms": [],
      "startsAt": "2026-04-21T19:30:00.000Z",
      "tags": [],
      "title": "A Game About Crates",
      "type": "event"
    }
  ],
  "totalCount": 102
}
```
