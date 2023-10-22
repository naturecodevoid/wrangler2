import type { Config } from "../config";
import type { Database } from "./types";
export declare function getDatabaseInfoFromConfig(config: Config, name: string): Database | null;
export declare const getDatabaseByNameOrBinding: (config: Config, accountId: string, name: string) => Promise<Database>;
export declare const d1BetaWarning: string;
