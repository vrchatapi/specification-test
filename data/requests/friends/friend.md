# friend

## Fail logs
```
Response schema mismatch: #/id failed required, #/senderUserId failed required, #/type failed required, #/message failed required, #/details failed required, #/created_at failed required.
```

## Request
`post https://api.vrchat.cloud/api/1/user/usr_9e10ea3e-8115-4b51-9076-b1792215d57e/friendRequest`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `65` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "error": {
    "message": "\"Missing Credentials\"",
    "status_code": 401
  }
}
```
