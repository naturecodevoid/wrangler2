import type { OnlyCamelCase } from "./config/config";
import type { ArgumentsCamelCase, Argv } from "yargs";
/**
 * Yargs options included in every wrangler command.
 */
export interface CommonYargsOptions {
    v: boolean | undefined;
    config: string | undefined;
    env: string | undefined;
    "experimental-json-config": boolean | undefined;
}
export declare type CommonYargsArgv = Argv<CommonYargsOptions>;
export declare type YargvToInterface<T> = T extends Argv<infer P> ? ArgumentsCamelCase<P> : never;
declare type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
/**
 * Given some Yargs Options function factory, extract the interface
 * that corresponds to the yargs arguments, remove index types, and only allow camelCase
 */
export declare type StrictYargsOptionsToInterface<T extends (yargs: CommonYargsArgv) => Argv> = T extends (yargs: CommonYargsArgv) => Argv<infer P> ? OnlyCamelCase<RemoveIndex<ArgumentsCamelCase<P>>> : never;
export {};
