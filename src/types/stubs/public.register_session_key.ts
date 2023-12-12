/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Register or update expiry of an existing session key.
 */
export type PublicRegisterSessionKey = PublicRegisterSessionKeyJSONRPCSchema;
export type Method = 'public/register_session_key';
/**
 * Expiry of the session key
 */
export type ExpirySec = number;
/**
 * Ethereum wallet address
 */
export type Label = string;
/**
 * Session key in the form of an Ethereum EOA
 */
export type PublicSessionKey = string;
/**
 * A signed RLP encoded ETH transaction in form of a hex string (same as `w3.eth.account.sign_transaction(unsigned_tx, private_key).rawTransaction.hex()`)
 */
export type SignedRawTx = string;
/**
 * Ethereum wallet address of account
 */
export type Wallet = string;
/**
 * User-defined session key label
 */
export type Label1 = string;
/**
 * Session key in the form of an Ethereum EOA
 */
export type PublicSessionKey1 = string;
/**
 * ID to lookup status of transaction
 */
export type TransactionId = string;

export interface PublicRegisterSessionKeyJSONRPCSchema {
  request: PublicRegisterSessionKeyRequestSchema;
  response: PublicRegisterSessionKeyResponseSchema;
}
export interface PublicRegisterSessionKeyRequestSchema {
  id?: string | number;
  method: Method;
  params: PublicRegisterSessionKeyParamsSchema;
}
export interface PublicRegisterSessionKeyParamsSchema {
  expiry_sec: ExpirySec;
  label: Label;
  public_session_key: PublicSessionKey;
  signed_raw_tx: SignedRawTx;
  wallet: Wallet;
}
export interface PublicRegisterSessionKeyResponseSchema {
  id: string | number;
  result: PublicRegisterSessionKeyResultSchema;
}
export interface PublicRegisterSessionKeyResultSchema {
  label: Label1;
  public_session_key: PublicSessionKey1;
  transaction_id: TransactionId;
}
