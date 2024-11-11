# Groups

## Search Group
Searches Groups by name or shortCode

> Missing coverage.
## Create Group
Creates a Group and returns a Group object. **Requires VRC+ Subscription.**

* [createGroup](./creategroup.md)
## Delete Group
Deletes a Group.

* [deleteGroup](./deletegroup.md)
## Get Group by ID
Returns a single Group by ID.

* [getGroup](./getgroup.md)
## Update Group
Updates a Group and returns it.

* [updateGroup](./updategroup.md)
## Delete Group Announcement
Deletes the announcement for a Group.

> Missing coverage.
## Get Group Announcement
Returns the announcement for a Group.
If no announcement has been made, then it returns **empty object**. 
If an announcement exists, then it will always return all fields except `imageId` and `imageUrl` which may be null.

> Missing coverage.
## Create Group Announcement
Creates an Announcement for a Group. Warning: This will also remove all announcements. To make proper announcements, use the posts endpoint instead

> Missing coverage.
## Get Group Audit Logs
Returns a list of audit logs for a Group.

> Missing coverage.
## Get Group Bans
Returns a list of banned users for a Group.

> Missing coverage.
## Ban Group Member
Bans a user from a Group.

> Missing coverage.
## Unban Group Member
Unbans a user from a Group.

> Missing coverage.
## Create Group Gallery
Creates a gallery for a Group.

> Missing coverage.
## Delete Group Gallery
Deletes a gallery for a Group.

> Missing coverage.
## Get Group Gallery Images
Returns a list of images for a Group gallery.

> Missing coverage.
## Update Group Gallery
Updates a gallery for a Group.

> Missing coverage.
## Add Group Gallery Image
Adds an image to a Group gallery.

> Missing coverage.
## Delete Group Gallery Image
Deletes an image from a Group gallery.

> Missing coverage.
## Get Group Instances
Returns a list of group instances

> Missing coverage.
## Get Group Invites Sent
Returns a list of members that have been invited to the Group.

* [getGroupInvites](./getgroupinvites.md)
## Invite User to Group
Sends an invite to a user to join the group.

* [createGroupInvite](./creategroupinvite.md)
## Delete User Invite
Deletes an Group invite sent to a User

* [deleteGroupInvite](./deletegroupinvite.md)
## Join Group
Join a Group by ID and returns the member object.

> Missing coverage.
## Leave Group
Leave a group by ID.

> Missing coverage.
## List Group Members
Returns a List of all **other** Group Members. This endpoint will never return the user calling the endpoint.
Information about the user calling the endpoint must be found in the `myMember` field of the Group object.

* [getGroupMembers](./getgroupmembers.md)
## Kick Group Member
Kicks a Group Member from the Group. The current user must have the "Remove Group Members" permission.

> Missing coverage.
## Get Group Member
Returns a LimitedGroup Member.

> Missing coverage.
## Update Group Member
Updates a Group Member

> Missing coverage.
## Remove Role from GroupMember
Removes a Role from a Group Member

> Missing coverage.
## Add Role to GroupMember
Adds a Role to a Group Member

> Missing coverage.
## List Group Permissions
Returns a List of all possible/available permissions for a Group.

> Missing coverage.
## Get posts from a Group
Get posts from a Group

> Missing coverage.
## Create a post in a Group
Create a post in a Group.

> Missing coverage.
## Delete a Group post
Delete a Group post

> Missing coverage.
## Edits a Group post
Edits a Group post

> Missing coverage.
## Cancel Group Join Request
Cancels a request sent to join the group.

> Missing coverage.
## Get Group Join Requests
Returns a list of members that have requested to join the Group.

> Missing coverage.
## Respond Group Join request
Responds to a Group Join Request with Accept/Deny

> Missing coverage.
## Get Group Roles
Returns a Group Role by ID.

> Missing coverage.
## Create GroupRole
Create a Group role.

> Missing coverage.
## Delete Group Role
Deletes a Group Role by ID and returns the remaining roles.

> Missing coverage.
## Update Group Role
Updates a group role by ID.

> Missing coverage.
	