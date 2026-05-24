# Overview

## [Authentication](/data/requests/authentication)

#### [getCurrentUser after logout to log back in](/data/requests/authentication/getcurrentuser-after-logout-to-log-back-in.md)

Response schema mismatch:
* Missing property at ``#/acceptedTOSVersion``,
* Missing property at ``#/ageVerificationStatus``,
* Missing property at ``#/ageVerified``,

*46 issues truncated.*
#### [logout logout](/data/requests/authentication/logout-logout.md)

Response schema mismatch:
* Unexpected property at ``#/error``.

#### [checkUserExists via username](/data/requests/authentication/checkuserexists-via-username.md)

Response schema mismatch:
* Missing property at ``#/userExists``,
* Unexpected property at ``#/error``.

#### [verify2FA](/data/requests/authentication/verify2fa.md)

Response schema mismatch:
* Missing property at ``#/verified``,
* Unexpected property at ``#/error``.

#### [getCurrentUser with username and password (expect fail)](/data/requests/authentication/getcurrentuser-with-username-and-password-(expect-fail).md)

Response schema mismatch:
* Missing property at ``#/acceptedTOSVersion``,
* Missing property at ``#/ageVerificationStatus``,
* Missing property at ``#/ageVerified``,

*46 issues truncated.*
#### [getCurrentUser while missing credentials](/data/requests/authentication/getcurrentuser-while-missing-credentials.md)


#### [verify2FA while missing credentials](/data/requests/authentication/verify2fa-while-missing-credentials.md)


#### [verifyAuthToken](/data/requests/authentication/verifyauthtoken.md)


#### [getCurrentUser after two-factor authentication](/data/requests/authentication/getcurrentuser-after-two-factor-authentication.md)


#### [checkUserExists with zero parameters](/data/requests/authentication/checkuserexists-with-zero-parameters.md)


#### [checkUserExists via email address](/data/requests/authentication/checkuserexists-via-email-address.md)


#### [checkUserExists via display name](/data/requests/authentication/checkuserexists-via-display-name.md)




## [Users](/data/requests/users)




## [Worlds](/data/requests/worlds)




## [Avatars](/data/requests/avatars)




## [Calendar](/data/requests/calendar)




## [Economy](/data/requests/economy)




## [Favorites](/data/requests/favorites)




## [Files](/data/requests/files)




## [Friends](/data/requests/friends)




## [Groups](/data/requests/groups)




## [Inventory](/data/requests/inventory)




## [Notifications](/data/requests/notifications)




## [Permissions](/data/requests/permissions)




## [Playermoderation](/data/requests/playermoderation)




## [System](/data/requests/system)

#### [getSystemTime](/data/requests/system/getsystemtime.md)

Response schema mismatch:
* Invalid type at ``#``.

#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)

Response schema mismatch:
* Invalid type at ``#``.

#### [getJavaScript](/data/requests/system/getjavascript.md)

Response media type ``application/json; charset=utf-8`` not expected.

#### [getCSS](/data/requests/system/getcss.md)

Response media type ``application/json; charset=utf-8`` not expected.

#### [getInfoPush with user-all](/data/requests/system/getinfopush-with-user-all.md)

Response schema mismatch:
* Invalid type at ``#``.

#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Invalid type at ``#``.

#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Unexpected property at ``#/audioConfig/nearFieldILDNudgeEarTranslate``,
* Unexpected property at ``#/audioConfig/useLegacyILDNudging``,
* Missing property at ``#/minSupportedClientBuildNumber/QuestAppLab``,

*34 issues truncated.*


