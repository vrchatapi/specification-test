# verify2FA while missing credentials

## Request
`post https://vrchat.com/api/1/auth/twofactorauth/totp/verify`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `65` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-blank-o8l` |
| x-vrc-api-version | `master-build-2024-06-07-kylie-e-pumpernickelblarborries` |

```jsonc
{
  "error": {
    "message": "\"Missing Credentials\"",
    "status_code": 401
  }
}
```
