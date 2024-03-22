# deleteFriendRequest

## Issues
```
Response schema mismatch: Unexpected property at #/error.
```

## Request
`delete https://api.vrchat.cloud/api/1/user/usr_9e10ea3e-8115-4b51-9076-b1792215d57e/friendRequest`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `80` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  /**
   * Unexpected property.
   *
   * @schema Success
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/error
   */
  "error": {
    "message": "\"Requires Two-Factor Authentication\"",
    "status_code": 401
  }
}
```
