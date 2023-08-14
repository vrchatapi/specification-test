# getAvatar by id

## Fail logs
```
Response schema mismatch: #/authorId failed required, #/authorName failed required, #/created_at failed required, #/description failed required, #/featured failed required, #/id failed required, #/imageUrl failed required, #/name failed required, #/releaseStatus failed required, #/tags failed required, #/thumbnailImageUrl failed required, #/unityPackages failed required, #/unityPackageUrl failed required, #/unityPackageUrlObject failed required, #/updated_at failed required, #/version failed required.
```

## Request
`get https://api.vrchat.cloud/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `65` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "error": {
    "message": "\"Missing Credentials\"",
    "status_code": 401
  }
}
```
