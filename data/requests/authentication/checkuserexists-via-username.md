# checkUserExists via username

## Issues
Response schema mismatch:
* Missing property at ``#/userExists``,
* Unexpected property at ``#/error``.
## Request
`GET https://api.vrchat.cloud/api/1/auth/exists?username=undefined`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |


## Response
`403 Forbidden`

| Header | Value |
| ------ | ----- |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Accept-Encoding` |

```jsonc
{
  "error": {
    "message": "\"the IP address or network you're trying to connect from is blacklisted (spamhaus_drop list). if you're using a vpn, try disabling it first. if you believe to have gotten this message in error, please contact support at help.vrchat.com\"",
    "status_code": 403,
    "waf_code": 42860,
    "waf_list": "spamhaus_drop"
  }
}
```
