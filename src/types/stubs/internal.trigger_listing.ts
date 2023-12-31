/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Triggers a listing (For testing purposes)
 */
export type InternalTriggerListing = InternalTriggerListingJSONRPCSchema;
export type Method = 'internal/trigger_listing';
/**
 * True if success
 */
export type Status = boolean;

export interface InternalTriggerListingJSONRPCSchema {
  request: InternalTriggerListingRequestSchema;
  response: InternalTriggerListingResponseSchema;
}
export interface InternalTriggerListingRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalTriggerListingParamsSchema;
}
export interface InternalTriggerListingParamsSchema {}
export interface InternalTriggerListingResponseSchema {
  id: string | number;
  result: InternalTriggerListingResultSchema;
}
export interface InternalTriggerListingResultSchema {
  status: Status;
}
