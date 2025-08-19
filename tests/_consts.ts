import "dotenv/config";

export const debug = process.env.DEBUG === "1";

export const vrchatEmail = process.env.VRCHAT_EMAIL!;
export const vrchatUsername = process.env.VRCHAT_USERNAME!;
export const vrchatPassword = process.env.VRCHAT_PASSWORD!;
export const vrchatTotpSecret = process.env.VRCHAT_TOTP_SECRET!;
export const vrchatFriendId = process.env.VRCHAT_FRIEND_ID!;
export const vrchatGroupId = process.env.VRCHAT_GROUP_ID!;

export const githubSha = process.env.GITHUB_SHA ?? null;
export const version = githubSha ? githubSha.slice(0, 8) : "local";

export const methods = [
	"delete",
	"get",
	"head",
	"patch",
	"post",
	"put",
	"trace"
] as const;

/**
 * Delay between requests in milliseconds.
 */
export const requestRateLimit = 200;

export const tupperUserId = "usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469";
export const defaultAvatarId = "avtr_c38a1615-5bf5-42b4-84eb-a8b6c37cbd11";
export const vrchatHomeWorldId = "wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd";
export const favoriteId = "fvrt_6d1580a7-2670-414b-b197-d4adea72467a";
export const vrcWikiTeamGroupId = "grp_0f1d4450-822e-45d5-b5aa-6a0ea8402053";