/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type InternalOrderRisk = InternalOrderRiskJSONRPCSchema;
export type Method = 'internal/order_risk';
/**
 * Order amount in units of the base
 */
export type Amount = string;
/**
 * Order direction
 */
export type Direction = 'buy' | 'sell';
/**
 * Instrument name
 */
export type InstrumentName = string;
/**
 * Optional user-defined label for the order
 */
export type Label = string;
/**
 * Limit price in quote currency.<br />This field is still required for market orders because it is a component of the signature. However, market orders will not leave a resting order in the book in case of a partial fill.
 */
export type LimitPrice = string;
/**
 * Max fee in units of the quote currency. Order will be rejected if the supplied max fee is below the estimated fee for this order.
 */
export type MaxFee = string;
/**
 * Whether the order is tagged for market maker protections (default false)
 */
export type Mmp = boolean;
/**
 * Unique nonce defined as <UTC_timestamp in ms><random_number_up_to_6_digits> (e.g. 1695836058725001, where 001 is the random number)
 */
export type Nonce = number;
/**
 * Order type:<br />- `limit`: limit order (default)<br />- `market`: market order, note that limit_price is still required for market orders, but unfilled order portion will be marked as cancelled
 */
export type OrderType = 'limit' | 'market';
/**
 * If true, the order will not be able to increase position's size (default false). If the order amount exceeds available position size, the order will be filled up to the position size and the remainder will be cancelled. This flag is only supported for market orders or non-resting limit orders (IOC or FOK)
 */
export type ReduceOnly = boolean;
/**
 * Optional referral code for the order
 */
export type ReferralCode = string;
/**
 * UTC timestamp in ms, if provided the matching engine will reject the order with an error if `reject_timestamp` < `server_time`. Note that the timestamp must be consistent with the server time: use `public/get_time` method to obtain current server time.
 */
export type RejectTimestamp = number;
/**
 * Etherium signature of the order
 */
export type Signature = string;
/**
 * Unix timestamp in seconds. Order signature becomes invalid after this time, and the system will cancel the order.Expiry MUST be at least 5 min from now.
 */
export type SignatureExpirySec = number;
/**
 * Owner wallet address or registered session key that signed order
 */
export type Signer = string;
/**
 * Subaccount ID
 */
export type SubaccountId = number;
/**
 * Time in force behaviour:<br />- `gtc`: good til cancelled (default)<br />- `post_only`: a limit order that will be rejected if it crosses any order in the book, i.e. acts as a taker order<br />- `fok`: fill or kill, will be rejected if it is not fully filled<br />- `ioc`: immediate or cancel, fill at best bid/ask (market) or at limit price (limit), the unfilled portion is cancelled<br />Note that the order will still expire on the `signature_expiry_sec` timestamp.
 */
export type TimeInForce = 'gtc' | 'post_only' | 'fok' | 'ioc';
export type BalanceNonce = number;
export type Code = number;
export type Data = string | null;
export type Message = string;
export type IsValid = boolean;
export type SubaccountId1 = number;
export type UpdateHash = string;
export type ValuationTimestamp = number;

export interface InternalOrderRiskJSONRPCSchema {
  request: InternalOrderRiskRequestSchema;
  response: InternalOrderRiskResponseSchema;
}
export interface InternalOrderRiskRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalOrderRiskParamsSchema;
}
export interface InternalOrderRiskParamsSchema {
  amount: Amount;
  direction: Direction;
  instrument_name: InstrumentName;
  label?: Label;
  limit_price: LimitPrice;
  max_fee: MaxFee;
  mmp?: Mmp;
  nonce: Nonce;
  order_type?: OrderType;
  reduce_only?: ReduceOnly;
  referral_code?: ReferralCode;
  reject_timestamp?: RejectTimestamp;
  signature: Signature;
  signature_expiry_sec: SignatureExpirySec;
  signer: Signer;
  subaccount_id: SubaccountId;
  time_in_force?: TimeInForce;
}
export interface InternalOrderRiskResponseSchema {
  id: string | number;
  result: InternalOrderRiskResultSchema;
}
export interface InternalOrderRiskResultSchema {
  balance_nonce: BalanceNonce;
  caught_error?: RPCErrorFormatSchema;
  is_valid: IsValid;
  subaccount_id: SubaccountId1;
  update_hash: UpdateHash;
  valuation_timestamp: ValuationTimestamp;
}
/**
 * Error if `is_valid` is `False`
 */
export interface RPCErrorFormatSchema {
  code: Code;
  data?: Data;
  message: Message;
}
