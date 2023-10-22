import { ROUTES_SPEC_VERSION } from "../constants";
import type { RouteConfig } from "./routes";
/** Interface for _routes.json */
export interface RoutesJSONSpec {
    version: typeof ROUTES_SPEC_VERSION;
    description?: string;
    include: string[];
    exclude: string[];
}
declare type RoutesJSONRouteInput = Pick<RouteConfig, "routePath" | "middleware">[];
export declare function convertRoutesToGlobPatterns(routes: RoutesJSONRouteInput): string[];
/**
 * Converts Functions routes like /foo/:bar to a Routing object that's used
 * to determine if a request should run in the Functions user-worker.
 * Also consolidates redundant routes such as [/foo/bar, /foo/:bar] -> /foo/*
 *
 * @returns RoutesJSONSpec to be written to _routes.json
 */
export declare function convertRoutesToRoutesJSONSpec(routes: RoutesJSONRouteInput): RoutesJSONSpec;
/**
 * Optimizes and returns a new Routes JSON Spec instance performing
 * de-duping, consolidation, truncation, and sorting
 */
export declare function optimizeRoutesJSONSpec(spec: RoutesJSONSpec): RoutesJSONSpec;
/**
 * Simplified routes comparison (copied from the one in filepath-routing.)
 * This version will sort most-specific to least-specific, but the input is simplified
 * routes like /foo/*, /foo, etc
 */
export declare function compareRoutes(routeA: string, routeB: string): number;
export {};
