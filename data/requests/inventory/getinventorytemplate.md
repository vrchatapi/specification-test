# getInventoryTemplate

## Issues
Response schema mismatch:
* Missing property at ``#/status``,
* Unexpected property at ``#/metadata/propKind``,
* Unexpected property at ``#/attribution``,
* Unexpected property at ``#/dropStatus``.
## Request
`GET https://api.vrchat.cloud/api/1/inventory/template/invt_1f11aa73-8f05-4d50-a1a8-c59074d03ce2`

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
  "attribution": null,
  "authorId": "usr_ef110430-35b9-42ec-b606-ae4e51e1ac62",
  "collections": [],
  "created_at": "2025-09-15T18:15:23.074Z",
  "defaultAttributes": {},
  "description": "Get toasty.",
  "dropStatus": "scheduled",
  "equipSlots": [],
  "flags": [
    "instantiatable",
    "archivable",
    "unique"
  ],
  "id": "invt_1f11aa73-8f05-4d50-a1a8-c59074d03ce2",
  "imageUrl": "https://api.vrchat.cloud/api/1/image/file_10880ad6-dd90-411f-a7e5-6c7c19710551/1/256",
  "itemType": "prop",
  "itemTypeLabel": "Prop",
  "metadata": {
    "animated": false,
    "imageUrl": "https://api.vrchat.cloud/api/1/file/file_10880ad6-dd90-411f-a7e5-6c7c19710551/1/file",
    "propId": "prop_49fec698-f0cb-475c-9bc3-8f24e1bcc4eb",
    "propKind": 0
  },
  "name": "Campfire",
  "tags": [
    "August 2025"
  ],
  "updated_at": "2025-10-08T19:19:16.045Z",
  "validateUserAttributes": false
}
```
