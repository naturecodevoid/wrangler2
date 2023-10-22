/// <reference types="node" />
import TOML from "@iarna/toml";
export declare type Message = {
    text: string;
    location?: Location;
    notes?: Message[];
    kind?: "warning" | "error";
};
export declare type Location = File & {
    line: number;
    column: number;
    length?: number;
    lineText?: string;
    suggestion?: string;
};
export declare type File = {
    file?: string;
    fileText?: string;
};
/**
 * Formats a `Message` using esbuild's pretty-printing algorithm.
 */
export declare function formatMessage({ text, notes, location, kind }: Message, color?: boolean): string;
/**
 * An error that's thrown when something fails to parse.
 */
export declare class ParseError extends Error implements Message {
    readonly text: string;
    readonly notes: Message[];
    readonly location?: Location;
    readonly kind: "warning" | "error";
    constructor({ text, notes, location, kind }: Message);
}
/**
 * A wrapper around `TOML.parse` that throws a `ParseError`.
 */
export declare function parseTOML(input: string, file?: string): TOML.JsonMap | never;
/**
 * A minimal type describing a package.json file.
 */
export declare type PackageJSON = {
    devDependencies?: Record<string, unknown>;
    dependencies?: Record<string, unknown>;
    scripts?: Record<string, unknown>;
};
/**
 * A typed version of `parseJSON()`.
 */
export declare function parsePackageJSON<T extends PackageJSON = PackageJSON>(input: string, file?: string): T;
/**
 * A wrapper around `JSON.parse` that throws a `ParseError`.
 */
export declare function parseJSON<T>(input: string, file?: string): T;
/**
 * A wrapper around `JSONC.parse` that throws a `ParseError`.
 */
export declare function parseJSONC<T>(input: string, file?: string): T;
/**
 * Reads a file into a node Buffer.
 */
export declare function readFileSyncToBuffer(file: string): Buffer;
/**
 * Reads a file and parses it based on its type.
 */
export declare function readFileSync(file: string): string;
/**
 * Calculates the line and column location from an index.
 */
export declare function indexLocation(file: File, index: number): Location;
/**
 * Guesses the line and column location of a search query.
 */
export declare function searchLocation(file: File, query: unknown): Location;
/**
 * Parse a human-readable time duration in seconds (including fractional)
 *
 * Invalid values will return NaN
 */
export declare function parseHumanDuration(s: string): number;
