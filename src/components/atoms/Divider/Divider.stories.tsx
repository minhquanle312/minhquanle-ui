/* eslint-disable no-console */
// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Divider } from './Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  argTypes: {
    children: {
      name: 'children',
      defaultValue: undefined,
      description: 'The wrapped title',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A divider line separates different content.',
      },
    },
  },
} as ComponentMeta<typeof Divider>;

// Variables

// Default
const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Horizontal: ComponentStory<any> = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);

Horizontal.parameters = {
  docs: {
    description: {
      story: 'Divider is horizontal by default. You can add text within Divider.',
    },
  },
};

export const TextWithoutHeadingStyle: ComponentStory<any> = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);

TextWithoutHeadingStyle.parameters = {
  docs: {
    description: {
      story: 'You can use non-heading style of divider text by setting plain.',
    },
  },
};

export const Vertical: ComponentStory<any> = () => (
  <>
    Text Vertical
    <Divider type="vertical" />
    <a href="#">Link 1 123</a>
    <Divider type="vertical" />
    <a href="#">Link 2 234312</a>
  </>
);

Vertical.parameters = {
  docs: {
    description: {
      story: 'Use `type="vertical"` make it vertical.',
    },
  },
};
