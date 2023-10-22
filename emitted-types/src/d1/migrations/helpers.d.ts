import type { ConfigFields, DevConfig, Environment } from "../../config";
import type { QueryResult } from "../execute";
export declare function getMigrationsPath({ projectPath, migrationsFolderPath, createIfMissing, }: {
    projectPath: string;
    migrationsFolderPath: string;
    createIfMissing: boolean;
}): Promise<string>;
export declare function getUnappliedMigrations({ migrationsTableName, migrationsPath, local, config, name, persistTo, preview, }: {
    migrationsTableName: string;
    migrationsPath: string;
    local: boolean | undefined;
    config: ConfigFields<DevConfig> & Environment;
    name: string;
    persistTo: string | undefined;
    preview: boolean | undefined;
}): Promise<Array<string>>;
export declare function getNextMigrationNumber(migrationsPath: string): number;
export declare const initMigrationsTable: ({ migrationsTableName, local, config, name, persistTo, preview, }: {
    migrationsTableName: string;
    local: boolean | undefined;
    config: ConfigFields<DevConfig> & Environment;
    name: string;
    persistTo: string | undefined;
    preview: boolean | undefined;
}) => Promise<QueryResult[] | null>;
