import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../../../../yargs-types";
export declare function options(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../../../../yargs-types").CommonYargsOptions & {
    "queue-name": string;
} & {
    "script-name": string;
}, "batch-size" | "batch-timeout" | "message-retries" | "dead-letter-queue" | "max-concurrency"> & import("yargs").InferredOptionTypes<{
    "batch-size": {
        type: "number";
        describe: string;
    };
    "batch-timeout": {
        type: "number";
        describe: string;
    };
    "message-retries": {
        type: "number";
        describe: string;
    };
    "dead-letter-queue": {
        type: "string";
        describe: string;
    };
    "max-concurrency": {
        type: "number";
        describe: string;
    };
}>>;
export declare function handler(args: StrictYargsOptionsToInterface<typeof options>): Promise<void>;
