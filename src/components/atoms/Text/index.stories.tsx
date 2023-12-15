// Libraries
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from '../Divider';
import React from 'react';

// Components
import { Text } from './index';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'default',
      description: 'Change color element with types',
    },
    size: {
      name: 'size',
      defaultValue: 'small',
      description: 'Adjust size of element',
      table: {
        type: { summary: 'string|number' },
        defaultValue: { summary: '"small"' },
      },
      options: ['small', 'medium', 'large', 100],
      control: {
        type: 'radio',
      },
    },
    color: {
      name: 'color',
      defaultValue: undefined,
      description: 'Change color element from input<br/> **example:** "red", "blue", "#fff",etc. ',
      table: {
        type: { summary: 'string' },
        defaultValue: null,
      },
    },
    bold: {
      name: 'bold',
      defaultValue: false,
      description: 'Set bold for element',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `## When to use
          \n- Change color for element(with types/input).
          \n- Adjust size for element.
          \n- Bold for element.
          `,
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Testing Text',
};

export const Example: React.FC = () => (
  <>
    <div className="ants-mt-3" style={{ fontSize: 25 }}>
      <b>Type:</b>
    </div>
    <div className="ants-flex ants-justify-around">
      <Text type="default">
        <b>with default type</b>
      </Text>
      <Text type="error">
        <b>with error type</b>
      </Text>
      <Text type="warning">
        <b>with warning type</b>
      </Text>
      <Text type="disabled">
        <b>with disabled type</b>
      </Text>
      <Text type="secondary">
        <b>with secondary type</b>
      </Text>
    </div>

    <Divider />

    <div className="ants-mt-3" style={{ fontSize: 25 }}>
      <b>Size:</b>
    </div>
    <div className="ants-flex ants-justify-around ants-li">
      <Text>
        <b>Small Size</b>
      </Text>
      <Text size="medium">
        <b>Medium Size</b>
      </Text>
      <Text size="large">
        <b>Large Size</b>
      </Text>
      <Text size={30}>
        <b>Set size 30</b>
      </Text>
    </div>

    <Divider />

    <div className="ants-mt-3" style={{ fontSize: 25 }}>
      <b>Color:</b>
    </div>
    <div className="ants-flex ants-justify-around ants-li">
      <Text color="red">
        <b>Red Color</b>
      </Text>
      <Text color="blue">
        <b>Blue Color</b>
      </Text>
      <Text color="#47cc18">
        <b>#47cc18 Color</b>
      </Text>
      <Text color="#f32865">
        <b>#f32865 Color</b>
      </Text>
    </div>

    <Divider />

    <div className="ants-mt-3" style={{ fontSize: 25 }}>
      <b>Bold:</b>
    </div>
    <div className="ants-flex ants-justify-around ants-li">
      <Text bold>Text with bold</Text>
      <Text>Text without bold</Text>
    </div>
  </>
);
