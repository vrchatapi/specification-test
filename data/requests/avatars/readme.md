# Avatars

## Get Own Avatar
Get the current avatar for the user. This will return an error for any other user than the one logged in.
* [getOwnAvatar](./getownavatar.md)

## Search Avatars
Search and list avatars by query filters. You can only search your own or featured avatars. It is not possible as a normal user to search other peoples avatars.
* [searchAvatars with zero parameters](./searchavatars-with-zero-parameters.md)
* [searchAvatars with admin_featured_legacy tag](./searchavatars-with-admin_featured_legacy-tag.md)

## Create Avatar
Create an avatar. It's possible to optionally specify a ID if you want a custom one. Attempting to create an Avatar with an already claimed ID will result in a DB error.
> Missing coverage.

## Delete Avatar
Delete an avatar. Notice an avatar is never fully "deleted", only its ReleaseStatus is set to "hidden" and the linked Files are deleted. The AvatarID is permanently reserved.
> Missing coverage.

## Get Avatar
Get information about a specific Avatar.
* [getAvatar by id](./getavatar-by-id.md)

## Update Avatar
Update information about a specific avatar.
> Missing coverage.

## Select Avatar
Switches into that avatar.
* [selectAvatar with id](./selectavatar-with-id.md)
* [selectAvatar with default avatar id](./selectavatar-with-default-avatar-id.md)

## Select Fallback Avatar
Switches into that avatar as your fallback avatar.
* [selectFallbackAvatar with id (not quest fallback)](./selectfallbackavatar-with-id-(not-quest-fallback).md)

## List Favorited Avatars
Search and list favorited avatars by query filters.
* [getFavoritedAvatars with zero parameters](./getfavoritedavatars-with-zero-parameters.md)

	