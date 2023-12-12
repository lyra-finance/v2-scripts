/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Cancel an order with a given subaccount and a given nonce.
 */
export type PrivateCancelByNonce = PrivateCancelByNonceJSONRPCSchema;
export type Method = 'private/cancel_by_nonce';
/**
 * Cancel an order with this nonce
 */
export type Nonce = number;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Number of cancelled orders
 */
export type CancelledOrders = number;

export interface PrivateCancelByNonceJSONRPCSchema {
  request: PrivateCancelByNonceRequestSchema;
  response: PrivateCancelByNonceResponseSchema;
}
export interface PrivateCancelByNonceRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateCancelByNonceParamsSchema;
}
export interface PrivateCancelByNonceParamsSchema {
  nonce: Nonce;
  subaccount_id: SubaccountId;
}
export interface PrivateCancelByNonceResponseSchema {
  id: string | number;
  result: PrivateCancelByNonceResultSchema;
}
export interface PrivateCancelByNonceResultSchema {
  cancelled_orders: CancelledOrders;
}
