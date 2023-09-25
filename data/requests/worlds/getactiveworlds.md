# getActiveWorlds

## Fail logs
```
Response schema mismatch: #/0/favorites failed required, #/0/created_at failed required, #/0/updated_at failed required, #/1/favorites failed required, #/1/created_at failed required, #/1/updated_at failed required, #/2/favorites failed required, #/2/created_at failed required, #/2/updated_at failed required, #/3/favorites failed required, #/3/created_at failed required, #/3/updated_at failed required, #/4/favorites failed required, #/4/created_at failed required, #/4/updated_at failed required, #/4/capacity failed maximum, #/5/capacity failed maximum, #/6/favorites failed required, #/6/created_at failed required, #/6/updated_at failed required, #/7/favorites failed required, #/7/created_at failed required, #/7/updated_at failed required, #/8/capacity failed maximum, #/9/capacity failed maximum.
```

## Request
`get https://api.vrchat.cloud/api/1/worlds/active`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

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

```json
<unstable>
```
