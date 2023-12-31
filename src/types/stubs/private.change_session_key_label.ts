/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PrivateChangeSessionKeyLabel = PrivateChangeSessionKeyLabelJSONRPCSchema;
export type Method = 'private/change_session_key_label';
export type Label = string;
export type Label1 = string;

export interface PrivateChangeSessionKeyLabelJSONRPCSchema {
  request: PrivateChangeSessionKeyLabelRequestSchema;
  response: PrivateChangeSessionKeyLabelResponseSchema;
}
export interface PrivateChangeSessionKeyLabelRequestSchema {
  id?: string | number;
  method: Method;
  params: PrivateChangeSessionKeyLabelParamsSchema;
}
export interface PrivateChangeSessionKeyLabelParamsSchema {
  label: Label;
}
export interface PrivateChangeSessionKeyLabelResponseSchema {
  id: string | number;
  result: PrivateChangeSessionKeyLabelResultSchema;
}
export interface PrivateChangeSessionKeyLabelResultSchema {
  label: Label1;
}
