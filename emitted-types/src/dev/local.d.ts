import type { Config } from "../config";
import type { WorkerRegistry } from "../dev-registry";
import type { EnablePagesAssetsServiceBindingOptions } from "../miniflare-cli/types";
import type { AssetPaths } from "../sites";
import type { CfWorkerInit, CfScriptFormat, CfWasmModuleBindings, CfTextBlobBindings, CfDataBlobBindings, CfDurableObject, CfKvNamespace, CfR2Bucket, CfVars, CfQueue, CfD1Database } from "../worker";
import type { EsbuildBundle } from "./use-esbuild";
import type { MiniflareOptions as Miniflare3Options, Log as Miniflare3LogType } from "@miniflare/tre";
import type { MiniflareOptions } from "miniflare";
export interface LocalProps {
    name: string | undefined;
    bundle: EsbuildBundle | undefined;
    format: CfScriptFormat | undefined;
    compatibilityDate: string;
    compatibilityFlags: string[] | undefined;
    usageModel: "bundled" | "unbound" | undefined;
    bindings: CfWorkerInit["bindings"];
    workerDefinitions: WorkerRegistry | undefined;
    assetPaths: AssetPaths | undefined;
    initialPort: number;
    initialIp: string;
    rules: Config["rules"];
    inspectorPort: number;
    localPersistencePath: string | null;
    liveReload: boolean;
    crons: Config["triggers"]["crons"];
    queueConsumers: Config["queues"]["consumers"];
    localProtocol: "http" | "https";
    localUpstream: string | undefined;
    inspect: boolean;
    onReady: ((ip: string, port: number) => void) | undefined;
    enablePagesAssetsServiceBinding?: EnablePagesAssetsServiceBindingOptions;
    testScheduled?: boolean;
    experimentalLocal: boolean | undefined;
    accountId: string | undefined;
    experimentalLocalRemoteKv: boolean | undefined;
}
export declare function Local(props: LocalProps): null;
interface SetupBindingsProps {
    wasm_modules: CfWasmModuleBindings | undefined;
    text_blobs: CfTextBlobBindings | undefined;
    data_blobs: CfDataBlobBindings | undefined;
    durable_objects: {
        bindings: CfDurableObject[];
    } | undefined;
    bundle: EsbuildBundle;
    format: CfScriptFormat;
}
export declare function setupBindings({ wasm_modules, text_blobs, data_blobs, durable_objects, format, bundle, }: SetupBindingsProps): {
    internalDurableObjects: CfDurableObject[];
    externalDurableObjects: CfDurableObject[];
    wasmBindings: Record<string, string>;
    textBlobBindings: Record<string, string>;
    dataBlobBindings: Record<string, string>;
};
interface SetupMiniflareOptionsProps {
    workerName: string | undefined;
    port: number;
    scriptPath: string;
    localProtocol: "http" | "https";
    ip: string;
    format: CfScriptFormat;
    rules: Config["rules"];
    compatibilityDate: string;
    compatibilityFlags: string[] | undefined;
    usageModel: "bundled" | "unbound" | undefined;
    kv_namespaces: CfKvNamespace[] | undefined;
    queueBindings: CfQueue[] | undefined;
    queueConsumers: Config["queues"]["consumers"];
    r2_buckets: CfR2Bucket[] | undefined;
    d1_databases: CfD1Database[] | undefined;
    internalDurableObjects: CfDurableObject[];
    externalDurableObjects: CfDurableObject[];
    localPersistencePath: string | null;
    liveReload: boolean;
    assetPaths: AssetPaths | undefined;
    vars: CfVars | undefined;
    wasmBindings: Record<string, string>;
    textBlobBindings: Record<string, string>;
    dataBlobBindings: Record<string, string>;
    crons: Config["triggers"]["crons"];
    upstream: string | undefined;
    workerDefinitions: WorkerRegistry | undefined;
    enablePagesAssetsServiceBinding?: EnablePagesAssetsServiceBindingOptions;
}
export declare function setupMiniflareOptions({ workerName, port, scriptPath, localProtocol, ip, format, rules, compatibilityDate, compatibilityFlags, usageModel, kv_namespaces, queueBindings, queueConsumers, r2_buckets, d1_databases, internalDurableObjects, externalDurableObjects, localPersistencePath, liveReload, assetPaths, vars, wasmBindings, textBlobBindings, dataBlobBindings, crons, upstream, workerDefinitions, enablePagesAssetsServiceBinding, }: SetupMiniflareOptionsProps): {
    miniflareCLIPath: string;
    forkOptions: string[];
    options: MiniflareOptions;
};
export declare function setupNodeOptions({ inspect, inspectorPort, }: {
    inspect: boolean;
    inspectorPort: number;
}): string[];
export interface SetupMiniflare3Options {
    miniflare2Options: MiniflareOptions;
    format: CfScriptFormat;
    bundle: EsbuildBundle;
    log: Miniflare3LogType;
    enablePagesAssetsServiceBinding?: EnablePagesAssetsServiceBindingOptions;
    kvNamespaces: CfKvNamespace[] | undefined;
    r2Buckets: CfR2Bucket[] | undefined;
    d1Databases: CfD1Database[] | undefined;
    authenticatedAccountId: string | true | undefined;
    kvRemote: boolean | undefined;
    inspectorPort: number;
}
export declare function buildMiniflare3Logger(): Promise<Miniflare3LogType>;
export declare function transformMf2OptionsToMf3Options({ miniflare2Options, format, bundle, log, enablePagesAssetsServiceBinding, kvNamespaces, r2Buckets, d1Databases, authenticatedAccountId, kvRemote, inspectorPort, }: SetupMiniflare3Options): Promise<Miniflare3Options>;
export declare function getMiniflare3(): Promise<typeof import("@miniflare/tre")>;
export {};
