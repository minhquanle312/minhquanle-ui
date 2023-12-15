// Types
import { TData } from './types';

const GRAND_TOTAL_KEY = 'grand-total';

const TEST_DATA: TData = {
  versions: [
    {
      key: '20230621115346',
      name: '11:53:46 AM Jun 21, 2023',
    },
    {
      key: '20230621114632',
      name: '11:46:32 AM Jun 21, 2023',
    },
  ],
  rowDimension: [
    'Promising',
    'Lost Customer',
    'Champions',
    'Hibernating Customers',
    'Cannot Lose Them',
    'About To Sleep',
    'Loyal',
    'Potential Loyalists',
    'Need Attention',
    'New Customer',
    'At Risk',
  ],
  columnDimension: [
    'At Risk',
    'New Customer',
    'Need Attention',
    'Potential Loyalists',
    'Loyal',
    'About To Sleep',
    'Cannot Lose Them',
    'Hibernating Customers',
    'Champions',
    'Lost Customer',
    'Promising',
  ],
  dataRow: [
    [0, 0, 0, 0, 0, 45, 32, 0, 0, 0, 1821],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 876, 0],
    [0, 0, 0, 0, 21, 0, 0, 0, 835, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 673, 0, 49, 0],
    [0, 0, 0, 0, 0, 0, 624, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 400, 16, 23, 0, 0, 0],
    [0, 0, 0, 0, 143, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  totalRowDimension: [164, 445, 672, 696, 835, 925, 1821],
  totalColumnDimension: [1898, 876, 856, 722, 624, 439, 143],
  maxValue: 1821,
  metrics: [
    {
      name: 'customer_id',
      label: 'Num of customers',
      dataType: 'NUMBER',
      semantics: {
        conceptType: 'METRIC',
        semanticType: 'NUMBER',
      },
      aggregationType: 'count',
      filterAggregationType: 'count',
    },
  ],
  dimensions: [
    {
      name: 'personas',
      label: 'Personas name',
      dataType: 'STRING',
      semantics: {
        conceptType: 'DIMENSION',
        semanticType: 'STRING',
      },
      aggregationType: 'none',
      filterAggregationType: 'none',
    },
  ],
  showColumnTotal: true,
  showRowTotal: true,
};

export { TEST_DATA, GRAND_TOTAL_KEY };
