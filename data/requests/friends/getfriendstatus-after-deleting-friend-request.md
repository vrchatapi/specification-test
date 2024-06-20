# getFriendStatus after deleting friend request

## Request
`get https://vrchat.com/api/1/user/usr_9e10ea3e-8115-4b51-9076-b1792215d57e/friendStatus`

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
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-nanigan-10s` |
| x-vrc-api-version | `master-build-2024-06-17-jon-k-boattumbler` |

```jsonc
{
  "isFriend": false,
  "outgoingRequest": false,
  "incomingRequest": false
}
```
