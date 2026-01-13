# Overview

## [Authentication](/data/requests/authentication)

#### [getCurrentUser with username and password (expect fail)](/data/requests/authentication/getcurrentuser-with-username-and-password-(expect-fail).md)

Response schema mismatch:
* Missing property at ``#/acceptedTOSVersion``,
* Missing property at ``#/ageVerificationStatus``,
* Missing property at ``#/ageVerified``,

*46 issues truncated.*
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

#### [updateUserNote](/data/requests/users/updateusernote.md)


#### [getUserNote](/data/requests/users/getusernote.md)


#### [searchUsers without parameters](/data/requests/users/searchusers-without-parameters.md)


#### [searchUsers](/data/requests/users/searchusers.md)


#### [searchUsers with limit](/data/requests/users/searchusers-with-limit.md)


#### [getUser](/data/requests/users/getuser.md)


#### [getUserFeedback](/data/requests/users/getuserfeedback.md)


#### [getUserNotes](/data/requests/users/getusernotes.md)




## [Worlds](/data/requests/worlds)

#### [getWorld by id](/data/requests/worlds/getworld-by-id.md)


#### [getWorldInstance first listed instance](/data/requests/worlds/getworldinstance-first-listed-instance.md)


#### [searchWorlds](/data/requests/worlds/searchworlds.md)


#### [getActiveWorlds](/data/requests/worlds/getactiveworlds.md)


#### [getRecentWorlds](/data/requests/worlds/getrecentworlds.md)


#### [getFavoritedWorlds](/data/requests/worlds/getfavoritedworlds.md)


#### [getWorld (VRChat Home)](/data/requests/worlds/getworld-(vrchat-home).md)


#### [getWorldMetadata by id](/data/requests/worlds/getworldmetadata-by-id.md)


#### [getWorldPublishStatus by id](/data/requests/worlds/getworldpublishstatus-by-id.md)




## [Instances](/data/requests/instances)

#### [getInstance](/data/requests/instances/getinstance.md)


#### [getShortName](/data/requests/instances/getshortname.md)


#### [getInstanceByShortName secure name is a valid short name](/data/requests/instances/getinstancebyshortname-secure-name-is-a-valid-short-name.md)


#### [createInstance](/data/requests/instances/createinstance.md)




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




## [Calendar](/data/requests/calendar)

#### [createGroupCalendarEvent](/data/requests/calendar/creategroupcalendarevent.md)


#### [getCalendarEvents](/data/requests/calendar/getcalendarevents.md)


#### [getFeaturedCalendarEvents](/data/requests/calendar/getfeaturedcalendarevents.md)


#### [followGroupCalendarEvent](/data/requests/calendar/followgroupcalendarevent.md)


#### [getFollowedCalendarEvents](/data/requests/calendar/getfollowedcalendarevents.md)


#### [getGroupCalendarEvents](/data/requests/calendar/getgroupcalendarevents.md)


#### [getGroupCalendarEvent](/data/requests/calendar/getgroupcalendarevent.md)


#### [updateGroupCalendarEvent](/data/requests/calendar/updategroupcalendarevent.md)


#### [getGroupCalendarEventICS](/data/requests/calendar/getgroupcalendareventics.md)


#### [deleteGroupCalendarEvent](/data/requests/calendar/deletegroupcalendarevent.md)


#### [searchCalendarEvents](/data/requests/calendar/searchcalendarevents.md)




## [Economy](/data/requests/economy)

#### [getStoreShelves](/data/requests/economy/getstoreshelves.md)

Response schema mismatch:
* Invalid type at ``#/0highlightListing/products/0``,
* Invalid type at ``#/0highlightListing/products/1``,
* Invalid type at ``#/0highlightListing/products/2``,

*38 issues truncated.*
#### [getStore](/data/requests/economy/getstore.md)

Response schema mismatch:
* Invalid type at ``#/shelves/0highlightListing/products/0``,
* Invalid type at ``#/shelves/0highlightListing/products/1``,
* Invalid type at ``#/shelves/0highlightListing/products/2``,

*38 issues truncated.*
#### [getProductListings](/data/requests/economy/getproductlistings.md)

Response schema mismatch:
* Unexpected property at ``#/0hydratedProducts/0/imageUrl``,
* Unexpected property at ``#/0hydratedProducts/0/productTypeLabel``,
* Unexpected property at ``#/0hydratedProducts/1/imageUrl``,

*3149 issues truncated.*
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


#### [getUserSubscriptionEligible](/data/requests/economy/getusersubscriptioneligible.md)


#### [getSubscriptions](/data/requests/economy/getsubscriptions.md)


#### [getLicenseGroup](/data/requests/economy/getlicensegroup.md)


#### [getTokenBundles](/data/requests/economy/gettokenbundles.md)


#### [getTiliaStatus](/data/requests/economy/gettiliastatus.md)


#### [getTiliaTos](/data/requests/economy/gettiliatos.md)


#### [getBalance](/data/requests/economy/getbalance.md)


#### [getBalanceEarnings](/data/requests/economy/getbalanceearnings.md)


#### [getEconomyAccount](/data/requests/economy/geteconomyaccount.md)


#### [getActiveLicenses](/data/requests/economy/getactivelicenses.md)




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

#### [getInventory](/data/requests/inventory/getinventory.md)


#### [getOwnInventoryItem](/data/requests/inventory/getowninventoryitem.md)


#### [getInventoryDrops](/data/requests/inventory/getinventorydrops.md)


#### [getInventoryTemplate](/data/requests/inventory/getinventorytemplate.md)


#### [spawnInventoryItem](/data/requests/inventory/spawninventoryitem.md)




## [Invite](/data/requests/invite)

#### [getInviteMessage](/data/requests/invite/getinvitemessage.md)


#### [resetInviteMessage message slot 0 reset](/data/requests/invite/resetinvitemessage-message-slot-0-reset.md)


#### [resetInviteMessage message slot 0 reset rate limited](/data/requests/invite/resetinvitemessage-message-slot-0-reset-rate-limited.md)


#### [updateInviteMessage message slot 0 update](/data/requests/invite/updateinvitemessage-message-slot-0-update.md)


#### [updateInviteMessage message slot 0 update rate limited](/data/requests/invite/updateinvitemessage-message-slot-0-update-rate-limited.md)


#### [inviteMyselfTo](/data/requests/invite/invitemyselfto.md)


#### [getInviteMessages](/data/requests/invite/getinvitemessages.md)




## [Notifications](/data/requests/notifications)

#### [getNotifications](/data/requests/notifications/getnotifications.md)




## [Permissions](/data/requests/permissions)

#### [getAssignedPermissions](/data/requests/permissions/getassignedpermissions.md)


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

*1522 issues truncated.*
#### [getInfoPush](/data/requests/system/getinfopush.md)

Response schema mismatch:
* Cannot fit value in explicit enum at ``#/0/data/onPressed/command``,
* Unexpected property at ``#/0/regions``,
* Unexpected property at ``#/0/requireClientTags``,

*41 issues truncated.*
#### [getConfig](/data/requests/system/getconfig.md)

Response schema mismatch:
* Unexpected property at ``#/audioConfig/nearFieldILDNudgeEarTranslate``,
* Unexpected property at ``#/audioConfig/useLegacyILDNudging``,
* Missing property at ``#/minSupportedClientBuildNumber/QuestAppLab``,

*25 issues truncated.*
#### [getCurrentOnlineUsers](/data/requests/system/getcurrentonlineusers.md)


#### [getSystemTime](/data/requests/system/getsystemtime.md)




