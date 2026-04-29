# getWorldInstance first listed instance

## Issues
Response schema mismatch:
* Unexpected property at ``#/world/disabledPropAbilities``,
* Unexpected property at ``#/disabledPropAbilities``,
* Unexpected property at ``#/dominantLanguage``,
* Unexpected property at ``#/languageRatio``,
* Unexpected property at ``#/minimumAvatarPerformance``.
## Request
`GET https://api.vrchat.cloud/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b/65733~group(grp_64eeb1df-01ea-460c-98f0-d31c7e0cc72b)~groupAccessType(public)~ageGate~region(us)`

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
