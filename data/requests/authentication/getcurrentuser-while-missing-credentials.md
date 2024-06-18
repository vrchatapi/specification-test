# getCurrentUser while missing credentials

## Request
`get https://vrchat.com/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `65` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-locke-g55` |
| x-vrc-api-version | `master-build-2024-06-17-jon-k-boattumbler` |

```jsonc
{
  "error": {
    "message": "\"Missing Credentials\"",
    "status_code": 401
  }
}
```
