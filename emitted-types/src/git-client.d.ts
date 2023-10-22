/**
 * Check whether the given current working directory is within a git repository
 * by looking for a `.git` directory in this or an ancestor directory.
 */
export declare function isInsideGitRepo(cwd: string): Promise<boolean>;
/**
 * Check whether git is installed by trying to run it.
 *
 * @returns a `string` containing the version of git that's installed, or `null` if git isn't installed
 */
export declare function getGitVersioon(): Promise<string | null>;
/**
 * Initialize a new Worker project with a git repository.
 *
 * We want the branch to be called `main` but earlier versions of git do not support `--initial-branch`.
 * If that is the case then we just fallback to the default initial branch name.
 */
export declare function initializeGit(cwd: string): Promise<void>;
/**
 * Clone a repository into a given directory, optionally applying a given filter for a sparse checkout.
 * Note: this does NOT initialize a git repository, that must be done separately.
 *
 * @param remote the remote repository to clone
 * @param targetDirectory the directory to clone into
 * @param subdirectory optional, clone a subdirectory instead of the whole repo
 */
export declare function cloneIntoDirectory(remote: string, targetDirectory: string, subdirectory?: string): Promise<void>;
