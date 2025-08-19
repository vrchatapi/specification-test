# createGroupCalendarEvent

## Request
`POST https://api.vrchat.cloud/api/1/calendar/undefined/event`

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
`403 Forbidden`

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
  "error": {
    "message": "Can't create calendar entries for that owner ID․",
    "status_code": 403
  }
}
```
