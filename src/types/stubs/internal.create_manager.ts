/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Internal Admin RPC for creating new manager.
 */
export type InternalCreateManager = InternalCreateManagerJSONRPCSchema;
export type Method = 'internal/create_manager';
/**
 * On-chain address of the manager contract
 */
export type Address = string;
/**
 * Currency of the manager contract (only for PMRM)
 */
export type Currency = string | null;
/**
 * Margin type
 */
export type MarginType = 'PM' | 'SM';
/**
 * On-chain address of the manager contract
 */
export type Address1 = string;
/**
 * Currency of the manager contract (only for PMRM)
 */
export type Currency1 = string | null;
/**
 * Margin type
 */
export type MarginType1 = 'PM' | 'SM';

export interface InternalCreateManagerJSONRPCSchema {
  request: InternalCreateManagerRequestSchema;
  response: InternalCreateManagerResponseSchema;
}
export interface InternalCreateManagerRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalCreateManagerParamsSchema;
}
export interface InternalCreateManagerParamsSchema {
  address: Address;
  currency?: Currency;
  margin_type: MarginType;
}
export interface InternalCreateManagerResponseSchema {
  id: string | number;
  result: InternalCreateManagerResultSchema;
}
export interface InternalCreateManagerResultSchema {
  address: Address1;
  currency?: Currency1;
  margin_type: MarginType1;
}
