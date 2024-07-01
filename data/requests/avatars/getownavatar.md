# getOwnAvatar

## Issues
```
Response schema mismatch: Missing property at #/authorId, Missing property at #/authorName, Missing property at #/created_at, Missing property at #/description, Missing property at #/featured, Missing property at #/id, Missing property at #/imageUrl, Missing property at #/name, Missing property at #/releaseStatus, Missing property at #/tags, Missing property at #/thumbnailImageUrl, Missing property at #/unityPackages, Missing property at #/unityPackageUrl, Missing property at #/unityPackageUrlObject, Missing property at #/updated_at, Missing property at #/version, Unexpected property at #/error.
```

## Request
`get https://vrchat.com/api/1/users/undefined/avatar`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`403 Forbidden`

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
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-steel-4eg` |
| x-vrc-api-version | `master-build-2024-06-27-barry-jerkcraveable` |

```jsonc
{
  /**
   * Unexpected property.
   *
   * @schema Avatar
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/error
   */
  "error": {
    "message": "\"You do not have permission to fetch details about the avatar on this user.\"",
    "status_code": 403
  }
}
```
