# getCurrentUser with username and password (expect fail)

## Issues
```
Response schema mismatch: Missing property at #/id, Missing property at #/displayName, Missing property at #/userIcon, Missing property at #/bio, Missing property at #/bioLinks, Missing property at #/profilePicOverride, Missing property at #/profilePicOverrideThumbnail, Missing property at #/pronouns, Missing property at #/statusDescription, Missing property at #/pastDisplayNames, Missing property at #/hasEmail, Missing property at #/hasPendingEmail, Missing property at #/obfuscatedEmail, Missing property at #/obfuscatedPendingEmail, Missing property at #/emailVerified, Missing property at #/hasBirthday, Missing property at #/unsubscribe, Missing property at #/statusHistory, Missing property at #/statusFirstTime, Missing property at #/friends, Missing property at #/friendGroupNames, Missing property at #/currentAvatarImageUrl, Missing property at #/currentAvatarThumbnailImageUrl, Missing property at #/currentAvatarTags, Missing property at #/currentAvatar, Missing property at #/currentAvatarAssetUrl, Missing property at #/acceptedTOSVersion, Missing property at #/steamId, Missing property at #/steamDetails, Missing property at #/oculusId, Missing property at #/hasLoggedInFromClient, Missing property at #/homeLocation, Missing property at #/twoFactorAuthEnabled, Missing property at #/state, Missing property at #/tags, Missing property at #/developerType, Missing property at #/last_login, Missing property at #/last_mobile, Missing property at #/last_platform, Missing property at #/allowAvatarCopying, Missing property at #/status, Missing property at #/date_joined, Missing property at #/isFriend, Missing property at #/friendKey, Unexpected property at #/requiresTwoFactorAuth.
```

## Request
`get https://vrchat.com/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| authorization | `Basic <redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| accept-ranges | `bytes` |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-length | `40` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| set-cookie | `<redacted>` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |
| x-vrc-api-group | `blue` |
| x-vrc-api-server | `prod-api-blue-wave-55a` |
| x-vrc-api-version | `master-build-2024-06-25-funke-o-fockyfard` |

```jsonc
{
  /**
   * Unexpected property.
   *
   * @schema CurrentUser
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/requiresTwoFactorAuth
   */
  "requiresTwoFactorAuth": [
    "totp",
    "otp"
  ]
}
```
