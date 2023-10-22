/// <reference types="node" />
import type { Config } from "../config";
declare type KvArgs = {
    binding?: string;
    "namespace-id"?: string;
    preview?: boolean;
};
/**
 * Create a new namespace under the given `accountId` with the given `title`.
 *
 * @returns the generated id of the created namespace.
 */
export declare function createKVNamespace(accountId: string, title: string): Promise<string>;
/**
 * The information about a namespace that is returned from `listNamespaces()`.
 */
export interface KVNamespaceInfo {
    id: string;
    title: string;
    supports_url_encoding?: boolean;
}
/**
 * Fetch a list of all the namespaces under the given `accountId`.
 */
export declare function listKVNamespaces(accountId: string): Promise<KVNamespaceInfo[]>;
export interface NamespaceKeyInfo {
    name: string;
    expiration?: number;
    metadata?: {
        [key: string]: unknown;
    };
}
export declare function listKVNamespaceKeys(accountId: string, namespaceId: string, prefix?: string): Promise<NamespaceKeyInfo[]>;
export declare function deleteKVNamespace(accountId: string, namespaceId: string): Promise<{
    id: string;
}>;
/**
 * Information about a key-value pair, including its "metadata" fields.
 */
export interface KeyValue {
    key: string;
    value: string | Buffer;
    expiration?: number;
    expiration_ttl?: number;
    metadata?: object;
    base64?: boolean;
}
/**
 * Is the given object a valid `KeyValue` type?
 */
export declare function isKVKeyValue(keyValue: unknown): keyValue is KeyValue;
/**
 * Get all the properties on the `keyValue` that are not expected.
 */
export declare function unexpectedKVKeyValueProps(keyValue: KeyValue): string[];
export declare function putKVKeyValue(accountId: string, namespaceId: string, keyValue: KeyValue): Promise<unknown>;
export declare function getKVKeyValue(accountId: string, namespaceId: string, key: string): Promise<ArrayBuffer>;
export declare function deleteKVKeyValue(accountId: string, namespaceId: string, key: string): Promise<unknown>;
export declare function putKVBulkKeyValue(accountId: string, namespaceId: string, keyValues: KeyValue[], quiet?: boolean): Promise<void>;
export declare function deleteKVBulkKeyValue(accountId: string, namespaceId: string, keys: string[], quiet?: boolean): Promise<void>;
export declare function getKVNamespaceId({ preview, binding, "namespace-id": namespaceId }: KvArgs, config: Config): string;
/**
 * KV namespace binding names must be valid JS identifiers.
 */
export declare function isValidKVNamespaceBinding(binding: string | undefined): binding is string;
export {};
