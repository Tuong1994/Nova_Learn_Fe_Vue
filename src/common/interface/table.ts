export interface TableColumns<T> {
  id: string;
  title: string;
  dataIndex: string;
  component?: any;
  render?: (r?: T, idx?: number) => string;
}

export type Columns<Record = unknown> = TableColumns<Record>[];
