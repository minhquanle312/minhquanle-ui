// Libraries
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
// Components
import { Rate } from '../index';

describe('Rate', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Rate />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('render number of stars', () => {
    const { container } = render(<Rate count={5} />);
    const stars = container.querySelectorAll('.ant-rate-star');
    expect(stars.length).toBe(5);
  });
  it('show add ClassName value when clicked', () => {
    const handleOnChange = jest.fn();
    const { container, getAllByRole } = render(<Rate onChange={handleOnChange} />);
    const stars = container.querySelectorAll('.ant-rate-star');

    const firstStarEl = getAllByRole('radio')[2];

    if (firstStarEl) {
      fireEvent.click(firstStarEl);
    }
    // userEvent.click(container);

    expect(handleOnChange).toHaveBeenCalledTimes(1);

    for (let i = 0; i < 3; i++) {
      expect(stars[i]).toHaveClass('ant-rate-star-full');
    }
    for (let i = 3; i < stars.length; i++) {
      expect(stars[i]).toHaveClass('ant-rate-star-zero');
    }
  });
});
