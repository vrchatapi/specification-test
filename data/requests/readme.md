# Overview

## [Authentication](/data/requests/authentication)

#### [checkUserExists via display name](/data/requests/authentication/checkuserexists-via-display-name.md)

Response schema mismatch:
* Missing property at ``#/nameOk``.

#### [checkUserExists via email address](/data/requests/authentication/checkuserexists-via-email-address.md)

Response schema mismatch:
* Missing property at ``#/nameOk``.

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


#### [checkUserExists via username](/data/requests/authentication/checkuserexists-via-username.md)




## [Users](/data/requests/users)

#### [searchUsers without parameters](/data/requests/users/searchusers-without-parameters.md)


#### [searchUsers](/data/requests/users/searchusers.md)


#### [searchUsers with limit](/data/requests/users/searchusers-with-limit.md)


#### [getUser](/data/requests/users/getuser.md)




## [Worlds](/data/requests/worlds)

#### [getWorld (VRChat Home)](/data/requests/worlds/getworld-(vrchat-home).md)

Response schema mismatch:
* Unexpected property at ``#/unityPackages/9/worldSignature``,
* Unexpected property at ``#/unityPackages/21/worldSignature``,
* Unexpected property at ``#/storeId``.

#### [getWorld by id](/data/requests/worlds/getworld-by-id.md)

Response schema mismatch:
* Unexpected property at ``#/storeId``.

#### [getActiveWorlds](/data/requests/worlds/getactiveworlds.md)

Response schema mismatch:
* Unexpected property at ``#/0/storeId``,
* Unexpected property at ``#/1/storeId``,
* Unexpected property at ``#/2/storeId``,

*7 issues truncated.*
#### [searchWorlds](/data/requests/worlds/searchworlds.md)

Response schema mismatch:
* Unexpected property at ``#/0/storeId``,
* Unexpected property at ``#/1/storeId``,
* Unexpected property at ``#/2/storeId``,

*7 issues truncated.*
#### [getRecentWorlds](/data/requests/worlds/getrecentworlds.md)


#### [getFavoritedWorlds](/data/requests/worlds/getfavoritedworlds.md)


#### [getWorldMetadata by id](/data/requests/worlds/getworldmetadata-by-id.md)


#### [getWorldPublishStatus by id](/data/requests/worlds/getworldpublishstatus-by-id.md)




## [Instances](/data/requests/instances)

#### [sendSelfInvite](/data/requests/instances/sendselfinvite.md)

Response schema mismatch:
* Unexpected property at ``#/error``,
* Unexpected property at ``#/status_code``.

#### [getShortName](/data/requests/instances/getshortname.md)

Response media type ``application/json; charset=utf-8`` not expected.

#### [getInstance](/data/requests/instances/getinstance.md)

Response schema mismatch:
* Unexpected property at ``#/platforms/ios``,
* Unexpected property at ``#/world/storeId``,
* Unexpected property at ``#/displayName``,

*3 issues truncated.*


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

#### [getSteamTransactions](/data/requests/economy/getsteamtransactions.md)

Response schema mismatch:
* Invalid type at ``#/0/agreement``,
* Invalid type at ``#/1/agreement``,
* Invalid type at ``#/2/agreement``.

#### [getCurrentSubscriptions](/data/requests/economy/getcurrentsubscriptions.md)


#### [getSubscriptions](/data/requests/economy/getsubscriptions.md)




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

#### [getGroupInvites](/data/requests/groups/getgroupinvites.md)

Response schema mismatch:
* Unexpected property at ``#/0/acceptedByDisplayName``,
* Unexpected property at ``#/0/acceptedById``.

#### [getGroup](/data/requests/groups/getgroup.md)

Response schema mismatch:
* Unexpected property at ``#/badges``.

#### [createGroup](/data/requests/groups/creategroup.md)


#### [getGroupMembers](/data/requests/groups/getgroupmembers.md)


#### [updateGroup](/data/requests/groups/updategroup.md)


#### [createGroupInvite](/data/requests/groups/creategroupinvite.md)


#### [deleteGroupInvite](/data/requests/groups/deletegroupinvite.md)


#### [deleteGroup](/data/requests/groups/deletegroup.md)




## [Notifications](/data/requests/notifications)

#### [getNotifications](/data/requests/notifications/getnotifications.md)




## [Permissions](/data/requests/permissions)

#### [getAssignedPermissions](/data/requests/permissions/getassignedpermissions.md)

Response schema mismatch:
* Unexpected property at ``#/0data/max``,
* Unexpected property at ``#/3data/max``,
* Unexpected property at ``#/5/displayName``,

*6 issues truncated.*
#### [getPermission](/data/requests/permissions/getpermission.md)




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
* Invalid type at ``#/0/endDate``,

*872 issues truncated.*
#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Invalid type at ``#/0/startDate``,
* Invalid type at ``#/0/endDate``,
* Unexpected property at ``#/0/regions``,

*17 issues truncated.*
#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Unexpected property at ``#/RolloutBlock``,
* Unexpected property at ``#/alertDebounce``,
* Unexpected property at ``#/analyticsSegment_NewUI_PctOfUsers``,

*33 issues truncated.*
#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)


#### [getSystemTime](/data/requests/system/getsystemtime.md)




