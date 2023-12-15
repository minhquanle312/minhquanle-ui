import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Components
import { notification } from '../Notification';
import { Button } from '../../index';

const NotificationTest = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description: 'I will  close automatically after 1s.',
      duration: 1,
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};

describe('Notification', () => {
  it('should match snapshot', () => {
    const notificationComponent = render(<NotificationTest />);
    expect(notificationComponent.container.firstChild).toMatchSnapshot();
  });

  it('should open notification when button is clicked', async () => {
    const { getByText } = render(<NotificationTest />);

    fireEvent.click(getByText('Open the notification box'));

    await waitFor(() => {
      expect(getByText('Notification Title')).toBeInTheDocument();
      expect(getByText('I will close automatically after 1s.')).toBeInTheDocument();
    });
  });
});
