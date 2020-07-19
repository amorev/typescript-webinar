export interface SendRequest {
    amount: number;
    address: string;
}

export interface SendResponse {
    transactionId: number;
}
