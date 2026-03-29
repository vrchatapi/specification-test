# getWorldInstance first listed instance

## Issues
Response schema mismatch:
* Unexpected property at ``#/world/disabledPropAbilities``,
* Unexpected property at ``#/disabledPropAbilities``,
* Unexpected property at ``#/minimumAvatarPerformance``.
## Request
`GET https://api.vrchat.cloud/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/16700~group(grp_c88350bb-2962-4f68-be80-5f3e4df27c4a)~groupAccessType(public)~ageGate~region(use)`

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
