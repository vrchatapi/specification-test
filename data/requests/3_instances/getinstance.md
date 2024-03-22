# getInstance

## Issues
```
Response schema mismatch: Invalid type at #/shortName, Unexpected property at #/displayName, Unexpected property at #/closedAt, Unexpected property at #/hardClose, Unexpected property at #/hasCapacityForYou, Unexpected property at #/recommendedCapacity, Unexpected property at #/userCount, Unexpected property at #/queueEnabled, Unexpected property at #/queueSize, Unexpected property at #/gameServerVersion, Unexpected property at #/roleRestricted, Unexpected property at #/world, Unexpected property at #/groupAccessType, Unexpected property at #/strict.
```

## Request
`get https://api.vrchat.cloud/api/1/instances/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b:<unstable>`

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
{
  "id": "<unstable: string>",
  "location": "<unstable: string>",
  "instanceId": "<unstable: string>",
  "name": "<unstable: string>",
  "worldId": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "type": "<unstable: string>",
  "ownerId": "<unstable: string>",
  "tags": [
    "author_tag_bar",
    "author_tag_quest",
    "author_tag_hangout",
    "author_tag_chill",
    "author_tag_lounge",
    "language_eng",
    "language_fra",
    "language_ita"
  ],
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
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/closedAt
   */
  "closedAt": null,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/hardClose
   */
  "hardClose": null,
  "active": true,
  "full": false,
  "n_users": 20,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/hasCapacityForYou
   */
  "hasCapacityForYou": true,
  "capacity": 80,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/recommendedCapacity
   */
  "recommendedCapacity": 24,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/userCount
   */
  "userCount": 23,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/queueEnabled
   */
  "queueEnabled": false,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/queueSize
   */
  "queueSize": 0,
  "platforms": {
    "standalonewindows": 7,
    "android": 13
  },
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
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/roleRestricted
   */
  "roleRestricted": false,
  "secureName": "<unstable: string>",
  /**
   * Invalid type.
   *
   * @schema unknown
   * @keyword type
   *
   * #/properties/shortName/type
   * #/shortName
   */
  "shortName": null,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/world
   */
  "world": "<unstable: object>",
  "clientNumber": "unknown",
  "photonRegion": "us",
  "region": "us",
  "canRequestInvite": false,
  "permanent": true,
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/groupAccessType
   */
  "groupAccessType": "public",
  /**
   * Unexpected property.
   *
   * @schema Instance
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/strict
   */
  "strict": false
}
```
