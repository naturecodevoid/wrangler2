import type { Environment } from "./config";
import type { EnablePagesAssetsServiceBindingOptions } from "./miniflare-cli/types";
import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "./yargs-types";
export declare function devOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("./yargs-types").CommonYargsOptions & {
    script: string | undefined;
} & {
    name: string | undefined;
} & {
    bundle: boolean | undefined;
} & {
    "no-bundle": boolean;
} & {
    format: "modules" | "service-worker" | undefined;
} & {
    "compatibility-date": string | undefined;
} & {
    "compatibility-flags": string[] | undefined;
} & {
    latest: boolean;
} & {
    ip: string | undefined;
} & {
    port: number | undefined;
} & {
    "inspector-port": number | undefined;
} & {
    routes: string[] | undefined;
} & {
    host: string | undefined;
} & {
    "local-protocol": "http" | "https" | undefined;
} & {
    "local-upstream": string | undefined;
} & {
    "experimental-public": string | undefined;
} & {
    assets: string | undefined;
} & {
    public: string | undefined;
} & {
    site: string | undefined;
} & {
    "site-include": string[] | undefined;
} & {
    "site-exclude": string[] | undefined;
} & {
    "upstream-protocol": "http" | "https" | undefined;
} & {
    var: string[] | undefined;
} & {
    define: string[] | undefined;
} & {
    "jsx-factory": string | undefined;
} & {
    "jsx-fragment": string | undefined;
} & {
    tsconfig: string | undefined;
} & {
    local: boolean;
} & {
    "experimental-local": boolean;
} & {
    "experimental-local-remote-kv": boolean;
} & {
    minify: boolean | undefined;
} & {
    "node-compat": boolean | undefined;
} & {
    "experimental-enable-local-persistence": boolean | undefined;
} & {
    persist: boolean | undefined;
} & {
    "persist-to": string | undefined;
} & {
    "live-reload": boolean | undefined;
} & {
    inspect: boolean | undefined;
} & {
    "legacy-env": boolean | undefined;
} & {
    "test-scheduled": boolean;
} & {
    "log-level": "none" | "error" | "warn" | "info" | "log" | "debug";
}>;
declare type DevArguments = StrictYargsOptionsToInterface<typeof devOptions>;
export declare function devHandler(args: DevArguments): Promise<void>;
export declare type AdditionalDevProps = {
    vars?: {
        [key: string]: unknown;
    };
    kv?: {
        binding: string;
        id: string;
        preview_id?: string;
    }[];
    durableObjects?: {
        name: string;
        class_name: string;
        script_name?: string | undefined;
        environment?: string | undefined;
    }[];
    r2?: {
        binding: string;
        bucket_name: string;
        preview_bucket_name?: string;
    }[];
    d1Databases?: Environment["d1_databases"];
};
declare type StartDevOptions = DevArguments & AdditionalDevProps & {
    forceLocal?: boolean;
    disableDevRegistry?: boolean;
    enablePagesAssetsServiceBinding?: EnablePagesAssetsServiceBindingOptions;
    onReady?: (ip: string, port: number) => void;
    showInteractiveDevSession?: boolean;
};
export declare function startDev(args: StartDevOptions): Promise<{
    devReactElement: import("ink").Instance;
    watcher: import("chokidar").FSWatcher | undefined;
    stop: () => Promise<void>;
}>;
export declare function startApiDev(args: StartDevOptions): Promise<{
    stop: () => Promise<void>;
}>;
export {};
