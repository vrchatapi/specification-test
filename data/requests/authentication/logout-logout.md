# logout logout

## Issues
Response schema mismatch:
* Unexpected property at ``#/error``.
## Request
`PUT https://api.vrchat.cloud/api/1/logout`

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
