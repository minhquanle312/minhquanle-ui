// Libraries
import React from 'react';
import { render } from '@testing-library/react';
// Components
import { Skeleton } from '../index';

describe('Skeleton', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Skeleton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('render skeleton active', () => {
    const { container } = render(<Skeleton active />);
    expect(container.querySelector('.ant-skeleton-active')).toBeInTheDocument();
  });
});
