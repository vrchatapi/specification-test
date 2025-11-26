# Authentication

## Check User Exists
Checks if a user by a given `username`, `displayName` or `email` exist. This is used during registration to check if a username has already been taken, during change of displayName to check if a displayName is available, and during change of email to check if the email is already used. In the later two cases the `excludeUserId` is used to exclude oneself, otherwise the result would always be true.

It is **REQUIRED** to include **AT LEAST** `username`, `displayName` **or** `email` query parameter. Although they can be combined - in addition with `excludeUserId` (generally to exclude yourself) - to further fine-tune the search.

* [checkUserExists with zero parameters](./checkuserexists-with-zero-parameters.md)
* [checkUserExists via email address](./checkuserexists-via-email-address.md)
* [checkUserExists via display name](./checkuserexists-via-display-name.md)
* [checkUserExists via username](./checkuserexists-via-username.md)
## Login and/or Get Current User Info
This endpoint does the following two operations:
  1) Checks if you are already logged in by looking for a valid `auth` cookie. If you are have a valid auth cookie then no additional auth-related actions are taken. If you are **not** logged in then it will log you in with the `Authorization` header and set the `auth` cookie. The `auth` cookie will only be sent once.
  2) If logged in, this function will also return the CurrentUser object containing detailed information about the currently logged in user.

The auth string after `Authorization: Basic {string}` is a base64-encoded string of the username and password, both individually url-encoded, and then joined with a colon.
  
> base64(urlencode(username):urlencode(password))

**WARNING: Session Limit:** Each authentication with login credentials counts as a separate session, out of which you have a limited amount. Make sure to save and reuse the `auth` cookie if you are often restarting the program. The provided API libraries automatically save cookies during runtime, but does not persist during restart. While it can be fine to use username/password during development, expect in production to very fast run into the rate-limit and be temporarily blocked from making new sessions until older ones expire. The exact number of simultaneous sessions is unknown/undisclosed.

* [getCurrentUser while missing credentials](./getcurrentuser-while-missing-credentials.md)
* [getCurrentUser with username and password (expect fail)](./getcurrentuser-with-username-and-password-(expect-fail).md)
* [getCurrentUser after two-factor authentication](./getcurrentuser-after-two-factor-authentication.md)
* [getCurrentUser after logout to log back in](./getcurrentuser-after-logout-to-log-back-in.md)
## Disable 2FA
Disables 2FA for the currently logged in account

> Missing coverage.
## Verify 2FA code
Finishes the login sequence with a normal 2FA-generated code for accounts with 2FA-protection enabled.

* [verify2FA while missing credentials](./verify2fa-while-missing-credentials.md)
* [verify2FA](./verify2fa.md)
## Cancel pending enabling of time-based 2FA codes
Cancels the sequence for enabling time-based 2FA.

> Missing coverage.
## Enable time-based 2FA codes
Begins the sequence for enabling time-based 2FA.

> Missing coverage.
## Verify Pending 2FA code
Finishes sequence for enabling time-based 2FA.

> Missing coverage.
## Get 2FA Recovery codes
Gets the OTP (One Time Password) recovery codes for accounts with 2FA-protection enabled.

> Missing coverage.
## Verify 2FA code with Recovery code
Finishes the login sequence with an OTP (One Time Password) recovery code for accounts with 2FA-protection enabled.

> Missing coverage.
## Verify 2FA email code
Finishes the login sequence with an 2FA email code.

> Missing coverage.
## Verify Auth Token
Verify whether the currently provided Auth Token is valid.

* [verifyAuthToken](./verifyauthtoken.md)
## Logout
Invalidates the login session.

* [logout logout](./logout-logout.md)
## Delete User
Deletes the account with given ID. Normal users only have permission to delete their own account. Account deletion is 14 days from this request, and will be cancelled if you do an authenticated request with the account afterwards.

**VRC+ NOTE:** Despite the 14-days cooldown, any VRC+ subscription will be cancelled **immediately**.

**METHOD NOTE:** Despite this being a Delete action, the method type required is PUT.

> Missing coverage.
## Register User Account
~~Register a new user account.~~

**DEPRECATED:** Automated creation of accounts has no legitimate public third-party use case, and would be in violation of ToS §13.2:
*By using the Platform, you agree not to: i. [...] use the Platform in a manner inconsistent with individual human usage*
This endpoint is documented in the interest of completeness

> Missing coverage.
## Resend Email Confirmation
Requests a resend of pending email address confirmation email

> Missing coverage.
## Confirm Email
Confirms the email address for a user

> Missing coverage.
## Verify Login Place
Verifies a login attempt for a user

> Missing coverage.
## Get Global Avatar Moderations
Returns list of globally blocked avatars.

> Missing coverage.
	