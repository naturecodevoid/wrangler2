import type { CommonYargsArgv } from "../yargs-types";
export declare function kvNamespace(kvYargs: CommonYargsArgv): import("yargs").Argv<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    namespace: string;
} & {
    preview: boolean | undefined;
} & {
    binding: string | undefined;
} & {
    "namespace-id": string | undefined;
}, "preview"> & {
    preview: boolean | undefined;
}>;
export declare const kvKey: (kvYargs: CommonYargsArgv) => import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    key: string;
} & {
    value: string | undefined;
} & {
    binding: string | undefined;
} & {
    "namespace-id": string | undefined;
} & {
    preview: boolean | undefined;
} & {
    ttl: number | undefined;
} & {
    expiration: number | undefined;
} & {
    metadata: string | undefined;
} & {
    path: string | undefined;
}, "binding"> & {
    binding: string | undefined;
}, "namespace-id"> & {
    "namespace-id": string | undefined;
}, "preview"> & {
    preview: boolean;
} & {
    prefix: string | undefined;
}, "key"> & {
    key: string;
}, "binding"> & {
    binding: string | undefined;
}, "namespace-id"> & {
    "namespace-id": string | undefined;
}, "preview"> & {
    preview: boolean | undefined;
}, "preview"> & {
    preview: boolean;
} & {
    text: boolean;
}, "key"> & {
    key: string;
}, "binding"> & {
    binding: string | undefined;
}, "namespace-id"> & {
    "namespace-id": string | undefined;
}, "preview"> & {
    preview: boolean | undefined;
}>;
export declare const kvBulk: (kvYargs: CommonYargsArgv) => import("yargs").Argv<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("yargs").Omit<import("../yargs-types").CommonYargsOptions & {
    filename: string;
} & {
    binding: string | undefined;
} & {
    "namespace-id": string | undefined;
} & {
    preview: boolean | undefined;
}, "filename"> & {
    filename: string;
}, "binding"> & {
    binding: string | undefined;
}, "namespace-id"> & {
    "namespace-id": string | undefined;
}, "preview"> & {
    preview: boolean | undefined;
} & {
    force: boolean | undefined;
}>;
