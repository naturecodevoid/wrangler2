import type { UrlPath } from "../../paths";
import type { RouteConfig } from "./routes";
export declare function generateConfigFromFileTree({ baseDir, baseURL, }: {
    baseDir: string;
    baseURL: UrlPath;
}): Promise<{
    routes: RouteConfig[];
}>;
export declare function compareRoutes({ routePath: routePathA, method: methodA }: RouteConfig, { routePath: routePathB, method: methodB }: RouteConfig): number;
