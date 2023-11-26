# searchAvatars with admin_featured_legacy tag

## Fail logs
```
Response schema mismatch: #/0unityPackages/0/variant failed additionalProperties, #/0unityPackages/1/variant failed additionalProperties, #/0unityPackages/1/scanStatus failed additionalProperties, #/0unityPackages/2/variant failed additionalProperties, #/0unityPackages/2/scanStatus failed additionalProperties, #/0unityPackages/3/variant failed additionalProperties, #/0unityPackages/3/scanStatus failed additionalProperties, #/2unityPackages/0/scanStatus failed additionalProperties, #/3unityPackages/0/impostorUrl failed additionalProperties, #/3unityPackages/0/scanStatus failed additionalProperties, #/3unityPackages/1/impostorUrl failed additionalProperties, #/3unityPackages/1/scanStatus failed additionalProperties, #/3unityPackages/2/impostorUrl failed additionalProperties, #/3unityPackages/2/scanStatus failed additionalProperties, #/3unityPackages/3/impostorUrl failed additionalProperties, #/3unityPackages/3/scanStatus failed additionalProperties, #/3unityPackages/4/impostorUrl failed additionalProperties, #/3unityPackages/4/scanStatus failed additionalProperties, #/3unityPackages/5/impostorUrl failed additionalProperties, #/3unityPackages/5/scanStatus failed additionalProperties, #/3unityPackages/6/impostorUrl failed additionalProperties, #/3unityPackages/6/scanStatus failed additionalProperties, #/3unityPackages/7/impostorUrl failed additionalProperties, #/3unityPackages/7/scanStatus failed additionalProperties, #/3unityPackages/8/impostorUrl failed additionalProperties, #/3unityPackages/8/scanStatus failed additionalProperties, #/3unityPackages/9/impostorUrl failed additionalProperties, #/3unityPackages/9/scanStatus failed additionalProperties, #/3unityPackages/10/impostorUrl failed additionalProperties, #/3unityPackages/10/scanStatus failed additionalProperties, #/3unityPackages/11/impostorUrl failed additionalProperties, #/3unityPackages/11/scanStatus failed additionalProperties, #/4unityPackages/0/variant failed additionalProperties, #/4unityPackages/0/scanStatus failed additionalProperties, #/4unityPackages/1/variant failed additionalProperties, #/4unityPackages/1/scanStatus failed additionalProperties, #/4unityPackages/2/variant failed additionalProperties, #/4unityPackages/2/scanStatus failed additionalProperties, #/4unityPackages/3/variant failed additionalProperties, #/4unityPackages/3/scanStatus failed additionalProperties, #/4unityPackages/4/variant failed additionalProperties, #/4unityPackages/4/scanStatus failed additionalProperties, #/5unityPackages/0/scanStatus failed additionalProperties, #/5unityPackages/1/scanStatus failed additionalProperties, #/5unityPackages/2/scanStatus failed additionalProperties, #/5unityPackages/3/scanStatus failed additionalProperties, #/5unityPackages/4/scanStatus failed additionalProperties, #/5unityPackages/5/scanStatus failed additionalProperties, #/6unityPackages/0/scanStatus failed additionalProperties, #/6unityPackages/1/scanStatus failed additionalProperties, #/7unityPackages/0/variant failed additionalProperties, #/7unityPackages/0/scanStatus failed additionalProperties, #/7unityPackages/1/variant failed additionalProperties, #/7unityPackages/1/scanStatus failed additionalProperties, #/7unityPackages/2/variant failed additionalProperties, #/7unityPackages/2/scanStatus failed additionalProperties, #/8unityPackages/0/scanStatus failed additionalProperties, #/8unityPackages/1/scanStatus failed additionalProperties, #/8unityPackages/2/scanStatus failed additionalProperties, #/8unityPackages/3/scanStatus failed additionalProperties, #/9unityPackages/0/variant failed additionalProperties, #/9unityPackages/0/scanStatus failed additionalProperties, #/9unityPackages/1/variant failed additionalProperties, #/9unityPackages/1/scanStatus failed additionalProperties, #/9unityPackages/2/variant failed additionalProperties, #/9unityPackages/2/scanStatus failed additionalProperties, #/9unityPackages/3/variant failed additionalProperties, #/9unityPackages/3/scanStatus failed additionalProperties, #/9unityPackages/4/variant failed additionalProperties, #/9unityPackages/4/scanStatus failed additionalProperties, #/9unityPackages/5/variant failed additionalProperties, #/9unityPackages/5/scanStatus failed additionalProperties, #/9unityPackages/6/variant failed additionalProperties, #/9unityPackages/6/scanStatus failed additionalProperties.
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

```json
<unstable>
```
