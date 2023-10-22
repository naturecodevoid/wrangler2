/// <reference types="node" />
import type { BundleResult } from "../../bundle";
import type { Blob } from "node:buffer";
/**
 * Takes a Worker bundle - `BundleResult` - and generates the _worker.bundle
 * contents
 */
export declare function createUploadWorkerBundleContents(workerBundle: BundleResult): Promise<Blob>;
