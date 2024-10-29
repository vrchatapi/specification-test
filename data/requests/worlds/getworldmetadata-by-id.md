# getWorldMetadata by id

## Request
`GET https://vrchat.com/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/metadata`

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
| x-vrc-request-id | `m2tqv245kij74dar` |

```jsonc
{
  "id": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "metadata": {}
}
```
