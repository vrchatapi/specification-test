# searchUsers with limit

## Issues
Response schema mismatch:
* Unexpected property at ``#/0/bannerColor``,
* Unexpected property at ``#/0/bannerType``,
* Unexpected property at ``#/0/iconFrame``,
* Unexpected property at ``#/0/iconUrl``,
* Unexpected property at ``#/0/nameplateEffect``,
* Unexpected property at ``#/0/profileEffect``,
* Unexpected property at ``#/1/bannerColor``,
* Unexpected property at ``#/1/bannerType``,
* Unexpected property at ``#/1/iconFrame``,
* Unexpected property at ``#/1/iconUrl``,
* Unexpected property at ``#/1/nameplateEffect``,
* Unexpected property at ``#/1/profileEffect``,
* Unexpected property at ``#/2/bannerColor``,
* Unexpected property at ``#/2/bannerType``,
* Unexpected property at ``#/2/iconFrame``,
* Unexpected property at ``#/2/iconUrl``,
* Unexpected property at ``#/2/nameplateEffect``,
* Unexpected property at ``#/2/profileEffect``,
* Unexpected property at ``#/3/bannerType``,
* Unexpected property at ``#/3/bannerUrl``,
* Unexpected property at ``#/3/iconFrame``,
* Unexpected property at ``#/3/iconUrl``,
* Unexpected property at ``#/3/nameplateEffect``,
* Unexpected property at ``#/3/profileEffect``,
* Unexpected property at ``#/4/bannerColor``,
* Unexpected property at ``#/4/bannerType``,
* Unexpected property at ``#/4/iconFrame``,
* Unexpected property at ``#/4/iconUrl``,
* Unexpected property at ``#/4/nameplateEffect``,
* Unexpected property at ``#/4/profileEffect``.
## Request
`GET https://api.vrchat.cloud/api/1/users?n=5&search=a`

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
