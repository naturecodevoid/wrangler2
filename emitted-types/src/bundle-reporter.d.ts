import type { CfModule } from "./worker";
import type { Metafile } from "esbuild";
export declare function printBundleSize(main: {
    name: string;
    content: string;
}, modules: CfModule[]): Promise<void>;
export declare function printOffendingDependencies(dependencies: Metafile["outputs"][string]["inputs"]): void;
