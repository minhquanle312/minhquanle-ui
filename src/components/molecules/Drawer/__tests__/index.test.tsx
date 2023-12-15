// Libraries
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Drawer } from 'antd';
import { Button } from '../../../atoms';

const TestDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some</p>
        <p>Some</p>
        <p>Some</p>
      </Drawer>
    </>
  );
};

describe('<Drawer />', () => {
  it('renders Default Drawer Component', async () => {
    render(<TestDrawer />);

    const openButton = screen.getByText('Open');
    expect(openButton).toBeInTheDocument();

    fireEvent.click(openButton);

    const drawerTitle = await screen.getByText('Basic Drawer');
    expect(drawerTitle).toBeInTheDocument();

    const drawerContent = await screen.findAllByText('Some');
    expect(drawerContent.length).toBe(3);
  });
  it('closes the drawer when clicking button', async () => {
    render(<TestDrawer />);

    const openButton = screen.getByText('Open');
    fireEvent.click(openButton);

    const drawerTitle = screen.queryByText('Basic Drawer');
    expect(drawerTitle).not.toBeEmptyDOMElement();
  });
  it('should match snapshot', () => {
    const loadingIndicator = render(<TestDrawer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
