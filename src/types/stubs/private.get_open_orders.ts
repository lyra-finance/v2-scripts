/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get all open orders of a subacccount
 */
export type PrivateGetOpenOrders = PrivateGetOpenOrdersJSONRPCSchema;
export type Method = 'private/get_open_orders';
/**
 * Subaccount_id for which to get open orders
 */
export type SubaccountId = number;
/**
 * Order amount in units of the base
 */
export type Amount = string;
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
 * List of open orders
 */
export type Orders = OrderResponseSchema[];
/**
 * Subaccount_id for which to get open orders
 */
export type SubaccountId2 = number;

export interface PrivateGetOpenOrdersJSONRPCSchema {
  request: PrivateGetOpenOrdersRequestSchema;
  response: PrivateGetOpenOrdersResponseSchema;
}
export interface PrivateGetOpenOrdersRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetOpenOrdersParamsSchema;
}
export interface PrivateGetOpenOrdersParamsSchema {
  subaccount_id: SubaccountId;
}
export interface PrivateGetOpenOrdersResponseSchema {
  id: string | number;
  result: PrivateGetOpenOrdersResultSchema;
}
export interface PrivateGetOpenOrdersResultSchema {
  orders: Orders;
  subaccount_id: SubaccountId2;
}
export interface OrderResponseSchema {
  amount: Amount;
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
