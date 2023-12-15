import * as React from 'react';
import { render } from '@testing-library/react';

import { ColorPicker } from '..';

describe('<ColorPicker  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ColorPicker />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
