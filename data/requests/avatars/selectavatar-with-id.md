# selectAvatar with id

## Issues
Response schema mismatch:
* Missing property at ``#/acceptedTOSVersion``,
* Missing property at ``#/ageVerificationStatus``,
* Missing property at ``#/ageVerified``,
* Missing property at ``#/allowAvatarCopying``,
* Missing property at ``#/bio``,
* Missing property at ``#/bioLinks``,
* Missing property at ``#/currentAvatar``,
* Missing property at ``#/currentAvatarImageUrl``,
* Missing property at ``#/currentAvatarTags``,
* Missing property at ``#/currentAvatarThumbnailImageUrl``,
* Missing property at ``#/date_joined``,
* Missing property at ``#/developerType``,
* Missing property at ``#/displayName``,
* Missing property at ``#/emailVerified``,
* Missing property at ``#/friendGroupNames``,
* Missing property at ``#/friendKey``,
* Missing property at ``#/friends``,
* Missing property at ``#/hasBirthday``,
* Missing property at ``#/hasEmail``,
* Missing property at ``#/hasLoggedInFromClient``,
* Missing property at ``#/hasPendingEmail``,
* Missing property at ``#/homeLocation``,
* Missing property at ``#/id``,
* Missing property at ``#/isAdult``,
* Missing property at ``#/isFriend``,
* Missing property at ``#/last_login``,
* Missing property at ``#/last_mobile``,
* Missing property at ``#/last_platform``,
* Missing property at ``#/obfuscatedEmail``,
* Missing property at ``#/obfuscatedPendingEmail``,
* Missing property at ``#/oculusId``,
* Missing property at ``#/pastDisplayNames``,
* Missing property at ``#/profilePicOverride``,
* Missing property at ``#/profilePicOverrideThumbnail``,
* Missing property at ``#/pronouns``,
* Missing property at ``#/pronounsHistory``,
* Missing property at ``#/state``,
* Missing property at ``#/status``,
* Missing property at ``#/statusDescription``,
* Missing property at ``#/statusFirstTime``,
* Missing property at ``#/statusHistory``,
* Missing property at ``#/steamDetails``,
* Missing property at ``#/steamId``,
* Missing property at ``#/tags``,
* Missing property at ``#/twoFactorAuthEnabled``,
* Missing property at ``#/unsubscribe``,
* Missing property at ``#/userIcon``,
* Unexpected property at ``#/error``.
## Request
`PUT https://api.vrchat.cloud/api/1/avatars/avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0/select`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`403 Forbidden`

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
{
  "error": {
    "message": "This avatar is unavailableǃ",
    "status_code": 403
  }
}
```
