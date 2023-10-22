/**
 * `WRANGLER_SEND_METRICS` can override whether we attempt to send metrics information to Sparrow.
 */
export declare const getWranglerSendMetricsFromEnv: () => string | undefined;
/**
 * Set `WRANGLER_API_ENVIRONMENT` environment variable to "staging" to tell Wrangler to hit the staging APIs rather than production.
 */
export declare const getCloudflareApiEnvironmentFromEnv: () => string;
/**
 * `CLOUDFLARE_API_BASE_URL` specifies the URL to the Cloudflare API.
 */
export declare const getCloudflareApiBaseUrl: () => string;
