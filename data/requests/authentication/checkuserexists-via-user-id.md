# checkUserExists via user id

## Issues
```
Response schema mismatch: Missing property at #/userExists, Unexpected property at #/error.
```

## Request
`get https://vrchat.com/api/1/auth/exists?userId=usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701`

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
| content-length | `86` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-yule-m6a` |
| x-vrc-api-version | `master-build-2024-06-25-funke-o-fockyfard` |

```jsonc
{
  /**
   * Unexpected property.
   *
   * @schema UserExists
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/error
   */
  "error": {
    "message": "\"username, email, or displayName required\"",
    "status_code": 400
  }
}
```
