/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Subscribe to a list of channels.
 */
export type Subscribe = SubscribeJSONRPCSchema;
export type Method = 'subscribe';
export type Channels1 = string;
/**
 * A list of channels names to subscribe to
 */
export type Channels = Channels1[];
export type Status1 = string;

export interface SubscribeJSONRPCSchema {
  request: SubscribeRequestSchema;
  response: SubscribeResponseSchema;
}
export interface SubscribeRequestSchema {
  id?: string | number;
  method: Method;
  params: SubscribeParamsSchema;
}
export interface SubscribeParamsSchema {
  channels: Channels;
}
export interface SubscribeResponseSchema {
  id: string | number;
  result: SubscribeResultSchema;
}
export interface SubscribeResultSchema {
  status: Status;
}
/**
 * A mapping of `channel`&nbsp;&#11106;&nbsp;`status`.<br />Successful subscriptions will have status `ok`.<br />Failed subscriptions will contain an error message.
 */
export interface Status {
  [k: string]: Status1;
}
