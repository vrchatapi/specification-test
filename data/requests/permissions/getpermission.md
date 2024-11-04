# getPermission

## Request
`GET https://vrchat.com/api/1/permissions/prms_fe07c8a7-a4ca-4eda-97e5-e241040ef6f8`

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
| x-vrc-request-id | `m32bj914tr8jkn9o` |

```jsonc
{
  "id": "prms_fe07c8a7-a4ca-4eda-97e5-e241040ef6f8",
  "ownerId": "usr_17f19d1e-fd48-493b-a8ad-807a3d8bdd1b",
  "ownerDisplayName": "Arctor",
  "name": "permission-trust-boost"
}
```
