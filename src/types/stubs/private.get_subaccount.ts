/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get open orders, active positions, and collaterals of a subaccount
 */
export type PrivateGetSubaccount = PrivateGetSubaccountJSONRPCSchema;
export type Method = 'private/get_subaccount';
/**
 * Subaccount_id
 */
export type SubaccountId = number;
/**
 * Asset amount of given collateral
 */
export type Amount = string;
/**
 * Asset name
 */
export type AssetName = string;
/**
 * `erc20`, `option`, or `perp`
 */
export type AssetType = 'erc20' | 'option' | 'perp';
/**
 * Cumulative interest earned on supplying collateral or paid for borrowing
 */
export type CumulativeInterest = string;
/**
 * Underlying currency of asset (`ETH`, `BTC`, etc)
 */
export type Currency = string;
/**
 * USD value of collateral that contributes to initial margin
 */
export type InitialMargin = string;
/**
 * USD value of collateral that contributes to maintenance margin
 */
export type MaintenanceMargin = string;
/**
 * Current mark price of the asset
 */
export type MarkPrice = string;
/**
 * USD value of the collateral (amount * mark price)
 */
export type MarkValue = string;
/**
 * Portion of interest that has not yet been settled on-chain. This number is added to the portfolio value for margin calculations purposes.
 */
export type PendingInterest = string;
/**
 * All collaterals that count towards margin of subaccount
 */
export type Collaterals = CollateralResponseSchema[];
/**
 * Total initial margin credit contributed by collaterals
 */
export type CollateralsInitialMargin = string;
/**
 * Total maintenance margin credit contributed by collaterals
 */
export type CollateralsMaintenanceMargin = string;
/**
 * Total mark-to-market value of all collaterals
 */
export type CollateralsValue = string;
/**
 * Total initial margin requirement of all positions and collaterals.Trades will be rejected if this value falls below zero after the trade.
 */
export type InitialMargin1 = string;
/**
 * Total maintenance margin requirement of all positions and collaterals.If this value falls below zero, the subaccount will be flagged for liquidation.
 */
export type MaintenanceMargin1 = string;
/**
 * Margin type of subaccount (`PM` (Portfolio Margin) or `SM` (Standard Margin))
 */
export type MarginType = 'PM' | 'SM';
/**
 * Order amount in units of the base
 */
export type Amount1 = string;
/**
 * Average fill price
 */
export type AveragePrice = string;
/**
 * If cancelled, reason behind order cancellation
 */
export type CancelReason =
  | ''
  | 'user_request'
  | 'mmp_trigger'
  | 'insufficient_margin'
  | 'signed_max_fee_too_low'
  | 'cancel_on_disconnect'
  | 'ioc_or_market_partial_fill'
  | 'session_key_deregistered'
  | 'subaccount_withdrawn'
  | 'compliance';
/**
 * Creation timestamp (in ms since Unix epoch)
 */
export type CreationTimestamp = number;
/**
 * Order direction
 */
export type Direction = 'buy' | 'sell';
/**
 * Total filled amount for the order
 */
export type FilledAmount = string;
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Whether the order was generated through `private/transfer_position`
 */
export type IsTransfer = boolean;
/**
 * Optional user-defined label for the order
 */
export type Label = string;
/**
 * Last update timestamp (in ms since Unix epoch)
 */
export type LastUpdateTimestamp = number;
/**
 * Limit price in quote currency
 */
export type LimitPrice = string;
/**
 * Max fee in units of the quote currency
 */
export type MaxFee = string;
/**
 * Whether the order is tagged for market maker protections
 */
export type Mmp = boolean;
/**
 * Unique nonce defined as <UTC_timestamp in ms><random_number_up_to_3_digits> (e.g. 1695836058725001, where 001 is the random number)
 */
export type Nonce = number;
/**
 * Total order fee paid so far
 */
export type OrderFee = string;
/**
 * Order ID
 */
export type OrderId = string;
/**
 * Order status
 */
export type OrderStatus = 'open' | 'filled' | 'rejected' | 'cancelled' | 'expired';
/**
 * Order type
 */
export type OrderType = 'limit' | 'market';
/**
 * Ethereum signature of the order
 */
export type Signature = string;
/**
 * Signature expiry timestamp
 */
export type SignatureExpirySec = number;
/**
 * Owner wallet address or registered session key that signed order
 */
export type Signer = string;
/**
 * Subaccount ID
 */
export type SubaccountId1 = number;
/**
 * Time in force
 */
export type TimeInForce = 'gtc' | 'post_only' | 'fok' | 'ioc';
/**
 * All open orders of subaccount
 */
export type OpenOrders = OrderResponseSchema[];
/**
 * Total margin requirement of all open orders.Orders will be rejected if this value plus initial margin are below zero after the order.
 */
