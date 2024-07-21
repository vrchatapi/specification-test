# createFile

## Request
`post https://vrchat.com/api/1/file`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "name": "string",
  "mimeType": "image/jpeg",
  "extension": "A",
  "tags": [
    "gallery"
  ]
}
```


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

```jsonc
{
  /**
   * Unexpected property.
   *
   * @schema File
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/error
   */
  "error": {
    "message": "You can't upload any files right now․",
    "status_code": 403
  }
}
```
