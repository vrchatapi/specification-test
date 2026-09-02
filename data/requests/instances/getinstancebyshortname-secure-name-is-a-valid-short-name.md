# getInstanceByShortName secure name is a valid short name

## Issues
Response schema mismatch:
* Unexpected property at ``#/categoryId``,
* Unexpected property at ``#/creationLanguages``,
* Unexpected property at ``#/description``,
* Unexpected property at ``#/languages``,
* Unexpected property at ``#/languagesIso639``,
* Unexpected property at ``#/userIcons``,
* Unexpected property at ``#/vibeIds``.
## Request
`GET https://api.vrchat.cloud/api/1/instances/s/kxp47xnk`

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
