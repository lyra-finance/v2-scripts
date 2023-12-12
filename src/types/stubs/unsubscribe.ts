/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unsubscribe from a list of channels, or all channels.
 */
export type Unsubscribe = UnsubscribeJSONRPCSchema;
export type Method = 'unsubscribe';
/**
 * A list of channels names to unsubscribe from.<br />If not provided, unsubscribe from all channels.
 */
export type Channels = Channels1[] | null;
export type Channels1 = string;
/**
 * The result of this method call, `ok` if successful
 */
export type Result = 'ok';

export interface UnsubscribeJSONRPCSchema {
  request: UnsubscribeRequestSchema;
  response: UnsubscribeResponseSchema;
}
export interface UnsubscribeRequestSchema {
  id?: string | number;
  method: Method;
  params: UnsubscribeParamsSchema;
}
export interface UnsubscribeParamsSchema {
  channels?: Channels;
}
export interface UnsubscribeResponseSchema {
  id: string | number;
  result: Result;
}
