/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used for settling withdrawals to the blockchain by submitting them to the sequencer RPC.
 */
export type InternalSettleWithdrawal = InternalSettleWithdrawalJSONRPCSchema;
export type Method = "internal/settle_withdrawal";
export type AssetId = string;
export type AssetName = string;
export type Amount = string;
export type Asset = string;
export type Decimals = number;
export type Expiry = number;
export type Module = string;
export type Nonce = number;
export type Owner = string;
export type Signature = string;
export type Signer = string;
export type SubaccountId = number;
export type Status = 0 | 1 | 2;
export type TransactionHash = string | null;

export interface InternalSettleWithdrawalJSONRPCSchema {
  request: InternalSettleWithdrawalRequestSchema;
  response: InternalSettleWithdrawalResponseSchema;
}
export interface InternalSettleWithdrawalRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalSettleWithdrawalParamsSchema;
}
export interface InternalSettleWithdrawalParamsSchema {
  asset_id: AssetId;
  asset_name: AssetName;
  data: WithdrawalModuleDataSchema;
  expiry: Expiry;
  module: Module;
  nonce: Nonce;
  owner: Owner;
  signature: Signature;
  signer: Signer;
  subaccount_id: SubaccountId;
}
export interface WithdrawalModuleDataSchema {
  amount: Amount;
  asset: Asset;
  decimals: Decimals;
}
export interface InternalSettleWithdrawalResponseSchema {
  id: string | number;
  result: InternalSettleWithdrawalResultSchema;
}
export interface InternalSettleWithdrawalResultSchema {
  status: Status;
  transaction_hash: TransactionHash;
}
