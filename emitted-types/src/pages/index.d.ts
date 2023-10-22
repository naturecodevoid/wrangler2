import type { CommonYargsArgv } from "../yargs-types";
export declare function pages(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    directory: string;
}, "config" | "bundle" | "project-name" | "branch" | "no-bundle" | "skip-caching" | "commit-hash" | "commit-message" | "commit-dirty"> & import("yargs").InferredOptionTypes<{
    "project-name": {
        type: "string";
        description: string;
    };
    branch: {
        type: "string";
        description: string;
    };
    "commit-hash": {
        type: "string";
        description: string;
    };
    "commit-message": {
        type: "string";
        description: string;
    };
    "commit-dirty": {
        type: "boolean";
        description: string;
    };
    "skip-caching": {
        type: "boolean";
        description: string;
    };
    bundle: {
        type: "boolean";
        default: undefined;
        hidden: true;
    };
    "no-bundle": {
        type: "boolean";
        default: boolean;
        description: string;
    };
    config: {
        describe: string;
        type: "string";
        hidden: true;
    };
}>>;
