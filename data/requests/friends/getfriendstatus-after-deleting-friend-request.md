# getFriendStatus after deleting friend request

## Fail logs
```
Response schema mismatch: #/isFriend failed required, #/outgoingRequest failed required, #/incomingRequest failed required.
```

## Request
`get https://api.vrchat.cloud/api/1/user//friendStatus`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`404 Not Found`

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
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "error": "The endpoint you're looking for is not implemented by our system.",
  "status_code": 404
}
```
