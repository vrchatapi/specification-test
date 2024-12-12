# getFileAnalysisStandard

## Issues
Response schema mismatch:
* Missing property at ``#/avatarStats``,
* Missing property at ``#/fileSize``,
* Missing property at ``#/success``,
* Missing property at ``#/uncompressedSize``,
* Unexpected property at ``#/error``.
## Request
`GET https://api.vrchat.cloud/api/1/analysis/file_989feccd-3e6d-41f6-bf87-a8b3ece88438/1/standard`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`202 Accepted`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `67` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "error": {
    "message": "Analysis not yet avalible",
    "status_code": 202
  }
}
```
