# getFeaturedCalendarEvents

## Issues
Response schema mismatch:
* Unexpected property at ``#/results/2/occurrenceKind``,
* Unexpected property at ``#/results/2/recurrence``,
* Unexpected property at ``#/results/2/seriesId``,
* Unexpected property at ``#/results/6/occurrenceKind``,
* Unexpected property at ``#/results/6/recurrence``,
* Unexpected property at ``#/results/6/seriesId``,
* Unexpected property at ``#/results/12/occurrenceKind``,
* Unexpected property at ``#/results/12/recurrence``,
* Unexpected property at ``#/results/12/seriesId``.
## Request
`GET https://api.vrchat.cloud/api/1/calendar/featured`

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
<unstable>
```
