/// <reference types="react" />
import type { Route } from "../config/environment";
import type { CfPreviewToken } from "../create-worker-preview";
import type { AssetPaths } from "../sites";
import type { CfModule, CfWorkerInit, CfScriptFormat } from "../worker";
import type { EsbuildBundle } from "./use-esbuild";
interface RemoteProps {
    name: string | undefined;
    bundle: EsbuildBundle | undefined;
    format: CfScriptFormat | undefined;
    isWorkersSite: boolean;
    assetPaths: AssetPaths | undefined;
    port: number;
    ip: string;
    localProtocol: "https" | "http";
    inspect: boolean;
    inspectorPort: number;
    accountId: string | undefined;
    bindings: CfWorkerInit["bindings"];
    compatibilityDate: string;
    compatibilityFlags: string[] | undefined;
    usageModel: "bundled" | "unbound" | undefined;
    env: string | undefined;
    legacyEnv: boolean | undefined;
    zone: string | undefined;
    host: string | undefined;
    routes: Route[] | undefined;
    onReady?: ((ip: string, port: number) => void) | undefined;
    sourceMapPath: string | undefined;
    sendMetrics: boolean | undefined;
}
export declare function Remote(props: RemoteProps): JSX.Element | null;
interface RemoteWorkerProps {
    name: string | undefined;
    bundle: EsbuildBundle | undefined;
    format: CfScriptFormat | undefined;
    modules: CfModule[];
    accountId: string | undefined;
    bindings: CfWorkerInit["bindings"];
    assetPaths: AssetPaths | undefined;
    isWorkersSite: boolean;
    compatibilityDate: string | undefined;
    compatibilityFlags: string[] | undefined;
    usageModel: "bundled" | "unbound" | undefined;
    env: string | undefined;
    legacyEnv: boolean | undefined;
    zone: string | undefined;
    host: string | undefined;
    routes: Route[] | undefined;
    onReady: ((ip: string, port: number) => void) | undefined;
    sendMetrics: boolean | undefined;
    port: number;
}
export declare function useWorker(props: RemoteWorkerProps): CfPreviewToken | undefined;
export declare function startRemoteServer(props: RemoteProps): Promise<{
    stop: () => void;
}>;
/**
 * getRemotePreviewToken is a react-free version of `useWorker`.
 * It returns a preview token, which we then use in our proxy server
 */
export declare function getRemotePreviewToken(props: RemoteProps): Promise<void | CfPreviewToken | undefined>;
export {};
