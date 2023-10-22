import type { CommonYargsArgv, CommonYargsOptions } from "../yargs-types";
import type { CommandModule } from "yargs";
export declare function pubSubCommands(pubsubYargs: CommonYargsArgv, subHelp: CommandModule<CommonYargsOptions, CommonYargsOptions>): import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<CommonYargsOptions & {
    name: string;
} & {
    description: string | undefined;
}, "name"> & {
    name: string;
}, "name"> & {
    name: string;
}>;
