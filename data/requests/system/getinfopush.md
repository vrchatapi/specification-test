# getInfoPush

## Issues
Response schema mismatch:
* Invalid type at ``#``.
## Request
`GET https://api.vrchat.cloud/api/1/infoPush?include=quick-menu-banner&require=quick-menu-banner`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |


## Response
`503 Service Unavailable`

| Header | Value |
| ------ | ----- |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `136` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |

```jsonc
{
  "error": {
    "message": "\"VRChat API services are currently unavailable. Please check status.vrchat.com for updates!\"",
    "status_code": 503
  }
}
```
