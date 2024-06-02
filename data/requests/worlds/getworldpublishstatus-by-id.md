# getWorldPublishStatus by id

## Request
`get https://vrchat.com/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/publish`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| accept-ranges | `bytes` |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `20` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-nyx-vk8` |
| x-vrc-api-version | `master-build-2024-06-01-beverly-fishgubbin` |

```jsonc
{
  "canPublish": false
}
```
