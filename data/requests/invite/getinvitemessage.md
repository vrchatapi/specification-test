# getInviteMessage

## Request
`GET https://api.vrchat.cloud/api/1/message/usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701/message/0`

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
{
  "canBeUpdated": true,
  "id": "invm_da8a15f3-5d6a-4ca3-aae1-92c0ce839a81",
  "message": "Hello‚ Worldǃ",
  "messageType": "message",
  "remainingCooldownMinutes": 0,
  "slot": 0,
  "updatedAt": "<unstable: string>"
}
```
