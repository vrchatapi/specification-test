# getJavaScript

## Issues
```
Response schema mismatch:

Unexpected token '/', "/*! For li"... is not valid JSON.
```

## Request
`get https://vrchat.com/api/1/js/app.js`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| connection | `keep-alive` |
| content-type | `application/javascript` |
| etag | `<redacted>` |
| server | `CloudFront` |
| transfer-encoding | `chunked` |
| vary | `Accept-Encoding, Origin` |

```jsonc
<unstable>
```
