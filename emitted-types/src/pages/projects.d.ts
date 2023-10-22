import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
import type { Project } from "./types";
export declare function ListOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions>;
export declare function ListHandler(): Promise<void>;
export declare const listProjects: ({ accountId, }: {
    accountId: string;
}) => Promise<Array<Project>>;
export declare function CreateOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    "project-name": string;
}, "production-branch"> & import("yargs").InferredOptionTypes<{
    "production-branch": {
        type: "string";
        description: string;
    };
}>>;
export declare function CreateHandler({ productionBranch, projectName, }: StrictYargsOptionsToInterface<typeof CreateOptions>): Promise<void>;
