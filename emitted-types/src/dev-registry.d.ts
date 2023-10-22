import type { Config } from "./config";
export declare type WorkerRegistry = Record<string, WorkerDefinition>;
declare type WorkerDefinition = {
    port: number | undefined;
    protocol: "http" | "https" | undefined;
    host: string | undefined;
    mode: "local" | "remote";
    headers?: Record<string, string>;
    durableObjects: {
        name: string;
        className: string;
    }[];
    durableObjectsHost?: string;
    durableObjectsPort?: number;
};
/**
 * Start the service registry. It's a simple server
 * that exposes endpoints for registering and unregistering
 * services, as well as getting the state of the registry.
 */
export declare function startWorkerRegistry(): Promise<void>;
/**
 * Stop the service registry.
 */
export declare function stopWorkerRegistry(): Promise<void>;
/**
 * Register a worker in the registry.
 */
export declare function registerWorker(name: string, definition: WorkerDefinition): Promise<import("undici").Response | undefined>;
/**
 * Unregister a worker from the registry.
 */
export declare function unregisterWorker(name: string): Promise<void>;
/**
 * Get the state of the service registry.
 */
export declare function getRegisteredWorkers(): Promise<WorkerRegistry | undefined>;
/**
 * a function that takes your serviceNames and durableObjectNames and returns a
 * list of the running workers that we're bound to
 */
export declare function getBoundRegisteredWorkers({ services, durableObjects, }: {
    services: Config["services"] | undefined;
    durableObjects: Config["durable_objects"] | undefined;
}): Promise<{
    [k: string]: WorkerDefinition;
}>;
export {};
