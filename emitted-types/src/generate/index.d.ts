import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function generateOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string;
} & {
    template: string | undefined;
} & {
    type: string | undefined;
} & {
    site: boolean | undefined;
}>;
declare type GenerateArgs = StrictYargsOptionsToInterface<typeof generateOptions>;
export declare function generateHandler(args: GenerateArgs): Promise<void>;
export {};
