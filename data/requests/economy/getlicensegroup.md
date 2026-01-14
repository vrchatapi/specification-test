# getLicenseGroup

## Request
`GET https://api.vrchat.cloud/api/1/licenseGroups/lgrp_608513da-b213-4e15-80af-bd88c27f0979`

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
  "id": "lgrp_608513da-b213-4e15-80af-bd88c27f0979",
  "name": "vrcplus",
  "description": "VRC+ benefits",
  "licenses": [
    {
      "forId": "prms_6d2096bc-22c4-4f7e-a4e6-7f46b18bb2fc",
      "forType": "permission",
      "forName": "permission-user-prints",
      "forAction": "have"
    },
    {
      "forId": "prms_f61f68cb-d793-48fe-9d10-72718d1ce284",
      "forType": "permission",
      "forName": "permission-vrcplus-world-groups",
      "forAction": "have"
    },
    {
      "forId": "prms_f3ca998c-6e10-4b9e-b05f-9c06abf3ce32",
      "forType": "permission",
      "forName": "permission-user-prints-upload",
      "forAction": "have"
    },
    {
      "forId": "prms_ac1c3d9e-ffcf-474a-9f3f-32f11c24835a",
      "forType": "permission",
      "forName": "permission-user-prints-gallery-vrcplus",
      "forAction": "have"
    },
    {
      "forId": "prms_f3639e26-cacf-4d42-a23d-7f6dca329fd6",
      "forType": "permission",
      "forName": "permission-user-prints-gallery-free",
      "forAction": "have"
    },
    {
      "forId": "prms_f2ccb432-81d3-41d7-9af6-6d3893f1840f",
      "forType": "permission",
      "forName": "permission-user-stickers",
      "forAction": "have"
    },
    {
      "forId": "prms_1d9549db-d30a-48f3-a6b8-6741ce5a4283",
      "forType": "permission",
      "forName": "permission-user-icons",
      "forAction": "have"
    },
    {
      "forId": "prms_76f33deb-dd5d-46b7-b79d-e1f8f0a9a1e0",
      "forType": "permission",
      "forName": "permission-supporter-tags",
      "forAction": "have"
    },
    {
      "forId": "prms_0d9549db-d30a-48f3-a6b8-6741ce5a4283",
      "forType": "permission",
      "forName": "permission-invite-photos",
      "forAction": "have"
    },
    {
      "forId": "prms_dc02c512-4c03-479c-8c6a-d9329c023baf",
      "forType": "permission",
      "forName": "permission-user-gallery",
      "forAction": "have"
    },
    {
      "forId": "prms_153ac0b7-c2dd-43f9-96e3-c61fd2e85509",
      "forType": "permission",
      "forName": "permission-profile-pic-override",
      "forAction": "have"
    },
    {
      "forId": "prms_6f9527c6-268b-4c44-b5e5-c7624075569d",
      "forType": "permission",
      "forName": "permission-groups-create",
      "forAction": "have"
    },
    {
      "forId": "prms_9979d52e-44fd-432b-bfc0-180ed286b896",
      "forType": "permission",
      "forName": "permission-user-emoji",
      "forAction": "have"
    },
    {
      "forId": "prms_0dd8c63a-a47f-4095-b82c-fb2a9514277b",
      "forType": "permission",
      "forName": "permission-can-use-mobile",
      "forAction": "have"
    },
    {
      "forId": "prms_d82b3de1-3087-4b0d-9d9c-02d462a3f613",
      "forType": "permission",
      "forName": "permission-extra-group-count",
      "forAction": "have"
    },
    {
      "forId": "prms_c32ac86d-9bb2-41f9-b086-681871d8b909",
      "forType": "permission",
      "forName": "permission-user-emoji-animated",
      "forAction": "have"
    },
    {
      "forId": "prms_4cd435c5-f91d-4916-8195-3c2c7e2ae540",
      "forType": "permission",
      "forName": "permission-age-verification",
      "forAction": "have"
    },
    {
      "forId": "prms_54d62dfd-b151-42b1-b528-c5800d54f6b1",
      "forType": "permission",
      "forName": "permission-instance-naming",
      "forAction": "have"
    }
  ]
}
```
