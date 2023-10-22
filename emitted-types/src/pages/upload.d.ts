import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
declare type UploadArgs = StrictYargsOptionsToInterface<typeof Options>;
export declare function Options(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    directory: string;
}, "output-manifest-path" | "skip-caching"> & import("yargs").InferredOptionTypes<{
    "output-manifest-path": {
        type: "string";
        description: string;
    };
    "skip-caching": {
        type: "boolean";
        description: string;
    };
}>>;
export declare const Handler: ({ directory, outputManifestPath, skipCaching, }: UploadArgs) => Promise<void>;
export declare const upload: (args: {
    directory: string;
    jwt: string;
    skipCaching: boolean;
} | {
    directory: string;
    accountId: string;
    projectName: string;
    skipCaching: boolean;
}) => Promise<{
    [k: string]: string;
}>;
export {};
