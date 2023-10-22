import type { Config } from "../config";
import type { Plugin } from "esbuild";
/**
 * Parses esbuild plugins based on given arguments and ensures that they are valid.
 */
export declare function parseEsbuildPlugins(args: {
    bundle?: boolean | undefined;
}, config: Config): Promise<Plugin[]>;
