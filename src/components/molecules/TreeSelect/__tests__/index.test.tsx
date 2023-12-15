import React from 'react';
import { render } from '@testing-library/react';
import { TreeSelect } from '../index';

describe('<TreeSelect />', () => {
  it('renders TreeSelect with options', () => {
    const options = [
      { value: '1', title: 'Option 1' },
      { value: '2', title: 'Option 2', children: [{ value: '2-1', title: 'Option 2-1' }] },
    ];

    const { container } = render(<TreeSelect treeData={options} />);
    const treeSelect = container.querySelector('.ant-select');
    expect(treeSelect).toBeInTheDocument();
  });
});
