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
* Unexpected property at ``#/commandRead``,
* Unexpected property at ``#/disableGiftDrops``,
* Unexpected property at ``#/draftPerformanceBarrier``,
* Unexpected property at ``#/nextSortEndpointCappuccino``,
* Unexpected property at ``#/requireAgeVerificationBetaTag``,
* Unexpected property at ``#/sourdoughBandwidthItineraryBaristaInternal``,
* Unexpected property at ``#/souvenirElectionPasteValue``,
* Unexpected property at ``#/souvenirLimiterGenderAnalysis``,
* Unexpected property at ``#/spaceUpload``,
* Unexpected property at ``#/syscallMacchiatoStringPita``,
* Unexpected property at ``#/transactionDraft``,
* Unexpected property at ``#/workerCrossPlainBuild``.
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
