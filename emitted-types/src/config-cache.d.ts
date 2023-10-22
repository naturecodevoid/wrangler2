export declare function getConfigCache<T>(fileName: string): Partial<T>;
export declare function saveToConfigCache<T>(fileName: string, newValues: Partial<T>): void;
export declare function purgeConfigCaches(): void;
