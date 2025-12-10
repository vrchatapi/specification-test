# followGroupCalendarEvent

## Request
`POST https://api.vrchat.cloud/api/1/calendar/grp_ac985944-255d-4375-9cc3-5223aa5afe8e/<unstable>/follow`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "isFollowing": true
}
```


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "accessType": "group",
  "category": "other",
  "closeInstanceAfterEndMinutes": 5,
  "createdAt": "<unstable: string>",
  "deletedAt": null,
  "description": "Test Description",
  "durationInMs": 3600000,
  "endsAt": "<unstable: string>",
  "featured": false,
  "guestEarlyJoinMinutes": 5,
  "hostEarlyJoinMinutes": 60,
  "id": "<unstable: string>",
  "imageId": null,
  "interestedUserCount": 1,
  "isDraft": true,
  "languages": [],
  "ownerId": "grp_ac985944-255d-4375-9cc3-5223aa5afe8e",
  "platforms": [],
  "roleIds": [],
  "startsAt": "<unstable: string>",
  "tags": [],
  "title": "Test Event",
  "type": "event",
  "updatedAt": "<unstable: string>",
  "userInterest": {
    "createdAt": "<unstable: string>",
    "isFollowing": true,
    "updatedAt": "<unstable: string>"
  },
  "usesInstanceOverflow": false
}
```
