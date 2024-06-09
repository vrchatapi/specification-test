# checkUserExists with zero parameters

## Request
`get https://vrchat.com/api/1/auth/exists`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`400 Bad Request`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `86` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-juliet-7qb` |
| x-vrc-api-version | `master-build-2024-06-07-kylie-e-pumpernickelblarborries` |

```jsonc
{
  "error": {
    "message": "\"username, email, or displayName required\"",
    "status_code": 400
  }
}
```
