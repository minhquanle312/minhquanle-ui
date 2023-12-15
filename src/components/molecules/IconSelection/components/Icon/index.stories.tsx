import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconSelectionRenderer } from '.';
import { ICON_TYPE } from '../../constants';

export default {
  title: 'Molecules/IconSelection/IconSelectionRenderer',
  component: IconSelectionRenderer,
  argTypes: {},
  parameters: {},
} as ComponentMeta<typeof IconSelectionRenderer>;

const Template: ComponentStory<typeof IconSelectionRenderer> = args => (
  <IconSelectionRenderer {...args} />
);

export const MUIIcon = Template.bind({});

MUIIcon.args = {
  iconName: 'fact_check',
  iconType: ICON_TYPE.CUSTOM,
  fontSize: '40px',
};

export const FontawesomeIcon = Template.bind({});

FontawesomeIcon.args = {
  iconName: 'fas address-card',
  iconType: ICON_TYPE.FONT_AWESOME,
  fontSize: 40,
};
