declare type DiscriminatedPath<Discriminator extends string> = string & {
    _discriminator: Discriminator;
};
/**
 * A branded string that expects to be URL compatible.
 *
 * Require this type when you want callers to ensure that they have converted file-path strings into URL-safe paths.
 */
export declare type UrlPath = DiscriminatedPath<"UrlPath">;
/**
 * Convert a file-path string to a URL-path string.
 *
 * Use this helper to convert a `string` to a `UrlPath` when it is not clear whether the string needs normalizing.
 * Replaces all back-slashes with forward-slashes, and throws an error if the path contains a drive letter (e.g. `C:`).
 */
export declare function toUrlPath(filePath: string): UrlPath;
/**
 * Get a human-readable path, relative to process.cwd(), prefixed with ./ if
 * in a nested subdirectory, to aid with readability.
 * Only used for logging e.g. `Loading DB at ${readableRelative(dbPath)}`:
 *
 * E.g. (assuming process.cwd() is /pwd)
 *
 *	readableRelative('/pwd/wrangler.toml') => 'wrangler.toml'
 *	readableRelative('/wrangler.toml') => '../wrangler.toml'
 *	readableRelative('/pwd/subdir/wrangler.toml') => './subdir/wrangler.toml'
 *
 * */
export declare function readableRelative(to: string): string;
/**
 * Use this function (rather than Node.js constants like `__dirname`) to specify
 * paths that are relative to the base path of the Wrangler package.
 *
 * It is important to use this function because it reliably maps to the root of the package
 * no matter whether the code has been bundled or not.
 */
export declare function getBasePath(): string;
export {};
