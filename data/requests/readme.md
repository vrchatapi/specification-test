# Overview

## [Authentication](/data/requests/authentication)

#### [getCurrentUser after logout to log back in](/data/requests/authentication/getcurrentuser-after-logout-to-log-back-in.md)

Response schema mismatch:
* Unexpected property at ``#/pronounsHistory``.

#### [getCurrentUser after two-factor authentication](/data/requests/authentication/getcurrentuser-after-two-factor-authentication.md)

Response schema mismatch:
* Unexpected property at ``#/pronounsHistory``.

#### [getCurrentUser with username and password (expect fail)](/data/requests/authentication/getcurrentuser-with-username-and-password-(expect-fail).md)

Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/displayName``,
* Missing property at ``#/userIcon``,

*44 issues truncated.*
#### [getCurrentUser while missing credentials](/data/requests/authentication/getcurrentuser-while-missing-credentials.md)


#### [verify2FA while missing credentials](/data/requests/authentication/verify2fa-while-missing-credentials.md)


#### [verify2FA](/data/requests/authentication/verify2fa.md)


#### [verifyAuthToken](/data/requests/authentication/verifyauthtoken.md)


#### [checkUserExists with zero parameters](/data/requests/authentication/checkuserexists-with-zero-parameters.md)


#### [checkUserExists via email address](/data/requests/authentication/checkuserexists-via-email-address.md)


#### [checkUserExists via display name](/data/requests/authentication/checkuserexists-via-display-name.md)


#### [checkUserExists via username](/data/requests/authentication/checkuserexists-via-username.md)


#### [logout logout](/data/requests/authentication/logout-logout.md)




## [Users](/data/requests/users)

#### [updateUserNote](/data/requests/users/updateusernote.md)


#### [getUserNote](/data/requests/users/getusernote.md)


#### [searchUsers without parameters](/data/requests/users/searchusers-without-parameters.md)


#### [searchUsers](/data/requests/users/searchusers.md)


#### [searchUsers with limit](/data/requests/users/searchusers-with-limit.md)


#### [getUser](/data/requests/users/getuser.md)


#### [getUserFeedback](/data/requests/users/getuserfeedback.md)


#### [getUserNotes](/data/requests/users/getusernotes.md)




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

#### [selectFallbackAvatar with id](/data/requests/avatars/selectfallbackavatar-with-id.md)

Response schema mismatch:
* Unexpected property at ``#/pronounsHistory``.

#### [selectAvatar with default avatar id](/data/requests/avatars/selectavatar-with-default-avatar-id.md)

Response schema mismatch:
* Unexpected property at ``#/pronounsHistory``.

#### [selectAvatar with id](/data/requests/avatars/selectavatar-with-id.md)

Response schema mismatch:
* Unexpected property at ``#/pronounsHistory``.

#### [getAvatar by id](/data/requests/avatars/getavatar-by-id.md)

Response schema mismatch:
* Unexpected property at ``#/listingDate``.

#### [searchAvatars with admin_featured_legacy tag](/data/requests/avatars/searchavatars-with-admin_featured_legacy-tag.md)

Response schema mismatch:
* Unexpected property at ``#/0/listingDate``,
* Unexpected property at ``#/1/listingDate``,
* Unexpected property at ``#/2/listingDate``,

*7 issues truncated.*
#### [getOwnAvatar](/data/requests/avatars/getownavatar.md)

Response schema mismatch:
* Unexpected property at ``#/listingDate``.

#### [searchAvatars with zero parameters](/data/requests/avatars/searchavatars-with-zero-parameters.md)


#### [selectFallbackAvatar with id (not quest fallback)](/data/requests/avatars/selectfallbackavatar-with-id-(not-quest-fallback).md)


#### [getFavoritedAvatars with zero parameters](/data/requests/avatars/getfavoritedavatars-with-zero-parameters.md)




## [Economy](/data/requests/economy)

#### [getTokenBundles](/data/requests/economy/gettokenbundles.md)

Response schema mismatch:
* Unexpected property at ``#/0/appleProductId``,
* Unexpected property at ``#/1/appleProductId``,
* Unexpected property at ``#/2/appleProductId``,

*5 issues truncated.*
#### [getProductListings](/data/requests/economy/getproductlistings.md)

Response schema mismatch:
* Missing property at ``#/0/archived``,
* Missing property at ``#/0/created``,
* Missing property at ``#/0/groupIcon``,

*3055 issues truncated.*
#### [getProductListing](/data/requests/economy/getproductlisting.md)

Response schema mismatch:
* Missing property at ``#/archived``,
* Missing property at ``#/created``,
* Missing property at ``#/instant``,

