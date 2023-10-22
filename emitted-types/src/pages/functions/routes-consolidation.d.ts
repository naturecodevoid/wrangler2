/**
 * consolidateRoutes consolidates redundant routes - eg. ["/api/*"", "/api/foo"] -> ["/api/*""]
 * @param routes If this is the same order as Functions routes (with most-specific first),
 *   it will be more efficient to reverse it first. Should be in the format: /api/foo, /api/*
 * @returns Non-redundant list of routes
 */
export declare function consolidateRoutes(routes: string[]): string[];
/**
 * Shortens a route until it's within the rule length limit defined in
 * constants.MAX_FUNCTIONS_ROUTES_RULE_LENGTH
 * Eg. /aaa/bbb -> /aaa/*
 * @param routeToShorten Route to shorten if needed
 * @param maxLength Max length of route to try to shorten to
 */
export declare function shortenRoute(routeToShorten: string, maxLength?: number): string;
