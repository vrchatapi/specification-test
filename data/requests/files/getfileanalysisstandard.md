# getFileAnalysisStandard

## Issues
Response schema mismatch:
* Unexpected property at ``#/encryptionKey``,
* Unexpected property at ``#/performanceRating``.
## Request
`GET https://api.vrchat.cloud/api/1/analysis/file_989feccd-3e6d-41f6-bf87-a8b3ece88438/1/standard`

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
  "avatarStats": {
    "animatorCount": 1,
    "audioSourceCount": 0,
    "blendShapeCount": 6,
    "boneCount": 13,
    "bounds": [
      0.2818719,
      0.36067107,
      0.29582077
    ],
    "cameraCount": 0,
    "clothCount": 0,
    "constraintCount": 0,
    "contactCount": 2,
    "customExpressions": true,
    "customizeAnimationLayers": true,
    "enableEyeLook": true,
    "lightCount": 0,
    "lineRendererCount": 0,
    "lipSync": 4,
    "materialCount": 1,
    "materialSlotsUsed": 1,
    "meshCount": 0,
    "meshIndices": 0,
    "meshParticleMaxPolygons": 0,
    "meshPolygons": 0,
    "meshVertices": 0,
    "particleCollisionEnabled": false,
    "particleSystemCount": 0,
    "particleTrailsEnabled": false,
    "physBoneColliderCount": 0,
    "physBoneCollisionCheckCount": 0,
    "physBoneComponentCount": 2,
    "physBoneTransformCount": 6,
    "physicsColliders": 0,
    "physicsRigidbodies": 0,
    "skinnedMeshCount": 1,
    "skinnedMeshIndices": 3078,
    "skinnedMeshPolygons": 1026,
    "skinnedMeshVertices": 861,
    "totalClothVertices": 0,
    "totalIndices": 3078,
    "totalMaxParticles": 0,
    "totalPolygons": 1026,
    "totalTextureUsage": 6824,
    "totalVertices": 861,
    "trailRendererCount": 0,
    "writeDefaultsUsed": true
  },
  "created_at": "2025-03-16T01:10:44.730Z",
  "encryptionKey": "8CQpFdZG8F3beOVDYEJsQv/AHEusxFJiWwtbW8X/xKE=",
  "fileSize": 81988,
  "performanceRating": "Excellent",
  "success": true,
  "uncompressedSize": 388972
}
```
