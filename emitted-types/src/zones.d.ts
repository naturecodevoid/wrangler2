import type { Route } from "./config/environment";
/**
 * An object holding information about a zone for publishing.
 */
export interface Zone {
    id: string;
    host: string;
}
/**
 * Get the hostname on which to run a Worker.
 *
 * The most accurate place is usually
 * `route.pattern`, as that includes any subdomains. For example:
 * ```js
 * {
 * 	pattern: foo.example.com
 * 	zone_name: example.com
 * }
 * ```
 * However, in the case of patterns that _can't_ be parsed as a hostname
 * (primarily the pattern `*/ export declare function getHostFromRoute(route: Route): string | undefined;
/**
 * Try to compute the a zone ID and host name for one or more routes.
 *
 * When we're given a route, we do 2 things:
 * - We try to extract a host from it
 * - We try to get a zone id from the host
 */
export declare function getZoneForRoute(route: Route): Promise<Zone | undefined>;
/**
 * Given something that resembles a URL, try to extract a host from it.
 */
export declare function getHostFromUrl(urlLike: string): string | undefined;
/**
 * Given something that resembles a host, try to infer a zone id from it.
 *
 * It's hard to get a 'valid' domain from a string, so we don't even try to validate TLDs, etc.
 * For each domain-like part of the host (e.g. w.x.y.z) try to get a zone id for it by
 * lopping off subdomains until we get a hit from the API.
 */
export declare function getZoneIdFromHost(host: string): Promise<string>;
/**
 * An object holding information about an assigned worker route, returned from the API
 */
interface WorkerRoute {
    id: string;
    pattern: string;
    script: string;
}
/**
 * Given a zone within the user's account, return a list of all assigned worker routes
 */
export declare function getRoutesForZone(zone: string): Promise<WorkerRoute[]>;
/**
 * Given an invalid route, sort the valid routes by closeness to the invalid route (levenstein distance)
 */
export declare function findClosestRoute(providedRoute: string, assignedRoutes: WorkerRoute[]): WorkerRoute[];
/**
 * Given a route (must be assigned and within the correct zone), return the name of the worker assigned to it
 */
export declare function getWorkerForZone(worker: string): Promise<string>;
export {};
