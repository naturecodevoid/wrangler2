import type { CommonYargsArgv } from "../yargs-types";
import type { Backup } from "./types";
import type { Response } from "undici";
export declare function ListOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string;
}>;
export declare const ListHandler: (t: import("../config/config").OnlyCamelCase<import("../config/config").OnlyCamelCase<{
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
    experimentalJsonConfig: boolean | undefined;
    name: string;
    _: (string | number)[];
    $0: string;
}> & import("../yargs-types").CommonYargsOptions>) => Promise<void>;
export declare const listBackups: (accountId: string, uuid: string) => Promise<Array<Backup>>;
export declare function CreateOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string;
}>;
export declare const CreateHandler: (t: import("../config/config").OnlyCamelCase<import("../config/config").OnlyCamelCase<{
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
    experimentalJsonConfig: boolean | undefined;
    name: string;
    _: (string | number)[];
    $0: string;
}> & import("../yargs-types").CommonYargsOptions>) => Promise<void>;
export declare const createBackup: (accountId: string, uuid: string) => Promise<Backup>;
export declare function RestoreOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string;
} & {
    "backup-id": string;
}>;
export declare const RestoreHandler: (t: import("../config/config").OnlyCamelCase<import("../config/config").OnlyCamelCase<{
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
    experimentalJsonConfig: boolean | undefined;
    name: string;
    "backup-id": string;
    backupId: string;
    _: (string | number)[];
    $0: string;
}> & import("../yargs-types").CommonYargsOptions>) => Promise<void>;
export declare const restoreBackup: (accountId: string, uuid: string, backupId: string) => Promise<void>;
export declare function DownloadOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string;
} & {
    "backup-id": string;
} & {
    output: string | undefined;
}>;
export declare const DownloadHandler: (t: import("../config/config").OnlyCamelCase<import("../config/config").OnlyCamelCase<{
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
    experimentalJsonConfig: boolean | undefined;
    name: string;
    "backup-id": string;
    backupId: string;
    output: string | undefined;
    _: (string | number)[];
    $0: string;
}> & import("../yargs-types").CommonYargsOptions>) => Promise<void>;
export declare const getBackupResponse: (accountId: string, uuid: string, backupId: string) => Promise<Response>;
