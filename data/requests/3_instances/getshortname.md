# getShortName

## Issues
```
Response media type "application/json; charset=utf-8" not expected.
```

## Request
`get https://api.vrchat.cloud/api/1/instances/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:<unstable>/shortName`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
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
  "shortName": null,
  "secureName": "<unstable: string>"
}
```
