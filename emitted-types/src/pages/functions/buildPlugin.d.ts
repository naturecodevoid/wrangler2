import type { Options as WorkerOptions } from "./buildWorker";
declare type Options = Omit<WorkerOptions, "outfile" | "fallbackService" | "buildOutputDirectory" | "nodejsCompat"> & {
    outdir: string;
};
export declare function buildPlugin({ routesModule, outdir, minify, sourcemap, watch, onEnd, legacyNodeCompat, functionsDirectory, local, betaD1Shims, }: Options): Promise<import("../../bundle").BundleResult>;
export {};
