import React from 'react';
import { render } from '@testing-library/react';

// Components
import { Watermark } from '../Watermark';

describe('Watermark ', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Watermark />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('renders the watermark text', () => {
    const childText = 'Hello, world!';
    const watermarkText = 'Antsomi';

    const { getByText } = render(
      <Watermark content={watermarkText}>
        <div>{childText}</div>
      </Watermark>,
    );

    const childElement = getByText(childText);

    expect(childElement).toBeInTheDocument();
  });
});
