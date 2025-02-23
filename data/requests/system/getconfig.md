# getConfig

## Issues
Response schema mismatch:
* Missing property at ``#/appName``,
* Missing property at ``#/buildVersionTag``,
* Missing property at ``#/deploymentGroup``,
* Missing property at ``#/serverName``,
* Unexpected property at ``#/reportCategories/avatar/description``,
* Unexpected property at ``#/reportCategories/avatar/title``,
* Unexpected property at ``#/reportCategories/warnings/description``,
* Unexpected property at ``#/reportCategories/warnings/title``,
* Unexpected property at ``#/reportCategories/avatarpage``,
* Unexpected property at ``#/reportOptions/avatar/avatarpage``,
* Unexpected property at ``#/reportReasons/copyright``,
* Unexpected property at ``#/reportReasons/fraud``,
* Unexpected property at ``#/reportReasons/technical``,
* Unexpected property at ``#/cdnGraphRotationRollbackHash``,
* Unexpected property at ``#/chatKernel``,
* Unexpected property at ``#/commitNetworkThresholdOauth``,
* Unexpected property at ``#/communityLocationVirtual``,
* Unexpected property at ``#/ethernetAssetJoinOnly``,
* Unexpected property at ``#/groupCremaSoap``,
* Unexpected property at ``#/orchestrationBootstrapJwtTaggingExpires``,
* Unexpected property at ``#/photonSchedulingSourdough``,
* Unexpected property at ``#/redoWriteTicketInstance``,
* Unexpected property at ``#/xmlRollbackPlayer``,
* Unexpected property at ``#/yamlImmunity``.
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
