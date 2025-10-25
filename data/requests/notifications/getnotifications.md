# getNotifications

## Request
`GET https://api.vrchat.cloud/api/1/auth/user/notifications`

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

```jsonc
[
  {
    "id": "frq_ba7bf9e6-5071-4b35-b684-fd7b1047cce9",
    "senderUserId": "usr_94ace1cd-92f7-4f2a-af56-28faf8c51ff2",
    "senderUsername": "evil linux thug",
    "type": "friendRequest",
    "message": "",
    "details": "{}",
    "seen": false,
    "created_at": "2025-06-19T01:15:55.323Z"
  },
  {
    "id": "not_8a35f29a-acd4-4b14-8f73-19e717583d7b",
    "senderUserId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "senderUsername": "8cf3def6b8cea",
    "type": "invite",
    "message": "This is a generated invite to The Black Cat",
    "details": "{\"worldId\":\"wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:undefined\",\"worldName\":\"The Black Cat\"}",
    "seen": false,
    "created_at": "2025-10-25T01:11:00.085Z"
  }
]
```
