/// <reference types="node" />
import type { URLSearchParams } from "node:url";
import type { RequestInit, Response } from "undici";
export declare function performApiFetch(resource: string, init?: RequestInit, queryParams?: URLSearchParams, abortSignal?: AbortSignal): Promise<Response>;
/**
 * Make a fetch request to the Cloudflare API.
 *
 * This function handles acquiring the API token and logging the caller in, as necessary.
 *
 * Check out https://api.cloudflare.com/ for API docs.
 *
 * This function should not be used directly, instead use the functions in `cfetch/index.ts`.
 */
export declare function fetchInternal<ResponseType>(resource: string, init?: RequestInit, queryParams?: URLSearchParams, abortSignal?: AbortSignal): Promise<ResponseType>;
/**
 * The implementation for fetching a kv value from the cloudflare API.
 * We special-case this one call, because it's the only API call that
 * doesn't return json. We inline the implementation and try not to share
 * any code with the other calls. We should push back on any new APIs that
 * try to introduce non-"standard" response structures.
 *
 * Note: any calls to fetchKVGetValue must call encodeURIComponent on key
 * before passing it
 */
export declare function fetchKVGetValue(accountId: string, namespaceId: string, key: string): Promise<ArrayBuffer>;
/**
 * The implementation for fetching a R2 object from Cloudflare API.
 * We have a special implementation to handle the non-standard API response
 * that doesn't return JSON, likely due to the streaming nature.
 *
 * note: The implementation should be called from light wrappers for
 * different methods (GET, PUT)
 */
declare type ResponseWithBody = Response & {
    body: NonNullable<Response["body"]>;
};
export declare function fetchR2Objects(resource: string, bodyInit?: RequestInit): Promise<ResponseWithBody>;
/**
 * This is a wrapper STOPGAP for getting the script which returns a raw text response.
 */
export declare function fetchDashboardScript(resource: string, bodyInit?: RequestInit): Promise<string>;
export {};
