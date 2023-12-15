// Libraries
import React, { useMemo, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  SmileOutlined,
  BorderBottomOutlined,
  BorderTopOutlined,
} from '@ant-design/icons';

// Component
import { Table } from '../../organism';
import { Button, Space, Divider } from '../index';
import { notification } from './Notification';

// Constants
import { TABLE_API_COLUMNS } from 'src/constants/storybook';

export default {
  title: ' Atoms/Notification',
  argTypes: {
    align: {
      name: 'align',
      description: 'Vertical alignment',
      defaultValue: 'top',
      table: {
        type: {
          summary:
            'top | middle | bottom | stretch | {[key in `xs` | `sm` | `md` | `lg` | `xl` | `xxl`]: `top` | `middle` | `bottom` | `stretch`}',
        },
        defaultValue: { summary: 'top' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Display a notification message globally. ' +
          '\n### When To Use' +
          '\n' +
          'To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases' +
          '\n' +
          '- A notification with complex content.' +
          '\n' +
          '- A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.' +
          '\n' +
          '- A notification that is pushed by the application. ' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
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

export const Basic = Template.bind({});

const Context = React.createContext({ name: 'Default' });

export const HooksUsage = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};
HooksUsage.parameters = {
  docs: {
    description: {
      story:
        'Use `notification.useNotification` to get `contextHolder` with context accessible issue. Please note that, we recommend to use top level registration instead of `notification` static method, because static method cannot consume context, and ConfigProvider data will not work.',
    },
  },
};

export const DurationAfterNotificationIsClosed = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
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

DurationAfterNotificationIsClosed.parameters = {
  docs: {
    description: {
      story:
        'notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.',
    },
  },
};

export const NotificationWithIcon = () => {
  type NotificationType = 'success' | 'info' | 'warning' | 'error';
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};

NotificationWithIcon.parameters = {
  docs: {
    description: {
      story: 'A notification box with a icon at the left side.',
    },
  },
};

export const CustomCloseButton = () => {
  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
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

CustomCloseButton.parameters = {
  docs: {
    description: {
      story: 'To customize the style or font of the close button.',
    },
  },
};

export const CustomizedIcon = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
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

CustomizedIcon.parameters = {
  docs: {
    description: {
      story: 'The icon can be customized to any react node.',
    },
  },
};

export const CustomizedStyle = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
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

CustomizedStyle.parameters = {
  docs: {
    description: {
      story: 'The style and className are available to customize Notification. ',
    },
  },
};

export const Placement = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
          top
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottom')}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </>
  );
};

Placement.parameters = {
  docs: {
    description: {
      story:
        'A notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport via `placement`. ',
    },
  },
};

export const UpdateMessageContent = () => {
  const key = 'updatable';

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: 'Notification Title',
      description: 'description.',
    });

    setTimeout(() => {
      api.open({
        key,
        message: 'New Title',
        description: 'New description.',
      });
    }, 1000);
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

UpdateMessageContent.parameters = {
  docs: {
    description: {
      story: 'Update content with unique key.',
    },
  },
};

export const API: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'btn',
      description: `Customized close button	`,
      type: 'ReactNode   ',
      default: '-',
    },
    {
      key: '2',
      property: 'className',
      description: `Customized CSS class	`,
      type: 'string	',
      default: '-',
    },
    {
      key: '3',
      property: 'closeIcon',
      description: `Custom close icon	`,
      type: 'boolean | ReactNode	',
      default: 'true',
    },
    {
      key: '4',
      property: 'description',
      description: `The content of notification box (required)	`,
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '5',
      property: 'duration',
      description: `Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically	`,
      type: 'number',
      default: '4.5',
    },
    {
      key: '6',
      property: 'icon',
      description: `Customized icon	`,
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '7',
      property: 'key',
      description: `The unique identifier of the Notification	`,
      type: 'string',
      default: '-',
    },
    {
      key: '8',
      property: 'message',
      description: `The title of notification box (required)		`,
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '9',
      property: 'placement',
      description:
        'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
      type: 'string',
      default: 'top',
    },
    {
      key: '10',
      property: 'placement',
      description:
        'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
      type: 'string',
      default: 'top',
    },
    {
      key: '11',
      property: 'style',
      description: 'Customized inline style',
      type: 'CSSProperties',
      default: '-',
    },
    {
      key: '11',
      property: 'role',
      description:
        'The semantics of notification content recognized by screen readers. The default value is `alert`. When set as the default value, the screen reader will promptly interrupt any ongoing content reading and prioritize the notification content for immediate attention.	',
      type: 'alert | status	',
      default: 'alert',
    },
    {
      key: '12',
      property: 'onClick',
      description: 'Specify a function that will be called when the notification is clicked	',
      type: 'function',
      default: '-',
    },
    {
      key: '13',
      property: 'onClick',
      description: 'Trigger when notification closed	',
      type: 'function',
      default: '-',
    },
    {
      key: '14',
      property: 'props',
      description:
        'An object that can contain `data-*`, `aria-*`, or `role` props, to be put on the notification div. This currently only allows `data-testid` instead of `data-*` in TypeScript.',
      type: 'function',
      default: '-',
    },
  ];

  return <Table dataSource={dataSources} columns={TABLE_API_COLUMNS} pagination={false} />;
};

API.parameters = {
  docs: {
    description: {
      story:
        'This component provides some static methods, with usage and arguments as following:' +
        '\n' +
        '- `notification.success(config)`' +
        '\n' +
        '- `notification.error(config)`' +
        '\n' +
        '- `notification.info(config)`' +
        '\n' +
        '- `notification.warning(config)`' +
        '\n' +
        '- `notification.open(config)`' +
        '\n' +
        '- `notification.destroy(config)`' +
        '\n' +
        '- `notification.useNotification(config)`' +
        '\n',
    },
    source: {
      code: null,
    },
  },
};

export const NotificationConfig: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'bottom',
      description: `Distance from the bottom of the viewport, when placement is bottomRight or bottomLeft (unit: pixels)	`,
      type: 'number   ',
      default: '24',
    },
    {
      key: '2',
      property: 'closeIcon',
      description: `Custom close icon		`,
      type: 'boolean | ReactNode	',
      default: 'true',
    },
    {
      key: '3',
      property: 'getContainer',
      description: 'Return the mount node for Notification',
      type: '() => HTMLNode',
      default: '() => document.body',
    },
    {
      key: '4',
      property: 'placement',
      description:
        'Position of Notification, can be one of `topLeft` `topRight` `bottomLeft` `bottomRight`',
      type: 'boolean',
      default: 'false',
    },
    {
      key: '5',
      property: 'rtl',
      description: `Whether to enable RTL mode	`,
      type: 'number',
      default: '4.5',
    },
    {
      key: '6',
      property: 'top',
      description: `Distance from the top of the viewport, when placement is topRight or topLeft (unit: pixels)	`,
      type: 'number',
      default: '24',
    },
    {
      key: '7',
      property: 'maxCount',
      description: `Max Notification show, drop oldest if exceed limit	`,
      type: 'number',
      default: '-',
    },
  ];

  return <Table dataSource={dataSources} columns={TABLE_API_COLUMNS} pagination={false} />;
};

NotificationConfig.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
