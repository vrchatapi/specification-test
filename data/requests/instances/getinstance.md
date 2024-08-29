# getInstance

## Issues
```
Response schema mismatch:

Unexpected property at #/platforms/ios,
Unexpected property at #/displayName,
Unexpected property at #/gameServerVersion,
Unexpected property at #/instancePersistenceEnabled,
Unexpected property at #/playerPersistenceEnabled.
```

## Request
`get https://vrchat.com/api/1/instances/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:<unstable>`

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
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  "active": true,
  "canRequestInvite": false,
  "capacity": 80,
  "clientNumber": "unknown",
  "closedAt": "2024-08-29T00:47:22.968Z",
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/displayName
   */
  "displayName": null,
  "full": false,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/gameServerVersion
   */
  "gameServerVersion": 1343,
  "groupAccessType": "public",
  "hardClose": false,
  "hasCapacityForYou": true,
  "id": "<unstable: string>",
  "instanceId": "<unstable: string>",
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/instancePersistenceEnabled
   */
  "instancePersistenceEnabled": null,
  "location": "<unstable: string>",
  "n_users": "<unstable: number>",
  "name": "<unstable: string>",
  "ownerId": "<unstable: string>",
  "permanent": true,
  "photonRegion": "us",
  "platforms": "<unstable: object>",
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/playerPersistenceEnabled
   */
  "playerPersistenceEnabled": null,
  "queueEnabled": false,
  "queueSize": 0,
  "recommendedCapacity": 24,
  "region": "us",
  "roleRestricted": false,
  "secureName": "<unstable: string>",
  "shortName": null,
  "strict": false,
  "tags": [
    "author_tag_bar",
    "author_tag_quest",
    "author_tag_hangout",
    "author_tag_chill",
    "author_tag_lounge",
    "language_eng"
  ],
  "type": "<unstable: string>",
  "userCount": 15,
  "world": "<unstable: object>",
  "worldId": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b"
}
```
