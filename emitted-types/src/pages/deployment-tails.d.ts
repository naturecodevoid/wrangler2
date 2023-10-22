import type { CommonYargsArgv, StrictYargsOptionsToInterface } from "../yargs-types";
export declare function Options(yargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    deployment: string | undefined;
}, "environment" | "project-name"> & import("yargs").InferredOptionTypes<{
    "project-name": {
        type: "string";
        description: string;
    };
    environment: {
        type: "string";
        choices: string[];
        default: string;
        description: string;
    };
}> & {
    format: string;
} & {
    debug: boolean;
} & {
    status: (string | number)[] | undefined;
} & {
    header: string | undefined;
} & {
    method: string[] | undefined;
} & {
    search: string | undefined;
} & {
    "sampling-rate": number | undefined;
} & {
    ip: string[] | undefined;
}>;
export declare function Handler({ deployment, projectName, environment, header, ip: clientIp, method, samplingRate, search, status, format, debug, ...args }: StrictYargsOptionsToInterface<typeof Options>): Promise<void>;
