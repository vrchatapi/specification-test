# logout logout

## Request
`PUT https://vrchat.com/api/1/logout`

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
| content-length | `47` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| set-cookie | `<redacted>` |
| set-cookie | `<redacted>` |
| set-cookie | `<redacted>` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-request-id | `m2y1bindk1voksd2` |

```jsonc
{
  "success": {
    "message": "Ok!",
    "status_code": 200
  }
}
```
