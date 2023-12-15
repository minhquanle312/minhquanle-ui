import * as React from 'react';
import { render } from '@testing-library/react';

import { AlignSetting } from '..';

describe('<AlignSetting  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AlignSetting />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
