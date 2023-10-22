import type { Config } from "./config";
import type { CommonYargsArgv } from "./yargs-types";
import type Yargs from "yargs";
export declare const DEFAULT_LOCAL_PORT = 8787;
export declare const DEFAULT_INSPECTOR_PORT = 9229;
export declare function getRules(config: Config): Config["rules"];
export declare function printWranglerBanner(): Promise<void>;
export declare function isLegacyEnv(config: Config): boolean;
export declare function getScriptName(args: {
    name: string | undefined;
    env: string | undefined;
}, config: Config): string | undefined;
/**
 * Alternative to the getScriptName() because special Legacy cases allowed "name", and "env" together in Wrangler v1
 */
export declare function getLegacyScriptName(args: {
    name: string | undefined;
    env: string | undefined;
}, config: Config): string | undefined;
export declare function demandOneOfOption(...options: string[]): (argv: Yargs.Arguments) => boolean;
export declare class CommandLineArgsError extends Error {
}
export declare function createCLIParser(argv: string[]): CommonYargsArgv;
export declare function main(argv: string[]): Promise<void>;
export declare function getDevCompatibilityDate(config: Config, compatibilityDate?: string | undefined): string;
