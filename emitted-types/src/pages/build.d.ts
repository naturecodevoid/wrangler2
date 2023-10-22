import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare type PagesBuildArgs = StrictYargsOptionsToInterface<typeof Options>;
export declare function Options(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    directory: string;
}, "minify" | "bindings" | "sourcemap" | "watch" | "outdir" | "outfile" | "output-config-path" | "output-routes-path" | "fallback-service" | "plugin" | "build-output-directory" | "node-compat" | "compatibility-date" | "compatibility-flags"> & import("yargs").InferredOptionTypes<{
    outfile: {
        type: "string";
        description: string;
    };
    outdir: {
        type: "string";
        description: string;
    };
    "output-config-path": {
        type: "string";
        description: string;
    };
    "output-routes-path": {
        type: "string";
        description: string;
    };
    minify: {
        type: "boolean";
        default: boolean;
        description: string;
    };
    sourcemap: {
        type: "boolean";
        default: boolean;
        description: string;
    };
    "fallback-service": {
        type: "string";
        default: string;
        description: string;
    };
    watch: {
        type: "boolean";
        default: boolean;
        description: string;
    };
    plugin: {
        type: "boolean";
        default: boolean;
        description: string;
    };
    "build-output-directory": {
        type: "string";
        description: string;
    };
    "node-compat": {
        describe: string;
        default: boolean;
        type: "boolean";
        hidden: true;
    };
    "compatibility-date": {
        describe: string;
        type: "string";
        requiresArg: true;
    };
    "compatibility-flags": {
        describe: string;
        alias: string;
        type: "string";
        requiresArg: true;
        array: true;
    };
    bindings: {
        type: "string";
        describe: string;
        deprecated: true;
        hidden: true;
    };
}>>;
export declare const Handler: (args: PagesBuildArgs) => Promise<void>;
