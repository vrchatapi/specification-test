# Overview

## [Authentication](/data/requests/authentication)

#### [getCurrentUser with username and password (expect fail)](/data/requests/authentication/getcurrentuser-with-username-and-password-(expect-fail).md)

Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/displayName``,
* Missing property at ``#/userIcon``,

*42 issues truncated.*
#### [getCurrentUser while missing credentials](/data/requests/authentication/getcurrentuser-while-missing-credentials.md)


#### [verify2FA while missing credentials](/data/requests/authentication/verify2fa-while-missing-credentials.md)


#### [verify2FA](/data/requests/authentication/verify2fa.md)


#### [verifyAuthToken](/data/requests/authentication/verifyauthtoken.md)


#### [getCurrentUser after two-factor authentication](/data/requests/authentication/getcurrentuser-after-two-factor-authentication.md)


#### [checkUserExists with zero parameters](/data/requests/authentication/checkuserexists-with-zero-parameters.md)


#### [checkUserExists via email address](/data/requests/authentication/checkuserexists-via-email-address.md)


#### [checkUserExists via display name](/data/requests/authentication/checkuserexists-via-display-name.md)


#### [checkUserExists via username](/data/requests/authentication/checkuserexists-via-username.md)


#### [logout logout](/data/requests/authentication/logout-logout.md)


#### [getCurrentUser after logout to log back in](/data/requests/authentication/getcurrentuser-after-logout-to-log-back-in.md)




## [Users](/data/requests/users)

#### [searchUsers without parameters](/data/requests/users/searchusers-without-parameters.md)


#### [searchUsers](/data/requests/users/searchusers.md)


#### [searchUsers with limit](/data/requests/users/searchusers-with-limit.md)


#### [getUser](/data/requests/users/getuser.md)




## [Worlds](/data/requests/worlds)

#### [searchWorlds](/data/requests/worlds/searchworlds.md)


#### [getActiveWorlds](/data/requests/worlds/getactiveworlds.md)


#### [getRecentWorlds](/data/requests/worlds/getrecentworlds.md)


#### [getFavoritedWorlds](/data/requests/worlds/getfavoritedworlds.md)


#### [getWorld by id](/data/requests/worlds/getworld-by-id.md)


#### [getWorld (VRChat Home)](/data/requests/worlds/getworld-(vrchat-home).md)


#### [getWorldMetadata by id](/data/requests/worlds/getworldmetadata-by-id.md)


#### [getWorldPublishStatus by id](/data/requests/worlds/getworldpublishstatus-by-id.md)




## [Instances](/data/requests/instances)

#### [getInstance](/data/requests/instances/getinstance.md)


#### [getShortName](/data/requests/instances/getshortname.md)




## [Avatars](/data/requests/avatars)

#### [getOwnAvatar](/data/requests/avatars/getownavatar.md)


#### [searchAvatars with zero parameters](/data/requests/avatars/searchavatars-with-zero-parameters.md)


#### [searchAvatars with admin_featured_legacy tag](/data/requests/avatars/searchavatars-with-admin_featured_legacy-tag.md)


#### [getAvatar by id](/data/requests/avatars/getavatar-by-id.md)


#### [selectAvatar with id](/data/requests/avatars/selectavatar-with-id.md)


#### [selectAvatar with default avatar id](/data/requests/avatars/selectavatar-with-default-avatar-id.md)


#### [selectFallbackAvatar with id (not quest fallback)](/data/requests/avatars/selectfallbackavatar-with-id-(not-quest-fallback).md)


#### [selectFallbackAvatar with id](/data/requests/avatars/selectfallbackavatar-with-id.md)


#### [getFavoritedAvatars with zero parameters](/data/requests/avatars/getfavoritedavatars-with-zero-parameters.md)




## [Economy](/data/requests/economy)

#### [getSteamTransaction](/data/requests/economy/getsteamtransaction.md)

Response schema mismatch:
* Invalid type at ``#/agreement``.

#### [getSteamTransactions](/data/requests/economy/getsteamtransactions.md)

Response schema mismatch:
* Invalid type at ``#/0/agreement``,
* Invalid type at ``#/1/agreement``,
* Invalid type at ``#/2/agreement``.

#### [getCurrentSubscriptions](/data/requests/economy/getcurrentsubscriptions.md)


#### [getSubscriptions](/data/requests/economy/getsubscriptions.md)


