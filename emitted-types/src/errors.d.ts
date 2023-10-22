export declare class DeprecationError extends Error {
    constructor(message: string);
}
export declare class FatalError extends Error {
    readonly code?: number | undefined;
    constructor(message?: string, code?: number | undefined);
}
