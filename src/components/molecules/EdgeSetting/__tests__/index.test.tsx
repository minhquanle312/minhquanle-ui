import * as React from 'react';
import { render } from '@testing-library/react';

import { EdgeSetting } from '..';

describe('<EdgeSetting  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <EdgeSetting label="" values={['auto', 'auto', 'auto', 'auto']} />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
