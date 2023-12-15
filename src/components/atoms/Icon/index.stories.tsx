// Library
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import { Icon } from './index';
import { Space } from '../Space';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    size: {
      name: 'size',
      defaultValue: '30',
      description: 'The property controls the size of icon',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '30' },
      },
      control: {
        type: 'number',
      },
    },
    color: {
      name: 'color',
      defaultValue: undefined,
      description: 'The property controls the color of icon',
      table: {
        type: { summary: 'color' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    style: {
      name: 'style',
      defaultValue: undefined,
      description: 'The property controls the style css of icon',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'object',
      },
    },
    theme: {
      name: 'theme',
      defaultValue: undefined,
      description: 'The property controls the theme of icon',
      table: {
        type: { summary: '-' },
        defaultValue: { summary: undefined },
      },
      control: {
        type: 'object',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'The disabled property sets or returns whether a icon is disabled, or not',
      table: {
        type: { summary: 'true, false' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    className: {
      name: 'className',
      defaultValue: undefined,
      description: 'The className of Icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    type: {
      name: 'type',
      defaultValue: '',
      description: 'The type of Icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  size: 30,
};

Default.parameters = {
  docs: {
    description: {
      component:
        'Semantic vector graphics. Before use icons, you need to install @ant-design/icons package:\n The list of icons in link: https://sandbox-document.ants.vn/icons#/document\n ##### Example',
    },
  },
};

// Basic
export const Basic: ComponentStory<typeof Icon> = args => (
  <Space>
    <Icon size={40} />
    <Icon color="red" type="icon-ants-send" />
    <Icon size={60} color="blue" type="icon-ants-leapfrogging" />
    <Icon disabled type="icon-ants-warning-circle" />
    <Icon className="test-icon" type="icon-ants-flag" />
  </Space>
);

Basic.parameters = {
  docs: {
    description: {
      story:
        'Import icons from @ant-design/icons, component name of icons with different theme is the icon name suffixed by the theme name. Specify the spin property to show spinning animation.\n ##### Example',
    },
  },
};

// Customize style
export const CustomStyle: ComponentStory<typeof Icon> = args => (
  <Space>
    <Icon
      style={{ height: '100px', width: '100px', backgroundColor: 'yellow' }}
      type="icon-ants-check-small"
    />
    <Icon
      style={{ backgroundColor: 'white', color: 'red', fontSize: '40px' }}
      type="icon-ants-multi-monitor"
    />
  </Space>
);

CustomStyle.parameters = {
  docs: {
    description: {
      story: 'Style css of icons.\n ##### Example',
    },
  },
};
