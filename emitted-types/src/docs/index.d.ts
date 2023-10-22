import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function docsOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    command: string[] | undefined;
} & {
    yes: boolean | undefined;
}>;
export declare function docsHandler(args: StrictYargsOptionsToInterface<typeof docsOptions>): Promise<void>;
