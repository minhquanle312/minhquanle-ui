// Libraries
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
// Components
import { Switch } from '../Switch';

const SwitchComponent = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = value => {
    setChecked(value);
  };

  return (
    <div>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};
describe('Switch', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Switch />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('render component changes state on click', () => {
    const { getByRole } = render(<SwitchComponent />);
    const switchElement = getByRole('switch');

    expect(switchElement).not.toBeChecked();

    fireEvent.click(switchElement);

    expect(switchElement).toBeChecked();
  });

  it('callback on change when click', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Switch onChange={handleChange} />);
    const switchElement = getByRole('switch');

    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
