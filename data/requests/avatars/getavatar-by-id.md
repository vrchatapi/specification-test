# getAvatar by id

## Issues
Response schema mismatch:
* Missing property at ``#/authorId``,
* Missing property at ``#/authorName``,
* Missing property at ``#/created_at``,
* Missing property at ``#/description``,
* Missing property at ``#/featured``,
* Missing property at ``#/id``,
* Missing property at ``#/imageUrl``,
* Missing property at ``#/listingDate``,
* Missing property at ``#/name``,
* Missing property at ``#/performance``,
* Missing property at ``#/releaseStatus``,
* Missing property at ``#/styles``,
* Missing property at ``#/tags``,
* Missing property at ``#/thumbnailImageUrl``,
* Missing property at ``#/unityPackageUrl``,
* Missing property at ``#/unityPackageUrlObject``,
* Missing property at ``#/unityPackages``,
* Missing property at ``#/updated_at``,
* Missing property at ``#/version``,
* Unexpected property at ``#/error``.
## Request
`GET https://api.vrchat.cloud/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`404 Not Found`

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
    "message": "Avatar Not Found",
    "status_code": 404
  }
}
```
