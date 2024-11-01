# deleteFileVersion

## Request
`DELETE https://vrchat.com/api/1/file/<unstable>/1`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

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
| x-vrc-request-id | `m2y1c08fxu4x9hwl` |

```jsonc
{
  "extension": ".A",
  "id": "<unstable>",
  "mimeType": "image/jpeg",
  "name": "string",
  "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "tags": [
    "gallery"
  ],
  "versions": [
    {
      "created_at": "<unstable>",
      "status": "complete",
      "version": 0
    }
  ]
}
```
