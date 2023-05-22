type PaymentInstrument = CardInstrument | AccountInstrument | BraintreeAchInstrument;

export default PaymentInstrument;

interface BaseInstrument {
    bigpayToken: string;
    defaultInstrument: boolean;
    provider: string;
    trustedShippingAddress: boolean;
    method: string;
    type: string;
}

export enum UntrustedShippingCardVerificationType {
    CVV = 'cvv',
    PAN = 'pan',
}

export interface CardInstrument extends BaseInstrument {
    brand: string;
    expiryMonth: string;
    expiryYear: string;
    iin: string;
    last4: string;
    type: 'card';
    untrustedShippingCardVerificationMode: UntrustedShippingCardVerificationType;
}

interface BaseAccountInstrument extends BaseInstrument {
    externalId: string;
    method: string;
    type: 'account' | 'bank';
}

export interface PayPalInstrument extends BaseAccountInstrument {
    method: 'paypal';
}

export interface BraintreeAchInstrument extends BaseInstrument {
    issuer: string;
    accountNumber: string;
    type: 'bank';
    method: 'ach';
}

export interface BankInstrument extends BaseAccountInstrument {
    accountNumber: string;
    issuer: string;
    iban: string;
    method: string;
    type: 'bank';
}

export type AccountInstrument = PayPalInstrument | BankInstrument;

export interface VaultAccessToken {
    vaultAccessToken: string;
    vaultAccessExpiry: number;
}

export interface SessionContext {
    customerId: number;
    storeId: string;
    currencyCode?: string;
}

export interface InstrumentRequestContext extends SessionContext {
    authToken: string;
}
