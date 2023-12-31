/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used for deregistering session keys submitted directly via orderbook via private/deregister_session_key.
 *
 * NOTE: for direct on-chain deregistrations, refer to the event_listener.py
 */
export type InternalSettleDeregisterSessionKey = InternalSettleDeregisterSessionKeyJSONRPCSchema;
export type Method = 'internal/settle_deregister_session_key';
export type RawSignedTx = string;
export type Status = 0 | 1 | 2;
export type TransactionHash = string | null;

export interface InternalSettleDeregisterSessionKeyJSONRPCSchema {
  request: InternalSettleDeregisterSessionKeyRequestSchema;
  response: InternalSettleDeregisterSessionKeyResponseSchema;
}
export interface InternalSettleDeregisterSessionKeyRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalSettleDeregisterSessionKeyParamsSchema;
}
export interface InternalSettleDeregisterSessionKeyParamsSchema {
  raw_signed_tx: RawSignedTx;
}
export interface InternalSettleDeregisterSessionKeyResponseSchema {
  id: string | number;
  result: InternalSettleDeregisterSessionKeyResultSchema;
}
export interface InternalSettleDeregisterSessionKeyResultSchema {
  status: Status;
  transaction_hash: TransactionHash;
}
