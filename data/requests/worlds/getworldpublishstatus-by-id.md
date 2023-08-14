# getWorldPublishStatus by id

## Fail logs
```
Response schema mismatch: #/canPubilsh failed required, #/canPublish failed additionalProperties.
```

## Request
`get https://api.vrchat.cloud/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/publish`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `20` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "canPublish": false
}
```
