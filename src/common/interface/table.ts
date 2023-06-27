interface TableCellComponent {
  node: any;
  props?: any;
}

export interface TableColumn<T> {
  id: string;
  title: string;
  dataIndex: string;
  component?: (r?: T, idx?: number) => TableCellComponent;
  render?: (r?: T, idx?: number) => string;
}

export type Columns<Record = unknown> = TableColumn<Record>[];
