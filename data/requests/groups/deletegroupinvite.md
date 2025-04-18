# deleteGroupInvite

## Request
`DELETE https://api.vrchat.cloud/api/1/groups/<unstable>/invites/usr_9e10ea3e-8115-4b51-9076-b1792215d57e`

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

```jsonc
{
  "success": {
    "message": "b9ce75b4dc299 has been uninvited.",
    "status_code": 200
  }
}
```
