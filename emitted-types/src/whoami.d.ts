export declare function whoami(): Promise<undefined>;
declare type AuthType = "Global API Key" | "API Token" | "OAuth Token";
export interface UserInfo {
    apiToken: string;
    authType: AuthType;
    email: string | undefined;
    accounts: AccountInfo[];
    tokenPermissions: string[] | undefined;
}
export declare function getUserInfo(): Promise<UserInfo | undefined>;
declare type AccountInfo = {
    name: string;
    id: string;
};
export {};
