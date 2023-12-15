// Libraries
import React, { useMemo } from 'react';

// Organism
import { Table } from 'src/components/organism';

// Constants
import { TEST_DATA } from './constants';

// Types
import { ColumnsType } from 'antd/es/table';
import { BarCell } from './styled';
import { CustomCell } from './components/CustomCell/CustomCell';

interface CrossTabTableProps {}

const max = 77;

export const columns: ColumnsType<any> = [
  {
    title: 'Segment',
    key: 'segment',
    align: 'right',
    children: [
      {
        title: 'City ID',
        key: 'city_id',
        align: 'right',
        children: [
          {
            title: 'Country',
            key: 'country',
            align: 'right',
            children: [
              {
                title: 'Country Id',
                key: 'country_id',
                dataIndex: 'country_id',
              },
              {
                title: 'First user source',
                key: 'first_user_source',
                dataIndex: 'first_user_source',
                sorter: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Mobile Traffic',
    key: 'segment_mobile',
    children: [
      {
        title: '1028581',
        key: '1028581',
        children: [
          {
            title: 'Vietnam',
            children: [
              {
                title: 'Active Users',
                key: 'active_users_0',
                dataIndex: 'active_users_0',
                render: (value, record, index) => (
                  <CustomCell value={value} record={record} index={index} type="bar" max={77} />
                ),
              },
            ],
          },
        ],
      },
      {
        title: '1028580',
        key: '1028580',
        children: [
          {
            title: 'Vietnam',
            children: [
              {
                title: 'Active Users',
                key: 'active_users_1',
                dataIndex: 'active_users_1',
                render: (value, record, index) => (
                  <CustomCell value={value} record={record} index={index} type="bar" max={77} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Direct Traffic',
    key: 'segment_direct',
    children: [
      {
        title: '1028580',
        key: '1028580',
        children: [
          {
            title: 'Vietnam',
            children: [
              {
                title: 'Active Users',
                key: 'active_users_2',
                dataIndex: 'active_users_2',
                render: (value, record, index) => (
                  <CustomCell value={value} record={record} index={index} type="bar" max={77} />
                ),
              },
            ],
          },
        ],
      },
      {
        title: '1028581',
        key: '1028581',
        children: [
          {
            title: 'Vietnam',
            children: [
              {
                title: 'Active Users',
                key: 'active_users_3',
                dataIndex: 'active_users_3',
                render: (value, record, index) => (
                  <CustomCell value={value} record={record} index={index} type="bar" max={77} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Mobile Traffic',
    key: 'segment_mobile',
    children: [
      {
        title: '(not set)',
        key: '(not set)',
        children: [
          {
            title: 'Vietnam',
            children: [
              {
                title: 'Active Users',
                key: 'active_users_4',
                dataIndex: 'active_users_4',
                render: (value, record, index) => (
                  <CustomCell value={value} record={record} index={index} type="bar" max={77} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Totals',
    children: [
      {
        title: '',
        children: [
          {
            title: '',
            children: [
              {
                key: 'active_users_5',
                dataIndex: 'active_users_5',
                title: 'Active Users',
                sorter: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const data = [
  {
    key: '1',
    country_id: 'MN',
    first_user_source: 'google',
    active_users_0: 0,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 38,
  },
  {
    key: '2',
    country_id: 'GB',
    first_user_source: 'google',
    active_users_0: 0,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 40,
  },
  {
    key: '3',
    country_id: 'MY',
    first_user_source: 'google',
    active_users_0: 0,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 43,
  },
  {
    key: '3',
    country_id: 'NL',
    first_user_source: '(direct)',
    active_users_0: 0,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 43,
  },
  {
    key: '4',
    country_id: 'VN',
    first_user_source: 'aax.amazon-adsystem.com',
    active_users_0: 43,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 43,
  },
  {
    key: '5',
    country_id: '(not set)',
    first_user_source: 'KP_Paid_GG',
    active_users_0: 0,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 45,
  },
  {
    key: '6',
    country_id: 'EG',
    first_user_source: 'google',
    active_users_0: 0,
    active_users_1: 0,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 45,
  },
  {
    key: '7',
    country_id: 'VN',
    first_user_source: 'bing',
    active_users_0: 0,
    active_users_1: 45,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 45,
  },
  {
    key: '8',
    country_id: 'BD',
    first_user_source: 'google',
    active_users_0: 0,
    active_users_1: 60,
    active_users_2: 0,
    active_users_3: 0,
    active_users_4: 0,
    active_users_5: 49,
  },
];

export const CrossTabTable: React.FC<CrossTabTableProps> = props => {
  const { ...restProps } = props;

  // const columns: ColumnsType<any> = useMemo(() => {
  //   const { dimensions, colDimensions } = TEST_DATA[0];

  //   const refineColDimensions = colDimensions.map(key => ({ title: key, align: 'right' }));
  //   const refineDimensions = dimensions.map(key => ({ title: key, dataIndex: key, key }));

  //   const dimensionColumns: any = ([...refineColDimensions] as any).reduceRight(
  //     (acc, curr, index) => {
  //       if (index === refineColDimensions.length - 1) {
  //         return [
  //           {
  //             ...curr,
  //             children: refineDimensions,
  //           },
  //         ];
  //       }

  //       return [
  //         {
  //           ...curr,
  //           children: acc,
  //         },
  //       ];
  //     },
  //     [],
  //   );

  //   return [...dimensionColumns];
  // }, []);

  return <Table bordered columns={columns} dataSource={data} />;
};
