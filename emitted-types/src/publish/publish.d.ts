import type { Config } from "../config";
import type { Entry } from "../entry";
import type { AssetPaths } from "../sites";
import type { Plugin } from "esbuild";
declare type Props = {
    config: Config;
    accountId: string | undefined;
    entry: Entry;
    rules: Config["rules"];
    name: string | undefined;
    env: string | undefined;
    compatibilityDate: string | undefined;
    compatibilityFlags: string[] | undefined;
    assetPaths: AssetPaths | undefined;
    vars: Record<string, string> | undefined;
    defines: Record<string, string> | undefined;
    triggers: string[] | undefined;
    routes: string[] | undefined;
    legacyEnv: boolean | undefined;
    jsxFactory: string | undefined;
    jsxFragment: string | undefined;
    tsconfig: string | undefined;
    isWorkersSite: boolean;
    minify: boolean | undefined;
    nodeCompat: boolean | undefined;
    outDir: string | undefined;
    dryRun: boolean | undefined;
    noBundle: boolean | undefined;
    keepVars: boolean | undefined;
    logpush: boolean | undefined;
    plugins: Plugin[] | undefined;
};
export declare type CustomDomain = {
    id: string;
    zone_id: string;
    zone_name: string;
    hostname: string;
    service: string;
    environment: string;
};
declare type UpdatedCustomDomain = CustomDomain & {
    modified: boolean;
};
declare type ConflictingCustomDomain = CustomDomain & {
    external_dns_record_id?: string;
    external_cert_id?: string;
};
export declare type CustomDomainChangeset = {
    added: CustomDomain[];
    removed: CustomDomain[];
    updated: UpdatedCustomDomain[];
    conflicting: ConflictingCustomDomain[];
};
export default function publish(props: Props): Promise<void>;
export declare function helpIfErrorIsSizeOrScriptStartup(err: unknown, dependencies: {
    [path: string]: {
        bytesInOutput: number;
    };
}): void;
export {};
