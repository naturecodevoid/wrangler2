import type { BundleResult } from "../bundle";
import type { PagesBuildArgs } from "./build";
/**
 * Builds a Functions worker based on the functions directory, with filepath and handler based routing.
 * @throws FunctionsNoRoutesError when there are no routes found in the functions directory
 */
export declare function buildFunctions({ outfile, outdir, outputConfigPath, functionsDirectory, minify, sourcemap, fallbackService, watch, onEnd, plugin, buildOutputDirectory, routesOutputPath, legacyNodeCompat, nodejsCompat, local, d1Databases, }: Partial<Pick<PagesBuildArgs, "outfile" | "outdir" | "outputConfigPath" | "minify" | "sourcemap" | "fallbackService" | "watch" | "plugin" | "buildOutputDirectory">> & {
    functionsDirectory: string;
    onEnd?: () => void;
    routesOutputPath?: PagesBuildArgs["outputRoutesPath"];
    local: boolean;
    d1Databases?: string[];
    legacyNodeCompat?: boolean;
    nodejsCompat?: boolean;
}): Promise<BundleResult>;
