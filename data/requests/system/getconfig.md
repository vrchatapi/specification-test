# getConfig

## Issues
Response schema mismatch:
* Missing property at ``#/avatarPerfLimiter/AndroidMobile/allowed``,
* Missing property at ``#/avatarPerfLimiter/PC/allowed``,
* Missing property at ``#/avatarPerfLimiter/Pico/allowed``,
* Missing property at ``#/avatarPerfLimiter/Quest/allowed``,
* Missing property at ``#/avatarPerfLimiter/XRElite/allowed``,
* Missing property at ``#/avatarPerfLimiter/iOSMobile/allowed``,
* Missing property at ``#/minSupportedClientBuildNumber/Default/redirectionAddress``,
* Unexpected property at ``#/reportOptions/avatar``,
* Unexpected property at ``#/reportOptions/group``,
* Unexpected property at ``#/reportOptions/user``,
* Unexpected property at ``#/reportOptions/world``,
* Unexpected property at ``#/accessLogsUrls``,
* Unexpected property at ``#/ageVerificationInviteVisible``,
* Unexpected property at ``#/analysisMaxRetries``,
* Unexpected property at ``#/analysisRetryInterval``,
* Unexpected property at ``#/blockHoistDisplayText``,
* Unexpected property at ``#/disableGiftDrops``,
* Unexpected property at ``#/displayNameThrottlePaste``,
* Unexpected property at ``#/electionOfflineUsage``,
* Unexpected property at ``#/expiresPositionAttachment``,
* Unexpected property at ``#/giftDisplayType``,
* Unexpected property at ``#/jwtGenerateClipboardRate``,
* Unexpected property at ``#/latteInstructionEspressoUndoResponse``,
* Unexpected property at ``#/onlyTaggingLatencyCountry``,
* Unexpected property at ``#/paginationDelayPreviousBranchJump``,
* Unexpected property at ``#/payloadReverseSaml``,
* Unexpected property at ``#/poolAlignment``,
* Unexpected property at ``#/reliableDown``,
* Unexpected property at ``#/requireAgeVerificationBetaTag``,
* Unexpected property at ``#/stickerIso8601ScreenFusl``,
* Unexpected property at ``#/terminalChange``,
* Unexpected property at ``#/udpDistanceWorldPlainDown``.
## Request
`GET https://api.vrchat.cloud/api/1/config`

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

```jsonc
<unstable>
```
