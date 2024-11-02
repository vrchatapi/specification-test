# removeFavorite

## Request
`DELETE https://vrchat.com/api/1/favorites/avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11`

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
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-request-id | `m2zgjpob95le8lg0` |

```jsonc
{
  "success": {
    "message": "favorite deleted!",
    "status_code": 200
  }
}
```
