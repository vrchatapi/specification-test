# selectAvatar with default avatar id

## Fail logs
```
Response schema mismatch: #/id failed required, #/displayName failed required, #/userIcon failed required, #/bio failed required, #/bioLinks failed required, #/profilePicOverride failed required, #/statusDescription failed required, #/pastDisplayNames failed required, #/hasEmail failed required, #/hasPendingEmail failed required, #/obfuscatedEmail failed required, #/obfuscatedPendingEmail failed required, #/emailVerified failed required, #/hasBirthday failed required, #/unsubscribe failed required, #/statusHistory failed required, #/statusFirstTime failed required, #/friends failed required, #/friendGroupNames failed required, #/currentAvatarImageUrl failed required, #/currentAvatarThumbnailImageUrl failed required, #/currentAvatar failed required, #/currentAvatarAssetUrl failed required, #/acceptedTOSVersion failed required, #/steamId failed required, #/steamDetails failed required, #/oculusId failed required, #/hasLoggedInFromClient failed required, #/homeLocation failed required, #/twoFactorAuthEnabled failed required, #/state failed required, #/tags failed required, #/developerType failed required, #/last_login failed required, #/last_platform failed required, #/allowAvatarCopying failed required, #/status failed required, #/date_joined failed required, #/isFriend failed required, #/friendKey failed required.
```

## Request
`put https://api.vrchat.cloud/api/1/avatars/avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11/select`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`401 Unauthorized`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `65` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "error": {
    "message": "\"Missing Credentials\"",
    "status_code": 401
  }
}
```
