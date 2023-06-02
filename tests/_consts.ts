/* eslint-disable @typescript-eslint/no-non-null-assertion */

export const vrchatEmail = process.env.VRCHAT_EMAIL!;
export const vrchatUsername = process.env.VRCHAT_USERNAME!;
export const vrchatPassword = process.env.VRCHAT_PASSWORD!;
export const vrchatTotpSecret = process.env.VRCHAT_TOTP_SECRET!;

export const githubSha = process.env.GITHUB_SHA ?? null;
export const version = githubSha ? githubSha.slice(0, 8) : "local";

export const methods = ["delete", "get", "head", "patch", "post", "put", "trace"] as const;

// Send at most 1 request second.
export const requestRateLimit = 1000;
