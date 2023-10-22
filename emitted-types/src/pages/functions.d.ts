import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
declare type OptimizeRoutesArgs = StrictYargsOptionsToInterface<typeof OptimizeRoutesOptions>;
export declare function OptimizeRoutesOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<import("../yargs-types").CommonYargsOptions, "routes-path"> & import("yargs").InferredOptionTypes<{
    "routes-path": {
        type: "string";
        demandOption: true;
        description: string;
    };
}>, "output-routes-path"> & import("yargs").InferredOptionTypes<{
    "output-routes-path": {
        type: "string";
        demandOption: true;
        description: string;
    };
}>>;
export declare function OptimizeRoutesHandler({ routesPath, outputRoutesPath, }: OptimizeRoutesArgs): Promise<void>;
export {};
