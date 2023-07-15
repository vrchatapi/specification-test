# getInfoPush

## Fail logs
```
Response schema mismatch: #/13/data/onPressed/command failed enum, #/14/data/onPressed/command failed enum, #/36/data/article/content failed type, #/37/data/article/content failed type, #/38/data/article/content failed type, #/39/data/article/content failed type, #/40/data/article/content failed type, #/41/data/article/content failed type, #/42/data/article/content failed type, #/43/data/article/content failed type, #/52/data/article/content failed type, #/56/data/article/content failed type, #/57/data/article/content failed type, #/58/data/article/content failed type.
```

## Request
`get https://api.vrchat.cloud/api/1/infoPush?include=user-all`

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
[
  {
    "id": "world-interest-party-time",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 0,
    "tags": [
      "world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Party Time",
        "tooltip": "You'll be sent to a world that's good for partying!",
        "worldIDs": [
          "wrld_901fd228-e62c-43f8-8631-8dd830bb7f0c",
          "wrld_0c3caeaa-7224-4800-aa64-bc473ccb18a2",
          "wrld_404ac063-83ec-43da-85db-e060a40f7f13",
          "wrld_9da1349e-470b-47fd-a9b5-bd57d49255e2",
          "wrld_017a77c0-ac9e-4cb5-a668-ba9ba753466a",
          "wrld_a931dea6-cccd-420d-b274-4c319811d705",
          "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
          "wrld_2902b80d-f4ba-48b8-b325-27227bff7500",
          "wrld_89217640-a36d-4e76-abd1-c42a0ed785eb",
          "wrld_c08b6a9f-91eb-499f-9891-4c359a372fde",
          "wrld_84c9fa78-391b-4f8c-a80b-31d3264867ea"
        ]
      }
    },
    "hash": "7001e440a117d844cb1ed6e2bcbfbf6b",
    "createdAt": "2023-04-06T20:29:51+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "quick-select-world-interest",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 0,
    "tags": [
      "quick-select-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Quick Select",
        "tooltip": "",
        "worldIDs": [
          "wrld_901fd228-e62c-43f8-8631-8dd830bb7f0c",
          "wrld_1b482eca-bede-4de8-88a8-bbb6ca7e24cd",
          "wrld_858dfdfc-1b48-4e1e-8a43-f0edc611e5fe",
          "wrld_ff8b4a6e-4268-4783-bc16-3103067a4be6",
          "wrld_66f15b6d-6cc7-4579-9d5e-eb69047e685f",
          "wrld_34693736-118a-4a1f-9b4d-95b866ed83a7",
          "wrld_1735c569-e0d4-4e37-9767-24fe7215bd46",
          "wrld_0c3caeaa-7224-4800-aa64-bc473ccb18a2",
          "wrld_1752e426-4b07-45b7-99c2-452c02f5dcbd",
          "wrld_0ec97c4f-1e84-4a3a-9e3a-fa3075b6c56d",
          "wrld_46e27ae3-e61d-42e8-b1fe-2a26577eafef",
          "wrld_b78d83b7-2c51-4a02-b7e5-3889ae4085ad",
          "wrld_e933926e-debb-4710-9e70-be164359fce4",
          "wrld_1a642b8e-f2d4-468a-bf29-0cbedc04b876",
          "wrld_404ac063-83ec-43da-85db-e060a40f7f13",
          "wrld_2ee4b12c-e3d8-4ff0-aacc-eb0cdef4df73",
          "wrld_df01edfe-da30-4e6a-a1fb-a0cc534abf06",
          "wrld_3b0014d7-b82f-4249-bfc4-64f65815c4f3",
          "wrld_f281f6a5-3c1b-4a4f-b199-a55cd36017c0",
          "wrld_3dd9347c-bf35-4f2d-9f85-4c337c3a1e14",
          "wrld_98400948-004d-44b8-9dea-293a3badf70f",
          "wrld_9da1349e-470b-47fd-a9b5-bd57d49255e2",
          "wrld_8c422b2d-a819-45a9-b21b-61fbf2dd2e96",
          "wrld_32402c8f-f897-4ed6-8266-cd22fdce3313",
          "wrld_98422193-2ddd-4af4-bd97-ab5609a46785",
          "wrld_2e6867b9-0c78-43ec-8bd5-77aacd751ecd",
          "wrld_b7acb016-d29f-498b-9d40-0b9a6c38a820",
          "wrld_fda18709-0f92-4e6c-b995-11e22a159e5a",
          "wrld_017a77c0-ac9e-4cb5-a668-ba9ba753466a",
          "wrld_a6903d1c-7969-4833-8c3c-7cb0744302ec",
          "wrld_b2c574c6-9a6e-4bcc-b74e-1284070c324f",
          "wrld_baec7040-f9ac-4d66-9e58-3bc9d1f0256a",
          "wrld_1453ae28-b9c5-489b-a124-337d09be1705",
          "wrld_8624eb40-2f9b-4415-a70d-3d2e9567b623",
          "wrld_62accd68-2e80-4c1d-8313-06c832086ef8",
          "wrld_a931dea6-cccd-420d-b274-4c319811d705",
          "wrld_e80d7c90-14bf-423a-9cff-7ec257ff1dc2",
          "wrld_14750dd6-26a1-4edb-ae67-cac5bcd9ed6a",
          "wrld_080a6971-54d6-49f2-b09e-a000893c8444",
          "wrld_52d5dd9e-3b33-4cf2-a41b-cfd1a71640c8",
          "wrld_dfbecb47-7f43-4dbd-8192-3bb007748c46",
          "wrld_41994ad5-878c-4073-bf29-854df06e14cf",
          "wrld_4cf554b4-430c-4f8f-b53e-1f294eed230b",
          "wrld_faaa0b96-2934-4bd2-bb60-8508edc96b4b",
          "wrld_9876e234-6dcf-444e-b9e9-d505b6d27189",
          "wrld_d010695a-3e7c-43a1-ac38-d80f3ffeab17",
          "wrld_236bb7cd-dca2-44a2-9542-3b965e15d37d",
          "wrld_2a2cd8a5-1f90-4279-9555-71ac473e3e5f",
          "wrld_082b683b-1d93-4f2e-a482-0889bb7ec79a",
          "wrld_2902b80d-f4ba-48b8-b325-27227bff7500",
          "wrld_a451a949-7d98-4e6a-a467-085f07979eec",
          "wrld_df2776a3-8c84-45e3-bbf1-30ac8422911b",
          "wrld_cae35e0f-1544-4209-82b9-85f349010c74",
          "wrld_02450116-8967-4d0a-87a0-86765515fcce",
          "wrld_cc437da0-e410-4547-9936-62859dee66bd",
          "wrld_2a1d857f-3bbb-4642-b8cb-fd13d696cc18",
          "wrld_89217640-a36d-4e76-abd1-c42a0ed785eb",
          "wrld_5506c96f-99b2-462a-98b9-ab7586d7f9fa",
          "wrld_16248871-a374-4819-a284-555ddfc33380",
          "wrld_c6b6c1fa-ed05-46eb-a148-38655c64b8e4",
          "wrld_5f358876-6be8-48e2-9a58-1d9ae3aea1b2",
          "wrld_5e3bce49-d399-4541-868b-7cf40c294705",
          "wrld_c08b6a9f-91eb-499f-9891-4c359a372fde",
          "wrld_ee4dd872-ca55-44e1-900f-a2b7b875aeb0",
          "wrld_107869ee-ee7e-4332-aed2-9d0fd5bc5f31",
          "wrld_f60cbe28-18d6-42cd-a53c-56d53936f437",
          "wrld_44c322af-9ea9-4879-a32a-a28c42ce26e4",
          "wrld_b93a7dff-cc5a-480c-a679-5ad0f0db1c02",
          "wrld_84c9fa78-391b-4f8c-a80b-31d3264867ea",
          "wrld_1fe147e9-c3e4-4606-b8f4-fa0a07298fb6",
          "wrld_e0434a34-2f64-4e89-99da-8e3b4a86ffe4",
          "wrld_d3e5abc3-2464-4e2f-b3df-d8f1758bf74e",
          "wrld_bcfd94c8-3d69-4d9b-b610-282c6d8a5b3d",
          "wrld_6e65c9b1-3f5f-4e8f-80db-d360f996a144",
          "wrld_c183ed0c-87d3-4124-97ba-4898df5d3daf",
          "wrld_1f93cb3e-63bd-41a1-a290-f8092e02ce06",
          "wrld_3dcabc45-b66b-4d38-abaa-d2922ca4d678",
          "wrld_d76a09c0-8637-4fa2-9b68-6c2aa7a1c821",
          "wrld_4a48a5c1-fae9-416c-98ad-ec410687224d",
          "wrld_e20cefd7-e181-4519-9878-5dbcfbea1bf5",
          "wrld_7d2af18c-e4a1-4084-9cd2-b27432b45980",
          "wrld_a8912308-d979-407e-b744-4a6a760ff86e",
          "wrld_c349f354-a368-4282-969a-4b179038217b",
          "wrld_aaa5df94-3b62-4463-814f-f269ea8ac7b1",
          "wrld_8624eb40-2f9b-4415-a70d-3d2e9567b623",
          "wrld_cacfe6b1-b2c1-40d0-8566-8edd4d96e9fd",
          "wrld_9a51b365-d6cc-42e6-901a-54ceb46b94ef",
          "wrld_37326793-88aa-4587-b58b-07073df8839a",
          "wrld_ecc3e12e-9e41-4cc1-8fb8-d5873b06d265",
          "wrld_066616c9-1eb6-4931-9cf5-14ca5eba4be7",
          "wrld_70353369-ba69-46ab-a20b-f6112c82adba",
          "wrld_d0a68029-96da-4e9f-aa0a-e4f8c6f5d6d9",
          "wrld_07681f2b-14ba-4c75-8848-b0578f624808",
          "wrld_78e661b9-05ec-4d43-9dcf-b06efc1237ec",
          "wrld_c670c420-f57c-4fbb-b73d-33b6c0d0f9f9",
          "wrld_7350dbf7-f3e8-4482-9e41-e38ace9e3a8d",
          "wrld_0679be89-ab9d-46c3-b5f5-b7ed05a78022",
          "wrld_7281543e-6888-4676-896a-fdd090552fc4",
          "wrld_512a9733-a537-4e40-bab9-3294b13d1905",
          "wrld_a3e0ec54-2fc2-49ba-8e32-d0ca9d6bbaa2",
          "wrld_fc7d0eb9-ec47-41db-b429-6af912e78fe1",
          "wrld_e46a4a29-b066-4df0-a33c-b0a96722acdf",
          "wrld_dcf23267-4176-407b-a365-df8f52cbb8f4",
          "wrld_b0ab0a61-4c04-4bcf-b0dd-1294e9391c5a"
        ]
      }
    },
    "hash": "9aaf068efc7906b16b49b64fd8c86499",
    "createdAt": "2023-03-30T00:47:59+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "avatar-world-interest-toon",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 0,
    "tags": [
      "avatar-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Toon",
        "tooltip": "You'll be sent to a world with toon avatars",
        "worldIDs": [
          "wrld_3616e1d5-cc5e-4dd4-9bf2-7a8b7f621e4b",
          "wrld_39d5d7b5-2c3f-4916-97ae-11013554b879",
          "wrld_c686db74-1b6c-430a-ac57-7fa344993435",
          "wrld_9f916a71-4b8d-48eb-8d7a-932036df78b9",
          "wrld_2282ebd9-cc9b-4aff-9bb1-8afb874d79b0",
          "wrld_5bd54be1-20ae-40c0-8a7e-eb0b5ab31296",
          "wrld_cffb76ed-d431-4bf0-a550-383af6d4d93a",
          "wrld_eba73351-841d-4673-b3b8-07952d608d5e",
          "wrld_d46772ca-a662-4364-a3bd-b0956039f024",
          "wrld_578346fb-e4cf-49af-90dd-4f1472e69c56",
          "wrld_6db30614-0dc5-48a0-b2d3-e31735688cf3",
          "wrld_4bc2fcb1-4d60-45cf-868c-ea5c2dd863b8"
        ]
      }
    },
    "hash": "e4755a7b05cf9a17b967f9add02b488a",
    "createdAt": "2023-04-06T21:17:32+00:00",
    "updatedAt": "2023-05-04T00:16:25+00:00"
  },
  {
    "id": "world-interest-quiet-chill",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1,
    "tags": [
      "world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Quiet Chill",
        "tooltip": "You'll be sent to a cozy, quiet place.",
        "worldIDs": [
          "wrld_1b482eca-bede-4de8-88a8-bbb6ca7e24cd",
          "wrld_1752e426-4b07-45b7-99c2-452c02f5dcbd",
          "wrld_2ee4b12c-e3d8-4ff0-aacc-eb0cdef4df73",
          "wrld_8c422b2d-a819-45a9-b21b-61fbf2dd2e96",
          "wrld_a6903d1c-7969-4833-8c3c-7cb0744302ec",
          "wrld_e80d7c90-14bf-423a-9cff-7ec257ff1dc2",
          "wrld_faaa0b96-2934-4bd2-bb60-8508edc96b4b",
          "wrld_a451a949-7d98-4e6a-a467-085f07979eec",
          "wrld_5506c96f-99b2-462a-98b9-ab7586d7f9fa",
          "wrld_ee4dd872-ca55-44e1-900f-a2b7b875aeb0",
          "wrld_1fe147e9-c3e4-4606-b8f4-fa0a07298fb6"
        ]
      }
    },
    "hash": "f0ecf6dba89265e1a6c1b18f183257eb",
    "createdAt": "2023-04-06T20:29:51+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "avatar-world-interest-animal",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1,
    "tags": [
      "avatar-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Animal & Furry",
        "tooltip": "You'll be sent to a world with furry avatars",
        "worldIDs": [
          "wrld_29c8fcc3-77ec-409d-9c06-01ee1ce6ca58",
          "wrld_d6214089-ec72-41e3-9db8-d16bf4d151c4",
          "wrld_5f3c9e80-c2c9-4e5a-b460-91c1bd1f1836",
          "wrld_6db30614-0dc5-48a0-b2d3-e31735688cf3",
          "wrld_2c76b985-b879-47b7-92e2-90f46a90c0f7",
          "wrld_8e06c2d9-7591-4620-ba82-033fcbbe110d",
          "wrld_54b8fa52-3c03-4604-8253-d9fb94c65543"
        ]
      }
    },
    "hash": "fb53505fceab7b992c27ef50d47b9c8f",
    "createdAt": "2023-03-30T00:47:59+00:00",
    "updatedAt": "2023-05-04T00:16:25+00:00"
  },
  {
    "id": "world-interest-group-games",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 2,
    "tags": [
      "world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Group Games",
        "tooltip": "You'll be sent to a game world!",
        "worldIDs": [
          "wrld_858dfdfc-1b48-4e1e-8a43-f0edc611e5fe",
          "wrld_0ec97c4f-1e84-4a3a-9e3a-fa3075b6c56d",
          "wrld_df01edfe-da30-4e6a-a1fb-a0cc534abf06",
          "wrld_32402c8f-f897-4ed6-8266-cd22fdce3313",
          "wrld_b2c574c6-9a6e-4bcc-b74e-1284070c324f",
          "wrld_14750dd6-26a1-4edb-ae67-cac5bcd9ed6a",
          "wrld_9876e234-6dcf-444e-b9e9-d505b6d27189",
          "wrld_df2776a3-8c84-45e3-bbf1-30ac8422911b",
          "wrld_16248871-a374-4819-a284-555ddfc33380",
          "wrld_107869ee-ee7e-4332-aed2-9d0fd5bc5f31",
          "wrld_e0434a34-2f64-4e89-99da-8e3b4a86ffe4",
          "wrld_c183ed0c-87d3-4124-97ba-4898df5d3daf",
          "wrld_4a48a5c1-fae9-416c-98ad-ec410687224d",
          "wrld_c349f354-a368-4282-969a-4b179038217b",
          "wrld_9a51b365-d6cc-42e6-901a-54ceb46b94ef",
          "wrld_70353369-ba69-46ab-a20b-f6112c82adba",
          "wrld_99bdc4c6-b80c-49f3-aae0-5d67017d8340",
          "wrld_7350dbf7-f3e8-4482-9e41-e38ace9e3a8d"
        ]
      }
    },
    "hash": "d133a5fceaa6831a88676a519408534b",
    "createdAt": "2023-04-06T20:29:51+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "avatar-world-interest-human",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 2,
    "tags": [
      "avatar-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Human & Anime",
        "tooltip": "You'll be sent to a world with anime avatars",
        "worldIDs": [
          "wrld_12ca024e-3ae8-4966-bf2f-c0621f622568",
          "wrld_177ff2cd-3e75-47ea-90a7-dc2ff4c42f6f",
          "wrld_84f27a7c-9642-4525-9684-42b793c59434",
          "wrld_ae6218bb-41e3-4ea9-b14d-41267ec03284",
          "wrld_4dadd71d-ae2b-4d6a-9f02-647d0cf59bf7",
          "wrld_a8cbf00c-f2d9-43a6-b257-675be512a02d",
          "wrld_63b2e82b-d1f1-4298-816b-968d4421b64c",
          "wrld_5cf235f6-1342-4fce-b838-23850648e275",
          "wrld_a86a30e8-9335-4110-83c0-ad8f3c1582a3"
        ]
      }
    },
    "hash": "54108a40b9da325a4c9e794be72ac37e",
    "createdAt": "2023-03-30T00:47:59+00:00",
    "updatedAt": "2023-05-04T00:16:25+00:00"
  },
  {
    "id": "world-interest-action",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 3,
    "tags": [
      "world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Action",
        "tooltip": "You'll be sent to an action game world!",
        "worldIDs": [
          "wrld_ff8b4a6e-4268-4783-bc16-3103067a4be6",
          "wrld_46e27ae3-e61d-42e8-b1fe-2a26577eafef",
          "wrld_3b0014d7-b82f-4249-bfc4-64f65815c4f3",
          "wrld_98422193-2ddd-4af4-bd97-ab5609a46785",
          "wrld_baec7040-f9ac-4d66-9e58-3bc9d1f0256a",
          "wrld_080a6971-54d6-49f2-b09e-a000893c8444",
          "wrld_d010695a-3e7c-43a1-ac38-d80f3ffeab17",
          "wrld_cae35e0f-1544-4209-82b9-85f349010c74",
          "wrld_c6b6c1fa-ed05-46eb-a148-38655c64b8e4",
          "wrld_f60cbe28-18d6-42cd-a53c-56d53936f437",
          "wrld_d3e5abc3-2464-4e2f-b3df-d8f1758bf74e",
          "wrld_1f93cb3e-63bd-41a1-a290-f8092e02ce06",
          "wrld_e20cefd7-e181-4519-9878-5dbcfbea1bf5",
          "wrld_aaa5df94-3b62-4463-814f-f269ea8ac7b1",
          "wrld_37326793-88aa-4587-b58b-07073df8839a",
          "wrld_d0a68029-96da-4e9f-aa0a-e4f8c6f5d6d9",
          "wrld_78e661b9-05ec-4d43-9dcf-b06efc1237ec",
          "wrld_0679be89-ab9d-46c3-b5f5-b7ed05a78022",
          "wrld_512a9733-a537-4e40-bab9-3294b13d1905",
          "wrld_fc7d0eb9-ec47-41db-b429-6af912e78fe1"
        ]
      }
    },
    "hash": "83a20d588659fbc8271fcb6275f12bee",
    "createdAt": "2023-04-06T20:29:51+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "avatar-world-interest-robot",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 3,
    "tags": [
      "avatar-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Robot",
        "tooltip": "You'll be sent to a world with robot avatars",
        "worldIDs": [
          "wrld_cffb76ed-d431-4bf0-a550-383af6d4d93a",
          "wrld_d46772ca-a662-4364-a3bd-b0956039f024",
          "wrld_c686db74-1b6c-430a-ac57-7fa344993435",
          "wrld_d6214089-ec72-41e3-9db8-d16bf4d151c4"
        ]
      }
    },
    "hash": "59910d2ef8fa6b072479d13b7a8ef87f",
    "createdAt": "2023-04-06T21:17:32+00:00",
    "updatedAt": "2023-05-04T00:16:25+00:00"
  },
  {
    "id": "world-interest-music-and-dance",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 4,
    "tags": [
      "world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Music & Dance",
        "tooltip": "You'll be sent somewhere that's good for music and dancing!",
        "worldIDs": [
          "wrld_66f15b6d-6cc7-4579-9d5e-eb69047e685f",
          "wrld_b78d83b7-2c51-4a02-b7e5-3889ae4085ad",
          "wrld_f281f6a5-3c1b-4a4f-b199-a55cd36017c0",
          "wrld_2e6867b9-0c78-43ec-8bd5-77aacd751ecd",
          "wrld_1453ae28-b9c5-489b-a124-337d09be1705",
          "wrld_52d5dd9e-3b33-4cf2-a41b-cfd1a71640c8",
          "wrld_236bb7cd-dca2-44a2-9542-3b965e15d37d",
          "wrld_02450116-8967-4d0a-87a0-86765515fcce",
          "wrld_5f358876-6be8-48e2-9a58-1d9ae3aea1b2",
          "wrld_44c322af-9ea9-4879-a32a-a28c42ce26e4",
          "wrld_bcfd94c8-3d69-4d9b-b610-282c6d8a5b3d",
          "wrld_3dcabc45-b66b-4d38-abaa-d2922ca4d678",
          "wrld_7d2af18c-e4a1-4084-9cd2-b27432b45980",
          "wrld_8624eb40-2f9b-4415-a70d-3d2e9567b623",
          "wrld_ecc3e12e-9e41-4cc1-8fb8-d5873b06d265"
        ]
      }
    },
    "hash": "2414d9efa3c9d5ca5e83e79520dbdd92",
    "createdAt": "2023-04-06T20:29:51+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "avatar-world-interest-meme",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 4,
    "tags": [
      "avatar-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Meme",
        "tooltip": "You'll be sent to a world with meme avatars",
        "worldIDs": [
          "wrld_39d5d7b5-2c3f-4916-97ae-11013554b879",
          "wrld_c686db74-1b6c-430a-ac57-7fa344993435",
          "wrld_2282ebd9-cc9b-4aff-9bb1-8afb874d79b0",
          "wrld_5bd54be1-20ae-40c0-8a7e-eb0b5ab31296",
          "wrld_eba73351-841d-4673-b3b8-07952d608d5e",
          "wrld_578346fb-e4cf-49af-90dd-4f1472e69c56",
          "wrld_1d270307-7252-4117-9d97-50ff58ce7cb8",
          "wrld_4bc2fcb1-4d60-45cf-868c-ea5c2dd863b8"
        ]
      }
    },
    "hash": "dc606eeb3f55d66da874872f017bb095",
    "createdAt": "2023-03-30T00:47:59+00:00",
    "updatedAt": "2023-05-04T00:16:25+00:00"
  },
  {
    "id": "world-interest-explore-and-play",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 5,
    "tags": [
      "world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Explore & Play",
        "tooltip": "You'll be sent to an expansive place meant to be explored!",
        "worldIDs": [
          "wrld_34693736-118a-4a1f-9b4d-95b866ed83a7",
          "wrld_e933926e-debb-4710-9e70-be164359fce4",
          "wrld_3dd9347c-bf35-4f2d-9f85-4c337c3a1e14",
          "wrld_b7acb016-d29f-498b-9d40-0b9a6c38a820",
          "wrld_8624eb40-2f9b-4415-a70d-3d2e9567b623",
          "wrld_dfbecb47-7f43-4dbd-8192-3bb007748c46",
          "wrld_2a2cd8a5-1f90-4279-9555-71ac473e3e5f",
          "wrld_cc437da0-e410-4547-9936-62859dee66bd",
          "wrld_5e3bce49-d399-4541-868b-7cf40c294705",
          "wrld_b93a7dff-cc5a-480c-a679-5ad0f0db1c02",
          "wrld_6e65c9b1-3f5f-4e8f-80db-d360f996a144",
          "wrld_d76a09c0-8637-4fa2-9b68-6c2aa7a1c821",
          "wrld_a8912308-d979-407e-b744-4a6a760ff86e",
          "wrld_cacfe6b1-b2c1-40d0-8566-8edd4d96e9fd",
          "wrld_066616c9-1eb6-4931-9cf5-14ca5eba4be7",
          "wrld_07681f2b-14ba-4c75-8848-b0578f624808",
          "wrld_c670c420-f57c-4fbb-b73d-33b6c0d0f9f9",
          "wrld_7281543e-6888-4676-896a-fdd090552fc4",
          "wrld_a3e0ec54-2fc2-49ba-8e32-d0ca9d6bbaa2",
          "wrld_e46a4a29-b066-4df0-a33c-b0a96722acdf",
          "wrld_dcf23267-4176-407b-a365-df8f52cbb8f4",
          "wrld_b0ab0a61-4c04-4bcf-b0dd-1294e9391c5a"
        ]
      }
    },
    "hash": "6ad8975e73333b228b6277966444f153",
    "createdAt": "2023-04-06T20:29:51+00:00",
    "updatedAt": "2023-04-22T01:03:06+00:00"
  },
  {
    "id": "avatar-world-interest-monster",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 5,
    "tags": [
      "avatar-world-interest-group",
      "user-all"
    ],
    "data": {
      "worldInterestGroup": {
        "name": "Monsters & Slimes",
        "tooltip": "You'll be sent to a world with Monsters, Slimes, and Alien avatars",
        "worldIDs": [
          "wrld_3616e1d5-cc5e-4dd4-9bf2-7a8b7f621e4b",
          "wrld_57e47cd8-5b06-4384-a6ff-f9f8ed251d5c",
          "wrld_c686db74-1b6c-430a-ac57-7fa344993435",
          "wrld_2282ebd9-cc9b-4aff-9bb1-8afb874d79b0"
        ]
      }
    },
    "hash": "016faf145759dd98e9a818c9c271f74d",
    "createdAt": "2023-03-30T00:47:59+00:00",
    "updatedAt": "2023-05-04T00:16:25+00:00"
  },
  {
    "id": "qm-community-desktop",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 930,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/1da1e49e888bcc5ed2503d97442d32d2208aaf5802df08f0e71c664c8ebbbfad.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "help-article-vrchat-community"
        ]
      }
    },
    "hash": "a091dd55e49336b23d2a3d9ec3607d0f",
    "createdAt": "2023-06-12T22:38:29+00:00",
    "updatedAt": "2023-06-28T21:30:13+00:00"
  },
  {
    "id": "qm-crowdin-desktop",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 940,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/088d2ef27d350e1c0ca26f629b4fdbd68d69b80b186e5523792fe2999cdf6119.png",
      "onPressed": {
        "command": "OpenHelpArticle",
        "parameters": [
          "help-article-vrchat-crowdin"
        ]
      }
    },
    "hash": "9e2d4d6fab1a1fd33a3d21607a294ae2",
    "createdAt": "2023-06-12T22:38:29+00:00",
    "updatedAt": "2023-06-28T19:15:52+00:00"
  },
  {
    "id": "qm-banner-vcc-2",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 950,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/745b0f27e9df4146376515045c2168d8efc0d4fe5ebdf1365759d2f55db5820d.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://vcc.docs.vrchat.com/news/release-2.0.0"
        ]
      }
    },
    "hash": "d7b34005b9c2a8c4415904d76a039333",
    "createdAt": "2023-03-09T18:56:29+00:00",
    "updatedAt": "2023-06-28T19:15:53+00:00"
  },
  {
    "id": "qm-banner-groups",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 960,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/bfbd6fdbc44669e6cc54b5d396866457be11b4ec2f8419d99dd1ec128b20689b.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://hello.vrchat.com/blog/vrchat-groups"
        ]
      }
    },
    "hash": "9df5162bf52fefcce4b1e5499487d039",
    "createdAt": "2022-11-23T23:43:14+00:00",
    "updatedAt": "2023-06-28T19:15:52+00:00"
  },
  {
    "id": "launch-avatar-guide",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 970,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/adaed2094c59dbe1f4fa6d92060ce8f6a2221e4ca5c140ecce292a44550f22e9.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://www.youtube.com/playlist?list=PLRUlfYGZBxVeEAVXkaG1uydyzFZAMOuMd"
        ]
      }
    },
    "hash": "d58f7dc3a79db8562194a0c46eddcf31",
    "createdAt": "2022-10-24T23:54:48+00:00",
    "updatedAt": "2022-10-24T23:54:48+00:00"
  },
  {
    "id": "build-config",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "high-priority",
      "user-all"
    ],
    "data": {
      "version": "2021.3.4"
    },
    "hash": "a76e7da333c6a5a8f7ec2adee064cac9",
    "createdAt": "2021-08-21T04:27:05+00:00",
    "updatedAt": "2021-09-18T04:37:29+00:00"
  },
  {
    "id": "world-banner---updated-recently",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-updated-recently",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/9cb85b79db0e8444a85b073581181503f251af5eb6f63c5f95bd04f6facb085f.png"
    },
    "hash": "b6b8c266955688a5e6ecaaf26a4b03c7",
    "createdAt": "2022-04-01T22:03:06+00:00",
    "updatedAt": "2022-09-08T22:22:48+00:00"
  },
  {
    "id": "world-banner---trending-long",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-trending",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/7d437ee244b616de28e696a72c47406bed99d9fb2cae82816bb1137e0d2e29ad.png"
    },
    "hash": "35979e388ed9ddce4d6d39392d38c1fa",
    "createdAt": "2022-05-13T22:45:49+00:00",
    "updatedAt": "2022-09-08T22:22:48+00:00"
  },
  {
    "id": "world-banner---spotlight",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-spotlight",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/208f504d379cacd6176e09323064e988c88ddf4923933c90b7336f49ea5b0d8a.png"
    },
    "hash": "db40829b768627b0099d22c84cb27fd5",
    "createdAt": "2022-04-01T22:03:06+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---spotlight-xplat",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-spotlight-xplat",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/611fbefd8db4c78b0a08062c1b1c4bb3a953a98f77de273d11e153be615bf008.png"
    },
    "hash": "9a689d2aec8c0a16ad0cdb0b39dac4ff",
    "createdAt": "2022-06-24T23:48:27+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---recent",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-recent",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/e7289681b5d8cce32da7b884faacaeeda0f3c55e0e4ece9beb714d7449219593.png"
    },
    "hash": "8b5ebffab96d5e9de8ff6bae25935fc2",
    "createdAt": "2022-04-01T22:03:06+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---random-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-random",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/80d0d694e510850e69a43e5123d60f644445a59467f7ac8427783bf8f1c97a04.png"
    },
    "hash": "24db98186fdf5532271c94bdc7585d35",
    "createdAt": "2022-04-01T22:03:06+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---new-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-new-worlds",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/93a1a246c8627a24cf378defdca078ea7c980009d7bfe2bb3f357931828a5a77.png"
    },
    "hash": "cc0aaa58ab2eb20d2a22b0e2e7eb5c71",
    "createdAt": "2022-04-01T22:03:05+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---mine",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-mine",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/cbb990c3b0117859878c0c168216fea0cc96e1ed38af73945e8cc579e725686f.png"
    },
    "hash": "1b71b29a2591f66206b3c06871bc366b",
    "createdAt": "2022-04-01T22:03:05+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---world-games",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-games",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/292c1ad10c98007f8a9fc7d38c3313b7b38379b60ccbf591fc9ed576dfddae84.png"
    },
    "hash": "131523e9070123ca7073b7de4e2638a0",
    "createdAt": "2022-04-01T22:03:05+00:00",
    "updatedAt": "2022-09-08T22:22:47+00:00"
  },
  {
    "id": "world-banner---community",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-labs",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/50faf07b3f8bee5d12fa73f6fd01d7317fae0c1548de5e169c14651e469d4dc4.png"
    },
    "hash": "75a6d50174250c4d5d56164f87d00fad",
    "createdAt": "2022-03-28T22:27:42+00:00",
    "updatedAt": "2022-09-08T22:22:46+00:00"
  },
  {
    "id": "world-banner---classics",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-classics",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/1ba1a0ffc909be4d10221a11af944f55d8dfc1a38f2a55b7c7e680cdfb080687.png"
    },
    "hash": "aff2c07b8e10ce97246e55a4300add00",
    "createdAt": "2022-03-28T22:27:42+00:00",
    "updatedAt": "2022-09-08T22:22:46+00:00"
  },
  {
    "id": "world-banner---avatar-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-avatar",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/db98b4981830a2410a99e95f1b0bff1f5f4568b29c7d376120858e9be2eee7ed.png"
    },
    "hash": "b719f9a4e1011f25c5b450c7cddbe55f",
    "createdAt": "2022-04-01T21:55:29+00:00",
    "updatedAt": "2022-09-08T22:22:46+00:00"
  },
  {
    "id": "world-banner---active-my-platform",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-active-my-platform",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/0c5129c818c94512b0ff48bca626a0eb1b53beeaa714d645bc7334cbb454dc7b.png"
    },
    "hash": "cbb6d8331f3b92839fefc39f54914200",
    "createdAt": "2022-04-01T21:55:29+00:00",
    "updatedAt": "2022-09-08T22:22:46+00:00"
  },
  {
    "id": "world-banner---active-cross-platform",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-active-cross-platform",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/44691774134e30d81873e2d7d603f9c8f31c4335521dcd0c6f1d4ae8adcdc650.png"
    },
    "hash": "8138a324bbcbf6202a251a18f380b257",
    "createdAt": "2022-04-01T21:55:29+00:00",
    "updatedAt": "2022-09-08T22:22:46+00:00"
  },
  {
    "id": "yearly-steam-subscription-offer",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "vrc-subscription-page",
      "yearly-subscription",
      "user-all"
    ],
    "requireClientTags": [
      "platform-store-steam"
    ],
    "data": {
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/4edb5ea6d547986af07a7855972106959b13c271e09965ffbc1de0d4f84eb4f6.png",
      "tooltipDescription": "Purchase a yearly VRC+ subscription now and get 3 additional months free!",
      "description": "Special Holiday Bonus: Get Free Time!"
    },
    "hash": "fae152a0942dc7ae6bff362f16eebcc2",
    "createdAt": "2022-11-14T20:01:56+00:00",
    "updatedAt": "2022-12-15T00:29:04+00:00"
  },
  {
    "id": "monthly-steam-subscription-offer",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "vrc-subscription-page",
      "monthly-subscription",
      "user-all"
    ],
    "requireClientTags": [
      "platform-store-steam"
    ],
    "data": {
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/6ebcbf030bd90d26a89fbc74b70160c7662df05f5a3378a00bfbdf3062aa6340.png",
      "tooltipDescription": "Purchase a monthly VRC+ subscription now and get 1 additional month free!",
      "description": "Special Holiday Bonus: Get Free Time!"
    },
    "hash": "edaa925c0a7bc2d73e774143467112b9",
    "createdAt": "2022-11-14T20:01:56+00:00",
    "updatedAt": "2022-12-15T00:29:04+00:00"
  },
  {
    "id": "LAUNCH---safety",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/7ae34bb796e57b874979476641129116d431bde2709eb43a954ad076837df31a.png",
      "onPressed": {
        "command": "OpenSafetyMenu"
      }
    },
    "hash": "1723015530c9d0bc86cedde9ebd10206",
    "createdAt": "2021-06-08T20:24:53+00:00",
    "updatedAt": "2022-09-08T21:59:19+00:00"
  },
  {
    "id": "help-article-what-vrcp-quest",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-vrcplus",
      "help-notifications"
    ],
    "requireClientTags": [
      "platform-oculus-quest"
    ],
    "data": {
      "name": "What is VRChat Plus?",
      "imageUrl": "https://assets.vrchat.com/ips/assets/0817e6d481206f80c7257b0afcce74cc4a10e70e6cd23f3638115cd7f8da5689.png",
      "description": "Learn about what you get for subscribing to VRChat Plus.",
      "article": {
        "content": [
          {
            "text": "VRChat Plus is a way for our dedicated community to support us as we continue to develop VRChat. While VRChat is completely free, users who subscribe to VRChat Plus get a few extra perks and bonuses as our way of saying thanks."
          },
          {
            "text": "<br><br>Supporters receive:<br><br>"
          },
          {
            "text": "<indent=5%>• <color=#ffff01>Nameplate Icons</color>: With VRChat Plus, you can personalize your nameplate with an icon that you create! Take a picture in VRChat, or upload your own image via our website.<br><br>• <color=#ffff01>Photo Invites</color>: You’ll be able to send a picture along with invites, adding an extra layer of customization.<br><br>• <color=#ffff01>More Avatar Slots</color>: VRChat Plus users get 300 avatar favorite slots!<br><br>• <color=#ffff01>Trust Boost</color>: You’re supporting us, so we support you back! Supporters receive a small amount of bonus Trust when subscribing.<br><br>• <color=#ffff01>More Main Menu Backdrops</color>: Unlock dozens of parallax Main Menu backdrops with layered 3D effects.</indent>"
          },
          {
            "text": "<br>...and more!<br><br>We are always trying to figure out ways to give VRChat Plus users a little extra thanks."
          },
          {
            "text": "<br>"
          },
          {
            "text": "<size=140%><b>How to Buy VRChat Plus</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "VRChat Plus can be purchased on both Steam and the Quest Store for either <color=#ffff01>$9.99 per month</color>, or <color=#ffff01>$99.99 per year</color>.<br><br>All you have to do is open up your Quick Menu. You can open up your <color=#ffff01>Quick Menu</color> by <color=#ff4aff>[B (right hand, top button) or Y (left hand, top button)]</color>."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/3f7a06b35b602d3db46812e6ac9054fca8bac5020dba253cf619095b3510ab69.png"
          },
          {
            "text": "Then, press the <color=#ffff01>Main Menu</color> button in the top right corner."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/33ddba6e2a6702b776f51970e07224ee1efc83330b4a454da6b8b05ad583a09a.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Then, click the <color=#ffff01>VRChat Plus</color> tab. From here, follow the instructions on the screen!"
          },
          {
            "text": "<br>"
          },
          {
            "text": "<size=140%><b>How to Buy VRChat Plus for a Friend</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "If you would like to know how to buy VRChat Plus for a friend, you can read our article <color=#7777fc><link=gifting-vrchat>[here]</link></color>."
          }
        ],
        "embeddedLinkData": [
          {
            "id": "gifting-vrchat",
            "name": "Gifting VRChat",
            "command": "OpenHelpArticle",
            "parameters": [
              "help-article-gift-vrcp-quest"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "command": "OpenHelpArticle",
            "parameters": [
              "help-article-gift-vrcp-quest"
            ]
          }
        ]
      }
    },
    "hash": "bf8f555c714f7dd351758b8bc29d0911",
    "createdAt": "2022-10-05T23:19:39+00:00",
    "updatedAt": "2023-03-22T19:55:19+00:00"
  },
  {
    "id": "help-article-what-vrcp-pcvr",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-vrcplus",
      "help-notifications"
    ],
    "requireClientTags": [
      "platform-pc-vr"
    ],
    "data": {
      "name": "What is VRChat Plus?",
      "imageUrl": "https://assets.vrchat.com/ips/assets/0817e6d481206f80c7257b0afcce74cc4a10e70e6cd23f3638115cd7f8da5689.png",
      "description": "Learn about what you get for subscribing to VRChat Plus.",
      "article": {
        "content": [
          {
            "text": "VRChat Plus is a way for our dedicated community to support us as we continue to develop VRChat. While VRChat is completely free, users who subscribe to VRChat Plus get a few extra perks and bonuses as our way of saying thanks."
          },
          {
            "text": "<br><br>Supporters receive:<br><br>"
          },
          {
            "text": "<indent=5%>• <color=#ffff01>Nameplate Icons</color>: With VRChat Plus, you can personalize your nameplate with an icon that you create! Take a picture in VRChat, or upload your own image via our website.<br><br>• <color=#ffff01>Photo Invites</color>: You’ll be able to send a picture along with invites, adding an extra layer of customization.<br><br>• <color=#ffff01>More Avatar Slots</color>: VRChat Plus users get 300 avatar favorite slots!<br><br>• <color=#ffff01>Trust Boost</color>: You’re supporting us, so we support you back! Supporters receive a small amount of bonus Trust when subscribing.<br><br>• <color=#ffff01>More Main Menu Backdrops</color>: Unlock dozens of parallax Main Menu backdrops with layered 3D effects.</indent>"
          },
          {
            "text": "<br>...and more!<br><br>We are always trying to figure out ways to give VRChat Plus users a little extra thanks."
          },
          {
            "text": "<br>"
          },
          {
            "text": "<size=140%><b>How to Buy VRChat Plus</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "VRChat Plus can be purchased on both Steam and the Quest Store for either <color=#ffff01>$9.99 per month</color>, or <color=#ffff01>$99.99 per year</color>.<br><br>All you have to do is open up your Quick Menu. You can open up your <color=#ffff01>Quick Menu</color> by <color=#ff4aff>[B (top button)]</color>."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/3f7a06b35b602d3db46812e6ac9054fca8bac5020dba253cf619095b3510ab69.png"
          },
          {
            "text": "Then, press the <color=#ffff01>Main Menu</color> button in the top right corner."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/33ddba6e2a6702b776f51970e07224ee1efc83330b4a454da6b8b05ad583a09a.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Then, click the <color=#ffff01>VRChat Plus</color> tab. From here, follow the instructions on the screen!"
          },
          {
            "text": "<br>"
          },
          {
            "text": "<size=140%><b>How to Buy VRChat Plus for a Friend</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "If you would like to know how to buy VRChat Plus for a friend, you can read our article <color=#7777fc><link=gifting-vrchat>[here]</link></color>."
          }
        ],
        "embeddedLinkData": [
          {
            "id": "gifting-vrchat",
            "name": "Gifting VRChat",
            "command": "OpenHelpArticle",
            "parameters": [
              "help-article-gift-vrcp-pcvr"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "command": "OpenHelpArticle",
            "parameters": [
              "help-article-gift-vrcp-pcvr"
            ]
          }
        ]
      }
    },
    "hash": "25df88a457d44539fb4d29cf09262358",
    "createdAt": "2022-10-05T23:19:39+00:00",
    "updatedAt": "2023-03-22T19:55:18+00:00"
  },
  {
    "id": "help-article-what-vrcp-desktop",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-vrcplus",
      "help-notifications"
    ],
    "requireClientTags": [
      "platform-pc-desktop"
    ],
    "data": {
      "name": "What is VRChat Plus?",
      "imageUrl": "https://assets.vrchat.com/ips/assets/0817e6d481206f80c7257b0afcce74cc4a10e70e6cd23f3638115cd7f8da5689.png",
      "description": "Learn about what you get for subscribing to VRChat Plus.",
      "article": {
        "content": [
          {
            "text": "VRChat Plus is a way for our dedicated community to support us as we continue to develop VRChat. While VRChat is completely free, users who subscribe to VRChat Plus get a few extra perks and bonuses as our way of saying thanks."
          },
          {
            "text": "<br><br>Supporters receive:<br><br>"
          },
          {
            "text": "<indent=5%>• <color=#ffff01>Nameplate Icons</color>: With VRChat Plus, you can personalize your nameplate with an icon that you create! Take a picture in VRChat, or upload your own image via our website.<br><br>• <color=#ffff01>Photo Invites</color>: You’ll be able to send a picture along with invites, adding an extra layer of customization.<br><br>• <color=#ffff01>More Avatar Slots</color>: VRChat Plus users get 300 avatar favorite slots!<br><br>• <color=#ffff01>Trust Boost</color>: You’re supporting us, so we support you back! Supporters receive a small amount of bonus Trust when subscribing.<br><br>• <color=#ffff01>More Main Menu Backdrops</color>: Unlock dozens of parallax Main Menu backdrops with layered 3D effects.</indent>"
          },
          {
            "text": "<br>...and more!<br><br>We are always trying to figure out ways to give VRChat Plus users a little extra thanks."
          },
          {
            "text": "<br>"
          },
          {
            "text": "<size=140%><b>How to Buy VRChat Plus</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "VRChat Plus can be purchased on both Steam and the Quest Store for either <color=#ffff01>$9.99 per month</color>, or <color=#ffff01>$99.99 per year</color>.<br><br>All you have to do is open up your Quick Menu. You can open up your <color=#ffff01>Quick Menu</color> by <color=#ff4aff>[Escape]</color>."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/3f7a06b35b602d3db46812e6ac9054fca8bac5020dba253cf619095b3510ab69.png"
          },
          {
            "text": "Then, press the <color=#ffff01>Main Menu</color> button in the top right corner."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/33ddba6e2a6702b776f51970e07224ee1efc83330b4a454da6b8b05ad583a09a.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Then, click the <color=#ffff01>VRChat Plus</color> tab. From here, follow the instructions on the screen!"
          },
          {
            "text": "<br>"
          },
          {
            "text": "<size=140%><b>How to Buy VRChat Plus for a Friend</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "If you would like to know how to buy VRChat Plus for a friend, you can read our article <color=#7777fc><link=gifting-vrchat>[here]</link></color>."
          }
        ],
        "embeddedLinkData": [
          {
            "id": "gifting-vrchat",
            "name": "Gifting VRChat",
            "command": "OpenHelpArticle",
            "parameters": [
              "help-article-gift-vrcp-desktop"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "command": "OpenHelpArticle",
            "parameters": [
              "help-article-gift-vrcp-desktop"
            ]
          }
        ]
      }
    },
    "hash": "9fb90988b7a0d432eb36d0027b8bed3d",
    "createdAt": "2022-10-05T23:19:38+00:00",
    "updatedAt": "2023-03-22T19:55:17+00:00"
  },
  {
    "id": "help-article-contact-support",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "help-article",
      "user-all",
      "help-topic-support",
      "help-notifications"
    ],
    "data": {
      "name": "Contact Support",
      "imageUrl": "https://assets.vrchat.com/ips/assets/27c342696745579915f90655975eab3ec3fdae8a5d16647d12b10f543a794a81.png",
      "description": "Information on how to contact VRChat support.",
      "article": {
        "content": [
          {
            "text": "Running into an issue with VRChat that you can’t solve?<br><br>First, try checking out the Help & Information section (that’s where you are right now!) to see if your problem or question is addressed there. Then try checking out our <link=knowledge-base><color=#7777fc><u>Knowledge Base</u></color></link> and see if your issue is mentioned there.<br><br>If you’re still having trouble, you can reach out to <link=vrchat-support><color=#7777fc><u>VRChat Support</u></color></link>.<br><br>When reaching out to support, please make sure you accurately fill out as much information as you possibly can. Make sure you’re submitting your request in the right category! Moderation staff cannot help you troubleshoot an issue with the VRChat app, and support staff cannot help you with moderation issues.<br><br>Please note that VRChat support can only answer questions about VRChat, and not external VR hardware or software."
          }
        ],
        "embeddedLinkData": [
          {
            "id": "knowledge-base",
            "name": "Knowledge Base",
            "command": "OpenURL",
            "parameters": [
              "https://help.vrchat.com/hc/en-us"
            ]
          },
          {
            "id": "vrchat-support",
            "name": "VRChat Support",
            "command": "OpenURL",
            "parameters": [
              "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "name": "Knowledge Base",
            "command": "OpenURL",
            "parameters": [
              "https://help.vrchat.com/hc/en-us"
            ]
          },
          {
            "name": "VRChat Support",
            "command": "OpenURL",
            "parameters": [
              "https://help.vrchat.com/hc/en-us/requests/new?ticket_form_id=360006750513"
            ]
          }
        ]
      }
    },
    "hash": "392786ffa6d3d81df22f9505e7b349a6",
    "createdAt": "2022-04-07T23:44:28+00:00",
    "updatedAt": "2022-09-08T22:22:35+00:00"
  },
  {
    "id": "release-main-menu-launch",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-news",
      "help-notifications"
    ],
    "data": {
      "name": "Main Menu 2.0",
      "imageUrl": "https://assets.vrchat.com/ips/assets/805ffb56a12ed6729fc5195ff2faba5e24df2b3ee4f05140fdb72690f765c5fc.png",
      "description": "MM 2.0 is Live!",
      "isNew": true,
      "article": {
        "sectionLinks": [
          "link-feature-highlights",
          "link-patch-notes"
        ],
        "content": [
          {
            "text": "It’s shiny, it’s new, and you’re using it right now! Welcome to UI 2.0 – the Main Menu update!<br><br>We first started our project to redo the entire VRChat UI last year, when we released the Quick Menu update, which we referred to as the “1.5” update.<br><br>With the Main Menu update, we’ve finished the job, reskinning the Main Menu, adding a ton of new functionality, and hopefully drastically improving the lives of every VRChat user.<br><br>The new Main Menu introduces a ton of new features – so many that we won’t be able to go through all of them! However, if you’d like a complete list of changes, you can scroll down to the bottom of this post (or click the button on the left sidebar!) to see the complete patch notes."
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-feature-highlights",
            "title": "Feature Highlights",
            "text": "<size=140%><b>Feature Highlights</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "<b>A Completely New Look</b> – The Main Menu has been reskinned to match VRChat’s visual style. We’ve spent a lot of time ensuring that it just doesn’t look better, but that it works better, too. Menus should be easier to navigate, and it overall should be more intuitive and user-friendly to figure out what it is you’re trying to do.<br><br><b>Redesigned HUD</b> – The VRChat HUD has been completely redesigned! You’ll first notice an all-new microphone icon that is clearer and more intuitive. You’ll also notice that you will now receive notifications when users join or enter your instance. Many of these features can be customized to your liking under Settings!<br><br><b>Main Menu Launchpad</b> – When you now open your Main Menu, you will be redirected to the Launch Pad. The Launch Pad contains a lot of useful information that you might want to know quickly, such as how many friends you have online, who you hung out with in VRChat recently (even if they aren’t your friend!), and which if your favorite worlds have recently updated.<br><br><b>Recently Worn Avatars</b> – Have you ever worn an avatar, forgotten to favorite it, and then lost it forever? No more! Your last few worn avatars will now be shown under the Avatars Tab. Go check it out!<br><br><b>Improved Search</b> – The new Search Tab lets you find VRChat worlds easier than ever before. In addition to improving our search results page dramatically, we’ve also added in a randomized category feature. Whenever you open the Search Tab, all of the categories you see will be randomized!<br><br><b>Help & Info</b> – We’ve added a brand new Help & Info section to the Main Menu that’s been populated with a bunch of how-to articles for both new and old players alike. Additionally, this is where patch notes (like these!) will be posted in the future, so that everyone – not just the folks that lurk our Discord! – can see what’s changing and being added to VRChat.<br><br>…and so, so much more!"
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-patch-notes",
            "title": "Full Patch Notes",
            "text": "<size=140%><b>Full Patch Notes</b></size>"
          },
          {
            "text": "<br><br>"
          },
          {
            "text": "<voffset=0.7em><b><size=120%>Client - Features</size></b></voffset><br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented Main Menu 2.0!</b></indent><br><line-height=0.76em></line-height><br>  - The new Main Menu utilizes tabs to allow users to quickly find exactly what they're looking for with either old sections of the Main Menu that you're familiar with as well as several brand new sections to aid your VRChat experience<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented the Launch Pad Menu</b>! We've added a new Launch Pad section to the Main Menu that includes a bunch of useful information at a quick glance - including how many friends you've got online, pending invites, friend requests, what worlds you've been to recently, if any of your favorite worlds have received an updated and who you've recently hung out with.</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented Wings into the Main Menu!</b> The always-useful Wings from the Quick Menu have been added to the Main Menu, allowing you to have always-visible information on the sides</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added the Worlds wing!</b> </indent><br><line-height=0.76em></line-height><br>  - This wing gives you quick access to your worlds, like Recent Worlds, Uploaded Worlds, and your playlists! <br>  - You can sort them in many ways, like Active, Friends, Last Updated, and more!<br>  - This wing is enabled by default for new users<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added the Explore wing!</b></indent><br><line-height=0.76em></line-height><br>  - This wing gives you quick access to many different guides on how to get started with VRChat!<br>  - This wing is enabled by default for new users<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented a new HUD</b>! We've re-designed the VRChat HUD to allow users to easily stay notified, customize opacity for the HUD or individual elements, and more.</indent><br><line-height=0.76em></line-height><br>  - By default, the HUD will use the 'Verbose' setting to show notification pop-ups (which can be individually configured) such as Join / Leave Notifications, Portal Notifications, etc.<br>  - The HUD can also be set to 'Minimal' to only show icons or can be completely turned off<br>  - Added an optional toggle for HUD motion smoothing<br>  - Added opacity sliders to allow you to adjust the opacity for the entire HUD or the mic icon<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>All-new Worlds Menu</b>! The Worlds Menu has been completely redesigned to help users find exactly what they're looking for as well as improve overall world discoverability</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added \"VRCat's Variety Box\"</b>, which is a new page that you get when you open the Worlds tab!</indent><br><line-height=0.76em></line-height><br>    - The variety box contains one random world from a set of categories<br>    - Clicking Shuffle in the top right will get you new worlds<br>    - You can hover over any world to favorite it or join a public instance of that world<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Updated Avatars Menu</b>!  The Avatars Menu has also been updated and made easier to navigate. </indent><br><line-height=0.76em></line-height><br>  - We've implemented a \"Recently Used\" list of avatars so you can quickly find previous avatars you used<br>  - We've re-built the Avatar Details option to include a lot more information such as what platform the avatar is uploaded for, what features it has (eyelook, visemes, SDK version), who the author is and more<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Updated Social Menu</b>! The Social Menu has been improved significantly to help you navigate long lists of friends quickly and cycle through your various friend groups with much more ease</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Updated and refined Search functionality</b>! We've made various changes to the Search function - users will be initially provided with randomized queries to help them find various world types and reloading the page will automatically refresh these queries.</indent><br><line-height=0.76em></line-height><br>  - Improved Search results as a whole to allow users to see much more results and refine their search using more filter options than before<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented the Help & Info Menu</b>! The Help & Info Menu has been added to VRChat to allow new users to quickly catch up to speed on how to use VRChat or serve as a useful reminder to experienced users about how certain features work</indent><br><line-height=0.76em></line-height><br>  - This menu will include future release notes so you can easily read up on the latest changes instead of having to go to our Discord or the website<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented a new Settings Menu</b>! The new Settings Menu has been designed to house various settings scattered around VRChat in a single page with multiple tabs that lead into various different categories to help you easily configure your VRChat experience</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added background images to the UI!</b> You can choose one of the backgrounds to add some cool flair to your UI</indent><br><line-height=0.76em></line-height><br>  - This affects the Main Menu and the Quick Menu<br>  - There are 3 different options, and 37 additional for VRChat Plus subscribers<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented Avatar Haptics!</b> This feature allows users to get haptic feedback in your controllers when you touch other avatars - no avatar setup is required for this!</indent><br><line-height=0.76em></line-height><br>  - This system uses the Avatar Dynamics interaction permission system, so <i>both users MUST opt in before haptics will work for either of you</i><br>  - Turn this system on and adjust them in the Quick Menu's Gear tab<br>  - Avatar Haptics is not supported on standalone Quest because it causes significant performance issues related to the render pipeline and how the Quest GPU operates, we are re-assessing how we might best enable this feature on Quest standalone<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added Portal Placement!</b></indent><br><line-height=0.76em></line-height><br>  - In the Quick Menu's \"gear\" tab, find an option to enable Portal Placement<br>  - With this enabled, when you go to drop a portal, you'll be able to do so with by pointing your controller!<br>  - Move your controller around and point where you want to place the portal! If its an invalid position, the marker will turn red and a tooltip will appear on your screen telling you why you can't place the portal there<br>  - You can MOVE while looking for a place to put your portal!<br>  - Once you find a good spot, pull your trigger and the portal will spawn<br>  - It also works on Desktop!!<br>  - its REALLY GOOD please go try it! We like it so much we made it the new default.<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Implemented Visual Adjustment options</b>, such as color blindness filters (Protanopia, Deuteranopia, and Tritanopia), world / UI filters (grayscale or retro), screen brightness and bloom intensity adjustments</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Implemented \"Flying Mode\" for the camera while in VR!</indent><br><line-height=0.76em></line-height><br>  - Engage and disengage this feature by opening the camera and selecting the \"Flying\" toggle<br>  - When engaged, you can release the camera to drop the controls. The camera will stay put<br>  - Your thumbsticks can be used to move the camera lens within a 15 meter radius around where you're standing<br>  - Hold down the trigger while moving the right stick to tilt the lens<br>  - To take a photo, use your laser pointer to click the \"Take Photo\" button on the camera<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Added avatar texture VRAM usage estimation to the Avatar Stats system</indent><br><line-height=0.76em></line-height><br>  - This feature estimates the amount of VRAM in use by a given avatar and displays it. It isn't 100% accurate, but its close!<br>  - You might see this value differ from some community-created tools like <color=#1D7CEAFF><link=vrc-avatar-tools>Thry's VRCAvatarTools</link></color>. That's because we only list texture VRAM!<br>  - _This stat does not currently affect Performance Rank_, but <b>it will eventually.</b> From our observations, keeping the VRChat value under ~50MB seems like a \"Good\" place to aim for<br>  - Will be implemented into the SDK at a later time<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Implemented an optional FBT Calibration visualization that users can toggle on to help calibrate Full-Body Tracking</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Added different tracker models for Full Body Tracking</indent><br><line-height=0.76em></line-height><br>  - You can toggle between 4 different values in the Quick Menu's Gear tab<br>  - \"Sphere\" - Default, same as Live. Uses the good 'ol Unity Sphere<br>  - \"System\" - Uses SteamVR's \"Render-Model\" for your device. This _usually_ looks like the physical tracker!<br>  - \"Box\" - A rounded cube with colored sides to indicate XYZ axis information<br>  - \"Axis\" - An indicator with long \"spikes\" tipped with colors to indicate XYZ axis information<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Implemented a head-tracked option for the Personal mirror</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Implemented the ability for users to double-click the Audio settings to toggle Earmuffs on/off</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Added a \"Lock\" button in the bottom right of the Main Menu that turns on and off menu grabbing and moving</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Implemented Avatars 3.0 synced bool parameter <space=0.3em><mark=#0000003C>Earmuffs</font></mark><space=0.3em> that is True when the user has the Earmuffs feature on, and False when it is off</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Added an \"unmute\" sound when you unmute your microphone</indent><br><line-height=0.76em></line-height><br>  - Remember that you can adjust the volume of the mute/unmute sound in the HUD settings<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Implemented a new <color=#1D7CEAFF><link=launch-option>Launch Option</link></color> to set CPU thread affinity for the VRChat process by using the <space=0.3em><mark=#0000003C>--affinity=FFFF</mark><space=0.3em> argument</indent><br><line-height=0.76em></line-height><br>  - The <space=0.3em><mark=#0000003C>FFFF</mark><space=0.3em> is a bitmask indicating which threads should be utilized for VRChat. <space=0.3em><mark=#0000003C>FFFF</mark><space=0.3em> selects the first 16 threads, <space=0.3em><mark=#0000003C>FF</mark><space=0.3em> selects the first 8, and so on<br>  - This feature is primarily intended for usage with certain AMD CPUs who benefit from limiting processes to a single CCX<br>  - This is an _advanced feature_. Unless you know what you're doing and know you need this, you probably shouldn't use it!<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added a new \"Measure Height\" button</b> to the User Real Height setting that will use your headset's current distance from the playspace floor to measure your height</indent><br><line-height=0.76em></line-height><br>    - When you use this, it is very important to stand up straight as well as to have an accurate room setup floor height when using this feature! It's available in the QM Gear tab as well as the Main Menu's new section<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>A new section has been added to the Main Menu Settings tab called \"Tracking and IK\". It includes:</indent><br><line-height=0.76em></line-height><br>    - User Real Height adjustment, including the new \"measure\" button<br>    - <b>Metric Units Adjustment</b> - the User Real Height arrow buttons will increment in centimeters instead of inches.<br>    - <b>Legacy Calibration</b> - swaps to the older method of locking your avatar in place during calibration<br>    - <b>Disable Shoulder Tracking</b> - prevents arm (elbow) trackers from affecting the shoulders<br>    - <b>Freeze Tracking on Disconnect</b> - when a tracker disconnects it continues to lock the tracked body to its final location relative to the player, rather than transitioning that part to untracked behavior. We've made new efforts to ensure that even if you activate this option after the tracker has disconnected it will still remember and use the proper final location of the tracker<br>    - <b>IK Debug Logging</b> - adds extra log output related to IK features.<br>    - Note: the command line arguments associated with the above features are being removed! To use the features going forward you must activate them in the menu<br><br><voffset=0.3em><b><size=120%>Changes and Improvements</size></b></voffset><br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20><b>Added more double-click functions to the Quick Menu tabs!</b></indent><br><line-height=0.76em></line-height><br>    - If you didn't know, double-clicking the tabs has different functionality, letting you quickly access the most common functions of Quick Menu tabs. For example, <b>double-clicking the Camera tab summons the Camera</b> and <b>double-clicking the audio tab toggles Earmuffs on and off.</b> These have been in for a while!<br>    - We added some more:<br>      - <b>Double-click Launchpad QM (Quick Menu) tab -> Opens MM (Main Menu) Launchpad tab</b><br>      - <b>Double-click Notifications QM tab -> Opens MM Notifications tab</b><br>      - <b>Double-click Here QM tab  -> Opens MM Instance Details page</b> <br>      - <b>Double-click Settings QM tab  -> Opens MM Settings tab</b>"
          },
          {
            "text": "<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Various improvements to the face mirror to improve resolution and clamping</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Made some improvements to the placement of the Personal Mirror above or below the user</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Greatly improved performance when avatars are hidden by removing unnecessary IK tweening</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Nameplates and the Chatbox now appear the \"right way\" in mirrors-- i.e., they're no longer mirrored</indent><br><line-height=0.76em></line-height><br><voffset=0.3em><b><size=120%>Fixes</size></b></voffset><br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Fixed some issues with the Personal Mirror not playing well with some legacy avatars</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Fixed the Quick Menu Master audio slider not going to 125%</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Fixed issues with travel that rarely caused users to be sent back to their home world</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Various fixes and improvements to the keyboard</indent><br><line-height=0.76em></line-height><br>  - You can now copy text that has been set by Udon<br>  - The keyboard no longer shows up behind you<br>  - The keyboard now respects the options set by the InputField you're typing into, such as multi-line, data validation, and read-only<br>  - The keyboard no longer breaks if the InputField's  placeholder text is missing<br>  - The Shift key only now only applies to one character unless you double-click it<br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Fixed some issues where users with non-standard or directly supported tracker configurations may experience some crashing issues</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Fixes and adjustments to text rendering throughout VRChat, such as blurry text on Action Menu when using small avatars</indent><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Fixed QM incorrectly opening when logging out in VR</indent><br><line-height=0.76em></line-height><br><voffset=0.7em><b><size=120%>SDK - Features</size></b></voffset><br><line-height=0.76em></line-height><br><line-height=0%><width=100><align=left>•</width></align><br></line-height><indent=20>Added 3 shader globals that can be accessed by any avatar or world shader:</indent><br><line-height=0.76em></line-height><br>    - <space=0.3em><mark=#0000003C>float _VRChatCameraMode</mark><space=0.3em>:<br>        - <space=0.3em><mark=#0000003C>0</font></mark><space=0.3em> - Rendering normally<br>        - <space=0.3em><mark=#0000003C>1</mark><space=0.3em> - Rendering in VR handheld camera<br>        - <space=0.3em><mark=#0000003C>2</mark><space=0.3em> - Rendering in Desktop handheld camera<br>        - <space=0.3em><mark=#0000003C>3</mark><space=0.3em> - Rendering for a screenshot<br>    - <space=0.3em><mark=#0000003C>float _VRChatMirrorMode</mark><space=0.3em>:<br>        - <space=0.3em><mark=#0000003C>0</mark><space=0.3em> - Rendering normally, not in a mirror<br>        - <space=0.3em><mark=#0000003C>1</mark><space=0.3em> - Rendering in a mirror viewed in VR<br>        - <space=0.3em><mark=#0000003C>2</mark><space=0.3em> - Rendering in a mirror viewed in desktop mode<br>    - <space=0.3em><mark=#0000003C>float3 _VRChatMirrorCameraPos</mark><space=0.3em> - World space position of mirror camera (eye independent, \"centered\" in VR)<br>"
          }
        ],
        "embeddedLinkData": [
          {
            "id": "patch-notes",
            "name": "Main Menu - Patch Notes",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/docs/latest-release"
            ]
          },
          {
            "id": "vrc-avatar-tools",
            "name": "VRCAvatarTools",
            "command": "OpenURL",
            "parameters": [
              "https://github.com/Thryrallo/VRCAvatarTools"
            ]
          },
          {
            "id": "launch-option",
            "name": "Launch Options",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/v2022.3.1/docs/launch-options"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "name": "Main Menu - Patch Notes",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/docs/latest-release"
            ]
          },
          {
            "name": "VRCAvatarTools",
            "command": "OpenURL",
            "parameters": [
              "https://github.com/Thryrallo/VRCAvatarTools"
            ]
          },
          {
            "name": "Launch Options",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/v2022.3.1/docs/launch-options"
            ]
          }
        ]
      }
    },
    "hash": "d50f617c171891a42009d9b974536df9",
    "createdAt": "2022-10-12T22:26:05+00:00",
    "updatedAt": "2022-10-13T00:26:57+00:00"
  },
  {
    "id": "release-avatar-dynamics",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "help-article",
      "user-all",
      "help-topic-news",
      "help-notifications"
    ],
    "data": {
      "name": "Avatar Dynamics",
      "imageUrl": "https://assets.vrchat.com/ips/assets/db47779b927fb761d62698a189ed44ebde80fe723efc97866fc3ec303fd541ca.png",
      "description": "Avatar Dynamics is now live!",
      "isNew": false,
      "article": {
        "sectionLinks": [
          "link-physbones",
          "link-triggers",
          "link-permissions",
          "link-debug",
          "link-dynamic-bone"
        ],
        "content": [
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/45c96d5a2cb5c4ac87512a480f2774733707659a1f95fca26b1d36eb43034d2d.png"
          },
          {
            "text": "<br><br>"
          },
          {
            "text": "It’s here – <link=avatar-dynamics-blog><color=#7777fc><u>Avatar Dynamics</u></color></link> is now live! This is one of our largest, and most hotly anticipated patches yet. There are a lot of changes (probably more than you were even expecting!) so let’s go through everything that this patch has to offer.<br><br>Avatar Dynamics contains a number of systems, each of which will provide both creators and non-creators with a ton of new features to play with.<br><br>Some of the biggest ones are:"
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-physbones",
            "title": "Introducing PhysBones",
            "imageUrl": "https://assets.vrchat.com/ips/assets/0b9d787ca7b58b7ed76ef5742620e6333ec8f44446d6c5dbf054c1bab7ae51a2.png"
          },
          {
            "text": "<br><br>"
          },
          {
            "text": "<size=140%><b>PhysBones</b></size><br><br>A free, direct and significantly more performant (we’re talking roughly a 12–20x improvement) replacement for DynamicBones in VRChat. Additionally, PhysBones allows touching, grabbing, and posing bones on your own avatar or on other people’s avatars!<br><br>PhysBones… on Quest: Yep! PhysBones aren’t just for PC – Quest users can now see them, too!"
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-triggers",
            "title": "Avatar Triggers",
            "text": "<size=140%><b>Avatar Triggers</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Triggers allow avatars to interact with themselves… or any other avatar! Grab your ears, give your friend a high-five, a pat on the head… or a slap in the face. Triggers work by detecting colliders on avatars. By default, all avatars will have standard colliders defined, such as the head or hands, but you’ll be able to set your own for specific interactions, if you’d like."
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-permissions",
            "title": "Controlling Permissions",
            "text": "<size=140%><b>Permissions System</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "You get to completely control how others interact with your avatar. If you wish to entirely opt out of the system, you can. If you want to make it so only friends can interact with your PhysBones, you can. Alternatively, if you want everyone to be able to play with your hair, or shake your hand, you have the power to do that, too.<br><br>We know that not everyone wants their avatar to be interactive, and ultimately, we want everyone to be as comfortable as possible."
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-debug",
            "title": "Debug View"
          },
          {
            "text": "<size=140%><b>Debug View</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "To make it simple to see what’s going on with your setup and uncover any problems, you can turn on a Debug View in your Action Menu that lets you see an overlay of PhysBones, Triggers, and Colliders. This view works in the editor as well as in VRChat!"
          },
          {
            "text": "<br><br>"
          },
          {
            "id": "link-dynamic-bone",
            "title": "Automatic Dynamic Bone Conversion"
          },
          {
            "text": "<size=140%><b>Automatic Dynamic Bone Conversion</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "We want to make the transition to PhysBones as easy as possible for creators. Anyone familiar with Dynamic Bones should be able to easily switch over, as we’ve tried to make the systems as intuitive as possible.<br><br>Likewise, while support for Dynamic Bones will be going away in the future, for now you’ll be able to upload avatars using either system to VRChat.<br><br>Users will be able to choose in their VRChat Settings if they wish to still load Dynamic Bones, or if they want them to be automatically converted to PhysBones. By default, this will be enabled – meaning that all bones will be loaded as PhysBones, regardless of what they were uploaded as."
          },
          {
            "text": "<br><br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/be003884ea0e3c7e2f36e22c6c980267e71a1751470a86559ccf340f14e625f3.png",
            "onPressed": {
              "command": "CannedWorldSearch",
              "parameters": [
                "avatar dynamics"
              ]
            }
          },
          {
            "text": "<br><br>"
          },
          {
            "text": "We know users have been <i>extremely</i> thrilled to get started with Avatar Dynamics. We have an internal, “When are Avatar Dynamics coming out?” counter and just trust us: <i>the number is very scary and haunts our dreams</i>. But no more! As of today, you’ll be able to see exactly what we’ve been working on – and we encourage you to give it a shot!<br><br>Between OSC, IK 2.0, and Avatar Dynamics, we’re well on our way to achieving some of our major goals for this year – but we’re not done yet. We've got much more in store and can't wait to share more as soon as we're ready.<br><br>In the meantime, we want to see what YOU are working on. Share what project you are working on with Avatar Dynamics and @VRChat on Twitter using the #AvatarDynamics hashtag!"
          }
        ],
        "embeddedLinkData": [
          {
            "id": "avatar-dynamics-blog",
            "name": "Avatar Dynamics Blog",
            "command": "OpenURL",
            "parameters": [
              "https://hello.vrchat.com/blog/avatar-dynamics-open-beta"
            ]
          },
          {
            "id": "avatar-dynamics-worlds",
            "name": "Avatar Dynamics Worlds",
            "command": "CannedWorldSearch",
            "parameters": [
              "avatar dynamics"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "name": "Avatar Dynamics Blog",
            "command": "OpenURL",
            "parameters": [
              "https://hello.vrchat.com/blog/avatar-dynamics-open-beta"
            ]
          },
          {
            "name": "Avatar Dynamics Worlds",
            "command": "CannedWorldSearch",
            "parameters": [
              "avatar dynamics"
            ]
          }
        ]
      }
    },
    "hash": "b4630a1bb99f62324941fb6f5b88225c",
    "createdAt": "2022-02-16T22:37:24+00:00",
    "updatedAt": "2022-09-08T22:22:17+00:00"
  },
  {
    "id": "help-article-hiring",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "help-article",
      "user-all",
      "help-topic-news",
      "help-notifications"
    ],
    "data": {
      "name": "We're Hiring",
      "imageUrl": "https://assets.vrchat.com/ips/assets/389813953bddd49251379878eaadde474afe579908ff26fb189b55adf065edb1.png",
      "description": "Discover open job positions at VRChat.",
      "article": {
        "content": [
          {
            "text": "<size=140%><b>We’re always looking for good people to join our team at VRChat!</b></size><br><br>We are one of the leading Virtual World platforms, hosting one of the largest active online communities of users and creators. Our community has created millions of pieces of content and spends many hours in-world in a given session.<br><br>You’re here right now – so you’ve probably seen some of it!<br><br>Countless friendships, groups and events have formed, and continue to grow daily.<br><br><b>VRChat is built by people like you</b> – folks that are passionate about the community and want to see it grow. Our goal is to spend the coming years building VRChat into one of the most successful community-driven social VR platforms in existence.<br><br>To do that, we need you!<br>"
          },
          {
            "text": "<size=140%><b>We’re looking for…</b></size><br><br><indent=5%>• People with passion for VR, Social and Virtual Worlds.<br><br>• Great communicators! This is key in any team, but we all work remotely. We’ve found that being an effective communicator is even more important when everyone’s remote.<br><br>• People that not only meet the job requirements, but people that have shown an ability to excel in a role or demonstrate passion and accomplishment with their own projects-- especially ones that are social, remote and collaborative.<br><br>• Folks who collaborate well. Everyone on the team is a contributor and we work together daily to pitch ideas and solve problems.<br><br>• Self-starters. We don’t have a large hierarchy of management. We structure our roadmap and project teams with the expectation of those individuals and teams to work toward their goals every day without too much oversight.<br><br>• Multi–talented applicants. VRChat is evolving and growing in an arena that is often defined by changes in hardware and software platforms or other industry trends. At times, we have to change directions quickly. This requires a degree of flexibility and everyone on the team pitches in to help with whatever they can when needed.<br>"
          },
          {
            "text": "While our hiring needs are always changing, right now we’re rapidly expanding and looking for new talent across a variety of positions, which is why you’re seeing this post!<br><br>To see a list of open positions, click <link=open-positions><color=#7777fc><u>[here]</u></color></link>.<br><br>For more information about hiring, VRChat as a company, and our incredible team benefits, click <link=careers><color=#7777fc><u>[here]</u></color></link>."
          }
        ],
        "embeddedLinkData": [
          {
            "id": "open-positions",
            "name": "Open Positions",
            "command": "OpenURL",
            "parameters": [
              "https://jobs.lever.co/vrchat"
            ]
          },
          {
            "id": "careers",
            "name": "VRChat Careers",
            "command": "OpenURL",
            "parameters": [
              "https://hello.vrchat.com/careers"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "name": "Open Positions",
            "command": "OpenURL",
            "parameters": [
              "https://jobs.lever.co/vrchat"
            ]
          },
          {
            "name": "VRChat Careers",
            "command": "OpenURL",
            "parameters": [
              "https://hello.vrchat.com/careers"
            ]
          }
        ]
      }
    },
    "hash": "25886df123940595ae8ccb0704578b42",
    "createdAt": "2022-04-06T00:11:34+00:00",
    "updatedAt": "2022-09-08T22:22:17+00:00"
  },
  {
    "id": "help-article-making-groups",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "help-article",
      "user-all",
      "help-topic-groups",
      "help-notifications"
    ],
    "data": {
      "name": "Making Groups",
      "imageUrl": "https://assets.vrchat.com/ips/assets/4c4e9e736d00a21298eafc613c05b06eade085fc295391133ef89827243ebb31.png",
      "description": "Making Groups!",
      "article": {
        "content": [
          {
            "text": "Looking to start your own community in VRChat? You can do so using Groups! Groups are an organizational system that can help you organize events, meet new people, and show off the things that you’re into.<br><br>Here’s how to make one."
          },
          {
            "text": "<br>"
          },
          {
            "id": "link-making-website",
            "title": "Making a Group Via the Website",
            "text": "<size=140%><b>Making a Group Via the Website</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/56aa8fb8fd0e4fc2ac581fc3130a293f65e1fc7f0f598ca31401b969042ea9d7.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "First, navigate to the VRChat website and sign in."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/490c9e5830b7752fe2eb04dfaa51cb5fb7ee408692411ba5c89ef6d7a499e238.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Once you’ve signed into the VRChat website, press the Groups button on the left navigation bar."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/2cdd34f5e21fe2f9a77606d223b007b4b6bc3ed37c116075aa1fe227436b1638.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Click the <color=#ffff01>+ Create Group</color> button."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/c186f6b68eadd44d7e70c1db48b0c7128ede6a9d154dc9600b3419d08b5d101b.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "First, you will be asked to name your <color=#ffff01>Group</color>. This is the primary name your Group will use everywhere, including the Group Finder."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/73f50427793cb7fc9d30e54472e1208c196eecc948856193a58d8f4de425223d.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "You will then be asked to make a <color=#ffff01>Short Code</color>. This contains a identifier (which you choose) and an discriminator (which is randomly generated for you). Your Short Code will be used to uniquely locate your <color=#ffff01>Group</color>, even if others share a similar name.<br><br>Your <color=#ffff01>Group</color> identifier must be 3-6 characters long."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/1317cd43072b37715d88682134a5b785bdb02c0281c3cd6f445f7fc4d65f7405.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Next, you will be asked to write a description of your group. This will appear on your Group’s profile page. Try to describe what it is your community does in VRChat!"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/bbeee8d6211b4edfcf971a59ee16389aee8ee0d02d3ee596f05f8d6906115a42.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "You will then have to pick how people can join your group:<br><br><indent=5%>• <color=#ffff01>Free Join</color>: Anyone can join your group.</indent><br><br><indent=5%>• <color=#ffff01>Request to Join</color>: New members have to seek permission to join.</indent><br><br><indent=5%>• <color=#ffff01>Invite-Only</color>: Members must be invited by Group members with the appropriate permissions in order to join.</indent><br><br>As a note, you can change this setting later."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/3708ac1c84be23b6944470686c698f980c9fedbbaaa2c0c1080a62357d252428.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Next, you’ll have to pick if you want your group to be <color=#ffff01>Public</color> or <color=#ffff01>Private</color>.<br><br>Members in <color=#ffff01>Public Groups</color> can advertise their <color=#ffff01>Group</color> on their profile, likewise, it will appear in search. Members in <color=#ffff01>Private Groups</color> cannot advertise their <color=#ffff01>Group</color> in their profile, and <color=#ffff01>Private Groups</color> will not appear in search.<br><br><b>This setting cannot be changed!</b>"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/44e35322eceb9957bd620040d8fb9c0be0cf608e67553c82c2c1f625427a283c.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "You will then be asked to select a role template.<br><br>Roles are, basically, permissions you can give members that allow them to do different sorts of things in your <color=#ffff01>Group</color>, like invite people, or moderate other members.<br><br>Picking a setting here will generate a set of roles for your <color=#ffff01>Group</color>. As a note, you can customize and create these yourself later – this is just to save you some time!"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/5e8e351faa783d7bd9e15490a6d798fadd4a99e0a68e02cf22652efb3bc81fb5.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "The next step will require you to select a banner for your <color=#ffff01>Group</color>! You can select one from your uploaded photos, or you can upload a new one."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/a52bfab03a34c4916318cc8cb93b2002947651c9b1b30f8457ed597131161b5d.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "The next step will require you to select a <color=#ffff01>Group Icon</color>! You can select one from your uploaded icons, or you can upload a new one."
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/d65d1256bc71862658d7fc2a9f841886f5a0dd9f59d1e368bddae01c762cfc21.png"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Finally, you’ll be shown a preview of how your group will appear.<br><br>If you like what you see, click the thumbs up and your <color=#ffff01>Group</color> will be created!"
          }
        ]
      }
    },
    "hash": "46b9579244bdc516ebd2c8c6ffb05ed9",
    "createdAt": "2022-11-16T01:04:45+00:00",
    "updatedAt": "2022-12-01T02:53:59+00:00"
  },
  {
    "id": "world-vket-summer-2023",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Vket2023 Summer",
      "tooltipDescription": "Virtual Market Summer 2023",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/bdc33c6b913f300441a2ffd083983a9b2883c63d0b105607759c27b0f8c5cf7e.png",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/5ca1729f96f8ad7796853f4128b2adbd186325e12cb4768fb4513dd66eac39b9.png",
      "contentList": {
        "name": "Vket2023 Summer",
        "sortHeading": "order",
        "sortOwnership": "any",
        "sortOrder": "ascending",
        "platform": "ThisPlatformSupported",
        "tag": "admin_vket_summer_2023",
        "bannersTag": "world-category-banner-event-vket-summer-2023"
      }
    },
    "hash": "16163cfaf487bb9fb11a6a34979c33fa",
    "createdAt": "2023-07-10T20:36:06+00:00",
    "updatedAt": "2023-07-15T00:58:04+00:00"
  },
  {
    "id": "world-banner---event-vket-summer-2023",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1000,
    "tags": [
      "world-category-banner-event-vket-summer-2023",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/0b7561a47e78053611a4eb37783dfe90c3253b3b7deeba58057a34a91841d049.png"
    },
    "hash": "e1697ad2591112c1651933a8988728b7",
    "createdAt": "2023-07-10T20:36:05+00:00",
    "updatedAt": "2023-07-15T00:58:04+00:00"
  },
  {
    "id": "world-banner---udon-getstarted",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1001,
    "tags": [
      "world-category-banner-udon",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/67eaf2a7abb8c9b0f23d62816ce46bf4b5b8ff241a823c1afd5fa0bb867fd74d.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://docs.vrchat.com/docs/what-is-udon"
        ]
      }
    },
    "hash": "73cdeefd80da1689b66f5f27eb45d24b",
    "createdAt": "2022-03-29T23:30:19+00:00",
    "updatedAt": "2022-09-08T22:22:48+00:00"
  },
  {
    "id": "search-anime",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1001,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Anime",
      "search": {
        "searchQuery": "anime",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "1fb3184dc186bb0ce297d5e942221ddb",
    "createdAt": "2020-09-11T20:32:27+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-news",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1001,
    "tags": [
      "help-topic",
      "help-topic-essentials",
      "user-all"
    ],
    "data": {
      "name": "News",
      "description": "VRChat News",
      "tooltipDescription": "Updates from the VRChat Team!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/53271ee0aeb78e81644606859c6c488b6edd413ce81a27ae14a5687ef1fc9bee.png",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/07368d729a2364534e3cca9f798fc1dbd7ba682fdfd84ba17899a875077c2dfe.png",
      "imageUrl": "https://assets.vrchat.com/ips/assets/e2bd2b300202430d602e499ff5e7da04f97c7e8a5b737e1ddb137a71b12d8cfe.png",
      "ipsQuery": {
        "require": "help-topic-news",
        "include": ""
      }
    },
    "hash": "e308fdfca8f2d34e33d65e21353eb15e",
    "createdAt": "2022-04-01T21:32:09+00:00",
    "updatedAt": "2022-09-08T22:22:43+00:00"
  },
  {
    "id": "avatar-public",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1001,
    "tags": [
      "avatar-category",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/557b110b75151d4446a90a058d9509616af73b1e6377bc969b083d5f968fc122.png",
      "contentList": {
        "name": "Public",
        "type": "avatar",
        "sortHeading": "order",
        "sortOwnership": "public",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported"
      }
    },
    "hash": "17c9d7f37cc9d689038e7aaed88db6c3",
    "createdAt": "2020-06-05T08:23:29+00:00",
    "updatedAt": "2022-09-17T06:11:00+00:00"
  },
  {
    "id": "search-hangout",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1002,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Hangout",
      "search": {
        "searchQuery": "hangout",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a2edbb7f8d9dffe5be61f0b76a711eaa",
    "createdAt": "2020-09-12T05:20:17+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-essentials",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1002,
    "tags": [
      "help-topic",
      "user-all",
      "help-topic-explore-wing"
    ],
    "data": {
      "name": "Essentials",
      "description": "VRChat Features",
      "tooltipDescription": "New to VRChat? Start here for info on VRChat features!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/69408993d8c3f1c64b987a27bd320b59a1deeb07e0fbee9affca977723f691d0.png",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/d551286885968aff4908cc466d1ead82873df90f231bb953497b967c64b9190a.png",
      "imageUrl": "https://assets.vrchat.com/ips/assets/5b2ca11a23e1a9f64a66ef9ed2a56334ee910c5f52f290b06ebae0432a19a2ef.png",
      "isNew": true,
      "ipsQuery": {
        "require": "help-topic-essentials",
        "include": ""
      }
    },
    "hash": "ecee56f5ba3fdbbd0bbc1ecb718cabb0",
    "createdAt": "2022-04-08T12:49:59+00:00",
    "updatedAt": "2022-09-08T22:22:44+00:00"
  },
  {
    "id": "help-article-explore-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1002,
    "tags": [
      "help-article",
      "user-all",
      "help-quick-menu",
      "help-topic-general"
    ],
    "data": {
      "name": "Explore New Worlds!",
      "imageUrl": "https://assets.vrchat.com/ips/assets/e9981f18065936624266c1bcd5f01656c18c8252d3aefbbd86f2e0e5bb4d2ea9.png",
      "description": "Explore New Worlds!",
      "article": {
        "content": [
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/867903339ca3f12b821cbd6b1881e0cbf69a7acf0d6d8a3c07746b7dfbf8c3aa.png"
          },
          {
            "text": "There are thousands of worlds in VRChat, including worlds for hanging out, playing games, listening to music, and seeing beautiful art."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/dad7a9f3f331efed40bdff0c24ace70a44338b273649059b7cb482514d3b4a6c.png"
          },
          {
            "text": "To browse worlds use the [worlds page]."
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/867903339ca3f12b821cbd6b1881e0cbf69a7acf0d6d8a3c07746b7dfbf8c3aa.png"
          },
          {
            "text": "To search for a specific world use the [world search page]."
          }
        ]
      }
    },
    "hash": "26b0195ee82491a57da06d45c187e1bb",
    "createdAt": "2020-10-07T07:56:47+00:00",
    "updatedAt": "2022-09-08T22:22:37+00:00"
  },
  {
    "id": "avatar-legacy",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1002,
    "tags": [
      "avatar-category",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/87290480ef855277840044dee452336bc461907a220813a34c54b8cbd7f29b54.png",
      "contentList": {
        "name": "Legacy",
        "type": "avatar",
        "sortHeading": "order",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "tag": "admin_featured_legacy"
      }
    },
    "hash": "7dcb2de0effedc3ed4e3c5fd063e6af5",
    "createdAt": "2020-06-05T08:23:28+00:00",
    "updatedAt": "2023-04-25T21:15:04+00:00"
  },
  {
    "id": "search-music-visualizer",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1003,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Music Visualizer",
      "search": {
        "searchQuery": "music visualizer",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "094e888b05442b5397e920ea7fed873d",
    "createdAt": "2020-09-12T05:20:17+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-safety",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1003,
    "tags": [
      "help-topic",
      "help-topic-essentials",
      "user-all",
      "help-topic-explore-wing"
    ],
    "data": {
      "name": "Safety",
      "description": "VRChat Safety System",
      "tooltipDescription": "Learn about VRChat's Safety System.",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/c165e3e819c42ace7a955206fa35c7af96de2ec2215ac3638aeb0b3c08238011.png",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/fb74bd503a79b7cc63c635d6d11f6594ad01225d17c1d4c6bac3e7049add674a.png",
      "imageUrl": "https://assets.vrchat.com/ips/assets/d2fb62edac57a6e4a4a44fe04cf54a199a33778932bbc0a7e0d6a0eafa6150df.png",
      "ipsQuery": {
        "require": "help-topic-safety",
        "include": ""
      }
    },
    "hash": "3165ad70a501b38bd74841bd8a486127",
    "createdAt": "2022-04-04T21:21:09+00:00",
    "updatedAt": "2022-11-04T04:44:12+00:00"
  },
  {
    "id": "help-article-custom-emoji",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1003,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-vrcplus",
      "help-notifications"
    ],
    "data": {
      "name": "Custom Emoji",
      "imageUrl": "https://assets.vrchat.com/ips/assets/b4e55695212325828c0166533f5f3497f99287a093b41b308c44530614fc4d9a.png",
      "description": "Custom Emoji",
      "article": {
        "sectionLinks": [
          "link-create-app",
          "link-create-web",
          "link-vrchat-plus"
        ],
        "content": [
          {
            "id": "link-create-app",
            "title": "Create in App",
            "text": "<size=140%><b>Create in App!</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/e6cab37917b0eacb7d3e07f4b1dc3361c79f16eaa02128f4a6d8f0cf25e27cc1.png"
          },
          {
            "text": "<br>"
          },
          {
            "id": "link-create-web",
            "title": "Create on the Web",
            "text": "<size=140%><b>Create on the Web!</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/b89808619f3e1d4cbb5d2495a7568840d996601e5c917f81e9cc5e40399bcca3.png"
          },
          {
            "text": "<br>"
          },
          {
            "id": "link-vrchat-plus",
            "title": "Get VRChat Plus",
            "text": "<size=140%><b>Get VRChat Plus!:</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "imageUrl": "https://assets.vrchat.com/ips/assets/6157a3a503ff0130e045f5ffb0bea528838e66d0bdf1e0698a9ba0abd2360c43.png"
          }
        ]
      }
    },
    "hash": "0c58be1b05a29689a4d941d1394d0625",
    "createdAt": "2023-06-29T22:22:18+00:00",
    "updatedAt": "2023-06-29T22:55:38+00:00"
  },
  {
    "id": "help-article-vrchat-community",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1003,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-essentials",
      "help-topic-explore-wing",
      "help-notifications"
    ],
    "data": {
      "name": "The VRChat Community",
      "imageUrl": "https://assets.vrchat.com/ips/assets/f3592e61f7caf348f524c02199800818a14473e5d4d8961c72ab4d4406720744.png",
      "description": "The VRChat Community",
      "article": {
        "jumpLinks": [
          "discord",
          "twitter"
        ],
        "content": [
          {
            "text": "<size=140%><b>Welcome to VRChat!</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "Looking to explore the VRChat community and find a digital home of your own?<br><br>For starters, try checking out our <link=discord><color=#7777fc><u>Discord</u></color></link>! You’ll also be able to find information there about all the latest VRChat updates.<br><br>Likewise, if you want to stay up-to-date on what’s going on in VRChat, you should follow our <link=twitter><color=#7777fc><u>Twitter</u></color></link> account.<br><br>Additionally, you can join the <link=facebook><color=#7777fc><u>VRChat Facebook Group</u></color></link> to interact with others from the community.<br><br>Another way to get help and interact with the community is via our <link=ask-forums><color=#7777fc><u>VRChat Ask Forums</u></color></link>! You can find official messaging there along with information on world and avatar creation.<br><br>While using VRChat if you would like to share any feedback please head over to our <link=feedback><color=#7777fc><u>VRChat Feedback Boards</u></color></link> page to do so.<br><br>We use Crowdin to allow <b>you</b> to provide localization suggestions. Learn more at our <link=crowdin-doc><color=#7777fc><u>Crowdin Documentation</u></color></link> page."
          }
        ],
        "embeddedLinkData": [
          {
            "id": "discord",
            "name": "Discord",
            "command": "OpenURL",
            "parameters": [
              "https://discord.gg/vrchat"
            ]
          },
          {
            "id": "twitter",
            "name": "Twitter",
            "command": "OpenURL",
            "parameters": [
              "https://twitter.com/vrchat"
            ]
          },
          {
            "id": "facebook",
            "name": "Facebook",
            "command": "OpenURL",
            "parameters": [
              "https://www.facebook.com/groups/vrchat"
            ]
          },
          {
            "id": "ask-forums",
            "name": "VRChat Ask Forums",
            "command": "OpenURL",
            "parameters": [
              "https://ask.vrchat.com/"
            ]
          },
          {
            "id": "feedback",
            "name": "VRChat Feedback Board",
            "command": "OpenURL",
            "parameters": [
              "https://feedback.vrchat.com/feature-requests"
            ]
          },
          {
            "id": "crowdin-doc",
            "name": "Crowdin Docs",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/docs/suggesting-localization-changes"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "name": "Discord",
            "command": "OpenURL",
            "parameters": [
              "https://discord.gg/vrchat"
            ]
          },
          {
            "name": "Twitter",
            "command": "OpenURL",
            "parameters": [
              "https://twitter.com/vrchat"
            ]
          },
          {
            "name": "Facebook",
            "command": "OpenURL",
            "parameters": [
              "https://www.facebook.com/groups/vrchat"
            ]
          },
          {
            "name": "VRChat Ask Forums",
            "command": "OpenURL",
            "parameters": [
              "https://ask.vrchat.com/"
            ]
          },
          {
            "name": "VRChat Feedback Board",
            "command": "OpenURL",
            "parameters": [
              "https://feedback.vrchat.com/feature-requests"
            ]
          },
          {
            "name": "Crowdin Docs",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/docs/suggesting-localization-changes"
            ]
          }
        ]
      }
    },
    "hash": "023ba10aa8ab67f1e9b836002505cd2e",
    "createdAt": "2023-06-28T19:14:32+00:00",
    "updatedAt": "2023-06-28T19:14:32+00:00"
  },
  {
    "id": "help-article-vrchat-crowdin",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1003,
    "tags": [
      "user-all",
      "help-article",
      "help-topic-essentials",
      "help-notifications"
    ],
    "data": {
      "name": "Crowdin",
      "imageUrl": "https://assets.vrchat.com/ips/assets/d0d9d3da237a1903f8a0ac7ea7fe066b810ae525a1f695b7833174b945ed615f.png",
      "description": "Crowdin",
      "article": {
        "content": [
          {
            "text": "<size=140%><b>Help us localize VRChat!</b></size>"
          },
          {
            "text": "<br>"
          },
          {
            "text": "VRChat has translations for some languages but has yet to be completely localized! That means we need some help with grammar, terminology, and using the right phrases that sound natural for the given language.<br><br><b>You can contribute!</b> We use Crowdin to allow <b>you</b> to provide localization suggestions. Use the links below to learn how to help out.<br><br><link=crowdin-doc><color=#7777fc><u>Crowdin Documentation</u></color></link><br><link=crowdin-signup><color=#7777fc><u>Crowdin Signup</u></color></link>"
          }
        ],
        "embeddedLinkData": [
          {
            "id": "crowdin-doc",
            "name": "Crowdin Doc",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/docs/suggesting-localization-changes"
            ]
          },
          {
            "id": "crowdin-signup",
            "name": "Crowdin Signup",
            "command": "OpenURL",
            "parameters": [
              "https://crowdin.com/project/vrchat-application/invite?h=bb57b789a39c353c3c401047afa228c41657827"
            ]
          }
        ],
        "moreInfoLinks": [
          {
            "name": "Crowdin Documentation",
            "command": "OpenURL",
            "parameters": [
              "https://docs.vrchat.com/docs/suggesting-localization-changes"
            ]
          },
          {
            "name": "Crowdin Signup",
            "command": "OpenURL",
            "parameters": [
              "https://crowdin.com/project/vrchat-application/invite?h=bb57b789a39c353c3c401047afa228c41657827"
            ]
          }
        ]
      }
    },
    "hash": "5b1285f27d6f81555718a7dfaae25a71",
    "createdAt": "2023-06-12T22:36:51+00:00",
    "updatedAt": "2023-07-10T20:36:20+00:00"
  },
  {
    "id": "avatar-achievement",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1003,
    "tags": [
      "avatar-category",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/1c08e2644fb6592a9f6fded8e6c5622c23a7b6e64798ae0355ab1a7b05a825f5.png",
      "contentList": {
        "type": "avatar",
        "name": "Achievement",
        "sortHeading": "none",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "any",
        "tag": "author_tag_achievement"
      }
    },
    "hash": "2a8e4ae3322cfaaf24b7a32d8cbb3390",
    "createdAt": "2020-06-05T08:23:28+00:00",
    "updatedAt": "2022-09-17T06:11:00+00:00"
  },
  {
    "id": "search-shooter",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1004,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Shooter",
      "imageUrl": "https://assets.vrchat.com/ips/assets/de1e566fd020f0cacd6f012e829ef914e5d9c8e49404b68193a4092569b62f9b.png",
      "search": {
        "searchQuery": "shooter",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "2543dc8937ee8a0b39c64f1bcb5c169a",
    "createdAt": "2020-09-12T05:20:18+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-groups",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1004,
    "tags": [
      "help-topic",
      "help-topic-essentials",
      "user-all"
    ],
    "data": {
      "name": "Groups",
      "description": "VRChat Groups",
      "tooltipDescription": "Discover VRChat Groups!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/1e5ff00b91329c824984c5b9cf806e040647d665078cfdb49cbc5a9bc6a1425e.png",
      "imageUrl": "https://assets.vrchat.com/ips/assets/da7150b96b7e12b338e4a669d6edc4e4a9301449b172027251d8cec11d07eafa.png",
      "ipsQuery": {
        "require": "help-topic-groups",
        "include": ""
      }
    },
    "hash": "777b2099807b94a74d4d5002084a3096",
    "createdAt": "2022-11-16T00:38:22+00:00",
    "updatedAt": "2022-12-01T02:54:36+00:00"
  },
  {
    "id": "search-sleep",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1005,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Sleep",
      "search": {
        "searchQuery": "sleep",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "430bf8946f83358c94a1a7e3c7a50922",
    "createdAt": "2020-09-12T05:20:18+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-vrchat",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1006,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Worlds by VRChat",
      "search": {
        "searchQuery": "vrchat",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "author",
        "sortBy": "exact"
      }
    },
    "hash": "1767393aa3e53837a177d298a31a1027",
    "createdAt": "2022-01-28T06:09:08+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1006,
    "tags": [
      "help-topic",
      "user-all"
    ],
    "data": {
      "name": "Worlds",
      "description": "VRChat Worlds",
      "tooltipDescription": "Discover new VRChat Worlds!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/0dc2d4aafa414fa0cf8eafd51c1fcf5ada9c7c5cfb646f634ee2b0c4ab89302f.png",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/a4c0162219282d08c967add1ddb7cc9ada84274262dc39899cb9a26d5f9790f5.png",
      "ipsQuery": {
        "require": "help-topic-worlds",
        "include": ""
      }
    },
    "hash": "5f698c5e5bcb251a7e0e99c391d2edc8",
    "createdAt": "2022-03-11T00:25:55+00:00",
    "updatedAt": "2022-09-08T22:22:44+00:00"
  },
  {
    "id": "search-horror",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1007,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Horror",
      "search": {
        "searchQuery": "horror",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "8780067e37c2f130a224d035f018d708",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-roleplay",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1008,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Roleplay",
      "search": {
        "searchQuery": "roleplay",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "4fbc147fd6667b6e7991387ebce23709",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-karaoke",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1009,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Karaoke",
      "search": {
        "searchQuery": "karaoke",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "35b9e3c3dd08ecea03a2de96b729d821",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-support",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1009,
    "tags": [
      "help-topic",
      "user-all"
    ],
    "data": {
      "name": "Support",
      "description": "VRChat Support",
      "tooltipDescription": "General info about VRChat features.",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/f00f52a0f2fb1905ac2a498ab9eaedd484665151ba756183ab4676012f2895d7.png",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/ff8966f5d5d252c9c8e1192d8d6883a5679ca19bac060f69fa74e2a7a68ff5e0.png",
      "ipsQuery": {
        "require": "help-topic-support",
        "include": ""
      }
    },
    "hash": "c11fb5120076b516e58d067c5a36da44",
    "createdAt": "2022-03-11T00:25:55+00:00",
    "updatedAt": "2022-09-08T22:22:43+00:00"
  },
  {
    "id": "world-trending",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1010,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Trending",
      "tooltipDescription": "Browse trending worlds",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/5568aa5059b72048ec0560b0eb68822c5ea338e5235637c36a3273f1081176ef.png",
      "contentList": {
        "name": "Hot",
        "sortHeading": "heat",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "bannersTag": "world-category-banner-trending"
      }
    },
    "hash": "ca108a26eb2ccb1fe08c1b5326123d40",
    "createdAt": "2022-03-30T01:07:23+00:00",
    "updatedAt": "2022-09-22T17:28:10+00:00"
  },
  {
    "id": "search-language-learning",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1010,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Language Learning",
      "search": {
        "searchQuery": "language-learning",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "467915cb2f8a27501186f88f19667cef",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "launch-werehiring",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1010,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/a3c908711710358c37d6195a3e51f62b6b3c68f61e63d76529464ccdf23e618f.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://hello.vrchat.com/careers"
        ]
      }
    },
    "hash": "0b26b848e9fb36bb73bff90ca114d482",
    "createdAt": "2021-09-13T20:50:42+00:00",
    "updatedAt": "2022-09-08T21:59:19+00:00"
  },
  {
    "id": "help-topic-vrcplus",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1010,
    "tags": [
      "help-topic",
      "user-all"
    ],
    "data": {
      "name": "VRC+",
      "description": "VRC+",
      "tooltipDescription": "Subscribe to VRChat+ today and enjoy all of these exclusive features!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/bcfabc013e81d970fd4f6ab4773bbc181e896371923504dd3d7b244c26eaf9d6.png",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/7d6d6f993d10df181f842a5de8c1918075790621c3b91181efcc45b82f839bd6.png",
      "ipsQuery": {
        "require": "help-topic-vrcplus",
        "include": ""
      }
    },
    "hash": "28bb515d3d3a7b4dd3139857dd8354f7",
    "createdAt": "2022-10-06T19:54:48+00:00",
    "updatedAt": "2023-04-25T18:52:15+00:00"
  },
  {
    "id": "avatar-worlds-hot",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1010,
    "tags": [
      "avatar-category",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/93da757a22b64b5f5cf57320097e4cf60d300b94328559d5b88ad427f01d3444.png",
      "contentList": {
        "name": "Avatar Worlds (What's Hot)",
        "type": "world",
        "sortHeading": "heat",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "tag": "author_tag_avatar"
      }
    },
    "hash": "3839b14432016f9a2dc9f843f8658407",
    "createdAt": "2020-06-05T08:23:29+00:00",
    "updatedAt": "2022-09-17T06:11:01+00:00"
  },
  {
    "id": "search-museums",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1011,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Museums",
      "search": {
        "searchQuery": "museums",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "1c5484b98476d27130b4774d18955b7b",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "help-topic-settings",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1011,
    "tags": [
      "help-topic",
      "user-all"
    ],
    "data": {
      "name": "Settings",
      "description": "VRChat Settings",
      "tooltipDescription": "Information on VRChat settings.",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/195be68b573ae24e1ec0ac7c9f51e4535e4f18a1f9b274ea957dec222eb929dc.png",
      "thumbnailImageUrl": "https://assets.vrchat.com/ips/assets/b45eac50742f7a8c72cd5dc86b88fcbb5a28313f4ccf417e1a508cdc0282b388.png",
      "ipsQuery": {
        "require": "help-topic-settings",
        "include": ""
      }
    },
    "hash": "7c6f8f0a76536b2e7ee003fba6e62ba6",
    "createdAt": "2022-04-07T23:44:31+00:00",
    "updatedAt": "2022-09-08T22:22:43+00:00"
  },
  {
    "id": "search-space",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1012,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Space",
      "search": {
        "searchQuery": "space",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "93b09fffa8bd721308d8d0875f013e59",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "avatar-worlds-random",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1012,
    "tags": [
      "avatar-category",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/c69d81319a3b31166d925021be84813e99cf9de4dd2006c8493782400e0eac1f.png",
      "contentList": {
        "name": "Avatar Worlds (Random)",
        "type": "world",
        "sortHeading": "shuffle",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "tag": "author_tag_avatar"
      }
    },
    "hash": "e2171e504895c19a860a9911e9b2f464",
    "createdAt": "2020-06-05T08:23:29+00:00",
    "updatedAt": "2022-09-17T06:11:01+00:00"
  },
  {
    "id": "search-hide-seek",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1013,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Hide and Seek",
      "search": {
        "searchQuery": "hide and seek",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "0f0c1b9c4430111ad7eb50ab07f64459",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-furry",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1014,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Furry",
      "search": {
        "searchQuery": "furry",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "e5420db49ef5d42be885effcae0aa8e4",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-mirrors",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1015,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Mirrors",
      "search": {
        "searchQuery": "mirrors",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a9fe87aa4b7de9860ef995f62baee359",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-camping",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1016,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Camping",
      "search": {
        "searchQuery": "camping",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "bab19b02bbac20c2c66ed45fa2fa8765",
    "createdAt": "2022-04-08T17:43:40+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-bar",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1017,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Bar",
      "search": {
        "searchQuery": "bar",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "2c24620d3d056d55b7f48c5028e5b284",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-climbing",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1018,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Climbing",
      "search": {
        "searchQuery": "climbing",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "e164ad2ac8cca9ad282bc48c043e50ce",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-trippy",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1019,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Trippy",
      "search": {
        "searchQuery": "trippy",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "20ad2d607a214dde43933a0d43321ad4",
    "createdAt": "2022-04-08T17:56:27+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-spotlight-pc",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1020,
    "tags": [
      "world-category",
      "user-all"
    ],
    "requireClientTags": [
      "platform-pc"
    ],
    "data": {
      "name": "Spotlight - PC",
      "tooltipDescription": "Browse top PC worlds from the community!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/04467dd5e224b017a553dee3d23566ea35d6fa131bb95146a22c7d1fe6dcb53b.png",
      "contentList": {
        "name": "Spotlight PC",
        "sortHeading": "random",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformOnly",
        "tag": "admin_spotlight_pc",
        "bannersTag": "world-category-banner-spotlight"
      }
    },
    "hash": "2fca351a01f05d92053ac5ed3c9ad492",
    "createdAt": "2022-06-24T23:34:50+00:00",
    "updatedAt": "2023-01-28T02:43:41+00:00"
  },
  {
    "id": "search-driving",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1020,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Driving",
      "search": {
        "searchQuery": "driving",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "fe33deeb9dccc3f13827041bf87ac5a6",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-restaurant",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1021,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Restaurant",
      "search": {
        "searchQuery": "restaurant",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a76d7646b7976d86380cbb4ddf8cf1db",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-relaxing",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1022,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Relaxing",
      "search": {
        "searchQuery": "relaxing",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "f88b3a281ccb8deef8010a8baf400cda",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-fantasy",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1023,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Fantasy",
      "search": {
        "searchQuery": "fantasy",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "b1479913ff9853f8424c73cadfcba59a",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-cyberpunk",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1024,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Cyberpunk",
      "search": {
        "searchQuery": "cyberpunk",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "2f5e833ae6d7723d4b6aa308f8502e39",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-forest",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1025,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Forest",
      "search": {
        "searchQuery": "forest",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "8f1663ae851ebd565d6c625635df5933",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-winter",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1026,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Winter",
      "search": {
        "searchQuery": "winter",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "3020d95c1cc5cac8141a0500513c666d",
    "createdAt": "2022-04-08T17:56:27+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-summer",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1027,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Summer",
      "search": {
        "searchQuery": "summer",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "2f5e189cd3752d2b2e46077de7a25b9d",
    "createdAt": "2022-04-08T17:56:27+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-social",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1028,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Social",
      "search": {
        "searchQuery": "social",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "59a693fbfa59ed43c2dc5262128d1017",
    "createdAt": "2022-04-08T17:56:27+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-arcade-games",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1029,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Arcade Games",
      "search": {
        "searchQuery": "arcade games",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "f3658795e18bd70879f3ccf259355c3c",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-spotlight-crossplatform",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1030,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Spotlight - Cross Platform",
      "shortName": "Spotlight X Plat",
      "tooltipDescription": "Browse top cross-platform worlds from the community!",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/04467dd5e224b017a553dee3d23566ea35d6fa131bb95146a22c7d1fe6dcb53b.png",
      "contentList": {
        "name": "Spotlight Cross Platform",
        "shortName": "Spotlight X Plat",
        "sortHeading": "random",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "tag": "admin_spotlight_xplat",
        "bannersTag": "world-category-banner-spotlight-xplat"
      }
    },
    "hash": "ce6553e5bc10ae2ee3ad58c6d3237585",
    "createdAt": "2022-06-24T23:34:50+00:00",
    "updatedAt": "2023-01-28T02:43:42+00:00"
  },
  {
    "id": "search-cool-shaders",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1030,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Cool Shaders",
      "search": {
        "searchQuery": "cool shaders",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "f17746ff1970c0dabdee7963dca9ae87",
    "createdAt": "2022-04-08T17:56:26+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "launch-feedback",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1030,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/c9bb5ca0943d090263c4f6bf7b25191a0330f34e6a0bf53cf742ea587a319048.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://feedback.vrchat.com/"
        ]
      }
    },
    "hash": "40bb78d38b74c200c113db3a13b65663",
    "createdAt": "2021-11-08T22:45:26+00:00",
    "updatedAt": "2022-09-08T21:59:18+00:00"
  },
  {
    "id": "search-board-games",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1031,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Board Games",
      "search": {
        "searchQuery": "board games",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "ff807408c7cf7eb2e6eb50e2cc815f7e",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-flight-sim",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1032,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Flight Sim",
      "search": {
        "searchQuery": "flight sim",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "61232409074f8b8bc6a8b155f986ccae",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-sports",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1033,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Sports",
      "search": {
        "searchQuery": "sports",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "717fe8a8cb323d0224b4defea812a35b",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-clubs",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1034,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Clubs",
      "search": {
        "searchQuery": "clubs",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "25320178e500370ac9b94cbc2d9750b2",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-music-creation",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1035,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Music Creation",
      "search": {
        "searchQuery": "music creation",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "b78cb3b7c6e0cc07be9d5cb171f3e94b",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-pure-vibes",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1036,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Pure Vibes",
      "search": {
        "searchQuery": "pure vibes",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "97247f48d4d5cd9719c859796a8fd188",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-cheerful",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1037,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Cheerful",
      "search": {
        "searchQuery": "cheerful",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "86ff894edfa27a189e008728be0e3c54",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-train",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1038,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Train",
      "search": {
        "searchQuery": "train",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "27f411c5d1dee80e6d27a36c2c59b7fd",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-world-jam",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1039,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "World Jam",
      "search": {
        "searchQuery": "world jam",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "6ae17acd1953f0117aca040c9f179f87",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-new",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1040,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "New",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/e5a352ccf894dd8a30001611e525caeaf3ec7710444610703549fb306f542400.png",
      "tooltipDescription": "Browse new worlds",
      "contentList": {
        "name": "New",
        "sortHeading": "publication",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "bannersTag": "world-category-banner-new-worlds"
      }
    },
    "hash": "7249fb81006f429dd5dc1179676ad403",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-09-22T17:28:09+00:00"
  },
  {
    "id": "search-city",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1040,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "City",
      "search": {
        "searchQuery": "city",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "4f273dd57c40ba4f7152a77c4a0f9ab0",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "LAUNCH---SDK",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1040,
    "tags": [
      "quick-menu-banner",
      "user-all"
    ],
    "data": {
      "imageUrl": "https://assets.vrchat.com/ips/assets/66de2dfb2320e6f50a2da082441b91ae4d07276b2e928528c04a00cc3b37bb0a.png",
      "onPressed": {
        "command": "OpenURL",
        "parameters": [
          "https://docs.vrchat.com/docs/creating-your-first-avatar"
        ]
      }
    },
    "hash": "694658dd6240d61f469ce6defe398290",
    "createdAt": "2021-06-08T20:24:53+00:00",
    "updatedAt": "2022-09-08T21:59:19+00:00"
  },
  {
    "id": "search-post-apocalyptic",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1041,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Post Apocalyptic",
      "search": {
        "searchQuery": "post apocalyptic",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "1ecc8029a5d5ba165716fcb58612d324",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-psychedelic",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1042,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Psychedelic",
      "search": {
        "searchQuery": "psychedelic",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "4663d5dec89c8310004d4c0a4ff162e4",
    "createdAt": "2022-04-13T20:34:59+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-beautiful-landscapes",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1043,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Beautiful Landscapes",
      "search": {
        "searchQuery": "beautiful landscapes",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "b3117b408ae7e9de4105187071f67eaa",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-cafe",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1044,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Cafe",
      "search": {
        "searchQuery": "cafe",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "fb61254e01318d2da1977802b699ba9b",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-nostalgia",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1045,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Nostalgia",
      "search": {
        "searchQuery": "nostalgia",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "62174b0e9f11530000ffb53fd23a0e69",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-chaotic-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1046,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Chaotic Worlds",
      "search": {
        "searchQuery": "chaotic-worlds",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "9ff07f738717087392e7fdaeb646713a",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-adventures",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1047,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Adventures",
      "search": {
        "searchQuery": "adventures",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "03d229ce68b59402e08a56fce3275de8",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-avatar-hunt",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1048,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Avatar Hunt",
      "search": {
        "searchQuery": "avatar hunt",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "4b683aab9992c2acc995dfabd9ad5426",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-desert",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1049,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Desert",
      "search": {
        "searchQuery": "desert",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "8f6e4bb21895728d2d271fe04b5649d3",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-community-labs",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1050,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Community Labs",
      "tooltipDescription": "Browse worlds newly created by the community",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/7846fda184f0ee4686558903b87823890351cac53a501b95f848b46b227294b1.png",
      "contentList": {
        "name": "Community Labs",
        "sortHeading": "labs",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "bannersTag": "world-category-banner-labs"
      }
    },
    "hash": "c89f28c7f1f2b9e1014dd6f97666ed8e",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-09-22T17:28:09+00:00"
  },
  {
    "id": "search-beach",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1050,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Beach",
      "search": {
        "searchQuery": "beach",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "2c63ef310b648321729c6532d9fc38bc",
    "createdAt": "2022-04-08T18:07:24+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-neon-dream",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1051,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Neon Dream",
      "search": {
        "searchQuery": "neon dream",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "aec64c1eab83a3c10f7d66e69cb31d05",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-meditation",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1052,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Meditation",
      "search": {
        "searchQuery": "meditation",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "d0c46498326918b1f33ce0a1fc3d5c1d",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-particle-lightshow",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1053,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Particle Lightshow",
      "search": {
        "searchQuery": "particle lightshow",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "1bb1a711b098695151ee8712df586760",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-japanese",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1054,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Japanese",
      "search": {
        "searchQuery": "japanese",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "ab29815b10fe1ae548f4228af8764855",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-russian",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1055,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Russian",
      "search": {
        "searchQuery": "russian",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "b14832c452dab752f2dd90c688818089",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-german",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1056,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "German",
      "search": {
        "searchQuery": "german",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "9f2d1eb9f3ebc485387bd48582296c70",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-french",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1057,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "French",
      "search": {
        "searchQuery": "french",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "38d5c2d92c3b4a10f5c396b5b6d0bd42",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-dutch",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1058,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Dutch",
      "search": {
        "searchQuery": "dutch",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "5e9bc94edd6d7613cb6221e7fef8dfcb",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-portuguese",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1059,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Portuguese",
      "search": {
        "searchQuery": "portuguese",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "43ac11deddf694806c9e7ee0305147a2",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-random",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1060,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Random",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/0b0ca87fa01cdfce085a9f1080336e2d819717dd98bf10405a3a76a346b79629.png",
      "tooltipDescription": "Browse random worlds",
      "contentList": {
        "name": "Random",
        "sortHeading": "shuffle",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "bannersTag": "world-category-banner-random"
      }
    },
    "hash": "02fee032a4e35fd416534ca154a3f4a0",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-09-22T17:28:09+00:00"
  },
  {
    "id": "search-korean",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1060,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Korean",
      "search": {
        "searchQuery": "korean",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "49652e9022fe839bf8f55c2942625916",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-italian",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1061,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Italian",
      "search": {
        "searchQuery": "italian",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "f377b67755e228688d52596564c7ff1c",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-arabic",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1062,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Arabic",
      "search": {
        "searchQuery": "arabic",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "5ca1f4f78975da1eafaf1eca4c83d4e6",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-chinese",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1063,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Chinese",
      "search": {
        "searchQuery": "chinese",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a153920b31ac206cd462d49ec755654d",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-chatting",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1064,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Chatting",
      "search": {
        "searchQuery": "chatting",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "e499fd16c0663eb646034799f3e5f19d",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-experimental",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1065,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Experimental",
      "search": {
        "searchQuery": "experimental",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "623749aeb6de8e1d6d86154d8c6522de",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-movies",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1066,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Movies",
      "search": {
        "searchQuery": "movies",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "7f916dcbb9dd9a04446f3bf9a9f77e2d",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-performance",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1067,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Performance",
      "search": {
        "searchQuery": "performance",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "424b5c559c30861f07a3283bfe6a7c40",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-drinking",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1068,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Drinking",
      "search": {
        "searchQuery": "drinking",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "8a7b3fa6480671d6491868dadbb33d27",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-high-fps",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1069,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "High FPS",
      "search": {
        "searchQuery": "high fps",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "669e4f90da8814d3b879d095ca25a77c",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-apartment",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1069,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Apartment",
      "search": {
        "searchQuery": "apartment",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "ef7c66119f306be844eda369894fac14",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-updated-recently",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1070,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Updated Recently",
      "tooltipDescription": "Browse recently updated worlds",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/06737a66fb6de284125da130c1866ec729d7bbd9b8cdfdafee2b23840b153c67.png",
      "contentList": {
        "name": "Updated Recently",
        "sortHeading": "updated",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "bannersTag": "world-category-banner-updated-recently"
      }
    },
    "hash": "8e4baf9311fe6d6bf1f67156bf3a8b28",
    "createdAt": "2020-06-05T08:23:32+00:00",
    "updatedAt": "2022-09-22T17:28:10+00:00"
  },
  {
    "id": "search-comfy-home",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1070,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Comfy Home",
      "search": {
        "searchQuery": "comfy home",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "0ad72c7044a2a0583ccc2631f38e6a17",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-photorealistic",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1071,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Photorealistic",
      "search": {
        "searchQuery": "photorealistic",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "52377900c0392473927e7212c0f104cc",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-art-gallery",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1072,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Art Gallery",
      "search": {
        "searchQuery": "art gallery",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "d55c48a9ffbd8441bf6986780bfc81a2",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-photo-studio",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1073,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Photo Studio",
      "search": {
        "searchQuery": "photo studio",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "c57e11de4730e34270e9452eb7ff3db2",
    "createdAt": "2022-04-08T18:19:13+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-dance-studio",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1074,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Dance Studio",
      "search": {
        "searchQuery": "dance studio",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "dd061cb607924e8611fc8de176bfafd8",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-dancing",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1075,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Dancing",
      "search": {
        "searchQuery": "dancing",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a7b654bd4f146dbed92ec35540e143c4",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-theme-park",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1076,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Theme Park",
      "search": {
        "searchQuery": "theme park",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "90afcaac1f46483861bad164534522b2",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-podcast",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1077,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Podcast",
      "search": {
        "searchQuery": "podcast",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "be7438fbc093ed27e19b055ec77091d5",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-skybox",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1078,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Skybox",
      "search": {
        "searchQuery": "skybox",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "abb0097c0cd485f2e75e584029de10e2",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-urban",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1079,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Urban",
      "search": {
        "searchQuery": "urban",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "6b13183a07b5c0c9c9905ab545b4d4b0",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-active-xplat",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1080,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Active Cross Platform",
      "shortName": "Active X Plat",
      "tooltipDescription": "Browse active cross-platform worlds",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/7ad585963ae3f58a9e5eaa4b42f9336aa4bf6b690ef95a122a2cfbe83c5cbc50.png",
      "contentList": {
        "name": "Active Cross Platform",
        "shortName": "Active X Plat",
        "sortHeading": "active",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "AllPlatforms",
        "bannersTag": "world-category-active-cross-platform"
      }
    },
    "hash": "8272f7ea72769b343e08dd39da519a5d",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-10-06T22:02:09+00:00"
  },
  {
    "id": "search-rural",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1080,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Rural",
      "search": {
        "searchQuery": "rural",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "5adfd14f154f64feb9c8f08d527b2e25",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-historic",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1081,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Historic",
      "search": {
        "searchQuery": "historic",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "2ebeea8ffeedbe44fa76cb84caf87746",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-ancient-ruin",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1082,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Ancient Ruin",
      "search": {
        "searchQuery": "ancient ruin",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "54a5c8192bd8a12c8a99d15de2e74622",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-coop-game",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1083,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Co-op Game",
      "search": {
        "searchQuery": "co-op game",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "bc0e3cb89431220387cc159d06cd7094",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-rain",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1084,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Rain",
      "search": {
        "searchQuery": "rain",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "6cf68db834b14ad8270d33a7d533ebb0",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-ambient",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1085,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Ambient",
      "search": {
        "searchQuery": "ambient",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "fc572fec2b43d3bb4423371634dedeae",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-storm",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1086,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Storm",
      "search": {
        "searchQuery": "storm",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "d5c79cc7dce35db18a91573270d602ce",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-exercise",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1087,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Exercise",
      "search": {
        "searchQuery": "exercise",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "c551cc780c6fbff37db37c5edd97aa09",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-video-player",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1088,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Video Player",
      "search": {
        "searchQuery": "video player",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a60d9870ae074cca820dc744d17d594c",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-farm",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1089,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Farm",
      "search": {
        "searchQuery": "farm",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "bcdf39a1198880078955b4fac16ad16e",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-active-my-platform",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1090,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Active My Platform",
      "tooltipDescription": "Browse worlds active on your platform",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/afb65f355f995d5fe5a0406a8d86780f260f7fafa1da8242cced1e712311b42b.png",
      "contentList": {
        "name": "Active My Platform",
        "sortHeading": "active",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformOnly",
        "bannersTag": "world-category-active-my-platform"
      }
    },
    "hash": "5717bf06b00ae6dddeb85ae8d5b93f3e",
    "createdAt": "2020-06-05T08:23:30+00:00",
    "updatedAt": "2022-09-22T17:28:08+00:00"
  },
  {
    "id": "search-spaceship",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1090,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Spaceship",
      "search": {
        "searchQuery": "spaceship",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "6e333a3bfe34b56de3752adcc2f05694",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-alien",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1091,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Alien",
      "search": {
        "searchQuery": "alien",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "1826f7b1658801283cbf0742f4fc9580",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-robot",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1092,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Robot",
      "search": {
        "searchQuery": "robot",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "e4d83f31358c32d45a8b201e30f4a265",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-love",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1093,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Love",
      "search": {
        "searchQuery": "love",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "14edab181bc8cd58974a1890eec3ea8c",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-romance",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1094,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Romance",
      "search": {
        "searchQuery": "romance",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "6af2faedff07a37d697d33015dacd69e",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-drawing",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1095,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Drawing",
      "search": {
        "searchQuery": "drawing",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "0df9a535a208e1bb7c191a3de3b59154",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-dating",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1096,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Dating",
      "search": {
        "searchQuery": "dating",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "bdf9c76de208f1008acd006017c7f39e",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-meeting",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1097,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Meeting",
      "search": {
        "searchQuery": "meeting",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "b784cdb4fb00fd95d782cf6104afa9ac",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-roller-coaster",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1098,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Roller Coaster",
      "search": {
        "searchQuery": "roller coaster",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "07958646642ffe494343d644c5193228",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-racing",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1099,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Racing",
      "search": {
        "searchQuery": "racing",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "e7217d1d61828bc390f3cf597e0563b1",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-avatar-worlds",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1100,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Avatar Worlds",
      "tooltipDescription": "Browse avatar worlds",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/44e7136e8cad4efe36c28f73e60b7de137306c6a7f38c1d1bf7c589a633022df.png",
      "contentList": {
        "name": "Avatar Worlds",
        "sortHeading": "heat",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "tag": "author_tag_avatar",
        "bannersTag": "world-category-banner-avatar"
      }
    },
    "hash": "cd4528bc8b56fb41641e984ce1cdb327",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-09-22T17:28:08+00:00"
  },
  {
    "id": "search-battle",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1100,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Battle",
      "search": {
        "searchQuery": "battle",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "1b2bd0ed9d0f033a140a483ca09a6bf8",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-combat",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1101,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Combat",
      "search": {
        "searchQuery": "combat",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "46ff33e9b91a6a178cd0f8a9b29e316d",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-underwater",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1102,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Underwater",
      "search": {
        "searchQuery": "underwater",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "7ad3b027ef441ed87403e59a83187f24",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-ocean",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1103,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Ocean",
      "search": {
        "searchQuery": "ocean",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "a4d10f69166b88edad428cb9299868d6",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-mars",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1104,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Mars",
      "search": {
        "searchQuery": "mars",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "bb0efbff2aa0c100c8b60f3abe05df22",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-nature",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1105,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Nature",
      "search": {
        "searchQuery": "nature",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "801af75004300b23d37e550553913000",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-cats",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1106,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Cats",
      "search": {
        "searchQuery": "cats",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "43d4f86be295794324b7549a8fba967f",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-dogs",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1107,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Dogs",
      "search": {
        "searchQuery": "dogs",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "3481b8c565dfd2ab59050d692127e0d1",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-rpg",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1108,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "RPG",
      "search": {
        "searchQuery": "rpg",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "dbfc45e11c38ead750490a0792b94a75",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-moon",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1108,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Moon",
      "search": {
        "searchQuery": "moon",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "f602c1c8c5e7daf672aacc8666001941",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "search-retro",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1109,
    "tags": [
      "search",
      "user-all"
    ],
    "data": {
      "name": "Retro",
      "search": {
        "searchQuery": "retro",
        "searchTags": "",
        "searchContent": "world",
        "searchInFields": "name,tags,description",
        "sortBy": "relevance"
      }
    },
    "hash": "ab3608611976fe9727b98c396600fbf3",
    "createdAt": "2022-04-08T18:47:48+00:00",
    "updatedAt": "2022-09-17T06:12:08+00:00"
  },
  {
    "id": "world-games",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1110,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Games",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/f13fed02d81a04a7dc8d1d9c2960d43ed955ac1d84a87fe9348087cb2a9c4343.png",
      "tooltipDescription": "Browse game worlds",
      "contentList": {
        "name": "Games",
        "sortHeading": "heat",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "tag": "author_tag_game",
        "bannersTag": "world-category-banner-games"
      }
    },
    "hash": "358eb85ad17ed58bebd3825cd4f4078a",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-09-22T17:28:09+00:00"
  },
  {
    "id": "world-classics",
    "isEnabled": true,
    "releaseStatus": "public",
    "priority": 1120,
    "tags": [
      "world-category",
      "user-all"
    ],
    "data": {
      "name": "Classics",
      "iconImageUrl": "https://assets.vrchat.com/ips/assets/461636bf6ae950948a538acee78eddbd1747454954af3dbbd155765260ea6061.png",
      "description": "This is a great collection of worlds to explore if you're new to VRChat! These worlds have been hits with the VRChat Community for many years and feature a mix of chill hangouts, social games, escape rooms, and popular avatar hubs.",
      "tooltipDescription": "Browse classic worlds",
      "contentList": {
        "name": "Classics",
        "sortHeading": "trending",
        "sortOwnership": "any",
        "sortOrder": "descending",
        "platform": "ThisPlatformSupported",
        "bannersTag": "world-category-banner-classics"
      }
    },
    "hash": "acf45c270160a8eb12d5ae40892194f7",
    "createdAt": "2020-06-05T08:23:31+00:00",
    "updatedAt": "2022-09-22T17:28:08+00:00"
  }
]
```
