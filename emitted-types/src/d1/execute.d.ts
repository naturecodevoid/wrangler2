import type { ConfigFields, DevConfig, Environment } from "../config";
import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare type QueryResult = {
    results: Record<string, string | number | boolean>[];
    success: boolean;
    meta?: {
        duration?: number;
    };
    query?: string;
};
export declare function Options(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    database: string;
} & {
    yes: boolean | undefined;
} & {
    local: boolean | undefined;
} & {
    file: string | undefined;
} & {
    command: string | undefined;
} & {
    "persist-to": string | undefined;
} & {
    json: boolean;
} & {
    preview: boolean;
}>;
declare type HandlerOptions = StrictYargsOptionsToInterface<typeof Options>;
export declare const Handler: (args: HandlerOptions) => Promise<void>;
export declare function executeSql({ local, config, name, shouldPrompt, persistTo, file, command, json, preview, }: {
    local: boolean | undefined;
    config: ConfigFields<DevConfig> & Environment;
    name: string;
    shouldPrompt: boolean | undefined;
    persistTo: string | undefined;
    file: string | undefined;
    command: string | undefined;
    json: boolean | undefined;
    preview: boolean | undefined;
}): Promise<QueryResult[] | null>;
export {};
