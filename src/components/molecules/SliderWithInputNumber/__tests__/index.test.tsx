import * as React from 'react';
import { render } from '@testing-library/react';

import { SliderWithInputNumber } from '..';

describe('<SliderWithInputNumber  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SliderWithInputNumber />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
