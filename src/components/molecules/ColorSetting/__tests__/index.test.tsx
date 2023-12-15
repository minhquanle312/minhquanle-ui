import * as React from 'react';
import { render } from '@testing-library/react';

import { ColorSetting } from '..';

describe('<ColorSetting  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ColorSetting label="test" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
