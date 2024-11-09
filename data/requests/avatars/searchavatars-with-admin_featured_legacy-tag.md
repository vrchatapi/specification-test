# searchAvatars with admin_featured_legacy tag

## Issues
Response schema mismatch:
* Unexpected property at ``#/0/styles``,
* Unexpected property at ``#/1/styles``,
* Unexpected property at ``#/2/styles``,
* Unexpected property at ``#/3/styles``,
* Unexpected property at ``#/4/styles``,
* Unexpected property at ``#/5/styles``,
* Unexpected property at ``#/6/styles``,
* Unexpected property at ``#/7/styles``,
* Unexpected property at ``#/8/styles``,
* Unexpected property at ``#/9/styles``.
## Request
`GET https://api.vrchat.cloud/api/1/avatars?tag=admin_featured_legacy`

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
<unstable>
```
