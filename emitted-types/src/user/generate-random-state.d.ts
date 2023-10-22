/**
 * Generates random state to be passed for anti-csrf.
 * extracted from  user.tsx to make it possible to
 * mock the generated URL
 */
export declare function generateRandomState(lengthOfState: number): string;
