import type { Config } from "./config";
import type { CfWorkerInit } from "./worker";
/**
 * For a given Worker + migrations config, figure out which migrations
 * to upload based on the current migration tag of the deployed Worker.
 */
export declare function getMigrationsToUpload(scriptName: string, props: {
    accountId: string | undefined;
    config: Config;
    legacyEnv: boolean | undefined;
    env: string | undefined;
}): Promise<CfWorkerInit["migrations"]>;
