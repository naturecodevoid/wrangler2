import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "./yargs-types";
export declare function deleteOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("./yargs-types").CommonYargsOptions & {
    script: string | undefined;
} & {
    name: string | undefined;
} & {
    "dry-run": boolean | undefined;
} & {
    "legacy-env": boolean | undefined;
}>;
declare type DeleteArgs = StrictYargsOptionsToInterface<typeof deleteOptions>;
export declare function deleteHandler(args: DeleteArgs): Promise<void>;
export {};
