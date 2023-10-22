interface PagesPublishOptions {
    /**
     * Path to static assets to publish to Pages
     */
    directory: string;
    /**
     * The Cloudflare Account ID that owns the project that's
     * being published
     */
    accountId: string;
    /**
     * The name of the project to be published
     */
    projectName: string;
    /**
     * Branch name to use. Defaults to production branch
     */
    branch?: string;
    /**
     * Whether or not to skip local file upload result caching
     */
    skipCaching?: boolean;
    /**
     * Commit message associated to deployment
     */
    commitMessage?: string;
    /**
     * Commit hash associated to deployment
     */
    commitHash?: string;
    /**
     * Whether or not the deployment should be considered to be
     * in a dirty commit state
     */
    commitDirty?: boolean;
    /**
     * Path to the project's functions directory. Default uses
     * the current working directory + /functions since this is
     * typically called in a CLI
     */
    functionsDirectory?: string;
    /**
     * Whether to run bundling on `_worker.js` before deploying.
     * Default: false
     */
    bundle?: boolean;
}
/**
 * Publish a directory to an account/project.
 * NOTE: You will need the `CLOUDFLARE_API_KEY` environment
 * variable set
 */
export declare function publish({ directory, accountId, projectName, branch, skipCaching, commitMessage, commitHash, commitDirty, functionsDirectory: customFunctionsDirectory, bundle, }: PagesPublishOptions): Promise<{
    environment: "production" | "preview";
    id: string;
    url: string;
    project_name: string;
    build_config: {
        build_command: string;
        destination_dir: string;
        root_dir: string;
        web_analytics_tag?: string | undefined;
        web_analytics_token?: string | undefined;
        fast_builds?: boolean | undefined;
    };
    created_on: string;
    production_branch: string;
    project_id: string;
    deployment_trigger: {
        type: string;
        metadata: {
            branch: string;
            commit_hash: string;
            commit_message: string;
        };
    };
    latest_stage: {
        name: "build" | "queued" | "initialize" | "clone_repo" | "deploy";
        status: "active" | "canceled" | "success" | "idle" | "failure" | "skipped";
        started_on: string | null;
        ended_on: string | null;
    };
    stages: {
        name: "build" | "queued" | "initialize" | "clone_repo" | "deploy";
        status: "active" | "canceled" | "success" | "idle" | "failure" | "skipped";
        started_on: string | null;
        ended_on: string | null;
    }[];
    aliases: string[];
    modified_on: string;
    short_id: string;
    build_image_major_version: number;
    kv_namespaces?: any;
    source?: {
        type: "github" | "gitlab";
        config: {
            owner: string;
            repo_name: string;
            production_branch?: string | undefined;
            pr_comments_enabled?: boolean | undefined;
            deployments_enabled?: boolean | undefined;
            production_deployments_enabled?: boolean | undefined;
            preview_deployment_setting?: "none" | "all" | "custom" | undefined;
            preview_branch_includes?: string[] | undefined;
            preview_branch_excludes?: string[] | undefined;
        };
    } | undefined;
    env_vars?: any;
    durable_object_namespaces?: any;
    is_skipped?: boolean | undefined;
    files?: {
        [x: string]: string | undefined;
    } | undefined;
}>;
export {};
