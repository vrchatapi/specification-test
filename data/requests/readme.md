# Overview

## [Authentication](/data/requests/authentication)

#### [getCurrentUser after logout to log back in](/data/requests/authentication/getcurrentuser-after-logout-to-log-back-in.md)

Response schema mismatch:
* Unexpected property at ``#/discordDetails``,
* Unexpected property at ``#/discordId``.

#### [getCurrentUser after two-factor authentication](/data/requests/authentication/getcurrentuser-after-two-factor-authentication.md)

Response schema mismatch:
* Unexpected property at ``#/discordDetails``,
* Unexpected property at ``#/discordId``.

#### [getCurrentUser with username and password (expect fail)](/data/requests/authentication/getcurrentuser-with-username-and-password-(expect-fail).md)

Response schema mismatch:
* Missing property at ``#/id``,
* Missing property at ``#/displayName``,
* Missing property at ``#/userIcon``,

*45 issues truncated.*
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

#### [getWorldInstance first listed instance](/data/requests/worlds/getworldinstance-first-listed-instance.md)

Response schema mismatch:
* Unexpected property at ``#/calendarEntryId``.

#### [getWorld by id](/data/requests/worlds/getworld-by-id.md)


#### [searchWorlds](/data/requests/worlds/searchworlds.md)


#### [getActiveWorlds](/data/requests/worlds/getactiveworlds.md)


#### [getRecentWorlds](/data/requests/worlds/getrecentworlds.md)


#### [getFavoritedWorlds](/data/requests/worlds/getfavoritedworlds.md)


#### [getWorld (VRChat Home)](/data/requests/worlds/getworld-(vrchat-home).md)


#### [getWorldMetadata by id](/data/requests/worlds/getworldmetadata-by-id.md)


#### [getWorldPublishStatus by id](/data/requests/worlds/getworldpublishstatus-by-id.md)




## [Instances](/data/requests/instances)

#### [getInstanceByShortName secure name is a valid short name](/data/requests/instances/getinstancebyshortname-secure-name-is-a-valid-short-name.md)

Response schema mismatch:
* Missing property at ``#/active``,
* Missing property at ``#/canRequestInvite``,
* Missing property at ``#/capacity``,

*26 issues truncated.*
#### [getInstance](/data/requests/instances/getinstance.md)

Response schema mismatch:
* Unexpected property at ``#/creatorId``.

#### [getShortName](/data/requests/instances/getshortname.md)


#### [createInstance](/data/requests/instances/createinstance.md)




## [Avatars](/data/requests/avatars)

#### [selectFallbackAvatar with id](/data/requests/avatars/selectfallbackavatar-with-id.md)

Response schema mismatch:
* Unexpected property at ``#/discordDetails``,
* Unexpected property at ``#/discordId``.

#### [selectAvatar with default avatar id](/data/requests/avatars/selectavatar-with-default-avatar-id.md)

Response schema mismatch:
* Unexpected property at ``#/discordDetails``,
* Unexpected property at ``#/discordId``.

#### [selectAvatar with id](/data/requests/avatars/selectavatar-with-id.md)

Response schema mismatch:
* Unexpected property at ``#/discordDetails``,
* Unexpected property at ``#/discordId``.

#### [getOwnAvatar](/data/requests/avatars/getownavatar.md)


#### [searchAvatars with zero parameters](/data/requests/avatars/searchavatars-with-zero-parameters.md)


#### [searchAvatars with admin_featured_legacy tag](/data/requests/avatars/searchavatars-with-admin_featured_legacy-tag.md)


#### [getAvatar by id](/data/requests/avatars/getavatar-by-id.md)


#### [selectFallbackAvatar with id (not quest fallback)](/data/requests/avatars/selectfallbackavatar-with-id-(not-quest-fallback).md)


#### [getFavoritedAvatars with zero parameters](/data/requests/avatars/getfavoritedavatars-with-zero-parameters.md)




## [Calendar](/data/requests/calendar)

#### [updateGroupCalendarEvent](/data/requests/calendar/updategroupcalendarevent.md)

Response schema mismatch:
* Unexpected property at ``#/durationInMs``.

#### [getGroupCalendarEvent](/data/requests/calendar/getgroupcalendarevent.md)

Response schema mismatch:
* Unexpected property at ``#/durationInMs``.

#### [getGroupCalendarEvents](/data/requests/calendar/getgroupcalendarevents.md)

Response schema mismatch:
* Unexpected property at ``#/results/0/durationInMs``.

#### [followGroupCalendarEvent](/data/requests/calendar/followgroupcalendarevent.md)

Response schema mismatch:
* Unexpected property at ``#/durationInMs``.

#### [getFeaturedCalendarEvents](/data/requests/calendar/getfeaturedcalendarevents.md)

Response schema mismatch:
* Unexpected property at ``#/results/0/durationInMs``,
* Unexpected property at ``#/results/1/durationInMs``,
* Unexpected property at ``#/results/2/durationInMs``,

