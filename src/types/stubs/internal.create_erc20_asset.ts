/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Internal Admin RPC for creating a new ERC20 asset.
 */
export type InternalCreateErc20Asset = InternalCreateErc20AssetJSONRPCSchema;
export type Method = "internal/create_erc20_asset";
/**
 * On-chain address of Asset.sol contract
 */
export type Address = string;
/**
 * Underlying currency of asset (`ETH`, `BTC`, etc)
 */
export type Currency = string;
/**
 * Number of decimals of the on-chain ERC20 token
 */
export type Decimals = number;
/**
 * If `True`: this is a quote asset and risk manager will value it at $1
 */
export type IsQuote = boolean;
/**
 * On-chain address of Asset.sol contract
 */
export type Address1 = string;
/**
 * Asset ID of the created asset
 */
export type AssetId = string;
/**
 * Asset name
 */
export type AssetName = string;
/**
 * `erc20`, `option`, or `perp`
 */
export type AssetType = "erc20" | "option" | "perp";
/**
 * Underlying currency of asset (`ETH`, `BTC`, etc)
 */
export type Currency1 = string;
/**
 * Latest borrow index as per `CashAsset.sol` implementation
 */
export type BorrowIndex = string;
/**
 * Number of decimals of the underlying on-chain ERC20 token
 */
export type Decimals1 = number;
/**
 * If `True`: this is a quote asset and risk manager will value it at $1
 */
export type IsQuote1 = boolean;
/**
 * Latest supply index as per `CashAsset.sol` implementation
 */
export type SupplyIndex = string;
/**
 * If `True`: use as collateral in margin calculations
 */
export type IsCollateral = boolean;
/**
 * If `True`: treat as position in margin calculations
 */
export type IsPosition = boolean;
/**
 * Unix timestamp of expiry date (in seconds)
 */
export type Expiry = number;
/**
 * Underlying settlement price index
 */
export type Index = string;
export type OptionType = "C" | "P";
/**
 * Asset identifier for the settlement ERC20 asset
 */
export type SettlementAssetId = string;
/**
 * Settlement price of the option
 */
export type SettlementPrice = string | null;
export type Strike = string;
/**
 * Latest aggregated funding as per `PerpAsset.sol`
 */
export type AggregateFunding = string;
/**
 * Current hourly funding rate as per `PerpAsset.sol`
 */
export type FundingRate = string;
/**
 * Underlying spot price index for funding rate
 */
export type Index1 = string;
/**
 * If `True`: this is a virtual quote asset for internal accounting of perp PnL (default `False`)
 */
export type IsQuote2 = boolean;
/**
 * Max rate per hour as per `PerpAsset.sol`
 */
export type MaxRatePerHour = string;
/**
 * Min rate per hour as per `PerpAsset.sol`
 */
export type MinRatePerHour = string;
/**
 * Asset identifier for the perp quote asset.<br />Can only be None if `is_quote` is `True`.<br />Will be used by a pod to update the perp PnL from on-chain data.
 */
export type QuoteAssetId = string | null;
/**
 * Asset identifier for the settlement ERC20 asset.
 */
export type SettlementAssetId1 = string;
/**
 * Static interest rate as per `PerpAsset.sol`
 */
export type StaticInterestRate = string;
/**
 * SubId identifier used in Asset.sol
 */
export type SubId = string;

export interface InternalCreateErc20AssetJSONRPCSchema {
  request: InternalCreateErc20AssetRequestSchema;
  response: InternalCreateErc20AssetResponseSchema;
}
export interface InternalCreateErc20AssetRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalCreateErc20AssetParamsSchema;
}
export interface InternalCreateErc20AssetParamsSchema {
  address: Address;
  currency: Currency;
  decimals: Decimals;
  is_quote: IsQuote;
}
export interface InternalCreateErc20AssetResponseSchema {
  id: string | number;
  result: InternalCreateErc20AssetResultSchema;
}
export interface InternalCreateErc20AssetResultSchema {
  address: Address1;
  asset_id: AssetId;
  asset_name: AssetName;
  asset_type: AssetType;
  currency: Currency1;
  erc20_details: ERC20DetailsSchema;
  is_collateral: IsCollateral;
  is_position: IsPosition;
  option_details: OptionDetailsSchema;
  perp_details: PerpDetailsSchema;
  sub_id: SubId;
}
/**
 * ERC20-specific details
 */
export interface ERC20DetailsSchema {
  borrow_index?: BorrowIndex;
  decimals: Decimals1;
  is_quote: IsQuote1;
  supply_index?: SupplyIndex;
}
/**
 * Option-specific details
 */
export interface OptionDetailsSchema {
  expiry: Expiry;
  index: Index;
  option_type: OptionType;
  settlement_asset_id: SettlementAssetId;
  settlement_price?: SettlementPrice;
  strike: Strike;
}
/**
 * Perp-specific details
 */
export interface PerpDetailsSchema {
  aggregate_funding: AggregateFunding;
  funding_rate: FundingRate;
  index: Index1;
  is_quote?: IsQuote2;
  max_rate_per_hour: MaxRatePerHour;
  min_rate_per_hour: MinRatePerHour;
  quote_asset_id?: QuoteAssetId;
  settlement_asset_id: SettlementAssetId1;
  static_interest_rate: StaticInterestRate;
}
