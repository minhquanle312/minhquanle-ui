// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Spin } from '../Spin';

describe('Spin', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Spin />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('should render the Spin component when loading is false', () => {
    const { queryByTestId } = render(<Spin spinning={false} />);
    const spinElement = queryByTestId('spin-element');
    expect(spinElement).toBeNull();
  });
});
