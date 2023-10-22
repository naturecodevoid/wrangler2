import type { Config } from "./config";
import type { WorkerMetadataBinding } from "./create-worker-upload-form";
import type { CommonYargsOptions } from "./yargs-types";
import type { ArgumentsCamelCase } from "yargs";
declare type DeploymentDetails = {
    id: string;
    number: string;
    annotations: {
        "workers/triggered_by": string;
        "workers/rollback_from": string;
        "workers/message": string;
    };
    metadata: {
        author_id: string;
        author_email: string;
        source: "api" | "dash" | "wrangler" | "terraform" | "other";
        created_on: string;
        modified_on: string;
    };
    resources: {
        script: {
            handlers: string[];
        };
        bindings: WorkerMetadataBinding[];
        script_runtime: {
            compatibility_date: string | undefined;
            compatibility_flags: string[] | undefined;
            usage_model: string | undefined;
        };
    };
};
export declare type DeploymentListResult = {
    latest: DeploymentDetails;
    items: DeploymentDetails[];
};
export declare function deployments(accountId: string, scriptName: string | undefined, { send_metrics: sendMetrics }?: {
    send_metrics?: Config["send_metrics"];
}): Promise<void>;
export declare function rollbackDeployment(accountId: string, scriptName: string | undefined, { send_metrics: sendMetrics }: {
    send_metrics?: Config["send_metrics"];
} | undefined, deploymentId: string | undefined, message: string | undefined): Promise<void>;
export declare function viewDeployment(accountId: string, scriptName: string | undefined, { send_metrics: sendMetrics }: {
    send_metrics?: Config["send_metrics"];
} | undefined, deploymentId: string | undefined): Promise<void>;
export declare function commonDeploymentCMDSetup(yargs: ArgumentsCamelCase<CommonYargsOptions>, deploymentsWarning: string): Promise<{
    accountId: string;
    scriptName: string | undefined;
    config: Config;
}>;
export declare function addHyphens(uuid: string | null): string | null;
export {};
