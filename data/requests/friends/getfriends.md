# getFriends

## Issues
```
Response schema mismatch: Unexpected property at #/0/bioLinks, Unexpected property at #/0/currentAvatarTags, Unexpected property at #/0/imageUrl, Unexpected property at #/0/last_login.
```

## Request
`get https://api.vrchat.cloud/api/1/auth/user/friends`

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
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
[
  {
    "id": "usr_63a9376e-d000-4357-9a76-3958b69477b0",
    "displayName": "littlewhinging",
    "bio": "creator of TF2 worlds‚ backrooms worlds etc\nmm shaders\nthey⁄them - Lilly\nfemboy\npansexual\nprogrammer\nadhd ⁄ autism\nlikes tf2\n\nABCDEFGH\nDVC-QOPAFI",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/bioLinks
     */
    "bioLinks": [
      "https://discord.gg/bZxSyDVSuZ",
      "https://littlewhinging.dev/"
    ],
    "developerType": "none",
    "currentAvatarImageUrl": "https://api.vrchat.cloud/api/1/file/file_316f6abf-172c-45db-8d7f-2e04e30935ba/1/file",
    "currentAvatarThumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_316f6abf-172c-45db-8d7f-2e04e30935ba/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/currentAvatarTags
     */
    "currentAvatarTags": [],
    "userIcon": "",
    "profilePicOverride": "",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/imageUrl
     */
    "imageUrl": "https://api.vrchat.cloud/api/1/image/file_316f6abf-172c-45db-8d7f-2e04e30935ba/1/256",
    /**
     * Unexpected property.
     *
     * @schema LimitedUser
     * @keyword additionalProperties
     *
     * #/items/additionalProperties
     * #/0/last_login
     */
    "last_login": "2024-02-24T00:43:23.005Z",
    "status": "ask me",
    "statusDescription": "",
    "last_platform": "standalonewindows",
    "location": "private",
    "tags": [
      "system_world_access",
      "system_trust_basic",
      "system_avatar_access",
      "system_early_adopter",
      "system_feedback_access",
      "system_trust_known",
      "system_trust_trusted",
      "system_trust_veteran",
      "language_eng"
    ],
    "friendKey": "",
    "isFriend": true
  }
]
```
