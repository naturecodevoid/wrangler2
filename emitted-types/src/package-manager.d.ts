export interface PackageManager {
    cwd: string;
    type: "npm" | "yarn" | "pnpm";
    addDevDeps(...packages: string[]): Promise<void>;
    install(): Promise<void>;
}
export declare function getPackageManager(cwd: string): Promise<PackageManager>;
/**
 * Get the name of the given `packageManager`.
 */
export declare function getPackageManagerName(packageManager: PackageManager): string;
