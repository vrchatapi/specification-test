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
* Unexpected property at ``#/bounceHomeListener``,
* Unexpected property at ``#/cloneNuisanceMochaDetection``,
* Unexpected property at ``#/detectionResortPlayerClip``,
* Unexpected property at ``#/disableGiftDrops``,
* Unexpected property at ``#/fpsPoolBracketProbabilityCompile``,
* Unexpected property at ``#/payloadIpv4VersionOnline``,
* Unexpected property at ``#/realtimeCron``,
* Unexpected property at ``#/requireAgeVerificationBetaTag``,
* Unexpected property at ``#/signHeadpatResortBranch``,
* Unexpected property at ``#/steamNightly``,
* Unexpected property at ``#/tapePlayerRateLicenseTarget``,
* Unexpected property at ``#/totalReport``.
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
