import { RoutesValidationError } from "./functions/routes-validation";
/**
 * Exit code for `pages functions build` when no routes are found.
 */
export declare const EXIT_CODE_FUNCTIONS_NO_ROUTES_ERROR = 156;
export declare const EXIT_CODE_FUNCTIONS_NOTHING_TO_BUILD_ERROR = 157;
/**
 * Pages error when no routes are found in the functions directory
 */
export declare class FunctionsNoRoutesError extends Error {
    constructor(message: string);
}
/**
 * Warning message for when buildFunctions throws FunctionsNoRoutesError
 */
export declare function getFunctionsNoRoutesWarning(functionsDirectory: string, suffix?: string): string;
export declare function getRoutesValidationErrorMessage(errorCode: RoutesValidationError, routesPath: string): string;
