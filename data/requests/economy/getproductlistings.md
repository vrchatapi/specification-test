# getProductListings

## Issues
Response schema mismatch:
* Invalid type at ``#``.
## Request
`GET https://api.vrchat.cloud/api/1/user/usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20/listings?hydrate=true`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


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
    "message": "Access Denied",
    "status_code": 403
  }
}
```
