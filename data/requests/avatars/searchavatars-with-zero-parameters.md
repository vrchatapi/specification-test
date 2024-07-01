# searchAvatars with zero parameters

## Issues
```
Response media type "text/html" not expected.
```

## Request
`get https://vrchat.com/api/1/avatars`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`502 Bad Gateway`

| Header | Value |
| ------ | ----- |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `122` |
| content-type | `text/html` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Accept-Encoding` |

```jsonc
"<html>\r\n<head><title>502 Bad Gateway</title></head>\r\n<body>\r\n<center><h1>502 Bad Gateway</h1></center>\r\n</body>\r\n</html>\r\n"
```
