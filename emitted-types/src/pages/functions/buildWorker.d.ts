import type { Plugin } from "esbuild";
export declare type Options = {
    routesModule: string;
    outfile?: string;
    outdir?: string;
    minify?: boolean;
    sourcemap?: boolean;
    fallbackService?: string;
    watch?: boolean;
    onEnd?: () => void;
    buildOutputDirectory?: string;
    legacyNodeCompat?: boolean;
    nodejsCompat?: boolean;
    functionsDirectory: string;
    local: boolean;
    betaD1Shims?: string[];
};
export declare function buildWorker({ routesModule, outfile, outdir, minify, sourcemap, fallbackService, watch, onEnd, buildOutputDirectory, legacyNodeCompat, nodejsCompat, functionsDirectory, local, betaD1Shims, }: Options): Promise<import("../../bundle").BundleResult>;
export declare type RawOptions = {
    workerScriptPath: string;
    outfile?: string;
    outdir?: string;
    directory: string;
    minify?: boolean;
    sourcemap?: boolean;
    watch?: boolean;
    plugins?: Plugin[];
    onEnd?: () => void;
    buildOutputDirectory?: string;
    legacyNodeCompat?: boolean;
    nodejsCompat?: boolean;
    local: boolean;
    betaD1Shims?: string[];
};
/**
 * This function bundles a raw `_worker.js` Pages file
 * before it gets deployed.
 *
 * This allows Wrangler to add shims and other wrappers
 * around the handlers, which is useful to support beta features.
 */
export declare function buildRawWorker({ workerScriptPath, outfile, outdir, directory, minify, sourcemap, watch, plugins, onEnd, legacyNodeCompat, nodejsCompat, local, betaD1Shims, }: RawOptions): Promise<import("../../bundle").BundleResult>;
/**
 * Creates an esbuild plugin that can notify Wrangler (via the `onEnd()`)
 * when the build completes.
 */
export declare function buildNotifierPlugin(onEnd: () => void): Plugin;
/**
 * Runs the script through a simple esbuild bundle step to check for unwanted imports.
 *
 * This is useful when the user chooses not to bundle the `_worker.js` file by setting
 * `--no-bundle` at the command line.
 */
export declare function checkRawWorker(scriptPath: string, onEnd: () => void): Promise<void>;
