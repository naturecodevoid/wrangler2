import type { BundleResult } from "./bundle";
import type { Config } from "./config";
import type { Entry } from "./entry";
export default function traverseModuleGraph(entry: Entry, rules: Config["rules"]): Promise<BundleResult>;
