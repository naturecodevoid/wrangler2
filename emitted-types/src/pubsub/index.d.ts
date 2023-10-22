export declare const pubSubBetaWarning = "\uD83D\uDC77\uD83C\uDFFD 'wrangler pubsub ...' commands are currently in private beta. If your account isn't authorized, commands will fail. Visit the Pub/Sub docs for more info: https://developers.cloudflare.com/pub-sub/";
/**
 * Namespaces represent a collection of Pub/Sub Brokers.
 */
export interface PubSubNamespace {
    id?: string;
    name: string;
    description?: string;
    created_on?: string;
    modified_on?: string;
}
/**
 * A Pub/Sub Broker's on-publish hook configuration.
 */
export interface PubSubBrokerOnPublish {
    url: string;
}
/**
 * PubSubBroker represents a single Broker configuration and endpoint.
 */
export interface PubSubBroker {
    id?: string;
    name: string;
    description?: string;
    auth_type?: string;
    expiration?: number;
    created_on?: string;
    modified_on?: string;
    on_publish?: PubSubBrokerOnPublish;
}
/**
 * PubSubBrokerUpdate is the set of values that can be updated on an existing Broker.
 */
export interface PubSubBrokerUpdate {
    description?: string;
    expiration?: number;
    on_publish?: PubSubBrokerOnPublish;
}
/**
 * Fetch a list of all the Namespaces under the given `accountId`.
 */
export declare function listPubSubNamespaces(accountId: string): Promise<PubSubNamespace[]>;
/**
 *
 * Create a Namespace with the given `namespace` within the account given by `accountId`.
 *
 * A HTTP 400 (Bad Request) is returned if this Namespace already exists, as
 * Namespaces are globally unique.
 */
export declare function createPubSubNamespace(accountId: string, namespace: PubSubNamespace): Promise<void>;
/**
 * Delete a Pub/Sub Namespace with the given `namespace` name.
 *
 * Deleting a namespace is destructive and should be done with care.
 */
export declare function deletePubSubNamespace(accountId: string, namespace: string): Promise<void>;
/**
 * Describe a single Pub/Sub Namespace by its `namespace` name.
 */
export declare function describePubSubNamespace(accountId: string, namespace: string): Promise<void>;
/**
 * Delete a Pub/Sub Broker with the given `broker` name within the associated `namespace`.
 *
 * Deleting a Broker is destructive and will immediately break all existing
 * connections to the Broker.
 */
export declare function deletePubSubBroker(accountId: string, namespace: string, broker: string): Promise<void>;
/**
 * Describe a single Pub/Sub Broker for the given `broker` name within the associated `namespace`.
 */
export declare function describePubSubBroker(accountId: string, namespace: string, broker: string): Promise<void>;
/**
 * Fetch a list of all the Pub/Sub Brokers under the given `namespace`.
 */
export declare function listPubSubBrokers(accountId: string, namespace: string): Promise<PubSubBroker[]>;
/**
 * Create a Pub/Sub Broker within given `namespace`.
 */
export declare function createPubSubBroker(accountId: string, namespace: string, broker: PubSubBroker): Promise<void>;
/**
 * Update a Pub/Sub Broker configuration.
 */
export declare function updatePubSubBroker(accountId: string, namespace: string, broker: string, update: PubSubBrokerUpdate): Promise<void>;
/**
 * Get the public keys uniquely associated with a Pub/Sub Broker.
 *
 * These keys can be used for verifying Pub/Sub on-publish hooks over HTTPS.
 */
export declare function getPubSubBrokerPublicKeys(accountId: string, namespace: string, broker: string): Promise<Record<string, string>>;
/**
 * Issue client credentials for the given `broker`.
 *
 * Multiple credentials can be generated at once by providing a `number`.
 */
export declare function issuePubSubBrokerTokens(accountId: string, namespace: string, broker: string, number: number, type: string, clientIds?: string[], expiration?: number): Promise<Record<string, string>>;
/**
 * Revoke client credentials for the given `broker`.
 *
 * Credentials are revoked based on the JTI (a unique ID for each token).
 * Multiple credentials can be revoked at once.
 */
export declare function revokePubSubBrokerTokens(accountId: string, namespace: string, broker: string, jti: string[]): Promise<void>;
/**
 *
 * Unrevoke client credentials for the given `broker`.
 *
 * This deletes an existing revocation, allowing the credentials to be used again.
 * Credentials that have expired may be unrevoked, but will no longer be valid.
 */
export declare function unrevokePubSubBrokerTokens(accountId: string, namespace: string, broker: string, jti: string[]): Promise<void>;
/**
 *
 * List revoked client credentials for the given `broker`.
 *
 * This shows all existing revocations against a Broker.
 */
export declare function listRevokedPubSubBrokerTokens(accountId: string, namespace: string, broker: string): Promise<void>;
