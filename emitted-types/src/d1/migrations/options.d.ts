import type { CommonYargsArgv } from "../../yargs-types";
export declare function MigrationOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../../yargs-types").CommonYargsOptions & {
    database: string;
} & {
    local: boolean | undefined;
} & {
    preview: boolean;
} & {
    "persist-to": string | undefined;
}>;
