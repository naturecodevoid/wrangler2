import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function publishOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("../yargs-types").CommonYargsOptions & {
    script: string | undefined;
} & {
    name: string | undefined;
} & {
    bundle: boolean | undefined;
} & {
    "no-bundle": boolean;
} & {
    outdir: string | undefined;
} & {
    format: "modules" | "service-worker" | undefined;
} & {
    "compatibility-date": string | undefined;
} & {
    "compatibility-flags": string[] | undefined;
} & {
    latest: boolean;
} & {
    "experimental-public": string | undefined;
} & {
    public: string | undefined;
} & {
    assets: string | undefined;
} & {
    site: string | undefined;
} & {
    "site-include": string[] | undefined;
} & {
    "site-exclude": string[] | undefined;
} & {
    var: string[] | undefined;
} & {
    define: string[] | undefined;
} & {
    triggers: string[] | undefined;
} & {
    routes: string[] | undefined;
} & {
    "jsx-factory": string | undefined;
} & {
    "jsx-fragment": string | undefined;
} & {
    tsconfig: string | undefined;
} & {
    minify: boolean | undefined;
} & {
    "node-compat": boolean | undefined;
} & {
    "dry-run": boolean | undefined;
} & {
    "keep-vars": boolean;
} & {
    "legacy-env": boolean | undefined;
} & {
    logpush: boolean | undefined;
}>;
export declare function publishHandler(args: StrictYargsOptionsToInterface<typeof publishOptions>): Promise<void>;
