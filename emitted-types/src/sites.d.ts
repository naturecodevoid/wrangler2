import type { Config } from "./config";
/**
 * Upload the assets found within the `dirPath` directory to the sites assets KV namespace for
 * the worker given by `scriptName`.
 *
 * @param accountId the account to upload to.
 * @param scriptName the name of the worker whose assets we are uploading.
 * @param siteAssets an objects describing what assets to upload, or undefined if there are no assets to upload.
 * @param preview if true then upload to a "preview" KV namespace.
 * @returns a promise for an object mapping the relative paths of the assets to the key of that
 * asset in the KV namespace.
 */
export declare function syncAssets(accountId: string | undefined, scriptName: string, siteAssets: AssetPaths | undefined, preview: boolean, dryRun: boolean | undefined): Promise<{
    manifest: {
        [filePath: string]: string;
    } | undefined;
    namespace: string | undefined;
}>;
/**
 * Information about the assets that should be uploaded
 */
export interface AssetPaths {
    /**
     * Absolute path to the root of the project.
     *
     * This is the directory containing wrangler.toml or cwd if no config.
     */
    baseDirectory: string;
    /**
     * The path to the assets directory, relative to the `baseDirectory`.
     */
    assetDirectory: string;
    /**
     * An array of patterns that match files that should be uploaded.
     */
    includePatterns: string[];
    /**
     * An array of patterns that match files that should not be uploaded.
     */
    excludePatterns: string[];
}
/**
 * Get an object that describes what assets to upload, if any.
 *
 * Uses the args (passed from the command line) if available,
 * falling back to those defined in the config.
 *
 * (This function corresponds to --assets/config.assets)
 *
 */
export declare function getAssetPaths(config: Config, assetDirectory: string | undefined): AssetPaths | undefined;
/**
 * Get an object that describes what site assets to upload, if any.
 *
 * Uses the args (passed from the command line) if available,
 * falling back to those defined in the config.
 *
 * (This function corresponds to --site/config.site)
 *
 */
export declare function getSiteAssetPaths(config: Config, assetDirectory?: string, includePatterns?: string[], excludePatterns?: string[]): AssetPaths | undefined;
