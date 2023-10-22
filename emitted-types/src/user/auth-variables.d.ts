/**
 * `CLOUDFLARE_ACCOUNT_ID` overrides the account inferred from the current user.
 */
export declare const getCloudflareAccountIdFromEnv: () => string | undefined;
export declare const getCloudflareAPITokenFromEnv: () => string | undefined;
export declare const getCloudflareGlobalAuthKeyFromEnv: () => string | undefined;
export declare const getCloudflareGlobalAuthEmailFromEnv: () => string | undefined;
/**
 * `WRANGLER_CLIENT_ID` is a UUID that is used to identify Wrangler
 * to the Cloudflare APIs.
 *
 * Normally you should not need to set this explicitly.
 * If you want to switch to the staging environment set the
 * `WRANGLER_USE_STAGING` environment variable instead.
 */
export declare const getClientIdFromEnv: () => string;
/**
 * `WRANGLER_AUTH_DOMAIN` is the URL base domain that is used
 * to access OAuth URLs for the Cloudflare APIs.
 *
 * Normally you should not need to set this explicitly.
 * If you want to switch to the staging environment set the
 * `WRANGLER_USE_STAGING` environment variable instead.
 */
export declare const getAuthDomainFromEnv: () => string;
/**
 * `WRANGLER_AUTH_URL` is the path that is used to access OAuth
 * for the Cloudflare APIs.
 *
 * Normally you should not need to set this explicitly.
 * If you want to switch to the staging environment set the
 * `WRANGLER_USE_STAGING` environment variable instead.
 */
export declare const getAuthUrlFromEnv: () => string;
/**
 * `WRANGLER_TOKEN_URL` is the path that is used to exchange an OAuth
 * token for an API token.
 *
 * Normally you should not need to set this explicitly.
 * If you want to switch to the staging environment set the
 * `WRANGLER_USE_STAGING` environment variable instead.
 */
export declare const getTokenUrlFromEnv: () => string;
/**
 * `WRANGLER_REVOKE_URL` is the path that is used to exchange an OAuth
 * refresh token for a new OAuth token.
 *
 * Normally you should not need to set this explicitly.
 * If you want to switch to the staging environment set the
 * `WRANGLER_USE_STAGING` environment variable instead.
 */
export declare const getRevokeUrlFromEnv: () => string;
/**
 * Set the `WRANGLER_CF_AUTHORIZATION_TOKEN` to the CF_Authorization token found at https://dash.staging.cloudflare.com/bypass-limits
 * if you want to access the staging environment, triggered by `WRANGLER_API_ENVIRONMENT=staging`.
 */
export declare const getCloudflareAccessToken: () => Promise<string | undefined>;
