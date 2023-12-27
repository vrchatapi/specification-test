import { failUnauthenticated, test, testOperation } from "./_utilities";

test.before(failUnauthenticated);

test("Without parameters", testOperation, "searchUsers", {
        statusCode: 400
});

test(testOperation, "searchUsers", {
    statusCode: 200,
    parameters: {
        search: "tupper",
        
    }
}, (t) => {
    const { context } = t;

    t.is.not(context.body.length, 0, "Should contain atleast 1 user")
}
);

test("Search users with limit", testOperation, "searchUsers", {
    statusCode: 200,
    parameters: {
        search: "a",
        n: 5,
        
    }
}, (t) => {
    const { context } = t;

    t.is(context.body.length, 5, "Should contain exactly 5 users")
}
);

test(testOperation, "getUser", {
    statusCode: 200,
    parameters: {
        userId: "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469"
    }
}, (t) => {
    const { context } = t;

    t.is(context.body.id, "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469", "Should be - usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469")
}
);

test("Without parameters", testOperation, "getUser", {
    statusCode: 400,
});

test.todo("Update User Info");
test.todo("Get User Groups");
test.todo("Get User Group Requests");
