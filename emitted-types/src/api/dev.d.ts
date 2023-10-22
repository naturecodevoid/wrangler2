import type { Environment } from "../config";
import type { EnablePagesAssetsServiceBindingOptions } from "../miniflare-cli/types";
import type { RequestInit, Response, RequestInfo } from "undici";
export interface UnstableDevOptions {
    config?: string;
    env?: string;
    ip?: string;
    port?: number;
    bundle?: boolean;
    inspectorPort?: number;
    localProtocol?: "http" | "https";
    assets?: string;
    site?: string;
    siteInclude?: string[];
    siteExclude?: string[];
    nodeCompat?: boolean;
    compatibilityDate?: string;
    compatibilityFlags?: string[];
    persist?: boolean;
    persistTo?: string;
    vars?: {
        [key: string]: unknown;
    };
    kv?: {
        binding: string;
        id: string;
        preview_id?: string;
    }[];
    durableObjects?: {
        name: string;
        class_name: string;
        script_name?: string | undefined;
        environment?: string | undefined;
    }[];
    r2?: {
        binding: string;
        bucket_name: string;
        preview_bucket_name?: string;
    }[];
    logLevel?: "none" | "info" | "error" | "log" | "warn" | "debug";
    inspect?: boolean;
    local?: boolean;
    accountId?: string;
    experimental?: {
        d1Databases?: Environment["d1_databases"];
        disableExperimentalWarning?: boolean;
        disableDevRegistry?: boolean;
        enablePagesAssetsServiceBinding?: EnablePagesAssetsServiceBindingOptions;
        experimentalLocal?: boolean;
        experimentalLocalRemoteKv?: boolean;
        forceLocal?: boolean;
        liveReload?: boolean;
        showInteractiveDevSession?: boolean;
        testMode?: boolean;
        testScheduled?: boolean;
        watch?: boolean;
    };
}
export interface UnstableDevWorker {
    port: number;
    address: string;
    stop: () => Promise<void>;
    fetch: (input?: RequestInfo, init?: RequestInit) => Promise<Response>;
    waitUntilExit: () => Promise<void>;
}
/**
 *  unstable_dev starts a wrangler dev server, and returns a promise that resolves with utility functions to interact with it.
 */
export declare function unstable_dev(script: string, options?: UnstableDevOptions, apiOptions?: unknown): Promise<UnstableDevWorker>;
export declare function parseRequestInput(readyAddress: string, readyPort: number, input?: RequestInfo, init?: RequestInit, protocol?: "http" | "https"): [RequestInfo, RequestInit | undefined];
