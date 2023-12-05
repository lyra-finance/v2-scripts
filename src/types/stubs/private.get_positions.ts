/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get active positions of a subaccount
 */
export type PrivateGetPositions = PrivateGetPositionsJSONRPCSchema;
export type Method = "private/get_positions";
/**
 * Subaccount_id
 */
export type SubaccountId = number;
/**
 * Position amount held by subaccount
 */
export type Amount = string;
/**
 * Average price of whole position
 */
export type AveragePrice = string;
/**
 * Cumulative funding for the position (only for perpetuals).
 */
export type CumulativeFunding = string;
/**
 * Asset delta (w.r.t. forward price for options, `1.0` for perps)
 */
export type Delta = string;
/**
 * Asset gamma (zero for non-options)
 */
export type Gamma = string;
/**
 * Current index (oracle) price for position's currency
 */
export type IndexPrice = string;
/**
 * USD initial margin requirement for this position
 */
export type InitialMargin = string;
/**
 * Instrument name (same as the base Asset name)
 */
export type InstrumentName = string;
/**
 * `erc20`, `option`, or `perp`
 */
export type InstrumentType = "erc20" | "option" | "perp";
/**
 * Only for perps. Leverage of the position, defined as `abs(notional) / collateral net of options margin`
 */
export type Leverage = string | null;
/**
 * Index price at which position will be liquidated
 */
export type LiquidationPrice = string | null;
/**
 * USD maintenance margin requirement for this position
 */
export type MaintenanceMargin = string;
/**
 * Current mark price for position's instrument
 */
export type MarkPrice = string;
/**
 * USD value of the position; this represents how much USD can be recieved by fully closing the position at the current oracle price
 */
export type MarkValue = string;
/**
 * Net amount of USD from position settlements that has been paid to the user's subaccount. This number is subtracted from the portfolio value for margin calculations purposes.<br />Positive values mean the user has recieved USD from settlements, or is awaiting settlement of USD losses. Negative values mean the user has paid USD for settlements, or is awaiting settlement of USD gains.
 */
export type NetSettlements = string;
/**
 * USD margin requirement for all open orders for this asset / instrument
 */
export type OpenOrdersMargin = string;
/**
 * A portion of funding payments that has not yet been settled into cash balance (only for perpetuals). This number is added to the portfolio value for margin calculations purposes.
 */
export type PendingFunding = string;
/**
 * Realized trading profit or loss of the position.
 */
export type RealizedPnl = string;
/**
 * Asset theta (zero for non-options)
 */
export type Theta = string;
/**
 * Unrealized trading profit or loss of the position.
 */
export type UnrealizedPnl = string;
/**
 * Asset vega (zero for non-options)
 */
export type Vega = string;
/**
 * All active positions of subaccount
 */
export type Positions = PositionResponseSchema[];
/**
 * Subaccount_id
 */
export type SubaccountId1 = number;

export interface PrivateGetPositionsJSONRPCSchema {
  request: PrivateGetPositionsRequestSchema;
  response: PrivateGetPositionsResponseSchema;
}
export interface PrivateGetPositionsRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetPositionsParamsSchema;
}
export interface PrivateGetPositionsParamsSchema {
  subaccount_id: SubaccountId;
}
export interface PrivateGetPositionsResponseSchema {
  id: string | number;
  result: PrivateGetPositionsResultSchema;
}
export interface PrivateGetPositionsResultSchema {
  positions: Positions;
  subaccount_id: SubaccountId1;
}
export interface PositionResponseSchema {
  amount: Amount;
  average_price: AveragePrice;
  cumulative_funding: CumulativeFunding;
  delta: Delta;
  gamma: Gamma;
  index_price: IndexPrice;
  initial_margin: InitialMargin;
  instrument_name: InstrumentName;
  instrument_type: InstrumentType;
  leverage: Leverage;
  liquidation_price: LiquidationPrice;
  maintenance_margin: MaintenanceMargin;
  mark_price: MarkPrice;
  mark_value: MarkValue;
  net_settlements: NetSettlements;
  open_orders_margin: OpenOrdersMargin;
  pending_funding: PendingFunding;
  realized_pnl: RealizedPnl;
  theta: Theta;
  unrealized_pnl: UnrealizedPnl;
  vega: Vega;
}