*14 issues truncated.*
#### [getSteamTransaction](/data/requests/economy/getsteamtransaction.md)

Response schema mismatch:
* Invalid type at ``#/agreement``,
* Invalid type at ``#/error``.

#### [getSteamTransactions](/data/requests/economy/getsteamtransactions.md)

Response schema mismatch:
* Invalid type at ``#/0/agreement``,
* Invalid type at ``#/0/error``,
* Invalid type at ``#/1/agreement``,

*3 issues truncated.*
#### [getCurrentSubscriptions](/data/requests/economy/getcurrentsubscriptions.md)


#### [getSubscriptions](/data/requests/economy/getsubscriptions.md)


#### [getLicenseGroup](/data/requests/economy/getlicensegroup.md)


#### [getTiliaStatus](/data/requests/economy/gettiliastatus.md)


#### [getTiliaTos](/data/requests/economy/gettiliatos.md)


#### [getBalance](/data/requests/economy/getbalance.md)




## [Favorites](/data/requests/favorites)

#### [getFavorites](/data/requests/favorites/getfavorites.md)


#### [addFavorite](/data/requests/favorites/addfavorite.md)


#### [getFavorites after favorite add](/data/requests/favorites/getfavorites-after-favorite-add.md)


#### [removeFavorite](/data/requests/favorites/removefavorite.md)


#### [getFavoriteGroups](/data/requests/favorites/getfavoritegroups.md)


#### [getFavoriteGroup](/data/requests/favorites/getfavoritegroup.md)


#### [updateFavoriteGroup](/data/requests/favorites/updatefavoritegroup.md)


#### [getFavoriteLimits](/data/requests/favorites/getfavoritelimits.md)




## [Files](/data/requests/files)

#### [getFileAnalysisStandard](/data/requests/files/getfileanalysisstandard.md)

Response schema mismatch:
* Unexpected property at ``#/avatarStats/constraintDepth``.

#### [getFileAnalysisSecurity](/data/requests/files/getfileanalysissecurity.md)

Response schema mismatch:
* Unexpected property at ``#/avatarStats/constraintDepth``.

#### [getFileAnalysis](/data/requests/files/getfileanalysis.md)

Response schema mismatch:
* Unexpected property at ``#/avatarStats/constraintDepth``.

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
* Unexpected property at ``#/0/isSubscribedToEventAnnouncements``.

#### [updateGroup](/data/requests/groups/updategroup.md)

Response schema mismatch:
* Unexpected property at ``#/myMember/isSubscribedToEventAnnouncements``.

#### [getGroup](/data/requests/groups/getgroup.md)

Response schema mismatch:
* Unexpected property at ``#/myMember/isSubscribedToEventAnnouncements``.

#### [createGroup](/data/requests/groups/creategroup.md)

Response schema mismatch:
* Unexpected property at ``#/myMember/isSubscribedToEventAnnouncements``.

#### [getGroupMembers](/data/requests/groups/getgroupmembers.md)


#### [createGroupInvite](/data/requests/groups/creategroupinvite.md)


#### [updateGroupRepresentation](/data/requests/groups/updategrouprepresentation.md)


#### [updateGroupRepresentation with group user is not a member of](/data/requests/groups/updategrouprepresentation-with-group-user-is-not-a-member-of.md)


#### [updateGroupRepresentation with invalid group](/data/requests/groups/updategrouprepresentation-with-invalid-group.md)


#### [deleteGroupInvite](/data/requests/groups/deletegroupinvite.md)


#### [deleteGroup](/data/requests/groups/deletegroup.md)




## [Notifications](/data/requests/notifications)

#### [getNotifications](/data/requests/notifications/getnotifications.md)




## [Permissions](/data/requests/permissions)

#### [getAssignedPermissions](/data/requests/permissions/getassignedpermissions.md)

Response schema mismatch:
* Unexpected property at ``#/1data/max``,
* Unexpected property at ``#/2data/max``,
* Unexpected property at ``#/3data/max``,

*8 issues truncated.*
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
* Unexpected property at ``#/0data/contentList/marketplace``,
* Unexpected property at ``#/0data/contentList/minPrice``,
* Unexpected property at ``#/0data/contentList/params``,

*1313 issues truncated.*
#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Invalid type at ``#/0/startDate``,
* Invalid type at ``#/0/endDate``,

*36 issues truncated.*
#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Unexpected property at ``#/events/useDirectPlayerSerialization``,
* Unexpected property at ``#/reportCategories/groupstore/groupOrder``,
* Unexpected property at ``#/reportCategories/image/groupOrder``,

*29 issues truncated.*
#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)


#### [getSystemTime](/data/requests/system/getsystemtime.md)




