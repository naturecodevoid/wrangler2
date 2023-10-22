import type { RoutesJSONSpec } from "./routes-transformation";
export declare enum RoutesValidationError {
    INVALID_JSON_SPEC = 0,
    NO_INCLUDE_RULES = 1,
    INVALID_RULES = 2,
    TOO_MANY_RULES = 3,
    RULE_TOO_LONG = 4,
    OVERLAPPING_RULES = 5
}
/**
 *  Check if given routes data is a valid RoutesJSONSpec
 */
export declare function isRoutesJSONSpec(data: unknown): data is RoutesJSONSpec;
export declare function validateRoutes(routesJSON: RoutesJSONSpec, routesPath: string): void;
