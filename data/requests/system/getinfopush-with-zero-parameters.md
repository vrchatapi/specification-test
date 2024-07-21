# getInfoPush with zero parameters

## Issues
```
Response schema mismatch: Invalid type at #.
```

## Request
`get https://vrchat.com/api/1/infoPush`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`400 Bad Request`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `81` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-yolanda-msk` |
| x-vrc-api-version | `master-build-2024-07-20-dionysus-v-flipslice` |

```jsonc
{
  "error": {
    "message": "Parameter `require` must be an array․",
    "status_code": 400
  }
}
```
