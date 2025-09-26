# getInventoryTemplate

## Issues
Response schema mismatch:
* Unexpected property at ``#/defaultAttributes``,
* Unexpected property at ``#/equipSlots``,
* Unexpected property at ``#/validateUserAttributes``.
## Request
`GET https://api.vrchat.cloud/api/1/inventory/template/invt_642a8113-3798-4761-98e9-dc2c84adc960`

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
  "authorId": "usr_85a18feb-e12d-4eee-a610-b8efc9fce2c4",
  "collections": [],
  "created_at": "2025-06-09T16:31:40.785Z",
  "defaultAttributes": {},
  "description": "IT KNOWS",
  "equipSlots": [],
  "flags": [
    "instantiatable",
    "archivable",
    "unique"
  ],
  "id": "invt_642a8113-3798-4761-98e9-dc2c84adc960",
  "imageUrl": "https://api.vrchat.cloud/api/1/image/file_903a3af2-4233-4698-808c-d9349e527f5d/9/256",
  "itemType": "prop",
  "itemTypeLabel": "Item",
  "metadata": {
    "animated": false,
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_903a3af2-4233-4698-808c-d9349e527f5d/9/file",
    "propId": "prop_829ba6f6-b837-49d9-b9a9-056b82103b58"
  },
  "name": "THE REFERENCE CUBE",
  "status": "live",
  "tags": [],
  "updated_at": "2025-09-23T23:20:18.379Z",
  "validateUserAttributes": false
}
```
