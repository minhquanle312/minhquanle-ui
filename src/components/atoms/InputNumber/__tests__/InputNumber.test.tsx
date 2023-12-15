// Libraries
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { InputNumber } from '../InputNumber';

describe('InputNumber', () => {
  it('renders a InputNumber component', () => {
    const { getByRole } = render(<InputNumber />);

    expect(getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should set the value when a number is entered', () => {
    const { getByRole } = render(<InputNumber />);
    const input = getByRole('spinbutton');

    fireEvent.change(input, { target: { value: 42 } });
    expect(input).toHaveValue('42');
  });
});
