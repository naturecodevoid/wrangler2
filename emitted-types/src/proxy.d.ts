/// <reference types="node" />
import type { CfPreviewToken } from "./create-worker-preview";
import type { IncomingHttpHeaders } from "node:http";
export declare function addCfAccessToken(headers: IncomingHttpHeaders, domain: string, accessTokenRef: {
    current: string | undefined | null;
}): Promise<void>;
export declare function startPreviewServer({ previewToken, assetDirectory, localProtocol, localPort: port, ip, onReady, }: {
    previewToken: CfPreviewToken;
    assetDirectory: string | undefined;
    localProtocol: "https" | "http";
    localPort: number;
    ip: string;
    onReady: ((readyIp: string, readyPort: number) => void) | undefined;
}): Promise<{
    stop: () => void;
} | undefined>;
export declare function usePreviewServer({ previewToken, assetDirectory, localProtocol, localPort: port, ip, }: {
    previewToken: CfPreviewToken | undefined;
    assetDirectory: string | undefined;
    localProtocol: "https" | "http";
    localPort: number;
    ip: string;
}): void;
/**
 * A helper function that waits for a port to be available.
 */
export declare function waitForPortToBeAvailable(port: number, options: {
    retryPeriod: number;
    timeout: number;
    abortSignal: AbortSignal;
}): Promise<void>;
