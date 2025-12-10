# getInventory

## Request
`GET https://api.vrchat.cloud/api/1/inventory?n=100&offset=0&order=oldest&types=prop`

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
  "data": [
    {
      "collections": [],
      "created_at": "2025-12-09T22:21:49.336Z",
      "defaultAttributes": {},
      "description": "Get toasty.",
      "equipSlot": "",
      "equipSlots": [],
      "expiryDate": null,
      "flags": [
        "instantiatable",
        "archivable",
        "unique"
      ],
      "holderId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
      "id": "inv_729dd5a0-ebe4-48b7-b587-21e5652efa3a",
      "imageUrl": "https://api.vrchat.cloud/api/1/image/file_10880ad6-dd90-411f-a7e5-6c7c19710551/1/256",
      "isArchived": false,
      "isSeen": false,
      "itemType": "prop",
      "itemTypeLabel": "Prop",
      "metadata": {
        "animated": false,
        "imageUrl": "https://api.vrchat.cloud/api/1/file/file_10880ad6-dd90-411f-a7e5-6c7c19710551/1/file",
        "propId": "prop_49fec698-f0cb-475c-9bc3-8f24e1bcc4eb"
      },
      "name": "Campfire",
      "quantifiable": false,
      "tags": [
        "August 2025"
      ],
      "templateId": "invt_1f11aa73-8f05-4d50-a1a8-c59074d03ce2",
      "template_created_at": "2025-09-15T18:15:23.074Z",
      "template_updated_at": "2025-10-08T19:19:16.045Z",
      "updated_at": "2025-12-09T22:21:49.336Z",
      "userAttributes": {},
      "validateUserAttributes": false
    },
    {
      "collections": [],
      "created_at": "2025-12-09T22:21:49.350Z",
      "defaultAttributes": {},
      "description": "Don't burn it!",
      "equipSlot": "",
      "equipSlots": [],
      "expiryDate": null,
      "flags": [
        "instantiatable",
        "archivable",
        "unique"
      ],
      "holderId": "usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701",
      "id": "inv_b82c6256-3be0-492f-95cf-f31afe65f779",
      "imageUrl": "https://api.vrchat.cloud/api/1/image/file_e9a8b13b-f31d-4af7-b5a5-a89305b103ac/1/256",
      "isArchived": false,
      "isSeen": false,
      "itemType": "prop",
      "itemTypeLabel": "Prop",
      "metadata": {
        "animated": false,
        "imageUrl": "https://api.vrchat.cloud/api/1/file/file_e9a8b13b-f31d-4af7-b5a5-a89305b103ac/1/file",
        "propId": "prop_fb4e6b9e-ddd2-464c-8e44-cdba7f77eb5d"
      },
      "name": "Marshmallow on a Stick",
      "quantifiable": false,
      "tags": [
        "August 2025"
      ],
      "templateId": "invt_15cade9e-e11a-4509-aa93-7a1b8584d006",
      "template_created_at": "2025-09-15T18:26:38.156Z",
      "template_updated_at": "2025-10-08T19:19:10.093Z",
      "updated_at": "2025-12-09T22:21:49.350Z",
      "userAttributes": {},
      "validateUserAttributes": false
    }
  ],
  "totalCount": 2
}
```
