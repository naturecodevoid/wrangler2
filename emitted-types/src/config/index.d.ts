import dotenv from "dotenv";
import type { CfWorkerInit } from "../worker";
import type { CommonYargsOptions } from "../yargs-types";
import type { Config, OnlyCamelCase } from "./config";
export type { Config, RawConfig, ConfigFields, DevConfig, RawDevConfig, } from "./config";
export type { Environment, RawEnvironment, ConfigModuleRuleType, } from "./environment";
/**
 * Get the Wrangler configuration; read it from the give `configPath` if available.
 */
export declare function readConfig<CommandArgs>(configPath: string | undefined, args: CommandArgs & OnlyCamelCase<CommonYargsOptions>): Config;
/**
 * Find the wrangler.toml file by searching up the file-system
 * from the current working directory.
 */
export declare function findWranglerToml(referencePath?: string, preferJson?: boolean): string | undefined;
/**
 * Print all the bindings a worker using a given config would have access to
 */
export declare function printBindings(bindings: CfWorkerInit["bindings"]): void;
export declare function withConfig<T>(handler: (t: OnlyCamelCase<T & CommonYargsOptions> & {
    config: Config;
}) => Promise<void>): (t: OnlyCamelCase<T & CommonYargsOptions>) => Promise<void>;
export interface DotEnv {
    path: string;
    parsed: dotenv.DotenvParseOutput;
}
/**
 * Loads a dotenv file from <path>, preferring to read <path>.<environment> if
 * <environment> is defined and that file exists.
 */
export declare function loadDotEnv(path: string, env?: string): DotEnv | undefined;
