/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get subaccount withdrawal history.
 */
export type PrivateGetWithdrawalHistory = PrivateGetWithdrawalHistoryJSONRPCSchema;
export type Method = "private/get_withdrawal_history";
/**
 * End timestamp of the event history (default current time)
 */
export type EndTimestamp = number;
/**
 * Start timestamp of the event history (default 0)
 */
export type StartTimestamp = number;
/**
 * Subaccount id
 */
export type SubaccountId = number;
/**
 * Amount withdrawn by the subaccount
 */
export type Amount = string;
/**
 * Asset withdrawn
 */
export type Asset = string;
/**
 * Timestamp of the withdrawal (in ms since UNIX epoch)
 */
export type Timestamp = number;
/**
 * Hash of the transaction that withdrew the funds
 */
export type TxHash = string;
/**
 * List of withdrawals
 */
export type Events = WithdrawalSchema[];

export interface PrivateGetWithdrawalHistoryJSONRPCSchema {
  request: PrivateGetWithdrawalHistoryRequestSchema;
  response: PrivateGetWithdrawalHistoryResponseSchema;
}
export interface PrivateGetWithdrawalHistoryRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetWithdrawalHistoryParamsSchema;
}
export interface PrivateGetWithdrawalHistoryParamsSchema {
  end_timestamp?: EndTimestamp;
  start_timestamp?: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetWithdrawalHistoryResponseSchema {
  id: string | number;
  result: PrivateGetWithdrawalHistoryResultSchema;
}
export interface PrivateGetWithdrawalHistoryResultSchema {
  events: Events;
}
export interface WithdrawalSchema {
  amount: Amount;
  asset: Asset;
  timestamp: Timestamp;
  tx_hash: TxHash;
}