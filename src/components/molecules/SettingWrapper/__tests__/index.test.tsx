import * as React from 'react';
import { render } from '@testing-library/react';

import { SettingWrapper } from '..';

describe('<SettingWrapper  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SettingWrapper label="test label" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
