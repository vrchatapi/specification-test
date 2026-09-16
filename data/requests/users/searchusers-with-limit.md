# searchUsers with limit

## Issues
Response schema mismatch:
* Missing property at ``#/0/currentAvatarImageUrl``,
* Missing property at ``#/0/currentAvatarTags``,
* Missing property at ``#/0/currentAvatarThumbnailImageUrl``,
* Missing property at ``#/1/currentAvatarImageUrl``,
* Missing property at ``#/1/currentAvatarTags``,
* Missing property at ``#/1/currentAvatarThumbnailImageUrl``,
* Missing property at ``#/2/currentAvatarImageUrl``,
* Missing property at ``#/2/currentAvatarTags``,
* Missing property at ``#/2/currentAvatarThumbnailImageUrl``,
* Missing property at ``#/3/currentAvatarImageUrl``,
* Missing property at ``#/3/currentAvatarTags``,
* Missing property at ``#/3/currentAvatarThumbnailImageUrl``,
* Missing property at ``#/4/currentAvatarImageUrl``,
* Missing property at ``#/4/currentAvatarTags``,
* Missing property at ``#/4/currentAvatarThumbnailImageUrl``.
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
