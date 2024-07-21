# deleteFile

## Request
`delete https://vrchat.com/api/1/file/file_67518e68-54f0-4a77-8fb8-7bb0c40d0292`

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
  "id": "file_67518e68-54f0-4a77-8fb8-7bb0c40d0292",
  "mimeType": "image/jpeg",
  "name": "string",
  "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "tags": [
    "gallery"
  ],
  "versions": [
    {
      "created_at": "2024-07-21T22:52:11.890Z",
      "status": "complete",
      "version": 0
    }
  ]
}
```
