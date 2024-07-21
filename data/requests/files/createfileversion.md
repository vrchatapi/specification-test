# createFileVersion

## Request
`post https://vrchat.com/api/1/file/undefined`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "signatureMd5": "dGVzdA==",
  "signatureSizeInBytes": 64,
  "fileMd5": "dGVzdA==",
  "fileSizeInBytes": 64
}
```


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
    "message": "model undefined not found",
    "status_code": 404
  }
}
```
