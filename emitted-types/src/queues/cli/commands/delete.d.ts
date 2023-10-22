import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../../../yargs-types";
export declare function options(yargs: CommonYargsArgv): import("yargs").Argv<import("../../../yargs-types").CommonYargsOptions & {
    name: string;
}>;
export declare function handler(args: StrictYargsOptionsToInterface<typeof options>): Promise<void>;
