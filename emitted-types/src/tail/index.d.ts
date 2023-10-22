import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function tailOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    worker: string | undefined;
} & {
    format: string;
} & {
    status: (string | number)[] | undefined;
} & {
    header: string | undefined;
} & {
    method: string[] | undefined;
} & {
    "sampling-rate": number | undefined;
} & {
    search: string | undefined;
} & {
    ip: string[] | undefined;
} & {
    debug: boolean;
} & {
    "legacy-env": boolean | undefined;
}>;
declare type TailArgs = StrictYargsOptionsToInterface<typeof tailOptions>;
export declare function tailHandler(args: TailArgs): Promise<void>;
export {};
