/**
 * When tailing logs from a worker, oftentimes you don't want to see _every
 * single event_. That's where filters come in. We can send a set of filters
 * to the tail worker, and it will pre-filter any logs for us so that we
 * only recieve the ones we care about.
 */
/**
 * These are the filters we accept in the CLI. They
 * were copied directly from Wrangler v1 in order to
 * maintain compatability, so they aren't actually the exact
 * filters we need to send up to the tail worker. They generally map 1:1,
 * but often require some transformation or
 * renaming to match what it expects.
 *
 * For a full description of each filter, either check the
 * CLI description or see the documentation for `ApiFilter`.
 */
export declare type TailCLIFilters = {
    status?: ("ok" | "error" | "canceled")[];
    header?: string;
    method?: string[];
    search?: string;
    samplingRate?: number;
    clientIp?: string[];
};
/**
 * These are the filters we send to the tail worker. We
 * actually send a list of filters (an array of objects),
 * so rather than having a single TailAPIFilters type,
 * each kind of filter gets its own type and we define
 * TailAPIFilter to be the union of those types.
 */
export declare type TailAPIFilter = SamplingRateFilter | OutcomeFilter | MethodFilter | HeaderFilter | ClientIPFilter | QueryFilter;
/**
 * Filters logs based on a given sampling rate.
 * For example, a `sampling_rate` of 0.25 will let one-quarter of the
 * logs through.
 */
declare type SamplingRateFilter = {
    sampling_rate: number;
};
/**
 * Filters logs based on the outcome of the worker's event handler.
 */
declare type OutcomeFilter = {
    outcome: Outcome[];
};
/**
 * There are five possible outcomes we can get, three of which
 * (exception, exceededCpu, exceededMemory, and unknown) are considered errors
 */
export declare type Outcome = "ok" | "canceled" | "exception" | "exceededCpu" | "exceededMemory" | "unknown";
/**
 * Filters logs based on the HTTP method used for the request
 * that triggered the worker.
 */
declare type MethodFilter = {
    method: string[];
};
/**
 * Filters logs based on an HTTP header on the request that
 * triggered the worker.
 */
declare type HeaderFilter = {
    header: {
        /**
         * Filters on the header "key", e.g. "X-CLOUDFLARE-HEADER"
         * or "X-CUSTOM-HEADER"
         */
        key: string;
        /**
         * Filters on the header "value", e.g. if this is set to
         * "filter-for-me" and the "key" is "X-SHOULD-LOG", only
         * events triggered by requests with the header
         * "X-SHOULD-LOG:filter-for-me" will be logged.
         */
        query?: string;
    };
};
/**
 * Filters on the IP address the request came from that triggered
 * the worker. A value of "self" will be replaced with the IP
 * address that is running `wrangler tail`
 */
declare type ClientIPFilter = {
    client_ip: string[];
};
/**
 * Filters logs by a query string. This means only logs that
 * contain the given string will be sent to wrangler, and any
 * that don't will be discarded by the tail worker.
 */
declare type QueryFilter = {
    query: string;
};
/**
 * The full message we send to the tail worker includes our
 * filters and a debug flag.
 */
export declare type TailFilterMessage = {
    filters: TailAPIFilter[];
};
/**
 * Translate the flags passed in via a CLI invokation of wrangler
 * into a message that we can send to the tail worker.
 *
 * @param cliFilters An object containing all the filters passed in from the CLI
 * @returns A filter message ready to be sent to the tail worker
 */
export declare function translateCLICommandToFilterMessage(cliFilters: TailCLIFilters): TailFilterMessage;
export {};
