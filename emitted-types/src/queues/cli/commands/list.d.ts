import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../../../yargs-types";
export declare function options(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../../../yargs-types").CommonYargsOptions, "page"> & import("yargs").InferredOptionTypes<{
    page: {
        type: "number";
        describe: string;
    };
}>>;
export declare function handler(args: StrictYargsOptionsToInterface<typeof options>): Promise<void>;
