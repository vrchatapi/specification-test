# getFavoriteLimits

## Issues
Response schema mismatch:
* Unexpected property at ``#/maxFavoriteGroups/vrcPlusWorld``,
* Unexpected property at ``#/maxFavoritesPerGroup/vrcPlusWorld``.
## Request
`GET https://api.vrchat.cloud/api/1/auth/user/favoritelimits`

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
{
  "defaultMaxFavoriteGroups": 1,
  "defaultMaxFavoritesPerGroup": 64,
  "maxFavoriteGroups": {
    "avatar": 6,
    "friend": 3,
    "vrcPlusWorld": 4,
    "world": 4
  },
  "maxFavoritesPerGroup": {
    "avatar": 50,
    "friend": 150,
    "vrcPlusWorld": 100,
    "world": 100
  }
}
```
