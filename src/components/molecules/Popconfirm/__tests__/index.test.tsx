// Libraries
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Components
import { Popconfirm } from '../Popconfirm';
import { Button } from '../../../atoms';

describe('<Popconfirm />', () => {
  it('should display a Popconfirm ', () => {
    render(
      <Popconfirm title="Are you sure?" okText="Yes" cancelText="No">
        <Button>Click me</Button>
      </Popconfirm>,
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });
  it('should not render Popconfirm when disabled', () => {
    render(
      <Popconfirm title="Are you sure?" okText="Yes" cancelText="No" disabled>
        <Button>Click me</Button>
      </Popconfirm>,
    );

    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });
  it('should close the Popconfirm when clicking outside', async () => {
    render(
      <div>
        <Popconfirm title="Are you sure?" okText="Yes" cancelText="No">
          <Button>Click me</Button>
        </Popconfirm>
      </div>,
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(screen.getByText('Are you sure?')).toBeInTheDocument();

    const outside = document.body;
    fireEvent.click(outside);

    await waitFor(() => {
      expect(document.querySelector('.ant-popover-hidden')).toBeInTheDocument();
    });
  });
  it('should match snapshot', () => {
    const loadingIndicator = render(<Popconfirm title="Are you sure?" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
