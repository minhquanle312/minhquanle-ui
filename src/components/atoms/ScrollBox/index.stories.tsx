// Libraries
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import { ScrollBox } from './index';

export default {
  title: 'Atoms/ScrollBox',
  component: ScrollBox,
  argTypes: {
    children: {
      name: 'children',
      defaultValue: undefined,
      description: '',
      table: {
        type: { summary: 'text' },
        defaultValue: null,
      },
      control: {
        type: 'text',
      },
    },
    height: {
      name: 'height',
      defaultValue: undefined,
      description: 'Height of content',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'number' },
      },
      control: {
        type: 'number',
      },
    },
    maxHeight: {
      name: 'maxHeight',
      defaultValue: undefined,
      description: 'Max height of content',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'number' },
      },
      control: {
        type: 'number',
      },
    },
    loadMore: {
      name: 'loadMore',
      defaultValue: undefined,
      description: '',
      table: {
        type: { summary: 'Function' },
        defaultValue: null,
      },
    },
    style: {
      name: 'style',
      defaultValue: undefined,
      description: 'Using for CSS content',
      table: {
        type: { summary: 'CSS' },
        defaultValue: null,
      },
      control: {
        type: 'object',
      },
    },
  },
} as ComponentMeta<typeof ScrollBox>;

const Template: ComponentStory<typeof ScrollBox> = args => <ScrollBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'ScrollBox',
};
