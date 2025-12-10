# Calendar

## List calendar events
Get a list of a user's calendar events for the month in ?date

* [getCalendarEvents](./getcalendarevents.md)
## Discover calendar events
Get a list of calendar events
Initially, call without a `nextCursor` parameter
For every successive call, use the `nextCursor` property returned in the previous call & the `number` of entries desired for this call
The `nextCursor` internally keeps track of the `offset` of the results, the initial request parameters, and accounts for discrepancies that might arise from time elapsed between calls

> Missing coverage.
## List featured calendar events
Get a list of a featured calendar events for the month in ?date

* [getFeaturedCalendarEvents](./getfeaturedcalendarevents.md)
## List followed calendar events
Get a list of a followed calendar events for the month in ?date

* [getFollowedCalendarEvents](./getfollowedcalendarevents.md)
## Search for calendar events
Get a list of calendar events by search terms

* [searchCalendarEvents](./searchcalendarevents.md)
## List a group's calendar events
Get a list of a group's calendar events

* [getGroupCalendarEvents](./getgroupcalendarevents.md)
## Create a calendar event
Creates an event for a group on the calendar

* [createGroupCalendarEvent](./creategroupcalendarevent.md)
## Get next calendar event
Get the closest future calendar event scheduled for a group

> Missing coverage.
## Delete a calendar event
Delete a group calendar event

* [deleteGroupCalendarEvent](./deletegroupcalendarevent.md)
## Get a calendar event
Get a group calendar event

* [getGroupCalendarEvent](./getgroupcalendarevent.md)
## Download calendar event as ICS
Returns the specified calendar in iCalendar (ICS) format.

* [getGroupCalendarEventICS](./getgroupcalendareventics.md)
## Update a calendar event
Updates an event for a group on the calendar

* [updateGroupCalendarEvent](./updategroupcalendarevent.md)
## Follow a calendar event
Follow or unfollow an event on a group's calendar

* [followGroupCalendarEvent](./followgroupcalendarevent.md)
	