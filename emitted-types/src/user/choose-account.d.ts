export declare type ChooseAccountItem = {
    id: string;
    name: string;
};
/**
 * Infer a list of available accounts for the current user.
 */
export declare function getAccountChoices(): Promise<ChooseAccountItem[]>;
