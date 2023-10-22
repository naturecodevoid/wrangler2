/**
 * the representation of an mTLS certificate in the account certificate store
 */
export interface MTlsCertificateResponse {
    id: string;
    name?: string;
    ca: boolean;
    certificates: string;
    expires_on: string;
    issuer: string;
    serial_number: string;
    signature: string;
    uploaded_on: string;
}
/**
 * details for uploading an mTLS certificate from disk
 */
export interface MTlsCertificateUploadDetails {
    certificateChainFilename: string;
    privateKeyFilename: string;
    name?: string;
}
/**
 * details for uploading an mTLS certificate via the ssl api
 */
export interface MTlsCertificateBody {
    certificateChain: string;
    privateKey: string;
    name?: string;
}
/**
 * supported filters for listing mTLS certificates via the ssl api
 */
export interface MTlsCertificateListFilter {
    name?: string;
}
/**
 * indicates that looking up a certificate by name failed due to zero matching results
 */
export declare class ErrorMTlsCertificateNameNotFound extends Error {
}
/**
 * indicates that looking up a certificate by name failed due to more than one matching results
 */
export declare class ErrorMTlsCertificateManyNamesMatch extends Error {
}
/**
 * reads an mTLS certificate and private key pair from disk and uploads it to the account mTLS certificate store
 */
export declare function uploadMTlsCertificateFromFs(accountId: string, details: MTlsCertificateUploadDetails): Promise<MTlsCertificateResponse>;
/**
 *  uploads an mTLS certificate and private key pair to the account mTLS certificate store
 */
export declare function uploadMTlsCertificate(accountId: string, body: MTlsCertificateBody): Promise<MTlsCertificateResponse>;
/**
 *  fetches an mTLS certificate from the account mTLS certificate store by ID
 */
export declare function getMTlsCertificate(accountId: string, id: string): Promise<MTlsCertificateResponse>;
/**
 *  lists mTLS certificates for an account. filtering by name is supported
 */
export declare function listMTlsCertificates(accountId: string, filter: MTlsCertificateListFilter): Promise<MTlsCertificateResponse[]>;
/**
 *  fetches an mTLS certificate from the account mTLS certificate store by name. will throw an error if no certificates are found, or multiple are found with that name
 */
export declare function getMTlsCertificateByName(accountId: string, name: string): Promise<MTlsCertificateResponse>;
export declare function deleteMTlsCertificate(accountId: string, certificateId: string): Promise<unknown>;
