export declare type Database = {
    uuid: string;
    previewDatabaseUuid?: string;
    name: string;
    binding: string;
    internal_env?: string;
    migrationsTableName: string;
    migrationsFolderPath: string;
};
export declare type Backup = {
    id: string;
    database_id: string;
    created_at: string;
    state: "progress" | "done";
    num_tables: number;
    file_size: number;
    size?: string;
};
export declare type Migration = {
    id: string;
    name: string;
    applied_at: string;
};
