# getFavorites

## Request
`GET https://vrchat.com/api/1/favorites?type=world`

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
| x-vrc-request-id | `m2wlqhelfex5qjin` |

```jsonc
[
  {
    "favoriteId": "wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd",
    "id": "fvrt_ace79e90-fadf-465c-9898-049c099060f1",
    "tags": [
      "world1"
    ],
    "type": "world"
  }
]
```
