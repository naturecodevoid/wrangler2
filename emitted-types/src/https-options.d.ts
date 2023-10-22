/**
 * Get the options (i.e. SSL certificates) for running an HTTPS server.
 *
 * The certificates are self-signed and generated locally, and cached in the `CERT_ROOT` directory.
 */
export declare function getHttpsOptions(): Promise<{
    key: string;
    cert: string;
}>;
