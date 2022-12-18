import { CODE_TYPES } from "../constant/CODE_TYPES";
import { DATA_TYPES } from "../constant/DATA_TYPES";

export interface Dataset {
  name: string;
  id: string;
  limit: number;
  fields: DatasetField[];
}

export type FieldDataType =
  | CustomDataType
  | MixedDataType
  | SingleValueDataType
  | RefDataType;

export type CustomDataType = {
  type: DATA_TYPES.CUSTOM;
  code: string;
  codeType: CODE_TYPES;
};
export type MixedDataType = {
  type: DATA_TYPES.MIXED;
  object: DatasetField<SingleValueDataType>[];
};
export type SingleValueDataType = {
  type: DATA_TYPES.SINGLE_VALUE;
  fieldType: TypeSchema;
};
export type RefDataType = {
  type: DATA_TYPES.REF;
  ref: string;
  fieldRef: string;
};

export interface DatasetField<T = FieldDataType> {
  name: string;
  id: string;
  dataType: T;
  isPosibleNull: boolean;
  isArray: {
    min: number;
    max: number;
  } | null;
}

export type FieldArgument = string | number | Date | boolean | FieldArgument[];

export interface TypeSchema {
  parent: string;
  type: string;
  args: { [key: string]: FieldArgument };
}
