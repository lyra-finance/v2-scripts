/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Calculates margin for a given subaccount and (optionally) a simulated state change. Does not take into account
 * open orders margin requirements.
 */
export type PrivateGetMargin = PrivateGetMarginJSONRPCSchema;
export type Method = "private/get_margin";
/**
 * Optional, add positions to simulate a trade
 */
export type SimulatedPositionChanges = SimulatedPositionSchema[] | null;
/**
 * Position amount to simulate
 */
export type Amount = string;
/**
 * Only for perps. Entry price to use in the simulation. Mark price is used if not provided.
 */
export type EntryPrice = string | null;
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Subaccount_id
 */
export type SubaccountId = number;
/**
 * True if trade passes margin requirement
 */
export type IsValidTrade = boolean;
/**
 * Initial margin requirement post trade
 */
export type PostInitialMargin = string;
/**
 * Maintenance margin requirement post trade
 */
export type PostMaintenanceMargin = string;
/**
 * Initial margin requirement before trade
 */
export type PreInitialMargin = string;
/**
 * Maintenance margin requirement before trade
 */
export type PreMaintenanceMargin = string;
/**
 * Subaccount_id
 */
export type SubaccountId1 = number;

export interface PrivateGetMarginJSONRPCSchema {
  request: PrivateGetMarginRequestSchema;
  response: PrivateGetMarginResponseSchema;
}
export interface PrivateGetMarginRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetMarginParamsSchema;
}
export interface PrivateGetMarginParamsSchema {
  simulated_position_changes?: SimulatedPositionChanges;
  subaccount_id: SubaccountId;
}
export interface SimulatedPositionSchema {
  amount: Amount;
  entry_price?: EntryPrice;
  instrument_name: InstrumentName;
}
export interface PrivateGetMarginResponseSchema {
  id: string | number;
  result: PrivateGetMarginResultSchema;
}
export interface PrivateGetMarginResultSchema {
  is_valid_trade: IsValidTrade;
  post_initial_margin: PostInitialMargin;
  post_maintenance_margin: PostMaintenanceMargin;
  pre_initial_margin: PreInitialMargin;
  pre_maintenance_margin: PreMaintenanceMargin;
  subaccount_id: SubaccountId1;
}