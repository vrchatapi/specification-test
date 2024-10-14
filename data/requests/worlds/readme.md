# Worlds

## Search All Worlds
Search and list any worlds by query filters.

* [searchWorlds](./searchworlds.md)
## Create World
Create a new world. This endpoint requires `assetUrl` to be a valid File object with `.vrcw` file extension, and `imageUrl` to be a valid File object with an image file extension.

> Missing coverage.
## List Active Worlds
Search and list currently Active worlds by query filters.

* [getActiveWorlds](./getactiveworlds.md)
## List Favorited Worlds
Search and list favorited worlds by query filters.

* [getFavoritedWorlds](./getfavoritedworlds.md)
## List Recent Worlds
Search and list recently visited worlds by query filters.

* [getRecentWorlds](./getrecentworlds.md)
## Delete World
Delete a world. Notice a world is never fully "deleted", only its ReleaseStatus is set to "hidden" and the linked Files are deleted. The WorldID is permanently reserved.

> Missing coverage.
## Get World by ID
Get information about a specific World.
Works unauthenticated but when so will always return `0` for certain fields.

* [getWorld by id](./getworld-by-id.md)
* [getWorld (VRChat Home)](./getworld-(vrchat-home).md)
## Update World
Update information about a specific World.

> Missing coverage.
## Get World Metadata
Return a worlds custom metadata. This is currently believed to be unused. Metadata can be set with `updateWorld` and can be any arbitrary object.

* [getWorldMetadata by id](./getworldmetadata-by-id.md)
## Unpublish World
Unpublish a world.

> Missing coverage.
## Get World Publish Status
Returns a worlds publish status.

* [getWorldPublishStatus by id](./getworldpublishstatus-by-id.md)
## Publish World
Publish a world. You can only publish one world per week.

> Missing coverage.
## Get World Instance
Returns a worlds instance.

> Missing coverage.
	