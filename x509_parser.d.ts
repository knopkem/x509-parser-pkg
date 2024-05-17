/* tslint:disable */
/* eslint-disable */
/**
* @param {string} input
* @returns {Certificate}
*/
export function parse_certificate(input: string): Certificate;
export interface Certificate {
    tbsCertificate: TBSCertificate;
    signatureAlgorithm: string;
    signatureValue: string;
}

export interface TBSCertificate {
    version: number;
    serialNumber: string;
    signature: Signature;
    issuer: string;
    validity: Validity;
    subject: string;
    subjectPublicKeyInfo: SubjectPublicKeyInfo;
    extensions: Extension[];
}

export interface Extension {
    critical: boolean;
    value: string;
}

export interface Signature {
    algorithm: string;
    parameters: string;
}

export interface Validity {
    notBefore: string;
    notAfter: string;
}

export interface SubjectPublicKeyInfo {
    algorithm: string;
    subjectPublicKey: string;
}

