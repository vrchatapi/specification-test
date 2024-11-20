# getUserNote

## Request
`GET https://api.vrchat.cloud/api/1/userNotes/unt_2ee83e63-8bb4-4add-8714-cef2894836c2`

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
  "createdAt": "<unstable>",
  "id": "unt_2ee83e63-8bb4-4add-8714-cef2894836c2",
  "note": "system_haha_we_actually_ended_up_documenting_this_one_too",
  "targetUserId": "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469",
  "userId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701"
}
```
