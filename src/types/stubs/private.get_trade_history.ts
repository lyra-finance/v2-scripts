/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get trade history for a subaccount, with filter parameters.
 */
export type PrivateGetTradeHistory = PrivateGetTradeHistoryJSONRPCSchema;
export type Method = "private/get_trade_history";
/**
 * Earliest timestamp to filter by (in ms since Unix epoch). If not provied, defaults to 0.
 */
export type FromTimestamp = number;
/**
 * Instrument name to filter by
 */
export type InstrumentName = string | null;
/**
 * Order id to filter by
 */
export type OrderId = string | null;
/**
 * Subaccount_id for which to get trades
 */
export type SubaccountId = number;
/**
 * Latest timestamp to filter by (in ms since Unix epoch). If not provied, defaults to returning all data up to current time.
 */
export type ToTimestamp = number;
/**
 * Subaccount_id for which to get the trade history
 */
export type SubaccountId1 = number;
/**
 * Order direction
 */
export type Direction = "buy" | "sell";
/**
 * Index price of the underlying at the time of the trade
 */
export type IndexPrice = string;
/**
 * Instrument name
 */
export type InstrumentName1 = string;
/**
 * Whether the trade was generated through `private/transfer_position`
 */
export type IsTransfer = boolean;
/**
 * Optional user-defined label for the order
 */
export type Label = string;
/**
 * Role of the user in the trade
 */
export type LiquidityRole = "maker" | "taker";
/**
 * Mark price of the instrument at the time of the trade
 */
export type MarkPrice = string;
/**
 * Order ID
 */
export type OrderId1 = string;
/**
 * Realized PnL for this trade
 */
export type RealizedPnl = string;
/**
 * Subaccount ID
 */
export type SubaccountId2 = number;
/**
 * Trade timestamp (in ms since Unix epoch)
 */
export type Timestamp = number;
/**
 * Amount filled in this trade
 */
export type TradeAmount = string;
/**
 * Fee for this trade
 */
export type TradeFee = string;
/**
 * Trade ID
 */
export type TradeId = string;
/**
 * Price at which the trade was filled
 */
export type TradePrice = string;
/**
 * Blockchain transaction hash
 */
export type TxHash = string | null;
/**
 * Blockchain transaction status
 */
export type TxStatus = "requested" | "pending" | "settled" | "reverted" | "ignored";
/**
 * List of trades
 */
export type Trades = TradeResponseSchema[];

export interface PrivateGetTradeHistoryJSONRPCSchema {
  request: PrivateGetTradeHistoryRequestSchema;
  response: PrivateGetTradeHistoryResponseSchema;
}
export interface PrivateGetTradeHistoryRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetTradeHistoryParamsSchema;
}
export interface PrivateGetTradeHistoryParamsSchema {
  from_timestamp?: FromTimestamp;
  instrument_name?: InstrumentName;
  order_id?: OrderId;
  subaccount_id: SubaccountId;
  to_timestamp?: ToTimestamp;
}
export interface PrivateGetTradeHistoryResponseSchema {
  id: string | number;
  result: PrivateGetTradeHistoryResultSchema;
}
export interface PrivateGetTradeHistoryResultSchema {
  subaccount_id: SubaccountId1;
  trades: Trades;
}
export interface TradeResponseSchema {
  direction: Direction;
  index_price: IndexPrice;
  instrument_name: InstrumentName1;
  is_transfer: IsTransfer;
  label: Label;
  liquidity_role: LiquidityRole;
  mark_price: MarkPrice;
  order_id: OrderId1;
  realized_pnl: RealizedPnl;
  subaccount_id: SubaccountId2;
  timestamp: Timestamp;
  trade_amount: TradeAmount;
  trade_fee: TradeFee;
  trade_id: TradeId;
  trade_price: TradePrice;
  tx_hash: TxHash;
  tx_status: TxStatus;
}
