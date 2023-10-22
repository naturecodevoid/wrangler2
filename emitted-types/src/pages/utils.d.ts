import type { BundleResult } from "../bundle";
export declare const RUNNING_BUILDERS: BundleResult[];
export declare const CLEANUP_CALLBACKS: (() => void)[];
export declare const CLEANUP: () => void;
export declare const pagesBetaWarning = "\uD83D\uDEA7 'wrangler pages <command>' is a beta command. Please report any issues to https://github.com/cloudflare/workers-sdk/issues/new/choose";
export declare function isUrl(maybeUrl?: string): maybeUrl is string;
