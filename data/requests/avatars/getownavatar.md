# getOwnAvatar

## Issues
```
Response schema mismatch: Unexpected property at #/unityPackages/0/variant, Unexpected property at #/unityPackages/1/variant, Unexpected property at #/unityPackages/2/impostorizerVersion, Unexpected property at #/unityPackages/2/variant, Unexpected property at #/unityPackages/3/impostorizerVersion, Unexpected property at #/unityPackages/3/variant.
```

## Request
`get https://api.vrchat.cloud/api/1/users/usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701/avatar`

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
  "id": "avtr_047c01c7-e958-4e59-8099-86316479fd9a",
  "name": "The Professional",
  "description": "Enjoys large spreadsheets‚ unpaid overtime‚ lukewarm coffee and white noise․",
  "authorId": "usr_45e2a371-9fbb-47bc-a938-99f090b2517a",
  "authorName": "Bāph",
  "tags": [
    "author_quest_fallback",
    "system_jam_8a3721bc-9c06-4da8-b5c8-9a0aaa669930",
    "admin_featured_quest",
    "admin_quest_fallback_extended"
  ],
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_1ab634a7-2cb1-4772-9baa-325080941bf8/1/file",
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_1ab634a7-2cb1-4772-9baa-325080941bf8/1/256",
  "releaseStatus": "public",
  "version": "<unstable: number>",
  "featured": true,
  "unityPackages": "<unstable: array>",
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "created_at": "2023-03-12T07:14:35.052Z",
  "updated_at": "<unstable: string>"
}
```
