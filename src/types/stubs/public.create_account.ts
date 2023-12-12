/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Create a new account
 */
export type PublicCreateAccount = PublicCreateAccountJSONRPCSchema;
export type Method = 'public/create_account';
/**
 * Ethereum wallet address
 */
export type Wallet = string;
/**
 * `created` or `exists`
 */
export type Status = string;
/**
 * Ethereum wallet address
 */
export type Wallet1 = string;

export interface PublicCreateAccountJSONRPCSchema {
  request: PublicCreateAccountRequestSchema;
  response: PublicCreateAccountResponseSchema;
}
export interface PublicCreateAccountRequestSchema {
  id?: string | number;
  method: Method;
  params: PublicCreateAccountParamsSchema;
}
export interface PublicCreateAccountParamsSchema {
  wallet: Wallet;
}
export interface PublicCreateAccountResponseSchema {
  id: string | number;
  result: PublicCreateAccountResultSchema;
}
export interface PublicCreateAccountResultSchema {
  status: Status;
  wallet: Wallet1;
}
