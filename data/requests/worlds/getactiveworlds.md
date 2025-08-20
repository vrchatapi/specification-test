# getActiveWorlds

## Issues
Response schema mismatch:
* Unexpected property at ``#/0unityPackages/0/created_at``,
* Unexpected property at ``#/0unityPackages/1/created_at``,
* Unexpected property at ``#/0unityPackages/2/created_at``,
* Unexpected property at ``#/0unityPackages/3/created_at``,
* Unexpected property at ``#/0unityPackages/4/created_at``,
* Unexpected property at ``#/0unityPackages/5/created_at``,
* Unexpected property at ``#/0unityPackages/6/created_at``,
* Unexpected property at ``#/0unityPackages/7/created_at``,
* Unexpected property at ``#/1unityPackages/0/created_at``,
* Unexpected property at ``#/1unityPackages/1/created_at``,
* Unexpected property at ``#/1unityPackages/2/created_at``,
* Unexpected property at ``#/1unityPackages/3/created_at``,
* Unexpected property at ``#/1unityPackages/4/created_at``,
* Unexpected property at ``#/1unityPackages/5/created_at``,
* Unexpected property at ``#/1unityPackages/6/created_at``,
* Unexpected property at ``#/1unityPackages/7/created_at``,
* Unexpected property at ``#/1unityPackages/8/created_at``,
* Unexpected property at ``#/1unityPackages/9/created_at``,
* Unexpected property at ``#/1unityPackages/10/created_at``,
* Unexpected property at ``#/1unityPackages/11/created_at``,
* Unexpected property at ``#/1unityPackages/12/created_at``,
* Unexpected property at ``#/1unityPackages/13/created_at``,
* Unexpected property at ``#/1unityPackages/14/created_at``,
* Unexpected property at ``#/1unityPackages/15/created_at``,
* Unexpected property at ``#/1unityPackages/16/created_at``,
* Unexpected property at ``#/1unityPackages/17/created_at``,
* Unexpected property at ``#/2unityPackages/0/created_at``,
* Unexpected property at ``#/2unityPackages/1/created_at``,
* Unexpected property at ``#/2unityPackages/2/created_at``,
* Unexpected property at ``#/2unityPackages/3/created_at``,
* Unexpected property at ``#/2unityPackages/4/created_at``,
* Unexpected property at ``#/2unityPackages/5/created_at``,
* Unexpected property at ``#/2unityPackages/6/created_at``,
* Unexpected property at ``#/2unityPackages/7/created_at``,
* Unexpected property at ``#/2unityPackages/8/created_at``,
* Unexpected property at ``#/2unityPackages/9/created_at``,
* Unexpected property at ``#/2unityPackages/10/created_at``,
* Unexpected property at ``#/2unityPackages/11/created_at``,
* Unexpected property at ``#/2unityPackages/12/created_at``,
* Unexpected property at ``#/2unityPackages/13/created_at``,
* Unexpected property at ``#/2unityPackages/14/created_at``,
* Unexpected property at ``#/3unityPackages/0/created_at``,
* Unexpected property at ``#/3unityPackages/1/created_at``,
* Unexpected property at ``#/3unityPackages/2/created_at``,
* Unexpected property at ``#/3unityPackages/3/created_at``,
* Unexpected property at ``#/3unityPackages/4/created_at``,
* Unexpected property at ``#/3unityPackages/5/created_at``,
* Unexpected property at ``#/3unityPackages/6/created_at``,
* Unexpected property at ``#/3unityPackages/7/created_at``,
* Unexpected property at ``#/4unityPackages/0/created_at``,
* Unexpected property at ``#/4unityPackages/1/created_at``,
* Unexpected property at ``#/4unityPackages/2/created_at``,
* Unexpected property at ``#/4unityPackages/3/created_at``,
* Unexpected property at ``#/4unityPackages/4/created_at``,
* Unexpected property at ``#/4unityPackages/5/created_at``,
* Unexpected property at ``#/4unityPackages/6/created_at``,
* Unexpected property at ``#/4unityPackages/7/created_at``,
* Unexpected property at ``#/4unityPackages/8/created_at``,
* Unexpected property at ``#/4unityPackages/9/created_at``,
* Unexpected property at ``#/5unityPackages/0/created_at``,
* Unexpected property at ``#/5unityPackages/1/created_at``,
* Unexpected property at ``#/5unityPackages/2/created_at``,
* Unexpected property at ``#/5unityPackages/3/created_at``,
* Unexpected property at ``#/6unityPackages/0/created_at``,
* Unexpected property at ``#/6unityPackages/1/created_at``,
* Unexpected property at ``#/6unityPackages/2/created_at``,
* Unexpected property at ``#/6unityPackages/3/created_at``,
* Unexpected property at ``#/6unityPackages/4/created_at``,
* Unexpected property at ``#/6unityPackages/5/created_at``,
* Unexpected property at ``#/6unityPackages/6/created_at``,
* Unexpected property at ``#/6unityPackages/7/created_at``,
* Unexpected property at ``#/7unityPackages/0/created_at``,
* Unexpected property at ``#/7unityPackages/1/created_at``,
* Unexpected property at ``#/8unityPackages/0/created_at``,
* Unexpected property at ``#/8unityPackages/1/created_at``,
* Unexpected property at ``#/8unityPackages/2/created_at``,
* Unexpected property at ``#/8unityPackages/3/created_at``,
* Unexpected property at ``#/8unityPackages/4/created_at``,
* Unexpected property at ``#/8unityPackages/5/created_at``,
* Unexpected property at ``#/8unityPackages/6/created_at``,
* Unexpected property at ``#/9unityPackages/0/created_at``,
* Unexpected property at ``#/9unityPackages/1/created_at``,
* Unexpected property at ``#/9unityPackages/2/created_at``,
* Unexpected property at ``#/9unityPackages/3/created_at``,
* Unexpected property at ``#/9unityPackages/4/created_at``,
* Unexpected property at ``#/9unityPackages/5/created_at``.
## Request
`GET https://api.vrchat.cloud/api/1/worlds/active`

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
