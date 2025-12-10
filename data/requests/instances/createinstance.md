# createInstance

## Request
`POST https://api.vrchat.cloud/api/1/instances`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| content-type | `application/json` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |

```json
{
  "worldId": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "type": "private",
  "region": "use",
  "ownerId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
  "canRequestInvite": true,
  "displayName": "ygefu4x3",
  "contentSettings": {
    "drones": false,
    "props": true
  }
}
```


## Response
`200 OK`

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
