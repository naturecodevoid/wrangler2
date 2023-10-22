import type { Config, ConfigModuleRuleType } from "./config";
import type { CfModule, CfModuleType, CfScriptFormat } from "./worker";
import type esbuild from "esbuild";
export declare const ModuleTypeToRuleType: Record<CfModuleType, ConfigModuleRuleType>;
export declare const DEFAULT_MODULE_RULES: Config["rules"];
export declare function parseRules(userRules?: Config["rules"]): {
    rules: import("./config/environment").Rule[];
    removedRules: import("./config/environment").Rule[];
};
export declare function matchFiles(files: string[], relativeTo: string, { rules, removedRules, }: {
    rules: Config["rules"];
    removedRules: Config["rules"];
}): Promise<CfModule[]>;
export default function createModuleCollector(props: {
    format: CfScriptFormat;
    rules?: Config["rules"];
    wrangler1xlegacyModuleReferences: {
        rootDirectory: string;
        fileNames: Set<string>;
    };
    preserveFileNames?: boolean;
}): {
    modules: CfModule[];
    plugin: esbuild.Plugin;
};
