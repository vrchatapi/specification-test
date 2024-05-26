# getWorld by id

## Issues
```
Response schema mismatch: undefined at #/unityPackages/15/assetUrl.
```

## Request
`get https://vrchat.com/api/1/worlds/wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b`

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
  "id": "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
  "name": "The Black Cat",
  "description": "The Black Cat is a simple mirror world․ Come hangout‚ meet new friends‚ eat pancakes‚ and stare at yourself․",
  "authorId": "usr_3d10ca69-6586-40a3-aa1b-a0c9e38a0d20",
  "authorName": "spookyghostboo",
  "releaseStatus": "public",
  "featured": false,
  "capacity": 80,
  "recommendedCapacity": 24,
  "imageUrl": "<unstable: string>",
  "thumbnailImageUrl": "<unstable: string>",
  "version": "<unstable: number>",
  "organization": "vrchat",
  "previewYoutubeId": null,
  "udonProducts": [
    "prod_106b4615-2f3c-428c-9bec-3318d14752fe",
    "prod_2e552283-5c44-4347-96be-11631de17d0a",
    "prod_1dbb5caf-8ab4-4c78-afec-95ba50bca814",
    "prod_03a0b1d4-304e-4d24-b865-edcd849393e7",
    "prod_950db306-aad8-4026-b5a3-2409d0aa21a9",
    "prod_b691bae3-0120-4f15-bfed-0fc571292940",
    "prod_c0dde8b1-95d8-477d-8e12-1408c43fa9bd",
    "prod_c8701344-5395-40ad-850d-63983a764cc6",
    "prod_603bd4de-c8aa-4bf3-8a32-fa5d756946d4",
    "prod_5af877c2-2c34-4f60-8b6c-d37ebf9b726d",
    "prod_e10ee05f-2442-4a01-adcf-fd9a7757b8d6",
    "prod_c98cb604-cc9f-4183-b35b-3742fec5347d",
    "prod_ddbfd226-9788-4379-9203-5247925e3037",
    "prod_a6ce09ae-1636-4dc5-86e6-26cf2db220e4",
    "prod_aac28b54-75d8-4c30-a0a2-da3f5ede0baf",
    "prod_226b5392-3b93-4905-960c-345588d6116e",
    "prod_b07efe0d-08a4-49a1-be2e-3ef085788bab",
    "prod_126bbe02-a118-44cb-866f-a9eddd557da6",
    "prod_ceb879d0-51c9-412b-b903-26a684e37158",
    "prod_2f76612c-7358-4b19-9097-2dd0d4e5dd4c",
    "prod_ac810a17-6c2c-443b-8a57-c3d69742c7d3",
    "prod_e966072f-73fd-4e18-abd0-927af11cf4e3",
    "prod_a385f7b0-b32d-44de-81dd-beaec59827b5",
    "prod_33d8a850-9e3c-46a3-8e1e-685f21756b74",
    "prod_1867fa37-2073-475c-8355-3a72b9eabf08",
    "prod_06f126c3-0767-4f6f-b6e3-3413f28a3d50",
    "prod_aab9c81d-72b7-4308-afbb-87b38eb3de7a",
    "prod_aa9cfcd6-5a19-4c1c-9073-6b21c550fd53",
    "prod_860beff0-1c18-4202-9cad-d5d0ac8ab395",
    "prod_8a027235-c374-416f-ac4a-a9f6d9c23ee0",
    "prod_4f7574dd-5668-41ca-bb2c-0bacc84e1220"
  ],
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
  "tags": [
    "author_tag_bar",
    "author_tag_quest",
    "author_tag_hangout",
    "author_tag_chill",
    "author_tag_lounge",
    "admin_approved",
    "admin_spotlight_mobile",
    "system_approved",
    "system_monetized_world"
  ],
  "created_at": "2019-05-01T01:19:43.477Z",
  "updated_at": "<unstable: string>"
}
```
