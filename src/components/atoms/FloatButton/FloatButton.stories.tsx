// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuestionCircleOutlined } from '@ant-design/icons';

// Components
import { FloatButton } from './FloatButton';

export default {
  title: 'Atoms/FloatButton',
  component: FloatButton,
  argTypes: {
    icon: {
      name: 'icon',
      defaultValue: undefined,
      description: 'Set the icon component of button',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    description: {
      name: 'description',
      description: 'Option to fit button width to its parent width',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: null,
    },
    tooltip: {
      name: 'tooltip',
      description: 'The text shown in the tooltip	',
      table: {
        type: { summary: 'ReactNode | () => ReactNode' },
      },
      control: null,
    },
    type: {
      name: 'type',
      description: 'Setting button type		',
      table: {
        type: { summary: 'default | primary' },
      },
      control: {
        type: 'select',
        options: ['default', 'primary'],
      },
    },
    shape: {
      name: 'shape',
      description: 'Setting button shape',
      table: {
        type: { summary: 'circle | square' },
      },
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof FloatButton>;

// Default
const Template: ComponentStory<typeof FloatButton> = args => <FloatButton {...args} />;

export const Default = Template.bind({});

export const Type = () => (
  <>
    <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 24 }} />
    <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 94 }} />
  </>
);
