# getWorldInstance first listed instance

## Issues
Response schema mismatch:
* Unexpected property at ``#/world/disabledPropAbilities``,
* Unexpected property at ``#/disabledPropAbilities``,
* Unexpected property at ``#/dominantLanguage``,
* Unexpected property at ``#/languageRatio``,
* Unexpected property at ``#/minimumAvatarPerformance``.
## Request
`GET https://api.vrchat.cloud/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/39081~group(grp_f6ae0b93-1c4d-4ee2-a06d-0439deaa99a3)~groupAccessType(public)~region(us)`

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
