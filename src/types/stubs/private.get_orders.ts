/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get orders for a subaccount, with optional filtering.
 */
export type PrivateGetOrders = PrivateGetOrdersJSONRPCSchema;
export type Method = "private/get_orders";
/**
 * Filter by instrument name
 */
export type InstrumentName = string | null;
/**
 * Filter by label
 */
export type Label = string | null;
/**
 * Page number of results to return (default 1, returns last if above `num_pages`)
 */
export type Page = number;
/**
 * Number of results per page (default 100, max 1000)
 */
export type PageSize = number;
/**
 * Filter by order status
 */
export type Status = ("open" | "filled" | "rejected" | "cancelled" | "expired") | null;
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
  | ""
  | "user_request"
  | "mmp_trigger"
  | "insufficient_margin"
  | "signed_max_fee_too_low"
  | "cancel_on_disconnect"
  | "ioc_or_market_partial_fill"
  | "session_key_deregistered"
  | "subaccount_withdrawn"
  | "compliance";
/**
 * Creation timestamp (in ms since Unix epoch)
 */
export type CreationTimestamp = number;
/**
 * Order direction
 */
export type Direction = "buy" | "sell";
/**
 * Total filled amount for the order
 */
export type FilledAmount = string;
/**
 * Instrument name
 */
export type InstrumentName1 = string;
/**
 * Whether the order was generated through `private/transfer_position`
 */
export type IsTransfer = boolean;
/**
 * Optional user-defined label for the order
 */
export type Label1 = string;
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
export type OrderStatus = "open" | "filled" | "rejected" | "cancelled" | "expired";
/**
 * Order type
 */
export type OrderType = "limit" | "market";
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
export type TimeInForce = "gtc" | "post_only" | "fok" | "ioc";
/**
 * List of open orders
 */
export type Orders = OrderResponseSchema[];
/**
 * Total number of items, across all pages
 */
export type Count = number;
/**
 * Number of pages
 */
export type NumPages = number;
/**
 * Subaccount_id for which to get open orders
 */
export type SubaccountId2 = number;

export interface PrivateGetOrdersJSONRPCSchema {
  request: PrivateGetOrdersRequestSchema;
  response: PrivateGetOrdersResponseSchema;
}
export interface PrivateGetOrdersRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateGetOrdersParamsSchema;
}
export interface PrivateGetOrdersParamsSchema {
  instrument_name?: InstrumentName;
  label?: Label;
  page?: Page;
  page_size?: PageSize;
  status?: Status;
  subaccount_id: SubaccountId;
}
export interface PrivateGetOrdersResponseSchema {
  id: string | number;
  result: PrivateGetOrdersResultSchema;
}
export interface PrivateGetOrdersResultSchema {
  orders: Orders;
  pagination: PaginationInfoSchema;
  subaccount_id: SubaccountId2;
}
export interface OrderResponseSchema {
  amount: Amount;
  average_price: AveragePrice;
  cancel_reason: CancelReason;
  creation_timestamp: CreationTimestamp;
  direction: Direction;
  filled_amount: FilledAmount;
  instrument_name: InstrumentName1;
  is_transfer: IsTransfer;
  label: Label1;
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
/**
 * Pagination info
 */
export interface PaginationInfoSchema {
  count: Count;
  num_pages: NumPages;
}