*50 issues truncated.*
#### [createGroupCalendarEvent](/data/requests/calendar/creategroupcalendarevent.md)

Response schema mismatch:
* Unexpected property at ``#/durationInMs``.

#### [getCalendarEvents](/data/requests/calendar/getcalendarevents.md)


#### [getFollowedCalendarEvents](/data/requests/calendar/getfollowedcalendarevents.md)


#### [getGroupCalendarEventICS](/data/requests/calendar/getgroupcalendareventics.md)


#### [deleteGroupCalendarEvent](/data/requests/calendar/deletegroupcalendarevent.md)




## [Economy](/data/requests/economy)

#### [getProductListings](/data/requests/economy/getproductlistings.md)

Response schema mismatch:
* Missing property at ``#/0hydratedProducts/0/archived``,
* Missing property at ``#/0hydratedProducts/0/created``,
* Missing property at ``#/0hydratedProducts/0/updated``,

*3369 issues truncated.*
#### [getProductListing](/data/requests/economy/getproductlisting.md)

Response schema mismatch:
* Invalid type at ``#/products/0``,
* Invalid type at ``#/products/1``,
* Invalid type at ``#/products/2``,

*7 issues truncated.*
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


#### [getTokenBundles](/data/requests/economy/gettokenbundles.md)


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

#### [getFiles without data](/data/requests/files/getfiles-without-data.md)


#### [createFile](/data/requests/files/createfile.md)


#### [getFiles](/data/requests/files/getfiles.md)


#### [getFile](/data/requests/files/getfile.md)


#### [downloadFileVersion](/data/requests/files/downloadfileversion.md)


#### [createFileVersion](/data/requests/files/createfileversion.md)


#### [deleteFileVersion](/data/requests/files/deletefileversion.md)


#### [deleteFile](/data/requests/files/deletefile.md)


#### [getFileAnalysis](/data/requests/files/getfileanalysis.md)


#### [getFileAnalysisSecurity](/data/requests/files/getfileanalysissecurity.md)


#### [getFileAnalysisStandard](/data/requests/files/getfileanalysisstandard.md)




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


#### [updateGroupRepresentation](/data/requests/groups/updategrouprepresentation.md)


#### [updateGroupRepresentation with group user is not a member of](/data/requests/groups/updategrouprepresentation-with-group-user-is-not-a-member-of.md)


#### [updateGroupRepresentation with invalid group](/data/requests/groups/updategrouprepresentation-with-invalid-group.md)


#### [deleteGroupInvite](/data/requests/groups/deletegroupinvite.md)


#### [deleteGroup](/data/requests/groups/deletegroup.md)




## [Inventory](/data/requests/inventory)

#### [getInventoryTemplate](/data/requests/inventory/getinventorytemplate.md)

Response schema mismatch:
* Unexpected property at ``#/defaultAttributes``,
* Unexpected property at ``#/equipSlots``,
* Unexpected property at ``#/validateUserAttributes``.

#### [getInventoryDrops](/data/requests/inventory/getinventorydrops.md)




## [Invite](/data/requests/invite)

#### [inviteMyselfTo](/data/requests/invite/invitemyselfto.md)

Response schema mismatch:
* Unexpected property at ``#/details/worldId``,
* Unexpected property at ``#/details/worldName``.

#### [getInviteMessage](/data/requests/invite/getinvitemessage.md)


#### [resetInviteMessage message slot 0 reset](/data/requests/invite/resetinvitemessage-message-slot-0-reset.md)


#### [resetInviteMessage message slot 0 reset rate limited](/data/requests/invite/resetinvitemessage-message-slot-0-reset-rate-limited.md)


#### [updateInviteMessage message slot 0 update](/data/requests/invite/updateinvitemessage-message-slot-0-update.md)


#### [updateInviteMessage message slot 0 update rate limited](/data/requests/invite/updateinvitemessage-message-slot-0-update-rate-limited.md)


#### [getInviteMessages](/data/requests/invite/getinvitemessages.md)




## [Notifications](/data/requests/notifications)

#### [getNotifications](/data/requests/notifications/getnotifications.md)




## [Permissions](/data/requests/permissions)

#### [getAssignedPermissions](/data/requests/permissions/getassignedpermissions.md)

Response schema mismatch:
* Unexpected property at ``#/2data/max``,
* Unexpected property at ``#/3data/max``,
* Unexpected property at ``#/4data/max``,

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
* Unexpected property at ``#/0data/contentList/anyStyle``,
* Unexpected property at ``#/0data/contentList/anyTag``,
* Unexpected property at ``#/0data/contentList/marketplace``,

*1411 issues truncated.*
#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Unexpected property at ``#/0/experiment``,
* Unexpected property at ``#/0/regions``,

*40 issues truncated.*
#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Unexpected property at ``#/events/useDirectPlayerSerialization``,
* Missing property at ``#/reportCategories/environment``,
* Missing property at ``#/reportCategories/warnings``,

*75 issues truncated.*
#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)


#### [getSystemTime](/data/requests/system/getsystemtime.md)




