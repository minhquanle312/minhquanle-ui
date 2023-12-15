// React
import React from 'react';

// Types
import { ColumnsType } from 'antd/es/table';
import { TData } from './types';

// Components
import { CustomCell } from './components/CustomCell';
import { get } from 'lodash';

// Utils
import { handleError } from 'src/utils';
import { GRAND_TOTAL_KEY } from './constants';

const PATH = 'src/components/organism/Table/ExploreTable/utils.tsx';

export const buildColumns = (data: TData) => {
  const {
    columnDimension,
    rowDimension,
    dataRow,
    maxValue,
    metrics,
    dimensions,
    versions,
    showColumnTotal,
  } = data;
  const dimension = dimensions[0];
  const metric = metrics[0];

  const columns: ColumnsType<any> = [];

  if (dimension && metric) {
    // Check is it contains 2 versions and has columnDimension
    if (Array.isArray(columnDimension) && columnDimension.length && versions.length > 1) {
      // Create first column with dimension name
      const secondVersion = versions[1] || {};

      columns.push({
        title: ' ',
        children: [
          {
            title: secondVersion.name,
            dataIndex: dimension.name,
            key: dimension.name,
            fixed: 'left',
            ellipsis: true,
            width: 150,
            render: (value, record) =>
              record.key === GRAND_TOTAL_KEY ? <strong>{value}</strong> : value,
          },
        ],
      });

      columnDimension.forEach(column => {
        columns.push({
          title: column,
          align: 'right',
          ellipsis: true,
          children: [
            {
              title: metric.label,
              dataIndex: `${column}-${metric.name}`,
              key: `${column}-${metric.name}`,
              align: 'right',
              ellipsis: true,
              width: 120,
              render: (value, record, index) => (
                <CustomCell
                  value={value}
                  record={record}
                  index={index}
                  type="heat"
                  max={maxValue}
                />
              ),
            },
          ],
        });
      });

      if (showColumnTotal) {
        columns.push({
          title: <strong>Grand total</strong>,
          align: 'right',
          children: [
            {
              title: <strong>{metric.label}</strong>,
              dataIndex: `${GRAND_TOTAL_KEY}-${metric.name}`,
              key: `${GRAND_TOTAL_KEY}-${metric.name}`,
              fixed: 'right',
              align: 'right',
              ellipsis: true,
              width: 150,
              render: value => <strong>{value}</strong>,
            },
          ],
        });
      }
    } else {
      const firstVersion = versions[0] || {};

      columns.push({
        title: dimension.label,
        dataIndex: dimension.name,
        key: dimension.name,
        ellipsis: true,
        width: 150,
        render: (value, record) =>
          record.key === GRAND_TOTAL_KEY ? <strong>{value}</strong> : value,
      });

      if (firstVersion) {
        columns.push({
          title: <strong>{`${firstVersion.name} / ${metric.label}`}</strong>,
          dataIndex: metric.name,
          key: metric.name,
          ellipsis: true,
          align: 'right',
          render: (value, record, index) => (
            <CustomCell value={value} record={record} index={index} type="heat" max={maxValue} />
          ),
        });
      }
    }
  }

  return columns;
};

export const buildDataSource = (data: TData) => {
  try {
    const {
      columnDimension,
      rowDimension,
      dataRow,
      metrics,
      dimensions,
      versions,
      showColumnTotal,
      showRowTotal,
      totalColumnDimension,
      totalRowDimension,
    } = data;
    const dimension = dimensions[0];
    const metric = metrics[0];
    const dataSource: any[] = [];

    if (dimension && metric && Array.isArray(dataRow)) {
      // Check is it contains 2 versions and has columnDimension
      if (Array.isArray(columnDimension) && columnDimension.length && versions.length > 1) {
        rowDimension.forEach((row, rowIndex) => {
          const dimensionObjectValue = {};

          columnDimension.forEach((col, colIndex) => {
            dimensionObjectValue[`${col}-${metric.name}`] = get(
              dataRow,
              `[${rowIndex}][${colIndex}]`,
              0,
            );
          });

          if (showColumnTotal) {
            dimensionObjectValue[`${GRAND_TOTAL_KEY}-${metric.name}`] = get(
              totalColumnDimension,
              `[${rowIndex}]`,
              0,
            ).toLocaleString();
          }

          dataSource.push({
            key: rowIndex,
            [dimension.name]: row,
            ...dimensionObjectValue,
          });
        });

        if (showRowTotal) {
          const totalObjectValue = {};

          columnDimension.forEach((col, colIndex) => {
            totalObjectValue[`${col}-${metric.name}`] = get(
              totalRowDimension,
              `[${colIndex}]`,
              0,
            ).toLocaleString();
          });

          if (showColumnTotal) {
            totalObjectValue[`${GRAND_TOTAL_KEY}-${metric.name}`] = columnDimension
              .reduce((acc, _curr, index) => acc + (Number(totalRowDimension[index]) || 0), 0)
              .toLocaleString();
          }

          dataSource.push({
            key: `${GRAND_TOTAL_KEY}`,
            [dimension.name]: 'Grand total',
            ...totalObjectValue,
          });
        }
      } else {
        dataRow.forEach((row, rowIndex) => {
          dataSource.push({
            key: rowIndex,
            [dimension.name]: rowDimension[rowIndex],
            [metric.name]: row,
          });
        });

        if (showRowTotal) {
          dataSource.push({
            key: GRAND_TOTAL_KEY,
            [dimension.name]: 'Grand total',
            [metric.name]: dataRow.reduce((acc, curr) => acc + curr, 0),
          });
        }
      }
    }

    return dataSource;
  } catch (error) {
    handleError(error, {
      path: PATH,
      name: '',
      args: {},
    });

    return [];
  }
};
