# checkUserExists via username

## Request
`GET https://vrchat.com/api/1/auth/exists?username=undefined`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| accept-ranges | `bytes` |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `34` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "nameOk": true,
  "userExists": false
}
```
