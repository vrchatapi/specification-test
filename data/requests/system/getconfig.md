# getConfig

## Issues
```
Response schema mismatch:

Unexpected property at #/BehaviourExpiresResolverContentTape,
Unexpected property at #/analyticsSegment_NewUI_PctOfUsers,
Unexpected property at #/analyticsSegment_NewUI_Salt,
Unexpected property at #/bytesLoafHealthBarrier,
Unexpected property at #/clipHeadReserved,
Unexpected property at #/constants,
Unexpected property at #/forceUseLatestWorld,
Unexpected property at #/googleApiClientId,
Unexpected property at #/heapCheckPermanent,
Unexpected property at #/impostorRegressionHoist,
Unexpected property at #/instructionHiddenGenerate,
Unexpected property at #/minSupportedClientBuildNumber,
Unexpected property at #/minimumUnityVersionForUploads,
Unexpected property at #/offlineAnalysis,
Unexpected property at #/photonNameserverOverrides,
Unexpected property at #/privateLoafPublishViolationUsage,
Unexpected property at #/privateRank,
Unexpected property at #/randomScrollPayloadBehavior,
Unexpected property at #/readUpdatedBackgroundLayoutTemporal,
Unexpected property at #/restLimiter,
Unexpected property at #/schedulingReason,
Unexpected property at #/seedIndicator,
Unexpected property at #/signJwt,
Unexpected property at #/slicingChaos,
Unexpected property at #/soapHeapJoinMochaNotify,
Unexpected property at #/timekeeping,
Unexpected property at #/udpStreamingCrema,
Unexpected property at #/websocketMaxFriendsRefreshDelay,
Unexpected property at #/websocketQuickReconnectTime,
Unexpected property at #/websocketReconnectMaxDelay,
Unexpected property at #/workerYachtInstance.
```

