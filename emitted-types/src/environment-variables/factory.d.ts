declare type VariableNames = "CLOUDFLARE_ACCOUNT_ID" | "CLOUDFLARE_API_TOKEN" | "CLOUDFLARE_API_KEY" | "CLOUDFLARE_EMAIL" | "WRANGLER_SEND_METRICS" | "CLOUDFLARE_API_BASE_URL" | "WRANGLER_LOG" | "WRANGLER_API_ENVIRONMENT" | "WRANGLER_CLIENT_ID" | "WRANGLER_AUTH_DOMAIN" | "WRANGLER_AUTH_URL" | "WRANGLER_TOKEN_URL" | "WRANGLER_REVOKE_URL" | "WRANGLER_CF_AUTHORIZATION_TOKEN";
declare type DeprecatedNames = "CF_ACCOUNT_ID" | "CF_API_TOKEN" | "CF_API_KEY" | "CF_EMAIL" | "CF_API_BASE_URL";
/**
 * Create a function used to access an environment variable.
 *
 * This is not memoized to allow us to change the value at runtime, such as in testing.
 * A warning is shown if the client is using a deprecated version - but only once.
 */
export declare function getEnvironmentVariableFactory({ variableName, deprecatedName, }: {
    variableName: VariableNames;
    deprecatedName?: DeprecatedNames;
}): () => string | undefined;
/**
 * Create a function used to access an environment variable, with a default value.
 *
 * This is not memoized to allow us to change the value at runtime, such as in testing.
 * A warning is shown if the client is using a deprecated version - but only once.
 */
export declare function getEnvironmentVariableFactory({ variableName, deprecatedName, defaultValue, }: {
    variableName: VariableNames;
    deprecatedName?: DeprecatedNames;
    defaultValue: () => string;
}): () => string;
export {};
