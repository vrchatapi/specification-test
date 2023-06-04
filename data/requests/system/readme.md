# System

## Fetch API Config
API config contains configuration that the clients needs to work properly.

Currently the most important value here is `clientApiKey` which is used for all other API endpoints.
* [getConfig](./getconfig.md)

## Show Information Notices
IPS (Info Push System) is a system for VRChat to push out dynamic information to the client. This is primarily used by the Quick-Menu info banners, but can also be used to e.g. alert you to update your game to the latest version.

`include` is used to query what Information Pushes should be included in the response. If include is missing or empty, then no notices will normally be returned. This is an "any of" search.

`require` is used to limit what Information Pushes should be included in the response. This is usually used in combination with `include`, and is an "all of" search.
* [getInfoPush with zero parameters](./getinfopush-with-zero-parameters.md)
* [getInfoPush](./getinfopush.md)

## Download CSS
Fetches the CSS code to the frontend React website.
* [getCSS](./getcss.md)

## Download JavaScript
Fetches the JavaScript code to the frontend React website.
* [getJavaScript](./getjavascript.md)

## Check API Health
~~Gets the overall health status, the server name, and the current build version tag of the API.~~

**DEPRECATED:** VRChat has suddenly restricted this endpoint for unknown reasons, and now always return 401 Unauthorized.
> Missing coverage.

## Current Online Users
Returns the current number of online users.

**NOTE:** The response type is not a JSON object, but a simple JSON integer.
* [getCurrentOnlineUsers](./getcurrentonlineusers.md)

## Current System Time
Returns the current time of the API server.

**NOTE:** The response type is not a JSON object, but a simple JSON string.
* [getSystemTime](./getsystemtime.md)

	