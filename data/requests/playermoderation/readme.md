# Playermoderation

## Clear All Player Moderations
⚠️ **This will delete every single player moderation you've ever made.**

* [clearAllPlayerModerations](./clearallplayermoderations.md)
## Search Player Moderations
Returns a list of all player moderations made by **you**.

This endpoint does not have pagination, and will return *all* results. Use query parameters to limit your query if needed.

* [getPlayerModerations](./getplayermoderations.md)
* [getPlayerModerations with filter](./getplayermoderations-with-filter.md)
## Moderate User
Moderate a user, e.g. unmute them or show their avatar.

Please see the [Player Moderation docs](https://vrchatapi.github.io/docs/api/#tag--playermoderation) on what playerModerations are, and how they differ from staff moderations.

* [moderateUser](./moderateuser.md)
## Unmoderate User
Removes a player moderation previously added through `moderateUser`. E.g if you previously have shown their avatar, but now want to reset it to default.

> Missing coverage.
	