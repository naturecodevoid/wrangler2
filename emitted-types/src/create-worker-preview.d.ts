/// <reference types="node" />
import { URL } from "node:url";
import type { CfAccount, CfWorkerContext, CfWorkerInit } from "./worker";
/**
 * A Preview Session on the edge
 */
export interface CfPreviewSession {
    /**
     * A randomly generated id for this session
     */
    id: string;
    /**
     * A value to use when creating a worker preview under a session
     */
    value: string;
    /**
     * The host where the session is available.
     */
    host: string;
    /**
     * A websocket url to a DevTools inspector.
     *
     * Workers does not have a fully-featured implementation
     * of the Chrome DevTools protocol, but supports the following:
     *  * `console.log()` output.
     *  * `Error` stack traces.
     *  * `fetch()` events.
     *
     * There is no support for breakpoints, but we want to implement
     * this eventually.
     *
     * @link https://chromedevtools.github.io/devtools-protocol/
     */
    inspectorUrl: URL;
    /**
     * A url to prewarm the preview session.
     *
     * @example
     * fetch(prewarmUrl, { method: 'POST' })
     */
    prewarmUrl: URL;
}
/**
 * A preview token.
 */
export interface CfPreviewToken {
    /**
     * The header value required to trigger a preview.
     *
     * @example
     * const headers = { 'cf-workers-preview-token': value }
     * const response = await fetch('https://' + host, { headers })
     */
    value: string;
    /**
     * The host where the preview is available.
     */
    host: string;
    /**
     * A websocket url to a DevTools inspector.
     *
     * Workers does not have a fully-featured implementation
     * of the Chrome DevTools protocol, but supports the following:
     *  * `console.log()` output.
     *  * `Error` stack traces.
     *  * `fetch()` events.
     *
     * There is no support for breakpoints, but we want to implement
     * this eventually.
     *
     * @link https://chromedevtools.github.io/devtools-protocol/
     */
    inspectorUrl: URL;
    /**
     * A url to prewarm the preview session.
     *
     * @example
     * fetch(prewarmUrl, { method: 'POST',
     * 	 headers: {
     *     "cf-workers-preview-token": (preview)token.value,
     *   }
     * })
     */
    prewarmUrl: URL;
}
/**
 * Generates a preview session token.
 */
export declare function createPreviewSession(account: CfAccount, ctx: CfWorkerContext, abortSignal: AbortSignal): Promise<CfPreviewSession>;
/**
 * A stub to create a Cloudflare Worker preview.
 *
 * @example
 * const {value, host} = await createWorker(init, acct);
 */
export declare function createWorkerPreview(init: CfWorkerInit, account: CfAccount, ctx: CfWorkerContext, session: CfPreviewSession, abortSignal: AbortSignal): Promise<CfPreviewToken>;
