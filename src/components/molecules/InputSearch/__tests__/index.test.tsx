import * as React from 'react';
import { render } from '@testing-library/react';

import { InputSearch } from '..';

describe('<InputSearch  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<InputSearch />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
