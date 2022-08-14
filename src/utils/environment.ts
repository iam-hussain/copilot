export const NODE_ENV = process.env["NODE_ENV"] || "development";
export const IS_PRODUCTION = NODE_ENV === "production";
export const PORT = process.env["PORT"] || 5000;

export const CHILD_PROCESS = process.env["CHILD_PROCESS"] === "NO";
export const APP_SECRET = process.env["APP_SECRET"] || "98uhu5rfs0cve";

export const MONGO_DB_URL = process.env["MONGO_DB_URL"] || "";

export const APP_NAME = process.env["APP_NAME"] || "";

export const ENABLE_REDIS = process.env["ENABLE_REDIS"] === "YES";
export const REDIS_HOST = process.env["REDIS_HOST"] || "localhost";
export const REDIS_PORT = process.env["REDIS_PORT"] || "6379";
export const REDIS_PASSWORD = process.env["REDIS_PASSWORD"] || "";
