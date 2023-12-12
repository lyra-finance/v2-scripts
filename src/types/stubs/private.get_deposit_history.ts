/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get subaccount deposit history.
 */
export type PrivateGetDepositHistory = PrivateGetDepositHistoryJSONRPCSchema;
export type Method = 'private/get_deposit_history';
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
 * Amount deposited by the subaccount
 */
export type Amount = string;
/**
 * Asset deposited
 */
export type Asset = string;
/**
 * Timestamp of the deposit (in ms since UNIX epoch)
 */
export type Timestamp = number;
/**
 * Hash of the transaction that deposited the funds
 */
export type TxHash = string;
/**
 * List of deposit payments
 */
export type Events = DepositSchema[];

export interface PrivateGetDepositHistoryJSONRPCSchema {
  request: PrivateGetDepositHistoryRequestSchema;
  response: PrivateGetDepositHistoryResponseSchema;
}
export interface PrivateGetDepositHistoryRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetDepositHistoryParamsSchema;
}
export interface PrivateGetDepositHistoryParamsSchema {
  end_timestamp?: EndTimestamp;
  start_timestamp?: StartTimestamp;
  subaccount_id: SubaccountId;
}
export interface PrivateGetDepositHistoryResponseSchema {
  id: string | number;
  result: PrivateGetDepositHistoryResultSchema;
}
export interface PrivateGetDepositHistoryResultSchema {
  events: Events;
}
export interface DepositSchema {
  amount: Amount;
  asset: Asset;
  timestamp: Timestamp;
  tx_hash: TxHash;
}
