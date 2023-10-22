import type { RawConfig } from "./config";
import type { Route, SimpleRoute } from "./config/environment";
import type { WorkerMetadataBinding } from "./create-worker-upload-form";
import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "./yargs-types";
export declare function initOptions(yargs: CommonYargsArgv): import("yargs").Argv<import("./yargs-types").CommonYargsOptions & {
    name: string | undefined;
} & {
    type: string | undefined;
} & {
    site: boolean | undefined;
} & {
    yes: boolean | undefined;
} & {
    "from-dash": string | undefined;
}>;
declare type InitArgs = StrictYargsOptionsToInterface<typeof initOptions>;
export declare type ServiceMetadataRes = {
    id: string;
    default_environment: {
        environment: string;
        created_on: string;
        modified_on: string;
        script: {
            id: string;
            tag: string;
            etag: string;
            handlers: string[];
            modified_on: string;
            created_on: string;
            migration_tag: string;
            usage_model: "bundled" | "unbound";
            compatibility_date: string;
            last_deployed_from?: "wrangler" | "dash" | "api";
        };
    };
    created_on: string;
    modified_on: string;
    usage_model: "bundled" | "unbound";
    environments: [
        {
            environment: string;
            created_on: string;
            modified_on: string;
        }
    ];
};
export declare type RawSimpleRoute = {
    pattern: string;
};
export declare type RawRoutes = (RawSimpleRoute | Exclude<Route, SimpleRoute>) & {
    id: string;
};
export declare type RoutesRes = RawRoutes[];
export declare type CronTriggersRes = {
    schedules: [
        {
            cron: string;
            created_on: Date;
            modified_on: Date;
        }
    ];
};
export declare function initHandler(args: InitArgs): Promise<void>;
export declare function mapBindings(bindings: WorkerMetadataBinding[]): RawConfig;
export {};
