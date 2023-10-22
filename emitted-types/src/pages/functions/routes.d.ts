import type { UrlPath } from "../../paths";
export declare const HTTP_METHODS: readonly ["HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"];
export declare type HTTPMethod = typeof HTTP_METHODS[number];
export declare type RoutesCollection = Array<{
    routePath: UrlPath;
    mountPath: UrlPath;
    method?: HTTPMethod;
    modules: string[];
    middlewares: string[];
}>;
export declare type Config = {
    routes?: RouteConfig[];
    schedules?: unknown;
};
export declare type RouteConfig = {
    routePath: UrlPath;
    mountPath: UrlPath;
    method?: HTTPMethod;
    middleware?: string | string[];
    module?: string | string[];
};
declare type ImportMap = Map<string, {
    filepath: string;
    name: string;
    identifier: string;
}>;
declare type Arguments = {
    config: Config;
    outfile: string;
    srcDir: string;
};
export declare function writeRoutesModule({ config, srcDir, outfile, }: Arguments): Promise<string>;
export declare function parseConfig(config: Config, baseDir: string): {
    routes: RoutesCollection;
    importMap: ImportMap;
};
export declare function generateRoutesModule(importMap: ImportMap, routes: RoutesCollection): string;
export {};
