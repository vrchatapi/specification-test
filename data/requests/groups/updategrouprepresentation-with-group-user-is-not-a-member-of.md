# updateGroupRepresentation with group user is not a member of

## Request
`PUT https://api.vrchat.cloud/api/1/groups/grp_0f1d4450-822e-45d5-b5aa-6a0ea84<unstable>3/representation`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "isRepresenting": false
}
```


## Response
`403 Forbidden`

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
  "error": {
    "message": "You're not a member․",
    "status_code": 403
  }
}
```
