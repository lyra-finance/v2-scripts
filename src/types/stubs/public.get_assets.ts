/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Get all assets for a given `currency` and `type`
 */
export type PublicGetAssets = PublicGetAssetsJSONRPCSchema;
export type Method = "public/get_assets";
/**
 * Asset type
 */
export type AssetType = "erc20" | "option" | "perp";
/**
 * Underlying currency of asset (`ETH`, `BTC`, etc)
 */
export type Currency = string;
/**
 * If `True`: include expired assets
 */
export type Expired = boolean;
/**
 * On-chain address of Asset.sol contract
 */
export type Address = string;
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
export type AssetType1 = "erc20" | "option" | "perp";
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
export type Decimals = number;
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
 * Max rate per hour as per `PerpAsset.sol`
 */
export type MaxRatePerHour = string;
/**
 * Min rate per hour as per `PerpAsset.sol`
 */
export type MinRatePerHour = string;
/**
 * Static interest rate as per `PerpAsset.sol`
 */
export type StaticInterestRate = string;
/**
 * SubId identifier used in Asset.sol
 */
export type SubId = string;
export type Result = AssetResponsePublicSchema[];

export interface PublicGetAssetsJSONRPCSchema {
  request: PublicGetAssetsRequestSchema;
  response: PublicGetAssetsResponseSchema;
}
export interface PublicGetAssetsRequestSchema {
  id?: string | number;
  method: Method;
  params: PublicGetAssetsParamsSchema;
}
export interface PublicGetAssetsParamsSchema {
  asset_type: AssetType;
  currency: Currency;
  expired: Expired;
}
export interface PublicGetAssetsResponseSchema {
  id: string | number;
  result: Result;
}
export interface AssetResponsePublicSchema {
  address: Address;
  asset_id: AssetId;
  asset_name: AssetName;
  asset_type: AssetType1;
  currency: Currency1;
  erc20_details: ERC20PublicDetailsSchema;
  is_collateral: IsCollateral;
  is_position: IsPosition;
  option_details: OptionPublicDetailsSchema;
  perp_details: PerpPublicDetailsSchema;
  sub_id: SubId;
}
/**
 * ERC20-specific details
 */
export interface ERC20PublicDetailsSchema {
  borrow_index?: BorrowIndex;
  decimals: Decimals;
  supply_index?: SupplyIndex;
}
/**
 * Option-specific details
 */
export interface OptionPublicDetailsSchema {
  expiry: Expiry;
  index: Index;
  option_type: OptionType;
  settlement_price?: SettlementPrice;
  strike: Strike;
}
/**
 * Perp-specific details
 */
export interface PerpPublicDetailsSchema {
  aggregate_funding: AggregateFunding;
  funding_rate: FundingRate;
  index: Index1;
  max_rate_per_hour: MaxRatePerHour;
  min_rate_per_hour: MinRatePerHour;
  static_interest_rate: StaticInterestRate;
}
