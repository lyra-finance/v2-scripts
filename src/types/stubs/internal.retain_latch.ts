/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type InternalRetainLatch = InternalRetainLatchJSONRPCSchema;
export type Method = 'internal/retain_latch';
export type InstrumentName = string;
export type PodId = string;
export type ServiceType = string;
export type Status = string;

export interface InternalRetainLatchJSONRPCSchema {
  request: InternalRetainLatchRequestSchema;
  response: InternalRetainLatchResponseSchema;
}
export interface InternalRetainLatchRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalRetainLatchParamsSchema;
}
export interface InternalRetainLatchParamsSchema {
  instrument_name: InstrumentName;
  pod_id: PodId;
  service_type: ServiceType;
}
export interface InternalRetainLatchResponseSchema {
  id: string | number;
  result: InternalRetainLatchResultSchema;
}
export interface InternalRetainLatchResultSchema {
  status: Status;
}
