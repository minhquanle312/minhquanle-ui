/* eslint-disable no-console */
// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { DatePicker } from './DatePicker';

export default {
  title: 'Molecules/DatePicker/DatePicker',
  component: DatePicker,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'To select or input a date.',
      },
    },
  },
} as ComponentMeta<typeof DatePicker>;

// Default
const Template: ComponentStory<typeof DatePicker> = args => <DatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
