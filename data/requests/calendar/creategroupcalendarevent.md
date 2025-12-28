# createGroupCalendarEvent

## Issues
Response schema mismatch:
* Unexpected property at ``#/occurrenceKind``,
* Unexpected property at ``#/recurrence``,
* Unexpected property at ``#/seriesId``.
## Request
`POST https://api.vrchat.cloud/api/1/calendar/grp_ac985944-255d-4375-9cc3-5223aa5afe8e/event`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "accessType": "group",
  "category": "other",
  "description": "Test Description",
  "endsAt": "<unstable>",
  "sendCreationNotification": false,
  "startsAt": "<unstable>",
  "title": "Test Event"
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
  "interestedUserCount": 0,
  "isDraft": true,
  "languages": [],
  "occurrenceKind": "single",
  "ownerId": "grp_ac985944-255d-4375-9cc3-5223aa5afe8e",
  "platforms": [],
  "recurrence": null,
  "roleIds": [],
  "seriesId": null,
  "startsAt": "<unstable: string>",
  "tags": [],
  "title": "Test Event",
  "type": "event",
  "updatedAt": "<unstable: string>",
  "usesInstanceOverflow": false
}
```
