import fs from "fs";

export function tryJsonParse(value: unknown): unknown {
	try {
		return JSON.parse(value as string);
	} catch {
		return value;
	}
}

export function tryStringify(value: unknown): string {
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}

// HACK: This allows us to maintain state between tests
// by writing to the filesystem.
export const cache = {
	set: (type: string, key: string, value: string) => {
		fs.mkdirSync(`./cache/${type}`, { recursive: true });
		fs.writeFileSync(`./cache/${type}/${key}`, value);
	},
	get: (type: string, key: string) => {
		try {
			return fs.readFileSync(`./cache/${type}/${key}`, "utf8");
		} catch {
			return null;
		}
	}
};

export const state = {
	set: <T>(key: string, value: T) =>
		cache.set("state", `${key}.json`, JSON.stringify(value, null, 2)),
	get: <T = any>(key: string): T => {
		const value = cache.get("state", `${key}.json`);
		if (value === null) return void 0 as never;

		return JSON.parse(value) as T;
	}
};
