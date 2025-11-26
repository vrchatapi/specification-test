import { failUnauthenticated, test, testOperation } from "./_utilities.js";
import { state, unstableValues } from "./_cache.js";
import { vrchatGroupId } from "./_consts.js";

test.before(failUnauthenticated);

const unstableCalendarKeys = [
	"id",
	"createdAt",
	"updatedAt",
	"deletedAt",
	"startsAt",
	"endsAt",
	"userInterest.createdAt",
	"userInterest.updatedAt"
];

const eventStartsAt = new Date(Date.now() + 3600000).toISOString();
const eventEndsAt = new Date(Date.now() + 7200000).toISOString();
unstableValues.add(eventStartsAt);
unstableValues.add(eventEndsAt);

test.serial(
	testOperation,
	"createGroupCalendarEvent",
	() => ({
		parameters: {
			groupId: vrchatGroupId
		},
		requestBody: {
			accessType: "group",

			category: "other",

			description: "Test Description",

			endsAt: eventEndsAt,

			sendCreationNotification: false,

			startsAt: eventStartsAt,
			// Fill with valid event data for your API
			title: "Test Event"
		},
		statusCode: 200,
		unstable: unstableCalendarKeys
	}),
	(t) => {
		state.set("calendarId", t.context.body.id);
		unstableValues.add(t.context.body.id);
	}
);

test.serial(testOperation, "getCalendarEvents", {
	statusCode: 200,
	unstable: true
});

test.serial(testOperation, "getFeaturedCalendarEvents", {
	statusCode: 200,
	unstable: true
});

test.serial(testOperation, "followGroupCalendarEvent", () => ({
	parameters: {
		calendarId: state.get("calendarId"),
		groupId: vrchatGroupId
	},
	requestBody: {
		isFollowing: true
	},
	statusCode: 200,
	unstable: unstableCalendarKeys
}));

test.serial(testOperation, "getFollowedCalendarEvents", {
	statusCode: 200,
	unstable: true
});

test.serial(testOperation, "getGroupCalendarEvents", () => ({
	parameters: {
		groupId: vrchatGroupId
	},
	statusCode: 200,
	unstable: true
}));

test.serial(testOperation, "getGroupCalendarEvent", () => ({
	parameters: {
		calendarId: state.get("calendarId"),
		groupId: vrchatGroupId
	},
	statusCode: 200,
	unstable: unstableCalendarKeys
}));

test.serial(
	testOperation,
	"updateGroupCalendarEvent",
	() => ({
		parameters: {
			calendarId: state.get("calendarId"),
			groupId: vrchatGroupId
		},
		requestBody: {
			title: "Updated Event Title"
		},
		statusCode: 200,
		unstable: unstableCalendarKeys
	}),
	(t) => {
		t.is(t.context.body.title, "Updated Event Title");
	}
);

test.serial(
	testOperation,
	"getGroupCalendarEventICS",
	() => ({
		parameters: {
			calendarId: "cal_00000000-0000-0000-0000-000000000000",
			groupId: vrchatGroupId
		},
		statusCode: 404
	}),
	(t) => {
		// "Calendar Entry not foundǃ"
		// Api responds with ǃ (U+01c3) instead of ! (U+0021).
		const normalized = t.context.body.error.message.replace(/\u01C3/g, "!");
		t.is(normalized, "Calendar Entry not found!");
	}
);

test.todo("Download calendar event as ICS");

test.serial(testOperation, "deleteGroupCalendarEvent", () => ({
	parameters: {
		calendarId: state.get("calendarId"),
		groupId: vrchatGroupId
	},
	statusCode: 200,
	unstable: unstableCalendarKeys
}));

test.serial(testOperation, "searchCalendarEvents", {
    parameters: {
				searchTerm: "game"
    },
	statusCode: 200,
	unstable: unstableCalendarKeys
});
