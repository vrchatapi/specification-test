# verify2FA

## Issues
```
Response schema mismatch: Missing property at #/verified, Unexpected property at #/error.
```

## Request
`post https://api.vrchat.cloud/api/1/auth/twofactorauth/totp/verify`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>` |

```json
{
  "code": "<unstable>"
}
```


## Response
`429 Too Many Requests`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `59` |
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
   * @schema Verify2FAResult
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/error
   */
  "error": {
    "message": "Too many requests",
    "status_code": 429
  }
}
```
