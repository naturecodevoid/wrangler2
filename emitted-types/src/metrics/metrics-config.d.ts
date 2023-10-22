/**
 * The date that the metrics being gathered was last updated in a way that would require
 * the user to give their permission again.
 *
 * When reading from a config file, we check the recorded date in the config file against
 * this one here. We ignore the permissions set in the the file if the recorded date is older.
 * This allows us to prompt the user to re-opt-in when we make substantive changes to our metrics
 * gathering.
 */
export declare const CURRENT_METRICS_DATE: Date;
export declare const USER_ID_CACHE_PATH = "user-id.json";
export declare const getWranglerSendMetricsFromEnv: () => string | undefined;
export interface MetricsConfigOptions {
    /**
     * Defines whether to send metrics to Cloudflare:
     * If defined, then use this value for whether the dispatch is enabled.
     * Otherwise, infer the enabled value from the user configuration.
     */
    sendMetrics?: boolean;
    /**
     * When true, do not make any CF API requests.
     */
    offline?: boolean;
}
/**
 * The information needed to set up the MetricsDispatcher.
 */
export interface MetricsConfig {
    /** True if usage tracking is enabled. */
    enabled: boolean;
    /** A UID that identifies this user and machine pair for Wrangler. */
    deviceId: string;
    /** The currently logged in user - undefined if not logged in. */
    userId: string | undefined;
}
/**
 * Get hold of the permissions and device-id for metrics dispatch.
 *
 * The device-id is just a unique identifier sent along with events to help
 * to collate metrics. Once generated, this id is cached in the metrics config file.
 *
 * The permissions define whether we can send metrics or not. They can come from a variety of places:
 * - the `send_metrics` setting in `wrangler.toml`
 * - a cached response from the current user
 * - prompting the user to opt-in to metrics
 *
 * If the user was prompted to opt-in, then their response is cached in the metrics config file.
 *
 * If the current process is not interactive then we will cannot prompt the user and just assume
 * we cannot send metrics if there is no cached or project-level preference available.
 */
export declare function getMetricsConfig({ sendMetrics, offline, }: MetricsConfigOptions): Promise<MetricsConfig>;
/**
 * Stringify and write the given info to the metrics config file.
 */
export declare function writeMetricsConfig(config: MetricsConfigFile): void;
/**
 * Read and parse the metrics config file.
 */
export declare function readMetricsConfig(): MetricsConfigFile;
/**
 * The format of the metrics config file.
 */
export interface MetricsConfigFile {
    permission?: {
        /** True if Wrangler should send metrics to Cloudflare. */
        enabled: boolean;
        /** The date that this permission was set. */
        date: Date;
    };
    /** A unique UUID that identifies this device for metrics purposes. */
    deviceId?: string;
}
