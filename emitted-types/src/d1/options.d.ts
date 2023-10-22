import type { CommonYargsArgv } from "../yargs-types";
export declare function Name(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string;
}>;
export declare function Database(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    database: string;
}>;
