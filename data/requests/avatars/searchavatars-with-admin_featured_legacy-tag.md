# searchAvatars with admin_featured_legacy tag

## Issues
```
Response schema mismatch:

Unexpected property at #/0unityPackages/8/impostorizerVersion,
Unexpected property at #/0unityPackages/9/impostorizerVersion,
Unexpected property at #/0unityPackages/10/impostorizerVersion,
Unexpected property at #/3unityPackages/13/impostorizerVersion,
Unexpected property at #/3unityPackages/14/impostorizerVersion,
Unexpected property at #/3unityPackages/15/impostorizerVersion,
Unexpected property at #/5unityPackages/7/impostorizerVersion,
Unexpected property at #/5unityPackages/8/impostorizerVersion,
Unexpected property at #/5unityPackages/9/impostorizerVersion,
Unexpected property at #/6unityPackages/3/impostorizerVersion,
Unexpected property at #/6unityPackages/4/impostorizerVersion,
Unexpected property at #/6unityPackages/5/impostorizerVersion,
Unexpected property at #/8unityPackages/5/impostorizerVersion,
Unexpected property at #/8unityPackages/6/impostorizerVersion,
Unexpected property at #/8unityPackages/7/impostorizerVersion,
Unexpected property at #/9unityPackages/8/impostorizerVersion,
Unexpected property at #/9unityPackages/9/impostorizerVersion,
Unexpected property at #/9unityPackages/10/impostorizerVersion.
```

## Request
`get https://vrchat.com/api/1/avatars?tag=admin_featured_legacy`

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
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
<unstable>
```
