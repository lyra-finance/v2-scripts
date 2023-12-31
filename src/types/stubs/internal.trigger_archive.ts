/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Triggers an archive (For testing purposes)
 */
export type InternalTriggerArchive = InternalTriggerArchiveJSONRPCSchema;
export type Method = 'internal/trigger_archive';
/**
 * True if success
 */
export type Status = boolean;

export interface InternalTriggerArchiveJSONRPCSchema {
  request: InternalTriggerArchiveRequestSchema;
  response: InternalTriggerArchiveResponseSchema;
}
export interface InternalTriggerArchiveRequestSchema {
  id?: string | number;
  method: Method;
  params: InternalTriggerArchiveParamsSchema;
}
export interface InternalTriggerArchiveParamsSchema {}
export interface InternalTriggerArchiveResponseSchema {
  id: string | number;
  result: InternalTriggerArchiveResultSchema;
}
export interface InternalTriggerArchiveResultSchema {
  status: Status;
}
