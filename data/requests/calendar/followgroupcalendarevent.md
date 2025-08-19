# followGroupCalendarEvent

## Issues
Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/title``,
* Missing property at ``#/accessType``,
* Missing property at ``#/createdAt``,
* Unexpected property at ``#/error``.
## Request
`POST https://api.vrchat.cloud/api/1/calendar/undefined/undefined/follow`

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
`500 Internal Server Error`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `59` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "error": {
    "message": "Application error",
    "status_code": 500
  }
}
```