#### [getLicenseGroup](/data/requests/economy/getlicensegroup.md)




## [Favorites](/data/requests/favorites)

#### [getFavorites](/data/requests/favorites/getfavorites.md)


#### [addFavorite](/data/requests/favorites/addfavorite.md)


#### [getFavorites after favorite add](/data/requests/favorites/getfavorites-after-favorite-add.md)


#### [getFavorite](/data/requests/favorites/getfavorite.md)


#### [removeFavorite](/data/requests/favorites/removefavorite.md)


#### [getFavoriteGroups](/data/requests/favorites/getfavoritegroups.md)


#### [getFavoriteGroup](/data/requests/favorites/getfavoritegroup.md)


#### [updateFavoriteGroup](/data/requests/favorites/updatefavoritegroup.md)




## [Files](/data/requests/files)

#### [getFiles without data](/data/requests/files/getfiles-without-data.md)


#### [createFile](/data/requests/files/createfile.md)


#### [getFiles](/data/requests/files/getfiles.md)


#### [getFile](/data/requests/files/getfile.md)


#### [downloadFileVersion](/data/requests/files/downloadfileversion.md)


#### [createFileVersion](/data/requests/files/createfileversion.md)


#### [deleteFileVersion](/data/requests/files/deletefileversion.md)


#### [deleteFile](/data/requests/files/deletefile.md)




## [Friends](/data/requests/friends)

#### [getFriends](/data/requests/friends/getfriends.md)


#### [getFriendStatus prior to friend request](/data/requests/friends/getfriendstatus-prior-to-friend-request.md)


#### [friend](/data/requests/friends/friend.md)


#### [getFriendStatus after friend request](/data/requests/friends/getfriendstatus-after-friend-request.md)


#### [deleteFriendRequest](/data/requests/friends/deletefriendrequest.md)


#### [getFriendStatus after deleting friend request](/data/requests/friends/getfriendstatus-after-deleting-friend-request.md)




## [Groups](/data/requests/groups)

#### [createGroup](/data/requests/groups/creategroup.md)


#### [getGroup](/data/requests/groups/getgroup.md)


#### [getGroupMembers](/data/requests/groups/getgroupmembers.md)


#### [updateGroup](/data/requests/groups/updategroup.md)


#### [createGroupInvite](/data/requests/groups/creategroupinvite.md)


#### [getGroupInvites](/data/requests/groups/getgroupinvites.md)


#### [deleteGroupInvite](/data/requests/groups/deletegroupinvite.md)


#### [deleteGroup](/data/requests/groups/deletegroup.md)




## [Notifications](/data/requests/notifications)

#### [getNotifications](/data/requests/notifications/getnotifications.md)




## [Permissions](/data/requests/permissions)

#### [getAssignedPermissions](/data/requests/permissions/getassignedpermissions.md)

Response schema mismatch:
* Unexpected property at ``#/0data/max``,
* Unexpected property at ``#/3data/max``,
* Unexpected property at ``#/7data/maxFavoritesPerGroup``,

*3 issues truncated.*
#### [getPermission](/data/requests/permissions/getpermission.md)




## [Playermoderation](/data/requests/playermoderation)

#### [getPlayerModerations](/data/requests/playermoderation/getplayermoderations.md)


#### [moderateUser](/data/requests/playermoderation/moderateuser.md)


#### [getPlayerModerations with filter](/data/requests/playermoderation/getplayermoderations-with-filter.md)


#### [clearAllPlayerModerations](/data/requests/playermoderation/clearallplayermoderations.md)




## [System](/data/requests/system)

#### [getJavaScript](/data/requests/system/getjavascript.md)

Response schema mismatch:
Unexpected token '/', "/*! For li"... is not valid JSON.

#### [getCSS](/data/requests/system/getcss.md)

Response schema mismatch:
Unexpected token ':', ":root{--st"... is not valid JSON.

#### [getInfoPush with user-all](/data/requests/system/getinfopush-with-user-all.md)

Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Unexpected property at ``#/0/regions``,

*906 issues truncated.*
#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Unexpected property at ``#/0/regions``,

*17 issues truncated.*
#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Missing property at ``#/minSupportedClientBuildNumber/Default/redirectionAddress``,
* Unexpected property at ``#/reportCategories/emoji``,
* Unexpected property at ``#/reportCategories/sticker``,

*20 issues truncated.*
#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)


#### [getSystemTime](/data/requests/system/getsystemtime.md)




