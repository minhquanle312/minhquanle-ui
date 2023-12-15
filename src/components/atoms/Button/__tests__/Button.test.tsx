// Libraries
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Button } from '../Button';

describe('Button', () => {
  it('renders a Button Component', () => {
    const { getByRole } = render(<Button>Click me</Button>);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders a button with text', () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('renders a disabled button', () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('renders a primary button', () => {
    const { getByRole } = render(<Button type="primary">Click me</Button>);
    expect(getByRole('button')).toHaveClass('ant-btn-primary');
  });
});
