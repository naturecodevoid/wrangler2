import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function Options(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    directory: string | undefined;
} & {
    command: string | undefined;
}, "ip" | "port" | "binding" | "config" | "local" | "d1" | "proxy" | "bundle" | "do" | "kv" | "r2" | "persist-to" | "persist" | "node-compat" | "compatibility-date" | "compatibility-flags" | "inspector-port" | "script-path" | "no-bundle" | "live-reload" | "local-protocol" | "experimental-enable-local-persistence" | "experimental-local" | "log-level"> & import("yargs").InferredOptionTypes<{
    local: {
        type: "boolean";
        default: boolean;
        description: string;
    };
    "compatibility-date": {
        describe: string;
        type: "string";
    };
    "compatibility-flags": {
        describe: string;
        alias: string;
        type: "string";
        array: true;
    };
    ip: {
        type: "string";
        default: string;
        description: string;
    };
    port: {
        type: "number";
        default: number;
        description: string;
    };
    "inspector-port": {
        type: "number";
        describe: string;
    };
    proxy: {
        type: "number";
        description: string;
    };
    "script-path": {
        type: "string";
        default: string;
        description: string;
    };
    bundle: {
        type: "boolean";
        default: undefined;
        hidden: true;
    };
    "no-bundle": {
        type: "boolean";
        default: boolean;
        description: string;
    };
    binding: {
        type: "array";
        description: string;
        alias: string;
    };
    kv: {
        type: "array";
        description: string;
        alias: string;
    };
    d1: {
        type: "array";
        description: string;
    };
    do: {
        type: "array";
        description: string;
        alias: string;
    };
    r2: {
        type: "array";
        description: string;
    };
    "live-reload": {
        type: "boolean";
        default: boolean;
        description: string;
    };
    "local-protocol": {
        describe: string;
        choices: readonly ["http", "https"];
    };
    "experimental-enable-local-persistence": {
        describe: string;
        type: "boolean";
        deprecated: true;
        hidden: true;
    };
    persist: {
        describe: string;
        type: "boolean";
    };
    "persist-to": {
        describe: string;
        type: "string";
        requiresArg: true;
    };
    "node-compat": {
        describe: string;
        default: boolean;
        type: "boolean";
        hidden: true;
    };
    "experimental-local": {
        describe: string;
        type: "boolean";
        default: boolean;
    };
    config: {
        describe: string;
        type: "string";
        hidden: true;
    };
    "log-level": {
        choices: readonly ["debug", "info", "log", "warn", "error", "none"];
        describe: string;
    };
}>>;
export declare const Handler: ({ local, directory, compatibilityDate, compatibilityFlags, ip, port, inspectorPort, proxy: requestedProxyPort, bundle, noBundle, scriptPath: singleWorkerScriptPath, binding: bindings, kv: kvs, do: durableObjects, d1: d1s, r2: r2s, liveReload, localProtocol, experimentalEnableLocalPersistence, persist, persistTo, nodeCompat: legacyNodeCompat, experimentalLocal, config: config, _: [_pages, _dev, ...remaining], logLevel, }: StrictYargsOptionsToInterface<typeof Options>) => Promise<undefined>;
