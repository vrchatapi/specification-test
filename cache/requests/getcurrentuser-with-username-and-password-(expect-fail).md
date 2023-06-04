# getCurrentUser with username and password (expect fail)

## Fail logs
```
Response schema mismatch: #/id failed required, #/displayName failed required, #/userIcon failed required, #/bio failed required, #/bioLinks failed required, #/profilePicOverride failed required, #/statusDescription failed required, #/pastDisplayNames failed required, #/hasEmail failed required, #/hasPendingEmail failed required, #/obfuscatedEmail failed required, #/obfuscatedPendingEmail failed required, #/emailVerified failed required, #/hasBirthday failed required, #/unsubscribe failed required, #/statusHistory failed required, #/statusFirstTime failed required, #/friends failed required, #/friendGroupNames failed required, #/currentAvatarImageUrl failed required, #/currentAvatarThumbnailImageUrl failed required, #/currentAvatar failed required, #/currentAvatarAssetUrl failed required, #/acceptedTOSVersion failed required, #/steamId failed required, #/steamDetails failed required, #/oculusId failed required, #/hasLoggedInFromClient failed required, #/homeLocation failed required, #/twoFactorAuthEnabled failed required, #/state failed required, #/tags failed required, #/developerType failed required, #/last_login failed required, #/last_platform failed required, #/allowAvatarCopying failed required, #/status failed required, #/date_joined failed required, #/isFriend failed required, #/friendKey failed required.
```

## Request
`get https://api.vrchat.cloud/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| authorization | `Basic <redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache, no-store` |
| connection | `keep-alive` |
| content-length | `40` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| set-cookie | `<redacted>` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```json
{
  "requiresTwoFactorAuth": [
    "totp",
    "otp"
  ]
}
```
