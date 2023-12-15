// Libraries
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Component
import { Table } from '../../organism';
import { Button, Space } from '../index';
import { message } from './Message';
// Constants
import { TABLE_API_COLUMNS } from 'src/constants/storybook';

export default {
  title: ' Atoms/Message',
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
          'Display global messages as feedback in response to user operations.' +
          '\n### When To Use' +
          '\n' +
          '- To provide feedback such as success, warning, error etc.' +
          '\n' +
          '- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
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

export const Basic = Template.bind({});

export const OtherTypesOfMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};

OtherTypesOfMessage.parameters = {
  docs: {
    description: {
      story: 'Messages of success, error and warning types.',
    },
  },
};

export const CustomizeDuration = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};

CustomizeDuration.parameters = {
  docs: {
    description: {
      story: 'Customize message display duration from default `3s` to `10s`.',
    },
  },
};

export const MessageWithLoadingIndicator = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    setTimeout(messageApi.destroy, 2500);
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display a loading indicator</Button>
    </>
  );
};

MessageWithLoadingIndicator.parameters = {
  docs: {
    description: {
      story: 'Display a global loading indicator, which is dismissed by itself asynchronously.',
    },
  },
};

export const CustomizedStyle = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized style</Button>
    </>
  );
};

CustomizedStyle.parameters = {
  docs: {
    description: {
      story: 'The `style` and `className `are available to customize Message.',
    },
  },
};

export const PromiseInterface = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished', 2.5));
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};

PromiseInterface.parameters = {
  docs: {
    description: {
      story:
        '`message` provides a promise interface for `onClose`. The above example will display a new message when the old message is about to close.',
    },
  },
};

export const UpdateMessageContent = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </>
  );
};

UpdateMessageContent.parameters = {
  docs: {
    description: {
      story: 'Update message content with unique `key`.',
    },
  },
};

export const StaticMethod = () => {
  const info = () => {
    message.info('This is a normal message');
  };
  return (
    <Button type="primary" onClick={info}>
      Static Method
    </Button>
  );
};

StaticMethod.parameters = {
  docs: {
    description: {
      story: 'Static methods cannot consume Context. Please use hooks first.',
    },
  },
};

export const API: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'content',
      description: `The content of the message	`,
      type: 'ReactNode | config ',
      default: '-',
    },
    {
      key: '2',
      property: 'duration',
      description: 'Time(seconds) before auto-dismiss, dont dismiss if set to 0',
      type: 'number',
      default: 1.5,
    },
    {
      key: '3 ',
      property: 'onClose',
      description: 'Specify a function that will be called when the message is closed',
      type: 'function',
      default: '-',
    },
    {
      key: '4 ',
      property: 'className',
      description: 'Customized CSS class	',
      type: 'string',
      default: '-',
    },
    {
      key: '5 ',
      property: 'content',
      description: 'The content of the message	',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '6',
      property: 'duration	',
      description: 'Time(seconds) before auto-dismiss, dont dismiss if set to 0	',
      type: 'number',
      default: 3,
    },
    {
      key: '7',
      property: 'icon',
      description: 'Customized Icon	',
      type: 'ReactNode',
      default: '-',
    },
    {
      key: '8',
      property: 'key',
      description: 'The unique identifier of the Message	',
      type: 'string | number	',
      default: '-',
    },
    {
      key: '9',
      property: 'style',
      description: 'Customized inline style	',
      type: 'CSSProperties',
      default: '-',
    },
    {
      key: '10',
      property: 'onClick',
      description: 'Specify a function that will be called when the message is clicked		',
      type: 'function',
      default: '-',
    },
    {
      key: '11',
      property: 'onClose',
      description: 'Specify a function that will be called when the message is closed		',
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
        '- `message.success(content, [duration], onClose)`' +
        '\n' +
        '- `message.error(content, [duration], onClose)`' +
        '\n' +
        '- `message.info(content, [duration], onClose)`' +
        '\n' +
        '- `message.warning(content, [duration], onClose)`' +
        '\n' +
        '- `message.loading(content, [duration], onClose)`' +
        '\n' +
        '\n' +
        '`afterClose` can be called in thenable interface:' +
        '\n' +
        '- `message[level](content, [duration]).then(afterClose)`' +
        '\n' +
        '- `message[level](content, [duration], onClose).then(afterClose)`' +
        '\n' +
        '\n' +
        'where `level` refers one static methods of message. The result of then method will be a Promis' +
        '\n' +
        '\n' +
        'Supports passing parameters wrapped in an object:' +
        '\n' +
        '\n' +
        '- `message.success(config)`' +
        '\n' +
        '- `message.error(config)`' +
        '\n' +
        '- `message.info(config)`' +
        '\n' +
        '- `message.warning(config)`' +
        '\n' +
        '- `message.loading(config)`' +
        '\n',
    },
    source: {
      code: null,
    },
  },
};

export const messageconfig: ComponentStory<any> = () => {
  const dataSources = [
    {
      key: '1',
      property: 'duration',
      description: `Time before auto-dismiss, in seconds		`,
      type: 'number ',
      default: '3',
    },
    {
      key: '2',
      property: 'getContainer',
      description: `Return the mount node for Message, but still display at fullScreen`,
      type: '() => HTMLElement	',
      default: '() => document.body	',
    },
    {
      key: '3',
      property: 'maxCount',
      description: `Max message show, drop oldest if exceed limit	`,
      type: 'number',
      default: '-	',
    },
    {
      key: '4',
      property: 'prefixCls',
      description: `The prefix className of message node		`,
      type: 'string',
      default: 'ant-message',
    },
  ];

  return <Table dataSource={dataSources} columns={TABLE_API_COLUMNS} pagination={false} />;
};

messageconfig.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
