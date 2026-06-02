# Agent instructions for this project

## Package manager
- Use `pnpm` for all package management

## Commands
- `pnpm test` — run all tests (AVA, serial)
- `pnpm fast-fail` — stop on first failure
- `pnpm type-check` — TypeScript type check
- `pnpm test:clean` — clear `data/state` and AVA cache (`pwsh ./scripts/clean.ps1`)

## Project purpose
Integration-test suite against the live VRChat API. Downloads the latest `openapi-internal+legacy.yaml` from vrchatapi/specification releases, then validates actual API responses against the schema.

## Test structure
- Test files in `tests/*.ts`, run in the order defined by `tests/_order.json`: authentication → users → worlds → instances → avatars (then alphabetical)
- All tests are serial (`ava --serial`)
- Tests share state via `data/state/` (files on disk — cookies, session data, cached values)
- Test results recorded as markdown to `data/requests/`

## Running tests
Requires these env vars (add to `.env` — loaded via `dotenv/config`):
`VRCHAT_EMAIL`, `VRCHAT_USERNAME`, `VRCHAT_PASSWORD`, `VRCHAT_TOTP_SECRET`, `VRCHAT_FRIEND_ID`, `VRCHAT_GROUP_ID`

Auth flow: login with Basic auth → 2FA TOTP → verify → cookie-based reuse. Rate-limit protection: 200ms between requests, exponential backoff up to 10 retries on 429.

Before a fresh run, always clear state: `pnpm test:clean` (CI does this)

## Test patterns
- `testOperation` macro (from `_utilities.ts`) handles: parameter injection, schema validation (`@exodus/schemasafe` lax mode), response logging
- `unstable: true | string[]` — marks response values that change every run (timestamps, versions, etc.)
- `sensitive: true` — redacts the entire response body
- `test.todo(...)` — placeholder for unimplemented endpoints
- Use `test.before(failUnauthenticated)` in files that need a logged-in user

## Key files
- `tests/_utilities.ts` — core test framework (fetch, schema validation, request/response recorder)
- `tests/_consts.ts` — env vars, shared constants like `tupperUserId`, `defaultAvatarId`
- `tests/_cache.ts` — file-based state and caching, sensitive/unstable value tracking
- `scripts/clean.ps1` — clears `data/state/` and AVA cache for a fresh run (`pnpm test:clean`)
- `scripts/get-spec.ps1` — downloads latest `openapi-internal+legacy.yaml` to `openapi.yaml`
- `openapi.yaml` (in `.gitignore`) — downloaded at test time by CI or `scripts/get-spec.ps1`
- `data/` — ignored except for `data/requests/` (test output committed by CI)

## CI
GitHub Actions runs daily (or manual dispatch). Downloads spec via curl+jq, clears `data/state/`, runs `ava --serial`, commits updated `data/requests/` back to repo.
