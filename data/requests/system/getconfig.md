# getConfig

## Issues
```
Response schema mismatch: Missing property at #/devAppVersionStandalone, Missing property at #/devDownloadLinkWindows, Missing property at #/devServerVersionStandalone, Missing property at #/gearDemoRoomId, Missing property at #/messageOfTheDay, Missing property at #/moderationQueryPeriod, Missing property at #/plugin, Missing property at #/releaseAppVersionStandalone, Missing property at #/releaseSdkUrl, Missing property at #/releaseSdkVersion, Missing property at #/releaseServerVersionStandalone, Missing property at #/userUpdatePeriod, Missing property at #/userVerificationDelay, Missing property at #/userVerificationRetry, Missing property at #/userVerificationTimeout, Missing property at #/worldUpdatePeriod, Missing property at #/player-url-resolver-hash, Unexpected property at #/accountTargetDisconnect, Unexpected property at #/analyticsSegment_NewUI_PctOfUsers, Unexpected property at #/analyticsSegment_NewUI_Salt, Unexpected property at #/apiFar, Unexpected property at #/apiService, Unexpected property at #/availableLanguageCodes, Unexpected property at #/availableLanguages, Unexpected property at #/avatarChannelCloudThroughputUdp, Unexpected property at #/clientNetDispatchThread, Unexpected property at #/clientNetInThread, Unexpected property at #/clientNetInThread2, Unexpected property at #/clientNetInThreadMobile, Unexpected property at #/clientNetInThreadMobile2, Unexpected property at #/clientNetOutThread, Unexpected property at #/clientNetOutThread2, Unexpected property at #/clientNetOutThreadMobile, Unexpected property at #/clientNetOutThreadMobile2, Unexpected property at #/clientQR, Unexpected property at #/constants, Unexpected property at #/contentPlusBones, Unexpected property at #/currentPrivacyVersion, Unexpected property at #/datagramSendViolationDraft, Unexpected property at #/devLanguageCodes, Unexpected property at #/disableAVProInProton, Unexpected property at #/disableCaptcha, Unexpected property at #/disconnectSecurityDefault, Unexpected property at #/economyPauseEnd, Unexpected property at #/economyPauseStart, Unexpected property at #/economyState, Unexpected property at #/forceUseLatestWorld, Unexpected property at #/googleApiClientId, Unexpected property at #/heightErrorApi, Unexpected property at #/imageHostUrlList, Unexpected property at #/listenerRequestBlinkBufferNotify, Unexpected property at #/minSupportedClientBuildNumber, Unexpected property at #/minimumUnityVersionForUploads, Unexpected property at #/networkTrendTarget, Unexpected property at #/offlineAnalysis, Unexpected property at #/photonNameserverOverrides, Unexpected property at #/player-url-resolver-sha1, Unexpected property at #/sdkClientDefault, Unexpected property at #/sliceScrollTarget, Unexpected property at #/stringHostUrlList, Unexpected property at #/stringJumpOffsetPlayer, Unexpected property at #/timekeeping, Unexpected property at #/websocketReconnectDelay.
```

## Request
`get https://vrchat.com/api/1/config`

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
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-regular-7wv` |
| x-vrc-api-version | `master-build-2024-06-27-barry-jerkcraveable` |

```jsonc
<unstable>
```
