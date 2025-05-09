# getCurrentUser after logout to log back in

## Issues
Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/displayName``,
* Missing property at ``#/userIcon``,
* Missing property at ``#/bio``,
* Missing property at ``#/bioLinks``,
* Missing property at ``#/profilePicOverride``,
* Missing property at ``#/profilePicOverrideThumbnail``,
* Missing property at ``#/pronouns``,
* Missing property at ``#/statusDescription``,
* Missing property at ``#/pastDisplayNames``,
* Missing property at ``#/hasEmail``,
* Missing property at ``#/hasPendingEmail``,
* Missing property at ``#/obfuscatedEmail``,
* Missing property at ``#/obfuscatedPendingEmail``,
* Missing property at ``#/emailVerified``,
* Missing property at ``#/hasBirthday``,
* Missing property at ``#/unsubscribe``,
* Missing property at ``#/statusHistory``,
* Missing property at ``#/statusFirstTime``,
* Missing property at ``#/friends``,
* Missing property at ``#/friendGroupNames``,
* Missing property at ``#/currentAvatarImageUrl``,
* Missing property at ``#/currentAvatarThumbnailImageUrl``,
* Missing property at ``#/currentAvatarTags``,
* Missing property at ``#/currentAvatar``,
* Missing property at ``#/acceptedTOSVersion``,
* Missing property at ``#/steamId``,
* Missing property at ``#/steamDetails``,
* Missing property at ``#/oculusId``,
* Missing property at ``#/hasLoggedInFromClient``,
* Missing property at ``#/homeLocation``,
* Missing property at ``#/twoFactorAuthEnabled``,
* Missing property at ``#/state``,
* Missing property at ``#/tags``,
* Missing property at ``#/developerType``,
* Missing property at ``#/last_login``,
* Missing property at ``#/last_mobile``,
* Missing property at ``#/last_platform``,
* Missing property at ``#/allowAvatarCopying``,
* Missing property at ``#/status``,
* Missing property at ``#/date_joined``,
* Missing property at ``#/isFriend``,
* Missing property at ``#/friendKey``,
* Missing property at ``#/isAdult``,
* Missing property at ``#/ageVerificationStatus``,
* Missing property at ``#/ageVerified``,
* Unexpected property at ``#/error``.
## Request
`GET https://api.vrchat.cloud/api/1/auth/user`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| authorization | `Basic <redacted>` |


## Response
`403 Forbidden`

| Header | Value |
| ------ | ----- |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Accept-Encoding` |

```jsonc
{
  "error": {
    "message": "\"the IP address or network you're trying to connect from is blacklisted (spamhaus_drop list). if you're using a vpn, try disabling it first. if you believe to have gotten this message in error, please contact support at help.vrchat.com\"",
    "status_code": 403,
    "waf_code": 42860,
    "waf_list": "spamhaus_drop"
  }
}
```
