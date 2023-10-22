import { FormData } from "undici";
import type { CfWorkerInit, CfModuleType, CfDurableObjectMigrations } from "./worker.js";
export declare function toMimeType(type: CfModuleType): string;
export declare type WorkerMetadataBinding = {
    type: "plain_text";
    name: string;
    text: string;
} | {
    type: "json";
    name: string;
    json: unknown;
} | {
    type: "wasm_module";
    name: string;
    part: string;
} | {
    type: "text_blob";
    name: string;
    part: string;
} | {
    type: "data_blob";
    name: string;
    part: string;
} | {
    type: "kv_namespace";
    name: string;
    namespace_id: string;
} | {
    type: "send_email";
    name: string;
    destination_address?: string;
    allowed_destination_addresses?: string[];
} | {
    type: "durable_object_namespace";
    name: string;
    class_name: string;
    script_name?: string;
    environment?: string;
} | {
    type: "queue";
    name: string;
    queue_name: string;
} | {
    type: "r2_bucket";
    name: string;
    bucket_name: string;
} | {
    type: "d1";
    name: string;
    id: string;
    internalEnv?: string;
} | {
    type: "service";
    name: string;
    service: string;
    environment?: string;
} | {
    type: "analytics_engine";
    name: string;
    dataset?: string;
} | {
    type: "dispatch_namespace";
    name: string;
    namespace: string;
} | {
    type: "mtls_certificate";
    name: string;
    certificate_id: string;
} | {
    type: "logfwdr";
    name: string;
    destination: string;
};
export interface WorkerMetadata {
    /** The name of the entry point module. Only exists when the worker is in the ES module format */
    main_module?: string;
    /** The name of the entry point module. Only exists when the worker is in the service-worker format */
    body_part?: string;
    compatibility_date?: string;
    compatibility_flags?: string[];
    usage_model?: "bundled" | "unbound";
    migrations?: CfDurableObjectMigrations;
    capnp_schema?: string;
    bindings: WorkerMetadataBinding[];
    keep_bindings?: WorkerMetadataBinding["type"][];
    logpush?: boolean;
    [key: string]: unknown;
}
/**
 * Creates a `FormData` upload from a `CfWorkerInit`.
 */
export declare function createWorkerUploadForm(worker: CfWorkerInit): FormData;
