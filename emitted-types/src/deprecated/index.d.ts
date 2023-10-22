import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function buildOptions(yargs: CommonYargsArgv): CommonYargsArgv;
declare type BuildArgs = StrictYargsOptionsToInterface<typeof buildOptions>;
export declare function buildHandler(buildArgs: BuildArgs): Promise<void>;
export declare const noOpOptions: () => void;
export declare const configHandler: () => never;
export declare function previewOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    method: string | undefined;
} & {
    body: string | undefined;
} & {
    watch: boolean;
}>;
export declare function previewHandler(): void;
export declare const route: (routeYargs: CommonYargsArgv) => import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    zone: string | undefined;
}, "zone"> & {
    zone: string | undefined;
} & {
    id: string | undefined;
}, "zone"> & {
    zone: string | undefined;
}>;
export declare const routeHandler: () => never;
export declare const subdomainOptions: (yargs: CommonYargsArgv) => import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    name: string | undefined;
}>;
export declare const subdomainHandler: () => never;
export {};
