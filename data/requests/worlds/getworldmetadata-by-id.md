# getWorldMetadata by id

## Request
`get https://vrchat.com/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/metadata`

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
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-kronk-hea` |
| x-vrc-api-version | `master-build-2024-06-17-jon-k-boattumbler` |

```jsonc
{
  "id": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "metadata": {}
}
```
