import type { BuildFailure } from "esbuild";
export declare const LOGGER_LEVELS: {
    readonly none: -1;
    readonly error: 0;
    readonly warn: 1;
    readonly info: 2;
    readonly log: 3;
    readonly debug: 4;
};
export declare type LoggerLevel = keyof typeof LOGGER_LEVELS;
export declare type TableRow<Keys extends string> = Record<Keys, string>;
export declare class Logger {
    constructor();
    loggerLevel: "none" | "error" | "warn" | "info" | "log" | "debug";
    columns: number;
    debug: (...args: unknown[]) => void;
    info: (...args: unknown[]) => void;
    log: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    table<Keys extends string>(data: TableRow<Keys>[]): void;
    private doLog;
    private formatMessage;
}
/**
 * A drop-in replacement for `console` for outputting logging messages.
 *
 * Errors and Warnings will get additional formatting to highlight them to the user.
 * You can also set a `logger.loggerLevel` value to one of "debug", "log", "warn" or "error",
 * to filter out logging messages.
 */
export declare const logger: Logger;
/**
 * Logs all errors/warnings associated with an esbuild BuildFailure in the same
 * style esbuild would.
 */
export declare function logBuildFailure(failure: BuildFailure): void;
