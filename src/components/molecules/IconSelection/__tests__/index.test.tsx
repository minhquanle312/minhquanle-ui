import * as React from 'react';
import { render } from '@testing-library/react';

import { IconSelection } from '..';

describe('<IconSelection  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<IconSelection />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
