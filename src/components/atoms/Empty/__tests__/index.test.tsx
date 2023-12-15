// Libraries
import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Empty } from '../Empty';

describe('Empty', () => {
  it('should render empty components', () => {
    const { container } = render(<Empty />);
    expect(container).toBeInTheDocument();
  });

  it('render message in Empty components', () => {
    const { getByText } = render(<Empty />);
    const textElement = getByText('No data');
    expect(textElement).toBeInTheDocument();
  });

  it('render a custom empty message', () => {
    const customMessage = 'Custom Message';
    const { getByText } = render(<Empty description={customMessage} />);
    expect(getByText(customMessage)).toBeInTheDocument();
  });
});
