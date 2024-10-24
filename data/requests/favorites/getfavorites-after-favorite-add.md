# getFavorites after favorite add

## Request
`GET https://vrchat.com/api/1/favorites?tag=avatars2&type=avatar`

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
[
  {
    "favoriteId": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
    "id": "<unstable>",
    "tags": [
      "avatars2"
    ],
    "type": "avatar"
  }
]
```
