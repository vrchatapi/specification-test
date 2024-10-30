# createFileVersion

## Request
`POST https://vrchat.com/api/1/file/<unstable>`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "fileMd5": "dGVzdA==",
  "fileSizeInBytes": 64,
  "signatureMd5": "dGVzdA==",
  "signatureSizeInBytes": 64
}
```


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
| x-vrc-request-id | `m2v6a9rostt5ogtr` |

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
    },
    {
      "created_at": "<unstable>",
      "file": {
        "category": "simple",
        "fileName": "string.<unstable>.1.A",
        "md5": "dGVzdA==",
        "sizeInBytes": 64,
        "status": "waiting",
        "uploadId": "",
        "url": "https://api.vrchat.cloud/api/1/file/<unstable>/1/file"
      },
      "signature": {
        "category": "simple",
        "fileName": "string.<unstable>.1.A.signature",
        "md5": "dGVzdA==",
        "sizeInBytes": 64,
        "status": "waiting",
        "uploadId": "",
        "url": "https://api.vrchat.cloud/api/1/file/<unstable>/1/signature"
      },
      "status": "waiting",
      "version": 1
    }
  ]
}
```
