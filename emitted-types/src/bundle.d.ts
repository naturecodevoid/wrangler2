import * as esbuild from "esbuild";
import type { Config } from "./config";
import type { DurableObjectBindings } from "./config/environment";
import type { WorkerRegistry } from "./dev-registry";
import type { Entry } from "./entry";
import type { CfModule } from "./worker";
export declare const COMMON_ESBUILD_OPTIONS: {
    readonly target: "es2022";
    readonly loader: {
        readonly ".js": "jsx";
        readonly ".mjs": "jsx";
        readonly ".cjs": "jsx";
    };
};
export declare type BundleResult = {
    modules: CfModule[];
    dependencies: esbuild.Metafile["outputs"][string]["inputs"];
    resolvedEntryPointPath: string;
    bundleType: "esm" | "commonjs";
    stop: (() => void) | undefined;
    sourceMapPath?: string | undefined;
};
declare type StaticAssetsConfig = (Config["assets"] & {
    bypassCache: boolean | undefined;
}) | undefined;
/**
 * Returns true if the passed value looks like an esbuild BuildFailure object
 */
export declare function isBuildFailure(err: unknown): err is esbuild.BuildFailure;
/**
 * Rewrites esbuild BuildFailures for failing to resolve Node built-in modules
 * to suggest enabling Node compat as opposed to `platform: "node"`.
 */
export declare function rewriteNodeCompatBuildFailure(err: esbuild.BuildFailure): void;
/**
 * Generate a bundle for the worker identified by the arguments passed in.
 */
export declare function bundleWorker(entry: Entry, destination: string, options: {
    serveAssetsFromWorker: boolean;
    assets?: StaticAssetsConfig;
    betaD1Shims?: string[];
    doBindings: DurableObjectBindings;
    jsxFactory?: string;
    jsxFragment?: string;
    entryName?: string;
    rules: Config["rules"];
    watch?: esbuild.WatchMode | boolean;
    tsconfig?: string;
    minify?: boolean;
    legacyNodeCompat?: boolean;
    nodejsCompat?: boolean;
    define: Config["define"];
    checkFetch: boolean;
    services?: Config["services"];
    workerDefinitions?: WorkerRegistry;
    firstPartyWorkerDevFacade?: boolean;
    targetConsumer: "dev" | "publish";
    local: boolean;
    testScheduled?: boolean;
    experimentalLocal?: boolean;
    inject?: string[];
    loader?: Record<string, string>;
    sourcemap?: esbuild.CommonOptions["sourcemap"];
    plugins?: esbuild.Plugin[];
    disableModuleCollection?: boolean;
    isOutfile?: boolean;
}): Promise<BundleResult>;
/**
 * A simple plugin to alias modules and mark them as external
 */
export declare function esbuildAliasExternalPlugin(aliases: Record<string, string>): esbuild.Plugin;
export {};
