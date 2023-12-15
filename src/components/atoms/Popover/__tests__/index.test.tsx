import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import { Popover } from '..';

describe('<Popover />', () => {
  it('renders without crashing', () => {
    render(<Popover />);
  });
  it('displays popover content when clicked', async () => {
    render(
      <Popover title="Click me" content="Popover Content">
        <button type="button">Click me</button>
      </Popover>,
    );

    const triggerElement = screen.getByText(/Click me/i);

    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();

    userEvent.click(triggerElement);

    const popoverContent = await screen.findByText('Popover Content');
    expect(popoverContent).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const loadingIndicator = render(<Popover />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
