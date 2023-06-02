# getCurrentUser with username and password (expect fail)

## Request
`get https://api.vrchat.cloud/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| authorization | `Basic <redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `40` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| set-cookie | `<redacted>` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "requiresTwoFactorAuth": [
    "totp",
    "otp"
  ]
}
```
