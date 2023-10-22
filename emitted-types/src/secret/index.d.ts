import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare const secret: (secretYargs: CommonYargsArgv) => import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    "legacy-env": boolean | undefined;
} & {
    key: string | undefined;
} & {
    name: string | undefined;
}, "key"> & {
    key: string | undefined;
}, "name"> & {
    name: string | undefined;
}, "name"> & {
    name: string | undefined;
}>;
export declare const secretBulkOptions: (yargs: CommonYargsArgv) => import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    json: string;
} & {
    name: string | undefined;
}>;
declare type SecretBulkArgs = StrictYargsOptionsToInterface<typeof secretBulkOptions>;
export declare const secretBulkHandler: (secretBulkArgs: SecretBulkArgs) => Promise<void>;
export {};
