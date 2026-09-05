# getCurrentUser after logout to log back in

## Issues
Response schema mismatch:
Schema is not an object at #/properties/undefined.
## Request
`GET https://api.vrchat.cloud/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| authorization | `Basic <redacted>` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `80` |
| content-type | `application/json` |
| expires | `Thu, 01 Jan 1970 00:00:01 GMT` |
| pragma | `no-cache` |
| referrer-policy | `same-origin` |
| retry-after | `300` |
| server | `cloudflare` |
| x-frame-options | `SAMEORIGIN` |

```jsonc
{
  "error": {
    "message": "\"Invalid Username/Email or Password\"",
    "status_code": 401
  }
}
```
