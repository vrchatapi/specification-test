# updateGroup

## Request
`PUT https://api.vrchat.cloud/api/1/groups/<unstable>`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "joinState": "invite",
  "name": "Test 2"
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
    "message": "You don't have permission․",
    "status_code": 403
  }
}
```
