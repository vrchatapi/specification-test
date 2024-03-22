# friend

## Issues
```
Response schema mismatch: Missing property at #/id, Missing property at #/senderUserId, Missing property at #/type, Missing property at #/message, Missing property at #/details, Missing property at #/created_at, Unexpected property at #/error.
```

## Request
`post https://api.vrchat.cloud/api/1/user/usr_9e10ea3e-8115-4b51-9076-b1792215d57e/friendRequest`

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
   * @schema Notification
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/error
   */
  "error": {
    /**
     * Missing property.
     *
     * @schema Notification
     * @keyword required
     *
     * #/required
     * #/message
     */
    "message": "\"Requires Two-Factor Authentication\"",
    "status_code": 401
  }
}
```
