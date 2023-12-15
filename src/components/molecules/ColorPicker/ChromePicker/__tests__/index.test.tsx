import * as React from 'react';
import { render } from '@testing-library/react';

import { ChromePicker } from '..';

describe('<ChromePicker  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ChromePicker />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
