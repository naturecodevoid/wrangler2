export declare type ApiCredentials = {
    apiToken: string;
} | {
    authKey: string;
    authEmail: string;
};
/**
 * Try to read an API token or Global Auth from the environment.
 */
export declare function getAuthFromEnv(): ApiCredentials | undefined;
/**
 * The path to the config file that holds user authentication data,
 * relative to the user's home directory.
 */
export declare const USER_AUTH_CONFIG_FILE = "config/default.toml";
/**
 * The data that may be read from the `USER_CONFIG_FILE`.
 */
export interface UserAuthConfig {
    oauth_token?: string;
    refresh_token?: string;
    expiration_time?: string;
    scopes?: string[];
    /** @deprecated - this field was only provided by the deprecated v1 `wrangler config` command. */
    api_token?: string;
}
declare const Scopes: {
    readonly "account:read": "See your account info such as account details, analytics, and memberships.";
    readonly "user:read": "See your user info such as name, email address, and account memberships.";
    readonly "workers:write": "See and change Cloudflare Workers data such as zones, KV storage, namespaces, scripts, and routes.";
    readonly "workers_kv:write": "See and change Cloudflare Workers KV Storage data such as keys and namespaces.";
    readonly "workers_routes:write": "See and change Cloudflare Workers data such as filters and routes.";
    readonly "workers_scripts:write": "See and change Cloudflare Workers scripts, durable objects, subdomains, triggers, and tail data.";
    readonly "workers_tail:read": "See Cloudflare Workers tail and script data.";
    readonly "d1:write": "See and change D1 Databases.";
    readonly "pages:write": "See and change Cloudflare Pages projects, settings and deployments.";
    readonly "zone:read": "Grants read level access to account zone.";
    readonly "ssl_certs:write": "See and manage mTLS certificates for your account";
};
/**
 * The possible keys for a Scope.
 *
 * "offline_access" is automatically included.
 */
declare type Scope = keyof typeof Scopes;
declare const ScopeKeys: ("account:read" | "user:read" | "workers:write" | "workers_kv:write" | "workers_routes:write" | "workers_scripts:write" | "workers_tail:read" | "d1:write" | "pages:write" | "zone:read" | "ssl_certs:write")[];
export declare function validateScopeKeys(scopes: string[]): scopes is typeof ScopeKeys;
/**
 * Run the initialization of the auth state, in the case that something changed.
 *
 * This runs automatically whenever `writeAuthConfigFile` is run, so generally
 * you won't need to call it yourself.
 */
export declare function reinitialiseAuthTokens(): void;
/**
 * Reinitialise auth state from an in-memory config, skipping
 * over the part where we write a file and then read it back into memory
 */
export declare function reinitialiseAuthTokens(config: UserAuthConfig): void;
export declare function getAPIToken(): ApiCredentials | undefined;
/**
 * Character set to generate code verifier defined in rfc7636.
 */
export declare const PKCE_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
export declare function getAuthURL(scopes?: ("account:read" | "user:read" | "workers:write" | "workers_kv:write" | "workers_routes:write" | "workers_scripts:write" | "workers_tail:read" | "d1:write" | "pages:write" | "zone:read" | "ssl_certs:write")[]): Promise<string>;
/**
 * Writes a a wrangler config file (auth credentials) to disk,
 * and updates the user auth state with the new credentials.
 */
export declare function writeAuthConfigFile(config: UserAuthConfig): void;
export declare function readAuthConfigFile(): UserAuthConfig;
declare type LoginProps = {
    scopes?: Scope[];
    browser: boolean;
};
export declare function loginOrRefreshIfRequired(): Promise<boolean>;
export declare function login(props?: LoginProps): Promise<boolean>;
export declare function logout(): Promise<void>;
export declare function listScopes(message?: string): void;
export declare function getAccountId(): Promise<string | undefined>;
/**
 * Ensure that a user is logged in, and a valid account_id is available.
 */
export declare function requireAuth(config: {
    account_id?: string;
}): Promise<string>;
/**
 * Throw an error if there is no API token available.
 */
export declare function requireApiToken(): ApiCredentials;
/**
 * Save the given account details to a cache
 */
export declare function saveAccountToCache(account: {
    id: string;
    name: string;
}): void;
/**
 * Fetch the given account details from a cache if available
 */
export declare function getAccountFromCache(): undefined | {
    id: string;
    name: string;
};
/**
 * Get the scopes of the following token, will only return scopes
 * if the token is an OAuth token.
 */
export declare function getScopes(): Scope[] | undefined;
export {};
