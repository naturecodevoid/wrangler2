import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
declare type ListArgs = StrictYargsOptionsToInterface<typeof ListOptions>;
export declare function ListOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions, "project-name"> & import("yargs").InferredOptionTypes<{
    "project-name": {
        type: "string";
        description: string;
    };
}>>;
export declare function ListHandler({ projectName }: ListArgs): Promise<void>;
export {};
