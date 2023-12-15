// Libraries
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

// Components
import { Input } from '../Input';

describe('Input', () => {
  it('renders a Input Component', () => {
    const { getByTestId } = render(<Input data-testid="input" />);

    expect(getByTestId('input')).toBeInTheDocument();
  });

  test('renders input component with addon before', () => {
    const { getByText } = render(<Input addonBefore={<span>Username</span>} />);
    const addon = getByText('Username');
    expect(addon).toBeInTheDocument();
  });

  test('renders input component with addon after', () => {
    const { getByText } = render(<Input addonAfter={<span>@example.com</span>} />);
    const addon = getByText('@example.com');
    expect(addon).toBeInTheDocument();
  });

  it('should handle onChange event', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input data-testid="input" onChange={onChange} />);
    const valueTest = 'Hi nice to meet you';

    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: valueTest } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue(valueTest);
  });

  it('disables Input component', () => {
    const { getByTestId } = render(<Input data-testid="input" disabled />);

    const input = getByTestId('input');

    expect(input).toBeDisabled();
  });
});
