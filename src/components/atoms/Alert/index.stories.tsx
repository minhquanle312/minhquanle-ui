// Libraries
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import { Icon } from '../Icon';
import { Alert } from './index';
import { Button } from '../Button';
import { Space } from '../Space';

export default {
  title: 'Atoms/Alert',
  component: Alert,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'info',
      description: 'Type of Alert styles, options:',
      table: {
        type: { summary: 'success | info | warning | error' },
        defaultValue: { summary: 'info' },
      },
      options: ['success', 'info', 'warning', 'error'],
      control: {
        type: 'select',
      },
    },
    closable: {
      name: 'closable',
      defaultValue: false,
      description: 'Whether Alert can be closed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    closeText: {
      name: 'closeText',
      defaultValue: undefined,
      description: 'Close text to show',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: null,
      },
      control: {
        type: 'text',
      },
    },
    message: {
      name: 'message',
      defaultValue: 'Content Alert !!',
      description: 'Content of Alert',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: null,
      },
      control: {
        type: 'text',
      },
    },
    description: {
      name: 'description',
      defaultValue: 'Text field for alert !!!',
      description: 'Additional content of Alert',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: '',
      },
      control: {
        type: 'text',
      },
    },
    onClose: {
      name: 'onClose',
      defaultValue: undefined,
      description: 'Callback when Alert is closed',
      table: {
        type: { summary: '(e: MouseEvent) => void' },
        defaultvalue: null,
      },
      control: {
        type: 'null',
      },
    },
    afterClose: {
      name: 'afterClose',
      defaultvalue: null,
      description: 'Called when close animation is finished',
      table: {
        type: { summary: '() => void)' },
        defaultValue: null,
      },
      control: {
        type: 'null',
      },
    },
    showIcon: {
      name: 'showIcon',
      defaultValue: false,
      description: 'Whether to show icon',
      table: {
        type: { summary: 'boolean' },
        defaultvalue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    role: {
      name: 'role',
      defaultValue: undefined,
      description: '',
      table: {
        type: { summary: 'string' },
        defaultvalue: null,
      },
      control: {
        type: 'text',
      },
    },
    style: {
      name: 'style',
      defaultValue: undefined,
      description: 'Add style for elements',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: null,
      },
      control: { type: 'object' },
    },
    className: {
      name: 'className',
      defaultValue: undefined,
      description: 'Add class of libraries to style elements',
      table: {
        type: { summary: 'class' },
        defaultValue: null,
      },
      control: {
        type: 'text',
      },
    },
    banner: {
      name: 'banner',
      defaultValue: false,
      description: 'Whether to show as banner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      name: 'icon',
      defaultvalue: undefined,
      description: 'Custom icon, effective when showIcon is true',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: null,
      },
      control: {
        type: 'text',
      },
    },
    closeIcon: {
      name: 'closeIcon',
      defaultValue: undefined,
      description: 'Custom close icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '<CloseOutlined/>' },
      },
      control: {
        type: 'object',
      },
    },
    action: {
      name: 'action',
      defaultValue: undefined,
      description: 'The action of Alert',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: null,
      },
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Alert component for feedback.',
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => (
  <Alert {...args} icon={!!args.icon && <Icon type={args.icon.toString()} />} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Alert',
};

export const Types: ComponentStory<typeof Alert> = args => (
  <>
    <div>
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon closable />
      <Alert message="Warning" type="warning" showIcon closable />
      <Alert message="Error" type="error" showIcon />
    </div>
    <div className="ants-mt-3">
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
        closable
      />
      <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
  </>
);

Types.parameters = {
  docs: {
    description: {
      story: 'Some alert common',
    },
  },
};

Types.args = {
  children: 'Alert',
};

export const Customize: ComponentStory<typeof Alert> = args => (
  <>
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          UNDO
        </Button>
      }
      closable
    />
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <Alert
      message="Warning Text"
      type="warning"
      action={
        <Space>
          <Button size="small" type="ghost">
            Done
          </Button>
        </Space>
      }
      closable
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Accept
          </Button>
          <Button size="small" danger type="ghost">
            Decline
          </Button>
        </Space>
      }
      closable
    />
  </>
);
Customize.parameters = {
  docs: {
    description: {
      story: '**Custom action**',
    },
  },
};
Customize.args = {
  children: 'Alert',
};
