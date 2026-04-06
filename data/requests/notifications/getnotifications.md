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
    "created_at": "2026-03-20T01:46:10.095Z",
    "details": "{}",
    "id": "frq_5b0739b5-fb36-4e62-8ec6-f88e11524cde",
    "message": "",
    "seen": false,
    "senderUserId": "usr_edd6866e-2ce1-4893-98cc-7db744c6465b",
    "senderUsername": "stop screaming",
    "type": "friendRequest"
  },
  {
    "created_at": "2025-06-19T01:15:55.323Z",
    "details": "{}",
    "id": "frq_ba7bf9e6-5071-4b35-b684-fd7b1047cce9",
    "message": "",
    "seen": false,
    "senderUserId": "usr_94ace1cd-92f7-4f2a-af56-28faf8c51ff2",
    "senderUsername": "evil linux thug",
    "type": "friendRequest"
  },
  {
    "created_at": "2026-04-06T02:06:17.911Z",
    "details": "{\"worldId\":\"wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:18040~private(usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701)~canRequestInvite~region(use)\",\"worldName\":\"The Black Cat\"}",
    "id": "not_f340f46d-b94c-458e-91d8-dffb60e49d6f",
    "message": "This is a generated invite to The Black Cat",
    "seen": false,
    "senderUserId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "senderUsername": "8cf3def6b8cea",
    "type": "invite"
  }
]
```
