/**
 * Use this object to find out if we are currently running in a continuous integration environment.
 *
 * The isCI constant imported above cannot be easily mocked for testing.
 * By wrapping this up in a method on an object, it results in clean and testable code.
 */
export declare const CI: {
    /** Is Wrangler currently running in a CI? */
    isCI(): boolean;
};
