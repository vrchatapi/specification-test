# getConfig

## Fail logs
```
Response schema mismatch: #/devAppVersionStandalone failed required, #/devDownloadLinkWindows failed required, #/devServerVersionStandalone failed required, #/gearDemoRoomId failed required, #/messageOfTheDay failed required, #/moderationQueryPeriod failed required, #/plugin failed required, #/releaseAppVersionStandalone failed required, #/releaseSdkUrl failed required, #/releaseSdkVersion failed required, #/releaseServerVersionStandalone failed required, #/userUpdatePeriod failed required, #/userVerificationDelay failed required, #/userVerificationRetry failed required, #/userVerificationTimeout failed required, #/worldUpdatePeriod failed required, #/player-url-resolver-hash failed required.
```

## Request
`get https://api.vrchat.cloud/api/1/config`

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
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |

```json
<unstable>
```
