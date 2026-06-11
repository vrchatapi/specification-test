# Agent instructions for this project

## Package manager
- Use `pnpm` for all package management

## Setup and Commands

### Initial Setup Checklist
1. Create a `.env` file in the project root (loaded via `dotenv/config`)
2. Verify all required environment variables are set and non-empty:
   - `VRCHAT_EMAIL`
   - `VRCHAT_USERNAME`
   - `VRCHAT_PASSWORD`
   - `VRCHAT_TOTP_SECRET`
   - `VRCHAT_FRIEND_ID`
   - `VRCHAT_GROUP_ID`
   - **If any variable is missing, empty, or malformed, stop immediately and print the exact variable names that must be set before any test run.**
3. Before every local test run, execute `pnpm test:clean` first. Do not reuse any existing `data/state/` or AVA cache from a previous run. (CI does this automatically.)
4. Execute `pnpm get-spec` to download the latest `openapi-internal+legacy.yaml` to `openapi.yaml` (CI does this automatically).

### Available Commands
- `pnpm test` — run all tests (AVA; serial mode configured in `ava.config.js`)
- `pnpm fast-fail` — stop on first failure
- `pnpm type-check` — TypeScript type check
- `pnpm test:clean` — clear `data/state` and AVA cache (`pwsh ./scripts/clean.ps1`)
- `pnpm get-spec` — download latest `openapi-internal+legacy.yaml` to `openapi.yaml`

## Project purpose
Integration-test suite against the live VRChat API. Downloads the latest `openapi-internal+legacy.yaml` from vrchatapi/specification releases, then validates actual API responses against the schema.

## Test structure
- Test files in `tests/*.ts`, run in the order defined by `tests/_order.json`: authentication → users → worlds → instances → avatars (then alphabetical)
- All tests are serial (`ava --serial`)
- Tests share state via `data/state/` (files on disk — cookies, session data, cached values)
- Test results recorded as markdown to `data/requests/`

## Running tests

### Authentication and Error Handling
- Auth flow: login with Basic auth → 2FA TOTP → verify → cookie-based reuse
- Rate-limit protection: 200ms between requests, exponential backoff up to 10 retries on 429
- **If login fails, TOTP verification fails, or cookie-based reuse cannot be established, abort the run immediately with a clear error message and do not continue with partial state.**

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
- `tests/_users.ts` — shared unstable key lists (e.g. `unstableUserKeys`)
- `ava.config.js` — AVA config with serial mode, custom test ordering via `_order.json`, tsx loader
- `scripts/clean.ps1` — clears `data/state/` and AVA cache for a fresh run (`pnpm test:clean`)
- `scripts/get-spec.ps1` — downloads latest `openapi-internal+legacy.yaml` to `openapi.yaml`
- `openapi.yaml` (in `.gitignore`) — downloaded at test time by CI or `scripts/get-spec.ps1`
- `data/` — ignored except for `data/requests/` (test output committed by CI)

## CI
GitHub Actions runs daily (or manual dispatch). Downloads spec via curl+jq, clears `data/state/`, runs `ava --serial`, commits updated `data/requests/` back to repo.
