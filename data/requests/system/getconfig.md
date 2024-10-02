# getConfig

## Issues
Response schema mismatch:
* Missing property at ``#/minSupportedClientBuildNumber/Default/redirectionAddress``,
* Unexpected property at ``#/reportOptions/avatar``,
* Unexpected property at ``#/reportOptions/group``,
* Unexpected property at ``#/reportOptions/user``,
* Unexpected property at ``#/reportOptions/world``,
* Unexpected property at ``#/BlinkExtractReportEntryClient``,
* Unexpected property at ``#/activityDatagramTypePointer``,
* Unexpected property at ``#/bounceLength``,
* Unexpected property at ``#/bufferFavoritePrint``,
* Unexpected property at ``#/daemonSessionNamePlayer``,
* Unexpected property at ``#/monitorCrustPrint``,
* Unexpected property at ``#/resolverShard``,
* Unexpected property at ``#/seedSaml``,
* Unexpected property at ``#/vrchatStatusCross``.
## Request
`GET https://vrchat.com/api/1/config`

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
