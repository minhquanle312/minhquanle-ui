export type TCellType = 'bar' | 'heat' | 'text';

export type TData = {
  versions: { key: string | number; name: string }[];
  rowDimension: string[];
  columnDimension: string[];
  dataRow: any[];
  totalRowDimension: number[];
  totalColumnDimension: number[];
  metrics: any[];
  dimensions: any[];
  showRowTotal?: boolean;
  showColumnTotal?: boolean;
  maxValue?: number;
};
