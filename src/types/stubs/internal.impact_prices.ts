/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Compute the bid/ask impact prices for the given instrument and impact size.
 *
 * The impact prices for perp instruments will be used to compute the funding rate.
 */
export type InternalImpactPrices = InternalImpactPricesJSONRPCSchema;
export type Method = "internal/impact_prices";
/**
 * Impact size in USDC
 */
export type ImpactSize = string;
/**
 * The instrument name
 */
export type InstrumentName = string;
/**
 * Impact price for a buy order
 */
export type AskImpactPrice = string;
/**
 * Impact price for a sell order
 */
export type BidImpactPrice = string;
/**
 * Mid price of the best bid and ask for the instrument
 */
export type MidPrice = string;
/**
 * Spot price of the base asset
 */
export type SpotPrice = string;
/**
 * Timestamp when the prices were computed in ms
 */
export type Timestamp = number;

export interface InternalImpactPricesJSONRPCSchema {
  request: InternalImpactPricesRequestSchema;
  response: InternalImpactPricesResponseSchema;
}
export interface InternalImpactPricesRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalImpactPricesParamsSchema;
}
export interface InternalImpactPricesParamsSchema {
  impact_size: ImpactSize;
  instrument_name: InstrumentName;
}
export interface InternalImpactPricesResponseSchema {
  id: string | number;
  result: InternalImpactPricesResultSchema;
}
export interface InternalImpactPricesResultSchema {
  ask_impact_price: AskImpactPrice;
  bid_impact_price: BidImpactPrice;
  mid_price: MidPrice;
  spot_price: SpotPrice;
  timestamp: Timestamp;
}