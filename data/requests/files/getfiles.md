# getFiles

## Request
`GET https://vrchat.com/api/1/files?tag=gallery`

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
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
[
  {
    "extension": ".A",
    "id": "file_ebfc3d47-54cb-4217-9bfc-bf2442ed10e7",
    "mimeType": "image/jpeg",
    "name": "string",
    "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
    "tags": [
      "gallery"
    ],
    "versions": [
      {
        "created_at": "2024-10-03T20:29:22.237Z",
        "status": "complete",
        "version": 0
      }
    ]
  },
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
]
```
