import * as React from 'react';
import { render } from '@testing-library/react';

import CustomPicker from '../index';

describe('<CustomPicker  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CustomPicker />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
