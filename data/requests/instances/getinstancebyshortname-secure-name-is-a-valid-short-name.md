# getInstanceByShortName secure name is a valid short name

## Issues
Response schema mismatch:
* Missing property at ``#/active``,
* Missing property at ``#/canRequestInvite``,
* Missing property at ``#/capacity``,
* Missing property at ``#/clientNumber``,
* Missing property at ``#/full``,
* Missing property at ``#/id``,
* Missing property at ``#/instanceId``,
* Missing property at ``#/location``,
* Missing property at ``#/n_users``,
* Missing property at ``#/name``,
* Missing property at ``#/permanent``,
* Missing property at ``#/photonRegion``,
* Missing property at ``#/platforms``,
* Missing property at ``#/region``,
* Missing property at ``#/secureName``,
* Missing property at ``#/tags``,
* Missing property at ``#/type``,
* Missing property at ``#/worldId``,
* Missing property at ``#/queueEnabled``,
* Missing property at ``#/queueSize``,
* Missing property at ``#/recommendedCapacity``,
* Missing property at ``#/strict``,
* Missing property at ``#/userCount``,
* Missing property at ``#/world``,
* Unexpected property at ``#/error``.
## Request
`GET https://api.vrchat.cloud/api/1/instances/s/undefined`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`404 Not Found`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
<unstable>
```
