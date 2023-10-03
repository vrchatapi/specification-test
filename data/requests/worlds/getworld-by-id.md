# getWorld by id

## Fail logs
```
Response schema mismatch: #/unityPackages/0/assetUrl failed minLength.
```

## Request
`get https://api.vrchat.cloud/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b`

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

```json
{
  "id": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "name": "The Black Cat",
  "description": "The Black Cat is a simple mirror world․ Come hangout‚ meet new friends‚ eat pancakes‚ and stare at yourself․",
  "authorId": "usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20",
  "authorName": "spookyghostboo",
  "releaseStatus": "public",
  "featured": false,
  "capacity": 48,
  "recommendedCapacity": 24,
  "imageUrl": "<unstable: string>",
  "thumbnailImageUrl": "<unstable: string>",
  "namespace": "",
  "version": "<unstable: number>",
  "organization": "vrchat",
  "previewYoutubeId": null,
  "udonProducts": [],
  "favorites": "<unstable: number>",
  "visits": "<unstable: number>",
  "popularity": "<unstable: number>",
  "heat": "<unstable: number>",
  "publicationDate": "2021-04-18T23:17:33.390Z",
  "labsPublicationDate": "2019-06-13T22:59:46.028Z",
  "instances": "<unstable: array>",
  "publicOccupants": "<unstable: number>",
  "privateOccupants": "<unstable: number>",
  "occupants": "<unstable: number>",
  "unityPackages": "<unstable: array>",
  "created_at": "2019-05-01T01:19:43.477Z",
  "updated_at": "<unstable: string>",
  "tags": [
    "author_tag_bar",
    "author_tag_quest",
    "author_tag_hangout",
    "author_tag_chill",
    "author_tag_lounge",
    "system_approved",
    "admin_approved",
    "admin_spotlight_mobile",
    "system_updated_recently"
  ]
}
```
