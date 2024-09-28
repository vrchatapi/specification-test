# getShortName

## Issues
Response schema mismatch:
* Invalid type at ``#/shortName``.
## Request
`GET https://vrchat.com/api/1/instances/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:<unstable>/shortName`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| accept-ranges | `bytes` |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `42` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "secureName": "<unstable: string>",
  "shortName": null
}
```
