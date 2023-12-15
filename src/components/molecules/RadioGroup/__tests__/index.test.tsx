import * as React from 'react';
import { render } from '@testing-library/react';

import { RadioGroup } from '..';

describe('<RadioGroup  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RadioGroup />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
