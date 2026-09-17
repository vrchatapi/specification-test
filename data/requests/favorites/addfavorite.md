# addFavorite

## Request
`POST https://api.vrchat.cloud/api/1/favorites`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "favoriteId": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "tags": [
    "avatars2"
  ],
  "type": "avatar"
}
```


## Response
`400 Bad Request`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `80` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "error": {
    "message": "You already have that avatar favorited",
    "status_code": 400
  }
}
```
