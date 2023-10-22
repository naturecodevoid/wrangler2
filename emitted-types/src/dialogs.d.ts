export declare class NoDefaultValueProvided extends Error {
    constructor();
}
interface ConfirmOptions {
    defaultValue?: boolean;
}
export declare function confirm(text: string, { defaultValue }?: ConfirmOptions): Promise<boolean>;
interface PromptOptions {
    defaultValue?: string;
    isSecret?: boolean;
}
export declare function prompt(text: string, options?: PromptOptions): Promise<string>;
interface SelectOptions<Values> {
    choices: SelectOption<Values>[];
    defaultOption?: number;
}
interface SelectOption<Values> {
    title: string;
    description?: string;
    value: Values;
}
export declare function select<Values extends string>(text: string, options: SelectOptions<Values>): Promise<Values>;
export {};
