/* eslint-disable no-console */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconSelection } from './index';
import { ICON_TYPE } from './constants';

export default {
  title: 'Molecules/IconSelection',
  component: IconSelection,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof IconSelection>;

const Template: ComponentStory<typeof IconSelection> = args => <IconSelection {...args} />;

export const Default = Template.bind({});

Default.args = {
  onChange: icon => console.log(icon),
  style: {
    maxWidth: '400px',
  },
};

export const SelectedIcon = Template.bind({});

SelectedIcon.args = {
  iconTypes: [ICON_TYPE.FONT_AWESOME, ICON_TYPE.CUSTOM],
  icon: 'cus local_mall',
};

export const SelectedWithoutIcontypePrefix = Template.bind({});

SelectedWithoutIcontypePrefix.args = {
  icon: 'fas address-book',
};

export const AddOtherIconType = Template.bind({});

AddOtherIconType.args = {
  icon: 'cus interactive',
  iconTypes: [ICON_TYPE.FONT_AWESOME, ICON_TYPE.CUSTOM],
};
