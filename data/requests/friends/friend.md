# friend

## Issues
```
Response schema mismatch: Missing property at #/id, Missing property at #/senderUserId, Missing property at #/type, Missing property at #/message, Missing property at #/details, Missing property at #/created_at, Unexpected property at #/error.
```

## Request
`post https://vrchat.com/api/1/user/usr_9e10ea3e-8115-4b51-9076-b1792215d57e/friendRequest`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`400 Bad Request`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `90` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-quim-u1g` |
| x-vrc-api-version | `master-build-2024-06-27-barry-jerkcraveable` |

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
    "message": "This user has already been sent a friend request",
    "status_code": 400
  }
}
```
