# getGroupCalendarEventICS

## Request
`GET https://api.vrchat.cloud/api/1/calendar/grp_ac985944-255d-4375-9cc3-5223aa5afe8e/cal_00000000-0000-0000-0000-000000000000.ics`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`404 Not Found`

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
    "message": "Calendar Entry not foundǃ",
    "status_code": 404
  }
}
```
