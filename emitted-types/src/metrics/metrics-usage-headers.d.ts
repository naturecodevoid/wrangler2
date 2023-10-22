/**
 * Add an additional header to publish requests if the user has opted into sending usage metrics.
 *
 * This allows us to estimate the number of instances of Wrangler that have opted-in
 * without breaking our agreement not to send stuff if you have not opted-in.
 */
export declare function getMetricsUsageHeaders(sendMetrics: boolean | undefined): Promise<Record<string, string> | undefined>;
