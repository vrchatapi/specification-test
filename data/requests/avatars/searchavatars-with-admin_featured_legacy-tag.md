# searchAvatars with admin_featured_legacy tag

## Issues
```
Response schema mismatch: Unexpected property at #/0unityPackages/0/variant, Unexpected property at #/0unityPackages/1/variant, Unexpected property at #/0unityPackages/2/variant, Unexpected property at #/0unityPackages/3/variant, Unexpected property at #/4unityPackages/0/variant, Unexpected property at #/4unityPackages/1/variant, Unexpected property at #/4unityPackages/2/variant, Unexpected property at #/4unityPackages/3/variant, Unexpected property at #/4unityPackages/4/variant, Unexpected property at #/7unityPackages/0/variant, Unexpected property at #/7unityPackages/1/variant, Unexpected property at #/7unityPackages/2/variant, Unexpected property at #/9unityPackages/0/variant, Unexpected property at #/9unityPackages/1/variant, Unexpected property at #/9unityPackages/2/variant, Unexpected property at #/9unityPackages/3/variant, Unexpected property at #/9unityPackages/4/variant, Unexpected property at #/9unityPackages/5/variant, Unexpected property at #/9unityPackages/6/variant.
```

## Request
`get https://api.vrchat.cloud/api/1/avatars?tag=admin_featured_legacy`

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
