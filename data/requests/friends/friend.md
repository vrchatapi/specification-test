# friend

## Request
`POST https://vrchat.com/api/1/user/usr_9e10ea3e-8115-4b51-9076-b1792215d57e/friendRequest`

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
| x-vrc-request-id | `m2y1c1xxtqlk08p2` |

```jsonc
{
  "id": "<unstable: string>",
  "senderUserId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "senderUsername": "8cf3def6b8cea",
  "type": "friendRequest",
  "message": "",
  "details": "{}",
  "seen": false,
  "created_at": "<unstable: string>"
}
```
