# getTiliaStatus

## Issues
Response schema mismatch:
* Unexpected property at ``#/economyState``,
* Unexpected property at ``#/plannedOfflineWindowEnd``,
* Unexpected property at ``#/plannedOfflineWindowStart``.
## Request
`GET https://api.vrchat.cloud/api/1/tilia/status`

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
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "economyOnline": true,
  "economyState": 1,
  "plannedOfflineWindowEnd": "2025-05-15T16:05:00.000Z",
  "plannedOfflineWindowStart": "2025-05-15T14:55:00.000Z"
}
```
