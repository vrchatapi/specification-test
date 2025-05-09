# Friends

## List Friends
List information about friends.

* [getFriends](./getfriends.md)
## Delete Friend Request
Deletes an outgoing pending friend request to another user. To delete an incoming friend request, use the `deleteNotification` endpoint instead.

* [deleteFriendRequest](./deletefriendrequest.md)
## Send Friend Request
Send a friend request to another user.

* [friend](./friend.md)
## Check Friend Status
Retrieve if the user is currently a friend with a given user, if they have an outgoing friend request, and if they have an incoming friend request. The proper way to receive and accept friend request is by checking if the user has an incoming `Notification` of type `friendRequest`, and then accepting that notification.

* [getFriendStatus prior to friend request](./getfriendstatus-prior-to-friend-request.md)
* [getFriendStatus after friend request](./getfriendstatus-after-friend-request.md)
* [getFriendStatus after deleting friend request](./getfriendstatus-after-deleting-friend-request.md)
## Unfriend
Unfriend a user by ID.

> Missing coverage.
	