import * as React from 'react';
import { render } from '@testing-library/react';

import { InputNumber } from '../index';

describe('<InputNumber  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<InputNumber />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
