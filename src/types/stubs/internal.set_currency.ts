/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Set or update the given currency
 */
export type InternalSetCurrency = InternalSetCurrencyJSONRPCSchema;
export type Method = 'internal/set_currency';
/**
 * Underlying currency of asset (`ETH`, `BTC`, etc)
 */
export type Currency = string;
/**
 * StandardManager market ID
 */
export type MarketId = number | null;
/**
 * Address of PortfolioMarginRiskManager contract
 */
export type PmrmAddress = string | null;
export type Result = 'ok';

export interface InternalSetCurrencyJSONRPCSchema {
  request: InternalSetCurrencyRequestSchema;
  response: InternalSetCurrencyResponseSchema;
}
export interface InternalSetCurrencyRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalSetCurrencyParamsSchema;
}
export interface InternalSetCurrencyParamsSchema {
  currency: Currency;
  market_id?: MarketId;
  pmrm_address?: PmrmAddress;
}
export interface InternalSetCurrencyResponseSchema {
  id: string | number;
  result: Result;
}
