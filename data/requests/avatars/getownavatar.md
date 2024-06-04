# getOwnAvatar

## Request
`get https://vrchat.com/api/1/users/usr_9439f8cc-1c6b-4dca-9a07-d2eccb570701/avatar`

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
| x-vrc-api-group | `green` |
| x-vrc-api-server | `prod-api-green-white-2gt` |
| x-vrc-api-version | `master-build-2024-06-04-freja-prodomoto` |

```jsonc
{
  "authorId": "usr_6eb7f0ee-b71c-47a1-b37f-d2c6567a940e",
  "authorName": "Mai♡",
  "created_at": "2022-01-27T01:34:07.257Z",
  "description": "Bella Bear Public - by Mai",
  "featured": false,
  "id": "avtr_0d9470d2-d2c5-42f4-9e9a-bfdc7f04aff0",
  "imageUrl": "https://api.vrchat.cloud/api/1/file/file_04a70244-6e90-4f49-b81e-5478fe90d056/6/file",
  "name": "Bella Bear Public - by Mai",
  "releaseStatus": "public",
  "tags": [],
  "thumbnailImageUrl": "https://api.vrchat.cloud/api/1/image/file_04a70244-6e90-4f49-b81e-5478fe90d056/6/256",
  "unityPackageUrl": "",
  "unityPackageUrlObject": {},
  "unityPackages": "<unstable: array>",
  "updated_at": "<unstable: string>",
  "version": "<unstable: number>"
}
```
