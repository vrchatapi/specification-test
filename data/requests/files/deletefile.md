# deleteFile

## Request
`delete https://vrchat.com/api/1/file/file_87394be4-911b-4ec8-80d4-c38f20da244a`

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

```jsonc
{
  "extension": ".A",
  "id": "file_87394be4-911b-4ec8-80d4-c38f20da244a",
  "mimeType": "image/jpeg",
  "name": "string",
  "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "tags": [
    "gallery"
  ],
  "versions": [
    {
      "created_at": "2024-07-22T00:56:27.430Z",
      "status": "complete",
      "version": 0
    }
  ]
}
```
