interface GenerateAuthUrlProps {
    authUrl: string;
    clientId: string;
    callbackUrl: string;
    scopes: string[];
    stateQueryParam: string;
    codeChallenge: string;
}
/**
 * generateAuthUrl was extracted from getAuthURL in user.tsx
 * to make it possible to mock the generated URL
 */
export declare const generateAuthUrl: ({ authUrl, clientId, callbackUrl, scopes, stateQueryParam, codeChallenge, }: GenerateAuthUrlProps) => string;
export {};