## Request
`get https://vrchat.com/api/1/config`

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
| vary | `Origin, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
{
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/BehaviourExpiresResolverContentTape
   */
  "BehaviourExpiresResolverContentTape": 24506,
  "VoiceEnableDegradation": false,
  "VoiceEnableReceiverLimiting": true,
  "address": "1062 Folsom St., Suite 200, San Francisco, CA, 94103",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/analyticsSegment_NewUI_PctOfUsers
   */
  "analyticsSegment_NewUI_PctOfUsers": 2,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/analyticsSegment_NewUI_Salt
   */
  "analyticsSegment_NewUI_Salt": "0d8522abac334287830d1192a8605f39",
  "announcements": [],
  "appName": "VrChat",
  "availableLanguageCodes": [
    "en",
    "fr",
    "es",
    "it",
    "ko",
    "de",
    "ja",
    "pl",
    "ru",
    "pt-BR",
    "zh-CN",
    "zh-HK",
    "he",
    "tok"
  ],
  "availableLanguages": [
    "English",
    "French",
    "Spanish",
    "Italian",
    "Korean",
    "German",
    "Japanese",
    "Polish",
    "Russian",
    "Portuguese, Brazilian",
    "Chinese Simplified"
  ],
  "buildVersionTag": "master-build-2024-07-25-september-parathakhubz",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/bytesLoafHealthBarrier
   */
  "bytesLoafHealthBarrier": 0,
  "clientApiKey": "JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26",
  "clientBPSCeiling": 18432,
  "clientDisconnectTimeout": 30000,
  "clientNetDispatchThread": false,
  "clientNetInThread": false,
  "clientNetInThread2": false,
  "clientNetInThreadMobile": false,
  "clientNetInThreadMobile2": false,
  "clientNetOutThread": false,
  "clientNetOutThread2": true,
  "clientNetOutThreadMobile": true,
  "clientNetOutThreadMobile2": true,
  "clientQR": 1,
  "clientReservedPlayerBPS": 7168,
  "clientSentCountAllowance": 100,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/clipHeadReserved
   */
  "clipHeadReserved": [
    "bootstrapRolloverBufferJsonExpires",
    [
      {},
      {
        "excursionRotationHook": 0.2874575891667943
      },
      "authReaderBracketIso8601Tracker"
    ]
  ],
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/constants
   */
  "constants": {
    "GROUPS": {
      "CAPACITY": 100000,
      "GROUP_TRANSFER_REQUIREMENTS": [
        "hasVerifiedEmail",
        "targetCanOwnMoreGroups",
        "targetIsGroupMember",
        "hasVRCPlus",
        "groupNotMonetized"
      ],
      "MAX_INVITES_REQUESTS": 50,
      "MAX_JOINED": 100,
      "MAX_JOINED_PLUS": 200,
      "MAX_LANGUAGES": 10,
      "MAX_LINKS": 3,
      "MAX_MANAGEMENT_ROLES": 5,
      "MAX_OWNED": 5,
      "MAX_ROLES": 50
    },
    "INSTANCE": {
      "POPULATION_BRACKETS": {
        "CROWDED": {
          "max": 80,
          "min": 20
        },
        "FEW": {
          "max": 5,
          "min": 1
        },
        "MANY": {
          "max": 20,
          "min": 6
        }
      }
    },
    "LANGUAGE": {
      "SPOKEN_LANGUAGE_OPTIONS": {
        "afr": "Afrikaans",
        "ara": "العربية",
        "ase": "American Sign Language",
        "asf": "Auslan (Australian Sign Language)",
        "ben": "বাংলা",
        "bfi": "British Sign Language",
        "bul": "български",
        "ces": "Čeština",
        "cmn": "官话",
        "cym": "Cymraeg",
        "dan": "Dansk",
        "deu": "Deutsch",
        "dse": "Nederlandse Gebarentaal",
        "ell": "Ελληνικά",
        "eng": "English",
        "epo": "Esperanto",
        "est": "eesti",
        "fil": "Filipino",
        "fin": "Suomi",
        "fra": "Français",
        "fsl": "langue des signes française",
        "gla": "Gàidhlig",
        "gle": "Gaeilge",
        "gsg": "Deutsche Gebärdensprache",
        "heb": "עברית",
        "hin": "हिन्दी",
        "hmn": "Hmoob",
        "hrv": "hrvatski",
        "hun": "Magyar",
        "hye": "հայերեն",
        "ind": "Bahasa Indonesia",
        "isl": "íslenska",
        "ita": "Italiano",
        "jpn": "日本語",
        "jsl": "日本手話",
        "kor": "한국어",
        "kvk": "한국 수화 언어",
        "lav": "Latviešu",
        "lit": "lietuvių",
        "ltz": "Lëtzebuergesch",
        "mar": "मराठी",
        "mkd": "македонски",
        "mlt": "Malti",
        "mri": "Māori",
        "msa": "Bahasa Melayu",
        "nld": "Nederlands",
        "nor": "Norsk",
        "nzs": "New Zealand Sign Language",
        "pol": "Polski",
        "por": "Português",
        "ron": "Română",
        "rus": "Русский",
        "sco": "Scots",
        "slk": "slovenčina",
        "slv": "slovenščina",
        "spa": "Español",
        "swe": "Svenska",
        "tel": "తెలుగు",
        "tha": "ภาษาไทย",
        "tok": "toki pona",
        "tur": "Türkçe",
        "tws": "潮州話",
        "ukr": "украї́нська",
        "vie": "Tiếng Việt",
        "wuu": "吳語",
        "yue": "廣東話",
        "zho": "中文",
        "zxx": "No linguistic content"
      }
    }
  },
  "contactEmail": "hello@vrchat.com",
  "copyrightEmail": "copyright@vrchat.com",
  "currentPrivacyVersion": 1,
  "currentTOSVersion": 9,
  "defaultAvatar": "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11",
  "deploymentGroup": "green",
  "devLanguageCodes": [
    "sv",
    "nl",
    "uk",
    "pl",
    "da",
    "no",
    "th",
    "fi",
    "hu",
    "cs",
    "tr",
    "ar",
    "ro",
    "vi",
    "id"
  ],
  "devSdkUrl": "https://vrchat.com/home/download",
  "devSdkVersion": "2020.09.25.00.08",
  "dis-countdown": "2023-01-15T08:00:00.000Z",
  "disableAVProInProton": false,
  "disableAvatarCopying": false,
  "disableAvatarGating": false,
  "disableCaptcha": true,
  "disableCommunityLabs": false,
  "disableCommunityLabsPromotion": false,
  "disableEmail": false,
  "disableEventStream": false,
  "disableFeedbackGating": false,
  "disableFrontendBuilds": false,
  "disableHello": false,
  "disableOculusSubs": false,
  "disableRegistration": false,
  "disableSteamNetworking": true,
  "disableTwoFactorAuth": false,
  "disableUdon": false,
  "disableUpgradeAccount": false,
  "downloadLinkWindows": "https://www.oculus.com/experiences/rift/997678176960598/",
  "downloadUrls": {
    "bootstrap": "https://github.com/vrchat/packages/releases/download/resolvers/latest-resolver.unitypackage",
    "sdk2": "https://assets.vrchat.com/sdk/VRCSDK2-2022.04.20.16.27_Public.unitypackage",
    "sdk3-avatars": "https://assets.vrchat.com/sdk/VRChat-Avatars-3.6.1.unitypackage",
    "sdk3-worlds": "https://assets.vrchat.com/sdk/VRChat-Worlds-3.6.1.unitypackage",
    "vcc": "https://vrcpm.vrchat.cloud/vcc/Builds/2.3.2/VRChat_CreatorCompanion_Setup_2.3.2.exe"
  },
  "dynamicWorldRows": [
    {
      "index": 1,
      "name": "Hot",
      "platform": "ThisPlatformSupported",
      "sortHeading": "heat",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 2,
      "name": "Spotlight - PC",
      "platform": "ThisPlatformSupported",
      "sortHeading": "updated",
      "sortOrder": "descending",
      "sortOwnership": "any",
      "tag": "admin_spotlight_pc"
    },
    {
      "index": 3,
      "name": "Spotlight - Cross Platform",
      "platform": "ThisPlatformSupported",
      "sortHeading": "updated",
      "sortOrder": "descending",
      "sortOwnership": "any",
      "tag": "admin_spotlight_xplat"
    },
    {
      "index": 4,
      "name": "Community Labs",
      "platform": "ThisPlatformSupported",
      "sortHeading": "labs",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 5,
      "name": "Active - Cross Platform",
      "platform": "AllPlatforms",
      "sortHeading": "active",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 6,
      "name": "Active - My Platform",
      "platform": "ThisPlatformOnly",
      "sortHeading": "active",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 7,
      "name": "Random",
      "platform": "ThisPlatformSupported",
      "sortHeading": "shuffle",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 8,
      "name": "Avatar Worlds",
      "platform": "ThisPlatformSupported",
      "sortHeading": "heat",
      "sortOrder": "descending",
      "sortOwnership": "any",
      "tag": "author_tag_avatar"
    },
    {
      "index": 9,
      "name": "Games",
      "platform": "ThisPlatformSupported",
      "sortHeading": "heat",
      "sortOrder": "descending",
      "sortOwnership": "any",
      "tag": "author_tag_game"
    },
    {
      "index": 10,
      "name": "Updated Recently",
      "platform": "ThisPlatformSupported",
      "sortHeading": "updated",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 11,
      "name": "New",
      "platform": "ThisPlatformSupported",
      "sortHeading": "publication",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 12,
      "name": "Recent",
      "platform": "ThisPlatformSupported",
      "sortHeading": "recent",
      "sortOrder": "descending",
      "sortOwnership": "any"
    },
    {
      "index": 13,
      "name": "Mine",
      "platform": "any",
      "sortHeading": "updated",
      "sortOrder": "descending",
      "sortOwnership": "mine"
    },
    {
      "index": 14,
      "name": "Classics",
      "platform": "ThisPlatformSupported",
      "sortHeading": "trending",
      "sortOrder": "descending",
      "sortOwnership": "any"
    }
  ],
  "economyPauseEnd": "2024-02-01T15:05:00.000Z",
  "economyPauseStart": "2024-02-01T13:55:00.000Z",
  "economyState": 1,
  "events": {
    "distanceClose": 2,
    "distanceFactor": 100,
    "distanceFar": 80,
    "groupDistance": 3,
    "maximumBunchSize": 247,
    "notVisibleFactor": 100,
    "playerOrderBucketSize": 5,
    "playerOrderFactor": 55,
    "slowUpdateFactorThreshold": 25,
    "viewSegmentLength": 5
  },
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/forceUseLatestWorld
   */
  "forceUseLatestWorld": true,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/googleApiClientId
   */
  "googleApiClientId": "827942544393-r2ouvckvouldn9dg9uruseje575e878f.apps.googleusercontent.com",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/heapCheckPermanent
   */
  "heapCheckPermanent": 0,
  "homeWorldId": "wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd",
  "homepageRedirectTarget": "https://hello.vrchat.com",
  "hubWorldId": "wrld_ba913a96-fac4-4048-a062-9aa5db092812",
  "imageHostUrlList": [
    "assets.vrchat.com",
    "i.imgur.com",
    "pbs.twimg.com",
    "cdn.discordapp.com",
    "i.redd.it",
    "images2.imgbox.com",
    "i.ibb.co",
    "i.postimg.cc",
    "images4.imagebam.com",
    "dl.dropbox.com",
    "*.github.io",
    "*.xr-marketplace.com",
    "*.uroom.online",
    "*.v-market.work",
    "*.vket.chat",
    "*.poly.jp",
    "*.vazar.jp",
    "*.catsudon.net",
    "dl.dropboxusercontent.com",
    "*.vazarapi.com",
    "ciel.topaz.chat",
    "vr-static.anique.jp",
    "*.vrcdn.cloud"
  ],
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/impostorRegressionHoist
   */
  "impostorRegressionHoist": 1,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/instructionHiddenGenerate
   */
  "instructionHiddenGenerate": true,
  "jobsEmail": "jobs@vrchat.com",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/minSupportedClientBuildNumber
   */
  "minSupportedClientBuildNumber": {
    "AppStore": {
      "minBuildNumber": 1472,
      "redirectionAddress": "itms-apps://itunes.apple.com/app/id6448578770"
    },
    "Default": {
      "minBuildNumber": 1472
    },
    "Firebase": {
      "minBuildNumber": 1472,
      "redirectionAddress": "https://console.firebase.google.com/project/crashlytics-dd775/appdistribution/app/android:com.vrchat.mobile/releases"
    },
    "FirebaseiOS": {
      "minBuildNumber": 1472,
      "redirectionAddress": "https://appdistribution.firebase.google.com/testerapps/1:550279617435:ios:830f6a727c464b7cd1df3e"
    },
    "GooglePlay": {
      "minBuildNumber": 1472,
      "redirectionAddress": "https://play.google.com/store/apps/details?id=com.vrchat.mobile.playstore"
    },
    "PC": {
      "minBuildNumber": 1472,
      "redirectionAddress": "steam://nav/games/details/438100"
    },
    "PicoStore": {
      "minBuildNumber": 1472,
      "redirectionAddress": "com.picovr.store"
    },
    "QuestAppLab": {
      "minBuildNumber": 1472,
      "redirectionAddress": "https://www.meta.com/experiences/1856672347794301/"
    },
    "QuestStore": {
      "minBuildNumber": 1472,
      "redirectionAddress": "https://www.meta.com/experiences/1856672347794301/"
    },
    "TestFlight": {
      "minBuildNumber": 1472,
      "redirectionAddress": "https://beta.itunes.apple.com/v1/app/6448578770"
    },
    "XRElite": {
      "minBuildNumber": 1472,
      "redirectionAddress": "com.htc.viveport.store"
    }
  },
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/minimumUnityVersionForUploads
   */
  "minimumUnityVersionForUploads": "2019.0.0",
  "moderationEmail": "moderation@vrchat.com",
  "notAllowedToSelectAvatarInPrivateWorldMessage": "For security reasons, you're not yet allowed to select avatars in private worlds or upload content. Please continue to enjoy VRChat and we'll message you when you've been unlocked. Thanks and have fun!",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/offlineAnalysis
   */
  "offlineAnalysis": {
    "android": true,
    "standalonewindows": true
  },
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/photonNameserverOverrides
   */
  "photonNameserverOverrides": [
    "ns.photonengine.io"
  ],
  "player-url-resolver-sha1": "CA-24-0C-BA-B0-46-5A-FE-84-A6-02-62-E3-56-36-E8-34-0E-B7-EA",
  "player-url-resolver-version": "2024-07-09",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/privateLoafPublishViolationUsage
   */
  "privateLoafPublishViolationUsage": 472,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/privateRank
   */
  "privateRank": {
    "pullBookmarkInternalSignPod": "throughputThreadTagPluginPlugin"
  },
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/randomScrollPayloadBehavior
   */
  "randomScrollPayloadBehavior": false,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/readUpdatedBackgroundLayoutTemporal
   */
  "readUpdatedBackgroundLayoutTemporal": {
    "SessionBulkJustifyProp": [
      [],
      null,
      {
        "avatarFoxCrema": 29055,
        "timeoutFileCommitSessionView": null
      }
    ],
    "sprayCronTokenSyscallAuthentication": 0
  },
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/restLimiter
   */
  "restLimiter": null,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/schedulingReason
   */
  "schedulingReason": {
    "cappuccinoKeyword": {},
    "downReasonHandler": 0.9893288819683463,
    "timeCrustThresholdLatteBranch": 1
  },
  "sdkDeveloperFaqUrl": "https://docs.vrchat.com/docs/frequently-asked-questions#section-why-can-t-i-upload-content-yet-",
  "sdkDiscordUrl": "https://discord.gg/vrchat",
  "sdkNotAllowedToPublishMessage": "Welcome the VRChat SDK!\r\n\r\nBefore you can upload avatars or worlds to VRChat, you'll need to spend more time enjoying the app. We do this for security reasons, and so you can learn more about us.\r\n\r\nWhen you get the ability to upload, we will notify you via email and in VRChat. For now, you can learn and test on your own device.\r\n\r\nTo get started, check out the resources below.\r\n\r\nThank you for your patience, we can't wait to see what you'll build!",
  "sdkUnityVersion": "2022.3.22f1",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/seedIndicator
   */
  "seedIndicator": true,
  "serverName": "prod-api-green-sunday-11n",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/signJwt
   */
  "signJwt": 0,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/slicingChaos
   */
  "slicingChaos": null,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/soapHeapJoinMochaNotify
   */
  "soapHeapJoinMochaNotify": 0,
  "stringHostUrlList": [
    "*.github.io",
    "pastebin.com",
    "gist.githubusercontent.com",
    "api.fynn.ai",
    "api-dev.fynn.ai",
    "*.xr-marketplace.com",
    "*.uroom.online",
    "*.v-market.work",
    "*.vket.chat",
    "*.poly.jp",
    "*.vazar.jp",
    "*.catsudon.net",
    "*.vazarapi.com",
    "vr.anique.jp",
    "*.vrcdn.cloud"
  ],
  "supportEmail": "support@vrchat.com",
  "timeOutWorldId": "wrld_5b89c79e-c340-4510-be1b-476e9fcdedcc",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/timekeeping
   */
  "timekeeping": true,
  "tutorialWorldId": "wld_7d3d25ec-663e-406e-96a3-e2c4fc0d8104",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/udpStreamingCrema
   */
  "udpStreamingCrema": 0.2878606638484347,
  "updateRateMsMaximum": 1000,
  "updateRateMsMinimum": 50,
  "updateRateMsNormal": 200,
  "updateRateMsUdonManual": 50,
  "uploadAnalysisPercent": 1,
  "urlList": [
    "*.facebook.com",
    "*.nicovideo.jp",
    "soundcloud.com",
    "*.twitch.tv",
    "*.vimeo.com",
    "*.youku.com",
    "*.youtube.com",
    "youtu.be",
    "assets.vrchat.com",
    "*.v-market.work",
    "music4.cdn.vket.com",
    "*.vrcdn.live",
    "*.vrcdn.video",
    "mixcloud.com",
    "twisteventsasia.com",
    "stream.broadcast.unity.com",
    "*.furality.online",
    "live.foxcdn.io",
    "*.xr-marketplace.com",
    "*.uroom.online",
    "*.vket.chat",
    "ciel.topaz.chat",
    "movie.vketcdn.com",
    "*.poly.jp",
    "*.vazar.jp",
    "*.catsudon.net",
    "redirect.vrchat.com",
    "*.fbcdn.net",
    "*.sndcdn.com",
    "*.ttvnw.net",
    "*.twitchcdn.net",
    "*.jtvnw.net",
    "*.googlevideo.com",
    "*.mixcloud.com",
    "vod-progressive.akamaized.net",
    "dqrpb9wgowsf5.cloudfront.net",
    "ds0h3roq6wcgc.cloudfront.net",
    "d2nvs31859zcd8.cloudfront.net",
    "virtualokinawa-on-demand.contents.work",
    "*.midcircuitcdn.com",
    "hyperbeam.com",
    "hyperbeam.dev",
    "*.hyperbeam.com",
    "*.hyperbeam.dev",
    "vr-static.anique.jp",
    "*.vrcdn.cloud"
  ],
  "useReliableUdpForVoice": false,
  "viveWindowsUrl": "http://store.steampowered.com/app/438100/",
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/websocketMaxFriendsRefreshDelay
   */
  "websocketMaxFriendsRefreshDelay": 900,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/websocketQuickReconnectTime
   */
  "websocketQuickReconnectTime": 10,
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/websocketReconnectMaxDelay
   */
  "websocketReconnectMaxDelay": 2,
  "whiteListedAssetUrls": [
    "http://dbinj8iahsbec.cloudfront.net/plugins",
    "http://dbinj8iahsbec.cloudfront.net/",
    "https://dbinj8iahsbec.cloudfront.net/",
    "https://dev-api.vrchat.cloud/api/1/file/",
    "https://api.vrchat.cloud/api/1/file/",
    "https://files.vrchat.cloud/unmanaged/"
  ],
  /**
   * Unexpected property.
   *
   * @schema APIConfig
   * @keyword additionalProperties
   *
   * #/additionalProperties
   * #/workerYachtInstance
   */
  "workerYachtInstance": "stroopwafelTargetPublishCollider"
}
```
