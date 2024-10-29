# moderateUser

## Request
`POST https://vrchat.com/api/1/auth/user/playermoderations`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "moderated": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "type": "unmute"
}
```


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
| x-vrc-request-id | `m2tqvkozs9e33crn` |

```jsonc
{
  "created": "<unstable: string>",
  "id": "oun_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "sourceDisplayName": "8cf3def6b8cea",
  "sourceUserId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "targetDisplayName": "tupper",
  "targetUserId": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "type": "unmute"
}
```
