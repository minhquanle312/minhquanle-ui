// Libraries
import React from 'react';
import { render } from '@testing-library/react';
// Components
import { Result } from '../index';

describe('Skeleton', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Result status="success" title="Success" subTitle="Operation completed successfully." />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });

  it('renders with status, title, and subTitle', () => {
    const { getByText } = render(
      <Result status="success" title="Success" subTitle="Operation completed successfully." />,
    );

    expect(getByText('Success')).toBeInTheDocument();
    expect(getByText('Operation completed successfully.')).toBeInTheDocument();
  });
});
