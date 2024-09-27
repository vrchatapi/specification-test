# getInstance

## Issues
```
Response schema mismatch:

Unexpected property at #/platforms/ios,
Unexpected property at #/world/storeId,
Unexpected property at #/displayName,
Unexpected property at #/gameServerVersion,
Unexpected property at #/instancePersistenceEnabled,
Unexpected property at #/playerPersistenceEnabled.
```

## Request
`get https://vrchat.com/api/1/instances/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:<unstable>`

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
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
<unstable>
```
