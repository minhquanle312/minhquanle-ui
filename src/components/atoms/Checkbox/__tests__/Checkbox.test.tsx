// Libraries
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders a Checkbox Component', () => {
    const { getByTestId } = render(<Checkbox data-testid="checkbox">Checkbox</Checkbox>);

    expect(getByTestId('checkbox')).toBeInTheDocument();
  });

  it('should handle onChange event', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Checkbox data-testid="checkbox" onChange={onChange} />);
    const checkbox = getByTestId('checkbox');

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toHaveProperty('checked', true);

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(checkbox).toHaveProperty('checked', false);
  });

  it('should be checked by default if defaultChecked prop is true', () => {
    const { getByTestId } = render(<Checkbox data-testid="checkbox" defaultChecked />);
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toHaveProperty('checked', true);
  });

  it('should be disabled if disabled prop is true', () => {
    const { getByTestId } = render(<Checkbox data-testid="checkbox" disabled />);
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('should render label text if label prop is provided', () => {
    const labelText = 'Checkbox Label';
    const { getByText } = render(<Checkbox data-testid="checkbox">{labelText}</Checkbox>);
    expect(getByText(labelText)).toBeInTheDocument();
  });
});
