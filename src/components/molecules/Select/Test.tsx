import React from 'react';
import { Select } from './index';

const options = [
  {
    value: '1',
    label: 'Item 1',
  },
  {
    value: '2',
    label: 'Item 2',
  },
  {
    value: '3',
    label: 'Item 3',
  },
  {
    value: '4',
    label: 'Item 4',
  },
];

const SelectTest = () => <Select options={options} />;

export default SelectTest;
