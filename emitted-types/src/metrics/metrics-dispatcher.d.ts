import type { MetricsConfigOptions } from "./metrics-config";
export declare function getMetricsDispatcher(options: MetricsConfigOptions): Promise<{
    /**
     * Dispatch a event to the analytics target.
     *
     * The event should follow these conventions
     *  - name is of the form `[action] [object]` (lower case)
     *  - additional properties are camelCased
     */
    sendEvent(name: string, properties?: Properties): Promise<void>;
    /**
     * Dispatch a user profile information to the analytics target.
     *
     * This call can be used to inform the analytics target of relevant properties associated
     * with the current user.
     */
    identify(properties: Properties): Promise<void>;
}>;
export declare type Properties = Record<string, unknown>;
