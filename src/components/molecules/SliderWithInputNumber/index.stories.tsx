// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { SliderWithInputNumber } from './index';

export default {
  title: 'Molecules/SliderWithInputNumber',
  component: SliderWithInputNumber,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: undefined,
      description: 'Label of Slider block',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    precision: {
      name: 'Precision',
      defaultValue: 0,
      description: 'Precision of inputNumber',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'number',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: 0,
      description: 'Default value of Slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'number',
      },
    },
    value: {
      name: 'value',
      defaultValue: undefined,
      description: 'Value of Slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    min: {
      name: 'min',
      defaultValue: 0,
      description: 'Min of slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'number',
      },
    },
    max: {
      name: 'max',
      defaultValue: 100,
      description: 'Max of slider',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
      control: {
        type: 'number',
      },
    },
    onAfterChange: {
      name: 'onAfterChange',
      defaultValue: undefined,
      description: 'Fire when onmouseup is fired',
      table: {
        type: { summary: '(value) => void' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'null',
      },
    },
  },
} as ComponentMeta<typeof SliderWithInputNumber>;

const Template: ComponentStory<typeof SliderWithInputNumber> = args => (
  <SliderWithInputNumber {...args} />
);

export const Default = Template.bind({});
Default.args = {};