export type OpenOrdersMargin = string;
/**
 * Position amount held by subaccount
 */
export type Amount2 = string;
/**
 * Average price of whole position
 */
export type AveragePrice1 = string;
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
export type InitialMargin2 = string;
/**
 * Instrument name (same as the base Asset name)
 */
export type InstrumentName1 = string;
/**
 * `erc20`, `option`, or `perp`
 */
export type InstrumentType = 'erc20' | 'option' | 'perp';
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
export type MaintenanceMargin2 = string;
/**
 * Current mark price for position's instrument
 */
export type MarkPrice1 = string;
/**
 * USD value of the position; this represents how much USD can be recieved by fully closing the position at the current oracle price
 */
export type MarkValue1 = string;
/**
 * Net amount of USD from position settlements that has been paid to the user's subaccount. This number is subtracted from the portfolio value for margin calculations purposes.<br />Positive values mean the user has recieved USD from settlements, or is awaiting settlement of USD losses. Negative values mean the user has paid USD for settlements, or is awaiting settlement of USD gains.
 */
export type NetSettlements = string;
/**
 * USD margin requirement for all open orders for this asset / instrument
 */
export type OpenOrdersMargin1 = string;
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
 * Total initial margin requirement of all positions
 */
export type PositionsInitialMargin = string;
/**
 * Total maintenance margin requirement of all positions
 */
export type PositionsMaintenanceMargin = string;
/**
 * Total mark-to-market value of all positions
 */
export type PositionsValue = string;
/**
 * Subaccount_id
 */
export type SubaccountId2 = number;
/**
 * Total mark-to-market value of all positions and collaterals
 */
export type SubaccountValue = string;

export interface PrivateGetSubaccountJSONRPCSchema {
  request: PrivateGetSubaccountRequestSchema;
  response: PrivateGetSubaccountResponseSchema;
}
export interface PrivateGetSubaccountRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetSubaccountParamsSchema;
}
export interface PrivateGetSubaccountParamsSchema {
  subaccount_id: SubaccountId;
}
export interface PrivateGetSubaccountResponseSchema {
  id: string | number;
  result: PrivateGetSubaccountResultSchema;
}
export interface PrivateGetSubaccountResultSchema {
  collaterals: Collaterals;
  collaterals_initial_margin: CollateralsInitialMargin;
  collaterals_maintenance_margin: CollateralsMaintenanceMargin;
  collaterals_value: CollateralsValue;
  initial_margin: InitialMargin1;
  maintenance_margin: MaintenanceMargin1;
  margin_type: MarginType;
  open_orders: OpenOrders;
  open_orders_margin: OpenOrdersMargin;
  positions: Positions;
  positions_initial_margin: PositionsInitialMargin;
  positions_maintenance_margin: PositionsMaintenanceMargin;
  positions_value: PositionsValue;
  subaccount_id: SubaccountId2;
  subaccount_value: SubaccountValue;
}
export interface CollateralResponseSchema {
  amount: Amount;
  asset_name: AssetName;
  asset_type: AssetType;
  cumulative_interest: CumulativeInterest;
  currency: Currency;
  initial_margin: InitialMargin;
  maintenance_margin: MaintenanceMargin;
  mark_price: MarkPrice;
  mark_value: MarkValue;
  pending_interest: PendingInterest;
}
export interface OrderResponseSchema {
  amount: Amount1;
  average_price: AveragePrice;
  cancel_reason: CancelReason;
  creation_timestamp: CreationTimestamp;
  direction: Direction;
  filled_amount: FilledAmount;
  instrument_name: InstrumentName;
  is_transfer: IsTransfer;
  label: Label;
  last_update_timestamp: LastUpdateTimestamp;
  limit_price: LimitPrice;
  max_fee: MaxFee;
  mmp: Mmp;
  nonce: Nonce;
  order_fee: OrderFee;
  order_id: OrderId;
  order_status: OrderStatus;
  order_type: OrderType;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId1;
  time_in_force: TimeInForce;
}
export interface PositionResponseSchema {
  amount: Amount2;
  average_price: AveragePrice1;
  cumulative_funding: CumulativeFunding;
  delta: Delta;
  gamma: Gamma;
  index_price: IndexPrice;
  initial_margin: InitialMargin2;
  instrument_name: InstrumentName1;
  instrument_type: InstrumentType;
  leverage: Leverage;
  liquidation_price: LiquidationPrice;
  maintenance_margin: MaintenanceMargin2;
  mark_price: MarkPrice1;
  mark_value: MarkValue1;
  net_settlements: NetSettlements;
  open_orders_margin: OpenOrdersMargin1;
  pending_funding: PendingFunding;
  realized_pnl: RealizedPnl;
  theta: Theta;
  unrealized_pnl: UnrealizedPnl;
  vega: Vega;
}
