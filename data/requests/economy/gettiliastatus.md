# getTiliaStatus

## Issues
Response schema mismatch:
* Unexpected property at ``#/ledgerMode``,
* Unexpected property at ``#/shadowBreaker``.
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
  "ledgerMode": "internal",
  "shadowBreaker": "ok"
}
```
