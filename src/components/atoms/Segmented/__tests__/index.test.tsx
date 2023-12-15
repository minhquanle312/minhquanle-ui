import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

// Components
import { Segmented } from '../Segmented';

describe('<Segmented />', () => {
  it('renders without crashing', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    render(<Segmented options={options} />);
  });
  it('renders options correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const { getByText } = render(<Segmented options={options} value="Option 1" />);

    options.forEach(option => {
      const optionElement = getByText(option);
      expect(optionElement).toBeInTheDocument();
    });
  });
  it('calls onChange when option is clicked', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const handleChange = jest.fn();
    const { getByText } = render(
      <Segmented options={options} value="Option 1" onChange={handleChange} />,
    );

    const optionElement = getByText('Option 2');
    fireEvent.click(optionElement);

    expect(handleChange).toHaveBeenCalledWith('Option 2');
  });
  it('highlights the correct option', () => {
    const options = ['Option1', 'Option2', 'Option3'];
    const { getByText } = render(<Segmented options={options} value="Option2" />);

    const selectedOption = getByText('Option2');
    expect(selectedOption.parentElement).toHaveClass(
      'ant-segmented-item ant-segmented-item-selected',
    );
  });
});
