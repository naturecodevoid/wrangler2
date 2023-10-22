/// <reference types="node" />
import { URLSearchParams } from "node:url";
import type { RequestInit } from "undici";
export interface FetchError {
    code: number;
    message: string;
    error_chain?: FetchError[];
}
export interface FetchResult<ResponseType = unknown> {
    success: boolean;
    result: ResponseType;
    errors: FetchError[];
    messages: string[];
    result_info?: unknown;
}
export { fetchKVGetValue } from "./internal";
/**
 * Make a fetch request, and extract the `result` from the JSON response.
 */
export declare function fetchResult<ResponseType>(resource: string, init?: RequestInit, queryParams?: URLSearchParams, abortSignal?: AbortSignal): Promise<ResponseType>;
/**
 * Make a fetch request for a list of values,
 * extracting the `result` from the JSON response,
 * and repeating the request if the results are paginated.
 */
export declare function fetchListResult<ResponseType>(resource: string, init?: RequestInit, queryParams?: URLSearchParams): Promise<ResponseType[]>;
/**
 * Fetch the raw script content of a Worker
 * Note, this will concatenate the files of multi-module workers
 */
export declare function fetchScriptContent(resource: string, init?: RequestInit, queryParams?: URLSearchParams, abortSignal?: AbortSignal): Promise<string>;
