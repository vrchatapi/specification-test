# Overview

## [Authentication](/data/requests/authentication)

#### [getCurrentUser after logout to log back in](/data/requests/authentication/getcurrentuser-after-logout-to-log-back-in.md)

Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/displayName``,
* Missing property at ``#/userIcon``,

*42 issues truncated.*
#### [logout logout](/data/requests/authentication/logout-logout.md)

Response schema mismatch:
* Unexpected property at ``#/error``.

#### [verify2FA](/data/requests/authentication/verify2fa.md)

Response schema mismatch:
* Missing property at ``#/verified``,
* Unexpected property at ``#/error``.

#### [getCurrentUser with username and password (expect fail)](/data/requests/authentication/getcurrentuser-with-username-and-password-(expect-fail).md)

Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/displayName``,
* Missing property at ``#/userIcon``,

*42 issues truncated.*
#### [getCurrentUser while missing credentials](/data/requests/authentication/getcurrentuser-while-missing-credentials.md)


#### [verify2FA while missing credentials](/data/requests/authentication/verify2fa-while-missing-credentials.md)


#### [verifyAuthToken](/data/requests/authentication/verifyauthtoken.md)


#### [getCurrentUser after two-factor authentication](/data/requests/authentication/getcurrentuser-after-two-factor-authentication.md)


#### [checkUserExists with zero parameters](/data/requests/authentication/checkuserexists-with-zero-parameters.md)


#### [checkUserExists via email address](/data/requests/authentication/checkuserexists-via-email-address.md)


#### [checkUserExists via display name](/data/requests/authentication/checkuserexists-via-display-name.md)


#### [checkUserExists via username](/data/requests/authentication/checkuserexists-via-username.md)




## [Users](/data/requests/users)




## [Worlds](/data/requests/worlds)




## [Avatars](/data/requests/avatars)




## [Economy](/data/requests/economy)




## [Favorites](/data/requests/favorites)




## [Files](/data/requests/files)




## [Friends](/data/requests/friends)




## [Groups](/data/requests/groups)




## [Notifications](/data/requests/notifications)




## [Permissions](/data/requests/permissions)




## [Playermoderation](/data/requests/playermoderation)




## [System](/data/requests/system)

#### [getJavaScript](/data/requests/system/getjavascript.md)

Response media type ``text/html`` not expected.

#### [getCSS](/data/requests/system/getcss.md)

Response media type ``text/html`` not expected.

#### [getInfoPush with user-all](/data/requests/system/getinfopush-with-user-all.md)

Response schema mismatch:
* Invalid type at ``#``.

#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Invalid type at ``#``.

#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Missing property at ``#/minSupportedClientBuildNumber/Default/redirectionAddress``,
* Unexpected property at ``#/reportCategories/emoji``,
* Unexpected property at ``#/reportCategories/sticker``,

*29 issues truncated.*
#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)


#### [getSystemTime](/data/requests/system/getsystemtime.md)




