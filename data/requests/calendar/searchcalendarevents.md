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
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-06-19T02:30:00.000Z",
      "featured": false,
      "id": "cal_ef97951d-02dc-4b95-a0c5-7c733ecefe51",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-06-18T23:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
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
      "category": "gaming",
      "deletedAt": null,
      "description": "Come and Join us for some games‚ meet new people‚ and hopefully make some new friendsǃ",
      "endsAt": "2026-05-02T04:00:00.000Z",
      "featured": false,
      "id": "cal_cb6fa81e-8a39-4ba8-b2bc-d6bdae8a09c8",
      "imageId": "file_140bf868-62ce-4eaf-aece-44f52b8a093c",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_140bf868-62ce-4eaf-aece-44f52b8a093c/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_60dfad9e-d608-46e8-b42d-2aed74044c34",
      "platforms": [],
      "startsAt": "2026-05-02T01:00:00.000Z",
      "tags": [],
      "title": "GAME NIGHT",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-08-14T02:30:00.000Z",
      "featured": false,
      "id": "cal_ff561bde-3abb-4139-bbcf-7c4e3a374bc2",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-08-13T23:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-09-11T02:30:00.000Z",
      "featured": false,
      "id": "cal_961c87c8-1de9-4c87-9e46-6f377ee9df6e",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-09-10T23:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "gaming",
      "deletedAt": null,
      "description": "Game TBD",
      "endsAt": "2026-08-09T03:30:00.000Z",
      "featured": false,
      "id": "cal_c977a544-0c85-4365-833e-92c0e860be46",
      "imageId": "file_6ff70af2-4967-412e-bf9b-283d7c4ed06f",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_6ff70af2-4967-412e-bf9b-283d7c4ed06f/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_c0f0453b-77b1-4b0d-8639-4a2d7add1ed6",
      "platforms": [],
      "startsAt": "2026-08-08T23:30:00.000Z",
      "tags": [],
      "title": "August Game Night",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "other",
      "deletedAt": null,
      "description": "We are the one and only",
      "endsAt": "2026-05-01T04:34:00.000Z",
      "featured": false,
      "id": "cal_788fef58-d8cd-4078-a7ac-4de09aaa4df4",
      "imageId": "file_394906d6-efa2-4dd6-8de6-e16c2405fcff",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_394906d6-efa2-4dd6-8de6-e16c2405fcff/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1e93757a-4b69-4a2a-b242-c2f201ba85db",
      "platforms": [],
      "startsAt": "2026-04-26T02:34:00.000Z",
      "tags": [],
      "title": "The game ≻˸）",
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
      "description": "Come join us for a game․",
      "endsAt": "2026-08-27T03:59:00.000Z",
      "featured": false,
      "id": "cal_264e6abc-6f3b-4497-a365-ab7a343da3af",
      "imageId": "file_538afd1e-e016-4105-b751-ab48a2930766",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_538afd1e-e016-4105-b751-ab48a2930766/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d59b6d0d-4cd7-4527-9161-f6b9edd1c726",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-07-28T21:00:00.000Z",
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
      "endsAt": "2026-10-27T03:59:00.000Z",
      "featured": false,
      "id": "cal_d9a71b9a-fb7a-4fc0-b4f0-8c1265ca62ba",
      "imageId": "file_538afd1e-e016-4105-b751-ab48a2930766",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_538afd1e-e016-4105-b751-ab48a2930766/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_d59b6d0d-4cd7-4527-9161-f6b9edd1c726",
      "platforms": [
        "standalonewindows",
        "android",
        "ios"
      ],
      "startsAt": "2026-09-27T21:00:00.000Z",
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
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2027-02-12T03:30:00.000Z",
      "featured": false,
      "id": "cal_611011c6-fa8f-4549-8d8c-c6a64b2aa980",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2027-02-12T00:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-11-27T03:30:00.000Z",
      "featured": false,
      "id": "cal_747142b1-0742-491a-81c3-c806f126f1e0",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-11-27T00:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-12-18T03:30:00.000Z",
      "featured": false,
      "id": "cal_7d16b110-2d17-43fb-b455-d74f5a5ec329",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-12-18T00:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
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
      "description": "Changes weeklyǃ Vote in the discord to help us choose our gameǃ",
      "endsAt": "2026-05-22T04:00:00.000Z",
      "featured": false,
      "id": "cal_64664cef-a47f-45fd-9fef-1c7a131f1610",
      "imageId": null,
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_1a4e8486-5ba3-4b3d-b5c1-bd464ccab315",
      "platforms": [],
      "startsAt": "2026-05-22T01:30:00.000Z",
      "tags": [],
      "title": "Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-11-13T03:30:00.000Z",
      "featured": false,
      "id": "cal_038910c9-ed09-442a-9141-135623c1ce6e",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-11-13T00:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-12-25T03:30:00.000Z",
      "featured": false,
      "id": "cal_fa81015d-40b8-49af-837a-9ec1a9dfb739",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-12-25T00:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-07-03T02:30:00.000Z",
      "featured": false,
      "id": "cal_9a02e803-f0f9-4e74-bb73-bc4760d274e0",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-07-02T23:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    },
    {
      "accessType": "public",
      "category": "hangout",
      "deletedAt": null,
      "description": "Come join along for our weekly game nightsǃ What we do usually varies pretty heavily‚ but mostly focus on plenty of social gamesǃ Bring your friends along as wellǃ~ \n\nBefore joining˸\n1․ You must be 18 or older․ No exceptions․\n2․ Join the Discord pleaseǃ\n3․ Consent is CRITICAL․",
      "endsAt": "2026-10-30T02:30:00.000Z",
      "featured": false,
      "id": "cal_5decec9c-b981-4ab6-9e95-3edd0d7ef4e1",
      "imageId": "file_128ed235-acd5-4496-9edd-9220522805f5",
      "imageUrl": "https://api.vrchat.cloud/api/1/file/file_128ed235-acd5-4496-9edd-9220522805f5/1/file",
      "isDraft": false,
      "languages": [],
      "ownerId": "grp_dbadd17e-b24c-4575-a96a-8d21240ec0dd",
      "platforms": [],
      "startsAt": "2026-10-29T23:30:00.000Z",
      "tags": [],
      "title": "Thursday Night Game Nightǃ",
      "type": "event"
    }
  ],
  "totalCount": 143
}
```
