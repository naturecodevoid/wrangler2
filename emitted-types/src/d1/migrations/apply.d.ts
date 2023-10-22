import type { CommonYargsArgv } from "../../yargs-types";
export declare function ApplyOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../../yargs-types").CommonYargsOptions & {
    database: string;
} & {
    local: boolean | undefined;
} & {
    preview: boolean;
} & {
    "persist-to": string | undefined;
}>;
export declare const ApplyHandler: (t: import("../../config/config").OnlyCamelCase<import("../../config/config").OnlyCamelCase<{
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
    experimentalJsonConfig: boolean | undefined;
    database: string;
    local: boolean | undefined;
    preview: boolean;
    "persist-to": string | undefined;
    persistTo: string | undefined;
    _: (string | number)[];
    $0: string;
}> & import("../../yargs-types").CommonYargsOptions>) => Promise<void>;
