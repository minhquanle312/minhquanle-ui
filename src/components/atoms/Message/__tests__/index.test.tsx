// Libraries
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

// Components
import { message } from '../index';
import { Button } from '../../index';

const MessageTest = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};

describe('Message', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MessageTest />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('should display normal message when button is clicked', async () => {
    const { getByText, getByRole } = render(<MessageTest />);

    fireEvent.click(getByRole('button'));

    await waitFor(() => {
      expect(getByText('Hello, Ant Design!')).toBeInTheDocument();
    });
  });
});
