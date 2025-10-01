# Invite

## Invite User
Sends an invite to a user. Returns the Notification of type `invite` that was sent.

> Missing coverage.
## Invite User with photo
Sends an photo invite to a user. Returns the Notification of type `invite` that was sent.

> Missing coverage.
## Invite Myself To Instance
Sends self an invite to an instance

* [inviteMyselfTo](./invitemyselfto.md)
## Request Invite
Requests an invite from a user. Returns the Notification of type `requestInvite` that was sent.

> Missing coverage.
## Request Invite with photo
Requests with photo an invite from a user. Returns the Notification of type `requestInvite` that was sent.

> Missing coverage.
## Respond Invite
Respond to an invite or invite request without accepting it. `:notificationId` is the ID of the requesting notification.

In case the notification being replied to is an invite, the `responseSlot` refers to a response message from the the `message` collection.
In case the notification is an invite request, it will refer to one from the `requestResponse` collection instead.

> Missing coverage.
## Respond Invite with photo
Respond with photo to an invite or invite request without accepting it. `:notificationId` is the ID of the requesting notification.

In case the notification being replied to is an invite, the `responseSlot` refers to a response message from the the `message` collection.
In case the notification is an invite request, it will refer to one from the `requestResponse` collection instead.'

> Missing coverage.
## List Invite Messages
Returns a list of all the users Invite Messages. Admin Credentials are required to view messages of other users!

Message type refers to a different collection of messages, used during different types of responses.

* `message` = Message during a normal invite
* `response` = Message when replying to a message
* `request` = Message when requesting an invite
* `requestResponse` = Message when replying to a request for invite

* [getInviteMessages](./getinvitemessages.md)
## Reset Invite Message
Resets a single Invite Message back to its original message, and then returns a list of all of them. Admin Credentials are required to update messages of other users!

Resetting a message respects the rate-limit, so it is not possible to reset within the 60 minutes countdown.
Resetting it does however not set the rate-limit to 60 like when editing it.
It is possible to edit it right after resetting it.
Trying to edit a message before the cooldown timer expires results in a 429 "Too Fast Error".

Message type refers to a different collection of messages, used during different types of responses.

* `message` = Message during a normal invite
* `response` = Message when replying to a message
* `request` = Message when requesting an invite
* `requestResponse` = Message when replying to a request for invite

The DELETE endpoint does not have/require any request body.

* [resetInviteMessage message slot 0 reset](./resetinvitemessage-message-slot-0-reset.md)
* [resetInviteMessage message slot 0 reset rate limited](./resetinvitemessage-message-slot-0-reset-rate-limited.md)
## Get Invite Message
Returns a single Invite Message. This returns the exact same information but less than `getInviteMessages`. Admin Credentials are required to view messages of other users!

Message type refers to a different collection of messages, used during different types of responses.

* `message` = Message during a normal invite
* `response` = Message when replying to a message
* `request` = Message when requesting an invite
* `requestResponse` = Message when replying to a request for invite

* [getInviteMessage](./getinvitemessage.md)
## Update Invite Message
Updates a single Invite Message and then returns a list of all of them. Admin Credentials are required to update messages of other users!

Updating a message automatically sets the cooldown timer to 60 minutes.
Trying to edit a message before the cooldown timer expires results in a 429 "Too Fast Error".

Message type refers to a different collection of messages, used during different types of responses.

* `message` = Message during a normal invite
* `response` = Message when replying to a message
* `request` = Message when requesting an invite
* `requestResponse` = Message when replying to a request for invite

* [updateInviteMessage message slot 0 update](./updateinvitemessage-message-slot-0-update.md)
* [updateInviteMessage message slot 0 update rate limited](./updateinvitemessage-message-slot-0-update-rate-limited.md)
	