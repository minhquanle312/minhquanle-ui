import * as React from 'react';
import { render } from '@testing-library/react';

import { RequiredLabel } from '..';

describe('<RequiredLabel  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RequiredLabel />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
