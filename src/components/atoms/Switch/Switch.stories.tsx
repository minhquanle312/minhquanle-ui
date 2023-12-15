// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

// Components
import { Switch } from './Switch';
import { Button, Space } from '../index';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    autoFocus: {
      name: 'autoFocus',
      defaultValue: false,
      description: 'Whether get focus when component mounted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'checked',
      description: 'Determine whether the Switch is checked	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    checkedChildren: {
      name: 'checkedChildren',
      defaultValue: false,
      description: 'The content to be shown when the state is checked	',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    className: {
      name: 'className',
      defaultValue: false,
      description: 'The additional class to Switch	',
      table: {
        type: { summary: 'string' },
      },
      control: null,
    },
    defaultChecked: {
      name: 'defaultChecked',
      defaultValue: false,
      description: 'Whether to set the initial state	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Disable switch	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      defaultValue: false,
      description: 'Disable switch	',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'size',
      defaultValue: 'default',
      description: 'The size of the Switch, options: `default` `small`	',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'small'],
      },
    },
    unCheckedChildren: {
      name: 'unCheckedChildren',
      description: 'The content to be shown when the state is unchecked',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    onChange: {
      name: 'onChange',
      description: 'Trigger when the checked state is changing	',
      table: {
        type: { summary: 'function(checked: boolean, event: Event)	' },
      },
      control: null,
    },
    onClick: {
      name: 'onClick',
      description: 'Trigger when clicked	',
      table: {
        type: { summary: 'function(checked: boolean, event: Event)	' },
      },
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Switching Selector.' +
          '\n### When To Use' +
          '\n' +
          '- If you need to represent the switching between two states or on-off state.' +
          '\n' +
          '- The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation' +
          '\n',
      },
    },
  },
} as ComponentMeta<typeof Switch>;

// Default
const Template: ComponentStory<typeof Switch> = args => <Switch defaultChecked {...args} />;

export const Default = Template.bind({});

export const Disabled = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <Space direction="vertical">
      <Switch disabled={disabled} defaultChecked />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled state of `Switch`.',
    },
  },
};

export const TextIcon = () => (
  <Space direction="vertical">
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);

TextIcon.parameters = {
  docs: {
    description: {
      story: 'With text and icon.',
    },
  },
};

export const TwoSizes = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);

TwoSizes.parameters = {
  docs: {
    description: {
      story: '`size="small"` represents a small sized switch.',
    },
  },
};

export const Loading = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);

Loading.parameters = {
  docs: {
    description: {
      story: 'Mark a pending state of switch.',
    },
  },
};
