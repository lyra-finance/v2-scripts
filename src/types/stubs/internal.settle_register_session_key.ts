/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used for registering session keys submitted directly via orderbook via private/register_session_key.
 *
 * NOTE: for direct on-chain registrations, refer to the event_listener.py
 */
export type InternalSettleRegisterSessionKey = InternalSettleRegisterSessionKeyJSONRPCSchema;
export type Method = 'internal/settle_register_session_key';
export type ExpirySec = number;
export type OwnerAddress = string;
export type RawSignedTx = string;
export type ToAllow = string;
export type Status = 0 | 1 | 2;
export type TransactionHash = string | null;

export interface InternalSettleRegisterSessionKeyJSONRPCSchema {
  request: InternalSettleRegisterSessionKeyRequestSchema;
  response: InternalSettleRegisterSessionKeyResponseSchema;
}
export interface InternalSettleRegisterSessionKeyRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalSettleRegisterSessionKeyParamsSchema;
}
export interface InternalSettleRegisterSessionKeyParamsSchema {
  expiry_sec: ExpirySec;
  owner_address: OwnerAddress;
  raw_signed_tx: RawSignedTx;
  to_allow: ToAllow;
}
export interface InternalSettleRegisterSessionKeyResponseSchema {
  id: string | number;
  result: InternalSettleRegisterSessionKeyResultSchema;
}
export interface InternalSettleRegisterSessionKeyResultSchema {
  status: Status;
  transaction_hash: TransactionHash;
}
