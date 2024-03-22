# sendSelfInvite

## Issues
```
Response schema mismatch: Unexpected property at #/error, Unexpected property at #/status_code.
```

## Request
`post https://api.vrchat.cloud/api/1/instances/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:<unstable>/invite`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`404 Not Found`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Origin, Accept-Encoding` |
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
  "error": "The endpoint you're looking for is not implemented by our system.",
  /**
   * Unexpected property.
   *
   * @schema Success
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/status_code
   */
  "status_code": 404
}
```
