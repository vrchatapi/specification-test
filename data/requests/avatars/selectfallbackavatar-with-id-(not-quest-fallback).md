# selectFallbackAvatar with id (not quest fallback)

## Issues
```
Response media type "text/html" not expected.
```

## Request
`put https://vrchat.com/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0/selectFallback`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`504 Gateway Timeout`

| Header | Value |
| ------ | ----- |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `132` |
| content-type | `text/html` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Accept-Encoding` |

```jsonc
"<html>\r\n<head><title>504 Gateway Time-out</title></head>\r\n<body>\r\n<center><h1>504 Gateway Time-out</h1></center>\r\n</body>\r\n</html>\r\n"
```
