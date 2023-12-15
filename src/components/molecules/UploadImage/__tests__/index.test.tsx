import * as React from 'react';
import { render } from '@testing-library/react';

import { UploadImage } from '..';

describe('<UploadImage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<UploadImage domainMedia="https://test.com" slug="api/v1" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
