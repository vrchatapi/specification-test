# checkUserExists via user id

## Fail logs
```
Response schema mismatch: #/userExists failed required, #/error failed additionalProperties.
```

## Request
`get https://api.vrchat.cloud/api/1/auth/exists?userId=usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`400 Bad Request`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `86` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "error": {
    "message": "\"username, email, or displayName required\"",
    "status_code": 400
  }
}
```
