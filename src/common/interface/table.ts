export interface TableColumns<T> {
  id: string;
  title: string;
  dataIndex: keyof T;
  component?: any;
  render?: (r?: T) => string;
}

export type Columns<Record = unknown> = TableColumns<Record>[];
