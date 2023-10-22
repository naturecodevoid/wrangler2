import type { DevProps } from "./dev";
import type { LocalProps } from "./local";
export declare function startDevServer(props: DevProps & {
    local: boolean;
    disableDevRegistry: boolean;
}): Promise<{
    stop: () => Promise<void>;
    inspectorUrl: string | undefined;
} | {
    stop: () => Promise<void>;
    inspectorUrl?: undefined;
} | undefined>;
export declare function startLocalServer({ name: workerName, bundle, format, compatibilityDate, compatibilityFlags, usageModel, bindings, workerDefinitions, assetPaths, initialPort, inspectorPort, rules, localPersistencePath, liveReload, initialIp, crons, queueConsumers, localProtocol, localUpstream, inspect, onReady, enablePagesAssetsServiceBinding, experimentalLocal, accountId, experimentalLocalRemoteKv, }: LocalProps): Promise<{
    inspectorUrl: string | undefined;
    stop: () => void;
}>;
