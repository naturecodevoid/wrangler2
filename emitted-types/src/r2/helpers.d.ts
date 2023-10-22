/// <reference types="node" />
/// <reference types="node" />
import { Readable } from "node:stream";
/**
 * Information about a bucket, returned from `listR2Buckets()`.
 */
export interface R2BucketInfo {
    name: string;
    creation_date: string;
}
/**
 * Fetch a list of all the buckets under the given `accountId`.
 */
export declare function listR2Buckets(accountId: string): Promise<R2BucketInfo[]>;
/**
 * Create a bucket with the given `bucketName` within the account given by `accountId`.
 *
 * A 400 is returned if the account already owns a bucket with this name.
 * A bucket must be explicitly deleted to be replaced.
 */
export declare function createR2Bucket(accountId: string, bucketName: string): Promise<void>;
/**
 * Delete a bucket with the given name
 */
export declare function deleteR2Bucket(accountId: string, bucketName: string): Promise<void>;
export declare function bucketAndKeyFromObjectPath(objectPath?: string): {
    bucket: string;
    key: string;
};
/**
 * Downloads an object
 */
export declare function getR2Object(accountId: string, bucketName: string, objectName: string): Promise<Readable>;
/**
 * Uploads an object
 */
export declare function putR2Object(accountId: string, bucketName: string, objectName: string, object: Readable | Buffer, options: Record<string, unknown>): Promise<void>;
/**
 * Delete an Object
 */
export declare function deleteR2Object(accountId: string, bucketName: string, objectName: string): Promise<void>;
