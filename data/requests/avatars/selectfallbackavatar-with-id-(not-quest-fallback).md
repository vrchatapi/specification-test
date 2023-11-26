# selectFallbackAvatar with id (not quest fallback)

## Request
`put https://api.vrchat.cloud/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0/selectFallback`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`403 Forbidden`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
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
  "error": {
    "message": "This avatar isn't tagged as a quest fallback avatar․",
    "status_code": 403
  }
}
```
