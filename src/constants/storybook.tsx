import React from 'react';

export const TABLE_API_COLUMNS = [
  {
    title: 'Property',
    dataIndex: 'property',
    key: 'property',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: text => <a style={{ color: 'magenta' }}>{text}</a>,
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
  },
];
