import * as React from 'react';
import { render } from '@testing-library/react';

import { Slider } from '..';

describe('<Slider  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Slider />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
